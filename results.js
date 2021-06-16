/*Ignore this file - this functionality was not implemented*/

var StravaApiV3 = 'strava_api_v3';
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "38edebeb464d272e0e38400fc704bab839218dc6"

var api = new StravaApiV3.ActivitiesApi()

var name = "regional championship"; // {String} The name of the activity.

var type = "5K race"; // {String} Type of activity. For example - Run, Ride etc.

var startDateLocal = "2018-02-20T10:02:13Z"; // {Date} ISO 8601 formatted date time.

var elapsedTime = 1200; // {Integer} In seconds.

var opts = { 
  'description': "a personal best in the 5k", // {String} Description of the activity.
  'distance': 3.4, // {Float} In meters.
  'trainer': 56, // {Integer} Set to 1 to mark as a trainer activity.
  'commute': 56 // {Integer} Set to 1 to mark as commute.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createActivity(name, type, startDateLocal, elapsedTime, opts, callback);