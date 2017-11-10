function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var pi = Math.PI;

  var arrResult = arr.map(function(elem){
  	var fraction = Math.pow(elem.avgAlt + earthRadius, 3)/GM;
  	var sqrRoot = Math.sqrt(fraction);
  	var orbitalPeriod = Math.round(2 * pi * sqrRoot);
  	return(
  		{
  			'name': elem.name,
  			'orbitalPeriod': orbitalPeriod
  		}
    );
  });
  return arrResult;
}

// should return
// [
//   {name: "sputnik", orbitalPeriod: 86400}
// ]
orbitalPeriod(
	[
	  {name : "sputnik", avgAlt : 35873.5553}
	]);

// should return
// [
//   {name : "iss", orbitalPeriod: 5557},
//   {name: "hubble", orbitalPeriod: 5734},
//   {name: "moon", orbitalPeriod: 2377399}
//  ]

orbitalPeriod(
	[
	  {name: "iss", avgAlt: 413.6},
	  {name: "hubble", avgAlt: 556.7},
	  {name: "moon", avgAlt: 378632.553}
	]);