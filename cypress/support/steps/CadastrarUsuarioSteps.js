/*global Given, Then, When*/

import CadastrarUsuarioPage from '../pageObjects/CadastrarUsuarioPage'
const cadastrarUsuarioPage = new CadastrarUsuarioPage

Given("acesso o site Grocery Crud", () => {
    cadastrarUsuarioPage.acessarSite();
})

And("acesso o ambiente de cadastro de usuário", () => {
    cadastrarUsuarioPage.acessarPaginaCadastroUsuario();
    cadastrarUsuarioPage.clicarAddRecord();
})

When("preencho todos os campos de cadastro", () => {
    cadastrarUsuarioPage.preencherCampoCustomerName();
    cadastrarUsuarioPage.preencherCampoContactLastName();
    cadastrarUsuarioPage.preencherCampoContactFirstName();
    cadastrarUsuarioPage.preencherCampoPhone();
    cadastrarUsuarioPage.preencherCampoAddressLine1();
    cadastrarUsuarioPage.preencherCampoAddressLine2();
    cadastrarUsuarioPage.preencherCampoCity();
    cadastrarUsuarioPage.preencherCampoState();
    cadastrarUsuarioPage.preencherCampoPostalCode();
    cadastrarUsuarioPage.preencherCampoCountry();
    cadastrarUsuarioPage.preencherCampoSalesRepEmployeeNumber();
    cadastrarUsuarioPage.preencherCampoCreditLimit();
})

Then("devo cadastrar usuário com sucesso", () => {
    cadastrarUsuarioPage.clicarSave();
    cadastrarUsuarioPage.visualizarMensagemCadastroSucesso();
})