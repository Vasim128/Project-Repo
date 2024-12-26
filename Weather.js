let city_value = document.querySelector(".weather-app input");

let btn = document.querySelector("button");

let location_logo = document.querySelector(".location-logo");

let img1 = document.querySelector("#img1");
img1.remove();

let img2 = document.querySelector("#img2");
img2.remove();

let img3 = document.querySelector("#img3");
img3.remove();

let img4 = document.querySelector("#img4");
img4.remove();

let img5 = document.querySelector("#img5");
img5.remove();

let img6 = document.querySelector("#img6");
img6.remove();

location_logo.remove();

btn.addEventListener("click" ,async() =>{

  let api_key = document.querySelector("#city1");

  let api_value = api_key.value;

  let city_name = city_value.value;

  document.querySelector("#uv-outer1").before(img1);
  document.querySelector("#uv-outer2").before(img2);
  document.querySelector("#uv-outer3").before(img3);
  document.querySelector("#uv-outer4").before(img4);
  document.querySelector("#uv-outer5").before(img5);
  document.querySelector("#uv-outer6").before(img6);

  document.querySelector("#uv-text1").innerText = "UV";
  document.querySelector("#uv-text2").innerText = "Feels Like";
  document.querySelector("#uv-text3").innerText = "Humidity";
  document.querySelector("#uv-text4").innerText = "NW wind";
  document.querySelector("#uv-text5").innerText = "Air pressure";
  document.querySelector("#uv-text6").innerText = "Visibility";

  console.log(city_name);

  const URL = `http://api.weatherstack.com/current?access_key=${api_value}&query=${city_name}`;

  let data = await fetch(URL);

  let response = await data.json(); 

  let location_name = document.querySelector(".location-name");

  location_name.before(location_logo);

  console.log(response);

  location_name.innerText = city_name;

  let x = document.querySelector(".temp");
  x.innerText = response.current.temperature;
  let y = document.createElement("sup");
  y.innerText = 'o';
  y.classList.add("small");
  x.append(y);

  let cloud = document.querySelector(".cloudy");
  cloud.innerText = "cloudy"+"    "+response.current.cloudcover
  let c =document.createElement("sup");
  c.innerText = 'o';
  c.classList.add("small1");
  cloud.append(c);

  document.querySelector(".uv-values1").innerText = response.current.uv_index;

  let c0 = document.querySelector(".uv-values2"); 
  c0.innerText = response.current.feelslike;
  let c1 =document.createElement("sup");
  c1.innerText = 'o';
  c1.classList.add("small1");
  c0.append(c1);

  let c2 = document.querySelector(".uv-values3");
  c2.innerText = response.current.humidity;
  let c3 =document.createElement("p");
  c3.innerText = '%';
  c3.classList.add("small2");
  c2.append(c3);
  
  let c4 = document.querySelector(".uv-values4");
  c4.innerText = response.current.wind_speed;
  let c5 =document.createElement("p");
  c5.innerText = 'mph';
  c5.classList.add("small2");
  c4.append(c5);

  let c6 = document.querySelector(".uv-values5");
  c6.innerText = response.current.pressure;
  let c7 =document.createElement("p");
  c7.innerText = 'hpa';
  c7.classList.add("small2");
  c6.append(c7);

  let c8 = document.querySelector(".uv-values6");
  c8.innerText = response.current.visibility;
  let c9 =document.createElement("p");
  c9.innerText = 'km';
  c9.classList.add("small2");
  c8.append(c9);
})