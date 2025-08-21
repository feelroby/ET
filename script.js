function toggleMenu() {
    const menu = document.querySelector('.ul-nav');
    menu.classList.toggle('open');
}





document.querySelectorAll('.li-nav').forEach(item => {
    item.addEventListener('click', () => {
        const scrollPosition = item.getAttribute('data-scroll');
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.li-sec2 h2');
    let maxTarget = 0; 

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        if (target > maxTarget) {
            maxTarget = target;
        }
    });

    const options = {
        rootMargin: '-50px 0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 3000; 

                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / (duration / 10); 
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10); 
                    } else {
                        counter.innerText = target + "+"; // Tambahkan "+" setelah nilai target
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const containerWappimhere = document.querySelector('.container-wappimhere');

    if (containerWappimhere) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => { // Tambahkan delay
                        containerWappimhere.classList.add('in-viewport');
                    }, 500); // Delay 500 milidetik (0.5 detik)
                } else {
                    containerWappimhere.classList.remove('in-viewport');
                }
            });
        });

        observer.observe(containerWappimhere);
    } else {
        console.error('Elemen .container-wappimhere tidak ditemukan!');
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll('.box'); // Gunakan querySelectorAll

    if (boxes.length > 0) { // Periksa apakah ada elemen yang ditemukan
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('in-viewport'); // Gunakan entry.target
                    }, 300); 
                } else {
                    entry.target.classList.remove('in-viewport'); // Gunakan entry.target
                }
            });
        });

        boxes.forEach(box => {
            observer.observe(box); 
        });
    } else {
        console.error('Tidak ada elemen .box yang ditemukan!');
    }
});



document.addEventListener('DOMContentLoaded', (event) => {
    const section3 = document.querySelector('.section-3');

    if (section3) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                    section3.classList.add('in-viewport');
                }, 50);
            } 
            });
        });

        observer.observe(section3);
    } else {
        console.error('Elemen .section-3 tidak ditemukan!');
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    const section6 = document.querySelector('.section-6');

    if (section6) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                    section6.classList.add('in-viewport');
                }, 0);
            } 
            });
        });

        observer.observe(section6);
    } else {
        console.error('Elemen .section-6 tidak ditemukan!');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const section7 = document.querySelector('.section-7');

    if (section7) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                    section7.classList.add('in-viewport');
                }, 0);
            } 
            });
        });

        observer.observe(section7);
    } else {
        console.error('Elemen .section-7 tidak ditemukan!');
    }
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            const offsetPosition = targetElement.offsetTop - 100; // Sesuaikan dengan jarak yang diinginkan

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.ul-nav a');

    function changeNav() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach(link => link.classList.remove('active'));
        if (index >= 0) {
            navLinks.forEach(link => {
                if (link.getAttribute('data-target') === sections[index].id) {
                    link.classList.add('active');
                }
            });
        }
    }

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', changeNav);

    // Tambahkan event listener untuk mengupdate saat dokumen di-load
    changeNav();
});


window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(function(section) {
      let rect = section.getBoundingClientRect();
      let id = section.getAttribute('id');
  
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  




