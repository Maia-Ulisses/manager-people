# manager-people

#### manager-people-ui

```sh
$ npm install 
$ npm start
```

Obs: Não se esqueça de configurar a rota base da manager-people-api no manager-people-ui.
Para tal configuração, favor olhar o arquivo : manager-people-ui\src\config\settings.js

#### manager-people-api

configurar a connection string correta no appsettings e rodar a aplicação.
```sh
 "ConnectionStrings": {
    "DefaultConnection": "Server=.\\{server};Initial Catalog=manager-people;Integrated Security=True;;Connection Timeout=30;"
  },
```