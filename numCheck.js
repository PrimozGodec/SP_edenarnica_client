

function clicked( e )
{        
	
	if (isNaN(parseInt(document.getElementsByName("znesek")[0].value)))
	{
		document.getElementById("warningZn").innerHTML = "Napačen zapis zneska";
		e.preventDefault();
	}
	else
	{

		document.getElementById("warningZn").innerHTML = "&nbsp";
	}
  
} 



function start (e)
{
	document.getElementById( "vnosB" ).addEventListener("click", clicked, false );
	
}

window.addEventListener("load", start, false);


