/*global Given, Then, When*/

import DeletarUsuarioPage from '../pageObjects/DeletarUsuarioPage'
import EditarUsuarioPage from '../pageObjects/EditarUsuarioPage'
const deletarUsuarioPage = new DeletarUsuarioPage
const editarUsuarioPage = new EditarUsuarioPage

When("pesquiso um usuário para exclusão", () => {
    deletarUsuarioPage.preencherCampoCustomerName();
    deletarUsuarioPage.visualizarUsuarioPesquisado();
})

Then("devo visualizar exclusão do usuário", () => {
    deletarUsuarioPage.selecionarUsuarioPesquisado();
    deletarUsuarioPage.deletarUsuario();
    deletarUsuarioPage.visualizarMensagemDelete();
    deletarUsuarioPage.confirmarDelete()
    deletarUsuarioPage.visualizarConfirmacaoDelete();
})
