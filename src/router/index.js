import {
	createRouter,
	createWebHistory
} from 'vue-router'

import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Login",
		component: () => import("../views/Login.vue")
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		children: [
			{
				path: "/home/dash",
				name: "Dashbord",
				component: () => import("../views/Dashbord.vue")
			},
			{
				path: "/home/shop",
				name: "ShopAdd",
				component: () => import("../views/ShopAdd.vue")
			},
			{
				path: "/home/category",
				name: "Category",
				component: () => import("../views/Category.vue")
			},
			{
				path: "/home/permission",
				name: "Permission",
				component: () => import("../views/Permission.vue")
			},
			{
				path: "/home/products",
				name: "Products",
				component: () => import("../views/Products.vue")
			},
			{
				path: "/home/product_add",
				name: "ProductAdd",
				component: () => import("../views/ProductAdd.vue")
			},
			{
				path: "/home/order",
				name: "OrderList",
				component: () => import("../views/OrderList.vue")
			},
			{
				path: "/home/check",
				name: "Check",
				component: () => import("../views/Check.vue")
			},
			{
				path: "/home/settings/password",
				name: "Password",
				component: () => import("../views/Password.vue")
			},
			{
				path: "/home/settings/message",
				name: "Message",
				component: () => import("../views/Message.vue")
			},
		]
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
