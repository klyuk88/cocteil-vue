<template>
        <div class="content">

        <div class="intro">
          <div class="container"> 
            <div class="intro-content flex"> 
              <div class="intro-content__left"> 
                <div class="intro-img intro-img--1">
                  <picture> 
                    <source srcset="@/assets/images/general/intro-1.webp" type="image/webp"><img src="@/assets/images/general/intro-1.jpg" width="278" height="242" alt="img">
                  </picture>
                </div>
                <div class="intro-title">Добро пожаловать<br> в <span class="f-script">Cocteil</span></div>
                <div class="intro-txt">Экономим Ваше время! <br>Предлагаем лучшие цены! <br>Доставляем в кратчайшие сроки!</div><a class="intro-link" href="#"> <span class="intro-link__txt">Каталог</span><span class="intro-link__icon">
                    <svg class="svg-sprite-icon icon-arrow-1">
                      <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-1"></use>
                    </svg></span></a>
              </div>
              <div class="intro-content__right"> 
                <div class="intro-img intro-img--2"> 
                  <picture> 
                    <source srcset="@/assets/images/general/intro-2.webp" type="image/webp"><img src="@/assets/images/general/intro-2.jpg" width="476" height="416" alt="img">
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="whywe section"> 
          <div class="container">
            <div class="whywe__title section-title">Почему выбирают нас?</div>
            <div class="whywe-list flex"> 
              <div class="whywe-list__item"> 
                <div class="whywe-item whywe-item--1 whywe-item--circle">Скидки постоянным клиентам от 5%</div>
              </div>
              <div class="whywe-list__item"> 
                <div class="whywe-item whywe-item--2">Предлагаем самые выгодные цены</div>
              </div>
              <div class="whywe-list__item"> 
                <div class="whywe-item whywe-item--3 whywe-item--circle">Наши покупатели всегда остаются довольны</div>
              </div>
              <div class="whywe-list__item"> 
                <div class="whywe-item whywe-item--4">Ширикий ассортимент товаров для всей семьи</div>
              </div>
              <div class="whywe-list__item"> 
                <div class="whywe-item whywe-item--5 whywe-item--circle">Возможность доставки в любой город Беларуси </div>
              </div>
              <div class="whywe-list__item"> 
                <div class="whywe-item whywe-item--6 whywe-item--circle">Пункты выдачи заказов рядом с домом</div>
              </div>
            </div>
            <div class="whywe-mobile">
              <div class="whywe-mobile__left"> 
                <div class="whywe-slider swiper-container"> 
                  <div class="swiper-wrapper"> 
                    <div class="swiper-slide">
                      <div class="whywe-card">Скидки постоянным клиентам от 5%</div>
                    </div>
                    <div class="swiper-slide">
                      <div class="whywe-card">Предлагаем самые выгодные цены</div>
                    </div>
                    <div class="swiper-slide">
                      <div class="whywe-card">Наши покупатели всегда остаются довольны</div>
                    </div>
                    <div class="swiper-slide">
                      <div class="whywe-card">Ширикий ассортимент товаров для всей семьи</div>
                    </div>
                    <div class="swiper-slide">
                      <div class="whywe-card">Возможность доставки в любой город Беларуси</div>
                    </div>
                    <div class="swiper-slide">
                      <div class="whywe-card">Пункты выдачи заказов рядом с домом</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="whywe-mobile__right">
                <button class="whywe-btn" type="button">
                  <svg class="svg-sprite-icon icon-right">
                    <use xlink:href="@/assets/images/svg/symbol/sprite.svg#right"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <StockSection/>

        <ReviewSection/>

        <FaqSection/>

        <div class="cooperation section"> 
          <div class="container"> 
            <div class="cooperation__title section-title">Сотрудничество с нами</div>
            <div class="cooperation__txt txt">Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения. </div>
            <div class="cooperation-list flex">
              <div class="cooperation-list__item"> 
                <div class="cooperation-item">
                  <div class="cooperation-item__title">Становитесь <br>партнёром</div>
                  <div class="cooperation-item__txt">Регистрируйтесь и <br>переходите в свой кабинет</div>
                </div>
              </div>
              <div class="cooperation-list__item">
                <div class="cooperation-item">
                  <div class="cooperation-item__title">Рекламируйте <br>товары</div>
                  <div class="cooperation-item__txt">Рекламируйте наши товары <br>на форумах, сайтах, в социальных сетях</div>
                </div>
              </div>
              <div class="cooperation-list__item"> 
                <div class="cooperation-item">
                  <div class="cooperation-item__title">Приводите <br>покупателей</div>
                  <div class="cooperation-item__txt">Приводите покупателей на <br>наш сайт по уникальной ссылке</div>
                </div>
              </div>
              <div class="cooperation-list__item"> 
                <div class="cooperation-item">
                  <div class="cooperation-item__title">Получайте <br>бонусы</div>
                  <div class="cooperation-item__txt">Копите бонусы от каждого<br> оплаченного заказа</div>
                </div>
              </div>
            </div>
            <div class="cooperation__subtitle"><span>Это выгодно.</span> Какие преимущества?</div>
            <div class="cooperation-advantages flex">
              <div class="cooperation-advantages__item"> 
                <div class="advantages">
                  <div class="advantages__icon"> <img src="@/assets/images/general/advantages-1.svg" width="30" height="30" alt=""></div>
                  <div class="advantages__txt">Автоматизация процессов</div>
                </div>
              </div>
              <div class="cooperation-advantages__item"> 
                <div class="advantages">
                  <div class="advantages__icon"> <img src="@/assets/images/general/advantages-2.svg" width="30" height="30" alt=""></div>
                  <div class="advantages__txt">Пополнение ассортимента</div>
                </div>
              </div>
              <div class="cooperation-advantages__item"> 
                <div class="advantages">
                  <div class="advantages__icon"> <img src="@/assets/images/general/advantages-3.svg" width="30" height="30" alt=""></div>
                  <div class="advantages__txt">Поддержка и обучение</div>
                </div>
              </div>
              <div class="cooperation-advantages__item"> 
                <div class="advantages">
                  <div class="advantages__icon"> <img src="@/assets/images/general/advantages-4.svg" width="30" height="30" alt=""></div>
                  <div class="advantages__txt">Бонусы за новых клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="request section">
          <div class="container"> 
            <div class="request-content"> 
              <div class="request-title">Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</div>
              <form class="form request-form" action="/"> 
                <input class="form-input request-form__input" type="text" placeholder="Ваше имя">
                <input class="form-input request-form__input" type="text" placeholder="Номер телефона">
                <input class="form-input request-form__input request-form__input--last" type="email" placeholder="Электронная почта">
                <label class="form-consent request-form__consent">
                  <input class="form-consent__input" type="checkbox"><span class="form-consent__txt">Даю согласие на обработку персональных данных</span>
                </label>
                <div class="request-form__button">
                  <button class="form-btn btn" type="submit">Отправить
                    <svg class="svg-sprite-icon icon-arrow-2">
                      <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"></use>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

</template>

<script>
import StockSection from '@/components/Home/StockSection.vue'
import ReviewSection from '@/components/Home/ReviewSection.vue'
import FaqSection from '@/components/Home/FaqSection.vue'
export default {
  components: {StockSection, ReviewSection, FaqSection}
}
</script>
