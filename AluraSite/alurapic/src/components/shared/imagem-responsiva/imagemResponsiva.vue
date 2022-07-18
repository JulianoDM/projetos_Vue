<template>
    <img class="imagem_responsiva" :src="url" :alt="titulo">
</template>

<script>
export default{
    props: ['url', 'titulo']

}

</script>

<style scoped>

.imagem_responsiva{
  max-width: 100%;
  width: 200px;
  height: 200px;
 
}

</style>