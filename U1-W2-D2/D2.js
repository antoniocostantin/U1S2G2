/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numb1 = 5;
let numb2 = 15;
(numb1 < numb2)? console.log("numero due piu` grande di numero uno"): console.log("numero uno piu` grande di numero due");

console.log("<<<Fine esercizio 1>>>");


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if(numb1 != 5){
  console.log("not equal");
} else {
  console.log("equal");
}

console.log("<<<Fine esercizio 2>>>");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let div = numb2 % 5;
(div === 0)? console.log("divisibile per 5") : console.log("NON divisibile per 5");

console.log("<<<Fine esercizio 3>>>");


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 2;
let number2 = 11;

if(number1 === 8 ||number2 === 8 ||number1-number2 === 8||number2-number1 === 8 ||number1+number2 ===8){
  console.log("una delle condizione da 8");
} else { console.log("nessuna condizione da 8");
}

console.log("<<<Fine esercizio 4>>>");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
let promo = 50;
let pricesped = 10;
let totprice;

if(totalShoppingCart < promo){
  console.log("paga spedizione");
  totprice = totalShoppingCart + pricesped;
  console.log(totprice);
} else {
  console.log("spedizione gratis");
  totprice = totalShoppingCart;
  console.log(totprice);
}

console.log("<<<Fine esercizio 5>>>");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let discount = 0.2;

totalShoppingCart = totalShoppingCart * (1 - discount);
console.log(totalShoppingCart);

if(totalShoppingCart < promo){
  console.log("paga spedizione");
  totprice = totalShoppingCart + pricesped;
  console.log(totprice);
} else {
  console.log("spedizione gratis");
  totprice = totalShoppingCart;
  console.log(totprice);
}

console.log("<<<Fine esercizio 6>>>");


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 3;
let y = 7;
let z = 9;
let primo;
let secondo;
let terzo;

if(x < y && x < z){         //Primo blocco
  primo = x;
  if(y < z){            //Primo sottoblocco
    secondo = y;
    terzo = z;
  } else {              //Secondo sottoblocco
    secondo = z;
    terzo = y;
  }
} else if(y < x && y < z){        //Secondo blocco
  primo = y;
  if(x < z){            //Primo sottoblocco
    secondo = x;
    terzo = z;
  } else {              //Secondo sottoblocco
    secondo = z;
    terzo = x;
  }
} else{         //Terzo blocco
  primo = z;
  if(x < y){              //Primo sottoblocco
    secondo = x;
    terzo = y;
  } else{                 //Secondo sottoblocco
    secondo = y;
    terzo = x;
  }
}

console.log(terzo,secondo,primo)

console.log("<<<Fine esercizio 7>>>");


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 76969890;
if(typeof(num1) === typeof("6")){
  console.log("not number");
} else {
  console.log("number");
}


console.log("<<<Fine esercizio 8>>>");


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 578586858;
let verify=num % 2;
if(verify === 1){
  console.log("dispari");
} else {
  console.log("pari");
}

console.log("<<<Fine esercizio 9>>>");


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
let val = 5
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

console.log("<<<Fine esercizio 10>>>");


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me)


console.log("<<<Fine esercizio 11>>>");

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me)

console.log("<<<Fine esercizio 12>>>");


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);

console.log("<<<Fine esercizio 13>>>");


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = Array;
number[1] = 1;
number[2] = 2;
number[3] = 3;
number[4] = 4;
number[5] = 5;
number[6] = 6;
number[7] = 7;
number[8] = 8;
number[9] = 9;
number[10] = 10;
console.log(number);

console.log("<<<Fine esercizio 14>>>");


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
number[10] = 100;
console.log(number)

console.log("<<<Fine esercizio 15>>>");
