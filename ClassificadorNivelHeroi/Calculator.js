// Calculadora de Partidas Ranqueadas de Herói
let Wins = 57
let Losses = 23

function RankMatchesCalculator(Wins, Losses) {

    let rank = '';
    let wins_balance = Wins - Losses;

    switch (true) {
        case wins_balance < 10:
            rank = 'Ferro';
            break;
        case wins_balance >= 11 && wins_balance <= 20:
            rank = 'Bronze';
            break;
        case wins_balance >= 21 && wins_balance <= 50:
            rank = 'Prata';
            break;
        case wins_balance >= 51 && wins_balance <= 80:
            rank = 'Ouro';
            break;
        case wins_balance >= 81 && wins_balance <= 90:
            rank = 'Diamante';
            break;
        case wins_balance >= 91 && wins_balance <= 100:
            rank = 'Lendário';
            break;
        case wins_balance >= 101:
            rank = 'Imortal';
            break;
    }

    return `O Herói tem de saldo de ${wins_balance} está no nível de ${rank}`

}

console.log(RankMatchesCalculator(Wins, Losses));