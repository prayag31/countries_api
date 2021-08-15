const getCountries = () =>{
  
    const xhr = new XMLHttpRequest();
    
    xhr.open ('GET','https://restcountries.eu/rest/v2/all');
    
    xhr.responeType='json';
    
    xhr.onload = () => {
      
      const data = xhr.response;
      
    myData = JSON.parse(data);
     
      console.log(myData.filter(onlyNames)
                  .map(onlyNames))      
    }
    xhr.send();
  } 
  getCountries();
  
  function onlyNames(country){
    let a = [];
    if (country['population']>=10_00_00_000){
      a.push(country.name, country.population)
   return a;
    }
  
  }
    