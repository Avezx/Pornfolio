import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



const sectionOne = document.querySelector(".bg-img")
const navbar = document.querySelector(".button")

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting === true) {
      navbar.classList.remove("changed")
    } else {
      navbar.classList.add("changed")
    }
  }
}, {
  rootMargin: "-8%",
})

observer.observe(sectionOne)


