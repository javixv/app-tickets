const { io } = require('../server')

io.on('connection', ( client) => {
    console.log('usuario conectado')

    //enviar msj al cliente
    client.emit('enviarMsj', {
        cliente :'admin',
        message : 'Bienvenido al server'
    })

    client.on('disconnect', () =>{
        console.log('usuario desconectado')
    })

    // Escuchar el cliente
    client.on('enviarMsj', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMsj',data);

        // if(mensaje.nombre){
        //     callback({
        //         resp : 'todo salio bien'
        //     })
        // }else{
        //     callback({
        //         resp : 'todo salio mal'
        //     })
        // }
    })
})