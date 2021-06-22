document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
        document.location.reload();
    }

    if (key === 'F5' || key === 116) {
        document.location.reload();
    }

    /* if (key == 'ArrowRight' || key === 39) {
        if (isShowingPage) {
			nextPage(urlrut, paginaNow);
            /* document.getElementsByTagName("body")[0].innerHTML += ('<input required class="form-control" id="elroot" placeholder="http://cache.norma.ingeniat.com/LibrosMedia/EXS_SECUNDARIA/coquimica/grado11/4201111111"> <br> <input required type="number" class="form-control" id="pagesearch">');
            document.getElementById("elroot").value = urlrut;
            document.getElementById("pagesearch").value = parseInt(paginaNow) + 1;
            searchpage(); 
        }
    } */
});

document.addEventListener("DOMContentLoaded", function() {
	if (isShowingPage) {
		document.getElementsByTagName("div")[0].style.overflow = "";
		console.log("event called");
	}
});