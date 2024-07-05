window.addEventListener("mousemove",function(dets)
{
    let rect = this.document.querySelector("#rectengle");
    let xval = gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,
    window.innerWidth- (100 + rect.getBoundingClientRect().width/2),dets.clientX)
    gsap.to("#rectengle",{
        left: xval,
        ease : Power3
    })
})