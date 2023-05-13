Feature: Testes de visualização de usuário cadastrado

Background:
    Given acesso o site Grocery Crud

Scenario: visualização de usuário cadastrado
    And acesso o ambiente de pesquisa de usuários
    When preencho os campos de pesquisa
    Then devo visualizar o usuário pesquisado