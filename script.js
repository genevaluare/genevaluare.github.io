var subj, exer;

document.addEventListener("DOMContentLoaded", function () {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	subj = urlParams.get('s'), exer = urlParams.get('e');
	if(subj == null || exer == null) {
		gebi('eva-generwrap').innerHTML = "<p>GENEvaluare creeaza1 exercit1ii care sunt generate de un algoritm s1i sunt asema1na1toare celor care s-au dat i1n anii anteriori. Aceste exercit1ii nu sunt aprobate de MEN! Putet1i ga1si modul i1n care sunt generate pe <a href='https://github.com/genevaluare/genevaluare.github.io'>GitHub</a>. Daca1 observat1i vreo eroare, va1 ruga1m sa1 o raportat1i!</p><p>Momentan avem exercit1ii generate la urma1toarele subiecte:</p>";
		var toret = "<ul>";
		//S1
		toret += "<li>Subiectul I<ul>";
		for(i = 1; i <= 4; ++i)
			toret += "<li><a href='index.html?s=1&e=" + i + "'>Exercit1iul " + i + "</a></li>";
		toret += "</ul>";
		toret += "</ul>";
		gebi('eva-generwrap').innerHTML += toret;
	} else {
		gebi('eva-generloc').innerHTML = "<i style='display: block; text-align: center;'><sup>GEN</sup><a href='index.html'>Evaluare</a> &#187; Subiectul " + subj + " &#187; Exercit1iul " + exer + "</i>";
		generateSubjects();
	}

	document.body.innerHTML = document.body.innerHTML.replace(/a1/g, "&#259;");
	document.body.innerHTML = document.body.innerHTML.replace(/a2/g, "&#226;");
	document.body.innerHTML = document.body.innerHTML.replace(/i1/g, "&#238;");
	document.body.innerHTML = document.body.innerHTML.replace(/s1/g, "&#351;");
	document.body.innerHTML = document.body.innerHTML.replace(/t1/g, "&#355;");
	document.body.innerHTML = document.body.innerHTML.replace(/A1/g, "&#258;");
	document.body.innerHTML = document.body.innerHTML.replace(/A2/g, "&#194;");
	document.body.innerHTML = document.body.innerHTML.replace(/I1/g, "&#206;");
	document.body.innerHTML = document.body.innerHTML.replace(/S1/g, "&#350;");
	document.body.innerHTML = document.body.innerHTML.replace(/T1/g, "&#354;");
});

//Variabile
var tipEx, tipSubEx, x, y, z, t, rc, rcc;

var raspunsuri = " ABCD".split("");

var images = "";
var crti = 1;

function generateSubjects(nbofex = 50) {
	var ccrti = crti;
	var toret = "<div id='chunck-" + crti + "'>";
	for(i = 0; i < nbofex; ++i) {
		var crt = generateSubject(subj, exer);
		toret += "<p><b>" + crti + ".</b> " + crt.q + " <span id='eva--intreb-" + crti + "' style='display: none;'>" + crt.a + "</span><a style='cursor: pointer; color: gray; text-decoration: underline;' onclick='gebi(`eva--intreb-" + crti + "`).style.display = `initial`; this.remove();'>Arata1 ra1spunsul</a></p>";
		++crti;
	}
	gebi('eva-generloc').innerHTML += toret + "</div>";

	document.body.innerHTML = document.body.innerHTML.replace(/a1/g, "&#259;");
	document.body.innerHTML = document.body.innerHTML.replace(/a2/g, "&#226;");
	document.body.innerHTML = document.body.innerHTML.replace(/i1/g, "&#238;");
	document.body.innerHTML = document.body.innerHTML.replace(/s1/g, "&#351;");
	document.body.innerHTML = document.body.innerHTML.replace(/t1/g, "&#355;");
	document.body.innerHTML = document.body.innerHTML.replace(/A1/g, "&#258;");
	document.body.innerHTML = document.body.innerHTML.replace(/A2/g, "&#194;");
	document.body.innerHTML = document.body.innerHTML.replace(/I1/g, "&#206;");
	document.body.innerHTML = document.body.innerHTML.replace(/S1/g, "&#350;");
	document.body.innerHTML = document.body.innerHTML.replace(/T1/g, "&#354;");

	console.log("chunck-" + ccrti);
	MathJax.Hub.Queue(["Typeset", MathJax.Hub, "chunck-" + ccrti]);
}

