/*Ignore this file - this functionality was not implemented*/
function getActivities()
{
  const activities_link = "https://www.strava.com/api/v3/athlete/activities?access_token=ab853b9881304f0290cdbe25c40e31cd0fa1229b"
  fetch(activities_link)
    .then((res) => console.log(res.json));
}

getActivities();