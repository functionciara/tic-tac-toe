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

  markedBy: function(player) { // X is always assigned to player one
    var state = ".";
    state = player.letter;
    return state;
  }
};

