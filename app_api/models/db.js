// Modelos

require('./esquema_users');
require('./esquema_sections');
require('./esquema_orders')


const mongoose = require('mongoose'); // Incorporar mongoose al proyecto

const readline = require('readline'); // Incorporar readline al proyecto

// Escuchar el evento SIGINT de Windows y luego emitirlo a traves de Node
if(process.platform === 'win32'){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT"); // Emitimos el eveesquema_usrsnto a Node
    });
}

// Funcion para cerrar la conexion a MONGO (mongoose)
const procShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose desconectado a traves de ${msg}`);
        callback();
    });
};

// Eventos de terminacion de proceso

// Evento SIGINT - Windows
process.on('SIGINT', () => {
    procShutdown('Windows', () => {
        process.exit(0)}
    );
});

// Evento SIGUSR2 - Nodemon
process.once('SIGUSR2', () => {
    procShutdown('Nodemon', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Evento SIGTERM - Heroku
process.on('SIGTERM', () => {
    procShutdown('Heroku', () => {
        process.exit(0);
    });
});


// Conexion a DB principal
let dbURI = 'mongodb://localhost/dbByE'; // String de conexion
if(process.env.NODE_ENV === 'production'){  // Evaluo si la conexion es local o remota
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI, { useNewUrlParser: true }); // Metodo de conexion

// Mensajes de los eventos de conexion
mongoose.connection.on('connected', () =>{
    console.log(`Mongoose se conecto a ${dbURI}`);
});

mongoose.connection.on('error', (err) =>{
    console.log('Mongoose error de conexion ', err);
});

mongoose.connection.on('disconnected', () =>{
    console.log(`Mongoose se desconecto de ${dbURI}`);
});

