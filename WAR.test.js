var expect = chai.expect;

describe('MyFunctions', function()
    //creating a player
    {
    describe('createAPlayer', function(){ 
        it("A player is created", function(){
            testPlayer = new Player();
            expect(testPlayer).to.be.an('object')
        });
    });
    describe('createcardsDeck', function()
    //creating a deck of cards
    { 
        it("A deck of 52 cards are created", function(){
            testDeck = new Deck();
            testDeck.createcardsDeck();
            let x = testDeck.cardsDeck;
            expect(x).to.have.length(52);
        });
    });
    describe('dealCards', function()
    //new deck is created, shuffled and dealt
    {
        it("Cards in the deck are dealt", function(){
            testPlayer1 = new Player();
            testPlayer2 = new Player();
            testDeck = new Deck();
            testDeck.createcardsDeck();
            testDeck.shuffleCards(testDeck.cardsDeck);
            testDeck.dealCards(testDeck.cardsDeck);
            expect(testDeck.cardsDeck).to.be.empty;
        });
    });
});

