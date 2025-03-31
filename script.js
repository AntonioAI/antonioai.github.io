// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      // Get the target section
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Smooth scroll to the section
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add active class to navigation links based on scroll position
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current section link
        const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
  
  // Add scroll reveal animations
  const revealElements = document.querySelectorAll('.card, .contact-item');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - 50) {
        element.classList.add('revealed');
      }
    });
  };
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // Add .active class to nav link on page load
  const currentSection = window.location.hash || '#home';
  const currentLink = document.querySelector(`.nav-links a[href="${currentSection}"]`);
  
  if (currentLink) {
    currentLink.classList.add('active');
  }
}); 