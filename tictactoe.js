
// p1...p9 pola w grze ( ich zawartosc: p1 = 'n'; nic lub 'x' lub 'o' )

var p1, p2, p3, p4, p5, p6, p7, p8, p9;

var kto, w;

document.getElementById('wygryw').style.pointerEvents = 'none';
document.getElementById("wygryw").style.display = "none";

function sprawdz () {
	
	if((p1==p2 && p2==p3 && p1!='n') ||
		(p4==p5 && p5==p6 && p4!='n') ||
		(p7==p8 && p8==p9 && p7!='n') ||
		(p1==p4 && p4==p7 && p1!='n') ||
		(p2==p5 && p5==p8 && p2!='n') ||
		(p3==p6 && p6==p9 && p3!='n') ||
		(p1==p5 && p5==p9 && p1!='n') ||
		(p3==p5 && p5==p7 && p3!='n') )
		{
		
			if (kto=='x') {
				w = "Wygrywa Kółko!";
				document.getElementById("gracz").innerHTML = w;
				document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
				document.getElementById('wygryw').style.pointerEvents = 'auto';
				document.getElementById("wygryw").style.display = "block";
				document.getElementById('wygryw').innerHTML = "JESZCZE RAZ?";
			}
			else  {
				w = "Wygrywa Krzyżyk!";
				document.getElementById("gracz").innerHTML = w;
				document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
				document.getElementById('wygryw').style.pointerEvents = 'auto';
				document.getElementById("wygryw").style.display = "block";
				document.getElementById('wygryw').innerHTML = "JESZCZE RAZ?";
			}
		}
	
	if ( p1 != 'n' && p2 != 'n' && p3 != 'n' && p4 != 'n' && p5 != 'n' && p6 != 'n' && p7 != 'n' && p8 != 'n' && p9 != 'n' ) {
		w = "Koniec gry!"
		document.getElementById("gracz").innerHTML = w;
		document.getElementById("tura").style.backgroundImage = "url('img/nic.bmp')";
		document.getElementById('wygryw').style.pointerEvents = 'auto';
		document.getElementById("wygryw").style.display = "block";
		document.getElementById('wygryw').innerHTML = "JESZCZE RAZ?";
	}
}



// ładowanie obrazków w 9 pól. Na początku puste.

function load() {
	
	document.getElementById('wygryw').style.pointerEvents = 'none';
	document.getElementById("wygryw").style.display = "none";
	document.getElementById("pole1").style.backgroundImage = "url('img/nic.bmp')";
	document.getElementById("pole2").style.backgroundImage = "url('img/nic.bmp')";
	document.getElementById("pole3").style.backgroundImage = "url('img/nic.bmp')";
	document.getElementById("pole4").style.backgroundImage = "url('img/nic.bmp')";
	document.getElementById("pole5").style.backgroundImage = "url('img/nic.bmp')";
	document.getElementById("pole6").style.backgroundImage = "url('img/nic.bmp')";
	document.getElementById("pole7").style.backgroundImage = "url('img/nic.bmp')";
	document.getElementById("pole8").style.backgroundImage = "url('img/nic.bmp')";
	document.getElementById("pole9").style.backgroundImage = "url('img/nic.bmp')";
	
	// czyja tura
	document.getElementById("gracz").innerHTML = "Tura gracza: ";
	document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";

	p1 = 'n'; p2 = 'n'; p3 = 'n';
	p4 = 'n'; p5 = 'n'; p6 = 'n';
	p7 = 'n'; p8 = 'n'; p9 = 'n';

	kto = 'o';
	
	document.getElementById('pole1').style.pointerEvents = 'auto';
	document.getElementById('pole2').style.pointerEvents = 'auto';
	document.getElementById('pole3').style.pointerEvents = 'auto';
	document.getElementById('pole4').style.pointerEvents = 'auto';
	document.getElementById('pole5').style.pointerEvents = 'auto';
	document.getElementById('pole6').style.pointerEvents = 'auto';
	document.getElementById('pole7').style.pointerEvents = 'auto';
	document.getElementById('pole8').style.pointerEvents = 'auto';
	document.getElementById('pole9').style.pointerEvents = 'auto';
}

load();

function klik1() {
	
	if(p1=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole1").style.backgroundImage = "url('img/o.bmp')";
              p1 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole1").style.backgroundImage = "url('img/x.bmp')";
             p1 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
		   
          // pole1 - nieaktywne
		  document.getElementById('pole1').style.pointerEvents = 'none';
		  
          sprawdz();
        }
}

function klik2() {
		if(p2=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole2").style.backgroundImage = "url('img/o.bmp')";
              p2 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole2").style.backgroundImage = "url('img/x.bmp')";
             p2 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
          // pole2 - nieaktywne
		   document.getElementById('pole2').style.pointerEvents = 'none';
		   
          sprawdz();
        }
}
		
function klik3() {
	
		if(p3=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole3").style.backgroundImage = "url('img/o.bmp')";
              p3 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole3").style.backgroundImage = "url('img/x.bmp')";
             p3 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
          // pole3 - nieaktywne
		   document.getElementById('pole3').style.pointerEvents = 'none';
		  
          sprawdz();
        }
}
		
function klik4() {

		if(p4=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole4").style.backgroundImage = "url('img/o.bmp')";
              p4 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole4").style.backgroundImage = "url('img/x.bmp')";
             p4 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
          // pole4 - niekatywne
		   document.getElementById('pole4').style.pointerEvents = 'none';
		  
          sprawdz();
        }
}
	
function klik5() {
	
		if(p5=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole5").style.backgroundImage = "url('img/o.bmp')";
              p5 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole5").style.backgroundImage = "url('img/x.bmp')";
             p5 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
          //pole5 - nieaktywne
		   document.getElementById('pole5').style.pointerEvents = 'none';
		  
          sprawdz();
        }
}
	
function klik6() {
	
		if(p6=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole6").style.backgroundImage = "url('img/o.bmp')";
              p6 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole6").style.backgroundImage = "url('img/x.bmp')";
             p6 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
          // pole6 - nieaktywne
		   document.getElementById('pole6').style.pointerEvents = 'none';
		  
          sprawdz();
        }
}
		
function klik7() {
	
		if(p7=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole7").style.backgroundImage = "url('img/o.bmp')";
              p7 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole7").style.backgroundImage = "url('img/x.bmp')";
             p7 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
          // pole7 - nieaktywne;
		   document.getElementById('pole7').style.pointerEvents = 'none';
		  
          sprawdz();
        }
}

function klik8() {
	
		if(p8=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole8").style.backgroundImage = "url('img/o.bmp')";
              p8 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole8").style.backgroundImage = "url('img/x.bmp')";
             p8 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
          // pole8 - nieaktywne;
		   document.getElementById('pole8').style.pointerEvents = 'none';
		  
          sprawdz();
        }
}

function klik9() {
	
		if(p9=='n')
        {
          if(kto=='o')
           {
			  document.getElementById("pole9").style.backgroundImage = "url('img/o.bmp')";
              p9 = 'o';
              kto = 'x';
              document.getElementById("tura").style.backgroundImage = "url('img/xsmall.bmp')";
           }
          else
           {
             document.getElementById("pole9").style.backgroundImage = "url('img/x.bmp')";
             p9 = 'x';
             kto = 'o';
              document.getElementById("tura").style.backgroundImage = "url('img/osmall.bmp')";
           }
          // pole9 - nieaktywne;
		   document.getElementById('pole9').style.pointerEvents = 'none';
		  
          sprawdz();
        }
}

