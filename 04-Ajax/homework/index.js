var url = 'http://localhost:5000/amigos';

$('#boton').click(function(){
    $.get(url, function(data){
        for(var i = 0; i < data.length; i ++ ) {
        let amigo = document.createElement('li');
        amigo.innerHTML = data[i].name;
        $('#lista').append(amigo);
        }
    })
})

document.querySelector('#search').addEventListener('click', function(){
    let idAmigo = document.getElementById('input').value;
    fetch(url + '/' + idAmigo)
    .then((response)=> response.json())
    .then((data)=> {
        document.getElementById('amigo').innerHTML = data.name;
    });
});

document.querySelector('#delete')-addEventListener('click', function(){

    let idAmigo = document.getElementById('inputDelete').value;
    fetch(url + '/' + idAmigo, {method: 'DELETE'})
    .then((response)=> response.json())
    .then((data)=> {
        document.getElementById('success').innerHTML = 'Tu amigo fur borrado con exito!';
    });
}); 

