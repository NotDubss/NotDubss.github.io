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
  const resume = document.querySelector("#resume");

  const tokyoBigS = { lat: 35.631, lng: 139.797 };

  const neuchatel = { lat: 46.99, lng: 6.9293 };

  const aiguesmortes = { lat: 43.56, lng: 4.18 };

  //Center the map @ sight

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: aiguesmortes,
  });

  // Here html snippet
  const tokyoBigSinfo =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tokyo big sight</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Tokyo Big Sight</b>, officially known as <b>Tokyo International Exhibition Center</b>, is a convention and exhibition center " +
    " in Tokyo, Japan, and the largest one in the country. Opened in April 1996 " +
    " the center is located in the Ariake Minami district of Tokyo Waterfront City" +
    " Its most iconic feature is the visually distinctive Conference Tower.  " +
    " The name Tokyo Big Sight in Japanese eventually became the official namem </p>";
  +'<p>Attribution: Tokyo Big Sight, <a href="https://en.wikipedia.org/wiki/Tokyo_Big_Sight">' +
    "wiki Page</a></p> " +
    "</div>" +
    "</div>";

  const neuchinfo =
    '<img src="https://cdn-106.anonfiles.com/1cX8W7Cav0/4ce0eb18-1639562545/webcamhead.jpg" alt="Anime wat" width="500" height="600">';

  //Put the windows info
  const infowindowTs = new google.maps.InfoWindow({
    content: tokyoBigSinfo,
  });

  const infowindowNe = new google.maps.InfoWindow({
    content: neuchinfo,
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
  const markerAiguesMortes = new google.maps.Marker({
    position: aiguesmortes,
    map: map,
  });

  // Open on click

  markerTs.addListener("click", () => {
    infowindowTs.open({
      anchor: markerTs,
      map,
      shouldFocus: false,
    });
  });

  markerNe.addListener("click", () => {
    infowindowNe.open({
      anchor: markerNe,
      map,
      shouldFocus: false,
    });
  });

  markerAiguesMortes.addListener("click", () => {
    if (resume.style.display == "none") {
      resume.style.display = "block";
    } else {
      resume.style.display = "none";
    }
  });
}
