
function printVideoGrid()
{
	//alert("VIDEOS");
	
	ajax=setAjax();
	var theHTML = "";
	//var theHTML2 = "";
	ajax.open("GET", "../js/dataMobile.js", true);	
	ajax.onreadystatechange=function()
	{
		if (ajax.readyState==4) 
		{
			//if (xmlhttp.status === 200) {
			var datos = ajax.responseText;
			eval('var data = ' + datos + ';');
			var theResults = data.firefoxTeam;
			
			if(theResults != null)
			{
				var theHTML = "";
				var videoid = 1;
				for (var x = 0; x < theResults.length; x++) 
				{
		
					if (videoid%2==0)
					{
						theHTML += '<div class="videoGrid" id="div_video'+videoid+'"  >';
						theHTML += '<div id="video'+videoid+'Overview">';
						theHTML += '<div class="btn_play" id="playVideo'+videoid+'" ><a href="javascript:void(0)"><img src="../img/btn_play_mobile.png" onClick="playVideo('+videoid+');" ></a></div>';
						theHTML += '<div class="videoInfo_r" id="videoInfo'+videoid+'" >';
						theHTML += '<div class="info_r">';
						//theHTML += theResults[x].contactName+'<br>';
						theHTML += '<a href="javascript:void(0)" onClick="openTW('+"'"+theResults[x].contactTWurl+"'"+');" class="hoverTW_r" >'+theResults[x].contactTW+'</a> <span>' + theResults[x].contactName + ' | </span><br>';
						theHTML += theResults[x].contactArea +' | '+ theResults[x].contactCountry+'<br>';
						theHTML += '<a href="mailto:'+theResults[x].contactEmail+'" class="hoverGM" >'+theResults[x].contactEmail+'</a>';
						theHTML += '</div>';
						theHTML += '<div class="contact_r">';
						theHTML += '<a href="mailto:'+theResults[x].contactEmail+'" class="contactGM" ><img src="img/goToEmail.png" alt="Email" ></a>';
						theHTML += '<a href="javascript:void(0)" onClick="openTW('+"'"+theResults[x].contactTWurl+"'"+');" class="contactTW" ><img src="img/goToTwitter.png" alt="Twitter" ></a>';
						theHTML += '</div>';
						theHTML += '</div>';
						theHTML += '<img src="'+theResults[x].contactImg+'" alt="'+theResults[x].contactTitle+'" title="'+theResults[x].contactTitle+'" class="posterImg" >';
						theHTML += '</div>';
						theHTML += '<div class="btnClose" id="btnClosevideo'+videoid+'" ><a href="javascript:void(0)" onClick="closeVideo('+videoid+')"><img src="../img/btnClose.png"></a></div>';
						theHTML += '<video poster="'+theResults[x].contactImg+'" title="'+theResults[x].contactTitle+'" id="video'+videoid+'" controls preload="none" style="display:none;" class="videoH264" >';
						theHTML += '<source src="'+theResults[x].contactVideoWebm+'" type="video/webm" />';
						theHTML += '<source src="'+theResults[x].contactVideoMp4+'" type="video/mp4" />';
						theHTML += '<source src="'+theResults[x].contactVideoOgv+'" type="video/ogg" />';
						theHTML += 'Video tag not supported. Download the video <a href="'+theResults[x].contactVideoWebm+'">here</a>.';
						theHTML += '</video>';
						theHTML += '<div class="endVideoHover" id="endVideoHover'+videoid+'" ><img src="'+theResults[x].contactImg+'" alt="'+theResults[x].contactTitle+'" title="'+theResults[x].contactTitle+'" class="posterImg" ><div class="endVideoLink" id="endVideoLink'+videoid+'"><a href="'+theResults[x].ContactDownloadLink+'" onClick="trackDownloadVideoLink('+videoid+');" ><img src="../img/endVideoHover.png" ></a></div></div>';
						theHTML += '<div class="shareVideoTW" id="shareVideoTW'+videoid+'" ><a href="javascript:void(0)" onclick="shareVideoTW('+videoid+', '+ "'" + theResults[x].ContactShareStatus+ "'" +');" ><img src="../img/shareVideoTW.png" ></a></div>';
						theHTML += '<div class="shareVideoFB" id="shareVideoFB'+videoid+'" ><a href="javascript:void(0)" onclick="shareVideoFB('+videoid+', '+ "'" + theResults[x].ContactShareTitle + "'" +', '+ "'" + theResults[x].ContactShareMSG + "'" +');" ><img src="../img/shareVideoFB.png" ></a></div>';
						theHTML += '</div>';
					}
					else
					{
						theHTML += '<div class="videoGrid" id="div_video'+videoid+'"  >';
						theHTML += '<div id="video'+videoid+'Overview">';
						theHTML += '<div class="btn_play" id="playVideo'+videoid+'" ><a href="javascript:void(0)"><img src="../img/btn_play_mobile.png" onClick="playVideo('+videoid+');" ></a></div>';
						theHTML += '<div class="videoInfo_l" id="videoInfo'+videoid+'" >';
						theHTML += '<div class="info_l">';
						//theHTML += theResults[x].contactName+'<br>';
						theHTML += '<span>' + theResults[x].contactName + ' | </span><a href="javascript:void(0)" onClick="openTW('+"'"+theResults[x].contactTWurl+"'"+');" class="hoverTW_l" >'+theResults[x].contactTW+'</a><br>';
						theHTML += theResults[x].contactArea +' | '+ theResults[x].contactCountry+'<br>';
						theHTML += '<a href="mailto:'+theResults[x].contactEmail+'" class="hoverGM" >'+theResults[x].contactEmail+'</a>';
						theHTML += '</div>';
						theHTML += '<div class="contact_l">';
						theHTML += '<a href="mailto:'+theResults[x].contactEmail+'" class="contactGM" ><img src="img/goToEmail.png" alt="Email" ></a>';
						theHTML += '<a href="javascript:void(0)" onClick="openTW('+"'"+theResults[x].contactTWurl+"'"+');" class="contactTW" ><img src="img/goToTwitter.png" alt="Twitter" ></a>';
						theHTML += '</div>';
						theHTML += '</div>';
						theHTML += '<img src="'+theResults[x].contactImg+'" alt="'+theResults[x].contactTitle+'" title="'+theResults[x].contactTitle+'" class="posterImg" >';
						theHTML += '</div>';
						theHTML += '<div class="btnClose" id="btnClosevideo'+videoid+'" ><a href="javascript:void(0)" onClick="closeVideo('+videoid+')"><img src="../img/btnClose.png"></a></div>';
						theHTML += '<video poster="'+theResults[x].contactImg+'" title="'+theResults[x].contactTitle+'" id="video'+videoid+'" controls preload="none" style="display:none;" class="videoH264">';
						theHTML += '<source src="'+theResults[x].contactVideoWebm+'" type="video/webm" />';
						theHTML += '<source src="'+theResults[x].contactVideoMp4+'" type="video/mp4" />';
						theHTML += '<source src="'+theResults[x].contactVideoOgv+'" type="video/ogg" />';
						theHTML += 'Video tag not supported. Download the video <a href="'+theResults[x].contactVideoWebm+'">here</a>.';
						theHTML += '</video>';
						theHTML += '<div class="endVideoHover" id="endVideoHover'+videoid+'" ><img src="'+theResults[x].contactImg+'" alt="'+theResults[x].contactTitle+'" title="'+theResults[x].contactTitle+'" class="posterImg" ><div class="endVideoLink" id="endVideoLink'+videoid+'"><a href="'+theResults[x].ContactDownloadLink+'" onClick="trackDownloadVideoLink('+videoid+');" ><img src="../img/endVideoHover.png" ></a></div></div>';
						theHTML += '<div class="shareVideoTW" id="shareVideoTW'+videoid+'" ><a href="javascript:void(0)" onclick="shareVideoTW('+videoid+', '+ "'" + theResults[x].ContactShareStatus+ "'" +');" ><img src="../img/shareVideoTW.png" ></a></div>';
						theHTML += '<div class="shareVideoFB" id="shareVideoFB'+videoid+'" ><a href="javascript:void(0)" onclick="shareVideoFB('+videoid+', '+ "'" + theResults[x].ContactShareTitle + "'" +', '+ "'" + theResults[x].ContactShareMSG + "'" +');" ><img src="../img/shareVideoFB.png" ></a></div>';
						theHTML += '</div>';
					}
					
			
					videoid++;
				}
				
				$('#videos').html(theHTML);
				
				loadVideoEvents();
			}
			else
			{
				alert("NO VIDEOS");
			}
		}
		else
		{
			//$('#loading').hide();
		}
	}
	ajax.send(null);
}

