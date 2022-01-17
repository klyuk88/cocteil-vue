<template>
  <div class="catalog-filter__group">
    <div class="catalog-filter__title" @click="open">
      {{ name }}
      <svg class="svg-sprite-icon icon-up" :class="{ active: isOpen }">
        <use xlink:href="@/assets/images/svg/symbol/sprite.svg#up"></use>
      </svg>
    </div>
    <div class="catalog-filter__dropdown" :class="{ active: isOpen }">
      <div class="catalog-filter__list">
        <label
          class="checkbox catalog-filter__checkbox"
          v-for="(item, index) in attributesTerms"
          :key="index"
        >
          <input
            class="checkbox-input"
            type="checkbox"
            :name="slug"
            :value="item.id"
            v-model="attrInput.inputVal"
            @change="getName"
          /><span class="checkbox-txt">{{ item.name }}</span>
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
    name: String,
    id: Number,
    slug: String,
  },
  emits: ["resAttrs"],
  setup(props, context) {

    const URL = process.env.VUE_APP_API_URL;
    const CK = "consumer_key=" + process.env.VUE_APP_CK;
    const CS = "consumer_secret=" + process.env.VUE_APP_CS;
    const authParams = `${CK}&${CS}`;

    const attributesTerms = ref([]);
    const getAttributeTerms = async (id) => {
      let res = await fetch(
        `${URL}/products/attributes/${id}/terms?hide_empty=true&${authParams}`
      );
      if (res.ok) {
        let resData = await res.json();
        attributesTerms.value = resData;
      }
    };

    onMounted(() => {
      getAttributeTerms(props.id);
    });

    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };

    const attrInput = reactive({
      taxName: "",
      inputVal: [],
    });

    const getName = (event) => {
      attrInput.taxName = event.target.getAttribute("name");
      context.emit('resAttrs', attrInput.taxName, attrInput.inputVal)
    };


    return {
      isOpen,
      open,
      attributesTerms,
      getName,
      attrInput
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

.catalog-filter__dropdown.active
  max-height: 800px

.icon-up
  transition: transform .3s ease

.icon-up.active
  transform: rotate(-90deg)
</style>




