Feature: Testes de cadastro de usuário

Background:
    Given acesso o site Grocery Crud

Scenario: cadastro de um usuário
    And acesso o ambiente de cadastro de usuário
    When preencho todos os campos de cadastro
    Then devo cadastrar usuário com sucesso