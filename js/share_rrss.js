//SHARE FUNCTIONS FB TW


function ShareOnFB(){  
	
	var url = "http://www.quienestadetrasdefirefox.org";
	var mens = "Firefox está diseñado para ti, por gente como tú. Nunca comercia con tu información o hace seguimientos. Esta experiencia la servimos tanto para tu escritorio como en el móvil. Conócenos en http://mzl.la/DetrasdeFirefox y descarga Firefox para Android en http://mzl.la/FirefoxparaAndroid.";
	
	var title = "¿Quién está detrás de Firefox?";	
	var imgShare = 'http://www.quienestadetrasdefirefox.org/img/img_share.jpg';
	
	var deviceiphone = "iphone";
	var deviceipad = "ipad";
	var android = "android";
	var uagent = navigator.userAgent.toLowerCase();
	var apple = false;
	if (uagent.search(deviceiphone) > -1) apple = 'iphone';
	if (uagent.search(deviceipad) > -1) apple = 'ipad';
	if (uagent.search(android) > -1) apple = 'android';
	if (apple == 'iphone' || apple == 'android' )
	{
		//http://m.facebook.com/sharer.php?u=<urlencoded url>t=<urlencoded title>
		window.open('http://m.facebook.com/sharer.php?u='+encodeURI(url)+'&t='+encodeURI(title),'mywindow'+getRand(),'');
	}
	else
	{
		window.open('http://www.facebook.com/sharer.php?s=100&p[title]='+encodeURI(title)+'&p[summary]='+encodeURI(mens)+'&p[url]='+url+'&p[images][0]='+imgShare,'mywindow'+getRand(),'');
	}
	
	
	
}

function ShareOnTW(){  
	
	//var status = "¿Nunca te has preguntado que hay detrás de Firefox, un navegador que no vende publicidad ni cotiza en Bolsa? quienestadetrasdefirefox.org";
	var status = "¿Nunca te has preguntado quién hay detrás de Firefox? Conócenos en mzl.la/DetrasdeFirefox y descarga mzl.la/FirefoxparaAndroid";
	//https://twitter.com/intent/tweet?text=texto&url=www.example.com&hashtags=fxandroid 
	
	var deviceiphone = "iphone";
	var deviceipad = "ipad";
	var android = "android";
	var uagent = navigator.userAgent.toLowerCase();
	var apple = false;
	if (uagent.search(deviceiphone) > -1) apple = 'iphone';
	if (uagent.search(deviceipad) > -1) apple = 'ipad';
	if (uagent.search(android) > -1) apple = 'android';
	if (apple == 'iphone' || apple == 'android' )
	{
		window.open('http://mobile.twitter.com/home?status='+encodeURI(status),'mywindow'+getRand(),'');
	}
	else
	{
		//window.open('http://twitter.com/home?status='+encodeURI(status),'mywindow'+getRand(),'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=600, height=500, top=85, left=140');
		window.open('https://twitter.com/intent/tweet?text='+encodeURI(status)+'&hashtags=firefox','mywindow'+getRand(),'');
	}
}  


function ShareOnTWTail(){  
	
	
	
	//var status = "¿Nunca te has preguntado que hay detrás de Firefox, un navegador que no vende publicidad ni cotiza en Bolsa? quienestadetrasdefirefox.org";
	var status = "¿Nunca te has preguntado quién hay detrás de Firefox? Conócenos en mzl.la/DetrasdeFirefox y descarga mzl.la/FirefoxparaAndroid";
	//https://twitter.com/intent/tweet?text=texto&url=www.example.com&hashtags=fxandroid 
	
	var deviceiphone = "iphone";
	var deviceipad = "ipad";
	var android = "android";
	var uagent = navigator.userAgent.toLowerCase();
	var apple = false;
	if (uagent.search(deviceiphone) > -1) apple = 'iphone';
	if (uagent.search(deviceipad) > -1) apple = 'ipad';
	if (uagent.search(android) > -1) apple = 'android';
	if (apple == 'iphone' || apple == 'android' )
	{
		window.open('http://mobile.twitter.com/home?status='+encodeURI(status),'mywindow'+getRand(),'');
	}
	else
	{
		//window.open('http://twitter.com/home?status='+encodeURI(status),'mywindow'+getRand(),'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=600, height=500, top=85, left=140');
		window.open('https://twitter.com/intent/tweet?text='+encodeURI(status)+'&hashtags=firefox','mywindow'+getRand(),'');
	}
}  

