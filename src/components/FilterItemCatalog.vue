<template>
  <div class="catalog-filter__group">
    <div class="catalog-filter__title" @click="open">
      {{ title }}
      <svg class="svg-sprite-icon icon-up" :class="{ active: isOpen }">
        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#up"></use>
      </svg>
    </div>
    <div class="catalog-filter__dropdown" :class="{ active: isOpen }">
      <div class="catalog-filter__list">
        <label
          class="checkbox catalog-filter__checkbox"
          v-for="(term, index) in terms"
          :key="index"
        >
          <input
            class="checkbox-input"
            type="checkbox"
            :value="term.id"
            @change="checkInput(term.id)"
          />
          <span class="checkbox-txt">{{ term.attributes.Title }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, reactive } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    title: String,
    terms: Array,
  },
  emits: ['checkInput'],
  setup(props, context) {
    const isOpen = ref(false);
    const checkInput = ref([]);

    function open(params) {
      isOpen.value = !isOpen.value;
    }

   

    // watch(checkInput, (newVal) => {
    //   context.emit('checkInput', newVal, props.title)
    // });

    return {
      isOpen,
      open,
    };
  },
};
</script>

<style lang="sass">
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




