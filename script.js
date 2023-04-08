let infos = document.querySelector("section");

function search() {
  let textContry = document.querySelector(".text").value;
  var capitalDiv = document.createElement("div");
  var flagDiv = document.createElement("div");
  var countryDiv = document.createElement("div");
  var continentDiv = document.createElement("div");

  capitalDiv.innerHTML = `<span>pays</span><br><p>${textContry}<p>`;
  let url = "https://restcountries.com/v3.1/name/" + textContry;
  fetch(url)
    .then(response =>
    response.json()
    .then(data => {

       const country = data[0];
       const capital = country.capital;
       const continent = country.continents;

       const flag = country.flags.svg;

       capitalDiv.innerHTML = `<span>Capital</span><br><p>${capital}<p>`;
       continentDiv.innerHTML = `<span>Continent</span><br><p>${continent}<p>`;
       flagDiv.innerHTML = `<span>Flag</span><br><img src = "${flag}">`;

       countryDiv.appendChild(capitalDiv);
       countryDiv.appendChild(continentDiv);
       countryDiv.appendChild(flagDiv);

       infos.appendChild(countryDiv);

    }))
}
