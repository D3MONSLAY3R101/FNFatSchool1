(function() {
var url=window.location!=window.parent.location?document.referrer:document.location;
if(url != 'https://kbhgames.com/'){
	

	if(Math.random() < 0.5){
	window.document.body.insertAdjacentHTML( 'beforeend','<div id="playmore"><a href="https://kbhgames.com/tag/friday-night-funkin" target="_top">Play more Friday Night Funkin Games &#187;</a></div>');
		
	}else{
	window.document.body.insertAdjacentHTML( 'afterbegin','<div id="playmore"><a href="https://kbhgames.com/tag/friday-night-funkin" target="_top">Play more Friday Night Funkin Games &#187;</a></div>');
	}
	
			
document.getElementById("openfl-content").style.height = "calc(100% - 28px)";

if( window.location !== window.parent.location  && countDownDate != null){
	  var now = new Date().getTime();
    
  var distance = countDownDate - now;
  
 if (distance > 0) {
var x = setInterval(function() {


  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

	  document.body.style.backgroundColor = "white";
  document.body.innerHTML = "<p style='font-size:25px;'>Sorry, Game not embeddable/Iframeable on other website Yet. It'll be embeddable/Iframeable after : "+ days + "d " + hours + "h " + minutes + "m " + seconds + "s </p>. <p  style='font-size:25px;'>Usually a week after being published to <a href='https://kbhgames.com' target='_top'>KBHGames.com</a>";

}, 1000);
  }
	
}

}



if(
url == 'https://www.fridaynightfunkin.net/' 
|| url == 'https://www.pgr.gg/'
|| url == 'https://www.mcpe117.com/'
|| url == 'https://files.kbh.games/'
){
document.body.style.background = "white";
			 document.body.innerHTML = '<div id="playmore" style="text-align: center;width: 100%;display: flex; height: 90vh;align-content: center;align-items: center;justify-content: center;flex-wrap: nowrap;color:#000"><h1><a href="https://kbhgames.com/tag/friday-night-funkin" target="_top">KBH Games</a><h1></div><p style="text-align:center:color:#000">This site Trying repetitively to hide credits link,  not cool. So you lost the privilege to iframe from kbhgames server.</p>';

}
console.log = function() {}

})();

window.addEventListener('load', function () {
    window.focus();
    document.body.addEventListener('click',function(e) {
        window.focus();
    },false);
});
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);