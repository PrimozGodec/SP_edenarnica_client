

function processMouseMove( e )
{        
	
	
	
	
	// password mach checking	
	if (document.getElementsByName("newpass")[0].value != document.getElementsByName("newpass2")[0].value)
	{
		
		document.getElementById("warning").innerHTML = "Gesli se ne ujemata!";
		e.preventDefault();
	}
  
} 



function start (e)
{
	document.getElementById( "registracijaB" ).addEventListener("click", processMouseMove, false );
}

window.addEventListener("load", start, false);


