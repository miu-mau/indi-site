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
