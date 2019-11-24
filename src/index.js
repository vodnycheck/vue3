import Vue from 'vue';
import App from './app/app.js'

console.log(1);

window.addEventListener('DOMContentLoaded', () => {
    console.log(3);
    Vue.createApp().mount(App, '#app')
})