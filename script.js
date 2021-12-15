//How to google map

// // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

//toyko Exemple

function initMap() {
  const tokyoBigS = { lat: 35.631, lng: 139.797 };

  const neuchatel = { lat: 46.99, lng: 6.9293 };

  //Center the map @ sight

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: tokyoBigS,
  });

  //Put the marker

  const markerTs = new google.maps.Marker({
    position: tokyoBigS,
    map: map,
  });
  const markerNe = new google.maps.Marker({
    position: neuchatel,
    map: map,
  });
}
