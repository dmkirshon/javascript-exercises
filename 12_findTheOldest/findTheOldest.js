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

// Do not edit below this line
module.exports = findTheOldest;
