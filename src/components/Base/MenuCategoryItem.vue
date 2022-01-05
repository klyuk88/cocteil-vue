<template>
  <li
    class="menu__item"
    @mouseenter="subMenuOpen"
    @mouseleave="subMenuOpen"
    :class="{ 'menu__item--active': isOpenSubMenu}"
  >
    <a
      class="menu__link"
      :class="{ 'menu__link--selected': isOpenSubMenu, 'menu__link--has-child': childCategories.length > 0}"
      href="#"
      >
      {{name}}
    </a>

    <div
      v-if="childCategories.length > 0"
      class="dropdown-menu">
      <ul class="menu">
        <router-link
        v-for="(item, index) in childCategories" :key="index"
        :to="{name: 'Category', params: {parentCategory: slug, category: item.slug }}"
        custom
        v-slot="{href,navigate}"
        >
        <li class="menu__item">
          <a
          class="menu__link" 
          :href="href"
          @click="navigate"
          >{{item.name}}</a>
        </li>
        </router-link>
        
      </ul>
    </div>
  </li>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import {useStore} from 'vuex'
export default {
  props: ['name','id', 'slug'],
  setup(props) {
    const isOpenSubMenu = ref(false)
    
    const subMenuOpen = () => {
      isOpenSubMenu.value = !isOpenSubMenu.value
    }

    const store = useStore()

    const childCategories = computed(() => {
      return store.state.categories.filter(item => item.parent === props.id && item.count > 0)
    }) 
  
    return {
      subMenuOpen,
      isOpenSubMenu,
      childCategories
    };
  },
};
</script>

<style lang="sass">
.dropdown-menu
  .menu__link:hover
    opacity: 0.5
</style>