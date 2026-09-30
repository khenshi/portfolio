"use client";

import { useEffect, useReducer } from "react";
import { chooseComputerMove, gameReducer, getResult, initialState, type Difficulty, type Mode } from "./tic-tac-toe";

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
    <section className="mx-auto w-full max-w-[180px]" aria-label="Tic-tac-toe game">
      <div className="flex items-center justify-between gap-2">
        <h2 className="m-0 text-[.68rem] font-semibold text-muted">Tic-Tac-Toe</h2>
        <button
          type="button"
          className="min-h-8 border-0 bg-transparent px-0 py-[.3rem] pl-[.4rem] text-[.65rem] text-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          onClick={() => dispatch({ type: "reset" })}
        >
          New game
        </button>
      </div>
      <details className="text-[.65rem] text-muted">
        <summary className="min-h-8 w-fit cursor-pointer py-[.4rem] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">Settings</summary>
        <div className="grid gap-[.65rem] py-[.4rem]">
          <label className="grid gap-[.3rem]">
            Game mode
            <select
              className="min-h-9 w-full rounded-none border border-line bg-paper px-[.4rem] py-[.4rem] text-[.7rem] text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              value={mode}
              onChange={(event) => dispatch({ type: "mode", mode: event.target.value as Mode })}
            >
              <option value="computer">Vs computer</option>
              <option value="local">Local two-player</option>
            </select>
          </label>
          {mode === "computer" && (
            <label className="grid gap-[.3rem]">
              Difficulty
              <select
                className="min-h-9 w-full rounded-none border border-line bg-paper px-[.4rem] py-[.4rem] text-[.7rem] text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                value={difficulty}
                onChange={(event) => dispatch({ type: "difficulty", difficulty: event.target.value as Difficulty })}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          )}
        </div>
      </details>
      <p className="my-2 mb-3 text-[.7rem] leading-[1.5] text-muted" role="status" aria-live="polite" aria-atomic="true">{status}</p>
      <div className="grid w-full grid-cols-3" role="group" aria-label="Game board, three rows and three columns">
        {board.map((mark, index) => (
          <button
            key={index}
            type="button"
            className={`flex aspect-square min-w-0 items-center justify-center border-0 border-line bg-transparent p-0 text-[1.5rem] font-normal text-ink enabled:hover:bg-ink/5 disabled:cursor-default disabled:opacity-100 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${index % 3 === 2 ? "border-r-0" : "border-r"} ${index >= 6 ? "border-b-0" : "border-b"} ${result.line.includes(index) ? "bg-winner text-accent-dark" : ""}`}
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
