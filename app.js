'use strict';

let totalCities = [];

function Cities (storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let hourLength = hours.length;
let dailyTotal = 0;

Cities.prototype.randomNumCust = function(){
  let difference = this.maxCust - this.minCust;
  return (Math.floor(Math.random() * (difference + 1) + this.minCust));
};

Cities.prototype.customersPerHour = function(){
  let customersList = [];
  for(let i=0; i < hourLength; i++){
    customersList.push(this.randomNumCust());
  }
  return customersList;
};

Cities.prototype.purchasedCookiesPerHour = function(){
  let cookiesPurchased = [];
  for(let i = 0; i < hourLength; i++){
    cookiesPurchased.push(Math.floor(this.customersPerHour()[i] * this.avgCookie));
  }
  return cookiesPurchased;
};

Cities.prototype.totalCookies = function(){
  dailyTotal = 0;
  let arrLength = (this.purchasedCookiesPerHour()).length;
  for( let i = 0; i < arrLength; i++ ){
    dailyTotal += this.purchasedCookiesPerHour()[i];
  }
  return dailyTotal;
};

$('#locations').append(`<td>${''}`);

for ( let i= 0; i < hourLength; i++){
  $('#locations').append((`<td>${hours[i]}`));
};
$('#locations').append('<td>Total');

Cities.prototype.render = function() {
  this.customersPerHour();
  this.purchasedCookiesPerHour();
  this.totalCookies();
  $('#locations').append($('<tr>').addClass(`${this.storeName}`));
  // Appends Store name to front of table
  $(`.${this.storeName}`).append(`<td>${this.storeName}`);
  // Appends cookie data into table
  for(let i = 0; i < hours.length; i++){
    $(`.${this.storeName}`).append(`<td>${this.purchasedCookiesPerHour()[i]}`);
  }
  // Appends total cookie data last into table
  $(`.${this.storeName}`).append(`<td>${this.totalCookies()}`);
};

function render(totalCities) {
  for (let i = 0; i < totalCities.length; i++) {
    totalCities[i].render();
  }
}


(totalCities.push(new Cities('Seattle', 23 ,65, 6.3)));
(totalCities.push(new Cities('Tokyo', 3, 24, 1.2)));
(totalCities.push(new Cities('Dubai', 11, 38, 3.7)));
(totalCities.push(new Cities('Paris', 20, 38, 2.3)));
(totalCities.push(new Cities('Lima', 2, 16, 4.6)));

render(totalCities);
