/* global google:ignore */
$(() => {

  const $map = $('.map');
  let map    = null;

  initMap();

  function initMap() {
    const latLng = { lat: 48.566736, lng: 13.431947 };
    map = new google.maps.Map($map.get(0), {
      zoom: 14,
      center: latLng
    });
  }


});
