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
	var date1 = new date (10, 3, 2013);
	var date2 = new date (10, 15, 2013);
	
	var in1 = new input ("Nakup", 15, date1, "Nakup v merkatorju. Stevilka racuna 123");
	var in2 = new input ("Gorivo", 50, date2, "Nakup na petrolu");
	var in3 = new input ("Mobitel", 12.99 , date2, "Placilo racuna mobitelu");	

	var mylist = new Array(3);

	mylist[0] = in1;
	mylist[1] = in2;
	mylist[2] = in3;
	
	return mylist;
}

function fillTableHTML (list, tabId)
{

	var tbody = document.getElementById( tabId );
  
	for ( var i = 0; i < list.length; ++i )
	{
		
		var row = document.createElement( "tr" );
	       	
		var cell = document.createElement( "td" );
		cell.innerHTML = list[i].oznaka;
		cell.setAttribute("style", "width: 70%")
		row.appendChild( cell );

		cell = document.createElement( "td" );	
		cell.innerHTML = list[i].znesek + " €";
		cell.setAttribute("style", "width: 30%")
		row.appendChild( cell );	      

	      	tbody.appendChild( row );
   	} // end for

}


mylistPrih = createTestObjectsPrihodki ();
mylistOdh = createTestObjectsOdhodki ();


fillTableHTML (mylistPrih, "tabPrih");
fillTableHTML (mylistOdh, "tabOdh");