function loadVideoEvents()
{
	//alert("EVENTS");
	
	//$('#video1').bind('pause ended', function () { 
	$('#video1').bind('pause ended', function () { 
		closeVideoLink(1);
	});

	$('#video2').bind('pause ended', function () { 
		closeVideoLink(2);
	});
	
	$('#video3').bind('pause ended', function () { 
		closeVideoLink(3);
	});
	
	$('#video4').bind('pause ended', function () { 
		closeVideoLink(4);
	});
	
	$('#video5').bind('pause ended', function () { 
		closeVideoLink(5);
	});
	
	$('#video6').bind('pause ended', function () { 
		closeVideoLink(6);
	});
	
	$('#video7').bind('pause ended', function () { 
		closeVideoLink(7);
	});
	
	$('#video8').bind('pause ended', function () { 
		closeVideoLink(8);
	});
	
	$('#video9').bind('pause ended', function () { 
		closeVideoLink(9);
	});
	
	$('#video10').bind('pause ended', function () { 
		closeVideoLink(10);
	});
	
	$('#video11').bind('pause ended', function () { 
		closeVideoLink(11);
	});
	
	$('#video12').bind('pause ended', function () { 
		closeVideoLink(12);
	});
	
	$('#video13').bind('pause ended', function () { 
		closeVideoLink(13);
	});
	
	$('#video14').bind('pause ended', function () { 
		closeVideoLink(14);
	});
}	


