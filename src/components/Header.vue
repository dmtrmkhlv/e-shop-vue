<template>
    <header class="header">
        <div class="container header__wrapper">
            <div class="header__left">
                 <router-link to="/">
                <a href="/" class="main__logo">
                    <img src="../assets/img/logo.png" alt="logo" class="main__logo__img">
                    <p class="main__logo__title">BRAN<span class="pink__letter">D</span></p>
                </a>
                </router-link>
                <div class="header__left__box">
                    <details class="button button__browse">
                        <summary class="button__browse__title">Browse</summary>
                        <MenuHeader />
                    </details>
                    <Search v-bind:seacrhShow="1"/>
                </div>
            </div>
            <div class="header__right">
                <CartBox />
                <details class="button button__account">
                    <summary class="button__account__title">My Account</summary>
                </details>
            </div>
        </div>
    </header>
</template>

<script>
  import Search from '@/components/Search.vue'
  import CartBox from '@/components/CartBox.vue'
  import MenuHeader from '@/components/MenuHeader.vue'

  export default {
    name: 'Header',
    components: {
      Search,
      CartBox,
      MenuHeader
    }
  }
</script>


<style lang="scss">

</style>