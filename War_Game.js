
const suits = ['diamonds', 'spades', 'clubs', 'hearts'];


class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    getPoint(){
        this.score += 1;
    }
    takeTurn(){
        return this.hand.pop();
    }
}


class Card{
    constructor(suit, value){
        this.value = value
        this.suit = suit
    }
    show(){
        if(this.value = 11){
            return `Jack of ${suit}`
        }
        else if(this.value = 12){
            return `Queen of ${suit}`
        }
        else if(this.value = 13){
            return `King of ${suit}`
        }
        else if(this.value = 14){
            return `Ace of ${suit}`
        }
        else{
            return `${this.value} of ${this.suit}` 
        }
        
    }
}

class Deck{
    constructor(){
        this.cards = [];
    }
    shuffle(){
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
    deal(p1, p2){
        while(this.cards.length > 0){
            p1.hand.push(this.cards.pop());
            p2.hand.push(this.cards.pop());
        }
    }
}

const playerOne = new Player('Marcus');
const playerTwo = new Player('Sarah');

console.log(playerOne, playerTwo);


const gameDeck = new Deck();

suits.forEach((suit) =>{
    for(let i = 2; i < 15; i++){
        gameDeck.cards.push(new Card(suit, i));
    }
});

gameDeck.shuffle();
gameDeck.deal(playerOne, playerTwo);

console.log(playerOne, playerTwo);


while(playerOne.hand.length > 0){
    let p1Card = playerOne.takeTurn();
    let p2Card = playerTwo.takeTurn();
    console.log(p1Card, p2Card);
    if(p1Card.value > p2Card.value){
        playerOne.getPoint();
    }
    if(p1Card.value < p2Card.value){
        playerTwo.getPoint();
    }
   console.log(playerOne.score, playerTwo.score); 
}

if(playerOne.score > playerTwo.score){
    console.log(`${playerOne.name} is the winner!
    ${playerOne.name}'s score:
    ${playerOne.score}
    ${playerTwo.name}'s score:
    ${playerTwo.score}`);
}
    else if(playerOne.score < playerTwo.score){
    console.log(`${playerTwo.name} is the winner!
    ${playerOne.name}'s score:
    ${playerOne.score}
    ${playerTwo.name}'s score:
    ${playerTwo.score}`);
}
    else if(playerOne.score == playerTwo.score){
    console.log(`Tie Game!
    Both players scored:
    ${playerOne.score}`);
}
    else{
    console.log(`Something is wrong!`)
}
