<template>
<main>
  <HeaderVue />
  <router-view></router-view>
  <FooterVue />
</main>

</template>


<script>
import HeaderVue from "@/components/Base/HeaderVue.vue";
import FooterVue from "@/components/Base/FooterVue.vue";
export default {
  components: {
    HeaderVue,
    FooterVue,
  },
  setup(props) {
    

    return {
   
    }
  }
};
</script>

<style lang="sass">
main
  overflow-x: hidden
</style>
