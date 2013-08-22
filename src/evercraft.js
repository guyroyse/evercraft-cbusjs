'use strict';

var Evercraft = {

  createCharacter : function() {

    var _name;
    var _alignment = "Neutral";

    var character = {};

    character.name = function(name) {
      if (name !== undefined) _name = name;
      return _name;
    };

    character.alignment = function( alignment ) {

      var alignments = {
        'Evil'   : true,
        'Good'   : true,
        'Neutral': true
      };

      if ( alignment !== undefined ) {
        if (alignment in alignments) {
          _alignment = alignment;
        } else {
          _alignment = 'Evil';
        }
      }

      return _alignment;
    };

    character.hitPoints = function() {
      return 5;
    };

    character.armorClass = function () {
      return 10;
    };
    
    character.attack = function(defender, roll) {
      return roll >= defender.armorClass();
    };

    return character;
  }
};