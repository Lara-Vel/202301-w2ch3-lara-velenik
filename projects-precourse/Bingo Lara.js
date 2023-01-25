let userName;
let bingoCard = [];
let randomNumberList = [];
let usedNumbers = [];
let newNumber;
let points = 150;
let lineOne = false;
let lineTwo = false;
let lineThree = false;
let bingoCheck = false;
let result;

const welcome = () => {
  
userName = prompt(`¡Bienvenido al Bingo! ¿cuál es su nombre?`);

  if (Number(userName) || userName === '' || userName === null) {
    alert(`Por favor introduzca un nombre válido.`);
    welcome();
  } else {
    alert(`¡Hola ${userName[0].toUpperCase() + userName.substring(1)}!, \n\nTe recordamos que al comienzo de la partida tendrás 150 puntos, pero recibirás un punto menos cada vez que se muestre un número. \n\n¡Empecemos a jugar!`);
  }

}

const generateRandomNumber = (min, max) => {
  let result;
  result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}

const randomNumberToPlay = () => {
  newNumber = generateRandomNumber(1, 100);
}

const filter = () => {
  bingoCard = bingoCard.filter((item, index) => {
    return bingoCard.indexOf(item) === index;
  });
}

const countPoints = () => {
  result = points - usedNumbers.length;

  let ranking = [
    { name: "Jugador A", points: 73 },
    { name: "Jugador B", points: 67 },
    { name: "Jugador C", points: 55 },
    { name: "Jugador D", points: 50 },
    { name: `${userName[0].toUpperCase() + userName.substring(1)}`, points: Number(`${result}`) }
  ];

  console.log(`¡Enhorabuena! Has completado el juego en ${usedNumbers.length} rondas.`);
  console.log(`Tu puntuación es: ${result}\n\nRanking:`);
  ranking.sort((a, b) => b.points - a.points);
  console.table(ranking);
}

const makeTheCard = () => {
  bingoCard = [];

  while (bingoCard.length < 15) {
    randomNumberToPlay();
    bingoCard.push(newNumber);
    filter();
  }

  if ((bingoCard.length = 15)) {
    bingoCard[0] = bingoCard.slice(0, 5);
    bingoCard[1] = bingoCard.slice(5, 10);
    bingoCard[2] = bingoCard.slice(10, 15);
    bingoCard.length = 3;
    console.log(`${userName[0].toUpperCase() + userName.substring(1)} ,este es tu cartón de numeros:`);
    console.table(bingoCard);
    changeBingoCard();
  }
}

const changeBingoCard = () => {
  newBingoCard = confirm(`¿Deseas cambiar de cartón?`);
  if (newBingoCard) {
    console.clear();
    makeTheCard();
  } else {
    alert(`¡Empieza el juego!`);
    showsRandomNumber();
  }
}

const showsRandomNumber = () => {
  randomNumberToPlay();
  randomNumberList.push(newNumber);
  if (usedNumbers.includes(randomNumberList[randomNumberList.length - 1]) === false) {
    usedNumbers.push(newNumber);
    showNewNumber = alert(`Ha salido el número ${newNumber}`);
  } else showsRandomNumber();
}

const checkNumber = () => {
  for (let i = 0; i < bingoCard.length; i++) {
    for (let j = 0; j < bingoCard[i].length; j++) {
      if (bingoCard[i][j] === randomNumberList[randomNumberList.length - 1]) {
        console.clear();
        console.log(`¡El número ${bingoCard[i][j]} está en tu cartón!`);
        bingoCard[i][j] = "X";
        console.table(bingoCard);
        if (lineOne === false && lineTwo === false && lineThree === false) {
          line();
        } else if (lineOne === true || lineTwo === true || lineThree === true) {
          bingo();
        }
      }
    }
  }
  continueToPlay();
}

const continueToPlay = () => {
  nextTurn = confirm(`¿Quieres sacar otro número?`);
  if (nextTurn) {
    showsRandomNumber();
    checkNumber();
  } else {
    alert(`Cancelaste la partida.`);
    playBingoAgain();
  }
}

const checkLines = () => {
  lineOne = bingoCard[0].every((element) => element == "X");
  lineTwo = bingoCard[1].every((element) => element == "X");
  lineThree = bingoCard[2].every((element) => element == "X");
}

const line = () => {
  checkLines();
  if (lineOne === true || lineTwo === true || lineThree === true) {
    alert(`¡¡¡LINEA!!!`);
  }
}

const bingo = () => {
  checkLines();
  if (lineOne === true && lineTwo === true && lineThree === true) {
    alert(`¡¡¡Felicidades ${userName[0].toUpperCase() + userName.substring(1)}, has hecho BINGOOO!!!`);
    countPoints();
    playBingoAgain();
  }
}

const clearVariables = () => {
  userName;
  bingoCard = [];
  randomNumberList = [];
  usedNumbers = [];
  newNumber;
  points = 150;
  lineOne = false;
  lineTwo = false;
  lineThree = false;
  bingoCheck = false;
  result;
}

const playBingoAgain = () => {
  playAgain = confirm(`¿Te gustaría jugar otra partida?`);
  if (playAgain) {
    console.clear();
    clearVariables();
    playBingo();
  } else {
    alert(`¡Hasta la próxima ${userName[0].toUpperCase() + userName.substring(1)}!`);
    console.clear();
    clearVariables();
  }
}

const playBingo = () => {
  welcome();
  makeTheCard();
  checkNumber();
}

playBingo();
