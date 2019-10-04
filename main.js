//create a timeline instance
let tl = new TimelineMax();

tl.set('.img1', {x: 110})
  .set('.p1', {x: 110})
  .set('.img2', {x: 90})
  .set('.p2', {x: 90})
  .set('.img3', {x: 75})
  .set('.p3', {x: 75})
  .to('.img1', 1, {opacity: 1, scale: 2.5})
  .to('.img1', 1, {opacity: 1, scale: 1, onComplete: complete});

function complete() {
  tl.to('#title', 2.5, {opacity: 1})
    .to('.img1', 0.8,  {opacity: 1, x: 0}, 2.5)
    .to('.p1', 0.8,  {opacity: 1, x: 0}, 2.5)
    .to('.img2', 0.8, {opacity: 1, x: 0}, 2.75)
    .to('.p2', 0.8, {opacity: 1, x: 0}, 2.75)
    .to('.img3', 0.8, {opacity: 1, x: 0}, 3)
    .to('.p3', 0.8, {opacity: 1, x: 0}, 3)
}
