# Quartet Card Game

A fun and educational card game built using Next.js, TailwindCSS, and DaisyUI, where players compare card attributes to win cards from their opponent. The game ends when one player successfully takes all the cards.

## Game Objective

The objective of the game is to exhaust your opponent's deck by winning rounds based on attribute comparisons.

## How to Play

1. At the start of the game, all cards are divided equally between Player 1 and Player 2.
2. Each turn, players select an attribute from their card to compare.
3. The player with the higher attribute value wins the round, and the losing player's card is transferred to the winner's deck.
4. The game continues until one player has no cards left.
5. The player with all the cards at the end of the game is the winner.

## Game Features

- **Deck Exhaustion**: Players start with equal decks, and the game continues until one player's deck is completely empty.
- **Attribute Comparison**: Players compare card attributes such as `Factuality`, `Evidence Strength`, `Emotional Appeal`, and more.
- **Dynamic Turn-based Gameplay**: Players alternate turns, selecting attributes to compare.

## Tech Stack

- **Frontend**: Built with [Next.js](https://nextjs.org/).
- **Styling**: Styled using [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/).
- **Game Logic**: All game logic is handled client-side using React hooks for state management.

## How to Run

### Prerequisites

- Node.js (version 12.x or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/quartet-card-game.git
```

2. Navigate to the project directory:

```bash
cd quartet-card-game
```

3. Install dependencies:

```bash
npm install
```

## Running the Game

To start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to play the game.
