
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
require('gsap/TweenMax');
require('gsap/TimelineMax');
require('gsap/EasePack');
require('gsap/TimelineLite');
require('gsap/TextPlugin');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('intro-component', require('./components/IntroComponent.vue'));
Vue.component('navbar-component', require('./components/NavbarComponent.vue'));

const app = new Vue({
    el: '#app'
});
