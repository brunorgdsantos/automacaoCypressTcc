/*global Given, Then, When*/

import EditarUsuarioPage from '../pageObjects/EditarUsuarioPage'
import VisualizarUsuarioPage from '../pageObjects/VisualizarUsuarioPage'
const editarUsuarioPage = new EditarUsuarioPage
const visualizarUsuarioPage = new VisualizarUsuarioPage

And("acesso o ambiente de pesquisa de usuários", () => {
    editarUsuarioPage.acessarAmbientePesquisaUsuario();
})

When("edito um usuário anteriormente cadastrado", () => {
    //editarUsuarioPage.acessarAmbientePesquisaUsuario();
    visualizarUsuarioPage.preencherCampoCustomerName();
    editarUsuarioPage.clicarEdit();
    editarUsuarioPage.preencherCampoCustomerName();
})

Then("devo visualizar alterações no usuário", () => {
    editarUsuarioPage.clicarUpdateChanges();
    editarUsuarioPage.visualizarMensagemEditadoSucesso();
})
