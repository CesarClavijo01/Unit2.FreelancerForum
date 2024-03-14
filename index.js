//create an array of available freelancers
const availableFreelancers = [
    {name:'Alice',occupation:'Writer',price:30},
    {name:'Bob',occupation:'Teacher',price:50},
    {name:'Carol',occupation:'Programer',price:70}
];

//create a list of possible freelancers to add to available freelancer list
const possibleFreelancers = [
    { id: 1, name: "Dr. Slice", price: 25, occupation: "gardener" },
    { id: 2, name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { id: 3, name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { id: 4, name: "Prof. Prism", price: 81, occupation: "teacher" },
    { id: 5, name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { id: 6, name: "Prof. Spark", price: 76, occupation: "programmer" },
    { id: 7, name: "Dr. Wire", price: 47, occupation: "teacher" },
    { id: 8, name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

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
function createListItems(list){
    const freelancerList = document.createElement("div");
    const name = createName("Name:" + " " + list.name);
    const occupation = createOccupation("Occupation:" + " " + list.occupation);
    const price = createPrice("Price:" + " " + list.price);

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
availableFreelancers.forEach((item) => createListItems(item))

//create a function that pulls objects from the array and appends into list

//create a function that displays the average starting price of all the freelancers

//create a function that adds ne freelancers to the list every few seconds
