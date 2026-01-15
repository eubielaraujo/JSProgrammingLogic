const entrada = "Lucas:Seu pedido foi enviado";

function chat (mensagem) {
    let index = mensagem.indexOf(":");

    let cliente = mensagem.slice(0, index).trim();
    let texto = mensagem.slice(index + 1).trim();

    const conversation = {
        cliente: cliente,
        texto: texto,

        falar(){
        return `Para ${this.cliente}: ${this.texto}`;
        }
    };

    console.log(conversation.falar());
}

if (entrada.includes(":")) {
  chat(entrada);
} else {
  console.log("Invalid message");
}