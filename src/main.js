// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueI18n from 'vue-i18n';
import Mint from 'mint-ui';
import 'swiper/css/swiper.css'
import 'mint-ui/lib/style.css'; 
Vue.prototype.axios = axios;
Vue.use(Mint);
Vue.use(VueI18n);

// 使用多文件管理不同的语言是一个好习惯：
const i18n = new VueI18n({
	// locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
	locale: 'zh', // 语言标识
	messages: {
		'zh': require('./common/lang/zh'),
		'en': require('./common/lang/en')
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	i18n,
	components: { App },
	template: '<App/>'
})
