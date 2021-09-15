let header = document.querySelector('.header');
let winHeight;

window.addEventListener('load', event => {
  // eslint-disable-next-line no-undef
  winHeight = window.innerHeight + 200;
})


// window.addEventListener('wheel', event => {
//   if (event.pageY > winHeight) {
//     header.classList.add('active');
//   }

//   if (event.pageY < winHeight) {
//     if (header.classList.contains('active')) {
//       header.classList.remove('active');
//     }
//   }

// })


// window.addEventListener('scroll', () => {
//   if (this.scrollTop >= 1) {
//     document.querySelector('.header-bg').classList.add('active');
//     console.log("working2");
//   } else {
//     document.querySelector('.header-bg').classList.remove('active');
//     console.log("working3");
//   }
//   console.log("working");
// })
