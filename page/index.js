var isShowingPage = false;

async function logFetch(url) {
	fetch(url).then(response => {
	console.log(response);
	if(response.ok){
		return response.text(); 
	}
})};

async function searchpage() {//  = function() {
    var rootPage = document.getElementById("elroot").value;
    var pagina = document.getElementById("pagesearch").value;

    if (!(rootPage.startsWith("http://")) && !(rootPage.startsWith("https://"))) {
        alert('La URL no inicia con http o https.');
        document.location.reload();
    }

    if (!(rootPage.endsWith("/"))) {
        alert('La URL no termina con /');
        document.location.reload();
    }
    var paginaFinal = rootPage + "data/source/" + pagina + ".data";
    console.log(paginaFinal);

    // http://cache.norma.ingeniat.com/LibrosMedia/EXS_SECUNDARIA/coquimica/grado11/4201111111/data/source/1.data
    // http://cache.norma.ingeniat.com/LibrosMedia/EXS_SECUNDARIA/cosociales/grado9/4231093211/data/source/1.data
	
	
    /* fetch(paginaFinal)
        // .then(response => response.json())
        .then(data => console.log(data.text())); */
    /* 
    Promise.all([
        fetch(paginaFinal).then(x => x.text())
    ]).then(([sampleResp]) => {
        isShowingPage = true;
        var htmlDecodificado = decodificar(sampleResp);
		console.log('then was called');
        setpage(htmlDecodificado, rootPage, pagina);
        // console.log(htmlDecodificado);
    }); */
	var myHeaders = new Headers();
	var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
	var myRequest = new Request(paginaFinal, myInit);
	
	fetch(myRequest)
	.then(response => response.text())
	.then(function(response) {
		isShowingPage = true;
		console.log('then was called');
		// console.log(response);
		var htmlDecodificado = decodificar(response);
        setpage(htmlDecodificado, rootPage, pagina);
	});
	
	
	// fetch(paginaFinal).then(data => console.log(data.text()));
	console.log(logFetch(paginaFinal));
	
    console.log("Root: " + rootPage);
    console.log("Página: " + pagina);
}

var setpage = function (decodedData, urlRoot, paginaSet) {
    var altoPage = window.innerWidth;
    var altoTotal = window.innerHeight;

    aspect = (altoPage / altoTotal);

    if($(window).height() < $(window).width()) {
        var resizedHeight = $(window).height();
        var resizedWidth = resizedHeight * aspect;
    }
    
    else { // screen width is smaller than height (mobile, etc)
        var resizedWidth = $(window).width();
        var resizedHeight = resizedWidth / aspect;      
    }

    prop = (resizedWidth / resizedHeight) - 0.5;
	
    decodedData = decodedData.toString();
    urlRootWithSource = urlRoot + "data/source/";
    decodedData = decodedData.replace(/#PATH#/g, urlRootWithSource);
    decodedData = decodedData.replace(/#SCALE#/g, prop);
    // console.log(decodedData);

    // Colocamos
    document.querySelector('body').innerHTML = decodedData;
	document.getElementsByTagName("html")[0].innerHTML += '<script src="decode.js"></script>';
	document.getElementsByTagName("body")[0].innerHTML += '<script src="index.js"></script>';
	// $('body').append('<script src="escuchadores.js"></script>'); // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    
	// console.log("PROP: " + prop);
    urlrut = urlRoot;
    paginaNow = paginaSet;
	setTimeout(function() 	{
		overflou()
	}, 30);
}

var getprop = function() {
    var altoPage = window.innerWidth;
    var altoTotal = window.innerHeight;

    aspect = (altoPage / altoTotal);

    if($(window).height() < $(window).width()) {
        var resizedHeight = $(window).height();
        var resizedWidth = resizedHeight * aspect;
    }
    
    else { // screen width is smaller than height (mobile, etc)
        var resizedWidth = $(window).width();
        var resizedHeight = resizedWidth / aspect;      
    }

    prop = (resizedWidth / resizedHeight);

    console.log("PROP: " + prop);
}

var scaleMinus = function() {
    document.getElementsByTagName("body")[0].innerHTML += '<script>document.getElementsByTagName("div")[0].style.transform = "scale()";</script>';
}

async function searchpageLink(rootPage, pagina) {//  = function() {
    if (!(rootPage.startsWith("http://")) && !(rootPage.startsWith("https://"))) {
        alert('La URL no inicia con http o https.');
        document.location.reload();
    }

    if (!(rootPage.endsWith("/"))) {
        alert('La URL no termina con /');
        document.location.reload();
    }
    var paginaFinal = rootPage + "data/source/" + pagina + ".data";
    console.log(paginaFinal);

    // http://cache.norma.ingeniat.com/LibrosMedia/EXS_SECUNDARIA/coquimica/grado11/4201111111/data/source/1.data
    // http://cache.norma.ingeniat.com/LibrosMedia/EXS_SECUNDARIA/cosociales/grado9/4231093211/data/source/1.data
	
	
    /* fetch(paginaFinal)
        // .then(response => response.json())
        .then(data => console.log(data.text())); */
    /* 
    Promise.all([
        fetch(paginaFinal).then(x => x.text())
    ]).then(([sampleResp]) => {
        isShowingPage = true;
        var htmlDecodificado = decodificar(sampleResp);
		console.log('then was called');
        setpage(htmlDecodificado, rootPage, pagina);
        // console.log(htmlDecodificado);
    }); */
	var myHeaders = new Headers();
	var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
	var myRequest = new Request(paginaFinal, myInit);
	
	fetch(paginaFinal)
	.then(response => response.text())
	.then(function(response) {
		isShowingPage = true;
		console.log('then was called');
		// console.log(response);
		var htmlDecodificado = decodificar(response);
        setpage(htmlDecodificado, rootPage, pagina);
	});
	
	
	// fetch(paginaFinal).then(data => console.log(data.text()));
	console.log(logFetch(paginaFinal));
	
    console.log("Root: " + rootPage);
    console.log("Página: " + pagina);
}


async function nextPage(paginaroot, nextpage) {
	nextpage = parseInt(nextpage) + 1;
	searchpageLink(paginaroot, nextpage);
}

async function overflou() {
	setTimeout(function() 	{
		document.getElementsByTagName("div")[0].style.overflow = "";
		console.log("¡Fixed!");
	}, 250);
}