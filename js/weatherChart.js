function getFahrenheit(result){
  // Your code goes here
  return result.map(function (hour){
    return hour.temperature
  })
}

function getHour(result){
  // Your code goes here
  return result.map(function (hour){
    let myDate = new Date(hour.time * 1000)
    return myDate.getHours()
  })
  // let myDate = new Date(time * 1000)
  // return myDate.getHours()
}

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "NYC Weather Data",
          data: data,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: 'rgb(255, 99, 132)'
        }
      ]
    },
    options: {
      // additional configurations here
    }
  }
}

function makeRequest(endpoint, canvas) {
  // Your code goes here
  fetch(endpoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJSON) {
    let hourlyData = myJSON.hourly.data;
      const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))
  });
  // After your fetch works - use your json data with the line below :)
}
