// SHUFFLE THE DECK CARD SHUFFLING PROBLEM

/*
Your friend is interested in card tricks; for this they will need a full deck of cards that are shuffled. You need to help them do card tricks on a computer. Your task is to write a function or class that creates a deck of cards and then shuffles the deck. Your function/class should return an array with 52 cards in a random order.

Constraints:
1) don't use any external libraries.
2) try to avoid wasteful steps when shuffling the deck and make your shuffling logic as efficient as possible.

Good luck!
*/

function shuffleTheDeck() {
  // create colors and values
  const colors = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

  // create the cards array
  let cards = [];

  for(let i = 0; i < colors.length; i++) {
      for(let j = 0; j < values.length; j++) {
          cards.push(`${values[j]} of ${colors[i]}`);
      }
  }

  // shuffle the array
  let shuffledDeck = [];

  for(let i = 0; i < 52; i++) {
      const card = cards.splice(Math.random() * (cards.length - 1), 1)[0];
      shuffledDeck.push(card);
  }

  return shuffledDeck;
}
