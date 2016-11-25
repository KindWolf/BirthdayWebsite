$( document ).ready(function() {

	var counter = 0;
	var score = 0;
	var list =[
	"So I was really at a loss of what to do for your birthday this year...",
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
	var clickImgList =[
	"http://www.moocowlabradoodles.com/wp-content/uploads/2014/04/419px-Paw-print.svg_.png",
	"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5EKCy8152V-Uh8IuSSi_Rai460B8CNozB9bR7uNGlPXH0fcwQeg",
	"https://s-media-cache-ak0.pinimg.com/736x/10/13/09/101309d3b42278c1f65e4b9aa004dc5d.jpg",
	"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpiDTYALuFytCr__-GoQdqABOaU9n7V8Z6NNfUiN69t6BaDgHFxA",
	"https://s-media-cache-ak0.pinimg.com/236x/44/ca/ce/44cace5064b263c462a9aff271bb6b83.jpg"
	];

	$('body').on('click', function (event){
			console.log($(event.target).is('#sideWindow'));
			clickAnimationBlock: {
			if(counter < list.length){
					//$('body').addClass('avoidClicks');
                    $('#displayP').addClass("animated fadeInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass("animated fadeInDown");
                        $('body').removeClass('avoidClicks');
                    });
                $('#displayP').text(list[counter]);
				console.log("counter number is: ", counter);
				counter ++;
			}
			else if($(event.target).is('#sideWindow')){break clickAnimationBlock;}

			else{	
					$('body').after('<img src="'+clickImgList[Math.floor((Math.random() * clickImgList.length))]+'" class="hidden" id="puppyPawImg">');
					$('#puppyPawImg').css({"position": "absolute", "top": event.pageY, "left": event.pageX});
					$('#puppyPawImg').removeClass("hidden");
					$('#puppyPawImg').addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                       $(this).addClass("hidden");
                       $(this).removeClass("animated fadeOutDown");
                       $(this).remove();
                      });
                       
					$('#sideWindow').removeClass('hidden');
					$('#sideWindow').addClass('animated flip');
					$("#counterDisplay").text("Puppies: " + score);
					score++;
				}
			}
	});
})
