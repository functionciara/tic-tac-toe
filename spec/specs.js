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

  describe("markedBy", function() {
    it("should mark a space X or Y", function() {
      var space = Space.create(1,2);
      var player = Player.create("kim", "X");
      space.markedBy(player);
      space.state.should.equal("X");  
    });
  });
});
