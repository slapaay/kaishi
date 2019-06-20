// ----- CONFIG -----

let color_bg = "#000";
let color_fg = "#d2738a";
let default_logo = "images/icon.png";

// Search engines with their alias in the input
let search = [
	{
		url: "https://duckduckgo.com/",
		query: "q",
		alias: "d\ ",
		color_bg: "#561805",
		color_fg: "#FAFAFA",
		icon: "images/duckduckgo_logo.png"
	},
	{
		url: "https://google.com/search",
		query: "q",
		alias: "g\ ",
		color_bg: "#0f3312",
		color_fg: "#FAFAFA",
		icon: "images/google_logo.png"
	},	
	{
		url: "https://www.youtube.com/results",
		query: "search_query",
		alias: "y\ ",
		color_bg: "#681010",
		color_fg: "#fafafa",
		icon: "images/yt_logo.png"
	},
	{
		url: "https://www2.9anime.to/search",
		query: "keyword",
		alias: "a\ ",
		color_bg: "#160c42",
		color_fg: "#fafafa",
		icon: "images/9anime_logo.png"
	}
];

// ----- LIST OF SITES -----
let sites = {
	"Outlook":			"https://outlook.office.com/owa/?realm=eq.edu.au",
	"OneNote":			"https://www.onenote.com/hrd?wdorigin=ondcauth2&wdorigin=poc",
	"OneSchool": 		"https://oslp.eq.edu.au/",
	"Oxford Digital":	"https://oxforddigital.com.au/signin/email.html",
	"Macmillan":		"https://macmillaneducationeverywhere.com/",
	"JacPlus":			"https://jacplus.com.au/",
	"Reddit":			"https://reddit.com/",
	"Twitter":			"https://twitter.com/",
	"4chan":			"https://4chan.org/",
	"Youtube":			"https://youtube.com/",
	"GitHub":			"https://github.com/slapaay/",
	"Stack Overflow":	"https://stackoverflow.com/",
	"9anime":			"https://9anime.to/",
	"KissAnime":		"https://kissanime.ru/",
	"AniList":			"https://anilist.co/",
	"LISTEN.moe":		"https://listen.moe/",
	"turnitin":			"https://turnitin.com/login_page.asp?lang=en_us",
	"/g/":				"https://4chan.org/g/catalog",
	"/wg/":				"https://4chan.org/wg/catalog",
	"/w/":				"https://4chan.org/w/catalog",
	"/lambda/":			"https://lainchan.org/%CE%BB/catalog.html",
	"/sec/":			"https://lainchan.org/sec/catalog.html",
	"/omega/":			"https://lainchan.org/%CE%A9/index.html"
};

// ----- QUOTES -----
const quotes = [
	{
		quote: "People only have substance within the meories of other people", 
		author: "Lain Iwakura"
	},	
	{
		quote: "Any new position from which you view your reality will change your perception of its nature. It's all literally a matter of perspective.",
		author: "Maya Ibuki"
	},	
	{
		quote: "Your truth can be changed simply by the way you accept it. That’s how fragile the truth for a human is.",
		author: "Kozo Fuyutsuki"
	},
	{
		quote: "If you fail you'll figure something else out. If you fail at that, at least you aren't dead - or dying any faster than the rest of us.",
		author: "7429538"
	},
	{
		quote: "...doesn't matter what drives your motivation, be it negative or positive emotions, as long as you do something. Motivation is all we need my friend",
		author: "7429111"
	},
	{
		quote: "Point is, negative, stigmatized emotions such as contempt, indignation, and anger could be used as a driving-force in positive development, if you allow it. Prove yourself wrong by breaking your own constraints.",
		author: "7429039"
	},
	{
		quote: "The world doesn't care how weak you are. Man up or die",
		author: "411062016"
	},
	{
		quote: "But you can be better you silly duck",
		author: "7222918"
	},
	{
		quote: "You must rebuild. You are not destroyed but merely damaged, gather your parts and data and re-assemble yourself in a greater image.",
		author: "621328591"
	},
	{
		quote: "If only you knew how different things could be",
		author: "45166513"
	},
];

// ----- I AM USELESS AT MAKING NAMES -----

