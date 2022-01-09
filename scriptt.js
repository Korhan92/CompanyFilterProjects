const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  for(i in companies){
      console.log(companies[i]);
  }
  console.warn("asdasd")

  for (i of companies){
      console.log(i);
  }

  companies.forEach(item => {
      console.log(item.name)
  });
  
  companies[companies.length] = {name: "Company Ten", category: "Retail", start: 1981, end: 1989}
companies.push({name: "Company Ten", category: "Retail", start: 1981, end: 1989 })
console.log(companies)

let companiesCategory = companies.filter(i => i.category === "Retail")
let compDate = companies.filter(i => i.start >= 1980 && i.end < 1990)
let compTenYear = companies.filter(i => (i.end - i.start) > 10)

console.log(companiesCategory)
console.log(compDate)
console.log(compTenYear)

let compName = companies.map(item => item.name)
console.log(compName)

let compp = companies.map(item => [item.name , item.start, item.end])
console.log(compp)

let sortMethod = companies.sort((a,b) => a.start - b.start);
console.log(sortMethod)

let acc = 0;
let reduceMethod = companies.reduce((acc,item) =>{
    return acc + (item.end - item.start)
},0)
console.log(reduceMethod)