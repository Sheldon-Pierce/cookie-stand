'use strict';

// let locationSection = document.getElementById('locations');
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; // To Do: 6am - 7pm
function randomNumCust(minCust, maxCust) {
  let difference = maxCust - minCust;
  return (Math.floor(Math.random() * (difference + 1) + minCust));
}


let seattle = {
  storeName: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  customersList: [],
  cookiesPurchased: [],
  dailyTotal: 0,

  customersPerHour: function() {
    for(let i=0; i < hours.length; i++){
      this.customersList.push(randomNumCust(this.minCust, this.maxCust));
    }
  },
  purchasedCookiesPerHour: function() {
    for(let i = 0; i < hours.length; i++){
      this.cookiesPurchased.push(Math.floor(this.customersList[i] * this.avgCookie));
    }
  },
  totalCookies: function() {
    for( let i = 0; i < hours.length; i++ ){
      this.dailyTotal += this.cookiesPurchased[i];
    }
  },
  renderData: function() {
    this.customersPerHour();
    this.purchasedCookiesPerHour();
    this.totalCookies();
    $('#locations').append('<article1>');
    // H2
    $('article1').append(`<h2>${this.storeName}`);
    // UL
    $('article1').append($('<ul>').addClass(`${this.storeName}`));
    //LI
    for(let i = 0; i < hours.length; i++){
      $(`.${this.storeName}`).append(`<li>${hours[i]}: ${this.cookiesPurchased[i]} cookies`);
    }
    $(`.${this.storeName}`).append(`Total: ${this.dailyTotal}`);
  }};



let tokyo = {
  storeName: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  customersList: [],
  cookiesPurchased: [],
  dailyTotal: 0,

  customersPerHour: function() {
    for(let i=0; i < hours.length; i++){
      this.customersList.push(randomNumCust(this.minCust, this.maxCust));
    }
  },
  purchasedCookiesPerHour: function() {
    for(let i = 0; i < hours.length; i++){
      this.cookiesPurchased.push(Math.floor(this.customersList[i] * this.avgCookie));
    }
  },
  totalCookies: function() {
    for( let i = 0; i < hours.length; i++ ){
      this.dailyTotal += this.cookiesPurchased[i];
    }
  },
  renderData: function() {
    this.customersPerHour();
    this.purchasedCookiesPerHour();
    this.totalCookies();
    $('#locations').append('<article2>');
    // H2
    $('article2').append(`<h2>${this.storeName}`);
    // UL
    $('article2').append($('<ul>').addClass(`${this.storeName}`));
    //LI
    for(let i = 0; i < hours.length; i++){
      $(`.${this.storeName}`).append(`<li>${hours[i]}: ${this.cookiesPurchased[i]} cookies`);
    }
    $(`.${this.storeName}`).append(`Total: ${this.dailyTotal}`);
  }
};

let dubai = {
  storeName: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  customersList: [],
  cookiesPurchased: [],
  dailyTotal: 0,

  customersPerHour: function() {
    for(let i=0; i < hours.length; i++){
      this.customersList.push(randomNumCust(this.minCust, this.maxCust));
    }
  },
  purchasedCookiesPerHour: function() {
    for(let i = 0; i < hours.length; i++){
      this.cookiesPurchased.push(Math.floor(this.customersList[i] * this.avgCookie));
    }
  },
  totalCookies: function() {
    for( let i = 0; i < hours.length; i++ ){
      this.dailyTotal += this.cookiesPurchased[i];
    }
  },
  renderData: function() {
    this.customersPerHour();
    this.purchasedCookiesPerHour();
    this.totalCookies();
    $('#locations').append('<article3>');
    // H2
    $('article3').append(`<h2>${this.storeName}`);
    // UL
    $('article3').append($('<ul>').addClass(`${this.storeName}`));
    //LI
    for(let i = 0; i < hours.length; i++){
      $(`.${this.storeName}`).append(`<li>${hours[i]}: ${this.cookiesPurchased[i]} cookies`);
    }
    $(`.${this.storeName}`).append(`Total: ${this.dailyTotal}`);
  }
};
let paris = {
  storeName: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  customersList: [],
  cookiesPurchased: [],
  dailyTotal: 0,

  customersPerHour: function() {
    for(let i=0; i < hours.length; i++){
      this.customersList.push(randomNumCust(this.minCust, this.maxCust));
    }
  },
  purchasedCookiesPerHour: function() {
    for(let i = 0; i < hours.length; i++){
      this.cookiesPurchased.push(Math.floor(this.customersList[i] * this.avgCookie));
    }
  },
  totalCookies: function() {
    for( let i = 0; i < hours.length; i++ ){
      this.dailyTotal += this.cookiesPurchased[i];
    }
  },
  renderData: function() {
    this.customersPerHour();
    this.purchasedCookiesPerHour();
    this.totalCookies();
    $('#locations').append('<article4>');
    // H2
    $('article4').append(`<h2>${this.storeName}`);
    // UL
    $('article4').append($('<ul>').addClass(`${this.storeName}`));
    //LI
    for(let i = 0; i < hours.length; i++){
      $(`.${this.storeName}`).append(`<li>${hours[i]}: ${this.cookiesPurchased[i]} cookies`);
    }
    $(`.${this.storeName}`).append(`Total: ${this.dailyTotal}`);
  }
};
let lima = {
  storeName: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  customersList: [],
  cookiesPurchased: [],
  dailyTotal: 0,
  customersPerHour: function() {
    for(let i=0; i < hours.length; i++){
      this.customersList.push(randomNumCust(this.minCust, this.maxCust));
    }
  },
  purchasedCookiesPerHour: function() {
    for(let i = 0; i < hours.length; i++){
      this.cookiesPurchased.push(Math.floor(this.customersList[i] * this.avgCookie));
    }
  },
  totalCookies: function() {
    for( let i = 0; i < hours.length; i++ ){
      this.dailyTotal += this.cookiesPurchased[i];
    }
  },
  renderData: function() {
    this.customersPerHour();
    this.purchasedCookiesPerHour();
    this.totalCookies();
    $('#locations').append('<article5>');
    // H2
    $('article5').append(`<h2>${this.storeName}`);
    // UL
    $('article5').append($('<ul>').addClass(`${this.storeName}`));
    //LI
    for(let i = 0; i < hours.length; i++){
      $(`.${this.storeName}`).append(`<li>${hours[i]}: ${this.cookiesPurchased[i]} cookies`);
    }
    $(`.${this.storeName}`).append(`Total: ${this.dailyTotal}`);
  }
};

seattle.renderData();
tokyo.renderData();
dubai.renderData();
paris.renderData();
lima.renderData();


// let cities = [seattle, tokyo, dubai, paris, lima];
// function renderData2() {
  // this.customersPerHour();
//   this.purchasedCookiesPerHour();
//   this.totalCookies();
//   for (let i = 0; i < cities; i++) {
//     $('#locations').append('<article>' + [i]);
//     // H2
//     console.log($('<article>' + [i]).append(`<h2>${this.storeName}`));

//     // UL
//     $('<article>' + [i]).append($('<ul>').addClass(`${this.storeName}`));
//     //LI
//     for(let i = 0; i < hours.length; i++){
//       $(`.${this.storeName}`).append(`<li>${hours[i]}: ${this.cookiesPurchased[i]} cookies`);
//     }
//     $(`.${this.storeName}`).append(`Total: ${this.dailyTotal}`);
//   }
// }

