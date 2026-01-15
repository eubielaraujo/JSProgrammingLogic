// Classes do Jogo

// Declaração da classe GameClass
class GameClass {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attackName = {
            'mago': 'magia',
            'guerreiro': 'espada',
            'monge': 'artes marciais',
            'ninja': 'shuriken'
        }
    }
    
    // Método para realizar ataque
    attack (type) {
        const attackName = this.attackName[type];
        console.log(`o ${this.type} atacou usando ${attackName}`);
    }

}

// Criação de instâncias e chamadas de método
const guerreiro = new GameClass('Arus', 23, 'guerreiro');
guerreiro.attack('guerreiro');

const mago = new GameClass('Jenica', 62, 'mago');
mago.attack('mago');