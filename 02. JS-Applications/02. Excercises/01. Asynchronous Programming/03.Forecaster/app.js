async function attachEvents() {
  const submitBtn = document.getElementById("submit");
  let currentSection = document.getElementById("current");
  let upcomingSection = document.getElementById("upcoming");

  submitBtn.addEventListener("click", async function () {
    let location = document.getElementById("location").value;
    const locationUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
    const locData = await fetch(locationUrl);
    let locationInfo = await locData.json();
    let city = locationInfo.find((x) => x.name == location);

    if (!city) {
      throw new Error("Cant find City");
    }

    let todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${city.code}`;
    const today = await fetch(todayUrl);
    let foreCast = await today.json();

    let upcommingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${city.code}`;
    const upcoming = await fetch(upcommingUrl);
    let upcomingForecast = await upcoming.json();

    console.log(upcomingForecast);
    document.getElementById("forecast").style.display = "block";
    let values = Object.values(foreCast);
    let cityState = values[0];
    console.log(cityState);

    let divForecasts = document.createElement("div");
    divForecasts.className = "forecasts";

    let conditionSymbolSpan = document.createElement("span");
    conditionSymbolSpan.className = "condition symbol";

    if (cityState[`condition`] == "Sunny") {
      conditionSymbolSpan.innerHTML = `&#x2600`;
    } else if (cityState[`condition`] == "Partly sunny") {
      conditionSymbolSpan.innerHTML = "&#x26C5";
    } else if (cityState[`condition`] == "Overcast") {
      conditionSymbolSpan.innerHTML = "&#x2601";
    } else if (cityState[`condition`] == "Rain") {
      conditionSymbolSpan.innerHTML = "&#x2614";
    } else if (cityState[`condition`] == "Degrees") {
      conditionSymbolSpan.innerHTML = "&#176";
    }
    divForecasts.appendChild(conditionSymbolSpan);

    let spanCondition = document.createElement("span");
    spanCondition.className = "condition";

    let spanForecastData = document.createElement("span");
    spanForecastData.className = "forecast-data";
    spanForecastData.textContent = foreCast.name;

    let spanForecastDataDegree = document.createElement("span");
    spanForecastDataDegree.className = "forecast-data";
    spanForecastDataDegree.textContent = `${cityState['low']}/${cityState['high']}`;

    let spanForecastDataCondition = document.createElement("span");
    spanForecastDataCondition.className = "forecast-data";
    spanForecastDataCondition.textContent = cityState['condition'];

    currentSection.appendChild(divForecasts);
    spanCondition.appendChild(spanForecastData);//up
    spanCondition.appendChild(spanForecastDataDegree)//middle
    spanCondition.appendChild(spanForecastDataCondition);//low
    //----------------------current---------------------//

    //----------------------uppcomming-------------------//

    let upcomingValues = Object.values(upcomingForecast);
    console.log(upcomingValues);
    let divForecastUpcoming = document.createElement("div");//attach span
    divForecastUpcoming.className = 'forecast-info'

    let spanUpcomingSymbol = document.createElement("span");
    spanUpcomingSymbol.className = 'symbol';
    spanUpcomingSymbol.innerHTML =  conditionSymbolSpan.innerHTML;

    divForecastUpcoming.appendChild(spanUpcomingSymbol);//up


    
    currentSection.appendChild(spanCondition);
    upcomingSection.appendChild(divForecastUpcoming);

  });
}

attachEvents();
