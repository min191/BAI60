// Updated JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const $portfolioFilters = document.querySelectorAll("#project-filters li");
    const $portfolioItems = document.querySelectorAll(".project-item");
  
    $portfolioFilters.forEach((filter) => {
      filter.addEventListener("click", () => {
        // Remove class 'active' on $portfolioFilters
        $portfolioFilters.forEach((filter) => {
          filter.classList.remove("active");
        });
  
        // Add class 'active' on clicked filter
        filter.classList.add("active");
  
        const selector = filter.getAttribute("data-filter");
  
        // Show/hide project items based on the selected filter
        $portfolioItems.forEach((item) => {
          if (selector === "*" || item.classList.contains(selector)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });
  