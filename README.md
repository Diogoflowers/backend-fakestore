[celulares.csv](https://github.com/user-attachments/files/19413512/celulares.csv)🛠️ Pré-requisitos
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

O servidor estará rodando em http://localhost:3001 (ou na porta configurada no seu ambiente).[UpTitle,Price,Description,Image,Rate
"iphone",12.99,"descrição de teste","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519",3.6
"xiomi",35,"xiaomi de teste","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRt7jRishlHhD0_lOMkFPz7IWw2Yf1hsKfmTdL4g8nDPPKRCQOyBJVuoZjKsFU1chSpu1QAA0AEUjX8hil1BOn6O6iUYlYWb3LW2Gj6SsrQLNYkg6IvrK9g",4.9
"motorola",44.55,"descrição de teste","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRg7HoC5eACbaqzWPbRBb0VM8N6ILFv12ZrmJ3uUx0E5QGLQQBtQjgXkBdcXzTlh5c4q861a9ab9bTQ_cTJ2abFD7Ds1QLWDUOR5apC4hhb4yepAAODNyxG",5
"samsung 23",23,"descrição de teste","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQECqMYSg5U7EXmYM0kuTPaIS83zYlauya_IEpAp-sZRC-cZ51cq9MSsScdedEB2CxTuOo99NeB6H-56BIARU8O6JXdPrUtLoHnNTvHZBPXxJL-vKOE5SVZ4Q",3.6loading celulares.csv…]()

