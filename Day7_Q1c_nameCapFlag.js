/*
Question - 1c : Print the following details name, capital, flag, using forEach function
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
    // console.log(res);
    

    //printing the countries name, capital and flag
    console.log(`All countries Name,  Capital, Flag are :`);
    res.forEach((item, index) => {
        // console.log(index, item);
        let name = item.name.common;
        let capital = item.capital;
        let flag = item.flag;
        
        console.log(`${index+1}. Country Name : ${name}, Capital : ${capital}, Flag : ${flag}`);
    });
    
    
    
    
    
}