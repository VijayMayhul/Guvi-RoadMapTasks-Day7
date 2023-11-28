/*
Question - 1d : Print the total population of countries using reduce function
API : https://restcountries.com/v3.1/all
*/



//creating XMLHttpRequest to communicate with API
let request = new XMLHttpRequest();


//opening or connecting the API
request.open("GET", "https://restcountries.com/v3.1/all");


//sending out GET request
request.send();


//while loading event, getting our needed output
request.onload = () =>{
    //getting response array
    let res = JSON.parse(request.response);
    // console.log(res[0].population);
    
    //getting all countries population in an array
    let arAllConPopulation = res.map((ele) => ele.population);
    // console.log(arAllConPopulation);

    //calculating total population
    let sumOfPopulation = arAllConPopulation.reduce(
        (acc, ele)=> acc+ele, 0);
    
    //printing total population of the countries
    console.log(`The total population of countries is : ${sumOfPopulation}`);
    
    
    
    
}