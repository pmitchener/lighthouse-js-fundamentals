const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
//In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
const chooseStations = function (listOfStations)
{
  let listOfNames = [];
  for(const station of listOfStations)
  {
    if(station[1] < 20 || (station[2] !== "school" && station[2] !== "community centre"))
    {
        continue;
    }
    listOfNames.push(station[0]);
  }
  return listOfNames;
}
console.log(chooseStations(stations));
