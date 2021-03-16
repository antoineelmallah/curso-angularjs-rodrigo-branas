# Anotações do curso

## Resolver problema de SOP (Same-Origin Policy) Habilitar o CORS para requisições Ajax:

- JSONP (Jason with Padding): Burla o mecanismo de SOP do browser enviando a requisição ajax como se fosse uma requisição de script da página.

- Adicionar no header das requisições, no backend:
'Access-Control-Allow-Origin': '*'
'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
'Access-Control-Allow-Headers': 'Content-Type'
