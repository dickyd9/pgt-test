<template>
  <div class="content-wrapper">
    <div class="left-content">
      <slot name="left"></slot>
    </div>
    <div class="center-content">
      <slot name="center"></slot>
    </div>
    <div class="right-content">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  justify-content: stretch;
  width: 100%;
}
.left-content {
  width: 10%;
}
.center-content {
  width: 70%;
  min-height: 100vh;
  border-left: 1px solid #00000027;
  border-right: 1px solid #00000027;
  padding: 120px 16px 0 16px;
}
.right-content {
  right: 0;
  position: fixed;
  width: 20%;
  padding-top: 120px;
}
</style>
