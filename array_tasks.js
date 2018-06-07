var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);

	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0 , itemToAdd);
		return arr;
	},

	square: function (arr) {
		var resultArray = [];
		arr.forEach(function(number) {
			var newNumber = number * number;
			resultArray.push(newNumber)
		}); return resultArray;
	},

	sum: function (arr) {
		var total = 0;
		arr.forEach(function(number) {
			total += number;
		});return total;

	},

	findDuplicates: function (arr) {
		var results = [];
		arr.filter(function(num, i){
			if (arr.indexOf(num, i + 1) >= 0){
				if (results.indexOf(num) === -1){
					results.push(num)
				}
			}
		})
		return results;
	},


// this also works using old loop and set to sort without adding more findDuplicates
// findDuplicates: function (arr) {
// 	var sorting_arr = arr.sort();
// 	var sorting_set = new Set([]);
// 	for (var i = 0; i < sorting_arr.length - 1; i++) {
// 	    if (sorting_arr[i + 1] == sorting_arr[i]) {
// 	        results.add(sorted_arr[i]);
// 	    }
// 	}
// 	var results = Array.from(results);
// 	return results;
// },

	removeAndClone: function (arr, valueToRemove) {
		var resultArray = arr;
		arr.forEach(function(number) {
			if (number === valueToRemove){
				var index = resultArray.indexOf(valueToRemove);
				resultArray.splice(index, 1);}

		});return resultArray;

	},


	findIndexesOf: function (arr, itemToFind) {
			var resultArray = [];
				for(var i = 0; i < arr.length ; i++){
				if(arr[i] === itemToFind){
					var index = arr.indexOf(itemToFind, i);
					resultArray.push(index);
				}}return resultArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
	var total = 0;
	arr.forEach(function(number) {
		if(number % 2 ===0){
		total += number * number;}
	});return total;
	}

}

module.exports = arrayTasks
