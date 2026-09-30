export type Mark = "X" | "O";
export type Board = (Mark | null)[];
export type Mode = "computer" | "local";
export type Difficulty = "easy" | "medium" | "hard";

export const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

export function getResult(board: Board) {
  const line = winningLines.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  return {
    winner: line ? board[line[0]] : null,
    line: line ?? [],
    draw: !line && board.every((cell) => cell !== null),
  };
}

function score(board: Board, turn: Mark, depth: number): number {
  const result = getResult(board);
  if (result.winner) return result.winner === "O" ? 10 - depth : depth - 10;
  if (result.draw) return 0;
  const scores = board.flatMap((cell, index) => {
    if (cell !== null) return [];
    const next = [...board];
    next[index] = turn;
    return [score(next, turn === "O" ? "X" : "O", depth + 1)];
  });
  return turn === "O" ? Math.max(...scores) : Math.min(...scores);
}

export function chooseComputerMove(board: Board, difficulty: Difficulty, random = Math.random): number | null {
  const result = getResult(board);
  if (result.winner || result.draw) return null;
  const available = board.flatMap((cell, index) => cell === null ? [index] : []);
  if (difficulty === "easy" || (difficulty === "medium" && random() >= 0.7)) {
    return available[Math.floor(random() * available.length)];
  }
  let best = available[0];
  let bestScore = -Infinity;
  for (const index of available) {
    const next = [...board];
    next[index] = "O";
    const value = score(next, "X", 0);
    if (value > bestScore) {
      bestScore = value;
      best = index;
    }
  }
  return best;
}

export type GameState = {
  board: Board;
  turn: Mark;
  mode: Mode;
  difficulty: Difficulty;
  round: number;
};

export const initialState: GameState = {
  board: Array(9).fill(null), turn: "X", mode: "computer", difficulty: "medium", round: 0,
};

type Action =
  | { type: "move"; index: number }
  | { type: "computerMove"; index: number; round: number }
  | { type: "reset" }
  | { type: "mode"; mode: Mode }
  | { type: "difficulty"; difficulty: Difficulty };

export function gameReducer(state: GameState, action: Action): GameState {
  if (action.type === "reset" || action.type === "mode" || action.type === "difficulty") {
    return {
      ...state, board: Array(9).fill(null), turn: "X", round: state.round + 1,
      ...(action.type === "mode" ? { mode: action.mode } : {}),
      ...(action.type === "difficulty" ? { difficulty: action.difficulty } : {}),
    };
  }
  const result = getResult(state.board);
  if (result.winner || result.draw || !Number.isInteger(action.index) || action.index < 0 || action.index > 8 || state.board[action.index] !== null) return state;
  if (action.type === "computerMove") {
    if (state.mode !== "computer" || state.turn !== "O" || action.round !== state.round) return state;
  } else if (state.mode === "computer" && state.turn === "O") {
    return state;
  }
  const board = [...state.board];
  board[action.index] = state.turn;
  return { ...state, board, turn: state.turn === "X" ? "O" : "X" };
}
