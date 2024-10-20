const viewButtons = document.querySelectorAll('.view-option');

viewButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    viewButtons.forEach((item) => {
      if (item.classList.contains('active')) item.classList.remove('active');
      console.log('Active statuses disabled');
    });
    button.classList.add('active');
    const itemsContainer = document.getElementById('product-container');
    itemsContainer.removeAttribute('class');
    itemsContainer.setAttribute('class', 'products');
    console.log(e.target.dataset.view);
    itemsContainer.classList.add(button.dataset.view);
  });
});
