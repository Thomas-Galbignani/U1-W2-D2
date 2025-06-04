/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 30;
const numero2 = 52;

if (numero1 > numero2) {
  console.log(` numero1 è il più alto`);
} else {
  console.log(` numero2 è il più alto `);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeroIntero = 25;

if (numeroIntero !== 5) {
  console.log(`not equal`);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const divisibile = 25;

if (divisibile % 5 === 0) {
  console.log(`divisibile per 5`);
} else {
  console.log(`non è divisibile`);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const int1 = 11;
const int2 = 19;

if (int1 === 8) {
  console.log(`è uguale al numero 8`);
} else if (int2 === 8) {
  console.log(`è uguale al numero 8`);
} else if (int1 + int2 === 8) {
  console.log(`è uguale al numero 8`);
} else if (int1 - int2 === 8) {
  console.log(`è uguale al numero 8`);
} else if (int2 - int1 === 8) {
  console.log(`è uguale al numero 8`);
} else {
  console.log(`hai sbagliato qualcosa`);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 120;
const costoSpedizione = 10;

if (totalShoppingCart > 50) {
  console.log(`hai diritto alla spedizione gratuita`);
} else {
  console.log(`la spedizione ha un costo di 10€ per ordini inferiori a 50€`);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart1 = 120;
const costoSpedizione1 = 10;
const sconto = 20;

let totaleScontato = totalShoppingCart1 * ((100 - sconto) / 100);
console.log(totaleScontato);

if (totalShoppingCart1 > 50) {
  console.log(`hai diritto alla spedizione gratuita`);
} else {
  console.log(`la spedizione ha un costo di 10€ per ordini inferiori a 50€`);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const v1 = 6;
const v2 = 3;
const v3 = 9;

const variValori = [v1, v2, v3];

variValori.sort();
console.log(variValori);
variValori.reverse();
console.log(variValori);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const valore = `ciao`;

typeof valore;

if (valore) {
  console.log(typeof valore);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeroD = 7;

if (numeroD % 2 === 0) {
  console.log(`pari`);
} else {
  console.log(`dispari`);
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */

/* SCRIVI QUI LA TUA RISPOSTA */
