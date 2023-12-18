let nomeHeroi = "Dragon"
let exp = 15000
let elo

if (exp <= 1000) {
    elo = "Ferro"
} else if (exp > 1000 && exp <= 2000) {
    elo = "Bronze"
} else if (exp > 2000 && exp <= 5000) {
    elo = "Prata"
} else if (exp > 5000 && exp <= 7000) {
    elo = "Ouro"
} else if (exp > 7000 && exp <= 8000) {
    elo = "Platina"
} else if (exp > 8000 && exp <= 9000) {
    elo = "Ascendente"
} else if (exp > 9000 && exp <= 10000) {
    elo = "Imortal"
}else if (exp > 10000) {
    elo = "Radiante"
} console.log(`O Herói ${nomeHeroi} está no nivel de ${elo}.`)