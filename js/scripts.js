<script>
// Mapa Leaflet
var mapa = L.map('mapid').setView([-32, -59], 7);

// Capa base
var googlemaps = L.tileLayer(
    'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', 
    {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.google.com/intl/es_ALL/permissions/geoguidelines/">Google Maps</a>'
    }
  ).addTo(mapa);		
              
   // Otra capa base
   var esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
    {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
  ).addTo(mapa);	
  
  // Otra capa base 2
  var esristreets = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', 
    {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
  ).addTo(mapa);	
  
  // Otra capa base 3
  var googletrafic = L.tileLayer(
    'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}', 
    {
      attribution: '&copy; <a href="https://www.google.com/intl/es_ALL/permissions/geoguidelines/">Google Maps</a>'
    }
  ).addTo(mapa);   

  // Otra capa base 4
  var OpenTopoMap = L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  }
  ).addTo(mapa);

    // Otra capa base 5
  var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
  }
  ).addTo(mapa);

  // Marcadores
           
  parana = L.marker([-31.744025, -60.513933]); // {icon: L.divIcon({html:'<i class="fa-brands fa-android"></i>'})});
  parana.bindTooltip("Paraná").openTooltip();
  parana.bindPopup("<h1>Paraná</h1> <a href='https://es.wikipedia.org/wiki/Paraná_(Argentina)'>Wikipedia</a>").openPopup();
  parana.addTo(mapa);
      
  concordia = L.marker([-31.380940, -58.016913]);
  concordia.bindTooltip("Concordia").openTooltip();
  concordia.bindPopup("<h1>Concordia</h1> <a href='https://es.wikipedia.org/wiki/Concordia_(Argentina)'>Wikipedia</a>").openPopup();
  concordia.addTo(mapa);	   
      
  gualeguaychu = L.marker([-33.007250, -58.522551]);
  gualeguaychu.bindTooltip("Gualeguaychú").openTooltip();
  gualeguaychu.bindPopup("<h1>Gualeguaychu</h1> <a href='https://es.wikipedia.org/wiki/Gualeguaych%C3%BA'>Wikipedia</a>").openPopup();
  gualeguaychu.addTo(mapa);	  
  
  villaguay = L.marker([-31.863243, -59.029936]);
  villaguay.bindTooltip("Villaguay").openTooltip();
  villaguay.bindPopup("<h1>Villaguay</h1> <a href='https://es.wikipedia.org/wiki/Villaguay'>Wikipedia</a>").openPopup();
  villaguay.addTo(mapa);

  nogoya = L.marker([-32.392867, -59.790717]);
  nogoya.bindTooltip("Nogoyá").openTooltip();
  nogoya.bindPopup("<h1>Nogoya</h1> <a href='https://es.wikipedia.org/wiki/Nogoy%C3%A1'>Wikipedia</a>").openPopup();
  nogoya.addTo(mapa);

  lapaz = L.marker([-30.743084, -59.642254]);
  lapaz.bindTooltip("La Paz").openTooltip();
  lapaz.bindPopup("<h1>La Paz</h1> <a href='https://es.wikipedia.org/wiki/La_Paz_(Entre_R%C3%ADos)'>Wikipedia</a>").openPopup();
  lapaz.addTo(mapa);
          
  // Conjunto de capas base
  var mapasBase = {
      "ESRI": esri,		
      "Google Maps": googlemaps,
      "ESRI Streets" : esristreets,
      "Google Traffic" : googletrafic,
      "Topográfico" : OpenTopoMap,
      "National Geographic" : Esri_NatGeoWorldMap
  };	 
  
   // Control de capas
   L.control.layers(mapasBase).addTo(mapa);	

  // Control de escala
   L.control.scale({position: "topright"}).addTo(mapa);

  </script>							    