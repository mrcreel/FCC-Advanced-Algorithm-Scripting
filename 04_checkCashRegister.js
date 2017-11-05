
function checkCashRegister(price, cash, cid) {
	console.log('');
	var change = cash - price;
	var arrDenoms = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
	var drawer = [];
	for (var i = arrDenoms.length - 1; i >= 0; i--) {
		drawer.push({
			'item': cid[i][0],
			'denom': arrDenoms[i],
			'units': Math.round(cid[i][1]/arrDenoms[i]),
			'itemTotal': cid[i][1].toFixed(2)
			}
		);
	}
	console.log(drawer);
  // Here is your change, ma'am.
  return change;
}

// should return an array
checkCashRegister(
	19.50,
	20.00,
	[
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.10],
		["QUARTER", 4.25],
		["ONE", 90.00],
		["FIVE", 55.00],
		["TEN", 20.00],
		["TWENTY", 60.00],
		["ONE HUNDRED", 100.00]
	]
);

// should return a string.
checkCashRegister(
	19.50,
	20.00,
	[
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0]
	]
);
// should return a string.
checkCashRegister(
	19.50,
	20.00,
	[
		["PENNY", 0.50],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0]
	]
);
 // should return [["QUARTER", 0.50]].
checkCashRegister(
	19.50,
	20.00,
	[
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.10],
		["QUARTER", 4.25],
		["ONE", 90.00],
		["FIVE", 55.00],
		["TEN", 20.00],
		["TWENTY", 60.00],
		["ONE HUNDRED", 100.00]
	]
);
// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(
	3.26,
	100.00,
	[
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.10],
		["QUARTER", 4.25],
		["ONE", 90.00],
		["FIVE", 55.00],
		["TEN", 20.00],
		["TWENTY", 60.00],
		["ONE HUNDRED", 100.00]
	]
);
// should return "Insufficient Funds".
checkCashRegister(
	19.50,
	20.00,
	[
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0]
	]
);
// should return "Insufficient Funds".
checkCashRegister(
	19.50,
	20.00,
	[
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 1.00],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0]
	]
);
// should return "Closed".
checkCashRegister(
	19.50,
	20.00,
	[
		["PENNY", 0.50],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0]
	]
);