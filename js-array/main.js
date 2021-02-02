const companies = [
    {name: 'Company One', category:'Finance', start:'1981', end:'2003'},
    {name: 'Company Two', category:'Retail', start:'1992', end:'2008'},
    {name: 'Company Three', category:'Auto', start:'1999', end:'2007'},
    {name: 'Company Four', category:'Retail', start:'1989', end:'2010'},
    {name: 'Company Five', category:'Tecnology', start:'2009', end:'2014'},
    {name: 'Company Six', category:'Finance', start:'1987', end:'2010'},
    {name: 'Company Seven', category:'Auto', start:'1986', end:'1996'},
    {name: 'Company Eight', category:'Tecnology', start:'2011', end:'2016'},
    {name: 'Company Nine', category:'Retail', start:'1981', end:'1989'},

];

const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // forEach
// companies.forEach(function(company){
//    console.log(company.category) ;
// })


// filter
// 21 and older


// for(let i = 0; 1< age.length; 1++) {
//     if(age[i] >= 21) {
//         canDrink.push(age[i]);
//     }
// }

// const canDrink = age.filter(function(age) {
//     if(age >= 21){
//         return true;
//     }
// });

const canDrink = age.filter(age => age >= 21);

// console.log(canDrink);

// filter retail compaines
const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990) );
// console.log(eightiesCompanies);

//  get 10yrs

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10) );
console.log(lastedTenYears);






// map

// create array of company name



// I tried using this but it was saying false
// const companyName = companies.map( company => (company.name === 'company One') 
    
// );
// console.log(companyName);

const companyName =  companies.map((company) => (company.name));
console.log(companyName);




// const companyName = companies.map(function(company){
//     return company.name
// });
// console.log(companyName);

const ageSquare = age.map(age => Math.sqrt(age));
console.log(ageSquare)

const ageDivedeByTwo = age.map(age => age/2);

console.log(ageDivedeByTwo)

const ageSubTwo = age.map(age => age-2);
console.log(ageSubTwo);

// sort
// const sortedCompanies =  companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1) );

console.log(sortedCompanies);

// const sortAge = age.sort();

// console.log(sortAge);

const sortAge = age.sort((c1, c2) => c1-c2);

console.log(sortAge);



// reduce
// let ageSum = 0;
// for(let i = 0; i < age.length; i++) {
//     ageSum += age[i];
// }

// const ageSum =age.reduce(function(total, age){
//     return total + age;
// }, 0);

const ageSum =age.reduce((total, age) => total + age,
 0);

console.log(ageSum);

// get total years for all companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears);

// combine method

const combined = age
   .map(age => age * 2)
   .filter(age => age >= 40)
   .sort((a, b) => a-b)
   .reduce((a, b) => a + b, 0);

   console.log(combined);
