window.onload = function(){
	var button = document.getElementById('clickme');
	button.onclick = function(){
		var msg = document.getElementById('message');
		msg.innerText = 'Hello World!';
	}
}