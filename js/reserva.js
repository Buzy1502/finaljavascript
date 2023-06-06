// capturo el div contenedor de la lista de turnos
let listTurnos = document.getElementById('list-group')

const URL = '../api.json'

const renderTurnos = (data) => {
  let cardTurnos = ''
  listTurnos.innerHTML = ''

  data.forEach(({ turnosDispo, hora, direccion, modalidad, id }) => {
    const estadoTurno = turnosDispo === 0 ? 'No hay turnos disponibles' : `Turnos disponibles: ${turnosDispo}`
    const badgeClass = turnosDispo === 0 ? 'bg-danger' : 'bg-success'

    cardTurnos += `
      <div class="list-group-item list-group-item-action carta" data-id="${id}">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1"><b>Functional / Crossfit</b></h5>
        </div>
        <p class="mb-1">${direccion}</p>
        <p class="mb-1">${modalidad}</p>
        <small class="badge rounded-pil bg-primary">Hora: ${hora} am</small>
        <small class="badge rounded-pil ${badgeClass}">${estadoTurno}</small>
      </div>
    `;
  })

  listTurnos.innerHTML = cardTurnos;

  addTurnoClickListeners(data)
};

const reserveTurno = (data, idTurno) => {
  const index = data.findIndex(ele => ele.id === idTurno);

  if (index !== -1) {
    if (data[index].turnosDispo !== 0) {
      data[index].turnosDispo--

      Swal.fire({
        title: 'Reservado!',
        icon: 'success',
        confirmButtonText: 'Continuar'
      });
    } else {
      data[index].turnosDispo = 0

      Swal.fire({
        title: 'Uuuuups!',
        icon: 'info',
        text: 'No hay turnos disponibles en este horario!',
        confirmButtonText: 'Continuar'
      })
    }

    renderTurnos(data)
  }
};

const addTurnoClickListeners = (data) => {
  const cardTurno = document.querySelectorAll('.carta')
  cardTurno.forEach(card => {
    card.addEventListener('click', (e) => {
      const idTurno = +card.dataset.id
      console.log(idTurno)

      Swal.fire({
        title: 'Agendar un turno',
        text: 'Reserva turnos sin registrarte',
        confirmButtonText: 'Reservar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
      })
        .then((resultado) => {
          if (resultado.isConfirmed) {
            reserveTurno(data, idTurno)
          }
        })
    })
  })
};

const apiRender = async () => {
  try {
    const res = await fetch(URL)
    const data = await res.json()
    console.table(data);

    renderTurnos(data)
  } catch (error) {
    console.log(error)
  }
};

apiRender();