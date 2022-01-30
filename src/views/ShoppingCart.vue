<template>
    <main class="wrapper">
      <div class="wrapper__top">
        <Header />
        <Nav />
        <Breadcrumbs v-bind:link="'cart'"/>
            <section v-if="cartList.length>0" class="container shopping__cart">
                <form action="#" method="post" class="shopping__cart__form" v-on:submit.prevent="onSubmit">
                    <div class="shopping__cart__form__box">
                        <div class="shopping__cart__form__product header">
                            <div class="form__product__item first__column">Product Details</div>
                            <div class="form__product__item">unite Price</div>
                            <div class="form__product__item">Quantity</div>
                            <div class="form__product__item">shipping</div>
                            <div class="form__product__item">Subtotal</div>
                            <div class="form__product__item">ACTION</div>
                        </div>
                        <div class="shopping__cart__form__box__input">
                            <CardToShoppingCart v-for="good of cartList" 
                                v-bind:key="good.id" 
                                v-bind:data="good"/>
                        </div>
                    </div>
                    <div class="shopping__cart__form__box middle">
                        <a v-on:click="clearCart" href="#" class="button button__to__cart">CLEAR SHOPPING CART</a>
                        <a href="#" class="button button__to__cart">CONTINUE SHOPPING</a>
                    </div>
                    <div class="shopping__cart__form__box">
                        <div class="shopping__cart__form__box__item">
                            <h3 class="shopping__cart__form__title">Shipping Address</h3>
                            <select name="shipping_country" id="shipping_country">
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Russia">Russia</option>
                            </select>
                            <input type="text" placeholder="State">
                            <input type="text" name="shipping_postcode" placeholder="Postcode/Zip" maxlength="6">
                            <a href="#" class="button button__to__cart">get a quote</a>
                        </div>
                        <div class="shopping__cart__form__box__item">
                            <h3 class="shopping__cart__form__title">coupon discount</h3>
                            <label for="shipping_coupon" >Enter your coupon code if you have
                                one</label>
                            <input type="text" id="shipping_coupon">
                            <a href="#" class="button button__to__cart">Apply coupon</a>
                        </div>
                        <div class="shopping__cart__form__box__item checkout">
                            <div class="form__sub__total">SUB TOTAL $<span id="form__sub__total">{{goodSum + shipPrice}}</span></div>
                            <div class="form__grand__total">GRAND TOTAL <span class="pink__letter">$<span
                                        id="form__grand__total">{{goodSum}}</span></span></div>
                            <button type="submit" class="button">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </form>
            </section>
            <section v-else class="container shopping__cart">
                <p>Empty Cart</p>
            </section>
            <Subscribe />
      </div>
      <div class="wrapper__bottom">
        <Footer />
      </div>
    </main>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'
  import Search from '@/components/Search.vue'
  import ShowCase from '@/components/ShowCase.vue'
  import Breadcrumbs from '@/components/Breadcrumbs.vue'
  import Subscribe from '@/components/Subscribe.vue'
  import CardToShoppingCart from '@/components/CardToShoppingCart.vue'

  export default {
    name: 'ShoppingCart',
    data() {
        return {
            shipPrice: 0
        }
    },
    components: {
      Search,
      ShowCase,
      Header,
      Footer,
      Nav,
      Breadcrumbs,
      Subscribe,
      CardToShoppingCart
    },
    computed: {
      cartList() {
        return this.$store.getters.getCart;
      },
        goodSum () {
        let goodArr = this.$store.getters.getCart;
        let sum = 0;
        goodArr.forEach((good) => {
            sum += (good.quantity * good.price);
        })
        return sum;
        }
    },
    methods: {
        clearCart(){
            this.$store.dispatch('clearCart')
        },
        onSubmit(data){
            console.log(data)
        }
    }
  }
</script>