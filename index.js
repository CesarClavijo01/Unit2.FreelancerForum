//create an array of available freelancers
const availableFreelancers = [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 },
    { name: 'Carol', occupation: 'Programer', price: 70 },
  ];

//create a list of possible freelancers to add to available freelancer list
const possibleFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  let interval
//create constant to select body
const main = document.querySelector("main");

//apend a title to the body
const title = document.createElement("h1");
title.textContent = "Freelancer Forum";
main.append(title);

//create a title for available freelancers list
const listTitle = document.createElement("h2");
listTitle.textContent = "Available Freelancers";
main.append(listTitle);


//create a function that creates list for each object in an array
function render(list){
    const freelancerList = document.createElement("div");
    const name = createName("Name:" + " " + list.name);
    const occupation = createOccupation("Occupation:" + " " + list.occupation);
    const price = createPrice("Price:" + " " + "$" + list.price);

    freelancerList.append(name);
    freelancerList.append(occupation);
    freelancerList.append(price);

    main.appendChild(freelancerList);
}

function createName(name){
    const itemName = document.createElement("div");
    const h3 = document.createElement("h3");
    const text = document.createTextNode(name);
    h3.appendChild(text);
    itemName.appendChild(h3);

    return itemName;
}

function createOccupation(occupation){
    const itemOccupation = document.createElement("div");
    const article = document.createElement("a");
    const text = document.createTextNode(occupation);
    article.appendChild(text);
    itemOccupation.appendChild(article);

    return itemOccupation;
}

function createPrice(price){
    const itemPrice = document.createElement("div");
    const article = document.createElement("a");
    const text = document.createTextNode(price);
    article.appendChild(text);
    itemPrice.appendChild(article);

    return itemPrice;
}

//run the function for each item in the array
availableFreelancers.forEach((item) => render(item));

//create a function that displays the average starting price of all the freelancers
function priceAverage(){
   const priceSum = availableFreelancers.reduce((acc, number) => acc + number.price, 0);
   const averagePrice = priceSum / availableFreelancers.length;
   return averagePrice;
}
//render priceaverage function
const averageDiv = document.createElement("div");
const averageline = document.createElement("p");
const averageText = document.createTextNode(`The average price is:`+ " " + priceAverage());
averageline.appendChild(averageText);
averageDiv.appendChild(averageline);
main.appendChild(averageDiv)

//create a function that adds new freelancers to the list every few seconds
function addRandomFreelancer(){
    //generate a random number
    const randomNum = Math.floor(Math.random() * possibleFreelancers.length);

    //splice the object with the random number from possibleFreelancers array
    //find the random freelancer
    const freelancer = possibleFreelancers[randomNum];

    //find the index of the random freelancer
    const index = possibleFreelancers.indexOf(freelancer);

    //splice from possibleFreelancers
    possibleFreelancers.splice(index, 1);

    //push freelancer object into available freelancer list
    availableFreelancers.push(freelancer);
    
    console.log()

}

//create an interval to add random objects to availableFreelancers

interval = setInterval(addRandomFreelancer, 5000)