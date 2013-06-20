function initialize()
{
/*
var type = 'events';
var attributes = {name: 'OpenTechSchool', website: 'http://www.opentechschool.org', ort: 'Berlin'};
hoodie.store.add(type, attributes)
done(function (newObject) {
// Data was saved!
});
*/

var mapProp = {

  /* Geolocation von Berlin
  			center:new google.maps.LatLng(52.500556,13.398889),
  	*/
  
  zoom:12,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);

//var betahausLatLang = new google.maps.LatLng(52.519171,13.406091);

// HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatlng = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
                              
      var eventlocation='';
      
      // Lat Long des Users in Datenbank speichern
      
      hoodie.store.add("latlong", {"lat":position.coords.latitude, "long":position.coords.longitude}).done(function (newObject) {});
                                       
      
      map.setCenter(myLatlng);
      addMarker(myLatlng);
      
      

    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
    var myLatlng = new google.maps.LatLng(52.500556,13.398889);
    
  }

  
  function addMarker(location) {
    marker = new google.maps.Marker({
    position: location,
    map: map, 
    title: "Hier bin ich!"
    });
    //markersArray.push(marker);
    }
    
 /*
   hoodie.store.findAll("events").done(function (object) {$.each(object,function(i,item){
			eventlocation = new google.maps.LatLng(item.lat,
                                       item.lon);
            addMarker(eventlocation);
            })});
*/
    

}


			
		}
		
		
		)});

google.maps.event.addDomListener(window, 'load', initialize);





function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXyMI-wWoXpGtXLD6M9LtpTHYdOsB10R4&sensor=false&callback=initialize";
  document.body.appendChild(script);
}