TickFav
-----

Esse projeto é uma lista, aonde você pode selecionar um ticker de uma ação da bolsa de valores e adicionar como favorito. Caso a lista de favoritos esteja vazia, o programa mostra um gráfico com o preço diário do Bovespa. Essas são as ações disponíveis:

- 🌟 (Favoritar);
- ✖️ (Remover);
- 🌙 (Troca de tema);
- 🔃 (Atualizar preços).

Para esse projeto foram utilizados HTML, CSS, JS, um gráfico gerado pelo [Chart.js](https://www.chartjs.org/docs/latest/) e uma API da [Brapi](https://brapi.dev), para consulta dos dados das ações. Essa aplicação foi desenvolvida baseando-se no [desafio](https://efficient-sloth-d85.notion.site/GitFav-f8ff1c18b23745c0b46cd8d61f74b596) proposto pela Rocketseat.

_**Obs.**: O gráfico presente no projeto não reflete os valores reais do Bovespa devido a limitação do plano gratuito da API. Existe uma limitação dos navegadores em apontar um arquivo .js localmente. Dessa forma, ao rodar a aplicação via Live Server no Visual Studio, ou via servidor, funcionará normalmente. Fonte: 
```https://cursos.alura.com.br/forum/topico-from-origin-null-has-been-blocked-by-cors-policy-cross-origin-requests-are-only-supported-for-protocol-schemes-http-data-chrome-chrome-extension-https-101166.```_