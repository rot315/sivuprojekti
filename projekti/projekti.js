var mymap = L.map('mapid').setView([60.26, 24.85], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);


var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  missa = prompt('sijainti');
  aika = prompt('pysäköintiaika');
  varoitus = prompt('pysäköinti rajoituksia')
 }

function showPosition(position) {
  let la =  position.coords.latitude;
  let lo =  position.coords.longitude;
  let marker = L.marker([la, lo]).addTo(mymap)
    .bindPopup(missa+" "+ aika +" - "+aika1).openPopup();

}

function Gako(){
  alert("Gako");
}

let coord = e.latlng;
let lat = coord.lat;
let lng = coord.lng;
let marker = L.marker([lat, lng]).
    addTo(mymap).bindPopup("Sijainti: " + mis + "Pysäköinti aika: " + ai + "Rajoitukset: " + varo).
    openPopup();


function onMapClick(e) {
  mis = prompt('sijainti');
  ai = prompt('pysäköintiaika');
  varo = prompt('pysäköinti rajoituksia');
}


function jusus() {

    mymap.on('click', onMapClick);

}













