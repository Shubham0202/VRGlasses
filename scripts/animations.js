tl=gsap.timeline();
tl.from('nav div,nav li',{
    y:-100,
    opacity:0,
    delay:.5,
    stagger:.2,
});
tl.from('.page1-headings h2,.sub-title',{
    x:-100,
    opacity:0,
    delay:.5,
    stagger:.2
});
tl.from('.btn-container',{
    x:-100,
    opacity:0,
    delay:.5,
    stagger:.2
});
tl.from('.img-org',{
    scale:0,
    opacity:0,
})

gsap.from('.main-imges img,.page2-headings h2,.page2-buttons',{
    scale:0,
    opacity:0,
    delay:.5,
    x:500,
    stagger:.5,
    scrollTrigger:{
        // markers:true,
        trigger:".main-imges",
        scroller:"body",
        // start: "top 100%"
    }

})
gsap.from('.page3-headings h2,.page3-headings p ,.page3-img',{
    scale:0,
    opacity:0,
    delay:.5,
    x:-40,
    stagger:.2,
    scrollTrigger:{
        // markers:true,
        trigger:".page3-headings",
        scroller:"body",
    }

})
