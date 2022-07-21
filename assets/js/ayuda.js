let html = ''
for (let home of propiedadesJSON) {
  html += `<section id="Propiedades">
    
      
      <div class="propiedades">
          <div class="propiedad">
            <div class="img" style="background-image: url('${home.src}')"></div>
            <section>
                <h5>${home.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${home.rooms}</p>
                    <p>Metros: ${home.m}</p>
                </div>
                <p class="my-3">${home.description}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
          </div>
      </div>
    </section>`
}

document.querySelector('.propiedades').innerHTML = html

document.getElementById('search').addEventListener('click', function () {
  let cantCuartos = document.querySelector('#numRooms').value
  let minMts = document.querySelector('#fromMeters').value
  let maxMts = document.querySelector('#uptoMeters').value
  console.log(cantCuartos)

  if (cantCuartos == '' || minMts == '' || maxMts == '') {
    alert('faltan campos por rellenar')
  } else if (minMts > maxMts) {
    alert('el campo desde no puede ser mayor del campo hasta')
  } else {
    //función de filtrar

    let html = ''
    for (let filtro of propiedadesJSON) {
      html += `<section id="Propiedades">
      
        
        <div class="propiedades">
            <div class="propiedad">
              <div class="img" style="background-image: url('${filtro.src}')"></div>
              <section>
                  <h5>${filtro.name}</h5>
                  <div class="d-flex justify-content-between">
                      <p>Cuartos: ${filtro.rooms}</p>
                      <p>Metros: ${filtro.m}</p>
                  </div>
                  <p class="my-3">${filtro.description}</p>
                  <button class="btn btn-info ">Ver más</button>
              </section>
            </div>
        </div>
      </section>`
    }
    document.querySelector('.propiedades').innerHTML = html
  }
})
