import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

const app = createApp(App)

// moment untuk format tanggal
import moment from 'moment'

// component
import ModalForm from './components/partials/ModalForm.vue'
import Header from './components/Header.vue'
import MainContent from './components/Content.vue'
import SingleContent from './components/CardContent.vue'
import RightContent from './components/partials/RightAction.vue'

app.config.globalProperties.$filters = {
  formatDate(value) {
    return moment(value).format('LL')
  }
}

app.component('modal-main', ModalForm)
app.component('header-main', Header)
app.component('content-main', MainContent)
app.component('single-content-main', SingleContent)
app.component('right-content-main', RightContent)

app.use(store)

app.mount('#app')