function playVideo (video)
{
	//HIDE FOX DOWNLOAD
	$("#download").css("display","none");
	$("#fox_face").css("display","none");
	hide_fox();
	//HIDE OVERVIEW
	$('#video'+video+'Overview').css("display","none");
	//SHOW VIDEO
	$('#video'+video).css("display","block");
	//PLAY VIDEO
	$('#video'+video)[0].play();
	$('#video'+video)[0].focus(); 
	//SHOW CLOSE BUTTON
	$('#btnClosevideo'+video).css("display","block");
	
	//CLOSE OTHER VIDEOS
	
	for (i=1; i<=14; i++ )
	{
		if (i != video)
		{
			$('#video'+i)[0].pause();
			$('#video'+i).css("display","none");
			//SHOW OVERVIEW
			$('#video'+i+'Overview').css("display","block");
			//HIDE CLOSE BUTTON
			$("#btnClosevideo"+i).css("display","none");
			$("#shareVideoTW"+i).css("display","none");
			$("#shareVideoFB"+i).css("display","none");
		}
	}
	
	//TRACK ANALYTICS EVENT
	_gaq.push(['_trackEvent', 'VIDEO-'+video, 'Play', 'Play Video'+video]);
}

function closeVideoLink(video)
{
	
	//STOP & HIDE VIDEO
	$('#video'+video)[0].pause();
	$('#video'+video).css("display","none");
	//SHOW LINK VIDEO
	$('#endVideoHover'+video).css("display","block");
	$('#endVideoLink'+video).css("display","block");
	//HIDE CLOSE BUTTON
	$("#btnClosevideo"+video).css("display","block");
	$("#shareVideoTW"+video).css("display","block");
	$("#shareVideoFB"+video).css("display","block");
	//SHOW FOX
	//$("#fox_face").css("display","block");
	//$("#download").css("display","block");
	
	//TRACK ANALYTICS EVENT
	_gaq.push(['_trackEvent', 'Download Link VIDEO-'+video, 'Stop', 'Download Link '+video]);
	
	
}


function closeVideo(video)
{
	
	if(video == 'Firefox')
	{
		$("#mainVideo").css("display","none");
		$('#videoFirefox')[0].pause();
		//SHOW CLOSE BUTTON
		$('#btnClosevideoFirefox').css("display","none");
		$('#back_title').css("display","block");
		show_fox();
	}
	else
	{
		//STOP & HIDE VIDEO
		$('#video'+video)[0].pause();
		$('#video'+video).css("display","none");
		//SHOW OVERVIEW
		$('#video'+video+'Overview').css("display","block");
		//HIDE CLOSE BUTTON
		$("#btnClosevideo"+video).css("display","none");
		$("#shareVideoTW"+video).css("display","none");
		$("#shareVideoFB"+video).css("display","none");
		//SHOW FOX
		$("#fox_face").css("display","block");
		$('#back_title').css("display","block");
		$("#download").css("display","block");
		show_fox();
		
	}
	
	//TRACK ANALYTICS EVENT
	_gaq.push(['_trackEvent', 'VIDEO-'+video, 'Stop', 'Stop Video'+video]);
	
}

//OPEN TW

function openTW(url)
{
	
	//TRACK ANALYTICS EVENT
	_gaq.push(['_trackEvent', 'Open Twitter'+url, 'Open', 'Open Twitter'+url]);
	
	window.open(url, "TWITTER", "width=1200,height=800,location=no");
	return false;
}

