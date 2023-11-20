const form = document.querySelector("form")
const txtNomeInput = document.querySelector("#txtNome")
const txtEmailInput = document.querySelector("#txtEmail")
const numCPFInput = document.querySelector("#numCPF")
const numTelefoneInput = document.querySelector("#numTelefone")
const numNascimentoInput = document.querySelector("#numData")
const txtSenha1Input = document.querySelector("#txtSenha1")
const txtSenha2Input = document.querySelector("#txtSenha2")

//validação de Nome

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (txtNomeInput.value === "") {
        alert("Por favor, insira o seu nome.");
        return;
    }

    if (!isNameValid(txtNomeInput.value, 3)) {
        alert("O nome deve ter no mínimo 3 caracteres")
        return;
    }

    //validação de Email 

    if (txtEmailInput.value === "" || !isEmailValid(txtEmailInput.value)) {
        alert("Por favor, insira o seu email.");
        return;
    }

    //validação de CPF


    if (numCPFInput.value === "" || !isCPFValid(numCPFInput.value)) {
        alert("Por favor, insira o seu CPF nesse formato: 000.000.000-00");
        return;
    }

    //validação de Telefone

    if (numTelefoneInput.value === "") {
        alert("Por favor, insira o seu telefone.");
        return;
    }

    //validação de Data

    if (numNascimentoInput.value === "") {
        alert("Por favor, insira a sua data de nascimento.");
        return;
    }

    //validação de Senha

    if (!validatePassword(txtSenha1Input.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos")
        return;
    }

    //validação de Confirmar Senha
    
    if (txtSenha2Input.value === "") {
        alert("Por favor, confirme sua senha.");
        return;
    }

    if (!validatePassword2(txtSenha2Input.value, 8)) {
        alert("A senhas precisam ser iguais!")
        return;
    }

    alert("Cadastro realizado com Sucesso!!");
})


function isNameValid(txtNomeInput, minDigits) {
    if (txtNomeInput.length >= minDigits) {
        return true
    }

    return false
}

function isEmailValid(txtEmail) {
    const txtEmailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );
    if (txtEmailRegex.test(txtEmail)) {
        return true;
    }

    return false;
}

function isCPFValid(numCPF) {
    const numCPFRegex = new RegExp(
        /^[0-9]+.[0-9]+.[0-9]+-[0-9]{2,}$/
    );
    if (numCPFRegex.test(numCPF)) {
        return true;
    }

    return false;
}

function validatePassword(txtSenha1Input, minDigits) {
    if (txtSenha1Input.length >= minDigits) {
        return true
    }

    return false
}

function validatePassword2(txtSenha2Input, minDigits) {
    if (txtSenha2Input.length >= minDigits) {
        return true
    }
    return false
}
