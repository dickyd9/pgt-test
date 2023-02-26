<template>
  <div class="card-content">
    <div class="text-date">{{ $filters.formatDate(date) }}</div>
    <div class="text-title">{{ title }}</div>
    <div class="text-author">By {{ author }}</div>
    <div class="text-body">
      {{ body }}
    </div>

    <div class="button">
      <button @click="editButton" class="button-edit">Edit</button>
      <button @click="deleteButton" class="button-delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card Content',
  props: {
    dataModal: Object,
    date: String,
    title: String,
    author: String,
    body: String
  },
  methods: {
    editButton() {
      this.$emit('editContent', this.dataModal)
    },
    deleteButton() {
      this.$emit('deleteContent', this.dataModal)
    }
  }
}
</script>

<style scoped>
.card-content {
  position: relative;
  display: grid;
  z-index: 10;
  border-bottom: 1px solid #00000018;
  padding-bottom: 20px;
  padding-top: 20px;
}

.text-date {
  font-size: 14px;
  padding-bottom: 10px;
  color: #0000005b;
}
.text-title {
  font-size: 42px;
  font-weight: 600;
  color: #000000c5;
}
.text-author {
  color: #0000005b;
}
.text-body {
  padding-top: 20px;
  color: #000000c5;
}

.button {
  display: flex;
  gap: 8px;
  position: absolute;
  right: 0%;
  top: 10%;
}

button,
input[type='submit'],
input[type='reset'] {
  background: none;
  background-color: #00000018;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.button-edit {
  background-color: #1874ff;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 12px;
}
.button-edit:hover {
  background-color: #6ba6ff;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 12px;
}
.button-delete {
  background-color: #ff4618;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 12px;
}
.button-delete:hover {
  background-color: #fd7756;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 12px;
}
</style>
