/*
Question - 1a : Get all the countries from Asia continent/region using Filter function
API : https://restcountries.com/v3.1/all
*/


//creating XMLHttpRequest to communicate with API
let request = new XMLHttpRequest();


//opening or connecting the API
request.open("GET", "https://restcountries.com/v3.1/all");


//sending out GET request
request.send();


//while loading event getting our needed output
request.onload = () =>{
    //getting response array
    let res = JSON.parse(request.response);
    // console.log(res[0].name);

    //filtering the countries which from asia continent or region
    let asiaCountriesAR = res.filter(
            (ele)=> ele.continents[0] == "Asia" || ele.region == "Asia"
        ); 
    
    //getting the name only of the countries
    let asiaCountries = asiaCountriesAR.map(
        (ele) => ele.name.common
    );
    // console.log(asiaCountries);

    //printing the countries one by one
    console.log(`The countries from Asia continent/region are :`);
    for(let i=0;i<asiaCountries.length;i++){
        console.log(`${i+1}. ${asiaCountries[i]}`);
    }
    
}