<template>
    <button @click="disparaAcao()" :class="estiloDoBotao" :type="tipo">{{rotulo}}</button>
</template>

<script>
export default{

    props: ['tipo', 'rotulo', 'confirmacao', 'estilo'],

    methods: {

        disparaAcao(){
            if(this.confirmacao){
                if(confirm('Confirma Operação?')){
                    this.$emit('botaoAtivado')

                }
                return;
            }
            this.$emit('botaoAtivado');
            
        }
    },

    computed: {
        estiloDoBotao(){
            if (this.estilo =='padrao' || !this.estilo) return 'botao botao-padrao';
            if (this.estilo =='perigo') return 'botao botao-perigo';
        }
    }
}


</script>

<style>
.botao-perigo{
    color: red;
}

.botao-padrao{
    color: rgb(0, 162, 255);
}

</style>