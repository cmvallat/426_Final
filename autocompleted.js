/* ignore this file - no longer implemented*/

var ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
google.maps.event.addListener(ac, 'place_changed', function()
{
 console.log(place.formatted_address);
 console.log(place.url);
 console.log(place.geometry.location);
});
