

function clicked( e )
{        
	
	// check if "znesek" is right form

	if (isNaN(parseInt(document.getElementsByName("znesek")[0].value)))
	{
		document.getElementById("warningsVar").innerHTML = "Napačen zapis zneska";
		e.preventDefault();
	}

	// check property of choose
	else if (document.getElementById("monthR").checked && document.getElementById("monthP").value == "")
	{
		
		document.getElementById("warningsVar").innerHTML = "Izberite mesec";
		e.preventDefault();
	} 

	else if (document.getElementById("dateR").checked && document.getElementById("dateP").value == "")
	{

		document.getElementById("warningsVar").innerHTML = "Izberite datum";
		e.preventDefault();
	}

	// if everything is right

	else
	{
		document.getElementById("warningsVar").innerHTML = "&nbsp;";
	}

	

	
} 



function start (e)
{
	document.getElementById( "potrdiV" ).addEventListener("click", clicked, false );
	
}

window.addEventListener("load", start, false);


