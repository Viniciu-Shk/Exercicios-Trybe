let piece = "Queeen";

if (piece.toLowerCase() === "pawn") {
    console.log("1 or 2 spaces foward, take 1 space diagonal")
} else if (piece.toLowerCase() === "rook") {
    console.log("Any spaces on a straight");
} else if (piece.toLowerCase() === "bishop") {
    console.log("Any spaces on a diagonal");
} else if (piece.toLowerCase() === "knight") {
    console.log("2 spaces non-diagonal followed by 1 space perpendicular to the first part");
} else if (piece.toLowerCase() === "king") {
    console.log("One space on any direction");
} else if (piece.toLowerCase() === "queen") {
    console.log("Any spaces on a straight or diagonal");
} else {
    console.log("Invalid piece, please check the correct name!");
}