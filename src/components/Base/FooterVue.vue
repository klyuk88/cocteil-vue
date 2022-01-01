<template>
      <footer class="footer">
        <div class="container">
          <div class="footer__content flex"> 
            <div class="footer__left flex"> 
              <div class="footer-group"> 
                <div class="footer-title footer-title--collapse" data-bs-toggle="collapse" data-bs-target aria-expanded="false" aria-controls="footerHidden1">Информация
                  <svg class="svg-sprite-icon icon-down">
                    <use xlink:href="@/assets/images/svg/symbol/sprite.svg#down"></use>
                  </svg>
                </div>
                <div class="collapse footer-hidden show" id="footerHidden1">
                  <div class="footer-hidden__inner">
                    <ul class="footer-menu">
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Главная</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Акции</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Каталог</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Возврат	</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Доставка</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Партнёрам</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Способы оплаты</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Как сделать заказ?</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="footer-group"> 
                <div class="footer-title footer-title--collapse" data-bs-toggle="collapse" data-bs-target aria-expanded="false" aria-controls="footerHidden2">Мой кабинет
                  <svg class="svg-sprite-icon icon-down">
                    <use xlink:href="@/assets/images/svg/symbol/sprite.svg#down"></use>
                  </svg>
                </div>
                <div class="collapse footer-hidden show" id="footerHidden2">
                  <div class="footer-hidden__inner">
                    <ul class="footer-menu">
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Мои заказы</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Мои адреса</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Мои скидки</a></li>
                      <li class="footer-menu__item"> <a class="footer-menu__link" href="#">Моя информация</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="footer-group"> 
                <div class="footer-title footer-title--collapse" data-bs-toggle="collapse" data-bs-target aria-expanded="false" aria-controls="footerHidden3"> <span class="desctop">Контактная информация</span><span class="mobile">Контакты </span>
                  <svg class="svg-sprite-icon icon-down">
                    <use xlink:href="@/assets/images/svg/symbol/sprite.svg#down"></use>
                  </svg>
                </div>
                <div class="collapse footer-hidden show" id="footerHidden3">
                  <div class="footer-hidden__inner">
                    <div class="footer-txt">ИП Вишневский Иван Сергеевич <br>государственная регистрация №690867884 от 31.07.2020.  <br>Логойским горисполкомом <br>Защита прав потребителей +375259990755</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer__right">
              <div class="footer-group">
                <div class="footer-title"><span class="desctop">Соц. сети</span><span class="mobile">Мы в соц. сетях</span></div>
                <ul class="footer-social flex">
                  <li class="footer-social__item"> <a class="footer-social__link" href="#">
                      <svg class="svg-sprite-icon icon-social-1">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#social-1"></use>
                      </svg></a></li>
                  <li class="footer-social__item"> <a class="footer-social__link" href="#">
                      <svg class="svg-sprite-icon icon-social-2">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#social-2"></use>
                      </svg></a></li>
                  <li class="footer-social__item"> <a class="footer-social__link" href="#">
                      <svg class="svg-sprite-icon icon-social-3">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#social-3"></use>
                      </svg></a></li>
                  <li class="footer-social__item"> <a class="footer-social__link" href="#">
                      <svg class="svg-sprite-icon icon-social-4">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#social-4"></use>
                      </svg></a></li>
                </ul>
                <div class="footer-info">
                  <div class="footer-info__item"> 
                    <div class="footer-info__item-icon"> <img src="@/assets/images/general/phone.svg" width="20" height="20" alt=""></div>
                    <div class="footer-info__item-txt">+375255990755</div>
                  </div>
                  <div class="footer-info__item"> 
                    <div class="footer-info__item-icon"> <img src="@/assets/images/general/time.svg" width="20" height="20" alt=""></div>
                    <div class="footer-info__item-txt">круглосуточно, без выходных</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer__col footer__logo"> 
              <div class="footer-logo"> 
                <picture> 
                  <source srcset="@/assets/images/general/footer-logo.webp" type="image/webp"><img src="@/assets/images/general/footer-logo.png" width="84" height="84" alt="img">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="scroll-top-wrapper"> 
        <div class="container">
          <button class="scroll-top" type="button" aria-label="top"><img class="desctop" src="@/assets/images/general/up.svg" alt=""><img class="mobile" src="@/assets/images/general/up-m.svg" alt=""></button>
        </div>
      </div>
      <div class="bottomPanel">
        <ul class="bottomPanel-category"> 
          <li class="bottomPanel-category__item"> <a class="bottomPanel-category__link" href="#">Женщинам</a></li>
          <li class="bottomPanel-category__item"> <a class="bottomPanel-category__link bottomPanel-category__link--selected" href="#">Мужчинам</a></li>
          <li class="bottomPanel-category__item"> <a class="bottomPanel-category__link" href="#">Детям</a></li>
        </ul>
        <ul class="bottomPanel-menu">
          <li class="bottomPanel-menu__item"> <a class="bottomPanel-menu__link" href="#">
              <svg class="svg-sprite-icon icon-home">
                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#home"></use>
              </svg></a></li>
          <li class="bottomPanel-menu__item"> <a class="bottomPanel-menu__link" href="#">
              <svg class="svg-sprite-icon icon-heart">
                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"></use>
              </svg></a></li>
          <li class="bottomPanel-menu__item"> <a class="bottomPanel-menu__link" href="#">
              <svg class="svg-sprite-icon icon-user">
                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#user"></use>
              </svg></a></li>
          <li class="bottomPanel-menu__item"> <a class="bottomPanel-menu__link" href="#">
              <svg class="svg-sprite-icon icon-bag">
                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"></use>
              </svg></a></li>
          <li class="bottomPanel-menu__item"> <a class="bottomPanel-menu__link open-catalog" href="#">
              <svg class="svg-sprite-icon icon-burger">
                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#burger"></use>
              </svg></a></li>
        </ul>
      </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
