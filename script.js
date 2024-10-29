const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the name and review text from the form
    const name = document.getElementById('reviewName').value;
    const reviewText = document.getElementById('reviewText').value;

    // Create a new review item
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    
    const reviewName = document.createElement('h3');
    reviewName.textContent = name;
    
    const reviewContent = document.createElement('p');
    reviewContent.textContent = reviewText;
    
    reviewItem.appendChild(reviewName);
    reviewItem.appendChild(reviewContent);

    // Add the review item to the review list
    document.getElementById('reviewList').appendChild(reviewItem);

    // Clear the form
    document.getElementById('reviewForm').reset();
});
