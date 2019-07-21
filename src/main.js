import Vue from 'vue'
import App from './App.vue'

import router from './router'
import ElementUI from 'element-ui'
// 按需引入事件和方法
// // ES6按需导入使用的组件和事件方法模块
// import { Row, Button, MessageBox, Message } from 'element-ui'
// // 组件按需注册
// Vue.use(Row)
// Vue.use(Button)
// // 事件方法按需注册(原型继承的体现)
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$message = Message
// import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
