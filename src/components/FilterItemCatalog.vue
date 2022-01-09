<template>
  <div class="catalog-filter__group">
    <div class="catalog-filter__title" @click="open">
      Размер
      <svg class="svg-sprite-icon icon-up" :class="{ 'active': isOpen }">
        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#up"></use>
      </svg>
    </div>
    <div class="catalog-filter__dropdown" :class="{ 'active': isOpen }">
      <div class="catalog-filter__list">
        <label class="checkbox catalog-filter__checkbox">
          <input class="checkbox-input" type="checkbox" /><span
            class="checkbox-txt"
            >S</span
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    const isOpen = ref(false);

    const open = () => {
        isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      open
    };
  },
};
</script>

<style lang="sass">
.catalog-filter__dropdown
    overflow: hidden
    max-height: 0
    transition: .3s ease

.catalog-filter__dropdown.active
    max-height: 800px

.icon-up
    transition: transform .3s ease

.icon-up.active
    transform: rotate(-90deg)
</style>