var decode64 = function(input){
    var keyStr = "ABCDEFGHIJKLMNOP" +
        "QRSTUVWXYZabcdef" +
        "ghijklmnopqrstuv" +
        "wxyz0123456789+/" +
        "=";
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {
        return null;
        alert("There were invalid base64 characters in the input text.\n" +
            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
            "Expect errors in decoding.");
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

    } while (i < input.length);

    return unescape(output);
}

var decodificar = function(cadena) {
    var key="1cff42dabb60beaf1e3b57988af787246c63613ef60435a05c9c79b98a9b41c8";
    var result = '';

    var mcadena = decode64(cadena);

    if (mcadena == null){
        return cadena;
    } else {
        cadena = mcadena;
    }

    var mychar = "";
    var mycharres = "";
    var keychar = "";
    var ordChar = "";
    var ordKeychar = "";
    var sum = 0;

    for (var i=0; i<cadena.length; i++) {
        mychar = cadena.substr(i,1);
        keychar = key.substr((i % key.length)-1, 1);
        ordChar = mychar.charCodeAt(0);
        ordKeychar = keychar.charCodeAt(0);
        sum = parseInt(ordChar,10) - parseInt(ordKeychar,10);
        mycharres = String.fromCharCode(sum);
        // console.log("mychar:" + mychar + " keychar:" + keychar + " ordChar:" + ordChar + " ordKeychar:" + ordKeychar + " sum:" + sum + " mycharres:" + mycharres);
        // console.log(mycharres);
        result += mycharres;
    }

    return result;
};