contas = []; // Array que armazena as contas.
let qtdeContas = 0; // Inicializa o número de contas como 0.
const criarConta = () => {

    let NovaConta = [];

    NovaConta.push(prompt("Digite o nome do usuário:"))
    NovaConta.push(prompt("Digite a data de nascimento (dd/mm/aaaa):"))
    NovaConta.push(prompt("Digite o telefone do usuário:"))

    NovaConta.push(1000)
    NovaConta.push(qtdeContas + 1)

    contas.push(NovaConta)
    qtdeContas++

    alert("Conta criada com sucesso!")
}


const transferir = (numero) => {

}
const remover = () => {

}
const exibir = () => {

}
const deletar = () => {

}