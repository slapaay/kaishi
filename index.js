// ----- CONFIG -----

let quotes = [
	{
		"quote": "People only have substance within the meories of other people",
		"author": "Lain Iwakura"
	},
	{
		"quote": "Any new position from which you view your reality will change your perception of its nature. It's all literally a matter of perspective.",
		"author": "Maya Ibuki"
	},
	{
		"quote": "Your truth can be changed simply by the way you accept it. That’s how fragile the truth for a human is.",
		"author": "Kozo Fuyutsuki"
	},
	{
		"quote": "If you fail you'll figure something else out. If you fail at that, at least you aren't dead - or dying any faster than the rest of us.",
		"author": "7429538"
	},
	{
		"quote": "...doesn't matter what drives your motivation, be it negative or positive emotions, as long as you do something. Motivation is all we need my friend",
		"author": "7429111"
	},
	{
		"quote": "Point is, negative, stigmatized emotions such as contempt, indignation, and anger could be used as a driving-force in positive development, if you allow it. Prove yourself wrong by breaking your own constraints.",
		"author": "7429039"
	},
	{
		"quote": "The world doesn't care how weak you are. Man up or die",
		"author": "411062016"
	},
	{
		"quote": "But you can be better you silly duck",
		"author": "7222918"
	},
	{
		"quote": "You must rebuild. You are not destroyed but merely damaged, gather your parts and data and re-assemble yourself in a greater image.",
		"author": "621328591"
	},
	{
		"quote": "If only you knew how different things could be",
		"author": "45166513"
	},
	{
		"quote": "I'm sorry, John. Truth is, the game was rigged from the start",
		"author": "Garfield"
	},
	{
		"quote": "No person exists that is just virtuous, and kindness is only something piled on the outside. There are no humans with just virtue and fairness. Rather, they try to be that and just build up stress.",
		"author": "Oshino Meme"
	},
	{
		"quote": "It’s not like people only look for help by saying \"please help me.\" In similar vein, it’s not like you’re only in love with someone if you say \"I love you.\" Everyone has things they can’t say on impulse.",
		"author": "Oshino Meme"
	},
	{
		"quote": "People have to save themselves. One person saving another is impossible.",
		"author": "Oshino Meme"
	},
	{
		"quote": "It’s impossible for someone to replace someone else.",
		"author": "Aragari Koyomi"
	},
	{
		"quote": "People save themselves on their own. Nobody can ever save anyone else.",
		"author": "Aragari Koyomi"
	},
	{
		"quote": "The impostor is an impostor because it can’t be distinguished from the real thing. The proof of its falsity is in its resemblance to the real thing.",
		"author": "Aragari Koyomi"
	},
	{
		"quote": "Curiosity is like a cockroach. It likes to stumble upon secrets that are supposed to stay hidden.",
		"author": "Hitagi Senjougahara"
	},
	{
		"quote": "Kindness can sometimes translate to hostility.",
		"author": "Hitagi Senjougahara"
	},
	{
		"quote": "A fake with more power than the real thing is more dangerous than the real thing.",
		"author": "Hitagi Senjougahara"
	},
	{
		"quote": "In our society, letting others find out that you’re a nice person is a very risky move. It’s extremely likely that someone would take advantage of that.",
		"author": "Hitagi Senjougahara"
	},
	{
		"quote": "I don’t know everything. I just know what I know.",
		"author": "Hanekawa Tsubasa"
	},
	{
		"quote": "No matter what bonds you forge with others, time will tear them apart. Well… Doesn’t thinking about it make you sick?",
		"author": "Oshino Shinobu"
	},
	{
		"quote": "The past is just the past. There’s no inherent value in getting over it or catching up to it.",
		"author": "Kaiiki Daishu"
	},
	{
		"quote": "Just as there isn’t a problem that can’t be solved by being right, there isn’t a problem that can’t be solved by money.",
		"author": "Kaiiki Daishu"
	},
	{
		"quote": "The fake is of far greater value. In its deliberate attempt to be real, it’s more real than the real thing.",
		"author": "Kaiiki Daishu"
	},
	{
		"quote": "Whatever you value… What you consider right is up to you. But don’t force those ideals onto other people.",
		"author": "Kagenui Yozuru"
	},
	{
		"quote": "You can lose the match and the game, but if you don’t lose to yourself, it isn’t a loss.",
		"author": "Aragari Karen"
	},
	{
		"quote": "Your heart will stop beating on the 2020-05-07T23:34Z",
		"author": "Dez"
	}
];

