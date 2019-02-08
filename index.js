Vue.use(VueRouter)

var Navbar = httpVueLoader('components/Navbar.vue')
var Index =  httpVueLoader('components/Index.vue')
var About =  httpVueLoader('components/About.vue')

var router = new VueRouter({
	routes:[
		{ path:'/about', component: About },
		{ path:'/', component: Index }
	]
})

new Vue({
	el: '#v-app',
	router: router,
	components: {
		Navbar, 
		Index, 
		About
	}
})