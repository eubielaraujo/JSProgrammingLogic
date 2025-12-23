let NomeDoHeroi = "Ezio Auditore"
let XPHeroi = 8345
let Nivel

function classificarHeroi(Nivel) {
    return console.log(`O Herói de nome ${NomeDoHeroi} está no nível de ${Nivel}`)
}

switch (true) {
    case XPHeroi < 1000:
        classificarHeroi("Ferro");
        break;
    case XPHeroi >= 1001 && XPHeroi < 2000:
        classificarHeroi("Bronze");
        break;
    case XPHeroi >= 2001 && XPHeroi < 5000:
        classificarHeroi("Prata");
        break;
    case XPHeroi >= 5001 && XPHeroi < 7000:
        classificarHeroi("Ouro");
        break;
    case XPHeroi >= 7001 && XPHeroi < 8000:
        classificarHeroi("Platina");
        break;
    case XPHeroi >= 8001 && XPHeroi < 9000:
        classificarHeroi("Ascendente");
        break;
    case XPHeroi >= 9001 && XPHeroi < 10000:
        classificarHeroi("Imortal");
        break;
    case XPHeroi >= 10001:
        classificarHeroi("Radiante");
        break;
}