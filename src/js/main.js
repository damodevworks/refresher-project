import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);

//Header section




let timeLineHeader = gsap.timeline();

document.fonts.ready.then(() =>{
    let splitHeader = SplitText.create('.animate-headline-main', {
    type: "words"
});

let splitPara = SplitText.create('.paragraph_header', {
    type: 'chars',
    smartWrap: true
});

     timeLineHeader.fromTo(splitHeader.words, {
    opacity:0,
   }, 
{
    opacity: 1,
    duration: 1.7,
    stagger: 0.5,
    ease: "power4.out",
});

timeLineHeader.fromTo(splitPara.chars, 

{
opacity: 0
},

{
opacity: 1,
duration: 0.02,
stagger: 0.02,
ease: "power4.out",
}, 2.3);
});
  


//Main Section

const mainHD = document.querySelector('.main_headline');
const paraMain = document.querySelector('.paraMain');

 gsap.fromTo(mainHD, 
// From:
{
    y: 100,
    opacity: 0
}, 
{
     scrollTrigger: {
        trigger: mainHD,
        end: "top 50%",
        scrub: 1
    },
    y: 0,
    opacity: 1,
    duration: 1.3,
    ease: "power4.out",
});

gsap.fromTo(paraMain, 
// From:
{
    y: 100,
    opacity: 0
}, 
{
     scrollTrigger: {
        trigger: paraMain,
        end: "top 50%",
        scrub: 1
    },
    y: 0,
    opacity: 1,
    duration: 1.3,
    ease: "power4.out",
    
});

gsap.fromTo(".svg_main", 
{
    opacity: 0,
    y: 100,
    scale: 0.8
},
{
    scrollTrigger: {
        trigger: ".svg_container",
        end: "top 40%",
        scrub: 2
    },
    y: 0,
    opacity: 1,
    duration: 1.3,
    scale: 1,
    ease: "power4.out",
    stagger: 
    {
        each: 0.2,
        from: 'random'
    }
}
);

// Parallax section



const bg = document.querySelector('.parallax_bg');

let media = gsap.matchMedia();

