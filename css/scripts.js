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