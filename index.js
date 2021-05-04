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

var totalProduction = function(obj) {
    for (let i = 0; i < obj.length; i++) {
        console.log(
            "Your production in " +
            obj[i].name +
            " " +
            obj[i].averageProduction +
            " litres per day"
        );
    }
    console.log(
        "The total production is " + allProduction(obj) + " litres per day"
    );

};
totalProduction(sheds);
var months = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
};
var sellingPricePerLitre = 45;

function incomeOverTime(selling_price, time) {
    if (time == "weekly") {
        let week = allProduction(sheds) * 7 * selling_price;
        console.log("Your weekly income will be ksh " + week);
    } else if (time == "yearly") {
        let sum = 0;
        for (let values of Object.values(months)) {
            sum = values * allProduction(sheds) * selling_price;
        };
        console.log("Your yearly income will be Ksh " + sum);
    }
}
incomeOverTime(sellingPricePerLitre, "weekly");
incomeOverTime(sellingPricePerLitre, "yearly");

function incomePerMonth(selling_price) {
    let monthlyProduction;
    for (let [keys, values] of Object.entries(months)) {
        monthlyProduction = values * allProduction(sheds) * selling_price; //total amount per mounth
        console.log("Your income for " + keys + " is " + monthlyProduction);
    }
}
incomePerMonth(sellingPricePerLitre);