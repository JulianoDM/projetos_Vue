<template>
    <nav>
        <ul>
          <li class="links_paginas" v-for="rota in rotas" >
          <router-link  :to="rota.path ? rota.path : '/'">{{rota.titulo}}</router-link>
          </li>
        </ul>
      </nav>

</template>

<script>
export default{

   props: ['rotas']
    
}

</script>

<style>


</style>