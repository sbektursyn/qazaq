function pickWinner(){
	var all = document.getElementsByClassName("text"); 
	/*take the elements*/

	var names = all[0].value; 
	/*change to massive n give the values*/

	const name = names.split("\n");  
	/*split*/
	console.log(name.length)

	var size = Object.keys(name).length;   
	/*how many elements?*/
	console.log(size)


	let a = Math.random()*(size-1);
	let n = a.toFixed();       
	/*take one random element*/
	console.log(n)

	document.getElementById("finish").innerHTML = name[n];     
	/*finish*/
}




/*something.innerHTML - html elements*/

/*getElementsByClassName  getElementById*/