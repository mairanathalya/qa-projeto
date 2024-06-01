#language: pt

Funcionalidade: Acessar estatísticas
    Descrição: testagem para verificar estatísticas no site IBGE

Contexto: 
        Dado que o usuário está na página inicial do site do IBGE

Cenário: Visualizar estatísticas populacionais
        Quando o usuário selecionar no menu a opção "Estatísticas"
        E o usuário selecionar a opção "Sociais"
        E o usuário selecionar a opção "População"
        Então o usuário será redirecionado para a página de estatísticas populacionais