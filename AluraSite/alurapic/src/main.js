import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
/*Temos que declara a chaves dentro de routes 
pelo motivo de não usarmos o export default, então,
precisamos especificar o que será importado do exporte pedido */
import {routes} from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
   routes: routes,
   //mode: history serve para retirar o hash # do nosso link 
   mode: 'history'
})


new Vue({
  //Elemento vai indicar onde é nosso alvo em index HTML
  //Usamos um seletor css para indicar o id que está no nosso HTML
  el: '#app',
  /*Render recebe um paramêtro que é passado pela vue instance, chama-o de h
  e então passamos para h qual o componente que queremos renderizar
   */
  router: router,
  render: h => h(App)
})
