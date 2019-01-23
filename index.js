var cmd = require('node-cmd');

//============opcion 1====//

// var path = __dirname + "\\Arduino\\Arduino.ino"
// var ubicacion_arduino = "C:\\Program Files (x86)\\Arduino\\Arduino_debug.exe"
// var puerto = "COM3"
// var board = "arduino:avr:uno"
// var command = '"' + ubicacion_arduino + '" --board ' + board + ' --port ' + puerto + ' --upload ' + path;


// cmd.get(
//     command,
//     function (err, data, stderr) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log(command)
//             console.log('Operacion exitosa :\n\n', data)
//         }
//     }
// );

//============opcion 2====//
// arduino-cli compile -b arduino:avr:uno C:\Users\AwesomeDev1\Desktop\cmdproj\Arduino
// arduino-cli upload -p COM3 -b arduino:avr:uno C:\Users\AwesomeDev1\Desktop\cmdproj\Arduino

var ubicacion_cli = __dirname+"\\cli\\arduino-cli.exe"
console.log(`ubicacion es: ${ubicacion_cli}`);
var puerto = "COM3"
var board = "arduino:avr:uno"
var archivoIno=__dirname+"\\Arduino"
var command = '"' + ubicacion_cli + '" --debug upload -p '+puerto+' -b '+board+' '+archivoIno;
cmd.get(
    command,
    function (err, data, stderr) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(command)
            console.log('Operacion exitosa :\n\n', data)
        }
    }
);
