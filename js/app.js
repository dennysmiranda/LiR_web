const applebtn = document.querySelector('.applebtn');
const androidbtn = document.querySelector('.androidbtn');
const appledevicecontainer = document.querySelector('.apple-devicecontainer');
const appledevicecontainer2 = document.querySelector('.apple-devicecontainer2');

//Apple font and icon
const applename = document.querySelector('.applename');
const faapple = document.querySelector('.fa-apple');

//Android font and icon
const androidname = document.querySelector('.androidname')
const faandroid = document.querySelector('.fa-android');

androidbtn.addEventListener('click', () => {
    androidname.style.color = '#ee7b31'
    faandroid.style.color = '#ee7b31'
    applename.style.color = '#282828'
    faapple.style.color = '#282828'
    appledevicecontainer.style.display = 'none';
    appledevicecontainer2.classList.add('animate__animated')
    appledevicecontainer2.classList.add('animate__bounceIn')
    appledevicecontainer2.style.display = 'block';
});

applebtn.addEventListener('click', () => {
    applename.style.color = '#ee7b31'
    faapple.style.color = '#ee7b31'
    androidname.style.color = '#282828'
    faandroid.style.color = '#282828'
    appledevicecontainer.style.display = 'block';
    appledevicecontainer.classList.add('animate__animated')
    appledevicecontainer.classList.add('animate__bounceIn')
    appledevicecontainer2.style.display = 'none';
})

const iPhone = document.querySelector('.iPhone')
const iPad = document.querySelector('.iPad')
const macBook = document.querySelector('.macBook')
const iMac = document.querySelector('.iMac')
const appleWatch = document.querySelector('.appleWatch')

const eachitem = document.querySelector('.eachitem');
const eachitem2 = document.querySelector('.eachitem2');
const eachitem3 = document.querySelector('.eachitem3');
const eachitem4 = document.querySelector('.eachitem4');
const eachitem5 = document.querySelector('.eachitem5');

const eachitemOne = document.querySelector('.eachitemOne');
const eachitemTwo = document.querySelector('.eachitemTwo')
const eachitemThree = document.querySelector('.eachitemThree')
const eachitemFour = document.querySelector('.eachitemFour')
const eachitemFive = document.querySelector('.eachitemFive')


iPhone.addEventListener('click', () => {
    iPhone.style.color = '#ee7b31'
    iPad.style.color = '#282828'
    macBook.style.color = '#282828'
    iMac.style.color = '#282828'
    appleWatch.style.color = '#282828'

    eachitem.style.display = 'block'
    eachitem.classList.add('animate__animated')
    eachitem.classList.add('animate__bounceIn')
    eachitem2.style.display = 'none'
    eachitem3.style.display = 'none'
    eachitem4.style.display = 'none'
    eachitem5.style.display = 'none'
})

iPad.addEventListener('click', () => {
    iPhone.style.color = '#282828'
    iPad.style.color = '#ee7b31'
    macBook.style.color = '#282828'
    iMac.style.color = '#282828'
    appleWatch.style.color = '#282828'

    eachitem.style.display = 'none'
    eachitem2.style.display = 'block'
    eachitem2.classList.add('animate__animated')
    eachitem2.classList.add('animate__bounceIn')
    eachitem3.style.display = 'none'
    eachitem4.style.display = 'none'
    eachitem5.style.display = 'none'
})

macBook.addEventListener('click', () => {
    iPhone.style.color = '#282828'
    iPad.style.color = '#282828'
    macBook.style.color = '#ee7b31'
    iMac.style.color = '#282828'
    appleWatch.style.color = '#282828'

    eachitem.style.display = 'none'
    eachitem2.style.display = 'none'
    eachitem3.style.display = 'block'
    eachitem3.classList.add('animate__animated')
    eachitem3.classList.add('animate__bounceIn')
    eachitem4.style.display = 'none'
    eachitem5.style.display = 'none'
})

iMac.addEventListener('click', () => {
    iPhone.style.color = '#282828'
    iPad.style.color = '#282828'
    macBook.style.color = '#282828'
    iMac.style.color = '#ee7b31'
    appleWatch.style.color = '#282828'

    eachitem.style.display = 'none'
    eachitem2.style.display = 'none'
    eachitem3.style.display = 'none'
    eachitem4.style.display = 'block'
    eachitem4.classList.add('animate__animated')
    eachitem4.classList.add('animate__bounceIn')
    eachitem5.style.display = 'none'
})

