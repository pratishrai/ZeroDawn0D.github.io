function check(){
	rickroll = document.getElementById("rickroll");
	if(!rickroll.checked)
	{
		rickroll.checked = true;
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	}
}