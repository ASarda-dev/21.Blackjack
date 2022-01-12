let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  console.log(deck);

  deck = _.shuffle(deck);
  // console.log(deck);
  return deck;
};
crearDeck();

// Funcion para crear carta

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  const carta = deck.pop();

  console.log(deck);
  console.log(carta);
  return carta;
};

// pedirCarta()
// TODO VALOR CARTA VIDEO 51.VALOR DE CADA CARTA

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  let puntos = 0;

  if (isNaN(valor)) {
    console.log("No es un numero");
  } else {
    console.log("Es un numero");
    puntos = valor * 1;
  }
  console.log(puntos);
};

valorCarta("2D");
