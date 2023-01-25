const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function showFligths() {
  const userName = prompt( `Hola, ¿cuál es su nombre?` );

  if (Number(userName) || userName === "" || userName === null) {
    alert( `Por favor introduzca un nombre válido.` );
    showFligths();
  } else {
    alert(`¡${userName[0].toUpperCase() + userName.substring(1)} ,bienvenido/a a la aerolínea de Isdi Coders!` );
  }

  let seeFligths = confirm( `${userName[0].toUpperCase() + userName.substring(1)} , ¿desea visualizar los vuelos del día?` );

  if (seeFligths) {
    for (let i = 0; i < flights.length; i++) {
      let ids = flights[i];
      if (ids.scale === false) {
        console.log( `${[i + 1]}) Vuelo con origen ${ids.to} y destino ${ids.from}. \nTiene un coste de: ${ids.cost}€ / No realiza ninguna escala.` );
      } else {
        console.log( `${[i + 1]}) Vuelo con origen ${ids.to} y destino ${ids.from}. \nTiene un coste de: ${ids.cost}€ / Si realiza escala.` );
      }
    }

    let averageCost = confirm( `${userName[0].toUpperCase() + userName.substring(1)} , ¿desea visualizar el coste medio de los vuelos?` );

    if (averageCost) {
      let totalCost = 0;
      for (let i = 0; i < flights.length; i++) {
        totalCost = totalCost + flights[i].cost;
      }
      console.log( `El coste medio de los vuelos es ${totalCost / flights.length}€` );

      let stopoverFlights = confirm( `${userName[0].toUpperCase() + userName.substring(1)} , ¿desea visualizar cuántos vuelos efectúan escalas?` );

      if (stopoverFlights) {
        console.log(`Los vuelos con escala son: `);
        for (let i = 0; i < flights.length; i++) {
          let scales = flights[i];
          if (scales.scale === true) {
            console.log( `- Salida desde ${scales.to} con destino ${scales.from}` );
          }
        }

        let lastFive = confirm( `${userName[0].toUpperCase() + userName.substring(1)} , ¿desea visualizar los últimos 5 vuelos del día?` );

        if (lastFive) {
          console.log( `Los últimos cinco vuelos del día son:` );
          for (let i = flights.length - 5; i < flights.length; i++) {
            let lastFlights = flights[i];
            console.log( `- Salida desde ${lastFlights.to} con destino ${lastFlights.from}` );
          }

          alert( `Gracias, esperamos haber sido de ayuda.` );
        } else {
          alert( `Gracias, esperamos haber sido de ayuda.` );
        }
      } else {
        alert( `Gracias, esperamos haber sido de ayuda.` );
      }
    } else {
      alert( `Gracias,esperamos haber sido de ayuda.` );
    }
  } else {
    alert( `Gracias, esperamos haber sido de ayuda.` );
  }
}

function adminOrUser() {
  let checkAdmin = confirm( `¿Es usted administrador?` );
  if (checkAdmin) {
    console.log( `Bienvenido al modo: ADMIN ` );
    createOrDelete();
  } else {
    let checkUser = confirm( `¿Es usted usuario?` );
    if (checkUser) {
      console.log( `Bienvenido al modo: USER` );
      searchByPrice();
    } else {
      adminOrUser();
    }
  }
}

function createOrDelete() {
  let createFlight = confirm( `¿Desea crear un nuevo vuelo?` );
  if (createFlight) {
    createNewFlight();
  } else {
    let deleteFlight = confirm( `¿Desea borrar un vuelo ya existente?` );
    if (deleteFlight) {
      deleteIdFlight();
    } else {
      alert( `Gracias por visitar la aerolínea de Isdi Coders, esperamos haber sido de ayuda ¡Hasta pronto!` );
    }
  }
}

