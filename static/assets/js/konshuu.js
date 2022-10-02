//PDFJS.workerSrc = "/static/js/pdf.worker.js";

var konshuu_canvas = document.getElementById("konshuu-reader-canvas");
konshuu_canvas.textBaseline = "top";
konshuu_canvas.width = konshuu_canvas.clientWidth * window.devicePixelRatio;

var curWidth = konshuu_canvas.clientWidth * window.devicePixelRatio;

var konshuu_canvas_ctx = konshuu_canvas.getContext('2d');
var konshuu_title = document.getElementById("konshuu-title");

var konshuu_dropdown = document.getElementById("konshuu-dropdown");
var konshuu_dropdown_content = document.getElementById(
  "konshuu-dropdown-content"
);

var konshuu_dropdown_button = document.getElementById(
  "konshuu-dropdown-button"
);

var konshuu_reader_left = document.getElementById("konshuu-reader-left");
var konshuu_reader_right = document.getElementById("konshuu-reader-right");

var konshuu_pdf = null;
var pageNumber = 1;
var rendering = false;
var pdf_filename = null;


konshuu_dropdown_button.innerHTML = konshuu_dropdown_content.children[0].innerHTML;

// Temp Webtoon testing
var canvas = null;
var ctx = null;

var isWebtoon = false;

// function rerender() {
//     var canvases = document.getElementsByTagName('canvas');
//     if (canvases) {
//         for (var i = canvases.length - 1; i >= 0; i--) {
//             canvases[i].remove();
//         }
//     }
//     //get rid of all canvases
//     if (isWebtoon) {
//         for(var num = 1; num <= konshuu_pdf.numPages; num++)
//             konshuu_pdf.getPage(num).then(renderPageWebtoon);
//     } else {
//         renderPage(konshuu_pdf, 1);
//     }
// }

//Calls this when webtoon button is pressed
function webtoonLayout() {

	if (isWebtoon) {
		isWebtoon = false;
    	location.reload();
	}
    
    isWebtoon = true;
    // python3 -m http.server
    //use incognito mode to not store file in cache
    // konshuu_canvas.remove();

    var canvases = document.getElementsByTagName('canvas');
    if (canvases) {
        for (var i = canvases.length - 1; i >= 0; i--) {
            canvases[i].remove();
        }
    }

    for(var num = 1; num <= konshuu_pdf.numPages; num++)
        konshuu_pdf.getPage(num).then(renderPageWebtoon);

    konshuu_reader_left.style.display = "none";
    konshuu_reader_right.style.display = "none";
    window.scrollTo(0, 0);
    
}

function renderPageWebtoon(page) {
    
    canvas = document.createElement('canvas');
    canvas.id = "konshuu-reader-canvas";
    canvas.textBaseline = "top";

    var viewport = page.getViewport(1.0);
    var resolution = curWidth / viewport.width;
    var aspectRatio = viewport.height / viewport.width;

    canvas.height = curWidth * aspectRatio;
    canvas.width = curWidth;
    canvas.classList.add("canvasclass");


    ctx = canvas.getContext('2d');
    var renderContext = {
      canvasContext: ctx,
      viewport: page.getViewport(resolution)
    };

    canvasContainer = document.getElementById('konshuu-reader');
    canvasContainer.appendChild(canvas);

    page.render(renderContext);
}

//

