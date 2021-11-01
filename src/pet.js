const Maximum_fitness = 10;
const Minimum_hunger =  0;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    
    Pet.prototype = {
    get isAlive()  {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
    };
    this.growUp = function() {
        this.age += 1 ;
        this.hunger +=5 ;
        this.fitness -=3;
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
    }
    Pet.prototype.feed = function () {
        if(this.hunger - 3 > 0) {
            this.hunger -= 3;
        }
        else {
            this.hunger = Minimum_hunger;
        }
        if (!this.isAlive) {
            throw new Error ('Your pet is no longer alive :(')
        }
    };
    Pet.prototype.walk = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        if ((this.fitness + 4) <= 10 ) {
            this.fitness += 4;
          } else {
            this.fitness = Maximum_fitness;
          }
      }
      
};
const pet = new Pet("Fido");
const rex = new Pet("Rex");
rex.growUp = function () {
    this.age += 5;
};


module.exports = Pet;