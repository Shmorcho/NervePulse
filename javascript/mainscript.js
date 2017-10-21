function makeString(p){

	var str = "";
	for(var i=0;i<p.length-2;i++)
	{
		str += p[i];
	}
	return str;
}

var fscr = false;
function goFull(){
	console.log("neha");
	var elem = document.getElementsByTagName("html")[0];
	if(elem.webkitRequestFullScreen && fscr == false){
  		elem.webkitRequestFullScreen();
  		//var p = screen.orientation.lock("landscape");

  		fscr = true;
  	}

  	else if(document.webkitExitFullscreen && fscr == true) {
  		console.log("Help me");
  		document.webkitExitFullscreen();
  		fscr = false;

  	}
  	console.log(document.webkitExitFullscreen);
}


var table = {};
table['eye'] = 0;
table['eye'] = 0;
table['eye'] = 0;
table['eye'] = 0;

var flag = false;
var nname = "";
function clickedElement(el){
	var name = $(el).attr('data-key');
	console.log("---- " + name + "--------");

	if($("#bot").mapster('get', name)==false)
	{
		//window.location = "https://gmail.com";
		console.log(name);
		/*$('#' + name).css("display", "block");*/
		$("#" + name).css("height",window.innerHeight * 0.9);
		$("#" + name).css("top",(window.innerHeight * 0.1) / 2);
		flag = true;
		nname = "#" + name;
		$("#" + name).fadeIn();
	}
}

function closeInfo(el){
	//$(el).parent().css("display","none");
	flag=false;
	$(el).parent().fadeOut();
	//var unsetname = "#" + $(el).parent().attr('id');
	/*$("#bot")
	.mapster({
		mapKey: 'data-key'
	})
	.mapster('set',false,'eye');*/
	$('area').mapster('set',false);


	/*$("#bot").mapster('set',false,'bigleg');
	$("#bot").mapster('set',false,'smallleg');
	$("#bot").mapster('set',false,'tarea');
	$("#bot").mapster('set',false,'needle');*/

}



