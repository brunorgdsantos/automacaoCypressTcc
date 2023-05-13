/*global Given, Then, When*/

import VisualizarUsuarioPage from '../pageObjects/VisualizarUsuarioPage'
const visualizarUsuarioPage = new VisualizarUsuarioPage

And("acesso o ambiente de pesquisa de usuários", () => {
    visualizarUsuarioPage.acessarAmbientePesquisaUsuario();
})

When("preencho os campos de pesquisa", () => {
    visualizarUsuarioPage.preencherCampoCustomerName();
})

Then("devo visualizar o usuário pesquisado", () => {
    visualizarUsuarioPage.visualizarUsuarioCadastrado();
})