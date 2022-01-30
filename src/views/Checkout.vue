<template>
    <main class="wrapper">
      <div class="wrapper__top">
        <Header />
        <Nav />
        <Breadcrumbs v-bind:link="'checkout'" />
            <section class="container checkout">
                <h6>Checkout</h6>
                <details class="checkout__item" open>
                    <summary class="checkout__item__title">01. Shipping Address</summary>
                    <div class="check__box">
                        <form action="#" method="post" class="check__box__item" v-on:submit.prevent="onSubmitCheck">
                            <p class="check__box__item__title">Check as a guest or register</p>
                            <p class="check__box__item__text">Register with us for future convenience</p>
                            <div class="check__box__item__wrapper">
                                <div class="check__box__item__radio">
                                    <input type="radio" name="checkout-type" id="guest" value="guest" v-model="checkStatus">
                                    <label for="guest">checkout as guest</label>
                                </div>
                                <div class="check__box__item__radio">
                                    <input type="radio" name="checkout-type" id="register" value="register" v-model="checkStatus">
                                    <label for="register">register</label>
                                </div>
                            </div>
                            <p class="check__box__item__title">register and save time!</p>
                            <p class="check__box__item__text">Register with us for future convenience</p>
                            <div class="check__box__item__wrapper">
                                <p class="check__box__item__text">>> Fast and easy checkout</p>
                                <p class="check__box__item__text">>> Easy access to your order history and status</p>
                            </div>
                            <button type="submit" class="button button__to__cart width-fix">Continue</button>
                        </form>
                        <form v-if="checkStatus=='register'" action="#" method="post" class="check__box__item" v-on:submit.prevent="onSubmitReg">
                            <p class="check__box__item__title">Check as a guest or register</p>
                            <p class="check__box__item__text">Register with us for future convenience</p>
                            <div class="check__box__item__wrapper">
                                <label for="email__register">EMAIL ADDRESS <span class="red__letter">*</span> </label>
                                <input type="email" name="email__register" id="email__register" required>
                                <label for="password">password <span class="red__letter">*</span></label>
                                <input type="password" name="password" id="password" required>
                                <p class="check__box__item__text error">*Required Fields</p>
                            </div>
                            <div class="check__box__item__wrapper flex">
                                <button type="submit" class="button button__to__cart width-fix">LOG IN</button>
                                <a href="#" class="black__link">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </details>
                <details class="checkout__item">
                    <summary class="checkout__item__title">02. BILLING INFORMATION</summary>
                    <div class="check__box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur obcaecati illo et, quam eaque enim ipsa similique consectetur qui voluptatibus magni sint nemo consequatur cupiditate aliquam veniam quaerat vel. Ducimus.</p>
                    </div>
                </details>
                <details class="checkout__item">
                    <summary class="checkout__item__title">03. SHIPPING INFORMATION</summary>
                    <div class="check__box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur obcaecati illo et, quam eaque enim ipsa similique consectetur qui voluptatibus magni sint nemo consequatur cupiditate aliquam veniam quaerat vel. Ducimus.</p>
                    </div>
                </details>
                <details class="checkout__item">
                    <summary class="checkout__item__title">04. SHIPPING METHOD</summary>
                    <div class="check__box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur obcaecati illo et, quam eaque enim ipsa similique consectetur qui voluptatibus magni sint nemo consequatur cupiditate aliquam veniam quaerat vel. Ducimus.</p>
                    </div>
                </details>
                <details class="checkout__item">
                    <summary class="checkout__item__title">05. PAYMENT METHOD</summary>
                    <div class="check__box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur obcaecati illo et, quam eaque enim ipsa similique consectetur qui voluptatibus magni sint nemo consequatur cupiditate aliquam veniam quaerat vel. Ducimus.</p>
                    </div>
                </details>
                <details class="checkout__item">
                    <summary class="checkout__item__title">06. ORDER REVIEW</summary>
                    <div class="check__box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur obcaecati illo et, quam eaque enim ipsa similique consectetur qui voluptatibus magni sint nemo consequatur cupiditate aliquam veniam quaerat vel. Ducimus.</p>
                    </div>
                </details>
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
  import Subscribe from'@/components/Subscribe.vue'

  export default {
    name: 'Checkout',
        data() {
        return {
            checkStatus: "register"
        }
    },
    components: {
      Search,
      ShowCase,
      Header,
      Footer,
      Nav,
      Breadcrumbs,
      Subscribe
    },
    methods:{
        onSubmitCheck(data){
            console.log(data, this.checkStatus);
        },
        onSubmitReg(data){
            console.log(data);
        }
    }
  }
</script>