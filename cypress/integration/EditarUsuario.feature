Feature: Testes de edição de usuário cadastrado

Background:
    Given acesso o site Grocery Crud

Scenario: edição de usuário cadastrado
    And acesso o ambiente de pesquisa de usuários
    When edito um usuário anteriormente cadastrado
    Then devo visualizar alterações no usuário