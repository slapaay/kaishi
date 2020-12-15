function pad(value) {
	return value < 10 ? '0' + value : value;
}

function displayRandomQuote() {
	let random_quote = quotes[Math.floor(Math.random()*quotes.length)];
	document.getElementById("quote").innerHTML = `${random_quote.quote}`;
	document.getElementById("author").innerHTML = `- ${random_quote.author}`;
}

function displayClock() {
	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    now = new Date(); 
	time = `${days[now.getDay()]}, ${months[now.getMonth()]} ${pad(now.getDate())} | ${pad(now.getHours())}:${pad(now.getMinutes())}`
    document.getElementById("clock_time").innerHTML = time;
}

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
	title = "Start";

	$(document).prop('title', title);
}

$(document).ready(function(){
	displayClock();
	populateLinkArea();
	displayRandomQuote();
	setInterval(displayClock, 10000);	

	init();	
});
