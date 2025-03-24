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
[Uploading Title,Price,Description,Image,Rate
"iphone",12.99,"descrição de teste","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519",3.6
"xiaomi",35,"xiaomi de teste","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRt7jRishlHhD0_lOMkFPz7IWw2Yf1hsKfmTdL4g8nDPPKRCQOyBJVuoZjKsFU1chSpu1QAA0AEUjX8hil1BOn6O6iUYlYWb3LW2Gj6SsrQLNYkg6IvrK9g",4.9
"motorola",44.55,"descrição de teste","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRg7HoC5eACbaqzWPbRBb0VM8N6ILFv12ZrmJ3uUx0E5QGLQQBtQjgXkBdcXzTlh5c4q861a9ab9bTQ_cTJ2abFD7Ds1QLWDUOR5apC4hhb4yepAAODNyxG",5
"samsung 23",23,"descrição de teste","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQECqMYSg5U7EXmYM0kuTPaIS83zYlauya_IEpAp-sZRC-cZ51cq9MSsScdedEB2CxTuOo99NeB6H-56BIARU8O6JXdPrUtLoHnNTvHZBPXxJL-vKOE5SVZ4Q",3.6celulares.csv…]()

[notebooks.csv](https://github.com/user-attachments/files/19413672/notebooks.csv)

[Uploading notebooks.csTitle,Price,Description,Image,Rate
"Notebook ASUS",333,"NOTEBOOK DA ASUS","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsZ-ucbIBDYdw4K_WtqinwidDCljRe018XxlKcvTjubJvD9wXUo8ae6Qz10DRgRzlMuATJuUyB4ePtmChaeGMvHNR8U3wVNLjhz7vAjE8GZOT_Kh617Cl1",3.6
"Notebook CELERON",205,"NOTEBOOK DA CELERON","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkFD2VkL2qnbrbd2EzK3wBSO_y__FdSFm2HrTEqvzzu6cTHbD7z89GtrqC_7Py_oa6QlSYRiyTiZnGTnG_6BznX_I40ZbNSIg2aPN7U9Tp5K20aWf1ncE4",4.9
"Notebook LENOVO",888,"NOTEBOOK DA LENOVO","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZmnb7p7UcCV3yJiXEp0zoeetE8HQ-DOEeM9LApyBuY6S5L0SeTjL7iYa-nyTVB-2pSxM8m35ELx_bc3uudQ10gdCaeJqLW_b1P6Blk2_ndxjLN1Gvj4nhXQ",5
"Notebook ACER 23",150,"NOTEBOOK GAMER DA ACER","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTs-cSmiRpWK79jRcMcA2oWP0GoXz5gTzgoCOj9SXDN2rSd0C6b6SGvgw3BkoQ2i-m7edFFW6em2880c9XaeEVx3KYG8nKzvdrdrsSeiH-VsIci2bFjz0ugHvI",3.6v…]()




