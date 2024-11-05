document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#card-carousel', {
          perPage    : 2,
          breakpoints: {
              640: {
                  perPage: 1,
              },
          },
    } ).mount();
  } );

  document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const body = document.body;

    burger.addEventListener('click', function() {
        // Toggle the active class on burger
        this.classList.toggle('active');
        
        // Toggle the open class on nav
        nav.classList.toggle('open');
        
        // Toggle overflow on body
        body.classList.toggle('menu-open');
    });

    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('open');
            body.classList.remove('menu-open');
        });
    });
});
