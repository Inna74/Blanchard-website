document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('projects__tooltip')) {
      const path = event.target.dataset.path;

      const tooltip = document.getElementById(`${path}`);

      tooltip.classList.add('projects__tooltip__clicked');

      document.querySelector(`[data-target="${path}"]`).classList.toggle('projects__popup__active');
    } else if (!event.target.classList.contains('projects__popup__active')) {
      document.querySelectorAll('.projects__tooltip').forEach(function (closingTooltip) {
        closingTooltip.classList.remove('projects__tooltip__clicked');
      });

      document.querySelectorAll('.projects__popup').forEach(function (closingPopup) {
        closingPopup.classList.remove('projects__popup__active');
      });
    }
  });
});