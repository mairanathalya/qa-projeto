#language: pt-BR

Funcionalidade: Acessar notícias 
    Descrição: testagem para acessar notícias no site IBGE

Contexto: 
        Dado que o usuário está na página inicial do site do IBGE

Cenário: Acessar notícias relacionadas à estatísticas econômicas
        Quando o usuário clicar na seção "Agência IBGE Notícias"
        E o usuário selecionar no menu a opção "Notícias"
        E o usuário selecionar a opção "Estatísticas Econômicas"
        Então o usuário será redirecionado para a página de notícias relacionadas à estatísticas econômicas

