$( document ).ready(function() {

	var counter = 0;
	var score = 0;
	var list =[
	"But I really wanted to do something a little special.",
	"However, I am usually really bad at stuff like this...",
	"Especially since time is so limited >_< and trying to keep it a surprise...",
	"Lets be honest, you can read me like a book. ^^",
	"So I tried to think of some recent things that you liked...",
	"I know that you like puppies...",
	"A LOOOOOOTTTT...",
	"I also really know you like clickers...sooo....",
	"WELCOME TO PUPPY CLICKER! YOU CLICK AND PUPPIES BURST FORTH!"
	];


	window.onclick = function (event){


			if(counter < list.length){
				$("#displayP").text(list[counter]);
				$("#displayP").addClass("animated fadeInDown");
				$("#displayP").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$('displayP').removeClass("animated fadeInDown");
				});
				console.log("counter number is: ", counter);
				counter ++;
			}
			else{
				$("#counterDisplay").text("Puppies:" + score);
				score++;
			}
	}	
})