<template>
    <section class="product">
        <h6>Product</h6>
        <div class="product__gallery">
            <button class="gallery__button gallery__button__left">&lt;</button>
            <div class="product__gallery__img__box">
                <img :src="require(`@/assets/img/items/${data.product_img}`)" alt="product" class="product__gallery__img">
            </div>
            <button class="gallery__button gallery__button__right">&gt;</button>
        </div>
        <article class="product__info">
            <h4 class="product__info__heading pink__letter">{{data.gender}} COLLECTION</h4>
            <h3 class="product__info__title">{{data.product_name}}</h3>
            <p class="product__info__discription">Compellingly actualize fully researched processes before
                proactive
                outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
                Completely visualize parallel core competencies rather than exceptional portals.</p>
            <div class="product__info__add__box">
                <p class="product__info__add">MATERIAL: <span class="text__bold">{{data.material}}</span></p>
                <p class="product__info__add">DESIGNER: <span class="text__bold">{{data.designer}}</span></p>
            </div>
            <p class="product__info__price pink__letter">$<span id="pruduct__price">{{totalPrice}}</span></p>
            <form action="#" method="post" class="product__info__form" v-on:submit.prevent="onSubmit">
                <div>
                    <label for="product__color" class="product__info__form__item">CHOOSE COLOR</label>
                    <select v-model="selectColor" name="product__color" id="product__color" class="product__info__form__item">
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                    </select>
                </div>
                <div>
                    <label for="product__size" class="product__info__form__item">CHOOSE SIZE</label>
                    <select v-model="selectSize" name="product__size" id="product__size" class="product__info__form__item">
                        <option value="xxl">XXL</option>
                        <option value="xl">XL</option>
                        <option value="l">L</option>
                        <option value="m">M</option>
                        <option value="s">S</option>
                    </select>
                </div>
                <div>
                    <label for="product__count" class="product__info__form__item">QUANTITY</label>
                    <input v-model="selectCount" type="number" name="product__count" id="product__count" min="1"
                        class="product__info__form__item">
                </div>
                <button type="submit" class="button product__info__form__button">
                    <img src="@/assets/img/cart_logo_w.png" alt="cart" class="cart_logo cart_logo__w">
                    <img src="@/assets/img/cart_logo_p.png" alt="cart" class="cart_logo cart_logo__p">
                    <span class="add_text">Add to Cart</span>
                </button>
            </form>
        </article>
    </section>
</template>

<script>
    export default {
        props: ['data'],
         data() {
            return {
            selectColor: '',
            selectSize: '',
            selectCount: 1
            }
         },
         computed:{
            totalPrice(){
                return this.data.price * this.selectCount;
            },
         },
        methods: {
            onSubmit(){
                this.data.quantity = this.selectCount;
                this.$store.dispatch('addToCart', this.data);
                this.selectColor = '';
                this.selectSize = '';
                this.selectCount = '';
            }
        }
    }
</script>