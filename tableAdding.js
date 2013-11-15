function input(oz, zn, dt, op)
{
	this.datum=dt;
	this.oznaka=oz;
	this.znesek=zn;
	this.opis=op;
}

function date(m, d, y)
{
	this.day=d;
	this.mount=m;
	this.year=y;

	this.instring = instring;
	function instring()
	{
		return this.day + ". " + this.mount + ". " + this.year;
	}
}

function createTestObjectsPrihodki ()
{
	var date1 = new date (10, 3, 2013);
	var date2 = new date (10, 15, 2013);
	
	var in1 = new input ("Stipendija", 180, date1, "Stipendija za mesec september.");
	var in2 = new input ("Zasluzek", 200, date2, "Delo v podjetju firma d.o.o.");
	
	var mylist = new Array(2);

	mylist[0] = in1;

	mylist[1] = in2;
	
	return mylist;
}

function createTestObjectsOdhodki ()
{
	var xmlDoc = loadXMLDoc("odhodki.xml");

	var odhs = xmlDoc.getElementsByTagName ("odhodek");
	var mylist = new Array(odhs.length);
	for (var i = 0; i<odhs.length; i++)
	{
		var date1 = new date (odhs[i].getElementsByTagName("mesec")[0].childNodes[0].nodeValue,
					odhs[i].getElementsByTagName("dan")[0].childNodes[0].nodeValue,
					 odhs[i].getElementsByTagName("leto")[0].childNodes[0].nodeValue);
		
	
		var in1 = new input (odhs[i].getElementsByTagName("oznaka")[0].childNodes[0].nodeValue,
					odhs[i].getElementsByTagName("znesek")[0].childNodes[0].nodeValue,
					date1,
					odhs[i].getElementsByTagName("opis")[0].childNodes[0].nodeValue);
			

		

		mylist[i] = in1;
		
	}
	
	return mylist;
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

function fillTableHTML (list)
{

	var tbody = document.getElementById( "dataTab" );
  
	for ( var i = 0; i < list.length; ++i )
	{
		var x;
		var row = document.createElement( "tr" );
	       	
		for ( x in list[i] )
		{

			var cell = document.createElement( "td" );
			
			if (x == "znesek")
				cell.innerHTML = list[i][x] + " €";
			else if (x == "datum")
				cell.innerHTML = list[i][x].instring();
			else
				cell.innerHTML = list[i][x];
			
			
			row.appendChild( cell );
	      	} // end for

	      	tbody.appendChild( row );
   	} // end for

}

var fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

if (fileName == "prihodki.html")
	mylist = createTestObjectsPrihodki ();
else if (fileName == "odhodki.html")
	mylist = createTestObjectsOdhodki ();


fillTableHTML (mylist);
