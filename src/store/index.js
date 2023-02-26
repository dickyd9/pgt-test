//import the createStore object from Vuex
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    blogs: [],
    editBlog: {},
    modal: {
      add: false,
      edit: false
    }
  },
  actions: {
    async getBlog({ commit }) {
      const response = await axios.get('https://63fa0847473885d837d73303.mockapi.io/api/v1/blog')
      commit('SET_BLOG', response.data)
    },
    async getBlogId({ commit }, id) {
      const response = await axios.get(
        `https://63fa0847473885d837d73303.mockapi.io/api/v1/blog/${id}`
      )
      commit('SET_BLOG_ID', response.data)
    },
    async updateBlog({ commit }, blog) {
      const response = await axios.put(
        `https://63fa0847473885d837d73303.mockapi.io/api/v1/blog/${blog.id}`,
        blog
      )
      commit('EDIT_BLOG', response.data)
    },
    async postBlog({ commit }, blog) {
      const response = await axios.post(
        'https://63fa0847473885d837d73303.mockapi.io/api/v1/blog',
        blog
      )
      commit('NEW_BLOG', response.data)
    },
    async deleteBlog({ commit }, id) {
      await axios.delete(`https://63fa0847473885d837d73303.mockapi.io/api/v1/blog/${id}`)
      commit('REMOVE_BLOG', id)
    }
  },
  mutations: {
    SET_BLOG(state, blog) {
      state.blogs = blog
    },
    SET_BLOG_ID(state, blog) {
      state.editBlog = blog
    },
    EDIT_BLOG: (state, blogEdit) => {
      const index = state.blogs.findIndex((b) => b.id === blogEdit.id)
      if (index !== -1) {
        state.blogs.splice(index, 1, blogEdit)
      }
    },
    NEW_BLOG: (state, blog) => state.blogs.unshift(blog),
    REMOVE_BLOG: (state, id) => (
      state.blogs.filter((blog) => blog.id !== id), state.blogs.splice((blog) => blog.id, 1)
    )
  }
})