let sites = {
	"School": {
		"Outlook":			"https://outlook.office.com/owa/?realm=eq.edu.au",
		"OneNote":			"https://www.onenote.com/hrd?wdorigin=ondcauth2&wdorigin=poc",
		"OneSchool": 		"https://oslp.eq.edu.au/",
		"Oxford Digital":	"https://oxforddigital.com.au/signin/email.html",
		"Macmillan":		"https://macmillaneducationeverywhere.com/",
		"JacPlus":			"https://jacplus.com.au/",
		"turnitin":			"https://turnitin.com/login_page.asp?lang=en_us",
	},
	"Social": {
		"Reddit":			"https://reddit.com/",
		"Twitter":			"https://twitter.com/",
		"4chan":			"https://4chan.org/",
		"Youtube":			"https://youtube.com/",
	},
	"chan": {	
		"/g/":				"https://4chan.org/g/catalog",
		"/w/":				"https://4chan.org/w/catalog",
		"/wg/":				"https://4chan.org/wg/catalog",
		"/c/":				"https://4chan.org/c/catalog",
		"/sci/":			"https://4chan.org/sci/catlog",
		"/lambda/":			"https://lainchan.org/%CE%BB/catalog.html",
		"/sec/":			"https://lainchan.org/sec/catalog.html",
		"/omega/":			"https://lainchan.org/%CE%A9/index.html",
	},
	"Dev": {
		"GitHub":			"https://github.com/slapaay/",
		"Stack Overflow":	"https://stackoverflow.com/",
	},
	"Weeb": {
		"9anime":			"https://9anime.ru/",
		"KissAnime":		"https://kissanime.ru/",
		"AniList":			"https://anilist.co/",
		"LISTEN.moe":		"https://listen.moe/",
	},	
	"Amadeus": {
		"Transmission": 	"http://amadeus:9091/transmission/web/",
		"Plex":				"http://amadeus:32400/web/index.html#",
		"Syncthing":		"http://amadeus:8384/"
	},
	"Other": {
		"jisho":			"https://jisho.org",
		"Duolingo":			"https://duolingo.com"
	}
};

let search = [
	{
 		"url": "https://duckduckgo.com/",
 	  	"query": "q",
 	  	"alias": "d\u003a",
 	  	"color_bg": "#561805",
 	  	"color_fg": "#FAFAFA",
 	  	"icon": "images/duckduckgo_logo.png"
 	},
	{
		"url": "https://google.com/search",
		"query": "q",
		"alias": "g\u003a",
		"color_bg": "#0f3312",
		"color_fg": "#FAFAFA",
		"icon": "images/google_logo.png"
	},	
	{
		"url": "https://www.youtube.com/results",
		"query": "search_query",
		"alias": "y\u003A",
		"color_bg": "#681010",
		"color_fg": "#fafafa",
		"icon": "images/yt_logo.png"
	},
	{
		"url": "https://www2.9anime.to/search",
		"query": "keyword",
		"alias": "a\u003A",
		"color_bg": "#160c42",
		"color_fg": "#fafafa",
		"icon": "images/9anime_logo.png"
	},
	{
		"url": "https://jisho.org/search/",
		"query": null,
		"alias": "j\U003A",
		"color_bg": "#22570f",
		"color_fg": "#fafafa",
		"icon": "images/jisho_logo.png"
	}

];

let prevregexp = "";

function matchLinks(regex=prevregexp){
	let findPrefix 	= false;

	let prefix = getPrefix(regex);	

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
		console.log(attributes[0]);
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
    clock = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    document.getElementById("clock_area").innerHTML = clock;
}

function populateLinkArea() {
	link_html = "";
	for (let i in sites){
		console.log(sites[i], i);
		link_html += `<div class='linkArea_item'><h1>${i}</h1>`;
		for (let j in sites[i]) {
			link_html += `<li><a href='${sites[i][j]}'>${j}</a></li>`;
		}
		link_html += '</div>';
	}
	$("#link_area").html(link_html);
}

function pad(value) {
	return value < 10 ? '0' + value : value;
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
	return !url.includes("https://") && !url.includes("http://") ?
		`https://${url}` :
		url;
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
		case("u\u003a"):
			url = createURL(query);
			return [url, null];
		default:
			for (let i in search){
				if(search[i].alias == prefix){
					if (search[i].query){
						return [search[i].url, search[i].query];
					}else{
						return [search[i].url+getSearch(query), null];
					}
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

function isLetter(cha) {
	return cha.length === 1 && cha.match(/[a-z|A-Z|0-9]/i);
}

let config;
let insertMode = false;
let selectMode = false;
let keyPosition = 0;

async function init(){	
	title = "kaishi";
	color_bg = "rgba(0,0,0,0)";
	color_fg = "#fafafa";

	$(document).prop('title', title);

	displayRandomQuote("quote_area");
	$("#inputQuery").fadeOut(0);
	$("#link_area").fadeOut(0);

	document.getElementsByTagName('html')[0]
		.style.cssText = `--bg: ${color_bg};--txt: ${color_fg}`;

	$('html').keydown(function(event){
		let search 	= $("#inputQuery").val();
	    let key 	= (event.key ? event.key : event.which);
	
	    switch(key){	
			case('Escape'):
				$("#inputQuery").fadeOut(150);
				$("#inputQuery").blur();
				$('#nameTime').fadeIn(150);
				$('#quote_area').fadeIn(150);
    			$('#link_area').fadeOut(150);
    			$('#inputQuery').css('color', 'transparent');
				$("#inputQuery").val('');
				break;		
			case(' '):	
				if($('#inputQuery').is(":hidden")){
					$('#nameTime').fadeOut(150);
					$('#quote_area').fadeOut(150);
					$('#link_area').fadeIn(150);
				}
				break;
			default:
				if (!isLetter(key)) break;
				$("#inputQuery").fadeIn(150);
				$('#quote_area').fadeIn(150);
				$('#nameTime').fadeOut(150);
    			$('#link_area').fadeOut(150);
    			$('#inputQuery').css('color', 'var(--txt)');
				$('#inputQuery').focus();
				break;
	    }
	});		
}

$(document).ready(function(){
	displayClock();
	populateLinkArea();
	setInterval(displayClock, 1000);	
	$('#inputQuery').blur();

	init();	
});
