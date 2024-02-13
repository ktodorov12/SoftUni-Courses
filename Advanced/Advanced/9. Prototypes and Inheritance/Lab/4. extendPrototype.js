function solve(inputClass) {
  inputClass.prototype.species = "Human";
  inputClass.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}
solve();
