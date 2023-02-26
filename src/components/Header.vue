<template>
  <div class="header">
    <div class="text-header">My Blog</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  z-index: 20;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 30px 0;
  border-bottom: 1px solid #00000027;
}
.header .text-header {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}
</style>
