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
  return deck;
};
crearDeck();

// Funcion para crear carta

const pedirCarta = () => {
  if (deck.length === 0) {
    // Throw es para ejecutar algo cuando se cumple la condicion
    throw "No hay cartas en el deck";
  }

  const carta = deck.pop();

  console.log(deck);
  console.log(carta);
  return carta;
};
// pedirCarta()

// TODO VALOR CARTA VIDEO 51.VALOR DE CADA CARTA

// const valorCarta = (carta) => {
//   // Para que nunca se ejecute cuando no queden cartas en nuestro desk
//   const valor = carta.substring(0, carta.length - 1);
//   let puntos = 0;

//   if (isNaN(valor)) {
//     puntos = valor === "A" ? 11 : 10;
//   } else {
//     puntos = valor * 1;
//   }
//   console.log(puntos);
// };

// FORMA MAS RESUMIDA DE EJECUTAR LA FUNCION VALOR CARTA
const valorCarta = (carta) => {
  // Para que nunca se ejecute cuando no queden cartas en nuestro desk
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

const valor = valorCarta(pedirCarta());

console.log(valor);
