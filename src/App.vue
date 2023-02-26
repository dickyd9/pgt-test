<template>
  <main>
    <!-- header -->
    <header-main />

    <!-- content blog -->
    <content-main>
      <template #center>
        <div v-for="(item, index) in getBlog" :key="index">
          <single-content-main
            @editContent="editContent(item.id)"
            @deleteContent="deleteContent"
            :dataModal="item"
            :date="item.createdAt"
            :title="item.title"
            :author="item.author"
            :body="item.body"
          />
        </div>
      </template>

      <!-- option search, filter, add blog -->
      <template #right>
        <right-content-main @addBlog="modal.add = true" />
      </template>
    </content-main>

    <!-- modal add -->
    <modal v-if="modal.add" @closeModal="modal.add = false" @simpanData="saveData" />

    <!-- modal edit -->
    <modal
      add
      v-if="modal.edit"
      @closeModal="modal.edit = false"
      @simpanData="saveData"
      :dataEdit="selectEdit"
    />
  </main>
</template>

<script>
import { useStore } from 'vuex'

export default {
  data() {
    const store = useStore()

    return {
      store,
      modal: {
        add: store.state.modal.add,
        edit: store.state.modal.edit
      },
      blog: [],

      selectEdit: 0
    }
  },
  methods: {
    editContent(e) {
      this.selectEdit = e
      this.modal.edit = true
    },
    saveData(e) {
      // Save jika modal add true maka akan menyimpan dengan data baru, jika false maka menyimpan data edit
      this.modal.add
        ? this.store.dispatch('postBlog', e).finally(() => {
            this.modal.add = false
          })
        : this.store.dispatch('updateBlog', e).finally(() => {
            this.modal.edit = false
          })
    },
    deleteContent(e) {
      this.store.dispatch('deleteBlog', e.id).finally(() => {
        this.store.dispatch('getBlog')
      })
    }
  },
  created() {
    this.store.dispatch('getBlog')
  },
  computed: {
    getBlog() {
      return this.store.state.blogs
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');

body {
  margin: 0;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (min-width: 1024px) {
  #app {
    display: grid;
    min-height: 100%;
  }
  main {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .header-text {
    font-size: 56px;
    font-weight: 600;
    text-align: center;
  }
  .wrapper {
    width: 100%;
    margin-top: 100px;
    padding: 20px;
  }
}
</style>
