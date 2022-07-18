<template>
    <div class="painel">
        
          <h2 class="painel_titulo" @dblclick="visivel = !visivel">{{titulo}}</h2>
        <transition name="painel_fade">
          <div class="painel_conteudo" v-show="visivel">
            <slot></slot>
          </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['titulo', 'url'],

    data(){

      return{
        visivel: true
      }

    },

    computed:{
      
    }
 
}

</script>

<style scoped>
.painel{
  text-align: center;
  box-shadow: 5px 5px 5px grey;
  margin: 5px;
  display: inline-block;
  width: 200px;
  height: 300px;
  
  vertical-align: top;
  border: solid 2px rgb(38, 38, 38);
}

.painel .painel_titulo{
  background-color: rgb(137, 137, 227);
  text-align: center;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1rem;

}

.painel .painel_conteudo{

}
.painel_fade-enter, .painel_fade-leave-active{
  opacity: 0;
  
}

.painel_fade-enter-active, .painel_fade-leave-active{

  transition: opacity .4s;

}



</style>

