export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if(!response.ok) {
        throw Error('Problem with fetching reservations')
      }
      return response.json()
    })
}