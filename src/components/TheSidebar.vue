<template>
  <div class="catalog-content__left">
    <template v-for="(item, index) in data.attrs" :key="index">
      <div class="catalog-filter__group" v-if="item.attributes.sidebar_display">
        <div class="catalog-filter__title" @click="open">
          {{ item.attributes.Title }}
          <svg class="svg-sprite-icon icon-up" :class="{ active: isOpen }">
            <use xlink:href="@/assets/images/svg/symbol/sprite.svg#up"></use>
          </svg>
        </div>
        <div class="catalog-filter__dropdown" :class="{ active: isOpen }">
          <div class="catalog-filter__list">
            <label
              class="checkbox catalog-filter__checkbox"
              v-for="(term, index) in item.attributes.terms.data"
              :key="index"
            >
              <input
                class="checkbox-input"
                type="checkbox"
                :value="term.id"
                v-model="termInput"
              />
              <span class="checkbox-txt">{{ term.attributes.Title }}</span>
            </label>
          </div>
        </div>
      </div>
    </template>

    <div class="catalog-filter__group">
      <div class="catalog-filter__title">Цена(б.р.)</div>

      <!-- <div class="price-group">
                  <input
                    type="text"
                    name="priceDown"
                    id=""
                    placeholder="от"
                    v-model="minPriceInput"
                  />
                  <input
                    type="text"
                    name="priceUP"
                    id=""
                    placeholder="до"
                    v-model="maxPriceInput"
                  />
            </div> -->
    </div>

    <!-- <button class="card__btn done-filter" @click.prevent="goFilter">
                Применить
              </button>
            <button class="card__btn cancel-filter">Сбросить</button> -->
  </div>
</template>

<script>
import { reactive, onMounted, ref, watch } from "vue";
import {useRoute, onBeforeRouteUpdate} from 'vue-router'
import qs from "qs";
export default {
  emits: ["checkInput"],
  setup(props, context) {
    const data = reactive({
      attrs: [],
    });

    const isOpen = ref(true);

    function open(params) {
      isOpen.value = !isOpen.value;
    }

    async function getAttrs(params) {
      const query = qs.stringify({
        populate: "terms",
      });
      const res = await fetch(
        process.env.VUE_APP_API_URL + "/parameters?" + query
      );
      if (res.ok) {
        const resData = await res.json();
        data.attrs = resData.data;
      }
    }
    const termInput = ref([])
    watch(termInput, newVal => {
      context.emit('checkInput', newVal)
    })

    onBeforeRouteUpdate(() => {
      termInput.value = []
    })


    onMounted(() => {
      getAttrs();
    });

    return {
      data,
      isOpen,
      open,
      termInput
    };
  },
};
</script>


<style lang="sass">
.child-categories
  margin-bottom: 20px
li
  font-size: 1rem
  cursor: pointer
  line-height: 1
  span
    font-size: 0.75rem
    color: grey
    margin-left: 15px

.price-group
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  margin-top: 10px
input
  width: 45%
  border: 1px solid grey
  background: transparent
  padding-left: 5px
input::placeholder
  font-size: 0.8rem

.cancel-filter
  margin-top: 15px
  opacity: 0.5

.card__btn.cancel-filter:hover
  background-color: transparent
  color: #121212

.done-filter
  margin-top: 20px
  background: #514A7E
  border-color: #514A7E
  color: #fff

.catalog-filter__list
  margin-top: 10px
.catalog-filter__dropdown
  overflow: hidden
  max-height: 0
  transition: .3s ease

.checkbox.catalog-filter__checkbox
  cursor: pointer
  transition: all 0.3s ease
  font-size: 1rem
  margin-bottom: 10px

.checkbox.catalog-filter__checkbox:hover
  opacity: 0.7

.catalog-filter__dropdown.active
  max-height: 800px

.icon-up
  transition: transform .3s ease

.icon-up.active
  transform: rotate(-90deg)
</style>