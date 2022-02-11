$(document).ready(function(){

    $(window).scroll(() => {

        let scrollDistance  = $(window).scrollTop();
         $(".section").each((i, el) =>  {
            
             if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                 $("nav a").each((i, el) => {
                    if($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                 });
                    
                 $('nav li:eq('+ i +')').find('a').addClass('active');
            }  

        });

    });

});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
      $('html,body').animate({scrolltop: $(valHref).offset().top - 50 + "px"});
});


// 


const placeholder = "https://via.placeholder.com/198/808080 ?Text=project.com";
const targets = document.querySelectorAll('[data-src]');
targets.forEach(target => {
    target.src = placeholder
});

const options = {
    root: null,
    rootMaargin: '0px',
    threshold: 0.05
};

const loadImage = function (entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.src = entry.target.getAttribute('data-src');
        }
    });
};

const observer = new IntersectionObserver(loadImage, options);
targets.forEach(target => {
    observer.observe(target);
})


// 


document.body.onload = function() {
    
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');  
        if( !preloader.classList.contains('done') ){
            preloader.classList.add('done');
        }
    }, 1000);
    
}

// 

setTimeout(function() {
    let option = {threshold: 0.1};   
    let observer = new IntersectionObserver(onEntry, option);
        

        let elements = $(".element-animation");
        elements.each((i,el) => {
        observer.observe(el);
        }); 

    function onEntry (entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.remove('title__container');
                change.target.classList.add('title__container-animation');
            }
        });
    }
}, 1400);


/*
let typeResult =
    prompt("Какой сайт вы хотите?\n0 - Сайт-визитка\n1 - Сайт электронной коммерции\n2 - интернет-портал\n3 - Социальная платформа", "");

let designResult =
    prompt("Выберите дизайн сайта?\n0 - Дизайн с анимацией\n1 - Креативный\n2 - дизайн с 3D-виазуализацией", "");

let adaptiveResult =
    prompt("Адаптировать под мобильные устройства?\n0 - да\n1 - нет", "");

let priceType = [20000, 45000, 50000, 65000];
let priceDesign = [5000, 5000, 7000];
let priceAdaptive = [6000, 0];

let timeType = [2, 4, 6, 5];
let timeAdaptive = [1, 0];
let resTime = timeType[typeResult] + timeAdaptive[adaptiveResult];

function calc() {
    return priceType[typeResult] + priceDesign[designResult] + priceAdaptive[adaptiveResult];
}

alert("Итого " + calc() + " рублей.\nПримерное время занимаемой работы: " + resTime + " дней.");
*/

// slider-case
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function() {
    offset = offset - 1168;
    if(offset < -3504){
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
    console.log('+');
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset + 1168;
    if(offset == 1168){
        offset = -3504;
    }
    sliderLine.style.left = offset + 'px';
});

// slider-reviews
let offsetReviews = 0;
const sliderReviewsLine = document.querySelector('.slider-reviews-line');

let recallFirst = document.querySelector('.recall-first');
let firstSide = document.querySelector('.first-side');

let recallSecond = document.querySelector('.recall-second');
let secondSide = document.querySelector('.second-side');

let recallThird = document.querySelector('.recall-third');
let thirdSide = document.querySelector('.third-side');


