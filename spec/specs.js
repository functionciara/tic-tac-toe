describe("Player", function() {
  describe("initialize", function() {
    it("should initialize a Player object", function() {
      var player = Object.create(Player);
      player.initialize("Kim", "X")
      player.handle.should.equal("Kim");
      player.letter.should.equal("X");
    });
  });

  describe("create", function() {
    it("should create and initialize a player", function() {
      var player = Player.create("Kim", "X");
      player.handle.should.equal("Kim");
      player.letter.should.equal("X");
    });
  });

});

describe("Space", function() {
  describe("create", function() {
    it("should create a space from specific coordinates", function() {
      var space = Space.create(1,2);
      
      space.xcoord.should.equal(1);
      space.ycoord.should.equal(2);
    });
  });

  describe("markBy", function() {
    it("should assign a space a player and all the player's info", function() {
      var space = Space.create(1,2);
      var player = Player.create("kim", "X");
      
      space.markBy(player);
      space.markedBy.should.equal(player);  
    });

  });
  
  describe("find", function() {
    it("should go to a space by its coordinates", function(){
      var space = Space.create(1,2);
      
      space.goToSpace.should.equal(space);
    });
  });
});

describe("Board", function() {
  describe("initialize", function() {
    it("creates 9 spaces when it is initialized", function() {
      var board = Object.create(Board);
      
      board.initialize(9);
      board.size.should.equal(9);
    });
  });
  describe("create", function() {
    it("creates a board containing spaces based on given size", function() {
      var board = Object.create(Board);
      
      board.initialize(9);
      board.spaces.length.should.equal(9);
    });
  });
});

describe("Game", function() {
  describe("initialize", function() {
    it("initializes a game with a board and two players", function() {
      var game = Object.create(Game);
      game.initialize(9, "Kim", "Elikem");

      game.board.size.should.equal(9);
      game.player_one.handle.should.equal("Kim");
      game.player_one.letter.should.equal("X");
      game.player_two.handle.should.equal("Elikem");
      game.player_two.letter.should.equal("O")
    });
  });

  describe("create", function() {
    it("creates a full game", function() {
      var game = Game.create(9, "Elikem", "Kim");
      
      game.player_one.handle.should.equal("Elikem");
      game.player_one.letter.should.equal("X");
      game.player_two.handle.should.equal("Kim");
      game.player_two.letter.should.equal("O");
      game.board.size.should.equal(9);
    });
  });

  // describe("switchPlayer", function() {
  //   it("should switch players", function() {
  //     var game = Game.create(board, player_one, player_two);
  //     var currentPlayer
  //     game.switchPlayer(player_one).should.be.equal(currentPlayer)
  //   });
  // });
});
