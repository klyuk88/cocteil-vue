<template>
  <div class="product-head__breadcrumbs">
    <div class="breadcrumbs">
      <ul class="breadcrumbs-list">
        <li class="breadcrumbs-list__item">
          <RouterLink to="/" class="breadcrumbs-list__link">
            Главная
          </RouterLink>
        </li>
        <li class="breadcrumbs-list__item">
          Родительская /
        </li>
        <li class="breadcrumbs-list__item">Текущая</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: String,
    parent: String
  }
};
</script>

<style>
</style>