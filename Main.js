const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  // Remove borders
  tabItems.forEach(item => item.classList.remove('tab-border'));

  // Add border to current
  this.classList.add('tab-border');

  // Remove show class
  tabContentItems.forEach(item => item.classList.remove('show'));

  // Get content from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
