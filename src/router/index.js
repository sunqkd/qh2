import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import guest from '@/components/guest'
import industry from '@/components/industry'
import media from '@/components/media'
import roadshow from '@/components/roadshow'
Vue.use(Router)

export default new Router({
	// mode: 'history',
	routes: [
		{
			path: '',
			redirect: '/index'
		},
		{ // 主页
			path: '/index',
			name: 'homePage',
			component: homePage
		},
		{
			path:'/roadshow',
			name: 'roadshow',
			component: roadshow
		},
		{ // 嘉宾评委报名
			path:'/guest',
			name: 'guest',
			component: guest
		},
		{ // 前海产业对接
			path:'/industry',
			name: 'industry',
			component: industry
		},
		{ // 媒体商务
			path:'/media',
			name: 'media',
			component: media
		}
	]
})
