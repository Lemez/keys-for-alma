// whatthekeycode.com
//  define some global variables

var PICS = {
	"A" : "airplane.svg",
	"B" : "bee.svg",
	"C" : "cat.svg",
	"D" : "dog.svg",
	"E" : "elephant.svg",
	"F" : "frog.svg",
	"G"	: "gorilla.svg",
	"H" : "horse.svg",
	"I" : "iguana.svg",
	"J" : "jellyfish.svg",
	"K" : "koala.svg",
	"L" : "lion.svg",
	"M" : "monkey.svg",
	"N" : "nose.svg",
	"O"	: "owl.svg",
	"P" : "parrot.svg",
	"Q" : "quiet.svg",
	"R" : "rabbit.svg",
	"S" : "sheep.svg",
	"T" : "trumpet.svg",
	"U" : "umbrella.svg",
	"V" : "violin.svg",
	"W" : "whale.svg",
	"X" : "xylophone.svg",
	"Y" : "yawn.svg",
	"Z" : "zebra.svg"
}


$(document).ready(function () {

		spectrum();
		function spectrum(){
		    var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random() + 0.3) + ')';
		    $('body, #inputs input').animate( { backgroundColor: hue }, 5000);
		    setTimeout(spectrum,1); // stop it from overloading max cache
		    // console.log(hue);
		};

		function makeGaps(stringLength) {

			var gapsString = [];
			var spanString = "<span id='pix' class='col'><img  src='' /></span>";

			for (var i = 0; i < stringLength; i++) {
				gapsString.push(spanString);
			};

			return gapsString.join('');
		};

		function makeNums(stringLength) {

			var numsString = [];
			var spanString = "<span id='num' class='col'></span>";

			for (var i = 0; i < stringLength; i++) {
				numsString.push(spanString);
			};

			return numsString.join('');
		};

		function makeCols(stringLength) {
			var colsString = [];
			var spanString = "<div class='col'></div>";
			for (var i = 0; i < stringLength; i++) {
				colsString.push(spanString);
			};

			return colsString.join('');

		};

	


		function getPosition(e) {
			var coordinates = e.offset();
			// console.log(coordinates);	
			return coordinates;
		};

		function checkPosition() {

				var allLetters = $('#name1').find('img');
				for (var i = 0; i < allLetters.length; i++) { // check coordinates

					var currentLetter = allLetters.eq(i);

					var coordinates = getPosition(currentLetter);
					var details = [currentLetter.text(), screen.width, coordinates.left, screen.height, coordinates.top];
					console.log(details);

					// if ((coordinates.left+100) > screen.width) {
					// 	// currentLetter.stop();
					// 	currentLetter.offset({
					// 		left: (coordinates.left - screen.width),
					// 		top: coordinates.top
					// 	});
					// 	// alert("right bump!");
					// };

					// if ((coordinates.top+200) > screen.height) {
					// 	currentLetter.stop();
					// 	currentLetter.offset({
					// 		top: (coordinates.top - screen.height)
					// 	});
					// 	// alert("bottom bump!");
					// };

				};

				setTimeout(checkPosition, 1000);
		};

	$(document).mousemove(function (e) {
	
		var mouseX = e.pageX; // e.pageX - gives you the X position.
		var mouseY = e.pageY; // e.pageY - gives you the Y position.
		// console.log(mouseX);
		// console.log(mouseY);
	});

	$('.container').css("display", "none");
	$('.submit').on("click", function() {

		var name1String = $('input:text:first').val().toUpperCase();

		var widths = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
		
		if ((name1String.length % 2) == 0) {
			var evenLength = name1String.length;
		} else {
			var evenLength = name1String.length + 1;
		};
		
		var offsetSize = (14 - evenLength);
		// alert(evenLength);
		// var name1WidthWords = widths[(evenLength/2)];  // sort out number of columns
		// alert(offsetSize);

		var GapsStringNameOne = makeGaps(name1String.length);
		var NumsStringNameOne = makeNums(name1String.length);

		var divOffset = offsetSize/2;
		var divOffsetWords = widths[divOffset];
		var NumsCols = makeCols(name1String.length);
		// $('#name1').attr('class', name1WidthWords + ' columns').append(GapsStringNameOne);
		$('#content').append(NumsCols);
		var cols = $('.col');
		// alert(cols.length);

		var name1LettersArray = [];
		var name1LettersArray = name1String.split('');

		var imageSources = []

		for (var i = 0; i < name1LettersArray.length; i++) {

			var textValue = i+1;
			imageSources.push(PICS[name1LettersArray[i]]);

			cols.eq(i)
						.append('<div id="num" class="row circle">' + textValue + '</div>')
						
						.append('<div id="pix" class="row"><img src="images/star.svg" ></div>')
						
						.append('<div id="lex" class="row"><p></p></div>');
							// .css("width", 90/name1LettersArray.length + '%')
			// var colWidth = colSpansPix.eq(i).width;
					
						// .find("#num")
						// .css("width", colWidth);		
		};
		
			$('.col').eq(0).addClass('offset-by-' + divOffsetWords);


		// $('#content .col').eq(0)
		// 				 .addClass('offset-by-' + divOffsetWords)
		// ;
		
		// alert(divOffsetWords);
		// $('#name2').attr('class','sixteen columns').append(NumsStringNameOne);

		// makeGaps(name1LettersArray);
		// makeNums(name1LettersArray);

		// var imageDivs = $('#name1').find("img");
		// var numDivs = $('#name2').find("span");
		// var colSpansPix = $('#pix');
		// var colSpansNum = $('#num');

		// for (var i = 0; i < name1LettersArray.length; i++) {

		// 	// numDivs.eq(i).html(i);
		// 	colSpansPix.eq(i)
		// 				.append('<img src= "images/' + PICS[name1LettersArray[i]] + '" />');
		// 					// .css("width", 90/name1LettersArray.length + '%')
		// 	// var colWidth = colSpansPix.eq(i).width;
		// 	colSpansNum.eq(i)
		// 				.text((i+1));
		// 				// .find("#num")
		// 				// .css("width", colWidth);				
		// };
			


		// name2String = $('input:text:last').val().toUpperCase();

		// var GapsStringNameTwo = makeGaps(name2String.length);

		// var name2WidthWords = widths[name2String.length - 1];
		// $('#name2').attr('class', name2WidthWords + ' columns').append(GapsStringNameTwo);

		// var name2LettersArray = [];
		// name2LettersArray = name2String.split('');
		
		$('#inputs').hide();
		$('.container').css("display", "inline");

		// function bounceIt(){

		// 	$(this).animate({
		// 		paddingTop: "-20px"},
		// 		{ duration: 1000, easing: 'easeOutBounce'
		// 	});

		// 	setTimeout(bounce, 1);
		// };

		startgame();

		function startgame(){

			$(document).on("keydown", function (e) {
				 
				$('#intro').hide();
				$('.col').css("opacity", 1);


				var random_colour = ('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));

				keyCodeToChar = {8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/Break",20:"Caps Lock",27:"Esc",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z"};

				keyCharToCode = {"Backspace":8,"Tab":9,"Enter":13,"Shift":16,"Ctrl":17,"Alt":18,"Pause/Break":19,"Caps Lock":20,"Esc":27,"Space":32,"Page Up":33,"Page Down":34,"End":35,"Home":36,"Left":37,"Up":38,"Right":39,"Down":40,"Insert":45,"Delete":46,"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90};

				var letter = keyCodeToChar[e.which || e.keyCode];

				var letterDivs = $('#lex p');
				var imageDivs = $('#pix img');
				imageDivs.eq(0).attr("src", "images/" + imageSources[0]);	
				

				document.getElementById(letter).play(); //  play the audio

				letters_function(name1LettersArray);

				function letters_function (letters) {  // define the main game function

							if ($.inArray(letter, letters) == 0) {

								var realFontSize = $('#lex').css("font-size");
								
								var counter = (name1String.length - letters.length);
								// alert(gapSpans.first().text());

								letterDivs.eq(counter)
												.text(letter)
												.css("font-size", (Math.floor(Math.random() * 800))) // create random font-size to animate from
												.css("display", "inline-block")
										 		.css("color", random_colour)
										 		.animate({
										 			fontSize: realFontSize
												 		}, 3000);

								
								var myImage = "images/" + imageSources[counter+1];

								// imageDivs.eq(counter+1).delay(3000).animate({
								// 					opacity : 0
								// 						}, 1000);

								// imageDivs.eq(counter).bounceIt();

								imageDivs.eq(counter+1).attr("src", myImage)
														// .animate({
										 			// opacity: 1
												 	// 	}, { 
												 	// duration: 1000, 
												 	// easing: 'easeOutBounce'})
														;

								imageDivs.eq(counter+1).delay(3000).animate({
													opacity : 0
														}, 1000)
											.animate({
													opacity : 1
														}, 1000);

								letters.splice(0, 1);
								


							} else {

								var maths = Math.random();

								$('.letters')
									.html("<span id='pix'><img  src='images/" + PICS[letter] + 
														"' /></span>")
										 .css("display", "inline-block")
										 .css("text-align", "left")
										 .css("left", "-2%")
										 .css("color", random_colour)
										 .css("font-size", 20 + (Math.floor(maths * 256)) )
										 .css("text-shadow", (5 + (Math.floor(maths * 10))) + "px " + (5 + (Math.floor(maths * 10))) + "px " + "darkgray" )
										 .animate(
										 { paddingLeft: (Math.floor(maths * screen.width * 1.25)) + 'px' },
										 { duration: 1000, easing: 'easeOutBounce'}
										 	);
							};
				};

	

				// if (name1LettersArray.length == 0 && name2LettersArray.length != 0) {  // call the function for name2

				// 	$('#and p').animate({ opacity: 1}, 3000 );
				// 	$('#name2').slideDown(2000);
				// 	$('#congrats').css("display", "block")
				// 					.animate({ top: 0}, 1000 );

				// 	var myDiv = '#name2';
				// 	letters_function(name2LettersArray);
				// };

			
				if (name1LettersArray.length == 0) { 

					$('.letters').animate({   // make the single letter disappear
										 	paddingTop: '800px'
										 }, 1000)
								.hide(1000);

					var allLetters = $('#lex').find('span');
					

					for (var i = 0; i < allLetters.length; i++) { // make em dance
					
						var maths = Math.random();
						var currentLetter = allLetters.eq(i);

						if ((i+1)%2==0) {
							
							currentLetter.animate({ fontSize: '500px', top: (Math.floor(maths * 800)) + 'px'}, (Math.floor(maths * 60000)));
							

						} else {
							currentLetter.animate({ fontSize: '500px', left: (Math.floor(maths * 800)) + 'px'}, (Math.floor(maths * 60000)));
						};
						
					};


					
					// $("#and p").animate({ fontSize: '500px', top: (Math.floor(Math.random() * 800)) + 'px'}, (Math.floor(Math.random() * 100000)));
					// $("#congrats img").animate({ width: '500px', paddingTop: (Math.floor(Math.random() * 800)) + 'px'}, (Math.floor(Math.random() * 100000)));
					$("#again p").animate({ fontSize: '100px', top: (Math.floor(Math.random() * 800)) + 'px', opacity: 1}, (Math.floor(Math.random() * 100000)));

					document.getElementById("success").play();

					checkPosition();

				}

			});

		};

	});
			
});

