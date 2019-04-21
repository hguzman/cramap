
    var locations = {};

    function load() {
      var map = new GMap2(document.getElementById("map_canvas"));
      map.setCenter(new GLatLng(10.556672,-75.124512), 9);

      GDownloadUrl("xml/markerdata.xml", function(data) {
        var xml = GXml.parse(data);
        var markers = xml.documentElement.getElementsByTagName("marker");
        for (var i = 0; i < markers.length; i++) {
          var name = markers[i].getAttribute("name");
          var address = markers[i].getAttribute("address");
          var type = markers[i].getAttribute("type");
          var latlng = new GLatLng(parseFloat(markers[i].getAttribute("lat")),
                                  parseFloat(markers[i].getAttribute("lng")));
          var store = {latlng: latlng, name: name, address: address, type: type};
          var latlngHash = (latlng.lat().toFixed(6) + "" + latlng.lng().toFixed(6));
          latlngHash = latlngHash.replace(".","").replace(".", "").replace("-","");
          if (locations[latlngHash] == null) {
            locations[latlngHash] = []
          }
          locations[latlngHash].push(store);
        }
        for (var latlngHash in locations) {
          var stores = locations[latlngHash];
          if (stores.length > 1) {
            map.addOverlay(createClusteredMarker(stores));
          } else {
            map.addOverlay(createMarker(stores));
          }
         }
      });
    }

    function createMarker(stores) {
      var store = stores[0];
      var newIcon = MapIconMaker.createMarkerIcon({width: 32, height: 32, primaryColor: "#00ff00"});
      var marker = new GMarker(store.latlng, {icon: newIcon});
      var html = "<b>" + store.name + "</b> <br/>" + store.address + "<br/>" + store.type;
      GEvent.addListener(marker, 'click', function() {
        marker.openInfoWindowHtml(html);
      });
      return marker;
    }

    function createClusteredMarker(stores) {
      var newIcon = MapIconMaker.createMarkerIcon({width: 44, height: 44, primaryColor: "#00ff00"});
      var marker = new GMarker(stores[0].latlng, {icon: newIcon});
      var html = "";
      for (var i = 0; i < stores.length; i++) {
        html += "<b>" + stores[i].name + "</b> <br/>" + stores[i].address + "<br/>";
      }
      GEvent.addListener(marker, 'click', function() {
        marker.openInfoWindowHtml(html);
      });
      return marker;
    }
