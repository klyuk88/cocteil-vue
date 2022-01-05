<template>
      <div class="content content--inner">
        <div class="catalog"> 
          <div class="catalog-mobile">
            <div class="catalog-mobile__inner"> <a class="catalog-mobile__back" href="#">
                <svg class="svg-sprite-icon icon-back">
                  <use xlink:href="@/assets/images/svg/symbol/sprite.svg#back"></use>
                </svg></a>
              <ul class="catalog-mobile__menu">
                <li class="catalog-mobile__menu-item"> <a class="catalog-mobile__menu-link" href="#">Женщинам</a></li>
                <li class="catalog-mobile__menu-item">Блузки и рубашки</li>
              </ul>
              <button class="catalog-mobile__sorting"> 
                <svg class="svg-sprite-icon icon-sorting">
                  <use xlink:href="@/assets/images/svg/symbol/sprite.svg#sorting"></use>
                </svg>
              </button>
              <button class="catalog-mobile__filter"> 
                <svg class="svg-sprite-icon icon-filter">
                  <use xlink:href="@/assets/images/svg/symbol/sprite.svg#filter"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="container"> 
            <div class="catalog-breadcrumbs breadcrumbs">
              <ul class="breadcrumbs-list">
                <li class="breadcrumbs-list__item"> <a class="breadcrumbs-list__link" href="#">Главная</a></li>
                <li class="breadcrumbs-list__item"> <a class="breadcrumbs-list__link" href="#">Женщинам</a></li>
                <li class="breadcrumbs-list__item">Блузки и рубашки</li>
              </ul>
            </div>
            <h1 class="content-title section-title">Блузки и рубашки для женщин</h1>
            <div class="catalog-sorting">
              <div class="catalog-sorting__txt">Сортировать по:</div>
              <div class="catalog-sorting__list">
                <div class="sorting">
                  <label class="sorting-label">
                    <input class="sorting-input" type="radio" name="sorting"><span class="sorting-txt">Популярности</span>
                  </label>
                  <label class="sorting-label">
                    <input class="sorting-input" type="radio" name="sorting"><span class="sorting-txt">Рейтингу</span>
                  </label>
                  <label class="sorting-label">
                    <input class="sorting-input" type="radio" name="sorting"><span class="sorting-txt">Цене</span>
                  </label>
                  <label class="sorting-label">
                    <input class="sorting-input" type="radio" name="sorting"><span class="sorting-txt">Скидке</span>
                  </label>
                  <label class="sorting-label">
                    <input class="sorting-input" type="radio" name="sorting"><span class="sorting-txt">Обновлению</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="catalog-content">
              <div class="catalog-content__left"> 
                <form class="catalog-filter" action="/">
                  <div class="catalog-filter__group"> 
                    <div class="catalog-filter__title">Цена, б.р</div>
                    <div class="catalog-filter__range"> 
                      <div class="catalog-filter__range-inner"><span class="catalog-filter__range-txt">От</span><span class="catalog-filter__range-txt">До</span></div>
                      <div id="filterSlider"></div>
                    </div>
                  </div>
                  <div class="catalog-filter__group"> 
                    <div class="catalog-filter__title show-filter" data-bs-toggle="collapse" data-bs-target="#filter1" aria-expanded="false">Размер
                      <svg class="svg-sprite-icon icon-up">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#up"></use>
                      </svg>
                    </div>
                    <div class="collapse" id="filter1">
                      <div class="catalog-filter__dropdown"> 
                        <div class="catalog-filter__list"> 
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">S</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">M</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">L</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">XL</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">2XL</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">3XL</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">36</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">38</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">40</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">42</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">44</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">46</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">48</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">50</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">52</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">54</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">56</span>
                          </label>
                          <label class="checkbox catalog-filter__checkbox">
                            <input class="checkbox-input" type="checkbox"><span class="checkbox-txt">Универсальный</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="catalog-filter__group"> 
                    <div class="catalog-filter__title show-filter" data-bs-toggle="collapse" data-bs-target="#filter2" aria-expanded="false">Цвета
                      <svg class="svg-sprite-icon icon-up">
                        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#up"></use>
                      </svg>
                    </div>
                    <div class="collapse" id="filter2">
                      <div class="catalog-filter__colors">
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-white"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-black"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-red"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-green"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-yellow"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-blue"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-gray"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-gray"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-gray"></span>
                          </label>
                        </div>
                        <div class="catalog-filter__colors-item"> 
                          <label class="catalog-filter__colors-label">
                            <input class="catalog-filter__colors-input" type="checkbox"><span class="catalog-filter__colors-circle color-gray"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="catalog-content__right">
                <div class="catalog-list flex">
                  <div class="catalog-list__item"> 
                    <div class="card">
                      <div class="card__img"> 
                        <picture> 
                          <source srcset="@/assets/images/content/card-1.webp" type="image/webp"><img src="@/assets/images/content/card-1.jpg" width="278" height="319" alt="img">
                        </picture>
                      </div>
                      <div class="card__info">
                        <div class="card__info-left"> 
                          <div class="card__price">
                            <div class="card__price-new">50.00 р</div>
                          </div><a class="card__title" href="#">Блузка женская классная </a><a class="card__btn" href="#">Подробнее
                            <svg class="svg-sprite-icon icon-arrow-2">
                              <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"></use>
                            </svg></a>
                        </div>
                        <div class="card__info-right">
                          <div class="card__controls"><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-heart">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"></use>
                              </svg></a><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-bag">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"></use>
                              </svg></a></div>
                          <div class="card__rating">
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="catalog-list__item"> 
                    <div class="card">
                      <div class="card__img"> 
                        <picture> 
                          <source srcset="@/assets/images/content/card-5.webp" type="image/webp"><img src="@/assets/images/content/card-5.jpg" width="278" height="319" alt="img">
                        </picture>
                      </div>
                      <div class="card__info">
                        <div class="card__info-left"> 
                          <div class="card__price">
                            <div class="card__price-new">50.00 р</div>
                          </div><a class="card__title" href="#">Блузка женская классная </a><a class="card__btn" href="#">Подробнее
                            <svg class="svg-sprite-icon icon-arrow-2">
                              <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"></use>
                            </svg></a>
                        </div>
                        <div class="card__info-right">
                          <div class="card__controls"><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-heart">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"></use>
                              </svg></a><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-bag">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"></use>
                              </svg></a></div>
                          <div class="card__rating">
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="catalog-list__item"> 
                    <div class="card">
                      <div class="card__img"> 
                        <picture> 
                          <source srcset="@/assets/images/content/card-2.webp" type="image/webp"><img src="@/assets/images/content/card-2.jpg" width="278" height="319" alt="img">
                        </picture>
                      </div>
                      <div class="card__info">
                        <div class="card__info-left"> 
                          <div class="card__price">
                            <div class="card__price-new">50.00 р</div>
                          </div><a class="card__title" href="#">Блузка женская классная </a><a class="card__btn" href="#">Подробнее
                            <svg class="svg-sprite-icon icon-arrow-2">
                              <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"></use>
                            </svg></a>
                        </div>
                        <div class="card__info-right">
                          <div class="card__controls"><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-heart">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"></use>
                              </svg></a><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-bag">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"></use>
                              </svg></a></div>
                          <div class="card__rating">
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="catalog-list__item"> 
                    <div class="card">
                      <div class="card__img"> 
                        <picture> 
                          <source srcset="@/assets/images/content/card-6.webp" type="image/webp"><img src="@/assets/images/content/card-6.jpg" width="278" height="319" alt="img">
                        </picture>
                      </div>
                      <div class="card__info">
                        <div class="card__info-left"> 
                          <div class="card__price">
                            <div class="card__price-new">50.00 р</div>
                          </div><a class="card__title" href="#">Блузка женская классная </a><a class="card__btn" href="#">Подробнее
                            <svg class="svg-sprite-icon icon-arrow-2">
                              <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"></use>
                            </svg></a>
                        </div>
                        <div class="card__info-right">
                          <div class="card__controls"><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-heart">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"></use>
                              </svg></a><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-bag">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"></use>
                              </svg></a></div>
                          <div class="card__rating">
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="catalog-list__item"> 
                    <div class="card">
                      <div class="card__img"> 
                        <picture> 
                          <source srcset="@/assets/images/content/card-3.webp" type="image/webp"><img src="@/assets/images/content/card-3.jpg" width="278" height="319" alt="img">
                        </picture>
                      </div>
                      <div class="card__info">
                        <div class="card__info-left"> 
                          <div class="card__price">
                            <div class="card__price-new">50.00 р</div>
                          </div><a class="card__title" href="#">Блузка женская классная </a><a class="card__btn" href="#">Подробнее
                            <svg class="svg-sprite-icon icon-arrow-2">
                              <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"></use>
                            </svg></a>
                        </div>
                        <div class="card__info-right">
                          <div class="card__controls"><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-heart">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"></use>
                              </svg></a><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-bag">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"></use>
                              </svg></a></div>
                          <div class="card__rating">
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="catalog-list__item"> 
                    <div class="card">
                      <div class="card__img"> 
                        <picture> 
                          <source srcset="@/assets/images/content/card-4.webp" type="image/webp"><img src="@/assets/images/content/card-4.jpg" width="278" height="319" alt="img">
                        </picture>
                      </div>
                      <div class="card__info">
                        <div class="card__info-left"> 
                          <div class="card__price">
                            <div class="card__price-new">50.00 р</div>
                          </div><a class="card__title" href="#">Блузка женская классная </a><a class="card__btn" href="#">Подробнее
                            <svg class="svg-sprite-icon icon-arrow-2">
                              <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"></use>
                            </svg></a>
                        </div>
                        <div class="card__info-right">
                          <div class="card__controls"><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-heart">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"></use>
                              </svg></a><a class="card__controls-item" href="#">
                              <svg class="svg-sprite-icon icon-bag">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"></use>
                              </svg></a></div>
                          <div class="card__rating">
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="card__rating-item">
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="catalog-foot"> <a class="catalog-more" href="#"> <span class="catalog-more__txt">Ещё</span><span class="catalog-more__icon"> 
                  <svg class="svg-sprite-icon icon-arrow-4">
                    <use xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-4"></use>
                  </svg></span></a></div>
          </div>
        </div>
      </div>
  
</template>

<script>
export default {
    setup(props) {
        
    }

}
</script>

<style>

</style>