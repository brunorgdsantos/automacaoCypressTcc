Feature: Testes de exclusão de usuário cadastrado

Background:
    Given acesso o site Grocery Crud

Scenario: edição de usuário cadastrado
    And acesso o ambiente de pesquisa de usuários
    When pesquiso um usuário para exclusão
    Then devo visualizar exclusão do usuário