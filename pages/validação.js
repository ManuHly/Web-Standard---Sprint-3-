var form = document.getElementById("form")
var txtNomeInput = document.getElementById("txtNome")
var txtEmailInput = document.getElementById("txtEmail")
var numCPFInput = document.getElementById("numCPF")
var numTelefoneInput = document.getElementById("numTelefone")
var numNascimentoInput = document.getElementById("numData")
let txtSenha1Input = document.getElementById("txtSenha1")
let txtSenha2Input = document.getElementById("txtSenha2")

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

    //validação de CPF

    if (numCPFInput.value === "" || !isCPFValid(numCPFInput.value)) {
        alert('Por favor, insira um CPF valido "xxx.xxx.xxx-xx"');
        return;
    }

    //validação de Email 

    if (txtEmailInput.value === "" || !isEmailValid(txtEmailInput.value)) {
        alert("Por favor, insira o seu email.");
        return;
    }


    //validação de Telefone

    if (numTelefoneInput.value === "" || !isTelefoneValid(numTelefoneInput.value)) {
        alert('Por favor, insira um telefone valido "(xx)xxxx-xxxx"');
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

    if (!validatePassword2(txtSenha2Input, txtSenha1Input)) {
        alert("A senhas precisam ser iguais!")
        return;
    }

    alert("Cadastro realizado com Sucesso!!");

    form.method = "POST";
    form.action = "gravar.jsp";

    form.submit();

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
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    );
    if (numCPFRegex.test(numCPF)) {
        return true;
    }

    return false;
}

function isTelefoneValid(numTelefone) {
    const numTelefoneRegex = new RegExp(
        /^\(\d{2}\)\d{5}-\d{4}$/
    );
    if (numTelefoneRegex.test(numTelefone)) {
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

function validatePassword2(txtSenha2Input, txtSenha1Input) {
    if (txtSenha2Input.value == txtSenha1Input.value) {
        return true
    }
    return false
}
