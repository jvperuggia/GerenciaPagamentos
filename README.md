🚀 **Pipe Pagamentos**

Este workflow tem o objetivo de automatizar os testes de pagamento do meu projeto (GerenciaPagamentos), podendo ser executado de três maneiras diferentes, 
sendo de forma Manual (através de click no Run da aba "Actions"), Agendado (onde posso selecionar dias da semana específicos, e horários e ou períodos) e 
Automaticamente, (logo após realizar Push na Main ou criar PRs para Main). A Pipe também gera relatórios detalhados e disponibiliza um resumo no GitHub Actions, utilizando o Step-Summary.


📅 **Quando a pipeline é executada?**
A pipeline dispara em diferentes situações:
**1 - Execução Manual:** você pode rodar pelo botão “Run workflow” do GitHub.

**2 - Execução Automatica**
  **2.1 - Push na branch main:** Sempre que subir novar atualização na branch principal.
  **2.2 - Pull Requests para main:** Inclui essa execução para pegar possíveis problemas antes de fazer o merge na Main.

**3 - Execução Agendada:** Configurei para rodas 2 agendamentos: "Quintas e Sextas a cada 15 minutos" e "Sábados e domingos a cada 50 minutos.".
A configuração do agendamento é separada por 5 asteriscos " * * * * * " e funciona da seguinte forma:

      ┌───────────── minuto (0 - 59)
      │ ┌─────────── hora (0 - 23)
      │ │ ┌───────── dia do mês (1 - 31)
      │ │ │ ┌─────── mês (1 - 12)
      │ │ │ │ ┌───── dia da semana (0 - 6, onde 0 = domingo)
      │ │ │ │ │
      │ │ │ │ │
      * * * * *
Então se eu quiser rodar por exemplo no dia 25 de Junho as 00:30hs, seria assim: '30 0 25 6 *'. neste exemplo o dia da semana eu mantive '*' porque não foi necessário usar.
Os meus agendamentos ficaram assim: 

    **#1° agendamento** - Roda as Quintas e Sextas a cada 15 minutos
    - cron: '*/15 * * * 4,5'
    **#2° agendamento** - Roda aos sábados e domingos a cada 50 minutos    
    - cron: '0 * * * 4,6'        
    
**Obs:** Note que para período de tempo usando de 15 em 15 minutos por exemplo, eu declarei os minutos como: '*/15' e não precisei utilizar horas.
também não utilizei Dia e Mês porque optei por utilizar dias da semana.
    

**⚙️ O que a pipeline faz?**

**1. Preparação do ambiente**
Faz o checkout do código.
Instala o Node.js (versões 20.x, 22.x e 23.x), _Também deixei uma linha comentada para quando quiser rodar apenas a ultima versão do node._
Configura cache de dependências para acelerar execuções futuras.
Obs: Primeiro fiz com as 3 versões, mas deixei ajustado para executar apenas na versão 23.x

**2. Instalação e testes**
Instala todas as dependências do projeto (npm install).
Roda os testes com Mochawesome, que gera relatórios em JSON.

**3. Consolidação dos relatórios**
Junta todos os relatórios JSON em um único arquivo (merged.json).
Gera um relatório HTML consolidado (index.html) para visualização amigável.

**4. Upload dos relatórios**
Faz upload da pasta mochawesome-report como artefato chamado Relatório de Testes Mocha.
Esse artefato pode ser baixado diretamente da aba Actions.

**5. Resumo no GitHub Actions**

Para melhorar a visualização, um resumo utilizando Step-Summary, ele exibe um resumo com as seguintes informações da pipe:
  **Total de testes rodados.**
  **Quantos passaram ✅.**
  **Quantos falharam ❌.**

**OBS:** visível na aba Summary da execução.
