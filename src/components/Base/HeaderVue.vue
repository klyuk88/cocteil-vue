<template>
      <header class="header">
        <div class="container">
          <div class="header__content flex">
            <div class="header__menu"> <a class="open-menu" href="#" aria-label="open menu"> 
                <svg class="svg-sprite-icon icon-burger">
                  <use xlink:href="@/assets/images/svg/symbol/sprite.svg#burger"></use>
                </svg></a></div>
            <div class="header__actions">
              <div class="header__search"> 
                <form class="search-form" action="/"> 
                  <button class="search-form__btn" type="submit" aria-label="search">
                    <svg class="svg-sprite-icon icon-search">
                      <use xlink:href="@/assets/images/svg/symbol/sprite.svg#search"></use>
                    </svg>
                    <svg class="svg-sprite-icon icon-m-search">
                      <use xlink:href="@/assets/images/svg/symbol/sprite.svg#m-search"></use>
                    </svg>
                  </button>
                  <input class="search-form__input" type="text" placeholder="Поиск">
                </form>
              </div>
              <div class="header__controls">
                <ul class="controls flex">
                  <li class="controls__item"> <a class="controls__link" href="#">
                      <svg class="svg-sprite-icon icon-user">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#user"></use>
                      </svg></a></li>
                  <li class="controls__item"> <a class="controls__link" href="#">
                      <svg class="svg-sprite-icon icon-heart">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"></use>
                      </svg></a></li>
                  <li class="controls__item"> <a class="controls__link" href="#">
                      <svg class="svg-sprite-icon icon-bag">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"></use>
                      </svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <PanelVue/>
      
    
</template>
<script>
import PanelVue from "./PanelVue.vue";
export default {
  components: { PanelVue },
};
</script>
<style>
</style>