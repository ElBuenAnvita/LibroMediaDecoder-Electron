const {BrowserWindow, app} = require('electron');

let mainWindow,
    WindowSettings = {
        backgroundColor: '#FFF',
        useContentSize: false,
        autoHideMenuBar: true,
        resizable: true,
        center: true,
        frame: true,
        alwaysOnTop: false,
        title: 'LibroMedia DECODER V1.0',
        icon: __dirname + '/icon.ico',
        webPreferences: {
            nodeIntegration: false,
            plugins: true,
            webSecurity: false, // <- Deshabilita las politicas de cross-origin para acceder a Crunchyroll vilos-frame
        },
    },
    listeners = `document.addEventListener('keyup', function (event) {
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
    
        if (key == 'ArrowRight' || key === 39) {
            if (isShowingPage) {
                document.querySelector('div').innerHTML += ('<input required class="form-control" id="elroot" placeholder="http://cache.norma.ingeniat.com/LibrosMedia/EXS_SECUNDARIA/coquimica/grado11/4201111111"> <br> <input required type="number" class="form-control" id="pagesearch">');
                document.getElementById("elroot").value = urlrut;
                document.getElementById("pagesearch").value = parseInt(paginaNow) + 1;
                searchpage();
            }
        }

        if (key == 'ArrowLeft' || key === 37) {
            if (isShowingPage) {
                document.querySelector('div').innerHTML += ('<input required class="form-control" id="elroot" placeholder="http://cache.norma.ingeniat.com/LibrosMedia/EXS_SECUNDARIA/coquimica/grado11/4201111111"> <br> <input required type="number" class="form-control" id="pagesearch">');
                document.getElementById("elroot").value = urlrut;
                document.getElementById("pagesearch").value = parseInt(paginaNow) - 1;
                searchpage();
            }
        }
    });`;

async function loadListener() {
    mainWindow.webContents.executeJavaScript(listeners);
};

// app.disableHardwareAcceleration(); // <= Deshabilitar hardware aceleration (gpu) para más de una pantalla (como en mi caso)
app.allowRendererProcessReuse = true; // Lo active porque lo pedia el logger


app.on('ready', () => {
    mainWindow = new BrowserWindow(WindowSettings);
    mainWindow.maximize();
    mainWindow.loadURL(`file://${__dirname}/page/index.html`);
    loadListener();
    /* 
    setInterval(() => {
        loadListener();
    }, 15E3); */
});

app.on('window-all-closed', app.quit);
app.on('before-quit', () => {
    mainWindow.removeAllListeners('close');
    mainWindow.close();
});

