import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false

Vue.component('LikeNumber', LikeNumber)

Vue.filter('upperCase', function(value){
  return value.toUpperCase();
})

// グローバルmixinはすべてのコンポーネントに自動的に登録されるので注意
Vue.mixin({
  created(){
    console.log("Global mixin")
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
