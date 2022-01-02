<template>
  <div class="faq-list__item" @click="openFaqItem()">
    <div class="faq-item">
      <div class="faq-item__head">
        <div class="faq-item__question">{{ title }}</div>

        <svg
          class="faq-item__open centered svg-sprite-icon icon-plus"
          :class="{ opened: isOpen }"
        >
          <use xlink:href="@/assets/images/svg/symbol/sprite.svg#plus"></use>
        </svg>
      </div>
      <div class="faq-item__body" :class="{ opened: isOpen }">
        <div class="faq-item__txt">{{ answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  props: ['title', 'answer'],
  setup(props) {
    const isOpen = ref(false);
    const openFaqItem = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      openFaqItem,
      isOpen,
    };
  },
};
</script>

<style lang="sass">
.faq-item__body
    max-height: 0
    overflow: hidden
    transition: max-height .2s ease-in-out
.faq-item__body.opened
    max-height: 500px

.faq-item__open
    transition: transform .2s ease

.faq-item__open.opened
    transform: rotate(-45deg)

.faq-list__item
    cursor: pointer
</style>