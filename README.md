(https://github.com/user-attachments/files/19413512/celulares.csv)🛠️ Pré-requisitos
Antes de começar, certifique-se de ter os seguintes requisitos instalados:

Node.js (versão 14 ou superior recomendada)

MySQL (ou um serviço de banco de dados MySQL em nuvem)

Git (opcional, mas recomendado para clonar o repositório)

📥 Instalação
Siga os passos abaixo para configurar e executar o projeto localmente.

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
Execute o seguinte comando para instalar as dependências do projeto:

npm install

### 4. Configure o Prisma
Gere o cliente do Prisma e aplique as migrações ao banco de dados:

npx prisma generate

npx prisma migrate dev --name init

npx prisma generate: Gera o cliente Prisma com base no schema.

npx prisma migrate dev --name init: Executa as migrações para criar as tabelas no banco de dados.

### 5. Inicie o servidor
Para rodar o projeto, execute:

npm start

Ou, se preferir:

node src/index.js

O servidor estará rodando em http://localhost:3001 (ou na porta configurada no seu ambiente).



arquivo CSV PARA TESTE:

[celulares.csv]

