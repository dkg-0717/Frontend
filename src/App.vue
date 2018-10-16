<template>
  <div>
  <navbar></navbar> 
  <div class="container p-3">
    <router-view></router-view> 
  </div>
  </div>
</template>

<script>
import navbar from './components/shared/navbar.vue';

export default {
  components:{
    navbar
  }

}
</script>
