const swaggerAutogen = require('swagger-autogen')();

// create a document
const doc = {
    info:{
        title:'Contacts Api',
        description:'Contacts Api'
    },
    host:'localhost:3000',
    schemes :['https', 'http']
}

const outpustFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//will generate swagger.json
swaggerAutogen(outpustFile,endpointsFiles,doc)