function createNewFlight() {
  if (flights.length >= 15) {
    alert( `Lo siento, no se pueden registrar más vuelos.` );
    deleteIdFlight();
  } else {
    const newFlight = {};
    newFlight.id = flights.length;
    newFlight.to = prompt( `Ingrese ciudad de destino:` );
    if (newFlight.to === null || newFlight.to === "") {
      alert( `Por favor, introduzca un destino válido.` );
      return createNewFlight();
    }
    newFlight.from = prompt( `Ingrese ciudad de origen:` );
    if (newFlight.from === null || newFlight.from === "") {
      alert( `Por favor, introduzca un origen válido.` );
      return createNewFlight();
    }
    newFlight.cost = parseInt(prompt( `Ingrese el precio:` ));
    if (newFlight.cost === "" || isNaN(newFlight.cost)) {
      alert( `Por favor, introduzca un precio válido.` );
      return createNewFlight();
    }
    newFlight.scale = confirm( `¿El vuelo realiza escala?` );
    if (newFlight.scale === true) {
      scales = `si realiza escala.`;
    } else {
      newFlight.scale === false;
      scales = `no realiza ninguna escala.`;
    }

    flights.push(newFlight);

    console.log( `Ha sido registrado un nuevo vuelo:\nVuelo con origen ${newFlight.from} y destino ${newFlight.to}. \nTiene un coste de: ${newFlight.cost}€ y ${scales}` );
    createOrDelete();
  }
}

function deleteIdFlight() {
  console.log(seeActualFlights());
  let flightToDelete = parseInt(prompt( `Indique el id del vuelo que desea eliminar:` ));
  if (flightToDelete === "" || isNaN(flightToDelete) || flightToDelete === null) {
    alert( `Por favor, introduzca un id válido.` );
    deleteIdFlight();
  } else {
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].id === flightToDelete) {
        console.log( `- El vuelo con Id: ${flights[i].id} \nOrigen ${flights[i].from} y destino ${flights[i].to} ha sido eliminado.` );

        flights.splice(i, 1);
      }
    }
  }
  seeActualFlights();
  createOrDelete();
}

function seeActualFlights() {
  console.log( `Los vuelos registrados actualmente son:` );
  for (let i = 0; i < flights.length; i++) {
    let ids = flights[i];
    if (ids.scale === false) {
      console.log( `${[i + 1]}) Vuelo con Id:${ids.id}, con origen ${ids.to} y destino ${ids.from}. \nTiene un coste de: ${ids.cost}€ / No realiza ninguna escala.` );
    } else {
      console.log( `${[i + 1]}) Vuelo con Id:${ids.id}, con origen ${ids.to} y destino ${ids.from}. \nTiene un coste de: ${ids.cost}€ / Si realiza escala.` );
    }
  }
}

function searchByPrice() {
  let flightsPrice = parseInt(prompt( `Indique cuál es su presupuesto para buscarle el vuelo más adecuado:` ));
  if (flightsPrice === "" || isNaN(flightsPrice) || flightsPrice === null) {
    alert( `Por favor, introduzca un precio válido.` );
  } else {
    console.log( `Hemos encontrado los siguientes vuelos para usted:` );

    for (let i = 0; i < flights.length; i++) {
      if (flightsPrice >= flights[i].cost) {
        console.log( `- Vuelo con origen ${flights[i].from} y destino ${flights[i].to} \nPrecio: ${flights[i].cost}€ ` );
      }
    }
  }
  const anotherSearch = confirm( `¿Desea volver a realizar otra búsqueda?` );
  if (anotherSearch) {
    searchByPrice();
  } else {
    alert( `Gracias por visitar la aerolínea de Isdi Coders, esperamos haber sido de ayuda ¡Hasta pronto!` );
  }
}

function playAirlines() {
  showFligths();
  adminOrUser();
}

playAirlines();



//function findId() {
//  let i = 0;
//while (i < flights.length) {
//if (flights.id === flights[i].id) {
//return i;
//} i++;
//}
//return false;
//}
