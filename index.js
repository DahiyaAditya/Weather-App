const getCityName = (city)=>{   
    cityname.innerHTML = city;
    const p= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d6164bc346ae62c71f74540bd1a6c0d`,Option)
    p.then((value)=>{
        return value.json();
    }).then((value2)=>{
        let arrayData = [value2]; 
        let realTimearrayData = arrayData.map(eachobj => eachobj.main);
        temp.innerHTML        = realTimearrayData.map(eachobj1=> (eachobj1.temp- 273.15).toFixed(1));
        temp_min.innerHTML    = realTimearrayData.map(eachobj1=> (eachobj1.temp_min- 273.15).toFixed(1));
        temp_max.innerHTML    = realTimearrayData.map(eachobj1=> (eachobj1.temp_max- 273.15).toFixed(1))
        feels_like.innerHTML  = realTimearrayData.map(eachobj1=> (eachobj1.feels_like- 273.15).toFixed(1))
        location.innerHTML    = arrayData.map(eachobj1=> eachobj1.name)
        
    }).catch((err)=>{
        console.log(err);
    })
}

submit.addEventListener("click",(E)=>{
    //console.log(Event.value.city);
    E.preventDefault();
    getCityName(city.value);
})
const getBengluruWeather = ()=>{
    const b = fetch(`https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=0d6164bc346ae62c71f74540bd1a6c0d`,Option)
    b.then((value)=>{
          return value.json();
    }).then((value2)=>{
        let arrayobj = [value2];
        let realTimearrayDataBang = arrayobj.map(eachobj => eachobj.main);
        tempBeng.innerHTML        = realTimearrayDataBang.map(eachobj1=> (eachobj1.temp- 273.15).toFixed(1));
        temp_minBeng.innerHTML        = realTimearrayDataBang.map(eachobj1=> (eachobj1.temp_min- 273.15).toFixed(1));
        temp_maxBeng.innerHTML        = realTimearrayDataBang.map(eachobj1=> (eachobj1.temp_max- 273.15).toFixed(1))
        feels_likeBeng.innerHTML      = realTimearrayDataBang.map(eachobj1=> (eachobj1.feels_like- 273.15).toFixed(1))
    })
}
const getBerlinWeather = ()=>{
    const b = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=0d6164bc346ae62c71f74540bd1a6c0d`,Option)
    b.then((value)=>{
          return value.json();
    }).then((value2)=>{
        let arrayobj = [value2];
        let realTimearrayDataBer = arrayobj.map(eachobj => eachobj.main);
        tempBer.innerHTML         = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp- 273.15).toFixed(1));
        temp_minBer.innerHTML     = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp_min- 273.15).toFixed(1));
        temp_maxBer.innerHTML     = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp_max- 273.15).toFixed(1))
        feels_likeBer.innerHTML   = realTimearrayDataBer.map(eachobj1=> (eachobj1.feels_like- 273.15).toFixed(1))
    })
}
const getParisWeather = ()=>{
    const b = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=0d6164bc346ae62c71f74540bd1a6c0d`,Option)
    b.then((value)=>{
          return value.json();
    }).then((value2)=>{
        let arrayobj = [value2];
        let realTimearrayDataBer = arrayobj.map(eachobj => eachobj.main);
        tempParis.innerHTML         = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp- 273.15).toFixed(1));
        temp_minParis.innerHTML     = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp_min- 273.15).toFixed(1));
        temp_maxParis.innerHTML     = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp_max- 273.15).toFixed(1))
        feels_likeParis.innerHTML   = realTimearrayDataBer.map(eachobj1=> (eachobj1.feels_like- 273.15).toFixed(1))
    })
}
const getLonWeather = ()=>{
    const b = fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=0d6164bc346ae62c71f74540bd1a6c0d`,Option)
    b.then((value)=>{
          return value.json();
    }).then((value2)=>{
        let arrayobj = [value2];
        let realTimearrayDataBer = arrayobj.map(eachobj => eachobj.main);
        tempLon.innerHTML         = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp- 273.15).toFixed(1));
        temp_minLon.innerHTML     = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp_min- 273.15).toFixed(1));
        temp_maxLon.innerHTML     = realTimearrayDataBer.map(eachobj1=> (eachobj1.temp_max- 273.15).toFixed(1))
        feels_likeLon.innerHTML   = realTimearrayDataBer.map(eachobj1=> (eachobj1.feels_like- 273.15).toFixed(1))
    })
}

// const  getWeather = (city)=>{
//     const b = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d6164bc346ae62c71f74540bd1a6c0d`,Option)
//     b.then((value)=>{
//           return value.json();
//     }).then((value2)=>{
//         let arrayobj = [value2];
//         let  realTimearrayDataBang =  arrayobj.map(eachobj => eachobj.main);
//     //     const tempAll        = realTimearrayDataBang.map(eachobj1=> (eachobj1.temp- 273.15).toFixed(1));
//     //      const temp_minAll     = realTimearrayDataBang.map(eachobj1=> (eachobj1.temp_min- 273.15).toFixed(1));
//     //      const temp_maxAll    = realTimearrayDataBang.map(eachobj1=> (eachobj1.temp_max- 273.15).toFixed(1))
//     //     const feels_likeAll    = realTimearrayDataBang.map(eachobj1=> (eachobj1.feels_like- 273.15).toFixed(1))
//         console.log(realTimearrayDataBang)
//     //    return realTimearrayDataBang
//     })
//     setTimeout(()=>{

//         console.log(this.realTimearrayDataBang)
//     },3000)}
    
const getData = ()=>{
   
   getBerlinWeather();
   getBengluruWeather();
   getParisWeather();
   getLonWeather();
   getCityName("Delhi");
}
getData();