function shareVideoFB(video, titulo, msg){  
	
	var url = 'http://www.quienestadetrasdefirefox.org';
	var mens = msg;
	//var title = "¿Quién está detrás de Firefox?";
	var title = titulo;
	var imgShare = 'http://www.quienestadetrasdefirefox.org/img/img_share.jpg';	
	/*
	mens = "¿Nunca te has preguntado que hay detrás de Firefox? Firefox está diseñado para ti, por gente como tú. Nunca comercia con tu información o hace seguimientos. Esta experiencia la servimos tanto para tu escritorio como en el móvil. Conócenos en http://mzl.la/DetrasdeFirefox y descarga Firefox para Android en http://mzl.la/FirefoxparaAndroid.";
	*/
	
	var deviceiphone = "iphone";
	var deviceipad = "ipad";
	var android = "android";
	var uagent = navigator.userAgent.toLowerCase();
	var apple = false;
	if (uagent.search(deviceiphone) > -1) apple = 'iphone';
	if (uagent.search(deviceipad) > -1) apple = 'ipad';
	if (uagent.search(android) > -1) apple = 'android';
	if (apple == 'iphone' || apple == 'android' )
	{
		//http://m.facebook.com/sharer.php?u=<urlencoded url>t=<urlencoded title>
		window.open('http://m.facebook.com/sharer.php?u='+encodeURI(url)+'&t='+encodeURI(title),'mywindow'+getRand(),'');
	}
	else
	{
		window.open('http://www.facebook.com/sharer.php?s=100&p[title]='+encodeURI(title)+'&p[summary]='+encodeURI(mens)+'&p[url]='+url+'&p[images][0]='+imgShare,'mywindow'+getRand(),'');
	}
	
	//TRACK ANALYTICS EVENT
	_gaq.push(['_trackEvent', 'SHARE ON FB VIDEO-'+video, 'SHARE ON FB VIDEO-'+video, 'SHARE ON TW VIDEO-'+video]);
	
}

function shareVideoTW(video, statustw){  
	
	//var status = "¿Nunca te has preguntado que hay detrás de Firefox, un navegador que no vende publicidad ni cotiza en Bolsa? quienestadetrasdefirefox.org";
	//var status = "¿Nunca te has preguntado quién hay detrás de Firefox? Conócenos en mzl.la/DetrasdeFirefox y descarga mzl.la/FirefoxparaAndroid";
	//https://twitter.com/intent/tweet?text=texto&url=www.example.com&hashtags=fxandroid 
	var status = statustw;
	
	var deviceiphone = "iphone";
	var deviceipad = "ipad";
	var android = "android";
	var uagent = navigator.userAgent.toLowerCase();
	var apple = false;
	if (uagent.search(deviceiphone) > -1) apple = 'iphone';
	if (uagent.search(deviceipad) > -1) apple = 'ipad';
	if (uagent.search(android) > -1) apple = 'android';
	if (apple == 'iphone' || apple == 'android' )
	{
		window.open('http://mobile.twitter.com/home?status='+encodeURI(status),'mywindow'+getRand(),'');
	}
	else
	{
		//window.open('http://twitter.com/home?status='+encodeURI(status),'mywindow'+getRand(),'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=600, height=500, top=85, left=140');
		window.open('https://twitter.com/intent/tweet?text='+encodeURI(status)+'&hashtags=','mywindow'+getRand(),'');
	}
	
	//TRACK ANALYTICS EVENT
	_gaq.push(['_trackEvent', 'SHARE ON TW VIDEO-'+video, 'SHARE ON TW VIDEO-'+video, 'SHARE ON TW VIDEO-'+video]);
}  



function getRand()
{

   var randomnumber=Math.floor(Math.random()*1000);
   return randomnumber;

}
