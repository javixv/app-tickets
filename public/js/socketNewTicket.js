

// establecer conexion
var socket = io();

var label = $('#lblNuevoTicket')

socket.on('connect', function(){
    console.log('conectado al servidr')
});

// los eventos on son para escuchar eventos
socket.on('disconnect', function (){
    console.log('conexion perdida con el servidor')
})

 //Escuchar informacion
 socket.on('estadoActual', function(estado){
    label.text(estado.actual)
})

$('button').on('click', function(){

    socket.emit('siguienteTicket', null, function(nextTicket){
        label.text(nextTicket);
    })

})

