/* global google:ignore */
$(() => {

  const $map = $('.map');
  let map    = null;



  initMap();



  function initMap() {
    const startPoint = {
      lat: $('#startPointLat').val(),
      lng: $('#startPointLng').val()
    };
    const endPoint = {
      lat: $('#endPointLat').val(),
      lng: $('#endPointLng').val()
    };
    const startLatLng = { lat: parseFloat(startPoint.lat), lng: parseFloat(startPoint.lng) };
    const endLatLng = { lat: parseFloat(endPoint.lat), lng: parseFloat(endPoint.lng)};


    map = new google.maps.Map($map.get(0), {
      zoom: 14,
      center: startLatLng
    });
    const marker = new google.maps.Marker({
      position: startLatLng,
      position2: endLatLng,
      map: map
    });

    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  }





  //get the location from the form/model - startPoint and endPoint - separate start lat & lng, and end lat & lng?
  //add markers and set these to equal the location points
  //if time allows, add path and enable travelmode - bike to display duration on map


});
