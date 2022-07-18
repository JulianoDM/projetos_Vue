//Importando os componentes
import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

//Condfigurações das rotas
export const routes = [
    
    /*path: caminho, quando declarado em branco é igual declarar a barra sozinha '/' */
    { path: '', component: Home, titulo:'Home'},
    { path: '/cadastro', component: Cadastro, titulo:'Cadastro'}
];