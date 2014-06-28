// whatthekeycode.com
//  define some global variables

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
				var spanString = "<span id='gap'>*</span>";

				for (var i = 0; i < stringLength; i++) {

					gapsString.push(spanString);
				};

				return gapsString.join('');
			};

	

		$(document).mousemove(function (e) {
		
			var mouseX = e.pageX; // e.pageX - gives you the X position.
			var mouseY = e.pageY; // e.pageY - gives you the Y position.
			// console.log(mouseX);
			// console.log(mouseY);
	});

	$('.container').css("display", "none");

	$('.submit').on("click", function() {

		name1String = $('input:text:first').val().toUpperCase();

		var widths = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
		var name1WidthWords = widths[name1String.length - 1];  // sort out number of columns

		var GapsStringNameOne = makeGaps(name1String.length);
		$('#name1').attr('class', name1WidthWords + ' columns').append(GapsStringNameOne);

		var name1LettersArray = [];
		name1LettersArray = name1String.split('');

		name2String = $('input:text:last').val().toUpperCase();

		var GapsStringNameTwo = makeGaps(name2String.length);

		var name2WidthWords = widths[name2String.length - 1];
		$('#name2').attr('class', name2WidthWords + ' columns').append(GapsStringNameTwo);

		var name2LettersArray = [];
		name2LettersArray = name2String.split('');
		
		$('#inputs').hide();
		$('.container').css("display", "block");

		startgame();

		function startgame(){

			$(document).on("keydown", function (e) {
				 
				$('#intro').hide();
				$('#name1').show();

				var random_colour = ('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));

				keyCodeToChar = {8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/Break",20:"Caps Lock",27:"Esc",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z"};

				keyCharToCode = {"Backspace":8,"Tab":9,"Enter":13,"Shift":16,"Ctrl":17,"Alt":18,"Pause/Break":19,"Caps Lock":20,"Esc":27,"Space":32,"Page Up":33,"Page Down":34,"End":35,"Home":36,"Left":37,"Up":38,"Right":39,"Down":40,"Insert":45,"Delete":46,"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90};

				var letter = keyCodeToChar[e.which || e.keyCode];

				document.getElementById(letter).play(); //  play the audio

				function letters_function (letters) {  // define the main game function

							if ($.inArray(letter, letters) == 0) {

								var gapSpans = $(myDiv).find("#gap");
								// var position = letters.indexOf(letter);
								// alert(gapSpans.first().text());

								gapSpans.first().attr("id", "lex")
												.text(letter)
												.css("display", "inline")
										 		.css("color", random_colour);

								letters.splice(0, 1);

							} else {

								var maths = Math.random();

								$('.letters').html(letter)
										 .css("display", "block")
										 .css("text-align", "left")
										 .css("left", "-10%")
										 .css("color", random_colour)
										 .css("font-size", 20 + (Math.floor(maths * 256)) )
										 .css("text-shadow", (5 + (Math.floor(maths * 10))) + "px " + (5 + (Math.floor(maths * 10))) + "px " + "darkgray" )
										 .animate({ 
										 	paddingLeft: (Math.floor(maths * screen.width * 1.25)) + 'px',
										 	// paddingTop: (Math.floor(maths * screen.height * 0.8)) + 'px'

										 }, 1000);
								};
							};

		
				var myDiv = '#name1'; // call the function for name1
				letters_function(name1LettersArray);

				if (name1LettersArray.length == 0) {  // call the function for name2

					$('#and p').css("display", "block");
					$('#name2').show();
					$('#congrats').css("display", "block")
									.animate({ top: 0}, 1000 );

					var myDiv = '#name2';
					letters_function(name2LettersArray);
				};

		// call the end function

				if (name1LettersArray.length == 0 && name2LettersArray.length == 0) {

					$('.letters').animate({   // make the single letter disappear
										 	paddingTop: '800px'
										 }, 1000)
								.hide(1000);

					var allLetters = $('#name1, #name2').find('span');
					

					for (var i = 0; i < allLetters.length; i++) { // make em dance
					
						var maths = Math.random();
						
						if ((i+1)%2==0) {
							allLetters.eq(i).animate({ fontSize: '500px', paddingLeft: (Math.floor(maths * 800)) + 'px'}, (Math.floor(maths * 100000)));
						} else {
							allLetters.eq(i).animate({ fontSize: '500px', paddingRight: (Math.floor(maths * 800)) + 'px'}, (Math.floor(maths * 100000)));
						};

						// console.log(allLetters.eq(i).text());
					};
					
					$("#and p").animate({ fontSize: '500px', paddingTop: (Math.floor(Math.random() * 800)) + 'px'}, (Math.floor(Math.random() * 100000)));
					$("#congrats img").animate({ width: '500px', paddingTop: (Math.floor(Math.random() * 800)) + 'px'}, (Math.floor(Math.random() * 100000)));
					$("#again p").animate({ fontSize: '200px', paddingTop: (Math.floor(Math.random() * 800)) + 'px', opacity: 1}, (Math.floor(Math.random() * 100000)));

					document.getElementById("success").play();


				}

			});

		};

	});
			
});

