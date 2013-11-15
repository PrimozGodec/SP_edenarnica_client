

function processMouseMove( e )
{        
	
	
	
	// check if surname is valid
	var str = document.getElementsByName("priimek")[0].value ;
	//look for "Hello"
	var patt = /^[A-ZŠČĆŽĐ]{1}[a-zčšžđć]*$/;
	var result = patt.test(str);

	// check if name is valid
	var str = document.getElementsByName("ime")[0].value ;
	//look for "Hello"
	var patt = /^[A-ZŠČĆŽĐ]{1}[a-zčšžđć]*$/;
	var result1 = patt.test(str);

	if (!result1)
	{
		document.getElementById("warning").innerHTML = "Napačen zapis imena!";
		e.preventDefault();
	}

	else if (!result)
	{
		document.getElementById("warning").innerHTML = "Napačen zapis priimka!";
		e.preventDefault();
	}

	// password mach checking	
	else if (document.getElementsByName("newpass")[0].value != document.getElementsByName("newpass2")[0].value)
	{
		
		document.getElementById("warning").innerHTML = "Gesli se ne ujemata!";
		e.preventDefault();
	}

	else 
	{
		document.getElementById("warning").innerHTML = "&nbsp;";
	}

  
} 



function start (e)
{
	document.getElementById( "registracijaB" ).addEventListener("click", processMouseMove, false );
}

window.addEventListener("load", start, false);


