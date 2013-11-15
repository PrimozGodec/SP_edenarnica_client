function start (e)
{
	document.getElementById( "slo" ).addEventListener("click", sloLoad, false );
	document.getElementById( "eng" ).addEventListener("click", enLoad, false );
	
}
	

function sloLoad (e)
{
	var xmlDoc = loadXMLDoc ("language.xml");

	document.getElementById( "heading" ).innerHTML = xmlDoc.getElementsByTagName("heading")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;
	document.getElementById( "head1" ).innerHTML = xmlDoc.getElementsByTagName("head1")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;
	document.getElementById( "head2" ).innerHTML = xmlDoc.getElementsByTagName("head2")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;
	document.getElementById( "head3" ).innerHTML = xmlDoc.getElementsByTagName("head3")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;

	document.getElementById( "par1" ).innerHTML = xmlDoc.getElementsByTagName("par1")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;
	document.getElementById( "par2" ).innerHTML = xmlDoc.getElementsByTagName("par2")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;
	document.getElementById( "par3" ).innerHTML = xmlDoc.getElementsByTagName("par3")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;

	document.getElementById( "loginT" ).innerHTML = xmlDoc.getElementsByTagName("login")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;
	document.getElementById( "login" ).setAttribute ("value", xmlDoc.getElementsByTagName("login")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue);

	document.getElementById( "donthave" ).innerHTML = xmlDoc.getElementsByTagName("donthave")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;

	document.getElementById( "password" ).innerHTML = xmlDoc.getElementsByTagName("password")[0].getElementsByTagName("sl")[0].childNodes[0].nodeValue;
}

function enLoad (e)
{
	
	var xmlDoc = loadXMLDoc ("language.xml");

	document.getElementById( "heading" ).innerHTML = xmlDoc.getElementsByTagName("heading")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;
	document.getElementById( "head1" ).innerHTML = xmlDoc.getElementsByTagName("head1")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;
	document.getElementById( "head2" ).innerHTML = xmlDoc.getElementsByTagName("head2")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;
	document.getElementById( "head3" ).innerHTML = xmlDoc.getElementsByTagName("head3")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;

	document.getElementById( "par1" ).innerHTML = xmlDoc.getElementsByTagName("par1")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;
	document.getElementById( "par2" ).innerHTML = xmlDoc.getElementsByTagName("par2")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;
	document.getElementById( "par3" ).innerHTML = xmlDoc.getElementsByTagName("par3")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;

	document.getElementById( "loginT" ).innerHTML = xmlDoc.getElementsByTagName("login")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;
	document.getElementById( "login" ).setAttribute ("value", xmlDoc.getElementsByTagName("login")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue);

	document.getElementById( "donthave" ).innerHTML = xmlDoc.getElementsByTagName("donthave")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;

	document.getElementById( "password" ).innerHTML = xmlDoc.getElementsByTagName("password")[0].getElementsByTagName("en")[0].childNodes[0].nodeValue;
}

function loadXMLDoc(dname)
{
	if (window.XMLHttpRequest)
	{
   		xhttp=new XMLHttpRequest();
   	}
 	else
   	{
   		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
   	}
	xhttp.open("GET",dname,false);
	xhttp.send();
	return xhttp.responseXML;
 } 

window.addEventListener("load", start, false);
