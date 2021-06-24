console.log("Write a javascript program to calculate celcius for the cities, and group the cities based on the celcius range");
//Create holding arrays
var lessThan = [];
var moderate = [];
var grThan = [];

//1 Place Fah temperatures for each city in an array
var arrayFah = [{ city: 'Chicago', temp: 18 }, { city: 'Denver', temp: 12 }, { city: 'Atlanta', temp: 76 }, { city: 'Jacksonville', temp: 80 }, { city: 'Austin', temp: 91 }, { city: 'Philadelphia', temp: 63 }, { city: 'Rainbow', temp: 55 }, { city: 'Crescent City', temp: 43 }, { city: 'Kilmore', temp: 21 }, { city: 'Anchorage', temp: 0 }, { city: 'Oregon City', temp: 36 }];
//2 Read temperature a temp from array
//3 perform calculation of temp from Fah to celcius
//
for (var i = 0; i < arrayFah.length; i++) {
    var temp = arrayFah[i].temp;
    var newCel = (temp - 32) * (5 / 9);
    console.log('for ' + arrayFah[i].city + ' at ' + arrayFah[i].temp + ' \xB0F = ' + newCel + ' \xB0C.')
        //}


    //4 Save new temp and name in new array based on categories


    if (newCel <= 20) {
        //push object into lessThan[]
        lessThan.push(arrayFah[i]);
    } else if (newCel >= 30) {
        //push object into grThan[]
        grThan.push(arrayFah[i]);
    } else {
        //push object into moderate[]
        moderate.push(arrayFah[i]);
    }
    //5 print temp by city and category
    /*  Cold - less than 20 
        Moderate - Between 20 and 30
        Hot - Above 30                                          */
}
console.log("");
console.log('Cold Cities: ');
//Object.prototype.toString.call(lessThan));
console.log('Moderate Cities: ');
for (var j = 0; j < lessThan.length; j++) {
    console.log(lessThan[j].city + ' at ' + lessThan[j].temp + ' \xB0F')
};
console.log('');
//var str = moderate.toString()
console.log('Moderate Cities: ');
for (var j = 0; j < moderate.length; j++) {
    console.log(moderate[j].city + ' at ' + moderate[j].temp + ' \xB0F')
};
console.log('');
console.log('Hot Cities: ');
for (var j = 0; j < grThan.length; j++) {
    console.log(grThan[j].city + ' at ' + grThan[j].temp + ' \xB0F')
};