//SHOW MSG INPHOGRAPHIC

function showMSG(iarea)
{
	var title = '';
	var img = '';
	var msg = '';
	var linkjoin = '';
			
	switch (iarea)
	{
		case '1':
			//Noticias
			title = 'NOTICIAS';
			img = '<img src="../img/ico_noticias.png" width="30" >';
			msg = "Acercamos las últimas novedades de Mozilla a los usuarios hispanohablantes.";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(1)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '2':
			//Creatividad
			title = 'CREATIVIDAD';
			img = '<img src="../img/ico_creatividad.png" width="30" >';
			msg = "Somos diseñadores, ilustradores, compositores, editores multimedia...";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(2)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '3':
			//Difusión 
			title = 'DIFUSIÓN';
			img = '<img src="../img/ico_difusion.png" width="30" >';
			msg = "Damos a conocer Firefox y otros proyectos Mozilla.";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(3)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '4':
			//Documentacion 
			title = 'DOCUMENTACIÓN';
			img = '<img src="../img/ico_documentacion.png" width="30" >';
			msg = "Compartimos todo lo que sabemos sobre los productos de Mozilla en documentos y tutoriales, para que los usuarios obtengan el máximo rendimiento de ellos. ";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(4)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '5':
			//Laboratorio 
			title = 'LABS';
			img = '<img src="../img/ico_labs.png" width="30" >';
			msg = "Es el punto de encuentro de los desarrolladores de la plataforma Mozilla en español. ";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(5)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '6':
			//Localización 
			title = 'LOCALIZACIÓN';
			img = '<img src="../img/ico_localizacion.png" width="30" >';
			msg = "Hacemos posible que los productos, los webs y la documentación de Mozilla hablen español. ";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(6)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '7':
			//Complementos 
			title = 'COMPLEMENTOS';
			img = '<img src="../img/ico_complementos.png" width="30" >';
			msg = "Las extensiones permiten personalizar completamente las aplicaciones para ajustarlas a las necesidades de cada usuario.";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(7)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '8':
			//Control Calidad 
			title = 'CONTROL DE CALIDAD';
			img = '<img src="../img/ico_controlcalidad.png" width="30" >';
			msg = "Entre todos mejoramos las versiones de prueba.";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(8)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '9':
			//Asistencia 
			title = 'ASISTENCIA';
			img = '<img src="../img/ico_asistencia.png" width="30" >';
			msg = "Ayudamos a que otros usuarios aprovechen lo mejor de Firefox y de otros proyectos Mozilla resolviendo sus dudas y problemas.";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(9)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
		case '10':
			//Administracion 
			title = 'ADMINISTRACIÓN';
			img = '<img src="../img/ico_administracion.png" width="30" >';
			msg = "Nos encargamos de la arquitectura y desarrollo del portal mozilla-hispano.org, así como de todas las aplicaciones o servicios dependientes de él.";
			linkjoin = '<a href="javascript:void(0)" onclick="openJoinus(10)" >¿Quieres saber más?</a><br><a href="http://www.mozilla-hispano.org/participa">Únete</a>';
			break;
			
	}
	
	//TRACK ANALYTICS EVENT
	_gaq.push(['_trackEvent', 'Infografía MSG', 'Infografía MSG', 'Infografía MSG']);
	
	$('#msgIco').html(img);
	$('#msgTitle').html(title);
	//$('#msgText').html(msg);
	$('#msgText').html('');
	$('#msgLink').html(linkjoin);

}

function trackDownloadVideoLink(videoid)
{
	//TRACK ANALYTICS EVENT
	_gaq.push(['_trackEvent', 'DOWLOAD FF ANDROID VIDEO'+videoid, 'DOWLOAD FF ANDROID VIDEO'+videoid, 'DOWLOAD FF ANDROID VIDEO'+videoid ]);
}


