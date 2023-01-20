'use strict';

let totalCities = [];

function Cities (storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookieSales = [];
  this.dailyTotal = 0;
  totalCities.push(this);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let hourLength = hours.length;

Cities.prototype.purchasedCookiesPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomersPerHour = Math.round((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    let cookieSales = Math.round(randomCustomersPerHour * this.avgCookie);
    this.cookieSales.push(cookieSales);
    this.dailyTotal += cookieSales;
  }
};

Cities.prototype.render = function() {
  //D
  $('#locations').append($('<tr>').addClass(`${this.storeName}`));
  // Appends Store name to front of table
  $(`.${this.storeName}`).append(`<td>${this.storeName}`);
  // Appends cookie data into table
  for(let i = 0; i < hours.length; i++){
    $(`.${this.storeName}`).append(`<td>${this.cookieSales[i]}`);
  }
  // Appends total cookie data last into table
  $(`.${this.storeName}`).append(`<td>${this.dailyTotal}`);
};

function render(totalCities) {
  for (let i = 0; i < totalCities.length; i++) {
    totalCities[i].purchasedCookiesPerHour();
    totalCities[i].render();
  }
}

new Cities('Seattle', 23 ,65, 6.3);
new Cities('Tokyo', 3, 24, 1.2);
new Cities('Dubai', 11, 38, 3.7);
new Cities('Paris', 20, 38, 2.3);
new Cities('Lima', 2, 16, 4.6);


function renderHeaderFooter(totalCities) {
  //Header
  $('#tableHead').append($('<tr>').addClass('head'));
  $('.head').append(('<th>'));
  for ( let i= 0; i < hourLength; i++){
    $('.head').append((`<th>${hours[i]}`));
  }
  $('.head').append('<th>Total');
  //Footer
}

function footer(totalCities){
  $('#tableFoot').append($('<tr>').addClass('foot'));
  $('.foot').append(('<td>Per Hour Total'));
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let totalAtHour = 0;
    // for each store in cities
    for (let j = 0; j < totalCities.length; j++) {
      totalAtHour += (totalCities[j].cookieSales[i]);
      grandTotal += (totalCities[j].cookieSales[i]);
      // console.log(j, i, grandTotal, totalAtHour);
      // console.log('HERE', totalCities[j].cookieSales[i], j, i, totalAtHour);
    }
    $('.foot').append(`<td>${totalAtHour}`);
  }
  $('.foot').append(`<td>${grandTotal}`);
}

// function sameCityData(totalCities){
//   let count = 0;
//   for(let i = 0; i < totalCities.length; i++){
//     if (totalCities[i].storeName === name) {
//       count++;
//     }
//     return count;
//   }
// }







// Getting Info From Button

$('form').submit(function(event) {
  event.preventDefault();
  let name = event.target.cityName.value;
  let minCustomers = event.target.minCustomers.value;
  let maxCustomers = event.target.maxCustomers.value;
  let avgCookies = event.target.avgCookies.value;
  new Cities(name, minCustomers, maxCustomers,avgCookies);
  totalCities[totalCities.length - 1].purchasedCookiesPerHour();
  totalCities[totalCities.length - 1].render();
  let example = $('.foot td');
  console.log(example);
  $('.foot').replaceWith(footer(totalCities));
});

render(totalCities);
renderHeaderFooter(totalCities);
footer(totalCities);

