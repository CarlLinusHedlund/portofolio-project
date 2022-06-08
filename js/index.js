// Slide guide Intersection Observer
const faders = document.querySelectorAll(".fade-in")
const sections = document.querySelectorAll(".section")
const navLinks = document.querySelectorAll(".nav-links-desktop")
const navBars = document.querySelectorAll(".bar")


//Helper Function
const actionSectionHandler = (currentSectionID) => {
    // console.log(currentSectionID)
    navLinks.forEach(link =>{
        // console.log(link);
        if (link.dataset.section === currentSectionID){
            link.classList.add('active');
            return
        }
        link.classList.remove('active')
    })

    navBars.forEach(bar =>{
        // console.log(bar);
        if (bar.dataset.section === currentSectionID){
            bar.classList.add('active');
            return
        }
        bar.classList.remove('active')
    })
}

//intersection observer
sectionWatcherCallback = (section, sectionWatcher) => {
    section.forEach(section => {
        if(!section.isIntersecting){
            return
        }
        // console.log(section);
        actionSectionHandler(section.target.id);
    })
}

const sectionWatcherOptions = {
    threshold: .5
};

const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions)


sections.forEach(section => {
    sectionWatcher.observe(section)
})








//Intersection Observer for fade-in of  slide nav and about me text
const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
    entries.forEach(entry => {
        entry.target.classList.toggle('appear');

    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})