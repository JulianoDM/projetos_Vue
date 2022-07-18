<template>

      <div>
        <div>
          <h1 id="titulo_alurapic">{{titulo}}</h1>
        </div>
        <div class="pesquisa_foto">
          <input class="filtro"  type="search" placeholder="filtre por parte do título" v-on:input=" filtro = $event.target.value">
        </div>
        <section class="cards_imagens">
          <ul class="imagens_API">

            <li class="imagens_itens" v-for="foto of fotosComFiltro">
              <meu_painel :titulo="foto.titulo">

                <minha_imagem v-bind:url="foto.url" v-bind:titulo="foto.titulo" />
                <!-- O comando .native faz como que possamos utilizar o evento click dentro de um componente
                pois um componente não pode receber esse evento, então ele executa o click pelo button por 
                de baixo dos panos.-->
                <meu_botao tipo="button"
                 rotulo="REMOVER"
                  @botaoAtivado="remove(foto.titulo)"
                  :confirmacao="true" 
                  estilo="perigo" />

              </meu_painel>
            </li>
          </ul>
      
        </section>
      </div>
</template>

<script>
import painel from '../shared/painel/painel.vue';
import imagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva.vue';
import botao from '../shared/botao/botao.vue'

export default {
  components: {
    meu_painel: painel,
    minha_imagem: imagemResponsiva,
    meu_botao: botao
  },

  data(){
    return {
      titulo: 'Alurapic',
      //Criamos um array para inserir as imagens que iremos utilizar
      fotos:[],
      filtro: ''
    }
  },
  //Toda computed proprety eu escrevo como um método, nesse caso o filtrar as imagens
  computed:{

    fotosComFiltro(){

      if(this.filtro){
                              /*Criamos uma expressão regular que o valor dentro dela é o filtro de pesquisa que deve
                              ser executado */
        let expressaoRegular = new RegExp(
          //this.filtro cria um atalho para acessar o objeto filtro 
          this.filtro
          //trim é para não considerar espaços na string
          .trim(),
          //'i' 'insensitive' signfica que não faz diferença se a pesquisa for em letra maiuscula ou minuscula
           'i');
                        //filter (filtra uma lista)
          return this.fotos.filter(foto => expressaoRegular.test(foto.titulo))
                      //expressão testa se o que ta em filtro bate com o titulo das imagens

      }else{
        /*Se caso filtro for false retorna o objeto fotos inteiro. Como o filtro é uma string quando seu campo está vazio é considerado como false*/
        return this.fotos;
      }

    }

  },

  methods: {

    remove(foto, confirmacao){
      alert('Remover a foto ' + foto);
    }

  },

  created(){
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
    /*Temos o res que é de response que nos retorna um json */
    .then(res => res.json())
    /*Estou dizendo que quero retornar o json dentro do nosso array de fotos*/
    .then(fotos => this.fotos = fotos)
    //catch retorna uma mensagem caso tenhamos um erro 
    .catch(err => console.log(err));      
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
  list-style: none;
}

#titulo_alurapic{
  text-align: center;
  
}

.pesquisa_foto{
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.pesquisa_foto input{
  display: block;
  width: 800px;
  box-shadow: 5px 5px 5px rgb(178, 219, 255);
  margin: 15px 0;
}

.cards_imagens{}

.cards_imagens .imagens_API{
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
}

.imagens_itens{
  
}



</style>

