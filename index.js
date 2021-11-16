const TiranaToDurres = 38;
const TiranaToElbasan = 44;
const TiranaToVlora = 150;
const DurresToElbasan = 84;
const DurresToVlora = 118;
const ElbasanToVlora = 126;

let start = Number(
	prompt(`Where are you? Type:
1 for Tirana
2 for Durres
3 for Elbasan
4 for Vlora`)
);

let end = Number(
	prompt(`Where will you go? Type:
1 for Tirana
2 for Durres
3 for Elbasan
4 for Vlora`)
);

if ((start === 1 && end === 2) || (start === 2 && end === 1)) {
	travelDistance = TiranaToDurres;
} else if ((start === 1 && end === 3) || (start === 3 && end === 1)) {
	travelDistance = TiranaToElbasan;
} else if ((start === 1 && end === 4) || (start === 4 && end === 1)) {
	travelDistance = TiranaToVlora;
} else if ((start === 2 && end === 3) || (start === 3 && end === 2)) {
	travelDistance = DurresToElbasan;
} else if ((start === 2 && end === 4) || (start === 2 && end === 4)) {
	travelDistance = DurresToVlora;
} else if ((start === 3 && end === 4) || (start === 4 && end === 3)) {
	travelDistance = ElbasanToVlora;
}

const kmPrice = 0.21;
let userAge = Number(prompt("How old are you?"));
let travelDistance;

let yourPrice = travelDistance * kmPrice;
if (userAge <= 18) {
	yourPrice = ticketPrice * 0.8;
}
if (userAge >= 65) {
	yourPrice = ticketPrice * 0.6;
}
if (yourPrice > 0) {
	alert(`You have to pay £${ticketPrice.toFixed(2)}`);
} else {
	alert("Error, please reload");
}