$(document).ready(function(){

	/*var halfWidth = window.innerWidth / 2;
	var halfHeight = window.innerHeight / 2;*/
	
	//console.log(elem.webkitRequestFullScreen);
	
  	/*if(elem.webkitRequestFullScreen){
  		elem.webkitRequestFullScreen();
  	}*/
	
	var halfHeight, halfWidth;
	var imageHeight = $('#bot').height();
	var imageWidth = $('#bot').width();
	var navigationHeight = $('#goback').height() + Number(makeString($('#goback').css('padding-top'))) + Number(makeString($('#goback').css('padding-bottom')));
	console.log("Navigation height: " + navigationHeight);
	halfHeight = ($(window).height() - navigationHeight) * 0.8; 

	//$('#bot').mapster('resize', 200, 0,0);
	//$('#bot').css("height", "");
	//$('#bot').css("height", halfHeight);




	$('#bot').mapster({
		fillColor: '009790',
		fillOpacity: 0.5,
		//wrapClass: '.mapsterst'
		//wrapClass: true
		mapKey: 'data-key'



	});




	//$('#bot').css("display","inline-block");
	/*document.getElementById("#mapster_wrap_0").classList.add('mapsterst');*/
	//$('#bot').parent().css("padding-top", (window.innerHeight - navigationHeight - imageHeight) / 2);
	//$('#bot').parent().css("height", $("#photocontainer").height() - ((window.innerHeight - navigationHeight - imageHeight) / 2));
	//doResize();




		imageHeight = $('#bot').height();
		imageWidth = $('#bot').width();
		navigationHeight = $('#goback').height() + Number(makeString($('#goback').css('padding-top'))) + Number(makeString($('#goback').css('padding-bottom')));

		//if(imageWidth/window.innerWidth > imageHeight/(window.innerHeight - navigationHeight))
		if(window.innerWidth<=window.innerHeight)
		{
			halfWidth = $(window).width() * 0.8;
			halfHeight=0;
			console.log("yes1");
			/*console.log($("#bot").height());
			console.log($("#bot").width());*/
			//console.log(window.innerWidth)
			$("#bot").css("width", (($(window).width() * 0.8).toString() + "px"));
			console.log($("#bot").width());
		}
		else{
			halfHeight = ($(window).height() - navigationHeight) * 0.8;
			halfWidth = 0;
			console.log("yes2");
			$("#bot").css("height", (($(window).height() * 0.8).toString() + "px"));
		}
		

		$('#bot').mapster('resize', halfWidth, halfHeight, 0);
		
		//window.alert(window.innerHeight + " " + $(window).height());
		
		imageHeight = $('#bot').height();
		console.log(imageHeight);
		imageWidth = $('#bot').width();
		navigationHeight = $('#goback').height() + Number(makeString($('#goback').css('padding-top'))) + Number(makeString($('#goback').css('padding-bottom')));
		var sstr = ((window.innerHeight - navigationHeight).toString() + "px");
		//console.log("prom: " + sstr);
		$("#photocontainer").css("height", ((window.innerHeight - navigationHeight).toString() + "px"));
		console.log($("#photocontainer").height());
		//$("#bot").css("width", (window.innerWidth * 0.8).toString() + "px");
		//$('#bot').parent().css("height", $("#photocontainer").height() - ((window.innerHeight - navigationHeight - imageHeight) / 2));
		//$('#bot').parent().css("padding-top", (window.innerHeight - navigationHeight - imageHeight) / 2);
		//$('#bot').parent().css("height", $("#photocontainer").height() - ((window.innerHeight - navigationHeight - imageHeight) / 2));

		//$("#bot").parent().css("padding-top",($("#photocontainer").height() - $("#bot").height()) / 2);
		var paddt = ($("#photocontainer").height() - $("#bot").height()) / 2;
		console.log("----");
		console.log($("#photocontainer").height());
		console.log($("#bot").height());
		console.log(($("#photocontainer").height() - $("#bot").height()) / 2)
		console.log("----");
		//$("#bot").parent().css("padding-top", paddt);
		$("#photocontainer").css("padding-top", paddt);
		console.log($("#bot").parent().attr("id"));
		//$("#bot").parent().css("height",($("#photocontainer").height() - Number(makeString($("#bot").parent().css("padding-top")))));
		$("#photocontainer").css("height", ($("#photocontainer").height() - paddt).toString() + "px");
		console.log(window.innerHeight - navigationHeight);
		console.log(($("#photocontainer").height() - Number(makeString($("#bot").parent().css("padding-top")))));
		console.log($("#bot").parent().height());
		//$("#photocontainer div canvas").css("top", paddt);
		//$("#bot").css("top", paddt);
		console.log(paddt);
		//$("#photocontainer").css("padding-top", );

	//console.log(navigationHeight);
	$(window).resize(function(){
		console.log("nne");
		/*halfWidth = window.innerWidth / 2;
		halfHeight = window.innerHeight / 2;*/
		//$("#photocontainer").css("padding-top", "0px");
		imageHeight = $('#bot').height();
		console.log(imageHeight);
		imageWidth = $('#bot').width();
		navigationHeight = $('#goback').height() + Number(makeString($('#goback').css('padding-top'))) + Number(makeString($('#goback').css('padding-bottom')));

		if(imageWidth/window.innerWidth > imageHeight/(window.innerHeight - navigationHeight))
		{
			halfWidth = window.innerWidth * 0.8;
			halfHeight=0;
		}
		else{
			halfHeight = (window.innerHeight - navigationHeight) * 0.8;
			halfWidth = 0;
		}
		
		
		$('#bot').mapster('resize', halfWidth, halfHeight, 0);
		imageHeight = $('#bot').height();
		imageWidth = $('#bot').width();
		navigationHeight = $('#goback').height() + Number(makeString($('#goback').css('padding-top'))) + Number(makeString($('#goback').css('padding-bottom')));
		var sstr = ((window.innerHeight - navigationHeight).toString() + "px");
		console.log("prom: " + sstr);
		$("#photocontainer").css("height", ((window.innerHeight - navigationHeight).toString() + "px"));
		//$('#bot').parent().css("height", $("#photocontainer").height() - ((window.innerHeight - navigationHeight - imageHeight) / 2));
		//$('#bot').parent().css("padding-top", (window.innerHeight - navigationHeight - imageHeight) / 2);
		//$('#bot').parent().css("height", $("#photocontainer").height() - ((window.innerHeight - navigationHeight - imageHeight) / 2));

		//$("#bot").parent().css("padding-top",($("#photocontainer").height() - $("#bot").height()) / 2);
		var paddt = ($("#photocontainer").height() - $("#bot").height()) / 2;
		console.log($("#bot").height());
		/*$("#bot").parent().css("padding-top", paddt);*/
		$("#photocontainer").css("padding-top", paddt);
		//$("#bot").parent().css("height",($("#photocontainer").height() - paddt));
		$("#photocontainer").css("height", ($("#photocontainer").height() - paddt).toString() + "px");
		//$("#photocontainer div canvas").css("top", paddt);
		//$("#bot").css("top", paddt);
		console.log(Number(makeString($("#bot").parent().css("padding-top"))));
		console.log(($("#bot").parent().height() - $("#bot").height()) / 2);	
		console.log("Sum: " + ((window.innerHeight - navigationHeight - imageHeight) / 2));
		console.log("innerheight: " + window.innerHeight);
		console.log("navheight: " + navigationHeight);
		console.log("imageHeight: " + imageHeight);
		console.log(paddt);
		if(flag==true){
			$(nname).css("height",window.innerHeight * 0.9);
			$(nname).css("top",(window.innerHeight * 0.1) / 2);
		}

//		$('#bot').parent().css("height", $("#photocontainer").height() - ((window.innerHeight - navigationHeight - imageHeight) / 2));

	});
	//$('#bot').parent().css("margin-top", 50);
});