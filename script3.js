const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'Enter your API here',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  const getWeather = (city)=>{

    cityName.innerHTML =city;
  
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        console.log(response);
    
          //cloud_pct.innerHTML = response.cloud_pct 
          temp.innerHTML = response.temp 
          temp2.innerHTML = response.temp
          feels_like.innerHTML = response.feels_like 
          humidity.innerHTML= response.humidity
          humidity2.innerHTML= response.humidity
          min_temp.innerHTML= response.min_temp
          max_temp.innerHTML = response.max_temp 
          wind_speed.innerHTML= response.wind_speed
          wind_speed2.innerHTML= response.wind_speed
          wind_degrees.innerHTML= response.wind_degrees
          sunrise.innerHTML = response.sunrise 
          sunset.innerHTML = response.sunset 
    
        console.log({ cloud_pct, temp, feels_like, humidity, min_temp, max_temp, wind_speed, wind_degrees, sunrise, sunset });
      })
      .catch(err => console.error('Fetch error:', err));
  
  }
  
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    getWeather(city.value)
  })
  
  //for default values
  getWeather("islamabad")


  //for the common cities

const updateWeatherForCommonCities = () => {
    const commonCities = [
      { name: 'Lahore', id: 'lahore' },
      { name: 'Quetta', id: 'quetta' },
      { name: 'Islamabad', id: 'islamabad' },
      { name: 'Karachi', id: 'karachi' },
      { name: 'Peshawar', id: 'peshawar' },
      { name: 'Faisalabad', id: 'faisalabad' }
      
    ];
  
    commonCities.forEach(city => {
      fetchWeatherData(city.name)
        .then(response => {
          //it will update the values of each cell
          const row = document.getElementById(city.id);
          row.cells[1].textContent = response.cloud_pct;
          row.cells[2].textContent = response.temp;
          row.cells[3].textContent = response.feels_like;
          row.cells[4].textContent = response.humidity;
          row.cells[5].textContent = response.min_temp;
          row.cells[6].textContent = response.max_temp;
          row.cells[7].textContent = response.wind_speed;
          row.cells[8].textContent = response.wind_degrees;
          row.cells[9].textContent = response.sunrise;
          row.cells[10].textContent = response.sunset;
        })
        .catch(error => console.error('Error fetching weather data:', error));
    });
  };
  
  // Function to fetch weather data for a specific city
  const fetchWeatherData = (city) => {
    return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
  };

  // Call the function to update weather data for common cities
  updateWeatherForCommonCities();
  