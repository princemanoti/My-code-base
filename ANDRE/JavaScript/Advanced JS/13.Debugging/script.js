const flattened = [[0,1], [2,3], [4,5]].reduce(
	(a,b) => a.concat(b), []);


//Debugging
const flattened = [[0,1], [2,3], [4,5]].reduce(
	(accumulator,array) => 
	{
		console.log('array', array);
		console.log('accumulator', accumulator);
		return accumulator.concat(array);
	}, []);


//Debugger
const flattened = [[0,1], [2,3], [4,5]].reduce(
	(accumulator,array) => 
	{
		debugger;
		return accumulator.concat(array);
	}, []);