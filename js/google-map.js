function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 65.913454006173254, lng: 10.749815981827657},
        zoom: 4,
        mapId: 'c5fcf8b11e1c48d4',
        backgroundColor: "#0B1629",
        zoomControl: false,
        scaleControl: false,
        disableDefaultUI: true,
        });

        const beachMarker = new google.maps.Marker({
            position: { lat: 59.913454006173254, lng: 10.749815981827657},
            map,
            title: "Oslo",
            icon: {
                url: "./img/gifs/giphy.gif",
                scaledSize: new google.maps.Size(60, 80),
            }
          });
}



