#Language: pt

Funcionalidade: Consultar dados populacionais
    Descrição: testagem para consultar dados populacionais

Contexto:
        Dado que o usuário está na página de informações populacionais do IBGE

Esquema do Cenário: Pesquisar dados populacionais
        Quando o usuário clicar na seção "População"
        Então o usuário será redirecionado para página do censo
        E o usuário preencherá o campo de busca "Local" com o nome de um <local>
        E o usuário clicar no botão de pesquisa
        Então o usuário deverá ver os dados populacionais do <local> pesquisado
        Exemplos:
        | local       |
        | "região"    |
        | "município" |
        