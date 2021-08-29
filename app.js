window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        nvigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longtude;
            lat = position.coords.latitude;

            // const api = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Springfield%2CIL?unitGroup=us&key=DHBS12DVFHFFSHF764DGDBC'
        });
    }
});