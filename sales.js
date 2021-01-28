const calculateSalesTax = function(salesData, taxRates) {
  let results = {};
  console.log(results);
  for (let x = 0; x < salesData.length; x++) {
    console.log(salesData[x].name);
    let companyName = salesData[x].name;
    if (results[companyName]) {
      let salesTotal = 0;
      for (let y = 0; y < salesData[x].sales.length; y++) {
        salesTotal += salesData[x].sales[y];
      }
      results[companyName]["totalSales"] += salesTotal;
    } else {
      results[companyName] = {}
      let salesTotal = 0;
      for (let y = 0; y < salesData[x].sales.length; y++) {
        salesTotal += salesData[x].sales[y];
      }
      results[companyName]["totalSales"] = salesTotal;
    } 
    let provTax = 0;
    if (salesData[x].province === 'AB') {
      provTax = 0.05;
    } else if (salesData[x].province === 'BC') {
      provTax = 0.12;
    } else if (salesData[x].province === 'SK') {
      provTax = 0.10;
    }
    results[companyName]["totalTaxes"] = provTax * salesTotal;
  }
  console.log(results);
}

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

calculateSalesTax(companySalesData, salesTaxRates);