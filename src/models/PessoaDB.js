const Sequelize = require('sequelize');
const database = require('../db');
 
const PessoaDB = database.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    altura: {
        type: Sequelize.DOUBLE
    },
    peso: {
        type: Sequelize.DOUBLE
    }
})
 
module.exports = PessoaDB;