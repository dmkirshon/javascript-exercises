const findTheOldest = function(people) {
    return people.sort((a, b) => {
        let lastKnownLivingA = a.yearOfDeath;
        let lastKnownLivingB = b.yearOfDeath;
        
        if (!lastKnownLivingA) {
            lastKnownLivingA = (new Date()).getFullYear();
        }
        if (!lastKnownLivingB) {
            lastKnownLivingB = (new Date()).getFullYear();
        }

        const lastPerson = lastKnownLivingA - a.yearOfBirth;
        const nextPerson = lastKnownLivingB - b.yearOfBirth;

        return lastPerson > nextPerson ? -1:1;
    })[0];
};

// const findTheOldest = function(array) {
//     return array.reduce((oldest, currentPerson) => {
//       const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
//       const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
//       return oldestAge < currentAge ? currentPerson : oldest
//     })
//   };
  
//   const getAge = function(birth, death) {
//     if (!death) {
//       death = new Date().getFullYear();
//     }
//     return death - birth;
//   };

// Do not edit below this line
module.exports = findTheOldest;
