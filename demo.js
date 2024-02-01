// portfolio
const $portfolioFilters = document.querySelectorAll(".portfolio-filters li");

$portfolioFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    // remove class active on $portfolioFilters
    $portfolioFilters.forEach((filter) => {
      filter.classList.remove("active");
    });

    // add class active on $portfolioFilters
    filter.classList.add("active");

    const selector = filter.getAttribute("data-filter");

    // show all .portfolio-item and hide .portfolio-item with selector
    const $portfolioItem = document.querySelectorAll(".portfolio-item");

    $portfolioItem.forEach((item) => {
      item.style.display = "none";

      if (selector == "*") {
        item.style.display = "block";
      } else {
        item.style.display = "none";

        if (item.classList.contains(selector)) {
          item.style.display = "block";
        }
      }
    });
  });
});
