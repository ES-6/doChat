// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
Vue.use(VueRouter);
//------------------触摸控件------------------
import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'});
//-------------------------------------------
import vRoll from 'vroll'
Vue.use(vRoll);
const routes = [
  { path: '/Main', name: 'Main', component: require('./components/Notice') },
  { path: '/', name: 'Login', component: require('./components/Login') },
  { path: '/Quit/:name', name: 'Quit', component: require('./components/Login') },
  { path: '/App', name: 'App', component: require('./components/App') },
  { path: '/Contacts', name: 'Contacts', component: require('./components/Contacts') },
  { path: '/Me', name: 'Me', component: require('./components/Me') },
  { path: '/Store', name: 'AppStore', component: require('./components/app/AppStore') },
  { path: '/Details', name: 'Details', component: require('./components/me/Details') },
  { path: '/Information/:name/:org/:enMobile/:duty/:telPhone', name: 'Information', component: require('./components/contacts/Information') },
  { path: '/Version', name: 'Version', component: require('./components/me/Version') },
  { path: '/Help', name: 'Help', component: require('./components/me/Help') },
  { path: '/GenderSetting', name: 'GenderSetting', component: require('./components/me/GenderSetting') },
  { path: '/TimeOut', name: 'TimeOut', component: require('./components/brick/TimeOut') },
  { path: '/ChangePassword', name: 'ChangePassword', component: require('./components/me/ChangePassword') },
  { path: '/Iframe', name: 'Iframe', component: require('./components/Iframe') }
];

const router = new VueRouter({
  routes
});


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');