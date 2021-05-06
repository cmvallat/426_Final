const { get } = require("browser-sync")
const cors = require('cors');

$(document).on('ready', function()
{
    const URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAVa4Y29aYOjbRE6VUPaiWrxcGTjjANAZM&location=40.5863028,-75.3552942&radius=50&type=hospital'
    $.ajax({
        url: URL,
        type: "GET",
        success: function(result){
        console.log(result)
    },
    error: function(error)
    {
        console.log(`Error ${error}`)
    }
    })
})