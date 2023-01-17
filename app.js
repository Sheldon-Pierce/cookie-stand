let locationSection = document.getElementById('locations');

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
    let articleELEM = document.createElement('article');
    locationSection.appendChild(articleELEM);
    // H2
    let h2ELEM = document.createElement('h2');
    h2ELEM.textContent = this.storeName;
    articleELEM.appendChild(h2ELEM);
    // UL
    let ulELEM = document.createElement('ul');
    articleELEM.appendChild(ulELEM);
    //LI
    for(let i = 0; i < hours.length; i++){
      let liELEM = document.createElement('li');
      liELEM.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulELEM.appendChild(liELEM);
    }
    //LI - Total
    let liELEM = document.createElement('li');
    liELEM.textContent = `Total: ${this.dailyTotal}`;
    ulELEM.appendChild(liELEM);
  }
};


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
    let articleELEM = document.createElement('article');
    locationSection.appendChild(articleELEM);
    // H2
    let h2ELEM = document.createElement('h2');
    h2ELEM.textContent = this.storeName;
    articleELEM.appendChild(h2ELEM);
    // UL
    let ulELEM = document.createElement('ul');
    articleELEM.appendChild(ulELEM);
    //LI
    for(let i = 0; i < hours.length; i++){
      let liELEM = document.createElement('li');
      liELEM.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulELEM.appendChild(liELEM);
    }
    //LI - Total
    let liELEM = document.createElement('li');
    liELEM.textContent = `Total: ${this.dailyTotal}`;
    ulELEM.appendChild(liELEM);
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
    let articleELEM = document.createElement('article');
    locationSection.appendChild(articleELEM);
    // H2
    let h2ELEM = document.createElement('h2');
    h2ELEM.textContent = this.storeName;
    articleELEM.appendChild(h2ELEM);
    // UL
    let ulELEM = document.createElement('ul');
    articleELEM.appendChild(ulELEM);
    //LI
    for(let i = 0; i < hours.length; i++){
      let liELEM = document.createElement('li');
      liELEM.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulELEM.appendChild(liELEM);
    }
    //LI - Total
    let liELEM = document.createElement('li');
    liELEM.textContent = `Total: ${this.dailyTotal}`;
    ulELEM.appendChild(liELEM);
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
    let articleELEM = document.createElement('article');
    locationSection.appendChild(articleELEM);
    // H2
    let h2ELEM = document.createElement('h2');
    h2ELEM.textContent = this.storeName;
    articleELEM.appendChild(h2ELEM);
    // UL
    let ulELEM = document.createElement('ul');
    articleELEM.appendChild(ulELEM);
    //LI
    for(let i = 0; i < hours.length; i++){
      let liELEM = document.createElement('li');
      liELEM.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulELEM.appendChild(liELEM);
    }
    //LI - Total
    let liELEM = document.createElement('li');
    liELEM.textContent = `Total: ${this.dailyTotal}`;
    ulELEM.appendChild(liELEM);
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
    let articleELEM = document.createElement('article');
    locationSection.appendChild(articleELEM);
    // H2
    let h2ELEM = document.createElement('h2');
    h2ELEM.textContent = this.storeName;
    articleELEM.appendChild(h2ELEM);
    // UL
    let ulELEM = document.createElement('ul');
    articleELEM.appendChild(ulELEM);
    //LI
    for(let i = 0; i < hours.length; i++){
      let liELEM = document.createElement('li');
      liELEM.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulELEM.appendChild(liELEM);
    }
    //LI - Total
    let liELEM = document.createElement('li');
    liELEM.textContent = `Total: ${this.dailyTotal}`;
    ulELEM.appendChild(liELEM);
  }
};

seattle.renderData();
tokyo.renderData();
dubai.renderData();
paris.renderData();
lima.renderData();
