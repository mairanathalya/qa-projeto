#language: pt

Funcionalidade: Acessar informação
    Descrição: testagem para acessar informações no site IBGE

Contexto: 
        Dado que o usuário está na página inicial do site do IBGE

Cenário: Acessar informações populacionais no site do IBGE
        Quando o usuário clicar na seção "População"
        E o usuário for redirecionado para a página de informações populacionais
        Então o usuário deverá encontrar as informações populacionais 