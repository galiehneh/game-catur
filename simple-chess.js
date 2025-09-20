/*
 * Simple Chess.js implementation for demonstration
 */

function Chess() {
  // Game state
  var board = [];
  var turn = 'w';
  var history = [];
  
  // Initialize board to starting position
  function initBoard() {
    board = [];
    for (var i = 0; i < 8; i++) {
      board[i] = [];
      for (var j = 0; j < 8; j++) {
        board[i][j] = null;
      }
    }
    
    // Set up pawns
    for (var i = 0; i < 8; i++) {
      board[1][i] = { type: 'p', color: 'b' };
      board[6][i] = { type: 'p', color: 'w' };
    }
    
    // Set up other pieces
    // Black pieces (row 0)
    board[0][0] = { type: 'r', color: 'b' };
    board[0][1] = { type: 'n', color: 'b' };
    board[0][2] = { type: 'b', color: 'b' };
    board[0][3] = { type: 'q', color: 'b' };
    board[0][4] = { type: 'k', color: 'b' };
    board[0][5] = { type: 'b', color: 'b' };
    board[0][6] = { type: 'n', color: 'b' };
    board[0][7] = { type: 'r', color: 'b' };
    
    // White pieces (row 7)
    board[7][0] = { type: 'r', color: 'w' };
    board[7][1] = { type: 'n', color: 'w' };
    board[7][2] = { type: 'b', color: 'w' };
    board[7][3] = { type: 'q', color: 'w' };
    board[7][4] = { type: 'k', color: 'w' };
    board[7][5] = { type: 'b', color: 'w' };
    board[7][6] = { type: 'n', color: 'w' };
    board[7][7] = { type: 'r', color: 'w' };
  }
  
  // Initialize to starting position
  initBoard();
  
  // Convert algebraic notation to array indices
  function squareToIndices(square) {
    if (!square || square.length != 2) return null;
    var file = square.charCodeAt(0) - 97; // a-h -> 0-7
    var rank = 8 - parseInt(square[1]);   // 1-8 -> 7-0
    if (file < 0 || file > 7 || rank < 0 || rank > 7) return null;
    return { row: rank, col: file };
  }
  
  // Convert array indices to algebraic notation
  function indicesToSquare(row, col) {
    if (row < 0 || row > 7 || col < 0 || col > 7) return null;
    var file = String.fromCharCode(97 + col); // 0-7 -> a-h
    var rank = 8 - row; // 7-0 -> 1-8
    return file + rank;
  }
  
  // Public methods
  this.board = function() {
    return board;
  };
  
  this.turn = function() {
    return turn;
  };
  
  this.get = function(square) {
    var pos = squareToIndices(square);
    if (!pos) return null;
    return board[pos.row][pos.col];
  };
  
  this.moves = function(options) {
    // Simple implementation - return some basic moves
    var moves = [];
    
    // For demonstration, let's add some sample moves
    if (turn === 'w') {
      moves.push('e4');
      moves.push('Nf3');
      moves.push('Bc4');
    } else {
      moves.push('e5');
      moves.push('Nc6');
      moves.push('Bc5');
    }
    
    // If verbose is requested, return objects
    if (options && options.verbose) {
      if (turn === 'w') {
        return [
          { from: 'e2', to: 'e4', promotion: undefined },
          { from: 'g1', to: 'f3', promotion: undefined },
          { from: 'f1', to: 'c4', promotion: undefined }
        ];
      } else {
        return [
          { from: 'e7', to: 'e5', promotion: undefined },
          { from: 'b8', to: 'c6', promotion: undefined },
          { from: 'f8', to: 'c5', promotion: undefined }
        ];
      }
    }
    
    return moves;
  };
  
  this.move = function(move) {
    // Simple move implementation
    var moveObj = typeof move === 'string' ? { from: '', to: move } : move;
    
    // Save current state for history
    history.push({
      board: JSON.parse(JSON.stringify(board)),
      turn: turn
    });
    
    // Switch turns
    turn = turn === 'w' ? 'b' : 'w';
    
    return moveObj;
  };
  
  this.reset = function() {
    initBoard();
    turn = 'w';
    history = [];
  };
  
  this.undo = function() {
    if (history.length > 0) {
      var prevState = history.pop();
      board = prevState.board;
      turn = prevState.turn;
      return { from: 'undo', to: 'undo' };
    }
    return null;
  };
  
  this.game_over = function() {
    return false; // Game is never over in this simple implementation
  };
  
  this.in_check = function() {
    return false; // Never in check in this simple implementation
  };
  
  this.in_checkmate = function() {
    return false; // Never in checkmate in this simple implementation
  };
  
  this.pgn = function() {
    return ''; // No PGN in this simple implementation
  };
}

// Make it available globally
window.Chess = Chess;