<template>
    <section class="subscribe">
        <h6>Subscribe</h6>
        <div class="container subscribe__wrapper">
            <div class="subscribe__side subscribe__tabs">
                <input type="radio" name="subscribe__tab" id="subscribe__tab-one">
                <label for="subscribe__tab-one"></label>
                <input type="radio" name="subscribe__tab" id="subscribe__tab-two" checked>
                <label for="subscribe__tab-two"></label>
                <input type="radio" name="subscribe__tab" id="subscribe__tab-three">
                <label for="subscribe__tab-three"></label>
                <div class="subscribe__content">
                    <figure class="subscribe__post subscribe__tab-one">
                        <img src="../assets/img/subscribe_photo.jpg" alt="image" class="subscribe__post__img">
                        <div class="subscribe__post__info">
                            <p class="subscribe__post__text">“Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.”
                            </p>
                            <h5 class="subscribe__post__name pink__letter">Bin Burhan</h5>
                            <p class="subscribe__post__about">Dhaka, Bd</p>
                        </div>
                    </figure>
                    <figure class="subscribe__post subscribe__tab-two">
                        <img src="../assets/img/subscribe_photo.jpg" alt="image" class="subscribe__post__img">
                        <div class="subscribe__post__info">
                            <p class="subscribe__post__text">“Vestibulum quis porttitor dui! Quisque viverra
                                nunc mi,
                                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                            </p>
                            <h5 class="subscribe__post__name pink__letter">Bin Burhan</h5>
                            <p class="subscribe__post__about">Dhaka, Bd</p>
                        </div>
                    </figure>
                    <figure class="subscribe__post subscribe__tab-three">
                        <img src="../assets/img/subscribe_photo.jpg" alt="image" class="subscribe__post__img">
                        <div class="subscribe__post__info">
                            <p class="subscribe__post__text">“Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Nam quos sint ad magni, nemo cum!”</p>
                            <h5 class="subscribe__post__name pink__letter">Bin Burhan</h5>
                            <p class="subscribe__post__about">Dhaka, Bd</p>
                        </div>
                    </figure>
                </div>
            </div>
            <div class="subscribe__side">
                <form action="#" method="post" class="subscribe__form" v-on:submit.prevent="onSubmit">
                    <h3 class="subscribe__form__title">SUBSCRIBE</h3>
                    <p class="subscribe__form__text">FOR OUR NEWSLETTER AND PROMOTION</p>
                    <div class="subscribe__form__inputs">
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" required>
                        <button type="submit" class="subscribe__button">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            onSubmit(data){
                console.log(data.target.email.value)
                data.target.email.value = "";
        }
        }
    }
</script>


<style lang="scss">

</style>