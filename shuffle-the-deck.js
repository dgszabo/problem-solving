// SHUFFLE THE DECK CARD SHUFFLING PROBLEM
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
