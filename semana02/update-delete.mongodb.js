/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO BANCO DE DADOS */
const database = 'BD3-Projeto';

/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DA COLEÇÃO DE ARQUIVOS */
const collection = 'Livraria';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA, SERÁ CRIADO */
use(database);

/* ATUALIZAÇÃO DE UM ARQUIVO NO MONGODB: */
/*db['Livraria'].update(
    {codigo: '1'},
    {$set:{titulo:'TESTE DE ALTERAÇÃO DE TÍTULO'}}
);
*/

/* EXCLUIR UM ARQUIVO NO MONGODB: */
db[Livraria].deleteOne({codigo:'1'});
