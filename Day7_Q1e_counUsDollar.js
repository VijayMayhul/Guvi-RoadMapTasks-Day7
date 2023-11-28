/*
Question - 1e : Print the country that uses US dollars as currency
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
    var res = JSON.parse(request.response);
    // console.log(res);
    /*
    let cur = res[15].currencies;
    // console.log(cur);
    // console.log(Object.keys(cur) == "USD");
    let key = Object.keys(cur);
    console.log(key, typeof(key));
    console.log(cur[key].name);
    */
 
   //getting currency array
    var arCounCurrencies = res.map((ele) => ele.currencies);
    // console.log(arCounCurrencies);
    // console.log(arCounCurrencies[120] == undefined);

    //removing undefined arrays
    arCounCurrencies = arCounCurrencies.filter((ele)=> ele != undefined);
    // console.log(arCounCurrencies);

    //getting the arrays which as USD as their currency
    var arUScountries = arCounCurrencies.filter((ele)=> Object.keys(ele) == "USD");
    /*
    console.log(arUScountries);
    console.log(arUScountries[0].USD.name == res[19].currencies.USD.name);
    console.log(JSON.stringify(res[19].currencies), JSON.stringify(arUScountries[0]));
    console.log(JSON.stringify(res[19].currencies) == JSON.stringify(arUScountries[0]));
    */

    //comparing the whole array currency with USD using array to find the usd using array of countries
    var UsDollarCountries = res.filter((ele)=> JSON.stringify(ele.currencies) == JSON.stringify(arUScountries[0]));
    
    //printing the USD using countries
    console.log(`The countries that uses US dollar as their currency are :`);
    UsDollarCountries.forEach((item, index)=>{
        console.log(`${index+1}. ${item.name.common}`);
    });
    
    
    

    
    




    /*
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
    */
    
}