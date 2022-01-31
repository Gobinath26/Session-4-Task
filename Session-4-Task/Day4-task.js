//---------------------------------(1)----------------------------------------------------
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


var flag = true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log(`Yes They are Same: ${flag}`);
//----------------------------------------------------------------------------------------

const getCountries = () =>{

    console.log("Getting Countries...");

    const xmr = new XMLHttpRequest();

    xmr.open("GET","https://restcountries.com/v3.1/all");
    xmr.send();
    xmr.responseType ="json";

    xmr.onload = () => {
        const countries = xmr.response;
        console.log(countries);
        //------------------------------(2)--------------------------------------
        const AllCountriesFlags = countries.map((country) =>country.flags.png);
        console.log("All Countries Flags:",AllCountriesFlags);
        //------------------------------(3)-----------------------------------------

        const AllCountriesNameRegionSubregionPopulation = countries.map((country)=>({Name: country.name.common, Region :country.region , Subregion : country.subregion, Population : country.population}));
        console.log("All Countries Name,Region,Subregion,Population:",AllCountriesNameRegionSubregionPopulation);
        
    }
};
getCountries();