function initPrintLink () {
	$("#printIcon").click (function () {
		window.print ();
		return false;
	});
}

/*
function initTopMenu () {

	// here comes the hack, assume we're jumping ports from
	// xxx80 to xx443 so if we add 363 to the port, we'll be ok
	var host = location.host;
	var port = "";
	
	if (location.protocol == "http:") {
		var i = host.indexOf (":");
		if (i != -1) {
			host = host.substring (0, i);
		}

		var p = location.port;
		
		if (p.length > 0) {
			p = parseInt (location.port, 10) + 363;
			port = ":" + p;
		}
		
	}	
	var ie6fix = "https://" + host + port + "/layout/ie6-https-fix.html";
	
	//alert ("ie6fix: \"" + ie6fix + "\"");

	
	$("#topMenu").superfish ({
			hoverClass:    'sfHover',
			delay:       200,                            // 1/5th second delay on mouseout 
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
			speed:       200,			                          // faster animation speed 
			autoArrows:  false,                           // disable generation of arrow mark-up 
			dropShadows: false                            // disable drop shadows 

	}).find ('ul').bgiframe ({
		src: ie6fix
	});	// fix the select form element z-index issue in Internet Explorer 6
	
	return false;	
}
*/

function initToggleableLists () {

	$(".publicationListToggle").each (function (i) {
		var idStr = this.id;
						
		var cutoff = idStr.indexOf ("toggleLink");

		var listEl = "#" + idStr.substr (0, cutoff) + "toggleableList li.hidden";
		
		$(this).bind ("click",  listEl, function () {
			
			var s = $(this).html ();
			if ("Show all items" == s) {
				$(this).html ("Show selected items");
			} else {
				$(this).html ("Show all items");			
			}

			$(listEl).animate ({
				opacity: 'toggle', 
				height: 'toggle'
			}, 1000);
		
			return false;
		});		
	});
}


function initSlideshow (d, s, doText) {

	if (doText) {
		$('#slides').cycle ({
			delay: d,
			speed: s,
			before: changeSlide
		});
	} else {
		$('#slides').cycle ({
			delay: d,
			speed: s
		});
	}
	
	return false;
}


function initCorners (sel, cornerStyle) {
	$(sel).corner (cornerStyle);
}

function initTabs (sel) {
	$(sel).tabify ({
		activeClass: "selected",
		hidingClass: "hidden",
		initialContent: "acTable",
		tabMap: "acTab->acTable;dhTab->dhTable;ioTab->ioTable;psTab->psTable;tzTab->tzTable"
	});
}


function fixEmailAddresses () {
	$('span.mailme').each (function (index) {
		var at = / at /;
		var dot = / dot /g;
		var addr = $(this).text().replace(at,"@").replace(dot,".");
		$(this).after('<a href="mailto:'+addr+'" title="Send an email">'+ addr +'</a>')
		.hover(function(){window.status="Send an email";}, function(){window.status="";});
		$(this).remove();
	});
}


function initQr () {
  //hide the all of the element with class msg_body
  $(".qr_msg_body").hide ();
  
  //toggle the componenet with class msg_body
  $(".qr_msg_head").click (function() {
	$(".qr_msg_body").slideToggle (400);
  });
}
