import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount("#app");

const sectionOne = document.querySelector(".bg-img");
const buttons = document.querySelectorAll(".button");

const observer = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			console.log(entry);
			console.log(buttons);
			if (entry.isIntersecting === true) {
				buttons.forEach((button) => button.classList.remove("changed"));
			} else {
				buttons.forEach((button) => button.classList.add("changed"));
			}
		}
	},
	{
		rootMargin: "-8%"
	}
);

observer.observe(sectionOne);



