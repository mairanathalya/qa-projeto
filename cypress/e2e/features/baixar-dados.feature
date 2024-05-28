#language: pt-BR

Funcionalidade: Baixar arquivos
    Descrição: testagem para baixar arquivos no site IBGE

Contexto: 
        Dado que o usuário está na página inicial do site do IBGE

Cenário: Baixar dados populacionais
        Quando o usuário clicar na seção "População"
        Então o usuário será redirecionado para página do censo
        E o usuário selecionar a opção "Baixar"
        E o usuário escolher as opções de formato para baixar o arquivo
        E o usuário clicar na opção desejada
        Então o usuário deverá receber um arquivo com os dados populacionais
