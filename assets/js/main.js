/**
 * Rahma Mahbub - Portfolio Scripts
 * Software Engineer & Full-Stack Web Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  /*==================== CASE STUDY DATA ====================*/
  const projectDetails = {
    healthinsight: {
      title: 'HealthInsight',
      category: 'AI-Powered Healthcare Web Platform',
      image: 'assets/img/portfolio02.png',
      alt: 'HealthInsight AI Healthcare Platform Interface',
      overview: 'HealthInsight is an intelligent healthcare web platform integrating machine learning predictive models to evaluate disease risks, assist in symptom assessment, and deliver preventative health insights.',
      problem: 'Patients frequently lack accessible, rapid preliminary assessment tools to evaluate symptom combinations before clinic visits, which can lead to delayed consultations or unnecessary anxiety.',
      solution: 'Engineered a unified web application bridging a Python/Flask machine learning service with a relational database backend and responsive frontend, giving users actionable preliminary risk insights.',
      features: [
        'Machine learning-driven symptom analysis and risk prediction modules',
        'Secure patient profile and diagnostic history tracking',
        'Intuitive health assessment forms with real-time validation',
        'API communication bridge connecting Flask ML microservices and MySQL',
        'Responsive clinician and patient consultation dashboard'
      ],
      techStack: ['PHP', 'Flask (Python)', 'MySQL', 'Machine Learning', 'JavaScript', 'HTML5', 'CSS3'],
      contribution: 'Designed database schemas in MySQL, built API endpoints connecting Flask ML inference logic, and developed responsive user interfaces with client-side validation.',
      status: 'Completed prototype / Open-source on GitHub',
      github: 'https://github.com/Rahma6026/HealthInsight-'
    },
    nextjobbd: {
      title: 'NextJobBD',
      category: 'Live Recruitment & Job Portal Platform',
      image: 'assets/img/portfolio03 part1.png',
      alt: 'NextJobBD Production Job Portal Interface',
      imageGallery: [
        'assets/img/portfolio03 part1.png',
        'assets/img/portfolio03 part2.png',
        'assets/img/portfolio03 part3.png'
      ],
      overview: 'NextJobBD (https://www.nextjobbd.com/) is a production-grade recruitment and employment platform connecting job seekers with companies across Bangladesh. The platform provides job search, location and industry-based filtering, company directories, detailed vacancy pages, online CV/Bio-data generation, applications, job alerts, and training and consultancy opportunities. I continue to actively develop and maintain the platform, implementing new features, improving performance, fixing production issues, and adapting the system to evolving business requirements.',
      problem: 'Job seekers often struggle to find reliable employment opportunities across fragmented sources, while employers need an organized platform to publish vacancies and reach relevant candidates. NextJobBD provides a centralized recruitment ecosystem for discovering jobs, managing candidate information, and connecting employers with potential applicants.',
      solution: 'Built and continuously maintain a Laravel MVC recruitment platform with MySQL, featuring separate workflows for job seekers and employers. The system uses structured job, company, industry, category, and location taxonomies to provide scalable recruitment search, candidate management, vacancy publishing, and application workflows.',
      features: [
        'Advanced job search and multi-criteria filtering by keyword, job sector, industry, and location',
        'Location-based job discovery covering districts and local areas across Bangladesh',
        'Job sector, industry, and company directories with dynamic vacancy listings',
        'Detailed job vacancy pages with requirements, experience, salary, deadline, and application information',
        'Employer vacancy and company management workflows',
        'Candidate profiles, application history, and recruitment activity tracking',
        'Online CV / Bio-data builder and professional resume generation',
        'Saved jobs and job alert functionality',
        'Training and consultancy opportunity listings',
        'Dynamic vacancy statistics and categorized recruitment listings',
        'Responsive and SEO-friendly public-facing pages',
        'Administrative management system for jobs, companies, users, categories, and platform content',
        'Optimized MySQL database architecture and production workflows'
      ],
      techStack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Blade', 'Bootstrap', 'HTML5', 'CSS3'],
      contribution: 'Architected backend MVC logic in Laravel, designed relational database schemas in MySQL, built candidate bio-data generation workflows, implemented applicant routing pipelines, and ensured responsive cross-browser performance.',
      status: '🟢 Live in Production at nextjobbd.com',
      liveDemo: 'https://www.nextjobbd.com/'
    },
    sajeebbulk: {
      title: 'SajeebBulk',
      category: 'Live Bulk Sales & Product Quotation Platform',
      image: 'assets/img/portfolio04 part1.png',
      alt: 'SajeebBulk Bulk Sales Platform Interface',
      imageGallery: [
        'assets/img/portfolio04 part1.png',
        'assets/img/portfolio04 part2.png',
        'assets/img/portfolio04 part3.png',
        'assets/img/portfolio04 part4.png'
      ],
      overview: 'SajeebBulk is a live, production-ready bulk sales and product quotation platform designed to help businesses showcase and sell food products such as macaroni, pasta, and noodles in bulk quantities. The platform allows customers to browse products, select required quantities, build multi-product quotation requests, and communicate directly with the business.',
      problem: 'Bulk buyers often need to communicate product requirements, quantities, and business details manually before placing an order. This can make the sales process time-consuming and difficult to manage as the number of products and customers increases.',
      solution: 'Developed a responsive React and TypeScript-based bulk-commerce platform with Supabase as the backend and data layer. The system provides a customer-facing product and quotation experience alongside a dedicated admin dashboard for managing products, quotations, orders, product images, and website configuration.',
      features: [
        'Bulk product catalog with quantity-based selection and multi-product quotation workflow',
        'Shopping cart functionality for managing multiple products and bulk quantities',
        'Customer quotation submission with business and contact information',
        'WhatsApp-based customer communication for direct business inquiries',
        'Admin dashboard for managing products, quotations, orders, and website settings',
        'Product creation, editing, image upload, availability, and content management',
        'Quotation status tracking including Pending, Contacted, Completed, and Cancelled',
        'Fulfilled and cancelled order management with customer and order details',
        'CSV and PDF export functionality for quotations and fulfilled orders',
        'Supabase database and storage integration for application data and product images',
        'Responsive mobile-first interface with interactive animations'
      ],
      techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Shadcn / Radix UI', 'React Query'],
      contribution: 'Designed and developed the complete customer-facing frontend and administrative dashboard using React and TypeScript. Implemented the bulk product selection, cart, quotation submission, WhatsApp communication, product management, order management, and quotation status workflows. Integrated Supabase for database operations and product image storage, and built responsive, scalable UI components for the production platform.',
      status: '🟢 Live in Production at sajeebbulk.com',
      liveDemo: 'https://www.sajeebbulk.com/'
    },
    fooddonation: {
      title: 'Food Donation Platform',
      category: 'Social Impact & Food Redistribution',
      image: 'assets/img/portfolio01.png',
      alt: 'Food Donation Web Platform Interface',
      overview: 'A community-driven digital platform connecting restaurants, event caterers, and individuals with verified local NGOs to streamline surplus food redistribution and reduce wastage.',
      problem: 'Significant quantities of edible food are wasted daily from catering and food establishments due to the absence of a real-time dispatch mechanism for charities.',
      solution: 'Built a centralized donation dispatch platform where donors can post immediate surplus meals and registered charities can claim and track deliveries efficiently.',
      features: [
        'Real-time surplus food listing with expiration timers and quantity metrics',
        'NGO registration, verification, and claim management workflow',
        'Urgent pickup notification dispatch system',
        'Donor contribution statistics and community impact metrics',
        'Lightweight, mobile-responsive layout for volunteers on the move'
      ],
      techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      contribution: 'Designed database tables for donation requests and NGO fulfillment, built backend routing logic in PHP, and created clean responsive forms.',
      status: 'Completed project / Open-source on GitHub',
      github: 'https://github.com/Rahma6026/food_donation'
    }
  };

  /*==================== MOBILE NAVIGATION ====================*/
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMenu = () => {
    if (navMenu) {
      navMenu.classList.remove('show-menu');
      document.body.style.overflow = '';
    }
  };

  if (navClose) {
    navClose.addEventListener('click', closeMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
  /* ==========================================
   CERTIFICATE SLIDER
   ========================================== */

const certificateSlider = document.querySelector('.certificate-slider');

if (certificateSlider) {
  const certificateSlides = Array.from(certificateSlider.querySelectorAll('.certificate-slide'));
  const contentSlides = Array.from(certificateSlider.querySelectorAll('.certificate-content-slide'));
  const prevButton = certificateSlider.querySelector('.certificate-slider__prev');
  const nextButton = certificateSlider.querySelector('.certificate-slider__next');
  const currentCounter = document.getElementById('certificate-current');

  let currentCertificate = 0;
  let certificateInterval = null;

  if (certificateSlides.length > 0) {
    const showCertificate = (index) => {
      const totalSlides = certificateSlides.length;
      const safeIndex = ((index % totalSlides) + totalSlides) % totalSlides;

      certificateSlides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === safeIndex);
      });

      contentSlides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === safeIndex);
      });

      if (currentCounter) {
        currentCounter.textContent = String(safeIndex + 1);
      }

      currentCertificate = safeIndex;
    };

    const nextCertificate = () => {
      showCertificate(currentCertificate + 1);
    };

    const previousCertificate = () => {
      showCertificate(currentCertificate - 1);
    };

    const startCertificateSlider = () => {
      if (certificateSlides.length < 2) return;
      clearInterval(certificateInterval);
      certificateInterval = setInterval(nextCertificate, 4000);
    };

    const stopCertificateSlider = () => {
      clearInterval(certificateInterval);
    };

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        nextCertificate();
        startCertificateSlider();
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        previousCertificate();
        startCertificateSlider();
      });
    }

    certificateSlider.addEventListener('mouseenter', stopCertificateSlider);
    certificateSlider.addEventListener('mouseleave', startCertificateSlider);
    certificateSlider.addEventListener('focusin', stopCertificateSlider);
    certificateSlider.addEventListener('focusout', startCertificateSlider);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopCertificateSlider();
      } else {
        startCertificateSlider();
      }
    });

    showCertificate(0);
    startCertificateSlider();
  }
}

  /*==================== STICKY HEADER & SCROLL SPY ====================*/
  const header = document.getElementById('header');
  const scrollUpBtn = document.getElementById('scroll-up');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    const scrollY = window.pageYOffset;

    // Header background blur
    if (scrollY >= 60) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }

    // Scroll to top button
    if (scrollY >= 500) {
      scrollUpBtn.classList.add('show-scroll');
    } else {
      scrollUpBtn.classList.remove('show-scroll');
    }

    // Scroll spy for navigation
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav__menu a[href*="#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active-link');
        } else {
          navLink.classList.remove('active-link');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /*==================== DARK / LIGHT THEME ====================*/
  const themeButton = document.getElementById('theme-button');
  const darkThemeClass = 'dark-theme';
  const iconThemeClass = 'uil-sun';

  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkThemeClass);
    if (themeButton) {
      themeButton.querySelector('i').className = selectedIcon === 'uil-sun' ? 'uil uil-sun' : 'uil uil-moon';
    }
  }

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkThemeClass);
      const isDark = document.body.classList.contains(darkThemeClass);
      
      const icon = themeButton.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'uil uil-sun' : 'uil uil-moon';
      }

      localStorage.setItem('selected-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('selected-icon', isDark ? 'uil-sun' : 'uil-moon');
    });
  }

  /*==================== CASE STUDY MODAL ====================*/
  const modalOverlay = document.getElementById('project-modal');
  const modalContainer = modalOverlay ? modalOverlay.querySelector('.modal-container') : null;
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const caseStudyButtons = document.querySelectorAll('[data-case-study]');
  const modalImgBox = document.getElementById('modal-img-box');
  const modalSliderTrack = document.getElementById('modal-slider-track');
  const modalSliderDots = document.getElementById('modal-slider-dots');
  let modalImageIndex = 0;
  let modalSliderInterval = null;

  const renderModalSlider = (gallery) => {
    if (!modalSliderTrack || !modalSliderDots) return;

    clearInterval(modalSliderInterval);
    modalSliderTrack.innerHTML = '';
    modalSliderDots.innerHTML = '';

    const images = gallery && gallery.length ? gallery : [projectDetails[Object.keys(projectDetails)[0]].image];

    images.forEach((image, index) => {
      const slide = document.createElement('img');
      slide.src = image;
      slide.alt = `Project preview ${index + 1}`;
      slide.className = `modal-slide${index === 0 ? ' active' : ''}`;
      modalSliderTrack.appendChild(slide);

      const dot = document.createElement('span');
      dot.className = `modal-slider__dot${index === 0 ? ' active' : ''}`;
      dot.setAttribute('role', 'button');
      dot.setAttribute('tabindex', '0');
      dot.setAttribute('aria-label', `Show project preview ${index + 1}`);
      dot.addEventListener('click', () => {
        showModalImage(index);
        startModalSlider();
      });
      dot.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          showModalImage(index);
          startModalSlider();
        }
      });
      modalSliderDots.appendChild(dot);
    });

    if (images.length > 1) {
      startModalSlider();
    }
  };

  const showModalImage = (index) => {
    const slides = modalSliderTrack ? modalSliderTrack.querySelectorAll('.modal-slide') : [];
    const dots = modalSliderDots ? modalSliderDots.querySelectorAll('.modal-slider__dot') : [];

    if (!slides.length) return;

    const nextIndex = ((index % slides.length) + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === nextIndex);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === nextIndex);
    });

    modalImageIndex = nextIndex;
  };

  const startModalSlider = () => {
    const slides = modalSliderTrack ? modalSliderTrack.querySelectorAll('.modal-slide') : [];
    if (slides.length < 2) return;

    clearInterval(modalSliderInterval);
    modalSliderInterval = setInterval(() => {
      showModalImage(modalImageIndex + 1);
    }, 3500);
  };

  const stopModalSlider = () => {
    clearInterval(modalSliderInterval);
  };

  const openProjectModal = (projectId) => {
    const data = projectDetails[projectId];
    if (!data || !modalOverlay) return;

    document.getElementById('modal-eyebrow').textContent = data.category;
    document.getElementById('modal-title').textContent = data.title;

    if (data.imageGallery && data.imageGallery.length) {
      renderModalSlider(data.imageGallery);
      modalImgBox.classList.add('has-slider');
    } else {
      clearInterval(modalSliderInterval);
      modalSliderTrack.innerHTML = '';
      modalSliderDots.innerHTML = '';
      modalImgBox.classList.remove('has-slider');
      const imgEl = document.createElement('img');
      imgEl.src = data.image;
      imgEl.alt = data.alt;
      imgEl.className = 'modal-img';
      modalSliderTrack.appendChild(imgEl);
    }

    document.getElementById('modal-overview').textContent = data.overview;
    document.getElementById('modal-problem').textContent = data.problem;
    document.getElementById('modal-solution').textContent = data.solution;
    document.getElementById('modal-contribution').textContent = data.contribution;
    document.getElementById('modal-status').textContent = data.status;

    // Populate Key Features
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    data.features.forEach((feature) => {
      const li = document.createElement('li');
      li.className = 'modal-bullet-item';
      li.innerHTML = `<i class="uil uil-check-circle"></i><span>${feature}</span>`;
      featuresList.appendChild(li);
    });

    // Populate Tech Stack
    const techBox = document.getElementById('modal-tech');
    techBox.innerHTML = '';
    data.techStack.forEach((tech) => {
      const span = document.createElement('span');
      span.className = 'project-card__tech-pill';
      span.textContent = tech;
      techBox.appendChild(span);
    });

    // Set Live Demo button
    const liveBtn = document.getElementById('modal-live-btn');
    if (liveBtn) {
      if (data.liveDemo) {
        liveBtn.href = data.liveDemo;
        liveBtn.style.display = 'inline-flex';
      } else {
        liveBtn.style.display = 'none';
      }
    }

    // Set GitHub link
    const githubLink = document.getElementById('modal-github-btn');
    if (githubLink) {
      if (data.github) {
        githubLink.href = data.github;
        githubLink.style.display = 'inline-flex';
        if (data.liveDemo) {
          githubLink.className = 'btn btn-secondary';
        } else {
          githubLink.className = 'btn btn-primary';
        }
      } else {
        githubLink.style.display = 'none';
      }
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  caseStudyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-case-study');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });
  /* ==========================================
   SAJEEBBULK PROJECT IMAGE SLIDER
   ========================================== */

const projectSliders = document.querySelectorAll('.project-slider');

projectSliders.forEach((slider) => {

  const slides = slider.querySelectorAll('.project-slide');
  const dots = slider.querySelectorAll('.project-slider__dot');

  if (!slides.length) return;

  let currentSlide = 0;
  let sliderInterval;

  /* Show selected slide */
  const showSlide = (index) => {

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
  };

  /* Next slide */
  const nextSlide = () => {

    const nextIndex =
      (currentSlide + 1) % slides.length;

    showSlide(nextIndex);
  };

  /* Start automatic slider */
  const startSlider = () => {

    clearInterval(sliderInterval);

    sliderInterval = setInterval(() => {
      nextSlide();
    }, 4000);

  };

  /* Stop automatic slider */
  const stopSlider = () => {

    clearInterval(sliderInterval);

  };

  /* Dot click */
  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      stopSlider();

      showSlide(index);

      startSlider();

    });

  });

  /* Pause when mouse is over image */
  slider.addEventListener('mouseenter', () => {
    stopSlider();
  });

  /* Continue when mouse leaves */
  slider.addEventListener('mouseleave', () => {
    startSlider();
  });

  /* Start from first image */
  showSlide(0);

  startSlider();

});

  /*==================== CONTACT FORM SUBMISSION ====================*/
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!formStatus || !submitBtn) return;

      submitBtn.disabled = true;
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Sending...</span> <i class="uil uil-spinner-alt"></i>`;

      formStatus.style.display = 'none';
      formStatus.className = 'form-status';

      const formData = new FormData(contactForm);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: json
        });

        const result = await response.json();

        if (response.status === 200) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been sent successfully.';
          contactForm.reset();
        } else {
          formStatus.className = 'form-status error';
          formStatus.textContent = result.message || 'Something went wrong. Please email directly at radithi109@gmail.com.';
        }
      } catch (error) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Network error. Please reach out directly to radithi109@gmail.com.';
      } finally {
        formStatus.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }

  /*==================== ANIMATE ON SCROLL (AOS) ====================*/
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      once: false,
      mirror: true,
      offset: 30,
      delay: 50,
      throttleDelay: 30,
      debounceDelay: 10,
    });
  }
});
