<template>
<HeaderVue />
<router-view></router-view>
<FooterVue/>
</template>


<script>
import HeaderVue from '@/components/Base/HeaderVue.vue'
import FooterVue from '@/components/Base/FooterVue.vue'
export default {
  components: {
    HeaderVue, FooterVue
  }
  
}
</script>

<style>

</style>
