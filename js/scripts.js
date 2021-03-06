var Player = {
  initialize: function(handle, letter) {
    this.handle = handle;
    this.letter = letter;
  },

  create: function(handle, letter) {
    var player = Object.create(Player);
    player.initialize(handle, letter);
    return player;
  },
};

var Space = {
  all : [],

  initialize: function(xcoord, ycoord) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  },

  create: function(xcoord, ycoord) {
    var space = Object.create(Space);
    space.initialize(xcoord, ycoord);
    Space.all.push(space);
    return space;
  },

  markBy: function(player) { 
    this.markedBy = player;
    console.log("This space at (" + this.xcoord +", " + this.ycoord + 
      ") has been marked by " + player.handle + " with " + player.letter + ".");
  },

  find: function(x, y) {
    var foundSpace;
    Space.all.forEach(function(space) {
      if(x === space.xcoord && y === space.ycoord) {
        foundSpace = space;
      }
    });
    return foundSpace;
  }
};

var Board = {
  initialize: function(size) {
    this.size = size;
    this.spaces = [];
    var length = Math.sqrt(size);

    // define rows
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length; j++){
        this.spaces.push(Space.create(i, j));
      }
    }

    this.spaces.forEach(function(space) {
      // console.log(space);
    });
  },

  create: function(size) {
    var board = Object.create(Board);
    board.initialize(size);
    return board;
  }
};

var Game = {
  initialize: function(boardSize, playerOneName, playerTwoName) {
    var newBoard = Board.create(boardSize);
    this.board = newBoard; //takes a Board object
    console.log(newBoard);
    
    var newPlayerOne = Player.create(playerOneName, "X");
    this.player_one = newPlayerOne;
    console.log(newPlayerOne);
    
    var newPlayerTwo = Player.create(playerTwoName, "O");
    this.player_two = newPlayerTwo;
    console.log(newPlayerTwo);
  },

  create: function(boardSize, playerOneName, playerTwoName) {
    var game = Object.create(Game);
    game.initialize(boardSize, playerOneName, playerTwoName);
    return game;
  }
};

// document.ready javascript submit event to start a new game
