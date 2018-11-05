const sliderContentArray = [
  {'John Doe': '"Quando praesent vis eu, in quo velit blandit. Vide hendrerit definitiones eum at. ' +
  'Cu mea iracundia mnesarchum, labitur quaestio eu sea. Prima liber ne vis."'}
];

(function () {
  $('body').on('click', '.slider-control-els', (event) => {
    let currentEl = $(event.currentTarget);
    if (!currentEl.hasClass('active-slide')) {
      currentEl.addClass('active-slide');
      currentEl.siblings('.slider-control-els').removeClass('active-slide');
    }
  });
})();