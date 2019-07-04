// ----- CONFIG -----
let quotes = [
	{
		quote: "There are no quotes in the config file!", 
		author: "Dev-san"
	}
];

// ----- AJAX JSON Config file loading -----
function getConfig(configFile){
	return new Promise(async function(resolve, reject){
		$.ajaxSetup({beforeSend: function(xhr){
			if (xhr.overrideMimeType){
	  			xhr.overrideMimeType("application/json");
			}
		}});

		await $.getJSON(configFile, function(data) {
			resolve(data);
		});
	});
}

// ----- MATCH LINKS WITH SEARCH QUERY -----

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
}

function displayRandomQuote(quote_id) {
	let random_quote = quotes[Math.floor(Math.random()*quotes.length)];
	document.getElementById(quote_id)
		.innerHTML = `"${random_quote.quote}" - ${random_quote.author}`;
}

function displayClock() {
    now = new Date();
    clock = String(now.getUTCFullYear()) + "-"
    	+(now.getUTCMonth()+1 < 10 ? "0"+(now.getUTCMonth()+1) : now.getUTCMonth()+1) + "-"
    	+(now.getUTCDate() < 10 ? "0"+now.getUTCDate() : now.getUTCDate())+"T"
    	+(now.getUTCHours() < 10 ? "0"+now.getUTCHours() : now.getUTCHours()) + ":"
        +(now.getUTCMinutes() < 10 ? "0"+now.getUTCMinutes() : now.getUTCMinutes()) + ":"
        +(now.getUTCSeconds() < 10 ? "0"+now.getUTCSeconds() : now.getUTCSeconds())
    	+ createOffset(now);
    document.getElementById("clock_area").innerHTML = clock;
}

function pad(value) {
	    return value < 10 ? '0' + value : value;
}

function createOffset(date) {
	    var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
	    var offset = Math.abs(date.getTimezoneOffset());
	    var hours = pad(Math.floor(offset / 60));
	    var minutes = pad(offset % 60);
	    return sign + hours + ":" + minutes;
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

function getAttributes(prefix, query){
	switch(prefix){
		case("u\ "):
			url = createURL(query);
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

let config;
let insertMode = false;
let selectMode = false;
let keyPosition = 0;

async function init(){	
	config = await getConfig('./config.json');

	color_bg = config.color_bg;
	color_fg = config.color_fg;
	default_logo = config.default_logo;
	search = config.search;
	sites = config.sites;
	title = config.title;
	greeting = config.greet;
	quotes = config.quotes;

	$("#greet").html(greeting);
	$(document).prop('title', title);
	$("#icon").attr('src', default_logo);

	displayRandomQuote("quote_area");

	document.getElementsByTagName('html')[0]
		.style.cssText = `--bg: ${color_bg};--txt: ${color_fg}`;

	$('html').keyup(function(event){
		let search 	= $("#inputQuery").val();
	    let key 	= (event.key ? event.key : event.which);

	    switch(key){
			case('i'):
				startSuggest(true);
				$('#inputQuery').focus();
				insertMode = true;
				keyPosition = 0;
				break;
			case('Escape'):
				if(insertMode && search==""){
					$("#inputQuery").blur()
					selectMode = false;
					insertMode = false;
					startSuggest(false);
					keyPosition = 0;
				}else if(selectMode){
					selectMode = false;
					startSuggest(false);
					keyPosition = 0;	
				}else if(insertMode){
					$('#inputQuery').blur();
					insertMode = false;
					selectMode = true;
				}
				break;
			case('ArrowLeft'):
			case('h'):
				if (keyPosition > 0){
					keyPosition--;
				}
				break;
			case('ArrowRight'):
			case('l'):
				if (keyPosition < ($('#link_suggest ul').children().length-1)){
					keyPosition++;
				}
				break;
			case('Enter'):
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
}

$(document).ready(function(){
	displayClock();
	setInterval(displayClock, 1000);	
	$('#inputQuery').blur();

	init();	
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
	let longerLength = longer.length;
	if (longerLength == 0) {
	  	return 1.0;
	}
	return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	let costs = [];
	for (let i = 0; i <= s1.length; i++) {
	  	let lastValue = i;
	  	for (let  j = 0; j <= s2.length; j++) {
	  	    if (i == 0) costs[j] = j;
	  	    else {
	  	      	if (j > 0) {
	  	      	    let newValue = costs[j - 1];
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
