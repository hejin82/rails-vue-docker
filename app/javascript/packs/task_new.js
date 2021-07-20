import TurbolinksAdapter from 'vue-turbolinks'
import { createApp } from 'vue/dist/vue.esm-bundler'
// import { createApp } from "vue"
import TaskNew from "../components/task-new"

document.addEventListener('turbolinks:load', () => {
  const app = createApp(TaskNew);
  app.use(TurbolinksAdapter)
  app.mount('#task_new');

})