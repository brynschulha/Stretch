const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const biggestFollower = function (obj) {
  let bigFollower = "";
  let numOfFollowers = 0;
  for (let x in obj) {
    let current = obj[x].follows;
    if (current.length > numOfFollowers) {
      numOfFollowers = current.length;
      bigFollower = obj[x].name;
    }    
  }
  console.log(bigFollower);
};

const mostPopular = function () {

};

const printAll = function () {

};

const unrequitedFollowers = function () {

};

const hasMostOverThirty = function () {

};

const followsMostOverThirty = function () {

};

const reach = function () {

};

biggestFollower(data);