// ----- CONFIG -----

let sites = {
	"Social": {
		"Reddit":			"https://reddit.com/",
		"Twitter":			"https://twitter.com/",
		"4chan":			"https://4chan.org/",
		"Youtube":			"https://youtube.com/",
	},		
	"Dev": {
		"GitHub":			"https://github.com/slapelachie/",
		"Stack Overflow":	"https://stackoverflow.com/",
	},
};

let quotes = [
	{
		"quote": "People only have substance within the meories of other people",
		"author": "Lain Iwakura"
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
		"quote": "A fake with more power than the real thing is more dangerous than the real thing.",
		"author": "Hitagi Senjougahara"
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
		"quote": "Your heart will stop beating on the 2020-07-07T23:34Z",
		"author": "Dez"
	}
];

/*
 * Pads a value if it is less then 10 with a zero
 */
function pad(value) {
	return value < 10 ? '0' + value : value;
}

/*
 * Changes the quote on screen
 */
function displayRandomQuote() {
	let random_quote = quotes[Math.floor(Math.random()*quotes.length)];
	document.getElementById("quote").innerHTML = `${random_quote.quote}`;
	document.getElementById("author").innerHTML = `- ${random_quote.author}`;
}

/*
 *	Displays the clock on screen
 */
function displayClock() {
    now = new Date(); 
    time = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
	date = `${now.getFullYear()}-${pad(now.getMonth())}-${pad(now.getDate())}`
    document.getElementById("clock_time").innerHTML = time;
    document.getElementById("clock_date").innerHTML = date;
}

/*
 * Creates the link area in different categories
 */
function populateLinkArea() {
	link_html = "";	
	for (let i in sites){
		link_html += `<div class='linkArea_item'><h1>${i}</h1>`;
		for (let j in sites[i]) {
			link_html += `<li><a href='${sites[i][j]}'>${j}</a></li>`;
		}
		link_html += '</div>';
	}
	$("#link_area").html(link_html);
}

async function init(){	
	title = "kaishi";

	$(document).prop('title', title);
}

$(document).ready(function(){
	displayClock();
	populateLinkArea();
	displayRandomQuote();
	setInterval(displayClock, 10000);	

	init();	
});
