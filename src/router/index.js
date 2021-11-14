import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/property',
		name: 'Property',
		component: () => import(/* webpackChunkName: "Property" */ '../views/Property.vue'),
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue'),
	},
	{
		path: '/contacts',
		name: 'Contacts',
		component: () => import(/* webpackChunkName: "Contacts" */ '../views/Contacts.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
