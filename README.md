# Anotações do curso

## Configuração do ambiente:

- Baixe o projeto
- Instale o PHP (https://www.php.net/downloads)
- Entre no terminal e altere o diretório corrente para a raiz do projeto.
- Execute o comando: $ php -S localhost:8080
- Abra o browser e digite, na url, localhost:8080

## Resolver problema de SOP (Same-Origin Policy) Habilitar o CORS para requisições Ajax:

- JSONP (Jason with Padding): Burla o mecanismo de SOP do browser enviando a requisição ajax como se fosse uma requisição de script da página.

- Adicionar no header das requisições, no backend:
```
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
```

## Diretivas:

- Por padrão, uma diretiva compartilha o mesmo scope de onde é utilizada. Para aumentar seu potencial de reuso, podemos isolar seu scope, passando os dados necessários por parâmetro.

- IMPORTANTE: PARA SABER EM QUAL SCOPE ESTAMOS, PODEMOS COLOCAR ``` {{ $id }} ``` NO ARQUIVO HTML ONDE A DIRETIVA ESTÁ INSERIDA E OUTRO DENTRO DO HTML DA PRÓPRIA DIRETIVA.