import { createApp } from 'vue'
import App from './04_computed与watch/App.vue'


const app = createApp(App);

// app.mixin({
//   created() {
//     console.log('全局的created混入')
//   },
// })

app.mount('#app');
