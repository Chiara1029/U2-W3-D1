// ESERCIZIO 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}

const userX = new User("Chiara", "Puleio", 29, "Calabria");
const userY = new User("Tizio", "Caio", 32, "Lazio");

function compareAge() {
  if (userX.age < userY.age) {
    return userX.firstName + " è più giovane di " + userY.firstName;
  } else {
    return userX.firstName + " è più vecchia di " + userY.firstName;
  }
}
console.log(compareAge());

//ESERCIZIO 2
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static shareOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

const petCards = [];

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  let pet = new Pet(petName, ownerName, species, breed);
  petCards.push(pet);
  console.log(petCards);

  if (petCards.length > 1) {
    console.log(Pet.shareOwner(petCards[0], petCards[1]));
  }
});

//Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante
