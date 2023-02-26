<template>
  <div class="sidebar">
    <button class="button-add" @click="$emit('addBlog')">Add Blog</button>
  </div>
</template>
<script></script>

<style scoped>
.sidebar {
  padding-left: 40px;
  padding-right: 10px;
}

button {
  cursor: pointer;
  background-color: #303030;
  width: 100%;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  border: 0px;
}

.button-add {
  background-color: #32a11c;
}
.button-add:hover {
  background-color: #6eac62;
}
</style>
