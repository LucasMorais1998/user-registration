<br />
<p align="center">
    <img src="./github/start.png" alt="Logo" width="250" >

  <h3 align="center">CRUD - MySQL e Nodejs</h3>

  <br/>
  <p align="center">Esse é um projeto do curso técnico que consistia em construir um CRUD utilizando um banco de dados relacional e NodeJs.</p>
</p>

<br/>
<br/>

# ✏ Descrição
<p>O projeto é um sistema simples que realiza as funções de um CRUD, adiciona um usuário ao banco, busca um ou mais usuários no banco, atualiza um usuário no banco e deleta um usuário no banco. Foi seguido o padrão de arquitetura MVC. Este projeto é apenas back-end, para o teste da aplicação foi utilizado o Insomnia.</p>

<br/>

# 🚀 Tecnologias
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

<br/>

# 📷 Confira

<br/>
<p align="center"> 
  <image src="https://im2.ezgif.com/tmp/ezgif-2-8e6d709f54.gif"> 
  <image src="./github/image.jpg" width="650"> 
</p>
    
 <br/>

# ⚙ Instale
<p> 
  
1- Clone o projeto:
```sh
git clone https://github.com/LucasMorais1998/CRUD-sql-node.git
```
  
2- Instale as dependências:
```sh
yarn 
```

3- Configure o banco de dados e preencha o arquivo .env.local
```sh
'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
```

4- Crie a tabela com:
```sh
yarn sequelize db:migrate
```

5- Após a configuração do banco de dados, inicie o servidor:
```sh
yarn dev
```
</p>
