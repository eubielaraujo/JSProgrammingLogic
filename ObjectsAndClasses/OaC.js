// Classe Message para representar uma mensagem com remetente e conteúdo
class Message {
    constructor(sender, content) {
        this.sender = sender;
        this.content = content;
    }

    format() {
        // Retorna a mensagem formatada conforme o padrão solicitado
        return `From ${this.sender}: ${this.content}`;
    }
}

// Lê a entrada do usuário
const input = "Bot: Hello, how can I help you?";

// Verifica se a entrada contém ":", se sim, cria a instância de Message e imprime a mensagem formatada; caso contrário, imprime "Invalid message".
if (input.includes(":")) {
  let index = input.indexOf(":");
  
  let s = input.slice(0, index).trim();
  let c = input.slice(index + 1).trim();
  
  let chat = new Message(s, c);
  console.log(chat.format());
  
} else {
  console.log("Invalid message");
}