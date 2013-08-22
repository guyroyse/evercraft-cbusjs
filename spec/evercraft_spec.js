describe("Character", function() {

  var character;

  beforeEach(function() {
    character = Evercraft.createCharacter();
  });
  
  describe("name", function() {

    it("has no name by default", function() {
      expect(character.name()).not.toBeDefined();
    });

    it("has a settable name", function() {
      character.name("Bob Wehadababyitzaboyz");
      expect(character.name()).toBe("Bob Wehadababyitzaboyz");
    });
    
  });
  
  describe("alignment", function() {

    it("is neutral by default", function() {
      expect(character.alignment()).toBe('Neutral');
    });

    it("can have an Evil alignment", function() {
      character.alignment("Evil");
      expect(character.alignment()).toBe('Evil');
    });

    it("can have a Good alignment", function() {
      character.alignment("Good");
      expect(character.alignment()).toBe('Good');
    });

    it("can have a Neutral alignment", function() {
      character.alignment("Good"); // reset
      character.alignment("Neutral");
      expect(character.alignment()).toBe('Neutral');
    });

    it("can't have a flippant alignment", function() {
      character.alignment("Flippant");
      expect(character.alignment()).not.toBe('Flippant');
    });

    it("sets alignment to Evil when invalid", function() {
      character.alignment("Flippant");
      expect(character.alignment()).toBe('Evil');
    });

  });
  
  describe("combat", function() {

    it("has default value of 5 hit points", function(){
      expect(character.hitPoints()).toBe(5);
    });

    it("has default armor class value of 10", function(){
      expect(character.armorClass()).toBe(10);
    });
    
    describe("when attacking", function() {

      var defender = {
        armorClass : function() {
          return 10;
        }
      };

      it("hits when roll exceeds armor class", function() {
        var hit = character.attack(defender, 15);
        expect(hit).toHit();
      });
      
      it("misses when roll is less than the armor class", function() {
        var hit = character.attack(defender, 5);
        expect(hit).toMiss();
      });
      
      it("hits when roll is equal to armor class", function() {
        var hit = character.attack(defender, 10);
        expect(hit).toHit();
      });
      
    });

  });

});

beforeEach(function() {
  this.addMatchers({
    toHit: function() {
      this.message = function () {
        return "Expected miss to be a hit";
      };
      return this.actual;
    },
    toMiss: function() {
      this.message = function () {
        return "Expected hit to be a miss";
      };
      return !this.actual;
    }
  });
});