document.querySelector('.radio__item1').addEventListener('click', function() {
    if(offsetReviews == 0){
        return;
    }else{
        offsetReviews = 0;
        sliderReviewsLine.style.opacity = 0;
        setTimeout(() =>{
            sliderReviewsLine.style.left = offsetReviews + 'px';
        },200);
        setTimeout(() =>{
            sliderReviewsLine.style.opacity = 1;
        },200);
    }
    
    if(recallFirst.classList.contains('reviews-active-recall') || firstSide.classList.contains('reviews-active-side')){
        return;
    }else{
        recallFirst.classList.remove('reviews-passive-recall');
        firstSide.classList.remove('reviews-passive-side');

        recallFirst.classList.add('reviews-active-recall');
        firstSide.classList.add('reviews-active-side');

        if(recallSecond.classList.contains("reviews-active-recall") || secondSide.classList.contains('reviews-active-side')){
            recallSecond.classList.remove("reviews-active-recall");
            recallSecond.classList.add("reviews-passive-recall");

            secondSide.classList.remove('reviews-active-side');
            secondSide.classList.add('reviews-passive-side');
        }else if(recallThird.classList.contains("reviews-active-recall") || thirdSide.classList.contains('reviews-active-side')){
            recallThird.classList.remove("reviews-active-recall");
            recallThird.classList.add("reviews-passive-recall");

            thirdSide.classList.remove('reviews-active-side');
            thirdSide.classList.add('reviews-passive-side');
        }else{
            return;
        }
    }
});

document.querySelector('.radio__item2').addEventListener('click', function() {
    if(offsetReviews == -99){
        return;
    }else{
        offsetReviews = -99;
        sliderReviewsLine.style.opacity = 0;
        setTimeout(() =>{
            sliderReviewsLine.style.left = offsetReviews + 'px';
        },200);
        setTimeout(() =>{
            sliderReviewsLine.style.opacity = 1;
        },200);
    }
    
    if(recallSecond.classList.contains('reviews-active-recall') || secondSide.classList.contains('reviews-active-side')){
        return;
    }else{
        recallSecond.classList.remove('reviews-passive-recall');
        secondSide.classList.remove('reviews-passive-side');

        recallSecond.classList.add('reviews-active-recall');
        secondSide.classList.add('reviews-active-side');

        recallFirst.classList.remove('reviews-active-recall');
        firstSide.classList.remove('reviews-active-side');

        recallFirst.classList.add('reviews-passive-recall');
        firstSide.classList.add('reviews-passive-side');

        recallThird.classList.remove("reviews-active-recall");
        thirdSide.classList.remove('reviews-active-side');

        recallThird.classList.add("reviews-passive-recall");
        thirdSide.classList.add('reviews-passive-side');
    }
});

document.querySelector('.radio__item3').addEventListener('click', function() {
    if(offsetReviews == -198){
        return;
    }else{
        offsetReviews = -198;
        sliderReviewsLine.style.opacity = 0;
        setTimeout(() =>{
            sliderReviewsLine.style.left = offsetReviews + 'px';
        },200);
        setTimeout(() =>{
            sliderReviewsLine.style.opacity = 1;
        },200);
    }
    

    if(recallThird.classList.contains('reviews-active-recall') | thirdSide.classList.contains('reviews-active-side')){
        return;
    }else{
        recallThird.classList.remove('reviews-passive-recall');
        thirdSide.classList.remove('reviews-passive-side');

        recallThird.classList.add('reviews-active-recall');
        thirdSide.classList.add('reviews-active-side');

        recallFirst.classList.remove("reviews-active-recall");
        firstSide.classList.remove('reviews-active-side');

        recallFirst.classList.add("reviews-passive-recall");
        firstSide.classList.add('reviews-passive-side');

        recallSecond.classList.remove("reviews-active-recall");
        secondSide.classList.remove('reviews-active-side');

        recallSecond.classList.add("reviews-passive-recall");
        secondSide.classList.add('reviews-passive-side');
    }
});




const time = 2000;
const step = 1;
const stepFast = 100;

function outNum(num, elem) {
    let el = document.querySelector('#' + elem);
    let n = 0;

    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            }
            el.innerHTML = n;
        },
        t);
}

function outNumFast(num, elem) {
    let el = document.querySelector('#' + elem);
    let n = 0;

    let t = Math.round(time / (num / stepFast));
    let interval = setInterval(() => {
            n = n + stepFast;
            if (n == num) {
                clearInterval(interval);
            }
            el.innerHTML = n;
        },
        t);
}



outNum(120, 'out-1');
outNumFast(4600, 'out-2');
outNum(340, 'out-3');
outNum(23, 'out-4');
