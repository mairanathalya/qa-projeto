#language: pt-BR

Funcionalidade: Acessar informação
    Descrição: testagem para acessar informações no site IBGE

Contexto: 
        Dado que o usuário está na página inicial do site do IBGE

Cenário: Acessar informações populacionais no site do IBGE
        Quando o usuário clicar na seção "População"
        Então  o usuário ser redirecionado para a página de informações populacionais


