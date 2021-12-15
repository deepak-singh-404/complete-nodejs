const cars = [{ name: "firstCar", model: "11" },
{ name: "secondCar", model: "12" },
{ name: "thirdCar", model: "13" },
{ name: "fourthCar", model: "13" },
{ name: "fifthCar", model: "11" }]

const unique_cars = [...new Set(cars.map(c => JSON.stringify(c.model)))]

const array_of_array = []

for (var i = 0; i < unique_cars.length; i++) {
  array_of_array.push([])
  for (var j = 0; j < cars.length; j++) {
    if (cars[j].model == JSON.parse(unique_cars[i])) {
      array_of_array[i].push(cars[j])
    }
  }
}

console.log(array_of_array)