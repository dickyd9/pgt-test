<template>
  <div class="modal-overlay">
    <div class="modal">
      <!-- Header -->
      <div class="title-edit" v-if="add">
        <span class="title">{{ form.title }}</span>
        <span class="author">{{ form.author }}</span>
      </div>
      <div class="title-edit" v-else>
        <span class="title">Add New Blog</span>
      </div>

      <!-- form edit/add -->
      <form v-if="!add">
        <div class="form-group">
          <label for="">Title</label>
          <input type="text" name="" id="" placeholder="Masukkan Title" v-model="form.title" />
        </div>
        <div class="form-group">
          <label for="">Author</label>
          <input type="text" name="" id="" placeholder="Masukkan Author" v-model="form.author" />
        </div>
        <div class="form-group">
          <label for="">Body</label>
          <textarea type="text" name="" id="" placeholder="Masukkan Body" v-model="form.body" />
        </div>
      </form>

      <form v-else>
        <div class="form-group">
          <label for="">Title</label>
          <input type="text" name="" id="" placeholder="Masukkan Title" v-model="form.title" />
        </div>
        <div class="form-group">
          <label for="">Author</label>
          <input type="text" name="" id="" placeholder="Masukkan Author" v-model="form.author" />
        </div>
        <div class="form-group">
          <label for="">Body</label>
          <textarea type="text" name="" id="" placeholder="Masukkan Body" v-model="form.body" />
        </div>
      </form>

      <!-- button action -->
      <div class="button-group">
        <button class="button-cancel" @click="$emit('closeModal')">Batal</button>
        <button class="button-save" @click="$emit('simpanData', form)">Simpan</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'Modal',
  props: {
    add: Boolean,
    dataEdit: String
  },
  data() {
    const store = useStore()
    return {
      store
    }
  },
  created() {
    if (this.add == true) {
      this.store.dispatch('getBlogId', this.dataEdit)
    }
  },
  computed: {
    form() {
      if (this.add) {
        return {
          id: this.store.state.editBlog ? this.store.state.editBlog.id : '',
          title: this.store.state.editBlog ? this.store.state.editBlog.title : '',
          author: this.store.state.editBlog ? this.store.state.editBlog.author : '',
          body: this.store.state.editBlog ? this.store.state.editBlog.body : ''
        }
      } else {
        return {
          title: '',
          author: '',
          body: ''
        }
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  z-index: 50;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  justify-content: center;
  text-align: center;
  background-color: white;
  height: fit-content;
  width: 500px;
  margin: 20px 0;
  padding: 0 20px;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

.form-group {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 12px;
}

.button-group {
  display: flex;
  justify-content: right;
  margin-bottom: 40px;
  gap: 6px;
}

.title-edit {
  padding: 20px 0;
  display: grid;
  gap: 6px;
}
.title-edit .title {
  font-size: 36px;
  font-weight: 600;
}
.title-edit .author {
  font-size: 16px;
  font-weight: 400;
  color: #303030;
}

form {
  display: grid;
  gap: 20px;
  max-width: 480px;
}

input {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #000000da;
  padding: 14px 0 14px 12px;
}

textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #000000da;
  padding: 14px 0 14px 12px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  cursor: pointer;
  background-color: #303030;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  border: 0px;
  margin-top: 50px;
}

.button-cancel {
  background-color: #ff4618;
}
.button-cancel:hover {
  background-color: #fd7756;
}
.button-save {
  background-color: #32a11c;
}
.button-save:hover {
  background-color: #6eac62;
}
</style>
