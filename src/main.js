import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

const app = createApp(App)

// moment untuk format tanggal
import moment from 'moment'

// component
import Modal from './components/partials/ModalForm.vue'

app.config.globalProperties.$filters = {
  formatDate(value) {
    return moment(value).format('LL')
  }
}

app.component('modal', Modal)

app.use(store)

app.mount('#app')
