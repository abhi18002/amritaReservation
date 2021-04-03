const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const floor = document.getElementById('movie');
const time = document.getElementById('slot')
const day = document.getElementById('day')


container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

  }
});
floor.addEventListener('change', e => {

});

//
// populateUI();
//
// let ticketPrice = +floor.value;
//
// function setMovieData(movieIndex, moviePrice) {
//   localStorage.setItem('selectedMovieIndex', movieIndex);
//   localStorage.setItem('selectedMoviePrice', moviePrice);
// }
//
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll('.row .seat.selected');
//
//   const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
//
//   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
//
//   const selectedSeatsCount = selectedSeats.length;
//
//   count.innerText = selectedSeatsCount;
// }
//
// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
//
//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add('selected');
//       }
//     });
//   }
//
//   const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
//
//   if (selectedMovieIndex !== null) {
//     floor.selectedIndex = selectedMovieIndex;
//   }
// }
//
