import { createStore } from 'vuex'

// const API_URL = process.env.BACKEND_URL;
const API_URL = 'http://localhost:8080';

export default createStore({
  state: {
    showCase: [],
    cart: [],
    filterString: "",
    findId: ""
  },
  getters:{
    getShowCase(state){
      let array = [...state.showCase];
      let currentIndex = array.length,  randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      if(state.filterString.length == 0){
        return [...array]
      }

      const reg = new RegExp(state.filterString, 'gi');

      return state.showCase.filter((good)=> reg.test(good.product_name));
    },
    getGoodById(state){
      return state.showCase.filter((good)=> good.id_product == state.findId);
    },
    getCart(state){
      return [...state.cart];
    },
    getSearchString(state){
      return state.filterString;
    },
    getfindId(state){
      return state.findId;
    }
  },
  mutations: {
    setFilter(state, payload){
      state.filterString = payload;
    },
    setfindId(state, payload){
      state.findId = payload;
    },
    addShowCase(state, payload){
      state.showCase = [...payload];
    },
    addCart(state, payload){
      state.cart = [...payload];
    },
    clearCart(state){
      state.cart = [];
    },
    addToCart(state, payload){
      let index = state.cart.findIndex((item) => item.id_product == payload.id_product);
      let newQuantity = 1;
      if(payload.quantity){
        newQuantity = payload.quantity
      }
      if (index != -1) {
        if(payload.mode){
          state.cart[index].quantity = newQuantity;
        }else{
          state.cart[index].quantity = state.cart[index].quantity + newQuantity;
        }
      }else{
          payload.quantity = newQuantity;
          state.cart.push(payload);
      }
    },
    removeFromCart(state, id){
      let index = state.cart.findIndex((good) => id == good.id_product);
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }else{
        state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    fetchShowCase({commit}){
      return fetch(`${API_URL}/catalog`)
      .then((response)=>response.json())
      .then((data)=>{
        commit('addShowCase', data);
      })
    },
    fetchCart({commit}){
      return fetch(`${API_URL}/cart`)
      .then((response)=>response.json())
      .then((data)=>{
        commit('addCart', data);
      })
    },
    addToCart({commit}, good){
      return fetch(`${API_URL}/cart`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(good)
      })
      .then((response)=>{
        if(response.status == 200){
          commit('addToCart', good);
        }
      })

    },
    deleteFromeCart({commit}, id){
      return fetch(`${API_URL}/cart/${id}`,{
        method: 'DELETE'
      })
      .then((response)=>{
        if(response.status == 200){
          commit('removeFromCart', id);
        }
      })
    },
    clearCart({commit}){
      return fetch(`${API_URL}/cart`,{
        method: 'DELETE'
      })
      .then((response)=>{
        if(response.status == 200){
          commit('clearCart');
        }
      })
    }
  },
  modules: {
  }
})