function renderPage(pdf, newPageNumber) {
    if (rendering) {
        return;
    }

    rendering = pdf.getPage(newPageNumber).then(
        function(page) {
            var viewport = page.getViewport(1.0);
            var resolution = curWidth / viewport.width;
            var aspectRatio = viewport.height / viewport.width;

            konshuu_canvas.height = curWidth * aspectRatio;

            rendering = page.render(
                {
                    canvasContext: konshuu_canvas_ctx,
                    viewport: page.getViewport(resolution)
                }
            ).then(
                function() {
                    rendering = false;
                    pageNumber = newPageNumber;
                    page = "/konshuu/" + pdf_filename.split(".")[0] + "/" +  pageNumber.toString();
                    gtag('config', 'UA-106889406-1', {'page_path': page});
                }
            );
        }
    );

    window.scrollTo(0, 0);

    konshuu_reader_left.style.display = "block";
    konshuu_reader_right.style.display = "block";

    if (newPageNumber == 1) {
        konshuu_reader_left.style.display = "none";
    } else if (newPageNumber == konshuu_pdf.numPages) {
        konshuu_reader_right.style.display = "none";
    }

 //    console.log("isWebtoon: " + isWebtoon);
 //    if (isWebtoon) {
	// 	webtoonLayout();
	// }
}

function renderPdf(element, filename) {
    //remove all canvases
    //<canvas id="konshuu-reader-canvas"></canvas>
    // if (isWebtoon) {
    // 	console.log("renderpdf webtton:true");
    //     var canvases = document.getElementsByTagName('canvas');
    //     if (canvases) {
    //         for (var i = canvases.length - 1; i >= 0; i--) {
    //             canvases[i].remove();
    //         }
    //     }
    // } 

    pdfjsLib.getDocument(filename).then(
        function(pdf) {
            konshuu_pdf = pdf;
            renderPage(konshuu_pdf, 1);
            pdf_filename = filename;
            if (isWebtoon) {
            	isWebtoon = false;
            	webtoonLayout();
            }
        }
    );
    if (element) {
      konshuu_dropdown_button.innerHTML = element.innerHTML;
      hideDropdownContent();
    }    
    
};

function prevPage() {
    if (pageNumber > 1) {
        renderPage(konshuu_pdf, pageNumber - 1);
    }
};

function nextPage() {
    if (pageNumber < konshuu_pdf.numPages) {
      renderPage(konshuu_pdf, pageNumber + 1);
    }
};

function keyupListener(e) {
    if (e.keyCode == 37) {
        prevPage();
    } else if (e.keyCode == 39) {
        nextPage();
    }
};

//Zoom Functions
function zoomin() {
	if (isWebtoon) return zoominWebtoon();
    var currWidth = konshuu_canvas.clientWidth;
    if(currWidth == 2500) return false;
     else{
        konshuu_canvas.style.width = (currWidth + 100) + "px";
    } 
};

function zoomout() {
	if (isWebtoon) return zoomoutWebtoon();
    var currWidth = konshuu_canvas.clientWidth;
    if(currWidth == 100) return false;
     else{
        konshuu_canvas.style.width = (currWidth - 100) + "px";
    }
};


function zoominWebtoon() {
    var divs = document.getElementsByClassName("canvasclass");
    var width = divs[0].clientWidth + 100;

    for(var i=0;i<divs.length;i++) {
    	if(width == 2500) return false;
     	 else{
     	 	   divs[i].style.width = width + "px";
    	}
    }
}

function zoomoutWebtoon() {
	var divs = document.getElementsByClassName("canvasclass");
    var width = divs[0].clientWidth - 100;

    for(var i=0;i<divs.length;i++) {
    	if(width == 100) return false;
     	 else{
     	 	   divs[i].style.width = width + "px";
    	}
    }
}

function showDropdownContent() {
    konshuu_dropdown_content.style.display = "block";
};

function hideDropdownContent() {
    konshuu_dropdown_content.scrollTop = 0;
    konshuu_dropdown_content.style.display = "none";
};

function initReader() {
    if (typeof pdfjsLib !== "undefined") {
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/js/pdfjs-dist/build/pdf.worker.js';
        konshuu_dropdown_content.children[0].click();
    } else {
        setTimeout(initReader, 100);
    }
};

initReader();
document.addEventListener("keyup", keyupListener);

konshuu_dropdown.addEventListener("mouseover", showDropdownContent);
konshuu_dropdown.addEventListener("mouseleave", hideDropdownContent);
