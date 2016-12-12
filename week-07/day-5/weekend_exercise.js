var dogs = animals.filter(function(animal) {
    return animal.species === "dog"
})


var isDog = function(animal) {
    return animal.species === "dog"
})

var dogs = animals.filter(isDog)
