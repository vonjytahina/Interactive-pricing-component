document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const pageViewsElement = document.querySelector(".page-views");
  const monthlyPriceElement = document.querySelector(".monthly-price");
  const mobileMonthlyPriceElement = document.querySelector(
    ".mobile-amount .monthly-price"
  );
  const yearlyPriceElement = document.querySelector(".yearly-price");
  const mobileYearlyPriceElement = document.querySelector(
    ".mobile-amount .yearly-price"
  );
  const durationElement = document.querySelector(".duration");
  const mobileDurationElement = document.querySelector(
    ".mobile-amount .duration"
  );
  const switchThumb = document.querySelector(".switch-thumb");

  // Function to update the background color of the left side of the thumb
  function updateSliderBackground() {
    const percentage = (slider.value - slider.min) / (slider.max - slider.min);
    slider.style.background = `linear-gradient(to right, #A5F3EB 0%, #A5F3EB ${
      percentage * 100
    }%, #eceefb ${percentage * 100}%, #eceefb 100%)`;

    // Update content based on slider value
    if (slider.value == 0) {
      updateContent("10K", "$8.00", "$72.00");
    } else if (slider.value == 25) {
      updateContent("50K", "$12.00", "$108.00");
    } else if (slider.value == 50) {
      updateContent("100K", "$16.00", "$144.00");
    } else if (slider.value == 75) {
      updateContent("500K", "$24.00", "$216.00");
    } else if (slider.value == 100) {
      updateContent("1M", "$36.00", "$324.00");
    } else {
      // Reset to default values when slider value changes to other values
      updateContent("100K", "$16.00", "$144.00");
    }
  }

  // Function to update the content of elements
  function updateContent(views, monthlyPrice, yearlyPrice) {
    pageViewsElement.textContent = views;
    monthlyPriceElement.textContent = monthlyPrice;
    document.getElementById("mobile-monthly-price").textContent = monthlyPrice;
    yearlyPriceElement.textContent = yearlyPrice;
    document.getElementById("mobile-yearly-price").textContent = yearlyPrice;
  }

  // Apply the background color and initial content on document load
  updateSliderBackground();

  // Event listener to update the background color and content when the slider is moved
  slider.addEventListener("input", updateSliderBackground);

  // Function to toggle the switch position and update price elements
  function toggleSwitchPosition() {
    if (switchThumb.style.left === "25%") {
      switchThumb.style.left = "75%";
      yearlyPriceElement.classList.remove("hide");
      document.getElementById("mobile-yearly-price").classList.remove("hide");
      monthlyPriceElement.classList.add("hide");
      document.getElementById("mobile-monthly-price").classList.add("hide");
      durationElement.textContent = "/ year";
      document.querySelector(".mobile-amount .duration").textContent = "/ year";
    } else {
      switchThumb.style.left = "25%";
      yearlyPriceElement.classList.add("hide");
      document.getElementById("mobile-yearly-price").classList.add("hide");
      monthlyPriceElement.classList.remove("hide");
      document.getElementById("mobile-monthly-price").classList.remove("hide");
      durationElement.textContent = "/ month";
      document.querySelector(".mobile-amount .duration").textContent =
        "/ month";
    }
  }

  // Event listener to toggle switch position and update price elements
  document
    .querySelector(".switch-billing")
    .addEventListener("click", toggleSwitchPosition);
});
