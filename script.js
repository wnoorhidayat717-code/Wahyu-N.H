const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 200;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show");
    } else {
      sec.classList.remove("show");
    }
  });
});

 const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    function initCombinedObserver() {
        const combinedSection = document.querySelector('.combined-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const timelineItems = combinedSection.querySelectorAll('.timeline-item');
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 150);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        if (combinedSection) {
            observer.observe(combinedSection);
        }
        
        const timelineItems = combinedSection.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    }
    
    initCombinedObserver();