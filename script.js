
    const contenedor = document.getElementById('container');
    const URL = 'https://jsonplaceholder.typicode.com/comments';
    
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud'); // Manejo de errores en caso de respuesta no exitosa
            }
            return response.json(); // Parsea la respuesta JSON
        })
        .then(data => {
            // Haz algo con los datos recibidos (data)
            console.log('Datos recibidos:', data);
            showData(data); // Llama a showData con los datos
        })
        .catch(error => {
            // Manejo de errores
            console.error('Error en la solicitud:', error);
        });
    
    function showData(data) {
        // Supongo que quieres agregar las tarjetas al contenedor
        let contenedorHTML = "";
        for (const item of data) {
            contenedorHTML += `<div class="card">
            <img class="card-img-top" src="descarga.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">User: ${item.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Email: ${item.email}</li>
              <li class="list-group-item">Body: ${item.body}</li>
            </ul>
          </div>`;
        }
        // Agrega el contenido generado al contenedor
        contenedor.innerHTML = contenedorHTML;
    }
    
