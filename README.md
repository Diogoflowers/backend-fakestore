Certifique-se de ter os seguintes requisitos instalados: Node.js / MySQL 


### 1. Clone o repositório

git clone https://github.com/Diogoflowers/backend-fakestore

cd backend-fakestore

### 2. Configure o arquivo .env

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

PORT = 3001

DATABASE_URL="mysql://USUARIO:SENHA@localhost:HOST/NOME_DO_BANCO"

JWT_SECRET="SUA_CHAVE_SECRETA_PARA_JWT"

Substitua os seguintes valores:

USUARIO: Seu usuário do MySQL.

SENHA: A senha do seu usuário do MySQL.

NOME_DO_BANCO: O nome do banco de dados que você deseja usar.

SUA_CHAVE_SECRETA_PARA_JWT: Uma chave secreta para assinar tokens JWT.

### 3. Instale as dependências

npm install

### 4. Configure o Prisma

npx prisma generate

npx prisma migrate dev --name init


### 5. Inicie o servidor
Para rodar o projeto, execute:

node src/index.js

O servidor estará rodando em http://localhost:3001 (ou na porta configurada no seu ambiente).



### OBSERVAÇÕES

Para a importação do CSV funcionar corretamente, o arquivo CSV deve conter os cabeçalhos: Title, Price, Description, Image e Rate.

CSV para testes:
[celulares.csv](https://github.com/user-attachments/files/19413670/celulares.csv)


[notebooks.csv](https://github.com/user-attachments/files/19413672/notebooks.csv)






