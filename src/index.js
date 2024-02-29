/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
import "normalize.css";
import "./style.css";

const knightPossibleMoves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];
function getKnightNextPositions(currentLocation) {
  const x = currentLocation[0];
  const y = currentLocation[1];
  const nextPositions = [];
  for (let i = 0; i < knightPossibleMoves.length; i++) {
    const nextX = x + knightPossibleMoves[i][0];
    const nextY = y + knightPossibleMoves[i][1];
    if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8) {
      nextPositions.push([nextX, nextY]);
    }
  }
  return nextPositions;
}
function knightMoves(currentLocation, targetLocation) {
  const moveQueue = [];
  const visited = new Set();
  moveQueue.push({
    position: currentLocation,
    depth: 0,
    path: [currentLocation],
  });

  while (moveQueue.length > 0) {
    const { position, depth, path } = moveQueue.shift();
    const [x, y] = position;

    if (x === targetLocation[0] && y === targetLocation[1]) {
      return `${depth} moves: ${path.join(" -> ")}`;
    }

    visited.add(position.toString());

    const nextPositions = getKnightNextPositions(position);

    nextPositions.forEach((next) => {
      if (!visited.has(next.toString())) {
        moveQueue.push({
          position: next,
          depth: depth + 1,
          path: [...path, next],
        });
        visited.add(next.toString());
      }
    });
  }

  return -1; // If no path is found, which should not happen on a standard chessboard
}

function initChessboard() {
  const size = 8;
  const chessboard = [];
  for (let i = 0; i < size; i++) {
    chessboard[i] = new Array(size).fill(false);
  }
  return chessboard;
}
const chessboard = initChessboard();

console.log(knightMoves([4, 0], [7, 4]));
