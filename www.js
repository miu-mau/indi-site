function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('element-show');
    }
    else{
      if (!entry.target.classList.contains('picture')){
        entry.target.classList.remove('element-show');
      }
    }
  });
}

let options = {
  threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);

let pictureElements = document.querySelectorAll('.picture');
let rectangleElements = document.querySelectorAll('.rectangle');
let miniElements = document.querySelectorAll('.mini');

for (let elm of pictureElements) {
  observer.observe(elm);
}

for (let elm of rectangleElements) {
  observer.observe(elm);
}

for (let elm of miniElements) {
  observer.observe(elm);
}

// let elements = [
//   { id: 'ten_g', defaultImage: 'hollow_knight.jpeg', hoverImage: 'Hollow_Knigh.jpeg' },
//   { id: 'nine_g', defaultImage: 'Undertale.jpeg', hoverImage: 'undertale_hover.jpeg' },
//   { id: 'eight_g', defaultImage: 'Yuppie_Psycho.jpeg', hoverImage: 'yuppie_psycho_hover.jpeg' },
//   { id: 'even_g', defaultImage: 'Stardew_Valley.jpeg', hoverImage: 'tardew_valley_hover.jpeg' },
//   { id: 'ix_g', defaultImage: 'The_forest.jpeg', hoverImage: 'the_forest_hover.jpeg' },
//   { id: 'five_g', defaultImage: 'omori.jpeg', hoverImage: 'omori_hover.jpeg' },
//   { id: 'four_g', defaultImage: 'night_in_the_woods.jpeg', hoverImage: 'night_in_the_woods_hover.jpeg' },
//   { id: 'three_g', defaultImage: 'OneShot.jpeg', hoverImage: 'oneshot_hover.jpeg' },
//   { id: 'two_g', defaultImage: 'ky.jpeg', hoverImage: 'ky_hover.jpeg' },
//   { id: 'one_g', defaultImage: 'Outlast.jpeg', hoverImage: 'outlast_hover.jpeg' }
// ];

// elements.forEach((element) => {
//   let elm = document.getElementById(element.id);
//   window.addEventListener('scroll', () => {
//     let scrollPosition = window.scrollY;
//     if (scrollPosition > 500) {
//       elm.style.backgroundImage = `url(${element.hoverImage})`;
//     } else {
//       elm.style.backgroundImage = `url(${element.defaultImage})`;
//     }
//   });
// });