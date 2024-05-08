<script>
import NavBar from '../components/NavBar.vue'
import DownBar from '../components/DownBar.vue'

export default {
  components: {
    NavBar, DownBar
  }
}
</script>
<template>
  <NavBar />
  <slot></slot>
  <DownBar />
</template>