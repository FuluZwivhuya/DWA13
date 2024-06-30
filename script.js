// function countLetters(String){
//    return  String.length;
// };

// const surname = "fulu";
// const letterCount = countLetters(surname);
// console.log(letterCount);

//console.log(provinces,names)

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach((names)=>{
    console.log(names);
});

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

const provincesUpCase = provinces.map((province)=>
    province.toUpperCase());
console.log(provincesUpCase);

const nameLength = names.map((name)=>
    name.length);
console.log(nameLength);

const provincesSorted = provinces.toSorted();
console.log(provincesSorted);

const provinceFilter = provinces.filter((province) => !province.includes('Cape'));// BE carefull of the casing
const availableProvince = provinceFilter.length;
console.log(availableProvince);

const nameBoolean = names.map((name) => { //how can I incoperate some
    if (name.includes('s')) {
      return true;
    } else {
      return false;
    }
  });
  
  console.log(nameBoolean);

  const NamesWiths = names.some((name) => name.includes('s'));// not there yet
  console.log(NamesWiths);

  const result = names.reduce((accumulator, name, index) => {
    accumulator[name] = provinces[index];
    return accumulator;
  }, {});
  
  console.log(result);
