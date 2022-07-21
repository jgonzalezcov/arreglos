/***NOTA: Se deja el arreglo de propiedades en el archivo "array.js", con la finalidad de solo dejar la lógica en este archivo */
const html = document.querySelector('.propiedades') //Establece donde se agregará el contenido en el html
const buttonSearch = document.querySelector('.search') //Este es el botón que ejecutara la búsqueda
const rooms = document.querySelector('.rooms') //Este es el input donde se ingresa el mínimo de número de habitaciones
const metersMin = document.querySelector('.meters_min') //Este es el input del mínimo de metros cuadrados que se desea buscar
const metersMax = document.querySelector('.meters_max') //Este es el input máximo de metros cuadrados que se desea buscar
const total = document.querySelector('.py-3') //Este es el texto (h4) del html donde se mostrara el numero de registros encontrados
let template = '' //Acá se agrega en cada ciclo del bucle la información que será incorporada en el HTML
let numReg = 0 //Esto almacena el número de registros que coinciden con la búsqueda

/***********************Función que carga la información en el template que se llevara al HTML***************************************/
const dataLoad = function (src, name, rooms, meters, description) {
  numReg = numReg + 1
  template += `<div class="propiedad"><div class="img" style=" background-image: url('${src}');"></div>
  <section>
  <h5>${name}</h5>
  <div class="d-flex justify-content-between">
  <p>Cuartos: ${rooms}</p>
  <p>Metros: ${meters}</p>
  </div>
  <p class="my-3">${description}</p>
  <button class="btn btn-info">Ver más</button>
  </section>
  </div>`
}
const setview = function (click, rommsSearch, MeterMinSearch, MeterMaxSearch) {
  /***********************Valida que los datos ingresados no estén vacíos***************************************/
  if (
    click === 'Search' &&
    (rooms.value === '' || metersMin.value === '' || metersMax.value === '')
  ) {
    alert('Debes ingresar todos los parámetros de búsqueda')
    return
    /***********************Valida que el mínimo de metros no sea mayor que el maximo de metros ingresados*******/
  } else if (metersMin.value > metersMax.value) {
    alert('El mínimo de metros no puede ser mayor a máximo de metros')
    return
  } else {
    /*************Resetea los parámetros necesario para desplegar la información de la nueva búsqueda*************/
    template = ''
    html.innerHTML = ''
    numReg = 0
    /*************comienza el bucle con un if para filtra la información que se mostrara en el HTML****************/
    for (let prop of propiedadesJSON) {
      if (click === 'Search') {
        console.log(click)
        if (
          prop.rooms >= rommsSearch &&
          prop.meters >= MeterMinSearch &&
          prop.meters <= MeterMaxSearch
        ) {
          /*************Se comienza a recopilar la información en las variables por cada ciclo del bucle************/
          dataLoad(
            prop.src,
            prop.name,
            prop.rooms,
            prop.meters,
            prop.description
          )
        }
      } else {
        /*************Se comienza a recopilar la información en las variables por cada ciclo del bucle************/
        dataLoad(prop.src, prop.name, prop.rooms, prop.meters, prop.description)
      }
    }
    /****************Se Pasa la información recopilada en el bucle (fuera de este) al HTML******************/
    html.innerHTML = template
    total.innerHTML = `Total: ${numReg}`
  }
}
/*************Se llama a la función setview para realizar la búsqueda desde el botón********************/
buttonSearch.addEventListener('click', () => {
  setview('Search', rooms.value, metersMin.value, metersMax.value)
})
/****Se llama a la función setview para realizar al momento de cargar la pagina con toda la data********/
setview('noSearch')
