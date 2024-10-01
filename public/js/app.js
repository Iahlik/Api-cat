document.getElementById('obtenerGato').addEventListener('click', function() {
  const imgElement = document.getElementById('imagenGato');


  imgElement.classList.remove('show'); 
  imgElement.classList.add('fade-out'); 

  
  setTimeout(() => {
  
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        imgElement.src = response.data[0].url;
        imgElement.classList.remove('d-none'); e

        
        setTimeout(() => {
          imgElement.classList.remove('fade-out'); 
          imgElement.classList.add('show');
        }, 100); 
      })
      .catch(error => {
        console.error('Error al obtener la imagen:', error);
      });
  }, 700); 
});
