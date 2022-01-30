<template>
    <main class="wrapper">
      <div class="wrapper__top">
        <Header />
        <Nav />
        <Breadcrumbs v-bind:link="'product'"/>
            <section class="container catalog">
                <h6>Catalog</h6>
                <div class="catalog__sidebar">
                    <details class="button button__browse">
                        <summary class="button__browse__title">CATEGORY</summary>
                        <nav class="menu__box">
                            <div class="menu__item">
                                <a href="#" class="menu__link">Accessories</a>
                                <a href="#" class="menu__link">Bags</a>
                                <a href="#" class="menu__link">Denim</a>
                                <a href="#" class="menu__link">Hoodies & Sweatshirts</a>
                                <a href="#" class="menu__link">Jackets & Coats</a>
                                <a href="#" class="menu__link">Pants</a>
                                <a href="#" class="menu__link">Polo</a>
                                <a href="#" class="menu__link">Shirts</a>
                                <a href="#" class="menu__link">Shoes</a>
                                <a href="#" class="menu__link">Shorts</a>
                                <a href="#" class="menu__link">Sweaters & Knits</a>
                                <a href="#" class="menu__link">T-Shirts</a>
                                <a href="#" class="menu__link">Tanks</a>
                            </div>
                        </nav>
                    </details>
                    <details class="button button__browse">
                        <summary class="button__browse__title">BRAND</summary>
                        <nav class="menu__box">
                            <div class="menu__item">
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                                <a href="#" class="menu__link">Brand</a>
                            </div>
                        </nav>
                    </details>
                    <details class="button button__browse">
                        <summary class="button__browse__title">DESIGNER</summary>
                        <nav class="menu__box">
                            <div class="menu__item">
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                                <a href="#" class="menu__link">Designer</a>
                            </div>
                        </nav>
                    </details>
                </div>
                <div class="catalog__wrapper">
                    <div class="catalog__filter">
                        <div class="catalog__filter__item">
                            <div class="catalog__filter__item__title">TRENDING NOW</div>
                            <nav class="catalog__filter__item__box">
                                <a href="#" class="catalog__filter__item__link">Bohemian</a>
                                <p class="stick">|</p>
                                <a href="#" class="catalog__filter__item__link">Floral</a>
                                <p class="stick">|</p>
                                <a href="#" class="catalog__filter__item__link">Lace</a>
                            </nav>
                            <nav class="catalog__filter__item__box">
                                <a href="#" class="catalog__filter__item__link">Floral</a>
                                <p class="stick">|</p>
                                <a href="#" class="catalog__filter__item__link">Lace</a>
                                <p class="stick">|</p>
                                <a href="#" class="catalog__filter__item__link">Bohemian</a>
                            </nav>
                        </div>
                        <div class="catalog__filter__item">
                            <div class="catalog__filter__item__title">SIZE</div>
                            <input type="checkbox" id="size_xxs" name="size_xxs" value="xxs">
                            <label for="size_xxs">XXS</label>
                            <input type="checkbox" id="size_xs" name="size_xs" value="xs">
                            <label for="size_xs">XS</label>
                            <input type="checkbox" id="size_s" name="size_s" value="s">
                            <label for="size_s">S</label>
                            <input type="checkbox" id="size_m" name="size_m" value="m">
                            <label for="size_m">M</label>
                            <input type="checkbox" id="size_l" name="size_l" value="l">
                            <label for="size_l">L</label>
                            <input type="checkbox" id="size_xl" name="size_xl" value="xl">
                            <label for="size_xl">XL</label>
                            <input type="checkbox" id="size_xxl" name="size_xxl" value="xxl">
                            <label for="size_xxl">XXL</label>
                        </div>
                        <div class="catalog__filter__item">
                            <div class="catalog__filter__item__title">PRICE</div>
                            <input type="range" min="52" max="400" step="0.01" id="price">
                            <label for="price" class="label__price">
                                <span class="label__price">$52</span>
                                <span class="label__price">$400</span>
                            </label>
                        </div>
                        <div class="catalog__filter__sort">
                            <label for="sort__by">Sort By</label>
                            <select name="sort__by" id="sort__by">
                                <option value="name">Name</option>
                                <option value="size">Size</option>
                                <option value="price">Price</option>
                            </select>
                            <label for="show">Show</label>
                            <select name="show" id="show">
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                            </select>
                        </div>
                    </div>
                    <div class="catalog__products">
                        <div class="items__wrapper">
                             <ShowCase v-bind:cardCount="cardCount"/>
                        </div>
                    </div>
                    <div class="catalog__pagination__wrapper">
                        <div v-if="this.cardCount>0" class="catalog__pagination__nums">
                            <a href="#" class="catalog__pagination__num">&lt;</a> <a href="#" class="catalog__pagination__num active">1
                            </a>
                            <a href="#" class="catalog__pagination__num">2</a>
                            <a href="#" class="catalog__pagination__num">3</a>
                            <a href="#" class="catalog__pagination__num">4</a>
                            <a href="#" class="catalog__pagination__num">5</a>
                            <a href="#" class="catalog__pagination__num">6</a>
                            <a href="#" class="catalog__pagination__num">...</a>
                            <a href="#" class="catalog__pagination__num">20</a>
                            <a href="#" class="catalog__pagination__num active">&gt;</a>
                        </div>
                        <a href="#" class="button product__info__form__button" v-on:click="getAllGoods">View All</a>
                    </div>
                </div>
            </section>
        <BannerCatalog />
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
  import BannerCatalog from '@/components/BannerCatalog.vue'

  export default {
    name: 'Product',
    components: {
      Search,
      ShowCase,
      Header,
      Footer,
      Nav,
      Breadcrumbs,
      Subscribe,
      BannerCatalog
    },
    data() {
        return {
            cardCount: 9
        }
    },
    methods:{
        getAllGoods(){
            this.cardCount = 0;
        }
    }
  }
</script>