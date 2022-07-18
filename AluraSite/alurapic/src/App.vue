<template>
    <div>
      <menu_pesquisa :rotas="routes"></menu_pesquisa>

      <!--Esse é o router que exibe os componentes pela rota-->
      <transition name="troca_pagina">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>

import {routes} from './routes'
import menu from './components/shared/menu/menu.vue';



export default {

  components: {
    menu_pesquisa: menu
    
  },

  data(){
    return{
      /*Quando a propriedade tem o mesmo nome do valor basta apenas declara o nome  */
      routes
    }
  }
}

</script>

<style>
h1, div, header, ul, li{
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  font-family: helvetica;
}

.troca_pagina-enter, .troca_pagina-leave-active{
  opacity: 0;
  
}

.troca_pagina-enter-active, .troca_pagina-leave-active{

  transition: opacity .2s;

}



</style>