function generateSubject(subject, exercise) {
var toret = {};
if(subject == 1) {
	if(exercise == 1) {
		//S1 E1
		/*
		case tipEx: x, y, z, ... >= 0
		1 - x * y + z | x * y - z
		2 - (xy) : y, 30 > x > 15
		3 - 1 : frac{x}{y}
		4 - sqrt{x * x} + y | sqrt{x * x} - y
		5 - x ^ y * x ^ z : x ^ t
		*/
		rc = gr(1, 4);
		rc = raspunsuri[rc];
		tipEx = gr(1, 5);
		if(tipEx == 1) {
			tipSubEx = gr(1, 2);
			x = gr(1, 10);
			y = gr(x + 1, x * 4);
			z = gr(x, y);
			if(tipSubEx == 1) {
				toret.q = "Rezultatul calculului $" + x + " \\times\\ " + y + " +\ " + z + "$ este egal cu... .";
				toret.a = x * y + z;
			} else if(tipSubEx == 2) {
				toret.q = "Rezultatul calculului $" + x + " \\times\\ " + y + " -\ " + z + "$ este egal cu... .";
				toret.a = x * y - z;
			}
		} else if(tipEx == 2) {
			x = gr(15, 30);
			y = gr(1, 10);
			toret.q = "Rezultatul calculului $" + (x * y) + " :\ " + y + "$ este egal cu ... .";
			rcc = x;
			toret.a = rcc;

		} else if(tipEx == 3) {
			x = gr(15, 25);
			y = gr(5, 10);
			while(x == y) y = gr(1, 15);
			rcc = "$ \\frac{" + y + "}{" + x + "} $";
			toret.q = "Rezultatul calculului $ 1 :\ \\frac{" + x + "}{" + y + "} $ este egal cu ... .";
			toret.a = rcc;
		} else if(tipEx == 4) {
			x = gr(2, 10);
			y = gr(1, x - 1);
			rcc = x + y;
			toret.q = "Rezultatul calculului $ \\sqrt{" + (x * x) + "} +\ " + y + " $ este egal cu ... .";
			toret.a = rcc;
		} else {
			x = gr(2, 30);
			y = gr(1, 10);
			z = gr(1, 5);
			do { t = gr(1, y + z - 1); if(t == z && z == 1) t = 2; } while(z == t);
			rcc = "$ " + x + "^{" + (y + z - t) + "} $";
			toret.q = "Rezultatul calculului $ " + x + "^{" + y + "} \\times\\ " + x + "^{" + z + "} :\ " + x + "^{" + t + "} $ este egal cu ... .";
			toret.a = rcc;
		}
	} else if(exercise == 2) {
		//S1 E2
		/*
		case tipEx:
		1 - medie aritmetica
		2 - medie geometrica
		3 - x mere/creioane/pixuri/caiete costa yx lei. z mere/[...] costa ... lei, zy
		4 - x / z = t / y, xy / zt = ?
		5 - x% din y = ?
		*/

		rc = gr(1, 4);
		rc = raspunsuri[rc];
		
		tipEx = gr(1, 5);
		if(tipEx == 1) {
			x = gr(1, 10);
			y = gr(20, 30);
			if(x % 2 != y % 2) y++;
			rcc = (x + y) / 2;
			toret.q = "Media aritmetica1 a numerelor " + x + " s1i " + y + " este egala1 cu ... .";
			toret.a = rcc;
		} else if(tipEx == 2) {
			x = gr(2, 5);
			y = gr(6, 10);
			rcc = x * y;
			toret.q = "Media geometrica1 a numerelor " + (x * x) + " s1i " + (y * y) + " este egala1 cu ... .";
			toret.a = rcc;
		} else if(tipEx == 3) {
			x = gr(2, 5);
			do { y = gr(2, 5); } while(x == y);
			z = gr(6, 10);
			var obiecte = ["mere", "creioane", "caiete", "pixuri", "penare", "kilograme de cartofi", "sticle de apa1"]
			var obiect = obiecte[gr(0, obiecte.length - 1)];
			rcc = z * y;
			toret.q = x + " " + obiect + " costa1 " + (x * y) + " lei. " + z + " " + obiect + " costa1 ... lei.";
			toret.a = rcc;
		} else if(tipEx == 4) {
			z = gr(2, 10);
			do { t = gr(2, 10); } while(z == t);
			rcc = z * t;
			toret.q = "Daca1 x s1i y sunt numere reale nenule astfel i1nca2t $ \\frac{x}{" + z + "} =\ \\frac{" + t + "}{y} $, atunci $ xy $ este egal cu ... .";
			toret.a = rcc;
		} else {
			x = gr(1, 20) * 5;
			do { y = gr(1, 10) * 100; } while(x == y);
			rcc = x * y / 100;
			toret.q = "Daca1 $ x =\ " + x + " $ s1i $ y =\ " + y + " $, atunci $ x $% din $ y $ este egal cu ... .";
			toret.a = rcc;
		}
	} else if(exercise == 3) {
		//S1 E3
		/*
		case tipEx:
		1 - produsul tuturor numerelor rationale/reale/intregi din intervalul -x, y (x, y apartin lui |N) este egal cu ..., 0
		2 - cardinalul multimii A = {x apartine lui Z | y <= x <= z} este egal cu ..., z - y + 1
		3 - suma primelor x numere prime este egala cu ... . x <= 10
		4 - cel mai mare numar intreg x, pentru care x < y este egal cu ... , y - 1
		5 - dupa o reducere de x%, un produs costa (100 - x)% * y. Pretul initial al produsului este egal cu ..., y. y = 100k
		*/
		
		rc = gr(1, 4);
		rc = raspunsuri[rc];

		tipEx = gr(1, 5);
		if(tipEx == 1) {
			x = gr(1, 10);
			y = gr(5, 20);
			var tipdenr = ["reale", "i1ntregi", "rat1ionale"];
			tipdenr = tipdenr[gr(0, tipdenr.length - 1)];
			rcc = 0;
			toret.q = "Produsul tuturor numerelor " + tipdenr + " care apart1in intervalului $ " + (gr(1, 2) == 1 ? "[" : "(") + "\ " + (-x) + ",\ " + y + " " + (gr(1, 2) == 1 ? "]" : ")") + "\ $ este egal cu ... .";
			toret.a = rcc;
		} else if(tipEx == 2) {
			do { y = gr(-10, 5); } while(y == 0 || y == 1);
			z = gr(6, 20);
			rcc = z - y + 1;
			toret.q = "Cardinalul mult1imii $ A = \\lbrace x \\in \\mathbb{Z} \\vert " + y + " \\leq x \\leq " + z + " \\rbrace $ este egal cu ... .";
			toret.a = rcc;
		} else if(tipEx == 3) {
			x = gr(3, 10);
			var nrprim = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
			rcc = 0;
			for(i = 1; i <= x; i++) rcc += nrprim[i - 1];
			toret.q = "Suma primelor " + x + " numere prime este egala1 cu ... .";
			toret.a = rcc;
		} else if(tipEx == 4) {
			do { x = gr(-20, 10); } while(x == 0);
			rcc = x - 1;
			toret.q = "Cel mai mare numa1r i1ntreg $ x $, pentru care $ x <\ " + x + " $ este egal cu ... .";
			toret.a = rcc;
		} else if(tipEx == 5) {
			x = gr(1, 20) * 5;
			y = gr(2, 10);
			rcc = y * 100;
			toret.q = "Dupa1 o reducere de " + x + "%, un produs valoreaza1 " + (100 - x) * y + " lei. Pret1ul init1ial al produsului este egal cu ... lei.";
			toret.a = rcc;
		}
	} else if(exercise == 4) {
		//S1 E4
		/*
		case tipEx:
		1 - Diametrul cerc 2r, Raza = ? r
		2 - Diagonala unui patrat = l *sqrt(2). Latura = ? l
		3 - Un trapez cu h = ... si lm = ... are aria egal cu ? h * lm
		4 - Un patrat cu aria de l*l are perimetrul de ? 4l
		5 - Aria patratului cu latura de l este ? l*l
		6 - Semiperimetrul unui dreptunghi cu l = ... si A = ... este ? l + A / l
		7 - Un cerc cu diametrul 2r are aria ? pi * r * r
		8 - Semiperimetrul unui dreptunghi este l + L, iar l = 2 L. Aria dreptunghiului este ? l * L
		9 - Aria unui cerc este egala cu pi * r * r. Diametrul cercului este egal cu ? 2 * r
		10 - Raportul dintre lungimea laturii unui patrat si aria patratului este 1 / l. Lungimea laturii este egala cu ? l
		*/
		var unitateDeMasura = gr(1, 5);
		unitateDeMasura = (unitateDeMasura == 1 ? "cm" : (unitateDeMasura == 2 ? "m" : (unitateDeMasura == 3 ? "km" : (unitateDeMasura == 4 ? "dm" : "hm"))));
		rc = gr(1, 4);
		rc = raspunsuri[rc];
		tipEx = gr(1, 10);
		if(tipEx == 1) {
			x = gr(5, 10);
			rcc = x;
			toret.q = "Diametrul unui cerc este egal cu " + (2 * x) + " " + unitateDeMasura + ". Atunci raza cercului este egala1 cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		} else if(tipEx == 2) {
			x = gr(5, 10);
			rcc = x;
			toret.q = "Diagonala unui pa1trat este egala1 cu $ " + x + " \\sqrt{2} $ " + unitateDeMasura + ". Latura acestui pa1trat este egala1 cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		} else if(tipEx == 3) {
			x = gr(5, 10);
			y = gr(11, 20);
			rcc = x * y;
			toret.q = "Un trapez are i1na1lt1imea egala1 cu " + x + " " + unitateDeMasura + ", iar linia mijlocie egala1 cu " + y + " " + unitateDeMasura + ". Aria trapezului este egala1 cu ... " + unitateDeMasura + "<sup>2</sup>.";
			toret.a = rcc;
		} else if(tipEx == 4) {
			x = gr(5, 10);
			rcc = 4 * x;
			toret.q = "Daca1 un pa1trat are aria egala1 cu " + (x * x) + " " + unitateDeMasura + "<sup>2</sup>, atunci acesta are perimetrul egal cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		} else if(tipEx == 5) {
			x = gr(5, 10);
			rcc = x * x;
			toret.q = "Aria pa1tratului cu latura de " + x + " " + unitateDeMasura + " este egala1 cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		} else if(tipEx == 6) {
			var el = gr(0, 1);
			x = gr(5, 10) * 2 + el;
			y = gr(11, 15) * 2 + el;
			rcc = x + y;
			toret.q = "Semiperimetrul dreptunghiului cu la1t1imea l = " + x + " " + unitateDeMasura + " s1i cu aria A = " + (x * y) + " " + unitateDeMasura + "<sup>2</sup> este egal cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		} else if(tipEx == 7) {
			x = gr(5, 10);
			rcc = "$ " + (x * x) + " \\pi $";
			toret.q = "Aria discului de cerc cu diametrul egal cu " + (2 * x) + " " + unitateDeMasura + " este egala1 cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		} else if(tipEx == 8) {
			x = gr(5, 10) * 2;
			y = 2 * x;
			rcc = x * y;
			toret.q = "Semiperimetrul unui dreptunghi este egal cu " + (x + y) + " " + unitateDeMasura + ". Daca1 l = $ 2 \\times L $, unde l este la1t1imea dreptunghiului, iar L este lungimea dreptunghiului, atunci aria dreptunghiului este egala1 cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		} else if(tipEx == 9) {
			x = gr(5, 20);
			rcc = 2 * x;
			toret.q = "Aria unui disc de cerc este egala1 cu $ " + (x * x) + " \\pi $ " + unitateDeMasura + ". Diametrul discului este egal cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		} else if(tipEx == 10) {
			x = gr(5, 20);
			rcc = x;
			toret.q = "Raportul dintre lungimea laturii unui pa1trat s1i aria acestuia este de $ \\frac{1}{" + x + " " + unitateDeMasura + "} $. Latura acestui pa1trat are lungimea egala1 cu ... " + unitateDeMasura + ".";
			toret.a = rcc;
		}
	} else if(exercise == 5) {
		//S1 E5
		/*
		case tipEx:
		1 - cub
		2 - sfera
		3 - paralelipiped dreptunghic

		case tipSubEx:
		1 - volum
		2 - arie totala
		3... - altele
		*/
		var unitateDeMasura = gr(1, 5);
		unitateDeMasura = (unitateDeMasura == 1 ? "cm" : (unitateDeMasura == 2 ? "m" : (unitateDeMasura == 3 ? "km" : (unitateDeMasura == 4 ? "dm" : "hm"))));
		rc = gr(1, 4);
		rc = raspunsuri[rc];
		tipEx = 2;//gr(1, 10);
		if(tipEx == 1) {
			tipSubEx = gr(1, 8);
			gebi("eva-img-15").src = images + "geo_sim_cub.png";
			x = gr(2, 5);
			if(tipSubEx == 1) {
				rcc = x * x * x;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu latura de " + x + " " + unitateDeMasura + ". Volumul cubului este egal cu ... " + unitateDeMasura + "<sup>3</sup>.";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 2) {
				rcc = 6 * x * x;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu latura de " + x + " " + unitateDeMasura + ". Aria totala1 a cubului este egala1 cu ... " + unitateDeMasura + "<sup>2</sup>.";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 3) {
				rcc = x;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu volumul egal cu " + (x * x * x) + " " + unitateDeMasura + "<sup>3</sup>. Latura cubului este egala1 cu ... " + unitateDeMasura + ".";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 4) {
				rcc = x;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu aria totala1 egala1 cu " + (x * x * 6) + " " + unitateDeMasura + "<sup>2</sup>. Latura cubului este egala1 cu ... " + unitateDeMasura + ".";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 5) {
				rcc = x * x * 6;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu volumul egal cu " + (x * x * x) + " " + unitateDeMasura + "<sup>3</sup>. Aria totala1 a cubului este egala1 cu ... " + unitateDeMasura + "<sup>2</sup>.";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 6) {
				rcc = "$ " + x + " \\sqrt{2} $";
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu latura egala1 cu " + x + " " + unitateDeMasura + ". Diagonala unei fet1e a cubului este egala1 cu ... " + unitateDeMasura + ".";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 7) {
				rcc = "$ " + x + " \\sqrt{3} $";
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu latura egala1 cu " + x + " " + unitateDeMasura + ". Diagonala cubului este egala1 cu ... " + unitateDeMasura + ".";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 8) {
				rcc = x * x;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu diagonala mare egala1 cu $ " + x + " \\sqrt{3} $ " + unitateDeMasura + ". Aria unei fet1e a cubului este egala1 cu ... " + unitateDeMasura + "<sup>2</sup>.";
				gebi("eva-barem-15").innerHTML = rcc;
			}
		} else if(tipEx == 2) {
			tipSubEx = 2;//gr(1, 8);
			gebi("eva-img-15").src = images + "geo_sim_sfera.png";
			x = gr(2, 5);
			if(tipSubEx == 1) {
				x *= 3;
				rcc = "$ " + (x * x * x / 3 * 4) + " \\pi $";
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentata1 o sfera1 cu raza de " + x + " " + unitateDeMasura + ". Volumul sferei este egal cu ... " + unitateDeMasura + "<sup>3</sup>.";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 2) {
				rcc = "$ " + (x * x * 4) + " \\pi $";
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentata1 o sfera1 cu raza de " + x + " " + unitateDeMasura + ". Aria sferei este egala1 cu ... " + unitateDeMasura + "<sup>2</sup>.";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 3) {
				rcc = x;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu volumul egal cu " + (x * x * x) + " " + unitateDeMasura + "<sup>3</sup>. Latura cubului este egala1 cu ... " + unitateDeMasura + ".";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 4) {
				rcc = x;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu aria totala1 egala1 cu " + (x * x * 6) + " " + unitateDeMasura + "<sup>2</sup>. Latura cubului este egala1 cu ... " + unitateDeMasura + ".";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 5) {
				rcc = x * x * 6;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu volumul egal cu " + (x * x * x) + " " + unitateDeMasura + "<sup>3</sup>. Aria totala1 a cubului este egala1 cu ... " + unitateDeMasura + "<sup>2</sup>.";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 6) {
				rcc = "$ " + x + " \\sqrt{2} $";
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu latura egala1 cu " + x + " " + unitateDeMasura + ". Diagonala unei fet1e a cubului este egala1 cu ... " + unitateDeMasura + ".";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 7) {
				rcc = "$ " + x + " \\sqrt{3} $";
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu latura egala1 cu " + x + " " + unitateDeMasura + ". Diagonala cubului este egala1 cu ... " + unitateDeMasura + ".";
				gebi("eva-barem-15").innerHTML = rcc;
			} else if(tipSubEx == 8) {
				rcc = x * x;
				gebi("eva-intreb-15").innerHTML = "I1n <i>Figura 1</i> este reprezentat un cub cu diagonala mare egala1 cu $ " + x + " \\sqrt{3} $ " + unitateDeMasura + ". Aria unei fet1e a cubului este egala1 cu ... " + unitateDeMasura + "<sup>2</sup>.";
				gebi("eva-barem-15").innerHTML = rcc;
			}
		} else if(tipEx == 3) {
			gebi("eva-img-15").src = images + "geo_sim_paralelipiped_dreptunghic.png";
			x = gr(5, 10);
			y = gr(11, 20);
			rcc = x * y;
			gebi("eva-intreb-15").innerHTML = "Un trapez are i1na1lt1imea egala1 cu " + x + " " + unitateDeMasura + ", iar linia mijlocie egala1 cu " + y + " " + unitateDeMasura + ". Aria trapezului este egala1 cu ... " + unitateDeMasura + "<sup>2</sup>.";
			gebi("eva-barem-15").innerHTML = rcc;
		} else if(tipEx == 4) {
			x = gr(5, 10);
			rcc = 4 * x;
			gebi("eva-intreb-15").innerHTML = "Daca1 un pa1trat are aria egala1 cu " + (x * x) + " " + unitateDeMasura + "<sup>2</sup>, atunci acesta are perimetrul egal cu ... " + unitateDeMasura + ".";
			gebi("eva-barem-15").innerHTML = rcc;
		} else if(tipEx == 5) {
			x = gr(5, 10);
			rcc = x * x;
			gebi("eva-intreb-15").innerHTML = "Aria pa1tratului cu latura de " + x + " " + unitateDeMasura + " este egala1 cu ... " + unitateDeMasura + ".";
			gebi("eva-barem-15").innerHTML = rcc;
		} else if(tipEx == 6) {
			var el = gr(0, 1);
			x = gr(5, 10) * 2 + el;
			y = gr(11, 15) * 2 + el;
			rcc = x + y;
			gebi("eva-intreb-15").innerHTML = "Semiperimetrul dreptunghiului cu la1t1imea l = " + x + " " + unitateDeMasura + " s1i cu aria A = " + (x * y) + " " + unitateDeMasura + "<sup>2</sup> este egal cu ... " + unitateDeMasura + ".";
			gebi("eva-barem-15").innerHTML = rcc;
		} else if(tipEx == 7) {
			x = gr(5, 10);
			rcc = "$ " + (x * x) + " \\pi $";
			gebi("eva-intreb-15").innerHTML = "Aria discului de cerc cu diametrul egal cu " + (2 * x) + " " + unitateDeMasura + " este egala1 cu ... " + unitateDeMasura + ".";
			gebi("eva-barem-15").innerHTML = rcc;
		} else if(tipEx == 8) {
			x = gr(5, 10) * 2;
			y = 2 * x;
			rcc = x * y;
			gebi("eva-intreb-15").innerHTML = "Semiperimetrul unui dreptunghi este egal cu " + (x + y) + " " + unitateDeMasura + ". Daca1 l = $ 2 \\times L $, unde l este la1t1imea dreptunghiului, iar L este lungimea dreptunghiului, atunci aria dreptunghiului este egala1 cu ... " + unitateDeMasura + ".";
			gebi("eva-barem-15").innerHTML = rcc;
		} else if(tipEx == 9) {
			x = gr(5, 20);
			rcc = 2 * x;
			gebi("eva-intreb-15").innerHTML = "Aria unui disc de cerc este egala1 cu $ " + (x * x) + " \\pi $ " + unitateDeMasura + ". Diametrul discului este egal cu ... " + unitateDeMasura + ".";
			gebi("eva-barem-15").innerHTML = rcc;
		} else if(tipEx == 10) {
			x = gr(5, 20);
			rcc = x;
			gebi("eva-intreb-15").innerHTML = "Raportul dintre lungimea laturii unui pa1trat s1i aria acestuia este de $ \\frac{1}{" + x + " " + unitateDeMasura + "} $. Latura acestui pa1trat are lungimea egala1 cu ... " + unitateDeMasura + ".";
			gebi("eva-barem-15").innerHTML = rcc;
		}
	} else if(exercise == 6) {
		///S1 E6
	}
}
return toret;
}

function gr(x, y) {
	return (Math.floor(Math.random() * (Math.abs(x - y) + 1)) + mmin(x, y)); 
}

function mmin(x, y) {
	return (x > y ? y : x);
}

function mmax(x, y) {
	return (x < y ? y : x);
}

function gebi(x) {
	return document.getElementById(x);
}