const usersChoice = document.createElement('h1');
const computersChoice = document.createElement('h1');
const resultDisplay = document.createElement('h1');

//Encontrando el section HTML que tiene un id = 'root'
const gameGrid = document.getElementById('root');
gameGrid.append(usersChoice);
gameGrid.append(computersChoice);
gameGrid.append(resultDisplay);

const choices = ['Piedra','Papel','Tijera'];
let userChoice;
let computerChoice;

//Elección del computador
const generateComputerPlay = () =>{
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    computerChoice = randomChoice;
    computersChoice.innerHTML = `The computer's move has been ${computerChoice}`;
}

//Resultado
const generateResult = ()=>{
    switch(userChoice + computerChoice){
        case 'TijeraPapel':
        case 'PiedraTijera':
        case 'PapelPiedra':
            resultDisplay.innerHTML = 'You have won';
        break;

        case 'PiedraPapel':
        case 'TijeraPiedra':
        case 'PapelTijer':
            resultDisplay.innerHTML = 'You have lost';
        break;

        default:
            resultDisplay.innerHTML = `It's a tie`;
        break;
    }
}

//Elección del usuario
const handleClick = e =>{
    userChoice = e.target.id;
    usersChoice.innerHTML = `Your move has been ${userChoice}`;
    generateComputerPlay();
    generateResult();
}

//Botones para jugar
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i];

    //Al dar click llama a la función handleClick
    button.addEventListener('click',handleClick);
    gameGrid.appendChild(button); 
}