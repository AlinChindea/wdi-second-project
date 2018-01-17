/* global google:ignore */
$(() => {

  const $map = $('.map');
  let map    = null;
  let locations = null;

  initMap();

  function initMap() {
    const latLng = { lat: 48.566736, lng: 13.431947 };
    map = new google.maps.Map($map.get(0), {
      zoom: 14,
      center: latLng
      .done((response) => {
        locations = response;
        locations.forEach((location) => {
          addMarker(location);
        });
      });
    },
    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  };

  const startPoint = {
    lat: $('#startPointLat').val(),
    lng: $('#startPointLng').val()
  };

  const endPoint = {
    lat: $('#endPointLat').val(),
    lng: $('#endPointLng').val()
  };


  function addMarker(location) {
    const startLatLng = { lat: startPoint.lat, lng: startPoint.lng };
    const endLatLng = { lat: endPoint.lat, lng: endPoint.lng};
    const marker = new google.maps.Marker({
      position: startLatLng, endLatLng,
      map: map
    });
  }

  //get the location from the form/model - startPoint and endPoint - separate start lat & lng, and end lat & lng?
  //add markers and set these to equal the location points
  //if time allows, add path and enable travelmode - bike to display duration on map


});
