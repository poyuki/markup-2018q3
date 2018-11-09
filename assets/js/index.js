const sliderContentArray = [
  {
    author: 'John Doe',
    phrase: '"Quando praesent vis eu, in quo velit blandit. Vide hendrerit definitiones eum at.  ' +
    'Cu mea iracundia mnesarchum, labitur quaestio eu sea. Prima liber ne vis."'
  },
  {
    author: 'Johny Doe',
    phrase: '"Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. ' +
    'Risus sed vulputate odio ut enim blandit volutpat. Etiam tempor orci eu lobortis elementum."'
  },
  {
    author: 'Johnathan Doe',
    phrase: '"Porttitor leo a diam sollicitudin tempor id eu nisl nunc. ' +
    'Sed sed risus pretium quam vulputate dignissim suspendisse. Convallis aenean et tortor at risus viverra."'
  }
];

const sliderControlsEls=document.querySelectorAll('.slider-control-els');

sliderControlsEls.forEach((el)=>{
  el.addEventListener('click',(event)=>{
    let target=event.currentTarget,activeSlide,
      slideNumber=parseInt(target.getAttribute('data-number')),
      slideAuthor=document.querySelector('.slide-author'),
      slideContent=document.querySelector('.slide-content');

    if(!target.classList.contains('active-slide')){
      activeSlide=Array.prototype.filter.call(target.parentNode.children, function(child){
        return child.classList.contains('active-slide');
      });
      activeSlide[0].classList.remove('active-slide');
      target.classList.add('active-slide');
      slideAuthor.innerText=sliderContentArray[slideNumber].author;
      slideContent.innerText=sliderContentArray[slideNumber].phrase;
    }
  });
});