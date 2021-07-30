var lat = null;
var lang = null;
var langitude = [-6.21462, 106.84513];
var mymap = L.map('mapid').setView(langitude, 13);

L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieXVzdGFuemFoIiwiYSI6ImNrcm92ZWdmdDhpN3Qydm10OWhrcDZiNTQifQ.5xLDcJ-neG1QU3xl5fy93A',
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    },
).addTo(mymap);

function onMapClick(e) {
    lat = e.latlng.lat;
    lang = e.latlng.lng;
    alert('You clicked the map at ' + e.latlng);
}

function changeLocation(lat, lang) {
    // e.preventDefault();
    // alert(lang);
    langitude = [lat, lang];
}

mymap.on('click', onMapClick);
-6.221758, 106.867069;
var marker = L.marker([-6.21462, 106.84513]).addTo(mymap);
marker.bindPopup('<b>Menteng Atas</b><br>DKI Jakarta').openPopup();

var marker = L.marker([-6.197027, 106.883716]).addTo(mymap);
marker.bindPopup('<b>Rawamangun</b><br>DKI Jakarta').openPopup();

var marker = L.marker([-6.221758, 106.867069]).addTo(mymap);
marker.bindPopup('<b>Bali mester</b><br>DKI Jakarta').openPopup();