/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable unicorn/prefer-dom-node-append */
/* eslint-disable unicorn/prevent-abbreviations */
// Canvas setup and animation logic
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let frame = 1;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Example: Add some animation to display, if needed
  // ctx.fillText('Pet Adoption Portal', 50, 50 + Math.sin(frame / 10) * 10); // Example effect
  frame += 1;
  requestAnimationFrame(animate);
}

// Resize canvas to keep it responsive
const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  animate();
};
window.addEventListener('resize', resizeCanvas, true);
resizeCanvas(); // Initialize the animation on load

// Pet Class
class Pet {
  constructor(name, description, imageSrc) {
    this.name = name;
    this.description = description;
    this.imageSrc = imageSrc;
  }

  // Method to create a pet card element
  createCard() {
    const card = document.createElement('div');
    card.classList.add('pet-card');

    const img = document.createElement('img');
    img.src = this.imageSrc;
    img.alt = this.name;
    img.classList.add('pet-image');

    const details = document.createElement('div');
    details.classList.add('pet-details');

    const petName = document.createElement('h2');
    petName.classList.add('pet-name');
    petName.textContent = this.name;

    const petDescription = document.createElement('p');
    petDescription.classList.add('pet-description');
    petDescription.textContent = this.description;

    details.appendChild(petName);
    details.appendChild(petDescription);
    card.appendChild(img);
    card.appendChild(details);

    return card;
  }
}

// Array of pets to display
const pets = [
  new Pet(
    'Benny',
    'Ready and willing to find his furever home is BENNY. Loyal and intelligent, BENNY currently enjoys field runs, afternoon hikes and dedicated time for training in a training program in Erin, Ontario.',
    'benny.png'
  ),
  new Pet(
    'Luna',
    'Everyone, we’d love for you to meet adoptable LUNA. Belly rubs, butt scratches, and naps are her 3 favourite things to enjoy when hanging out with her best friends. Oh and sunbathing, so let’s make those her 4 favourite things.',
    'luna.jpg'
  ),
  new Pet(
    'Max',
    'This sweet girl is a bundle of joy wrapped in 42 pounds of scruffy love! MAX strikes the perfect balance between medium energy and playful bursts, making her an ideal companion for biking, jogging, or hiking. After some fun, she happily transitions into relaxation mode, enjoying quiet time indoors.',
    'max.jpg'
  ),
  new Pet(
    'Bella',
    'BELLA loves breakfast. And dinner. And treats of all kinds As you may have already guessed, BELLA is food motivated. Thanks to treats, she is eager to please and loves training sessions. She loves food *almost* as much as she loves humans. ',
    'bella.jpg'
  )
];

// Render pets on the page
const container = document.querySelector('.pet-container');
pets.forEach(pet => {
  const card = pet.createCard();
  container.appendChild(card);
});

// Search form functionality
document
  .querySelector('.search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    const query = this.query.value; // Get the input value
    console.log('Searching for:', query); // Log the search query
    // Here you can add your search functionality
  });
