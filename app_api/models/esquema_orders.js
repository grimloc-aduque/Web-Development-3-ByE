const mongoose = require('mongoose');// incorporar mongoose al proyecto

const ordersSchema = new mongoose.Schema({
    fullname: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    telefono: {
        type: Number,
        'default': 000000000,
        required: true,
    },
    direccion: {
        type: {
            ciudad: {
                type: String,
                enum: ['Quito', 'Guayaquil'],
                required: true
            },
            calle_principal: {
                type: String,
                required: true
            },
            calle_secundaria: {
                type: String,
                required: true
            },
            numero_casa: {
                type: String,
                required: true
            },
            referencia: {
                type: String,
                required: true
            },
        },
        required: true
    },
    productos: {
        type: [
            {
                nombre: {
                    type: String,
                    required: true
                },
                cantidad: {
                    type: Number,
                    required: true,
                    default: 1,
                    min: 1
                }
            }
        ],
        required: true
    },
    status: {
        type: String,
        enum: ['Por Enviar','Enviado','Recibido'],
        required: true,
        'default': 'Por Enviar'
    },
    fecha: {
        type: Date,
        required: true,
        'default': Date.now
    }
})





const Order = new mongoose.model('Order', ordersSchema);

const order1 = new Order ({
    fullname: 'Jorge Gutierrez',
    telefono: 0983731258,
    email: 'jorge@hotmail.com',
    direccion: {
        ciudad:'Quito',
        calle_principal:'Av.Diego robles',
        calle_secundaria:'Av.interocianica',
        numero_casa: 's556',
        referencia:'Frente al paseo san francisco'
    },
    productos: {
        nombre:'producto1',
        cantidad:1
    },
    status:'Por Enviar'
})


const order2 = new Order ({
    fullname: 'Alejandro Duque',
    telefono: 032265,
    email: 'alejandro@hotmail.com',
    direccion: {
        ciudad:'Quito',
        calle_principal:'Av.Diego robles',
        calle_secundaria:'Av.interocianica',
        numero_casa: 's5',
        referencia:'en mi casa'
    },
    productos: {
        nombre:'producto2',
        cantidad:2
    },
    status:'Por Enviar'
})




//order1.save();
//order2.save();