let prevregexp = "";
let pivotmatch = 0;

function matchLinks(regex=prevregexp){
	pivotmatch 		= regex == prevregexp ? pivotmatch : 0;
	prevregexp 		= regex;
	let pivotbuffer = pivotmatch;
	let match 		= new RegExp(regex ? regex : ".", "i");
	let matches 	= false;
	let findPrefix 	= false;
	let matched		= [];
	let matchsim 	= [];
	let matchlet 	= [];

	// Match the websites
	for (let i in Object.keys(sites)){
		ln = Object.keys(sites)[i];
		if(match.test(ln)){
			matched.push([ln, sites[ln]]);
			matches = true;
		}
	}	

	// Add suggestions to search
	matchlen = matched.length > 4 ? 4 : matched.length;
	$("#link_suggest ul").empty();
	for(i=0;i<matchlen;i++){
		matchlet.push(matched[i]);
		matchsim.push(similarity(matched[i][1], match.source))	;
	}

	//1) combine the arrays:
	var list = [];
	for (var j = 0; j < matchlet.length; j++) 
	   	list.push({'match': matchlet[j], 'simularity': matchsim[j]});

	//2) sort:
	list.sort(function(a, b) {
		return ((a.simularity > b.simularity) ? -1 : ((a.simularity == b.simularity) ? 0 : 1));
	});

	//3) separate them back out:
	for (var k = 0; k < list.length; k++) {
		matchlet[k] = list[k].match;
	    matchsim[k] = list[k].simularity;
	}

	// Add it as a suggestion
	for (let i in matchlet){	
		$("#link_suggest ul")
			.append(`<li><a href='${matchlet[i][1]}'>${matchlet[i][0]}</a></li>`);
	}		

	let prefix = getPrefix(regex);
	for (let i in search){
		if (search[i].alias == prefix){
			findPrefix = true;
			document.getElementById("icon").src = search[i].icon;
			document.getElementsByTagName('html')[0]
				.style.cssText = `
					--bg: ${search[i].color_bg}; 
					--txt: ${search[i].color_fg}`;
		}
	}

	if(!findPrefix){
		document.getElementById("icon").src = default_logo;
		document.getElementsByTagName('html')[0]
			.style.cssText = `--bg: ${color_bg}; --txt: ${color_fg}`;
	}

	// What will be executed when input is submitted
	if(!matches || regex==""){
		if(isURL(regex)){
			$('#queryForm').attr('action', createURL(regex));
			$('#queryForm').children().removeAttr('name');
		}else{
			let prefix = getPrefix(regex);
			let attributes = getAttributes(prefix, regex);
			$('#queryForm').attr('action', attributes[0]);

			if(!attributes[1]){
				$('#queryForm').children().removeAttr('name');
			}
			$('#queryForm').children().attr('name', attributes[1]);
		}
	}else{
		$('#queryForm').attr('action', matchlet[0][1]);
		$('#queryForm').children().removeAttr('name');
	}	
}

function displayRandomQuote(quote_id) {
	let random_quote = quotes[Math.floor(Math.random()*quotes.length)];
	document.getElementById(quote_id)
		.innerHTML = `"${random_quote.quote}" - ${random_quote.author}`;
}

function displayClock() {
    now = new Date();
    clock = String(now.getFullYear())
    	+(now.getMonth()+1 < 10 ? "0"+(now.getMonth()+1) : now.getMonth()+1)
    	+(now.getDate() < 10 ? "0"+now.getDate() : now.getDate())+" // "
    	+(now.getHours() < 10 ? "0"+now.getHours() : now.getHours())
        +(now.getMinutes() < 10 ? "0"+now.getMinutes() : now.getMinutes())
        +(now.getSeconds() < 10 ? "0"+now.getSeconds() : now.getSeconds());
    document.getElementById("clock_area").innerHTML = clock;
}

function isURL(url){
	if(url.includes("https://") || url.includes("http://") || url.includes("www.")){
		return true;
	}
}

function createURL(url){
	if(checkPrefix(getPrefix(url))){
		url = getSearch(url);
	}
	return !url.includes("https://") && !url.includes("http://")
		? `https://${url}`
		: url;
}

