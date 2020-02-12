export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if(!response.ok) {
        throw Error('Problem with fetching reservations')
      }
      return response.json()
    })
}

export const postReservation = (newReservation) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newReservation),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(response => {
      if(!response.ok) {
        throw Error('Problem while posting reservation')
      }
      return response.json()
    })
}