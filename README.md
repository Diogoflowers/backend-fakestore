Projeto desenvolvido utilizando **Node.js**, **Prisma**, **MySQL** e **JavaScript**.

---

## 🛠️ Pré-requisitos


- [Node.js](https://nodejs.org/) (v14+ recomendado)
- [MySQL](https://www.mysql.com/)

Além disso, você precisará de um banco de dados MySQL em execução. Caso não tenha o MySQL instalado, siga as instruções [aqui](https://dev.mysql.com/doc/refman/8.0/en/installing.html).

---

## 📥 Instalação

### 1. Clone o repositório

git clone https://github.com/Diogoflowers/backend-fakestore
cd backend-fakestore

### 2. Criar arquivo .env

DATABASE_URL="mysql://USER:PASSWORD@localhost:PORT/DB"

JWT_SECRET="SUA SENHA DO TOKEN"



### 2. Rode os códigos no terminal

npm install

npx prisma generate

npx prisma migrate dev --name init

### 2. Inicie o projeto

src/node.js











