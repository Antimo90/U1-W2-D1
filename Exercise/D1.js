/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Immagina che JavaScript sia un mondo magico popolato da creature straordinarie(datatype), ognuna con un potere speciale:
// 1. Le Parole Incantate(String) - sono incantesimi racchiusi tra virgolette o apici("Abracadabra"), capaci di raccontarie storie o attivare comandi.
// 2. I Numeri Maestri(Number) - abitano nei libri di matematica e governano le leggi della logica: interi(42), decimali(10.06), e persino quelli misteriosi come NaN(non un numero)
// 3. Luce e Ombra(Boolean) - Custodiscono verità(true) e falsità(false).
// 4. La Nebbia dell'ignoto(Undefined) - è il nulla che regna prima che qualcosa venga definito.
// 5. Il Vuoto Consapevole(Null) - a differena della nebbia, qui la mancanza è voluta. un forziere svuotato.
// 6. Gli Artefatti Magici(Object) - Racchiudono caratteristiche e segreti, proprio come un libro di pozioni o uno scrigno pieno di gemme. Nome,poteri,abilità ect. Tutto può essere conservato in un oggetto.
// 7. La Scatola delle Meraviglie(Array) - un contenitore di tesori in fila ordinata(["rubino", "zaffiro", "diamante"]), pronto a essere esplorato.
// 8. Il Golem Obbediente(Function) - un servitore fidato che, con le giuste istruzioni, esegue compiti ogni volta che vieni evocato.

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "Antimo";

console.log("Esercizio n. 2: " + myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12;
let number2 = 20;
let number3 = number1 + number2;

console.log("Esercizio n. 3: " + number3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

console.log("Esercizio n. 4: " + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// myName = "Mandorino";

console.log("Esercizio n. 5: " + myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number4 = x - 4;

console.log("Esercizio n. 6: " + number4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let difference = name1 === name2;

console.log("Esercizio n. 7 : " + difference);

name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

let theyAreTheSame = name1 === name2;

console.log("Esercizio n 7 extra :" + theyAreTheSame);
