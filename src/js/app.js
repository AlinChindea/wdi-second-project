/* global google:ignore */

$(() => {
  const $map = $('.map');
  let map    = null;
  $('#loginform').validate();
  $('#signupform').validate({
    rules: {
      firstName: "required",
      lastName: "required",
      username: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 2
      },
      passwordConfirmation: {
        required: true,
        minlength: 2,
        equalTo: "#password"
      },
    },
    messages: {
        firstName: "Please enter your firstname",
        lastName: "Please enter your lastname",
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least two characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least two characters long"
        },
        passwordConfirmation: {
          required: "Please provide a password",
          minlength: "Your password must be at least two characters long",
          equalTo: "Please enter the same password as above"
        },
        email: "Please enter a valid email address",
      }
  });
  initMap();

  function initMap() {
    const bounds             = new google.maps.LatLngBounds();
    const directionsService  = new google.maps.DirectionsService;
    const directionsDisplay  = new google.maps.DirectionsRenderer;
    const distanceCalculator = new google.maps.DistanceMatrixService;

    const startPoint = {
      lat: parseFloat($('#startPointLat').val()),
      lng: parseFloat($('#startPointLng').val())
    };

    const endPoint = {
      lat: parseFloat($('#endPointLat').val()),
      lng: parseFloat($('#endPointLng').val())
    };

    map = new google.maps.Map($map.get(0), {
      zoom: 12,
      center: startPoint
    });

    createMarker(startPoint);
    createMarker(endPoint);
    map.fitBounds(bounds);
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute();

    function calculateAndDisplayRoute() {
      directionsService.route({
        origin: startPoint,
        destination: endPoint,
        travelMode: 'BICYCLING'
      }, function(response, status) {
        status === 'OK' ? directionsDisplay.setDirections(response) : window.alert('Directions request failed due to ' + status);
      });

      distanceCalculator.getDistanceMatrix({
        origins: [startPoint],
        destinations: [endPoint],
        travelMode: 'BICYCLING',
        unitSystem: google.maps.UnitSystem.METRIC
      }, function(response) {
        const distance = response.rows[0].elements[0].distance.text;
        const duration = response.rows[0].elements[0].duration.text;

        $('.distance').text('Distance: ' + distance);
        $('.duration').text('Duration: ' + duration);
      });
    }

    function createMarker(location) {
      new google.maps.Marker({
        position: location,
        map: map
      });

      bounds.extend(location);
    }
    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  }
});
