/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO BANCO DE DADOS */
const database = 'BD3-Projeto';

/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DA COLEÇÃO DE ARQUIVOS */
const collection = 'Livraria';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA, SERÁ CRIADO */
use(database);

/* SELECIONA OS DADOS DE TODOS OS ARQUIVOS SEM CRITÉRIO: */
db['Livraria'].find();

/* SELECIONA ARQUIVOS COM DADOS DE ACORDO COM A CATEGORIA DEFINIDA: */
// db['Livraria'].find({"categoria": "Fantasia Heroica" });

/* SELECIONA ARQUIVOS COM DADOS DE ACORDO COM A CATEGORIA DEFINIDA E OCULTANDO CERTOS CAMPOS: */
// db['Livraria'].find({"categoria": "Fantasia Heroica"}, {"_id":0, "codigo":0, "descricao":0});


