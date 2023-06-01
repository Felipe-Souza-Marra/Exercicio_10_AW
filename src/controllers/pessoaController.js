const Classe = require('../models/Pessoa');
const Pessoa = require('../models/PessoaDB');

function cadastrarView(req, res) {

    console.log("cadastrarView")
    res.render("pessoa/cadastrar.html", {});

}

function cadastrarPessoa(req, res) {

    console.log("cadastrarPessoa")

    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    };

    // var pessoa = new Classe(req.body);
    // var jsonPessoa = JSON.stringify(pessoa);
    // console.log(pessoa.checkData());

    Pessoa.create(pessoa).then((result) => {
        res.render("pessoa/cadastrar.html", { pessoa });
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/cadastrar.html", { erro });
    })

}

function listarView(req, res) {

    console.log("listarView")

    Pessoa.findAll().then((pessoas) => {
        res.render("pessoa/listar.html", { pessoas });
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/listar.html", { erro });
    })

}

function editarView(req, res) {
    let id = req.params.id
    let pessoa;
    Pessoa.findByPk(id).then(function (pessoa) {
        res.render("pessoa/editar.html", { pessoa, "deleteId" : req.params.id });
    })
}

function editarPessoa(req, res) {

    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    };

    Pessoa.update(
        pessoa,
        {
            where: {
                id: req.body.id
            },
        }
    ).then(function (sucesso) {
        res.render("pessoa/editar.html", { pessoa, sucesso });
    }).catch(function (erro) {
        res.render("pessoa/editar.html", { pessoa, erro })
    });

}

function deletarPessoa(req, res) {

    console.log(req.body.deleteId);

    Pessoa.destroy({
        where: { 
            id: req.body.deleteId
        }
    }).then(numDeleted => {
        Pessoa.findAll().then((pessoas) => {
            res.render("pessoa/listar.html", { pessoas });
        }).catch((err) => {
            console.log(err)
            let erro = err
            res.render("pessoa/listar.html", { erro });
        })
    }).catch(err => {
        console.error('Erro ao deletar pessoa:', err);
    });

}

module.exports = {
    cadastrarView,
    cadastrarPessoa,
    listarView,
    editarView,
    editarPessoa,
    deletarPessoa
};