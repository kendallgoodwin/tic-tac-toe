


var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

one.addEventListener('click', function(e) {
	letsPlay(e);
});
two.addEventListener('click', function(e) {
	letsPlay(e);
});
three.addEventListener('click', function(e) {
	letsPlay(e);
});
four.addEventListener('click', function(e) {
	letsPlay(e);
});
five.addEventListener('click', function(e) {
	letsPlay(e);
});
six.addEventListener('click', function(e) {
	letsPlay(e);
});
seven.addEventListener('click', function(e) {
	letsPlay(e);
});
eight.addEventListener('click', function(e) {
	letsPlay(e);
});
nine.addEventListener('click', function(e) {
	letsPlay(e);
});

var turns = 0;


function letsPlay(e) {
	console.log('We playin');
	if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O') {
		return;
	} else if (turns % 2 === 0) {
		e.target.innerHTML = 'X';
		turns++;
	} else {
		e.target.innerHTML = 'O';
		turns++;
	}
}

// winning combos:
// 1,2,3 x
// 4,5,6 x
// 7,8,9 x
// 1,4,7 x
// 2,5,8 x
// 3,6,9
// 1,5,9 x
// 3,5,7

// var getWinner = function() {
// 	var winner;
// 	if (one.innerHTML === 'X' && two.innerHTML === 'X' && three.innerHTML === 'X') {
// 		winner = 'X';
// 	} else if (one.innerHTML === 'X' && four.innerHTML === 'X' && seven.innerHTML === 'X') {
// 		winner = 'X';
// 	} else if (one.innerHTML === 'X' && five.innerHTML === 'X' && nine.innerHTML === 'X') {
// 		winner = 'X';
// 	} else if (four.innerHTML === 'X' && five.innerHTML === 'X' && six.innerHTML === 'X') {
// 		winner = 'X';
// 	} else if (seven.innerHTML === 'X' && eight.innerHTML === 'X' && nine.innerHTML === 'X') {
// 		winner = 'X';
// 	} else if (two.innerHTML === 'X' && five.innerHTML === 'X' && eight.innerHTML === 'X') {
// 		winner = 'X';
// 	} else if (three.innerHTML === 'X' && six.innerHTML === 'X' && nine.innerHTML === 'X') {
// 		winner = 'X';
// 	} else if (three.innerHTML === 'X' && five.innerHTML === 'X' && seven.innerHTML === 'X') {
// 		winner = 'X';
// 	} 
// };



var startOver = document.getElementById('reset');

startOver.addEventListener('click', function(e) {
	one.innerHTML = '';
	two.innerHTML = '';
	three.innerHTML = '';
	four.innerHTML = '';
	five.innerHTML = '';
	six.innerHTML = '';
	seven.innerHTML = '';
	eight.innerHTML = '';
	nine.innerHTML = '';
})

// 


