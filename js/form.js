// Define a classe Contato
class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

// Função principal para enviar o formulário
function Post(form) {
    event.preventDefault();

    const nome = form.elements["nome"].value;
    const sobrenome = form.elements["sobrenome"].value;
    const email = form.elements["email"].value;
    const cpf = form.elements["cpf"].value;
    const telefone = form.elements["telefone"].value;
    const contato = form.elements["contato"].value;

   // validar campos //
    const pessoa = new Contato(nome, sobrenome, email, cpf, telefone, contato);
    console.log("Formulário enviado:", pessoa);

    // abrir modal //
    document.getElementById("modal").style.display = "block";

    // Reset do formulário //
    form.reset();
    document.querySelector("button[type='submit']").disabled = true;
}

// Fecha o modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Habilita o botão só quando os dois checkboxes estiverem marcados
function verificarCheckboxes() {
    const checkbox1 = document.getElementById("checkbox1");
    const botao = document.querySelector("button[type='submit']");
    botao.disabled = !(checkbox1.checked);
}

window.addEventListener("DOMContentLoaded", () => {
    const checkbox1 = document.getElementById("checkbox1");

    checkbox1.addEventListener("change", verificarCheckboxes);
});

