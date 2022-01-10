<template>
  <li
    class="menu__item"
    @mouseenter="subMenuOpen"
    @mouseleave="subMenuOpen"
    :class="{ 'menu__item--active': isOpenSubMenu }"
  >
    <a
      href="#"
      :class="{
        'menu__link': true,
        'menu__link--selected': isOpenSubMenu,
        'menu__link--has-child': childCategories.length > 0,
      }"
    >
      {{ name }}
    </a>

    <!-- выводятся дочерные категории только первого уровня  -->
    <div v-if="childCategories.length > 0" class="dropdown-menu">
      <ul class="menu">
        <!-- ссылка на дочернуюю категорию   -->
        <router-link
          v-for="(item, index) in childCategories"
          :key="index"
          :to="{
            name: 'category',
            params: { categoryName: item.slug },
          }"
          custom
          v-slot="{ href, navigate }"
        >
          <li class="menu__item">
            <a class="menu__link" :href="href" @click="navigate">{{
              item.name
            }}</a>
          </li>
        </router-link>
        <!-- ссылка на дочернуюю категорию   -->
      </ul>
    </div>
  </li>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["name", "id", "slug"],
  setup(props) {
    const isOpenSubMenu = ref(false);

    const subMenuOpen = () => {
      isOpenSubMenu.value = !isOpenSubMenu.value;
    };
    const store = useStore();
    const childCategories = computed(() => {
      return store.getters.getChildCategories(props.id);
    });

    return {
      subMenuOpen,
      isOpenSubMenu,
      childCategories,
    };
  },
};
</script>

<style lang="sass">
.dropdown-menu
  .menu__link:hover
    opacity: 0.5

</style>