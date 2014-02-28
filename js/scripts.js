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
  initialize: function(xcoord, ycoord) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  },

  create: function(xcoord, ycoord) {
    var space = Object.create(Space);
    space.initialize(xcoord, ycoord);
    return space;
  },

  markBy: function(player) { 
    this.markedBy = player;
    console.log("This space at (" + this.xcoord +", " + this.ycoord + 
      ") has been marked by " + player.handle + " with " + player.letter + ".");
  },

  find: function(xcoord, ycoord) {
    return space;
  }
};

var Board = {
  initialize: function(size) {
    this.size = size;
    this.spaces = [];
    var length = Math.sqrt(size);
    // var newSpace = Space.create(1,1);
    // this.spaces.push(newSpace);

    // define row 0,0 to 2,0
    for (var i = 0; i < length; i++) {
      this.spaces.push(Space.create(i, 0));
    }

    // define row 0,1 to 2,1
    for (var i = 0; i < length; i++) {
      var x = i;
      this.spaces.push(Space.create(x, 1));
    }

    // define row 0,2 to 2,2
    for (var i = 0; i < length; i++) {
      var x = i;
      this.spaces.push(Space.create(x, 3));
    }

    this.spaces.forEach(function(space) {
      console.log(space);
    });
  },

  create: function() {
    var board = Object.create(Board);
    return board
  }
};
