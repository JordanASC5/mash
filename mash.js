function mash () {
	console.log("You will live " + getHome() + ", and you will have " + getChildrenCount() + ", and you will drive a " + getCar());
}
var houseType = ["in a Old Shack", "in a Mansion", "in the middle of the ocean :^)", "in a cave", "on a farm", "in a hosptial",
 "in a basement", "inside a computer (if possible lmao)", "under a bridge", "at a college illegally", "a old musty attick", "in the underworld", "in a dungeon o-O"];
var carType = ["a old 1986 BMW i4.", "1995 nissian 300ZX TT.", "Hennessey Vemon o-0. ", "old mack f700 xd.", "dodge dart.", " taxi.", "clown car.", "running in the 90's car lmao.", "basic plain car.", "Koenigsegg Agera RS O-O.", "an old rust bucket LMAO.", "shopping cart."];
var kidAmount = ["1 child", "2 Twins", "3 children", "4 children", "5 children", "6 children", "7 children", "8 children", "9 children", "10 children", "11 children", "12 children", "15 children", "20 children"];
function getHome() {
	var getsingleHouse = houseType[Math.floor(Math.random()*13)];
	return getsingleHouse;
}
function getChildrenCount() {
	var getChildAmount = kidAmount[Math.floor(Math.random()*14)];
	return getChildAmount;
}
function getCar() {
	var getsingleCar = carType[Math.floor(Math.random()*12)];
	return getsingleCar;
}

mash();


























/*
	0) Test everything as you go, as often as possible!

	1) Create a function called 'mash' that takes no parameters
	and prints "House" to the console

	2) Execute the function!
*/





/*
	3)Create a function called 'getHome' that takes no parameters and
	randomly chooses one of the following strings to RETURN: Mansion, Apartment, Shack, House
	Feel free to add additonal options on your own
		i)HINT: Use an array to store the strings
		ii)HINT: Use Math.random() to choose a random index
*/





/*
	4)Go back to the 'mash' function you wrote above
		i)Delete the statement in 'mash' that prints 'House'
		ii)Execute the 'getHome' function inside the 'mash' function

	5)Create a new function called 'getChildrenCount' that takes no parameters and 
	returns a number between 0 and 100
*/



/*
	6)Modify the 'mash' function to RETURN the following string: 
	“You will live in a “ + getHome() + “, and you will have “ + getChildrenCount() + “ kids!”

	7)Modify the 'getHome' function to include the first user argument (process.argv[2])
	as one of the options that getHome may RETURN

	8)Modify the 'getChildrenCount' function to have a 50% chance of RETURNing the second user argument (process.argv[3])
	and a 50% chance of RETURNing a number between 0 and 100 (which was the original function)

	9)Create a new function called 'getCar' which returns a random kind of vehicle such as: Tesla, Box With Wheels, Lambo...
		i)include the user's third argument as a possible outcome
*/



/*
	10)Modify the return string of the 'mash' function to include “, and you’ll drive a “ + getCar()

	11)Reminder to run the code with user inputs to make sure everything is still working

	12)Run the code without user inputs to see what happens
		i)Are you seeing undefined?
		ii)We shouldn't use user input when they haven't entered any!
			*)There are 3 instances where we use user input
			For each instance check to make sure the user input is defined
			if it is not defined, don't use it

	13)Add at least one category to the MASH game on your own. 
		i)Be sure to include the new function in your 'mash' function
		ii)Your category can be anything, some ideas: Name of Spouse, Salary (include negatives lol), how old will you live to be, career (job occupation) 

	14)Have some other people play it and fix any issues that arise.
*/



