"use client";

import { useEffect, useReducer } from "react";
import { chooseComputerMove, gameReducer, getResult, initialState, type Difficulty, type Mode } from "./tic-tac-toe";
import styles from "./TicTacToe.module.css";

export function TicTacToe() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { board, turn, mode, difficulty, round } = state;
  const result = getResult(board);
  const finished = Boolean(result.winner || result.draw);
  const thinking = mode === "computer" && turn === "O" && !finished;

  useEffect(() => {
    if (!thinking) return;
    const timer = window.setTimeout(() => {
      const index = chooseComputerMove(board, difficulty);
      if (index !== null) dispatch({ type: "computerMove", index, round });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [board, difficulty, round, thinking]);

  const status = result.winner
    ? mode === "computer" ? result.winner === "X" ? "You win!" : "Computer wins." : `Player ${result.winner} wins!`
    : result.draw ? "It’s a draw." : thinking ? "Computer is thinking…" : mode === "computer" ? "Your turn — X" : `Player ${turn}’s turn`;

  return (
    <section className={styles.game} aria-label="Tic-tac-toe game">
      <div className={styles.heading}>
        <h2>Tic-Tac-Toe</h2>
        <button type="button" className={styles.reset} onClick={() => dispatch({ type: "reset" })}>New game</button>
      </div>
      <details className={styles.settings}>
        <summary>Settings</summary>
        <div className={styles.controls}>
          <label className={styles.field}>
            Game mode
            <select value={mode} onChange={(event) => dispatch({ type: "mode", mode: event.target.value as Mode })}>
              <option value="computer">Vs computer</option>
              <option value="local">Local two-player</option>
            </select>
          </label>
          {mode === "computer" && (
            <label className={styles.field}>
              Difficulty
              <select value={difficulty} onChange={(event) => dispatch({ type: "difficulty", difficulty: event.target.value as Difficulty })}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          )}
        </div>
      </details>
      <p className={styles.status} role="status" aria-live="polite" aria-atomic="true">{status}</p>
      <div className={styles.board} role="group" aria-label="Game board, three rows and three columns">
        {board.map((mark, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.cell}${result.line.includes(index) ? ` ${styles.winner}` : ""}`}
            aria-label={`Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}: ${mark ?? "empty"}${result.line.includes(index) ? ", winning square" : ""}`}
            disabled={mark !== null || finished || thinking}
            onClick={() => dispatch({ type: "move", index })}
          >
            <span aria-hidden="true">{mark}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
