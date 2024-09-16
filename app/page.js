'use client'
// pages/index.js

import { useEffect, useState } from "react";
import PlayerHand from "@/components/PlayerHand";
import OpponentHand from "@/components/OpponentHand";
import CategorySelector from "@/components/CategorySelector";
import TurnIndicator from "@/components/TurnIndicator";
import GameLog from "@/components/GameLog";
import QuartetTracker from "@/components/QuartetTracker";
import ActionButton from "@/components/ActionButton";
import GameOverModal from "@/components/GameOverModal";
import { CARD_LIST, CATEGORIES } from "@/game.config";
import { shuffleCards } from "@/utils";
import Link from "next/link";

export default function Home() {
  // State variables
  const [playerHand, setPlayerHand] = useState([]);
  const [opponentHand, setOpponentHand] = useState([]);
  const [turn, setTurn] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [gameLog, setGameLog] = useState([]);
  const [quartetTracker, setQuartetTracker] = useState({ player1: 0, player2: 0 });
  const [completedCategories, setCompletedCategories] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const shuffledDeck = shuffleCards(CARD_LIST);
    setPlayerHand(shuffledDeck.slice(0, 4));
    setOpponentHand(shuffledDeck.slice(4, 8));
    setGameLog([...gameLog, 'Game loaded and ready to be played.']);
  }, []);

  const handleAskForCard = () => {
    // Check if the selectedCategory is valid
    if (!selectedCategory) {
      setGameLog([...gameLog, `Please select a valid category.`]);
      return;
    }

    const askingPlayer = turn === 1 ? playerHand : opponentHand;
    const opponent = turn === 1 ? opponentHand : playerHand;

    // Find the card in the opponent's hand that matches the selected category
    const cardRequested = opponent.find(card => card.category === selectedCategory);

    if (cardRequested) {
      setGameLog([...gameLog, `Player ${turn} successfully got a card from category ${selectedCategory}`]);

      const newOpponentHand = opponent.filter(card => card.id !== cardRequested.id);
      const newAskingPlayerHand = [...askingPlayer, cardRequested];

      // Check if the asking player has completed a quartet after receiving the card
      const completedQuartet = checkForQuartet(newAskingPlayerHand);

      if (completedQuartet) {
        setGameLog([...gameLog, `Player ${turn} has completed the ${completedQuartet} quartet!`]);

        const updatedHand = newAskingPlayerHand.filter(card => card.category !== completedQuartet);

        if (turn === 1) {
          setPlayerHand(updatedHand);
          setQuartetTracker(prev => ({ ...prev, player1: prev.player1 + 1 }));
        } else {
          setOpponentHand(updatedHand);
          setQuartetTracker(prev => ({ ...prev, player2: prev.player2 + 1 }));
        }

        setCompletedCategories([...completedCategories, completedQuartet]);
      } else {
        // No quartet completed, update hands as usual
        if (turn === 1) {
          setPlayerHand(newAskingPlayerHand);
          setOpponentHand(newOpponentHand);
        } else {
          setOpponentHand(newAskingPlayerHand);
          setPlayerHand(newOpponentHand);
        }
      }

      // Check for game over immediately after the card exchange
      if (newAskingPlayerHand.length === 0 || newOpponentHand.length === 0) {
        setGameLog([...gameLog, `Game Over!`]);
        setGameOver(true); // Trigger the game-over state immediately
        return; // Exit early to avoid continuing the game
      }

    } else {
      // If the opponent doesn't have the requested card
      setGameLog([...gameLog, `Player ${turn} asked for a card from ${selectedCategory} but got nothing.`]);
    }

    // Switch turns and reset selected category after each turn
    setSelectedCategory(null);
    setTurn(turn === 1 ? 2 : 1);
  };

  // Check if a player has completed a quartet
  const checkForQuartet = (hand) => {
    const categoryCounts = hand.reduce((counts, card) => {
      counts[card.category] = (counts[card.category] || 0) + 1;
      return counts;
    }, {});

    return Object.keys(categoryCounts).find(category => categoryCounts[category] === 4);
  };

  return (
    <main className="flex flex-col w-full items-center justify-center min-h-screen py-7">
      <h1 className="text-3xl font-bold text-center text-base-100">Quartet Game</h1>
      <p className="font-bold text-base-100 uppercase text-sm">A quartet game by <Link href="https://drog.group" target="_blank" className="link link-hover">DROG</Link></p>
      <div className="flex flex-col w-full backdrop-blur-md bg-base-100/10 p-7 rounded-xl shadow-lg mt-10 border border-base-100/30">
        <TurnIndicator turn={turn} />
        <div className="flex flex-col justify-between space-x-5">
          <PlayerHand hand={playerHand} />
          <div className="flex flex-col items-center justify-center my-10 space-y-5">
            <CategorySelector
              categories={CATEGORIES}
              setSelectedCategory={setSelectedCategory}
              completedCategories={completedCategories}
              selectedCategory={selectedCategory}
            />
            <ActionButton
              onClick={handleAskForCard}
              disabled={!selectedCategory || selectedCategory === ""}
            />
          </div>
        </div>
        <OpponentHand handLength={opponentHand.length} />
        <hr className="border-t border-base-100/30 my-10" />
        <QuartetTracker tracker={quartetTracker} />
        <hr className="border-t border-base-100/30 my-10" />
        <GameLog log={gameLog} />
        {gameOver && (
          <GameOverModal
            winner={
              quartetTracker.player1 === quartetTracker.player2
                ? "It's a draw! A player runs out ot card and nobody has a quarter."
                : quartetTracker.player1 > quartetTracker.player2
                  ? "Player 1"
                  : "Player 2"
            }
          />
        )}

      </div>
    </main>
  );
}
