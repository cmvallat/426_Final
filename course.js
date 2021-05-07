
console.log(window.top);
$(function()
{
    console.log("before");
    const URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCGRpqvx7p2BirqPpxHjytmDFFCpAGm6lI&location=40.5863028,-75.3552942&radius=50&type=hospital'
    console.log("before1");
    $.ajax({
        url: URL,
        type: "GET",
        //headers: {'Access-Control-Allow-Origin': '*'},
        success: function(result){
        console.log(result)
    },
    error: function(error)
    {
        console.log(`Error ${error}`)
    }
    })
    console.log("after");
    
})