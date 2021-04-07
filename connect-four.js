window.addEventListener('DOMContentLoaded', event => {

  const clickTargets = document.querySelectorAll('.click-target');

  clickTargets.forEach( target => {
    target.addEventListener('mouseenter', event => {
      event.target.classList.add('full');
    })
    target.addEventListener('mouseleave', event => {
      event.target.classList.remove('full');
    })

    // .style.full.click-target:hover;
  })
  // listen to the column
  // set a for each if the column is full
      // if full, set the display of the target to disabled
      //style.full.click-target:hover
})
