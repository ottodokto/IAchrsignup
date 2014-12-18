links = ["https://google.com", "https://drive.google.com/drive", "https://translate.google.com", "https://keep.google.com/", "https://mail.google.com/mail/u/0/", "https://classroom.google.com/h", ]
onclick = function() {
	randomint = Math.floor(Math.random() * (5 - 0)) + 0; //Math.floor(Math.random() * (max - min)) + min;
	document.getElementById("imagelink").href = links[randomint]
	delete randomint;	
}