function checkPrefix(prefix){
	for (let i in search){
		if(search[i].alias == prefix || prefix=="u\ "){
			return true;
		}
	}
}

function getPrefix(query){
	return query.substring(0,2);
}

function getSearch(query){
	return query.substring(2,query.length);
}

function getAttributes(prefix, regex){
	switch(prefix){
		case("u\ "):
			url = createURL(regex);
			return [url, null];
		default:
			for (let i in search){
				if(search[i].alias == prefix){
					return [search[i].url, search[i].query];
				}
			}
	}
	return [search[0].url, search[0].query];
}

function fixInput(){
	input = $('#inputQuery').val();
	if(checkPrefix(getPrefix(input))){
		$('#inputQuery').val(getSearch(input)) ;
	}
}


$(document).ready(function(){
	let insertMode = false;
	let selectMode = false;
	let keyPosition = 0;

	displayClock();
	displayRandomQuote("quote_area");
	setInterval(displayClock, 1000);

	document.getElementsByTagName('html')[0]
		.style.cssText = `--bg: ${color_bg};--txt: ${color_fg}`;

	$('#inputQuery').blur();
	
	$('html').keyup(function(event){
	    let key = (event.key ? event.key : event.which);
	    console.log(key)
	    switch(key){
			case('i'):
				startSuggest(true);
				$('#inputQuery').focus();
				insertMode = true;
				break;
			case('Escape'):
				if(insertMode){
					$('#inputQuery').blur();
					insertMode = false;
					selectMode = true;
				}else if(selectMode){
					selectMode = false;
					startSuggest(false);
				}
				break;
			case('ArrowLeft'):
				if (keyPosition > 0){
					keyPosition--;
				}
				break;
			case('ArrowRight'):
				if (keyPosition < 4){
					keyPosition++;
				}
				break;
			case('Enter'):
				console.log(keyPosition)
				if(selectMode){
					window.location.href =
						$('#link_suggest ul').children().eq(keyPosition)
							.children().first().attr('href')
				}
				break;
			default:
				break;
	    }
	});

	setInterval(function(){
		if(!insertMode && selectMode){
			$('#link_suggest ul').children().not(`:eq(${keyPosition})`)
				.children().each(function(){
					$(this).first().css('background', 'var(--bg)')
						.css('color', 'var(--fg)');
				});
			$('#link_suggest ul').children().eq(keyPosition).children()
				.first().css('background', 'var(--txt)')
				.css('color', 'var(--bg)');
		}
	}, 150);

	function startSuggest(change){
		if (change) {
    		$('#nameTime').fadeOut(150);
    		$('#inputQuery').css('color', 'var(--txt)');
    		$('#link_suggest').fadeIn(150);
  		} else {
    		$('#nameTime').fadeIn(150);
    		$('#inputQuery').css('color', 'transparent');
    		$('#link_suggest').fadeOut(150);
  		}
	}	
});


// ----- Levenshetein Distance -----
// Used to calulate how similar two strings are, closer to 1 the better
function similarity(s1, s2) {
	let longer = s1;
	let shorter = s2;
	if (s1.length < s2.length) {
	  	longer = s2;
	  	shorter = s1;
	}
	var longerLength = longer.length;
	if (longerLength == 0) {
	  	return 1.0;
	}
	return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	var costs = new Array();
	for (var i = 0; i <= s1.length; i++) {
	  	var lastValue = i;
	  	for (var j = 0; j <= s2.length; j++) {
	  	    if (i == 0) costs[j] = j;
	  	    else {
	  	      	if (j > 0) {
	  	      	    var newValue = costs[j - 1];
	  	      	    if (s1.charAt(i - 1) != s2.charAt(j - 1)){
	  	      	        newValue = Math.min(Math.min(newValue, lastValue),
	  	      	        	costs[j]) + 1;
	  	      	    }
	  	      	    costs[j - 1] = lastValue;
	  	      	    lastValue = newValue;
	  	      	}
	  	    }
	  	}
	  	if (i > 0) costs[s2.length] = lastValue;
	}
	return costs[s2.length];
}