function openJoinus(linkOption)
{
	var title = '';
	var img = '';
	
	switch (linkOption)
	{
		case 1:
			//Noticias
			title = 'Noticias';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Noticias';
			break;
		case 2:
			//Creatividad
			title = 'Creatividad';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Equipo_creativo';
			break;
		case 3:
			//Difusión 
			title = 'Difusión';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Difusi%C3%B3n';
			break;
		case 4:
			//Documentacion 
			title = 'Documentacion';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Documentacion';
			break;
		case 5:
			//Laboratorio 
			title = 'Laboratorio';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Labs';
			break;
		case 6:
			//Localización 
			title = 'Localización';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Localizaci%C3%B3n';
			break;
		case 7:
			//Complementos 
			title = 'Complementos';
			linkjoin = 'https://developer.mozilla.org/es/docs/Extensions?redirectlocale=es&redirectslug=Extensiones';
			break;
		case 8:
			//Control Calidad 
			title = 'Control Calidad ';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Control_de_calidad';
			break;
		case 9:
			//Asistencia 
			title = 'Asistencia';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Asistencia';
			break;
		case 10:
			//Administracion 
			title = 'Administracion';
			linkjoin = 'https://www.mozilla-hispano.org/documentacion/Administraci%C3%B3n_t%C3%A9cnica';
			break;
			
	}
	
	window.open( linkjoin, title, "width=1200,height=800,location=no");
	return false;
	
}



function videoHoverIn(video)
{
	
	$('#playVideo'+video).fadeIn(500);
	$('#playVideo'+video).css("display","block");
	$('#videoInfo'+video).fadeIn(500);	
	$('#videoInfo'+video).css("display","block");	
}

function videoHoverOut(video)
{
	$('#playVideo'+video).fadeOut(500);
	//$('#playVideo'+video).css("display","none");
	$('#videoInfo'+video).fadeOut(500);		
	//$('#videoInfo'+video).css("display","none");	
	
}


function show_fox()
{
	//RESET POSITIONS
	
	
	
	TweenLite.to(fox_ear_r, 1, {css:{alpha:1,display:'block'}});
	TweenLite.to(fox_ear_r, 2, {css:{left:"514px"}, ease:Bounce.easeOut});
	TweenLite.to(fox_ear_r, 1, {rotationY:"+=360eg"});				
	
	TweenLite.to(fox_ear_l, 1, {css:{alpha:1,display:'block'}});
	TweenLite.to(fox_ear_l, 1, {rotationY:"+=360deg"});
	
	TweenLite.to(fox_body1, 1, {css:{alpha:1,display:'block'}});
	TweenLite.to(fox_body2, 1, {css:{alpha:1,display:'block'}});
	TweenLite.to(fox_body3, 1, {css:{alpha:1,display:'block'}});
	TweenLite.to(fox_tail, 1, {css:{alpha:1,display:'block'}});
	
	TweenLite.to(fox_body1, 2, {css:{left:"332px"}, ease:Bounce.easeOut});
	TweenLite.to(fox_tail, 1, {rotationY:"+=180deg"});
}

function hide_fox()
{
	TweenLite.to(fox_ear_r, 2, {css:{left:"1024px"}, ease:Bounce.easeOut});
	TweenLite.to(fox_ear_r, 1, {rotationY:"-=360eg"});	
	TweenLite.to(fox_ear_r, 1, {css:{alpha:0,display:'none'}});
	//TweenLite.to(fox_ear_r, 1, {rotationY:"+=360deg"});
	
	/*
	TweenLite.to(fox_ear_r, 1, {x:0 ,rotationX:"+=360eg",rotationY:"+=360eg",alpha:1, ease:Back.easeInOut, delay:1.5+.08*i ,onComplete: function(){
			TweenLite.to(fox_ear_l, 1, {css:{rotationY:0}});	
		}

	});
	*/
	
	TweenLite.to(fox_ear_l, 1, {rotationY:"-=360deg"});
	TweenLite.to(fox_ear_l, 1, {css:{alpha:0,display:'none'}});
	
	
	TweenLite.to(fox_body1, 1, {css:{alpha:0,display:'none'}});
	TweenLite.to(fox_body2, 1, {css:{alpha:0,display:'none'}});
	TweenLite.to(fox_body3, 1, {css:{alpha:0,display:'none'}});
	TweenLite.to(fox_tail, 1, {css:{alpha:0,display:'none'}});
	
	TweenLite.to(fox_body1, 2, {css:{left:"0px"}, ease:Bounce.easeOut});
	TweenLite.to(fox_tail, 1, {rotationY:"-=180deg"});
	
}

function setAjax()
{
	var objAjax=false;
	try {
	/*Para navegadores distintos a internet explorer*/
	objAjax = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
	try {
	 /*Para explorer*/
	 objAjax = new ActiveXObject("Microsoft.XMLHTTP");
	 }
	 catch (E) {
	 objAjax = false;
	}
	}

	if (!objAjax && typeof XMLHttpRequest!='undefined') {
	objAjax = new XMLHttpRequest();
	}
	return objAjax;

}

