/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO BANCO DE DADOS */
const database = 'BD3-Projeto';

/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DA COLEÇÃO DE ARQUIVOS */
const collection = 'Livraria';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA, SERÁ CRIADO */
use(database);

/* SELECIONA DOCUMENTOS COM USO DO OPERADOR MAIOR $gt */
// db['Livraria'].find({valor:{$gt:100}}); //$gt maior que

/* SELECIONA DOCUMENTOS COM USO DO OPERADOR MENOR $lt */
// db['Livraria'].find({valor:{$lt:110}}); //$lt menor que

/* DEFININDO UM INTERVALO ENTRE VALORES: */
// db['Livraria'].find({valor:{$gte:110, $lte:150}}); //$gte maior ou igual a e $lte menor ou igual a

/* DEFININDO UM INTERVALO ENTRE VALORES DO MAIOR PARA O MENOR */
// db['Livraria'].find({valor:{$gte:50, $lte:150}}).sort({valor:1})

/* DEFININDO UM INTERVALO ENTRE VALORES DO MENOR PARA O MAIOR */
// db['Livraria'].find({valor:{$gte:50, $lte:150}}).sort({valor:-1})

/* OPERADOR LÓGICO AND: */ // {} chaves é critério | $eq igual 
// db['Livraria'].find({$and:[
//     {categoria:{$eq: 'Fantasia Heroica'}},
//     {valor:{$lte: 100}}
// ]});

/* OPERADOR LÓGICO OR: */
// db['Livraria'].find({$or:[
//     {categoria:{$eq: 'Fantasia Heroica'}},
//     {valor:{$lte: 100}}
// ]});

/* SELEÇÃO DE DOCUMENTOS COM USO DO OPERADOR $in: */
db['Livraria'].find({
    autor:{
        $in:['J.R.R Tolkien', 'Isaac Asimov']
    }
}, {_id:0, codigo:0, descricao:0}).sort({valor:1});