appleWatch.addEventListener('click', () => {
    iPhone.style.color = '#282828'
    iPad.style.color = '#282828'
    macBook.style.color = '#282828'
    iMac.style.color = '#282828'
    appleWatch.style.color = '#ee7b31'

    eachitem.style.display = 'none'
    eachitem2.style.display = 'none'
    eachitem3.style.display = 'none'
    eachitem4.style.display = 'none'
    eachitem5.style.display = 'block'
    eachitem5.classList.add('animate__animated')
    eachitem5.classList.add('animate__bounceIn')
})

const iPhone2 = document.querySelector('.iPhone2')
const iPad2 = document.querySelector('.iPad2')
const macbook2 = document.querySelector('.macBook2')
const iMac2 = document.querySelector('.iMac2')
const appleWatch2 = document.querySelector('.appleWatch2')

iPhone2.addEventListener ('click', () => {
    eachitemOne.style.display = 'block'
    eachitemOne.classList.add('animate__animated')
    eachitemOne.classList.add('animate__bounceIn')
    eachitemTwo.style.display = 'none'
    eachitemThree.style.display = 'none'
    eachitemFour.style.display = 'none'
    eachitemFive.style.display = 'none'

    iPad2.style.color = '#282828'
    iPhone2.style.color = '#ee7b31'
    macbook2.style.color = '#282828'
    iMac2.style.color = '#282828'
    appleWatch2.style.color = '#282828'
})

iPad2.addEventListener ('click', () => {
    eachitemTwo.style.display = 'block'
    eachitemTwo.classList.add('animate__animated')
    eachitemTwo.classList.add('animate__bounceIn')
    eachitemOne.style.display = 'none'
    eachitemThree.style.display = 'none'
    eachitemFour.style.display = 'none'
    eachitemFive.style.display = 'none'

    iPhone2.style.color = '#282828'
    iPad2.style.color = '#ee7b31'
    macbook2.style.color = '#282828'
    iMac2.style.color = '#282828'
    appleWatch2.style.color = '#282828'
})

macbook2.addEventListener ('click', () => {
    eachitemThree.style.display = 'block'
    eachitemThree.classList.add('animate__animated')
    eachitemThree.classList.add('animate__bounceIn')
    eachitemOne.style.display = 'none'
    eachitemTwo.style.display = 'none'
    eachitemFour.style.display = 'none'
    eachitemFive.style.display = 'none'

    iPhone2.style.color = '#282828'
    macbook2.style.color = '#ee7b31'
    iPad2.style.color = '#282828'
    iMac2.style.color = '#282828'
    appleWatch2.style.color = '#282828'
})

iMac2.addEventListener ('click', () => {
    eachitemFour.style.display = 'block'
    eachitemFour.classList.add('animate__animated')
    eachitemFour.classList.add('animate__bounceIn')
    eachitemOne.style.display = 'none'
    eachitemTwo.style.display = 'none'
    eachitemThree.style.display = 'none'
    eachitemFive.style.display = 'none'

    iPhone2.style.color = '#282828'
    iMac2.style.color = '#ee7b31'
    macbook2.style.color = '#282828'
    iPad2.style.color = '#282828'
    appleWatch2.style.color = '#282828'
})

appleWatch2.addEventListener ('click', () => {
    eachitemFive.style.display = 'block'
    eachitemFive.classList.add('animate__animated')
    eachitemFive.classList.add('animate__bounceIn')
    eachitemOne.style.display = 'none'
    eachitemTwo.style.display = 'none'
    eachitemFour.style.display = 'none'
    eachitemThree.style.display = 'none'

    iPhone2.style.color = '#282828'
    appleWatch2.style.color = '#ee7b31'
    macbook2.style.color = '#282828'
    iMac2.style.color = '#282828'
    iPad2.style.color = '#282828'
})

const burger = document.querySelector('.burger')
const mblinks = document.querySelector('.mb-navlinks')

burger.addEventListener('click', () => {
    mblinks.classList.toggle('mb-navlinks-active')
})

const body = document.querySelector('body');
const bodyHeight = body.getBoundingClientRect().height;
const ttop = document.querySelector('.t-top')


$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.t-top').fadeIn();
    } else {
      $('.t-top').fadeOut();
    }
  });

ttop.addEventListener('click', () => {
    $("html, body").animate({scrollTop: 0}, "slow");
});

$('.nav-links a, .mb-navlinks a, .contactbtn, .quoteBtn').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash

        $('html, body').animate (
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});


const navLinkBar = document.querySelector('.mb-navlinks')
const navLinks = document.querySelectorAll('.mb-navlinks a')


 
