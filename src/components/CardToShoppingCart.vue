<template>
<div class="shopping__cart__form__product">
    <router-link :to="{ name: 'SinglePage', params:{id: data.id_product, data: data}}"  class="form__product__item first__column">
        <img  :src="require(`@/assets/img/items/${data.product_img}`)" alt="product"
            class="items__card__img form__product__img">
        <div class="form__product__info">
            <h4 class="h4">Mango People T-shirt</h4>
            <div class="product__cart__rate">
                <span class="fill_rate">☆</span>
                <span class="fill_rate active">☆</span>
                <span class="fill_rate active">☆</span>
                <span class="fill_rate active">☆</span>
                <span class="fill_rate active">☆</span>
            </div>
            <p class="form__product__info__text">Color: <span
                    class="form__product__color">Red</span> </p>
            <p class="form__product__info__text">Size: <span
                    class="form__product__size">XL</span></p>
        </div>
    </router-link>
    <div class="form__product__item">
        <p>$<span class="form__product__price">{{data.price}}</span></p>
    </div>
    <div class="form__product__item">
        <input v-bind:value="data.quantity" @input="inputValue($event)" v-on:change="changeCount" class="form__product__count" type="number" min="1">
    </div>
    <div class="form__product__item">
        <p><span class="form__product__shipping">FREE</span> </p>
    </div>
    <div class="form__product__item">
        <p>$<span class="form__product__sub__total">{{goodSum}}</span> </p>
    </div>
    <div class="form__product__item">
        <a v-on:click="deleteGoodFromCart" href="#" class="product__cart__item product__delete">
            <div class="product__delete__icon"></div>
        </a>
    </div>
</div>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                inputCount: ""
            }
         },
        computed: {
            goodSum: function () {
                return this.data.price * this.data.quantity;
            },
            goodCount: function () {
                return this.data.quantity;
            },
            changeCount(){
                this.data.quantity = +this.inputCount;
                this.data.mode = true;
                this.$store.dispatch('addToCart', this.data);
            }
        },
        methods: {
            deleteGoodFromCart() {
                this.$store.dispatch('deleteFromeCart', this.data.id_product);
            },
            inputValue(event){
                this.inputCount = event.target.value;
            }
        }
    }
</script>