<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Task Manager - NestJS + PostgreSQL + Typeorm + Docker
Aplicação backend desenvolvida com tecnologias modernas e práticas de desenvolvimento, como NestJS, PostgreSQL e Docker, para oferecer um sistema de gerenciamento de tarefas eficiente e escalável.

Tecnologias Utilizadas
* NestJS (v18.2.0)
* PostgreSQL (v14.2-alpine)
* Typescript (v5.1.3)
* Docker (v20.10.21)
* pg (v8.11.3)
* @nestjs/typeorm (v10.0.0)
* class-transformer (v0.5.1)
* class-validator (v0.14.0)



Deployment
[Api Task](https://backend-task-manager-nestjs-production.up.railway.app/api/task)


Repositório Frontend
[Task Manager Frontend](https://github.com/RafaelCardoso11/frontend-task-manager-reactJS)

É possível no projeto:
1) Adicionar novas tarefas (Create)
2) Visualizar novas tarefas (List and ReadOne)
3) Editar tarefas (Update)
4) Marcar como concluída as tarefas (Completion)



## Inicialização do Projeto (Desenvolvimento)

### Pré-requisitos

Certifique-se de que você tenha o Node.js (v18.16.1) e o Yarn(v1.22.19) instalados em sua máquina. Você pode verificar a instalação executando os seguintes comandos no terminal:

```bash
node -v 
yarn -v
```

### Inicialização
1. **Navegue para a pasta do projeto:** Use o comando `cd` para entrar na pasta do projeto onde está localizado o arquivo `package.json`.

```bash
cd caminho-para-o-seu-projeto
```
2. **Instale as dependências:**
```bash
yarn install
```
3. **Inicie o servidor de desenvolvimento:**
```bash
yarn start:dev
```


## Inicialização do Projeto (Produção)

### Pré-requisitos

Certifique-se de que você tenha o docker instalado em sua máquina.

```bash
docker -v
```

### Inicialização
1. **Navegue para a pasta do projeto:** Use o comando `cd` para entrar na pasta do projeto onde está localizado o arquivo `docker-compose.yml`.

```bash
cd caminho-para-o-seu-projeto
```
3. **Configure as variáveis de ambiente**
 `exemplo em .env.example`
2. **Suba os containers**
```bash
docker-compose up 
```


``NestJS ``
``PostgreSQL ``
``TypeORM ``
``Typescript ``

Qualquer dúvida estou a disposição.