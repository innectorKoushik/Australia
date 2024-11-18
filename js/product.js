document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
      const parent = button.closest('.product-category');
      const target = button.getAttribute('data-target');

      // Handle Tab Buttons
      parent.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Handle Tab Content
      parent.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('active'));
      parent.querySelector(`#${target}`).classList.add('active');
  });
});


gsap.registerPlugin(ScrollTrigger);

let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // User is scrolling down
        document.querySelector('.navbar').classList.add('hidden');
    } else {
        // User is scrolling up
        document.querySelector('.navbar').classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});


function showProductDetails(title, description, imageSrc) {
    // Set modal content
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-image').src = imageSrc;
  
    // Display modal
    document.getElementById('product-modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
  }
  
  // Close modal when clicking outside of content
  window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  