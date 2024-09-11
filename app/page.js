'use client'

import AttributeSelection from "@/components/AttributeSelection";
import Card from "@/components/Card";
import PlayerTitle from "@/components/PlayerTitle";
import Stats from "@/components/Stats";
import { CARD_ATTRIBUTE_LIST, CARD_CATEGORY_LIST, CARD_LIST, GAME_TITLE } from "@/game.config";
import { getRandomCard } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const totalCards = CARD_LIST.length;

  // Toggle between turns
  const [isPlayer1, setIsPlayer1] = useState(true);

  // Track selected attribute
  const [selectedAttribute, setSelectedAttribute] = useState(null);

  // Player decks initialized to half the total deck
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player2Deck, setPlayer2Deck] = useState([]);

  const [player1Card, setPlayer1Card] = useState(null);
  const [player2Card, setPlayer2Card] = useState(null);

  const [player1Stats, setPlayer1Stats] = useState({ cards: 0 });
  const [player2Stats, setPlayer2Stats] = useState({ cards: 0 });

  // Divide all cards equally between Player 1 and Player 2
  const divideCards = () => {
    const shuffledDeck = [...CARD_LIST].sort(() => Math.random() - 0.5);
    const halfDeckSize = Math.floor(shuffledDeck.length / 2);

    const p1Deck = shuffledDeck.slice(0, halfDeckSize);
    const p2Deck = shuffledDeck.slice(halfDeckSize);

    setPlayer1Deck(p1Deck);
    setPlayer2Deck(p2Deck);
    setPlayer1Stats({ cards: p1Deck.length });
    setPlayer2Stats({ cards: p2Deck.length });
  };

  // Function to deal a random card to both players
  const dealRandomCards = () => {
    const card1 = getRandomCard(player1Deck);
    const card2 = getRandomCard(player2Deck);

    setPlayer1Card(card1);
    setPlayer2Card(card2);
  };

  // Initialize the game: divide cards and deal
  useEffect(() => {
    divideCards();
  }, []);

  useEffect(() => {
    dealRandomCards();
  }, [player1Deck, player2Deck])

  // Function to handle the selected attribute comparison
  const handleSelectAttribute = (attribute) => {
    setSelectedAttribute(attribute);
    compareAttributes(attribute);
  };

  // Compare the selected attribute between Player 1 and Player 2
  const compareAttributes = (attribute) => {
    if (!player1Card || !player2Card || !attribute) {
      console.error("Cards or attribute are not properly set");
      return;
    }

    const player1Attr = player1Card.attributes.find(attr => CARD_ATTRIBUTE_LIST[attr.index] === attribute);
    const player2Attr = player2Card.attributes.find(attr => CARD_ATTRIBUTE_LIST[attr.index] === attribute);

    if (!player1Attr || !player2Attr) {
      console.error("Selected attribute not found on cards");
      return;
    }

    const player1Value = player1Attr?.score || 0;
    const player2Value = player2Attr?.score || 0;

    // Determine the winner and transfer the losing card to the opponent's deck
    if (player1Value > player2Value) {
      // Player 1 wins this round, transfer Player 2's card to Player 1's deck
      setPlayer2Stats(prevStats => ({ cards: prevStats.cards - 1 }));
      setPlayer1Stats(prevStats => ({ cards: prevStats.cards + 1 }));
      setPlayer1Deck(prevDeck => [...prevDeck, player2Card]); // Add Player 2's card to Player 1's deck
      setPlayer2Deck(prevDeck => prevDeck.filter(card => card.id !== player2Card.id)); // Remove card from Player 2's deck
    } else if (player1Value < player2Value) {
      // Player 2 wins this round, transfer Player 1's card to Player 2's deck
      setPlayer1Stats(prevStats => ({ cards: prevStats.cards - 1 }));
      setPlayer2Stats(prevStats => ({ cards: prevStats.cards + 1 }));
      setPlayer2Deck(prevDeck => [...prevDeck, player1Card]); // Add Player 1's card to Player 2's deck
      setPlayer1Deck(prevDeck => prevDeck.filter(card => card.id !== player1Card.id)); // Remove card from Player 1's deck
    }

    // Check for end condition
    if (player1Stats.cards - 1 <= 0 || player2Stats.cards - 1 <= 0) {
      declareWinner();
      return;
    }

    // Deal new cards for the next round
    dealRandomCards();

    // Alternate the turn
    setIsPlayer1(!isPlayer1);
  };

  // Function to declare the winner when a player's deck is empty
  const declareWinner = () => {
    if (player1Stats.cards <= player2Stats.cards) {
      alert("Player 2 wins!");
      location.reload();
    } else if (player2Stats.cards <= player1Stats.cards) {
      alert("Player 1 wins!");
      location.reload();
    } else {
      alert("It's a draw!");
      location.reload();
    }
  };

  return (
    <main className="flex flex-col w-full items-center justify-center min-h-screen">
      <h1 className="font-semibold text-4xl text-white">{GAME_TITLE}</h1>
      <p className="font-bold text-white uppercase">A quartet game by <Link href="https://drog.group" target="_blank" className="link link-hover">DROG</Link></p>
      <div className="flex flex-col w-full backdrop-blur-md bg-base-100/10 p-7 rounded-xl shadow-lg mt-10 border border-white/30">
        <div className="flex flex-row justify-between items-center space-x-5">
          {/* Player 1 Card */}
          <div className="flex flex-col w-1/3">
            <PlayerTitle text="Player 1" />
            {
              player1Card &&
              <Card
                title={player1Card.title}
                player={1}
                category={CARD_CATEGORY_LIST[player1Card.categoryIndex]} // Map category index to actual name
                attributes={player1Card.attributes}
                example={player1Card.example}
                isPlayerTurn={isPlayer1} // Pass down the turn status
              />
            }
            <Stats cardNo={player1Stats.cards} />
          </div>

          {/* Attribute Selection */}
          <AttributeSelection
            attributes={CARD_ATTRIBUTE_LIST}
            onSelect={handleSelectAttribute}
          />

          {/* Player 2 Card */}
          <div className="flex flex-col w-1/3">
            <PlayerTitle text="Player 2" />
            {
              player2Card &&
              <Card
                title={player2Card.title}
                player={2}
                category={CARD_CATEGORY_LIST[player2Card.categoryIndex]} // Map category index to actual name
                attributes={player2Card.attributes}
                example={player2Card.example}
                isPlayerTurn={!isPlayer1} // Pass down the turn status
              />
            }
            <Stats cardNo={player2Stats.cards} />
          </div>
        </div>
      </div>
    </main>
  );
}
