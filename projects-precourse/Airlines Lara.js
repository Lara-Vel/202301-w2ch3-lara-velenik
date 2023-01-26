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
  const userName = prompt("Hola, ¿cuál es su nombre? ");

  if (Number(userName) || userName === "" || userName === null) {
    alert("Por favor introduzca un nombre válido.");
    showFligths();
  } else {
    alert(
      `¡${
        userName[0].toUpperCase() + userName.substring(1)
      } ,bienvenido/a a la aerolínea de Isdi Coders! `
    );
  }

  let seeFligths = confirm(
    `${
      userName[0].toUpperCase() + userName.substring(1)
    } , ¿desea visualizar los vuelos del día? `
  );

  if (seeFligths) {
    for (let i = 0; i < flights.length; i++) {
      let ids = flights[i];
      if (ids.scale === false) {
        console.log(
          `${[i + 1]}) Vuelo con origen ${ids.to} y destino ${
            ids.from
          }. \nTiene un coste de: ${ids.cost}€ / No realiza ninguna escala. `
        );
      } else {
        console.log(
          `${[i + 1]}) Vuelo con origen ${ids.to} y destino ${
            ids.from
          }. \nTiene un coste de: ${ids.cost}€ / Si realiza escala. `
        );
      }
    }

    let averageCost = confirm(
      `${
        userName[0].toUpperCase() + userName.substring(1)
      } , ¿desea visualizar el coste medio de los vuelos? `
    );

    if (averageCost) {
      let totalCost = 0;
      for (let i = 0; i < flights.length; i++) {
        totalCost = totalCost + flights[i].cost;
      }
      console.log(
        `El coste medio de los vuelos es ${totalCost / flights.length}€`
      );

      let stopoverFlights = confirm(
        `${
          userName[0].toUpperCase() + userName.substring(1)
        } , ¿desea visualizar cuántos vuelos efectúan escalas?`
      );

      if (stopoverFlights) {
        console.log(`Los vuelos con escala son: `);
        for (let i = 0; i < flights.length; i++) {
          let scales = flights[i];
          if (scales.scale === true) {
            console.log(
              `- Salida desde ${scales.to} con destino ${scales.from} `
            );
          }
        }

        let lastFive = confirm(
          `${
            userName[0].toUpperCase() + userName.substring(1)
          } , ¿desea visualizar los últimos 5 vuelos del día?`
        );

        if (lastFive) {
          console.log(`Los últimos cinco vuelos del día son: `);
          for (let i = flights.length - 5; i < flights.length; i++) {
            let lastFlights = flights[i];
            console.log(
              `- Salida desde ${lastFlights.to} con destino ${lastFlights.from} `
            );
          }

          alert(
            `Gracias por visitar la aerolínea de Isdi Coders, esperamos haber sido de ayuda ¡Hasta pronto!`
          );
        } else {
          alert(
            `Gracias por visitar la aerolínea de Isdi Coders, esperamos haber sido de ayuda ¡Hasta pronto!`
          );
        }
      } else {
        alert(
          `Gracias por visitar la aerolínea de Isdi Coders, esperamos haber sido de ayuda ¡Hasta pronto!`
        );
      }
    } else {
      alert(
        `Gracias por visitar la aerolínea de Isdi Coders, esperamos haber sido de ayuda ¡Hasta pronto!`
      );
    }
  } else {
    alert(
      `Gracias por visitar la aerolínea de Isdi Coders, esperamos haber sido de ayuda ¡Hasta pronto!`
    );
  }
}
showFligths();
