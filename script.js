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
//Crea un form per la creazione di oggetti Pet
//proprietà: petName, ownerName, species (cane, gatto), breed
//nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca "true" se 2 animali condividono
//lo stesso padrone

//Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante
