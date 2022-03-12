//WAR

/* Rules
The goal is to win all cards.
The deck is shuffled and split between 2 players.
Each player takes draws a card.
The player with the highest card wins.
It's "war" if the cards are equal.
The highest card is the winner. */

//value, face, and suit of card
class Card{                             
    constructor(value, suit, face){
        this.value = value;
        this.suit = suit;
        this.face = face;
    };
//describe the suit and face of card
    describe(){                         
        return `${this.face} of ${this.suit}`;
    };
};
//Create a deck of cards and suits
class Deck{                             
    constructor(){                      
        this.cardsDeck = [];
    };
    createcardsDeck(){                
        for (let i = 2; i <= 14; i++){
            this.cardsDeck.push(new Card(i, "Hearts", i));
            this.cardsDeck.push(new Card(i, "Spades", i));          
            this.cardsDeck.push(new Card(i, "Clubs", i));
            this.cardsDeck.push(new Card(i, "Diamonds", i)); 
        } 
        for(let card of this.cardsDeck){      
            if(card.value === 14){
                card.face = "Ace";
            }else if(card.value === 11){
                card.face = "Jack";
            }else if(card.value === 12){
                card.face = "Queen";
            }else if(card.value === 13){
                card.face = "King";
            }
        };
    };
//shuffles cards using sort and Math.random
    shuffleCards(){                                       
        this.cardsDeck.sort(function(){
            return Math.random() - 0.5;
        });
    };
//cards are dealt to players equally
    dealCards(){                            
        for (let i = 51; i >= 0; i--){
            if(i % 2 == 0){
                player1.hand.push(this.cardsDeck[i]);
            }else{
                player2.hand.push(this.cardsDeck[i]);
            }
            this.cardsDeck.pop();
        };
    };
};
const myDeck = new Deck();
myDeck.createcardsDeck();
myDeck.shuffleCards(myDeck.cardsDeck);
console.log(myDeck.cardsDeck);
//player that has a hand to hold cards and a score
class Player{                 
    constructor(){
        this.hand = [];
        this.score = 0;
    };
};
const player1 = new Player();
const player2 = new Player();
console.log(player1.hand);
console.log(player2.hand);
//each players' hand arrays plays a game by comparing the cards at the different indexes
function playCards(playerOne, playerTwo){      
    const scoreString = [''];                         
    for (let i = 0; i <= 25; i++){
        if (playerOne.hand[i].value > playerTwo.hand[i].value){
            playerOne.score++;
            let y = `Game ${i+1}: ${playerOne.hand[i].describe()}  / ${playerTwo.hand[i].describe()} (Player 1 wins)`;
            
            scoreString.push(y);
        }else if(playerTwo.hand[i].value > playerOne.hand[i].value){
            playerTwo.score++;
            let x = `Game ${i+1}: ${playerTwo.hand[i].describe()}  /  ${playerOne.hand[i].describe()} (Player 2 wins)`;
            
            scoreString.push(x);
        }else{
            let z = `Game ${i+1}:  TIE:  ${playerOne.hand[i].describe()}  matches  ${playerTwo.hand[i].describe()} `;

            scoreString.push(z);
        };
    };
    
alert(`  
GAME OVER

Player 1 Score:  ${playerOne.score}
Player 2 Score:  ${playerTwo.score}
Winner per game:
${scoreString.join("\n")}
`);
};
myDeck.dealCards(myDeck.cardsDeck);
playCards(player1, player2);