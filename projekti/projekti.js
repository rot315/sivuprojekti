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
  varo = prompt('pysäköinti rajoituksia')
 }

function showPosition(position) {
  let la =  position.coords.latitude;
  let lo =  position.coords.longitude;
  let marker = L.marker([la, lo]).addTo(mymap)
    .bindPopup("<b> sijainti: "+ missa + "<br> Pysäköinti aika: "+ aika +"<br> Rajoitukset: "+varo+"</b>").openPopup();

}



function Gako(){
    var txt;
    if (confirm("lisätäänkö kuva")) {
      kuvasi = prompt('lisää kuvan sijainti');
    } else {
      kuvasi = "http://users.metropolia.fi/~patriksn/Kuvia/tarvittavakuvamateriaali.png";
    }

}

let coord;
let lat;
let lng;
let missa;
let aika;
let varo;

let marker;
let kuvasi;


mymap.on('click', onMapClick);

function onMapClick(e) {
  missa = prompt('sijainti');
  aika = prompt('pysäköintiaika');
  varo = prompt('pysäköinti rajoituksia');
  coord = e.latlng;
  lat = coord.lat;
  lng = coord.lng;
}


function jusus() {

  let marker = L.marker([lat, lng])
  .addTo(mymap).bindPopup( "<img src=\"" + kuvasi + "\" alt=\"ei kuvaa :C\" width=\"100\" height=\"100\"/><b> sijainti: "+ missa + "<br> Pysäköinti aika: "+ aika +"<br> Rajoitukset: "+varo+"</b><br><button class=\"norm\" id=\"poisto\" onclick=\"poista()\">remove</button>").openPopup();

}

function poista() {
  L.marker([lat, lng])
      .removeLayer(marker);
}