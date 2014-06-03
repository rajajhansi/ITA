var message="";
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

document.oncontextmenu=new Function("return false");
document.write('<div id="Layer1" style="position:absolute; width:285px; height:46px; z-index:1; left: 0; top: 96"><img src="images/layout1_03.gif" width="265" height="49"></div>');

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
	
}


function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			//alert([changeImages.arguments[i]].src);
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}


var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		layout1_01_layout1_05_over = newImage("images/layout1_01-layout1_05_over.gif");
		layout1_01_layout1_05_sel = newImage("images/layout1_01-layout1_05_sel.gif");
		layout1_05_over = newImage("images/layout1_05-over.gif");
		layout1_05_sel = newImage("images/layout1_05-sel.gif");
		layout1_07_over = newImage("images/layout1_07-over.gif");
		layout1_07_sel = newImage("images/layout1_07-sel.gif");
		layout1_09_over = newImage("images/layout1_09-over.gif");
		layout1_09_sel = newImage("images/layout1_09-sel.gif");
		layout1_10_over = newImage("images/layout1_10-over.gif");
		layout1_10_sel = newImage("images/layout1_10-sel.gif");
		layout1_11_over = newImage("images/layout1_11-over.gif");
		layout1_11_sel = newImage("images/layout1_11-sel.gif");
		layout1_12_sel = newImage("images/layout1_12-sel.gif");
		layout1_12_over = newImage("images/layout1_12-over.gif");
		layout1_13_over = newImage("images/layout1_13-over.gif");
		layout1_13_sel = newImage("images/layout1_13-sel.gif");
		layout1_14_over = newImage("images/layout1_14-over.gif");
		layout1_14_sel = newImage("images/layout1_14-sel.gif");
		layout1_15_over = newImage("images/layout1_15-over.gif");
		layout1_15_sel = newImage("images/layout1_15-sel.gif");
		layout1_16_over = newImage("images/layout1_16-over.gif");
		layout1_16_sel = newImage("images/layout1_16-sel.gif");
		reg = newImage("images/register.gif");
		reg_over = newImage("images/register-over.gif");				
		preloadFlag = true;
	}
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

var rand;
		

function In(p)
{
window.status =p;
return true;
}

function out()
{
window.status ="::California Tamil Academy::";
return true;
}
	
