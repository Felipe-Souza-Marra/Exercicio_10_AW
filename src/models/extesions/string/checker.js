module.exports = {

  email(email) {

    if (typeof(email) == "string") {
      if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return true
      }
    }

    return false

  },

  cpf(cpf) {

    if (typeof(cpf) == "string") {
      if (cpf.match(/^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/)) {
        return true
      }
    }

    return false

  }

}