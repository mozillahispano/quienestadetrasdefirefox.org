
$(document).ready(function() {

	
	BrowserDetect.init();
	//alert('<p>El navegador que estas usando es <b>' + BrowserDetect.browser + '</b> ' + BrowserDetect.version + ' en <b>' + BrowserDetect.OS + '!</b></p>');
	
	//if (BrowserDetect.browser == 'Firefox' && (BrowserDetect.version == '20' ) )
	if (BrowserDetect.browser == 'Explorer' && (BrowserDetect.version == '7' || BrowserDetect.version == '8' ) )
	{
		$('#videos').css("display","none");
		$('#oldBrowser').css("display","block");
		$('#tabzilla').fadeIn(1000);
		$('#tabzilla').css("display","block");
		$('#html5Loader').css("display","none");
		$('#html5Loader').css("display","none");
		$('#download').fadeIn(1000);
		$('#download').css("display","block");
		$('#pie').fadeIn(1000);
		$('#pie').css("display","block");
		$('#container').css("height","825px");
	}
	else
	{
		//LOADER
		
		var loaderAnimation = $("#html5Loader").LoaderAnimation({
			font: "normal 400px Open Sans",
			onComplete:function(){
		
				//console.log("preloader animation completed!");
				$('#fox_face').fadeIn(1000);
				$('#fox_face').css("display","block");
				$('#header').fadeIn(1000);
				$('#header').css("display","block");
				$('#videos').fadeIn(1000);
				$('#videos').css("display","block");
				$('#tabzilla').fadeIn(1000);
				$('#tabzilla').css("display","block");
				$('#download').fadeIn(1000);
				$('#download').css("display","block");
				$('#pie').fadeIn(1000);
				$('#pie').css("display","block");
				
				printVideoGrid();
		
			}
		});
		$.html5Loader({
			filesToLoad:'../js/filesMobile.json',
			onComplete: function () {
				//console.log("All the assets are loaded!")
			},
			onUpdate: loaderAnimation.update
		});	
	
	}

	
	//CLICK EVENTS
	
	$("#fox_ear_l").click(function(e){
		
		//TRACK ANALYTICS EVENT
		_gaq.push(['_trackEvent', 'COLABORA LINK OREJA', 'Colabora', 'Colabora Link Oreja']);
		
		window.open("https://www.mozilla-hispano.org/documentacion/Colabora", "COLABORA", "width=1200,height=800,location=no");
		return false;
	});	
	
	$("#fox_tail").click(function(e){
		ShareOnTWTail();
		
		//TRACK ANALYTICS EVENT
		_gaq.push(['_trackEvent', 'Share On Twitter Tail', 'Share On Twitter Tail', 'Share On Twitter Tail']);
		
	});	
	
	/*
	$("#downloadAndroid").click(function(e){
		window.open("https://play.google.com/store/apps/details?id=org.mozilla.firefox", "DESCARGA ANDROID", "width=1200,height=800,location=no");
		return false;
	});	
	
	$("#downloadDesktop").click(function(e){
		window.open("http://www.mozilla.org/es-ES/firefox/fx/", "DESCARGA PC/MAC", "width=1200,height=800,location=no");
		return false;
	});	
	*/
	
	
	$("#shareFB").click(function(e){
		ShareOnFB();
		//TRACK ANALYTICS EVENT
		_gaq.push(['_trackEvent', 'Share On Facebook', 'Share On Facebook', 'Share On Facebook']);
	});	
	
	$("#shareTW").click(function(e){
		ShareOnTW();
		//TRACK ANALYTICS EVENT
		_gaq.push(['_trackEvent', 'Share On Twitter', 'Share On Twitter', 'Share On Twitter']);
	});	
	
	$("#fox_body2").click(function(e){
		//$("#download").css("display","none");
		$("#fox_face").css("display","none");
		$("#videos").css("display","none");
		$('#back_title').css("display","none");
		hide_fox();
		
		$("#infografia").css("display","block");
		$('#container').css("height","900px");
		
		//TRACK ANALYTICS EVENT
		_gaq.push(['_trackEvent', 'INFOGRAFÍA', 'Click Infografía', 'INFOGRAFÍA']);
	});	
	
	
	
	$("#fox_body3").click(function(e){
		//$("#download").css("display","none");
		$("#fox_face").css("display","none");
		$("#videos").css("display","none");
		$('#back_title').css("display","none");
		hide_fox();
		
		$("#manifiesto").css("display","block");
		$('#container').css("height","1200px");
		
		//TRACK ANALYTICS EVENT
		_gaq.push(['_trackEvent', 'MANIFIESTO', 'Click ver Manifiesto', 'MANIFIESTO']);
		
	});	
	
	//CLICK ON FOX'S HEAD MAKE THE FOX'X FIGURE APPEARS
	$("#fox_face").click(function(e){
			$(this).addClass('flip');
			$('#back_who').css("display","block");
			$('#back_title').css("display","block");
			
			//SCROLL INFO WHO IS BEHIND FIREFOX
			fleXenv.initByClass("flexcroll");
			show_fox();	
	});
	
	//CLOSE FOX
	$("#fox_body1").click(function(e){
		$("#fox_face").removeClass('flip');
		$('#back_who').css("display","none");
		$('#back_title').css("display","none");
		hide_fox();
	});
	
	//GO HOME
	$(".btngoHome").click(function(e){
		$("#infografia").css("display","none");
		$("#manifiesto").css("display","none");
		//$("#downloadOrange").css("display","none");	
		
		//$("#download").css("display","block");
		$("#fox_face").css("display","block");
		$("#videos").css("display","block");
		$('#container').css("height","2562px");
		$('#back_title').css("display","block");
		show_fox();
	});
	
	//PLAY MAIN VIDEO
	
	$("#playMainVideo").click(function(e){
		$("#mainVideo").css("display","block");
		$('#videoFirefox')[0].play();
		$('#videoFirefox')[0].focus(); 
		//SHOW CLOSE BUTTON
		$('#btnClosevideoFirefox').css("display","block");
		
		//TRACK ANALYTICS EVENT
		_gaq.push(['_trackEvent', 'VIDEO FIREFOX', 'Play', 'Play Video Firefox']);
		
	});

	//VIDEO EVENTS
	$('#videoFirefox').bind('pause ended', function () { 
		$("#fox_face").css("display","block");
		$("#download").css("display","block");
		//HIDE VIDEO
		$('#mainVideo').css("display","none");
		
		//TRACK ANALYTICS EVENT
		_gaq.push(['_trackEvent', 'VIDEO FIREFOX', 'Pause/End', 'Pause/End Video Firefox']);
		
	});
	
	
	//INPHOGRAPHIC
	
	$("#area_noticias").click(function(e){
		showMSG('1');
	});
	
	$("#area_creatividad").click(function(e){
		showMSG('2');
	});
	
	$("#area_difusion").click(function(e){
		showMSG('3');
	});
	
	$("#area_documentacion").click(function(e){
		showMSG('4');
	});
	
	$("#area_lab").click(function(e){
		showMSG('5');
	});
	
	$("#area_localizacion").click(function(e){
		showMSG('6');
	});
	
	$("#area_complemetos").click(function(e){
		showMSG('7');
	});
	
	$("#area_controlcalidad").click(function(e){
		showMSG('8');
	});
	
	$("#area_asistencia").click(function(e){
		showMSG('9');
	});
	
	$("#area_administracion").click(function(e){
		showMSG('10');
	});
	
});
