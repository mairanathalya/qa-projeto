#language: pt

Funcionalidade: Baixar arquivos
    Descrição: testagem para baixar arquivos no site IBGE

Contexto: 
        Dado que o usuário está na página inicial do site do panorama

Cenário: Baixar dados populacionais
        Quando o usuario clicar na opção "baixar"
        E o usuário fizer o download com o formato "Versão impressa"
        Então o usuário deverá receber um arquivo com os dados populacionais    


