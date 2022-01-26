<template>
  <li
    class="menu__item"
    @mouseenter="subMenuOpen"
    @mouseleave="subMenuOpen"
    :class="{ 'menu__item--active': isOpenSubMenu }"
  >
  <router-link
  :to="{
    name: 'categories',
    params: {
      slug: slug
    }
  }"
  :class="{
        'menu__link': true,
        'menu__link--selected': isOpenSubMenu,
        'menu__link--has-child': subcategories.length,
      }"
  >
  {{name}}
  </router-link>
    <!-- <a
      href="#"
      :class="{
        'menu__link': true,
        'menu__link--selected': isOpenSubMenu,
        'menu__link--has-child': subcategories.length,
      }"
    >
      {{ name }}
    </a> -->

    <!-- выводятся дочерные категории только первого уровня  -->
    <div v-if="subcategories.length" class="dropdown-menu">
      <ul class="menu">
        <!-- ссылка на дочернуюю категорию   -->
        <router-link
          v-for="(item, index) in subcategories"
          :key="index"
          :to="{
            name: 'subcategories',
            params: {
              parent: slug,
              slug: item.attributes.slug,
              }
          }"
          custom
          v-slot="{ href, navigate }"
        >
          <li class="menu__item">
            <a class="menu__link" :href="href" @click="navigate">
              {{item.attributes.Title}}</a>
          </li>
        </router-link>
        <!-- ссылка на дочернуюю категорию   -->
      </ul>
    </div>
  </li>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  props: {
    name: String,
    subcategories: Array,
    slug: String

  },
  setup(props) {
    const isOpenSubMenu = ref(false);

    const subMenuOpen = () => {
      isOpenSubMenu.value = !isOpenSubMenu.value;
    };


    return {
      subMenuOpen,
      isOpenSubMenu
    };
  },
};
</script>

<style lang="sass">
.dropdown-menu
  .menu__link:hover
    opacity: 0.5

</style>