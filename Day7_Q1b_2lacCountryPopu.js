/*
Question - 1b : Get all the countries with a population of less than 2 lakhs using Filter function
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
    // console.log(res[0].population);
    // console.log(typeof(res[0].population));

    
    //filtering the countries where its population less than 2 lakhs
    let ar2LacCountries = res.filter(
            (ele)=> ele.population < 200000
        ); 
        // console.log(ar2LacCountries);
    
    //getting the name only of the countries
    let Countries2Lac = ar2LacCountries.map(
        (ele) => ele.name.common
    );
    // console.log(Countries2Lac);

    
    //printing the countries one by one
    console.log(`The countries which as population less than 2 lakhs :`);
    for(let i=0;i<Countries2Lac.length;i++){
        console.log(`${i+1}. ${Countries2Lac[i]}`);
    }

    
}