function getheader(info)
{

var text = '<TABLE WIDTH=165 BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD id=menu1><A HREF="index.html" ONMOUSEOVER="changeImages(\'layout1_05\',\'images/layout1_05-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_05\',\'images/layout1_05.gif\'); out(); return true;"><IMG NAME="layout1_05" SRC="images/layout1_05.gif" WIDTH=174 HEIGHT=36 BORDER=0 ALT="Home"></A></TD></TR><TR><TD id=menu2 width="165"><A HREF="aboutus.html" ONMOUSEOVER="changeImages(\'layout1_07\',\'images/layout1_07-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_07\',\'images/layout1_07.gif\'); out(); return true;"><IMG NAME="layout1_07" SRC="images/layout1_07.gif" WIDTH=165 HEIGHT=35 BORDER=0 ALT="About Us"></A></TD></TR><TR><TD id=menu3 width="165"><A HREF="board.html" ONMOUSEOVER="changeImages(\'layout1_09\',\'images/layout1_09-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_09\',\'images/layout1_09.gif\'); out(); return true;"><IMG NAME="layout1_09" SRC="images/layout1_09.gif" WIDTH=165 HEIGHT=32 BORDER=0 ALT="Board"></A></TD></TR><TR><TD id=menu4 width="165"><A HREF="academics.html" ONMOUSEOVER="changeImages(\'layout1_10\',\'images/layout1_10-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_10\',\'images/layout1_10.gif\'); out(); return true;"><IMG NAME="layout1_10" SRC="images/layout1_10.gif" WIDTH=165 HEIGHT=36 BORDER=0 ALT="Academics"></A></TD></TR><TR><TD id=menu5 width="165"><A HREF="registration.html" ONMOUSEOVER="changeImages(\'layout1_11\',\'images/layout1_11-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_11\',\'images/layout1_11.gif\'); out(); return true;"><IMG NAME="layout1_11" SRC="images/layout1_11.gif" WIDTH=165 HEIGHT=34 BORDER=0 ALT="Registration"></A></TD></TR><TR><TD id=menu6 width="165"><A HREF="shedule.html" ONMOUSEOVER="changeImages(\'layout1_12\',\'images/layout1_12-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_12\',\'images/layout1_12.gif\'); out(); return true;"><IMG NAME="layout1_12" SRC="images/layout1_12.gif" WIDTH=165 HEIGHT=35 BORDER=0 ALT="Schedule"></A></TD></TR><TR><TD id=menu7 width="165"><A HREF="location.html" ONMOUSEOVER="changeImages(\'layout1_13\',\'images/layout1_13-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_13\',\'images/layout1_13.gif\'); out(); return true;"><IMG NAME="layout1_13" SRC="images/layout1_13.gif" WIDTH=165 HEIGHT=34 BORDER=0 ALT="Locations And Timings"></A></TD></TR><TR><TD id=menu8 width="165"><A HREF="resources.html" ONMOUSEOVER="changeImages(\'layout1_14\',\'images/layout1_14-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_14\',\'images/layout1_14.gif\'); out(); return true;"><IMG NAME="layout1_14" SRC="images/layout1_14.gif" WIDTH=165 HEIGHT=33 BORDER=0 ALT="Resources"></A></TD></TR><TR><TD id=menu9 width="165"><A HREF="tuv.html" ONMOUSEOVER="changeImages(\'layout1_15\',\'images/layout1_15-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_15\',\'images/layout1_15.gif\'); out(); return true;"><IMG NAME="layout1_15" SRC="images/layout1_15.gif" WIDTH=165 HEIGHT=35 BORDER=0 ALT="Virtual University"></A></TD></TR><TR><TD id=menu10 width="165"><A HREF="contacts.html" ONMOUSEOVER="changeImages(\'layout1_16\',\'images/layout1_16-over.gif\'); out(); return true;" ONMOUSEOUT="changeImages(\'layout1_16\',\'images/layout1_16.gif\'); out(); return true;"><IMG NAME="layout1_16" SRC="images/layout1_16.gif" WIDTH=165 HEIGHT=36 BORDER=0 ALT="Contact Us"></A></TD></TR><TR><TD width="165"> <IMG SRC="images/spacer.gif" WIDTH=165 HEIGHT=1 ALT=""></TD></TR></TABLE>'
	//document.getElementById("cahead").innerHTML='<img src="images/layout1_01.gif" width="770" height="104"><div id="log" style="position:absolute; width:80%; height:20; z-index:1; left: 0; top: 80" align=right><a href="http://65.36.226.143/cta/" target="blank"><img src="images/login.gif" width="97" height="16" border="0" alt="Click Here to login"></a></div>'
	document.getElementById("cahead").innerHTML='<table width="100%" border="0" cellpadding="0" cellspacing="0" background="images/layout1_02.gif"><tr><td width="75" align="left"><img src="images/logo.gif" width="75" height="96"></td><td width="396"  align="center"><img src="images/text.gif" width="396" height="96"></td><td  align="right" width="301"><img src="images/ctaq_4_03.gif" width="301" height="96"></td></tr></table><div id="log" style="position:absolute; width:80%; height:20; z-index:1; left: 0; top: 80" align=right><a href="http://www.catamilacademy.org/cta" target="blank"><img src="images/login.gif" width="97" height="16" border="0" alt="Click Here to login"></a></div>';
	
	document.getElementById("head").innerHTML = text;
	//cahead.innerHTML='<img src="images/layout1_01.gif" width="740" height="104">'
	document.getElementById("footer").innerHTML ="<TABLE class=text1 cellSpacing=0 cellPadding=0 width=96% align=center border=0><TBODY><TR ><TD valign =middle><A class=sitemap href='sitemap.html'>Sitemap</A> | <A class=sitemap href='index.html'>Home</A></TD><TD valign =middle align=center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Powered by <A class=sitemap href='http://www.zaxis.co.in' target='blank'>Z Axis Innovations Pvt Ltd</a>. India.</TD><TD valign =middle><DIV align=right><A class=sitemap href='disclaim.html'>Disclaimer</A><b> | </B><A class=sitemap href='privacy.html'>Privacy Note</A></DIV></TD></TR></TBODY></TABLE></form>";
}


function menu(page)
	{
	//alert(page);
	var img = new Array();
	img[1] = "layout1_05-sel.gif";
	img[2] = "layout1_09-sel.gif";
	img[3] = "layout1_16-sel.gif";
	img[4] = "layout1_07-sel.gif";
	img[5] = "layout1_12-sel.gif";
	img[6] = "layout1_11-sel.gif";
	img[7] = "layout1_10-sel.gif";
	img[8] = "layout1_14-sel.gif";
	img[9] = "layout1_15-sel.gif";
	img[10] ="layout1_13-sel.gif";
	switch(page)
		{
		case 1:
				document.getElementById("menu1").innerHTML = '<IMG SRC="images/'+img[1]+'" ALT="">'
				self.moveTo(0,0); self.resizeTo(screen.availWidth,screen.availHeight);
				break;
		case 2:
				document.getElementById("menu3").innerHTML = '<IMG SRC="images/'+img[2]+'" ALT="">'
				break;
		case 3:
				document.getElementById("menu10").innerHTML = '<IMG SRC="images/'+img[3]+'" ALT="">'
				break;
		case 4:
				document.getElementById("menu2").innerHTML = '<IMG SRC="images/'+img[4]+'" ALT="">'
				break;
		case 5:
				document.getElementById("menu6").innerHTML = '<IMG SRC="images/'+img[5]+'" ALT="">'
				break;
		case 6:
				document.getElementById("menu5").innerHTML = '<IMG SRC="images/'+img[6]+'" ALT="">'
				break;
		case 7:
				document.getElementById("menu4").innerHTML = '<IMG SRC="images/'+img[7]+'" ALT="">'
				break;
		case 8:
				document.getElementById("menu8").innerHTML = '<IMG SRC="images/'+img[8]+'" ALT="">'
				break;
		case 9:
				document.getElementById("menu9").innerHTML = '<IMG SRC="images/'+img[9]+'" ALT="">'
				break;
		case 10:
				document.getElementById("menu7").innerHTML = '<IMG SRC="images/'+img[10]+'" ALT="">'
				break;				
		}

	}