function createParallax(bgY, createY, buildY) {
     gsap.to(bg, 
{
    y: bgY,
    ease: "power2.out",
    scrollTrigger: 
    {
        trigger: ".parallax_section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".create_px", 
{
    y: createY,
    ease: "power4.inOut",
    scrollTrigger: 
    {
        trigger: ".parallax_section",
        start: "top bottom",
        scrub: 4,
        stagger: 1
    }
});

gsap.to(".build_px", 
{
    y: buildY,
    ease: "power4.inOut",
    scrollTrigger: 
    {
        trigger: ".parallax_section",
        start: "top 120%",
        scrub: 3,
    }
});
}


// Responsiveness on landscape (mobile)

media.add("(max-width: 1200px) and (orientation: landscape)", () => {
    console.log('Landscape mobile/tablet!');
    createParallax(-100, "40vh", "-40vh");
});

media.add("(min-width: 1201px)", () => {
    console.log('Desktop / large screens!');
    createParallax(-100, "50vh", "-50vh");
});

media.add("(orientation: portrait)", () => {
    console.log('Portrait orientation!');
    createParallax(-100, "40vh", "-40vh");
});





gsap.from(".showcase", {
  scale: 0.95,
  filter: "blur(10px)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".showcase",
    start: "top 110%",
    end: "bottom 100%",
    scrub: true
  }
});


const linesTL = gsap.timeline({ paused: true });



linesTL.fromTo(".line", {
  scaleX: 0,
  transformOrigin: "left center"
}, {
  scaleX: 1,
  duration: 5,
  ease: "power2.out",
}, 0) // start at 0

document.fonts.ready.then(() => {

    let splitWork = SplitText.create('.mywork', {
    type: 'chars'
});

    linesTL.fromTo(splitWork.chars, 
    {
    opacity: 0
    },

    {
    opacity: 1,
    stagger: 0.1
    }, 0.2);
});



linesTL.fromTo('.travelWish', 
{
scale: 0.50,
opacity: 0
},
{
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: "expo.out",

     onComplete: () => {
      gsap.set('.travelWish', { clearProps: 'transform' });
},
}, 1.5);

linesTL.fromTo('.HH', 
{
scale: 0.50,
opacity: 0
},
{
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: "expo.out",
      onComplete: () => {
      gsap.set('.HH', { clearProps: 'transform' });
},
}, 2.5
);

    linesTL.to('.travelWish_overlay', 
    {
    width: '0%',
    duration: 2.5,
    ease: "power2.out",

    }, 1)

    linesTL.to('.HH_overlay', 
    {
    width: '0%',
    duration: 2.5,
    ease: "power2.out",

    onComplete: () => {
        document.querySelectorAll('.HH, .travelWish').forEach(el => {
            el.classList.remove('unrevealed');
        });
    }


    }, 2)

    

ScrollTrigger.create({
  trigger: ".showcase",
  start: "top 40%",
  animation: linesTL,
  toggleActions: "play none none none",
  once: true
});



// Reveal Projects fixed section: 

const logos = document.querySelectorAll('.HH, .travelWish');
const projectSectionReveal = document.querySelector('.projects_reveal');
const exitBtn = document.querySelector('.exit');
const revealContent = document.querySelector('.projectsContent');

const projectContent = 
{
 hh: {
    title: 'Hospitality Hashtag - Creative Marketing Agency',
    content: `This is my project that I've created using WordPress combining modern GSAP animations and a sleek look!`,
    urlImage: ['./img/Projects Showcase/HH/Screenshot 2025-07-03 224925.png', 
        './img/Projects Showcase/HH/Screenshot 2025-07-03 225001.png',
    './img/Projects Showcase/HH/Screenshot 2025-07-03 225040.png']
 },
 tW: {
    title: 'Travel Wish - Travel Blog For an Influencer.',
    content: `This was my first big project built in  WordPress 3 years ago. I learned a lot since then!`,
    urlImage: ['./img/Projects Showcase/Travel Wish/Screenshot 2025-07-03 224739.png', 
        './img/Projects Showcase/Travel Wish/Screenshot 2025-07-03 224751.png',
    './img/Projects Showcase/Travel Wish/Screenshot 2025-07-03 224811.png']
 }
};

// Triggering the click 
logos.forEach((project) => {
    project.addEventListener('click', () => {
        //Init
        revealContent.innerHTML = '';
        document.body.style.overflow = 'hidden';

        const overlayProjects = document.createElement('div');
        overlayProjects.className = 'overlay-projects';
        revealContent.appendChild(overlayProjects);

        projectSectionReveal.classList.add('active');

        let check = project.classList.contains('HH');

        if (check) {    
            const title = document.createElement('h1');
            title.className = 'revealTitle';
            title.textContent = projectContent['hh']['title'];

            const para = document.createElement('p');
            para.className = 'revealPara';
            para.textContent = projectContent['hh']['content'];

            const imgContainer = document.createElement('div');
            imgContainer.className = 'img_projects_container';

            projectContent['hh']['urlImage'].forEach((url) => {
               const img = document.createElement('div');
                img.className = 'project-image';
                img.style.backgroundImage = `url('${url}')`;
                imgContainer.appendChild(img);
            });

            revealContent.appendChild(title);
            revealContent.appendChild(para);
            revealContent.appendChild(imgContainer);

            
             document.fonts.ready.then(() =>{
            let projectsTitle = SplitText.create('.revealTitle', {
                type: 'chars',
                smartWrap: true
            });
            gsap.fromTo(projectsTitle.chars, 
            {
                opacity: 0,
                y: 100
            },

            {
                opacity: 1,
                y: 0,
                stagger: 
                {
                    amount: 1,
                    from: 'random'
                },
                ease: "power4.out",
            }
        
        );
        });

        } else {
             const title = document.createElement('h1');
            title.className = 'revealTitle';
            title.textContent = projectContent['tW']['title'];

            const para = document.createElement('p');
            para.className = 'revealPara';
            para.textContent = projectContent['tW']['content'];

            const imgContainer = document.createElement('div');
            imgContainer.className = 'img_projects_container';

            projectContent['tW']['urlImage'].forEach((url) => {
               const img = document.createElement('div');
                img.className = 'project-image';
                img.style.backgroundImage = `url('${url}')`;
                imgContainer.appendChild(img);
            });

            revealContent.appendChild(title);
            revealContent.appendChild(para);
            revealContent.appendChild(imgContainer);

            
             document.fonts.ready.then(() =>{
            let projectsTitle = SplitText.create('.revealTitle', {
                type: 'chars',
                smartWrap: true
            });
            gsap.fromTo(projectsTitle.chars, 
            {
                opacity: 0,
                y: 100
            },

            {
                opacity: 1,
                y: 0,
                stagger: 
                {
                    amount: 1,
                    from: 'random'
                },
                ease: "power4.out",
            }
        
        );
        });
        };

        

        gsap.to(projectSectionReveal, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "expo.inOut"
        });

    });
});

exitBtn.addEventListener('click', () => {

    document.body.style.overflow = '';

    projectSectionReveal.classList.remove('active');

    gsap.to(projectSectionReveal, {
        opacity: 0,
        scale: 0.85,
        duration: 1,
        ease: "expo.inOut"
    });

});


const footer = gsap.timeline({ paused: true });

footer.fromTo(".footer-heading", 
    {
        opacity: 0,


    },

    {
        opacity: 1,
        duration: 1,
        ease: "expo.inOut"
        
}, 0);

footer.to(".reveal-footer", 
    {
        y: "0%",
        duration: 2,
        ease: "expo.inOut"
    }, 0.5);

    footer.to(".line-reveal", 
        {
            width: "30%",
            duration: 2,
            ease: "expo.inOut"
        }, 0.5);

    footer.to(".link-footer", 
        {
            opacity: 1,
            duration: 1,
            ease: "expo.inOut",
            onComplete: () => {
                document.querySelector(".link-footer").classList.remove("unrevealed");
            }
    }, 0.5)

ScrollTrigger.create(
    
{
    trigger: ".trigger-footer",
    start: "top top",
    toggleActions: "play none none none",
    animation: footer

});