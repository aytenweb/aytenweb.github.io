document.getElementById('menu').onclick = function(e){
    alert(e.type);
}
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['balloon-sq1.jpg', 'balloon-sq2.jpg','balloon-sq3.jpg','balloon-sq4.jpg','balloon-sq5.jpg','balloon-sq6.jpg'];

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => displayedImage.src = e.target.src);
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});