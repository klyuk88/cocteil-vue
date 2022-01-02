<template>
        <div
        class="leftPanel"
        :class="{'leftPanel--open': isOpenMenu}"
        @mouseleave="closeMenu"
        >
        <div class="leftPanel-head"> 
          <div class="leftPanel-title">Каталог</div>
          <div class="leftPanel-form"> 
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
        </div>
        <div class="leftPanel-logo"> 
          <picture class="desctop"> 
            <source srcset="@/assets/images/general/logo.webp" type="image/webp"><img src="@/assets/images/general/logo.png" width="118" height="118" alt="img">
          </picture>
          <picture class="mobile"> 
            <source srcset="@/assets/images/general/logo-2.webp" type="image/webp"><img src="@/assets/images/general/logo-2.png" width="96" height="118" alt="img">
          </picture>
        </div>
        <div class="leftPanel-inner"> 
          <div class="leftPanel-left"> 
            <ul class="menu">
              <li class="menu__item"> <a class="menu__link menu__link--has-child" href="#">Женщинам </a>
                <div class="dropdown-menu"> 
                  <ul class="menu">
                    <li class="menu__item"> <a class="menu__link" href="#">Блузки и рубашки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Майки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Костюмы</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Брюки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Джинсы</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Юбки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Пиджаки и жакеты</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Платья и сарафаны</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Юбки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Шорты</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Свитшоты, худи</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Верхняя одежда</a></li>
                  </ul>
                </div>
              </li>
              <li class="menu__item"> <a class="menu__link menu__link--has-child" href="#">Мужчинам</a>
                <div class="dropdown-menu"> 
                  <ul class="menu">
                    <li class="menu__item"> <a class="menu__link" href="#">Блузки и рубашки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Майки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Костюмы</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Брюки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Джинсы</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Юбки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Пиджаки и жакеты</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Платья и сарафаны</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Юбки</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Шорты</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Свитшоты, худи</a></li>
                    <li class="menu__item"> <a class="menu__link" href="#">Верхняя одежда</a></li>
                  </ul>
                </div>
              </li>
              <li class="menu__item"> <a class="menu__link" href="#">Детям</a></li>
              <li class="menu__item"> <a class="menu__link" href="#">Обувь</a></li>
              <li class="menu__item"> <a class="menu__link" href="#">Игрушки</a></li>
              <li class="menu__item"> <a class="menu__link" href="#">Аксессуары</a></li>
              <li class="menu__item"> <a class="menu__link" href="#">Большие размеры</a></li>
              <li class="menu__item"> <a class="menu__link" href="#">Дополнительно</a></li>
              <li class="menu__item"> <a class="menu__link" href="#">Акции</a></li>
            </ul>
          </div>
          <div class="leftPanel-right">
            <div class="leftPanel-right-content collapse collapse-horizontal" id="collapseWidthExample">
              <ul class="menu">
                <li class="menu__item"> <a class="menu__link" href="#">Блузки и рубашки</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Майки</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Костюмы</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Брюки</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Джинсы</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Юбки</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Пиджаки и жакеты</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Платья и сарафаны</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Юбки</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Шорты</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Свитшоты, худи</a></li>
                <li class="menu__item"> <a class="menu__link" href="#">Верхняя одежда</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import {watch} from 'vue'
export default {
  props: ['isOpenMenu'],
  emits: ['closeMenu'],
  setup(props, context) {
    const closeMenu = () => {
     context.emit('closeMenu')
    }

    return {
      closeMenu
    }
  }
}
</script>

<style>

</style>