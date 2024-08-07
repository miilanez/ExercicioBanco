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
    const contaDestino = parseInt(prompt("digite a conta de destino"))
    
    for (let i = 0; i < contas.length; i++) {
        contas[contaDestino];
        
        if(!contaDestino){
            alert("Conta não existe.")
            return
        }
    }
    const valorDaTransferencia = parseInt(prompt("Digite o valor para tranferência"))
    if(saldo < valorDaTransferencia){
        alert("Saldo insuficiente")
        return
    }
    contaOrigem -= valorDaTransferencia
    contaDestino += valorDaTransferencia
}
const remover = () => {

}
const exibir = () => {
    const numeroConta = prompt("Digite o número da conta:")
    for (let i = 0; i < contas[i].length; i++) {
        for (let j = 0; j < contas[j].length; j++) {
            if(contas[i][j] === numeroConta){
                alert(conta[i])
            }
        }   
    }
}
const debitar = () => {

}