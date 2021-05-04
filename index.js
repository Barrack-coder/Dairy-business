//Global variable   
//logging somethig in the console
//this is my first javascript code
let selling_price = 45; //cost of milk per litre
let shedsProduction = [510, 308, 486, 572];
let shedsName = ["1", "2", "3", "4"]
var sheds = [{
        name: "shed 1",
        averageProduction: 510,
    },
    {
        name: "shed 2",
        averageProduction: 308,
    },
    {
        name: "shed 3",
        averageProduction: 486,
    },
    {
        name: "shed 4",
        averageProduction: 572,
    },
];

var allProduction = function(e) {
    let sum = 0;
    for (let i = 0; i < e.length; i++) {
        sum += e[i].averageProduction;
        if (i == e.length - 1) {
            return sum;
        }
    }
};