document.addEventListener("DOMContentLoaded", () => {
  const starRating = document.getElementById("star-rating");
  const stars = starRating.querySelectorAll(".star");
  const reviewList = document.getElementById("reviews");
  const fileInput = document.getElementById("file-input");
  const filePreview = document.getElementById("file-preview");
  let selectedRating = 0;

  const updateStars = (rating) => {
    stars.forEach((star) => {
      star.classList.toggle(
        "selected",
        parseInt(star.dataset.value, 10) <= rating
      );
    });
  };

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.dataset.value, 10);
      updateStars(selectedRating);
    });
  });

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        filePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      filePreview.src = "";
    }
  });

  document.getElementById("submit-review").addEventListener("click", () => {
    const name = document.getElementById("review-name").value.trim();
    const reviewText = document.getElementById("review-text").value.trim();
    if (!name || !reviewText || selectedRating === 0) {
      alert("Будь ласка, заповніть всі поля!");
      return;
    }

    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review-card");
    reviewElement.innerHTML = `
        <img src="${
          filePreview.src
        }" alt="Фото ${name}" width="150" height="150" />
         <h3>${name}</h3>
         <p>
          ${reviewText}
         </p>
         <div class="rating"> ${"⭐".repeat(selectedRating)}</div>
         <a href="#" class="btn">
           Дізнатися більше
         </a>

    `;

    reviewList.appendChild(reviewElement);

    document.getElementById("review-text").value = "";
    document.getElementById("review-name").value = "";
    updateStars(0);
    selectedRating = 0;
    filePreview.src = "";
    fileInput.value = "";
  });
});
