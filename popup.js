function start (e)
{
	document.getElementById( "dataTab" ).addEventListener("click", processMouseClick, false );
}

function processMouseClick (e)
{

	var dialog = document.getElementById ("dialog");
	var text = e.rowIndex;
	
	
	dialog.innerHTML = "<p>Datum: 5. 1. 2013</p><p>Nakup</p><p>Znesek: 15€</p><p>Nakup v Mercatorju.</p>";
}


window.addEventListener("load", start, false);

