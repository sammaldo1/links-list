const form = document.querySelector('form');
const port =  3000 || 8080 || 4000 || 5000 || 80;

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    name: form.name.value,
    link: form.link.value,
    image: form.portfolio.value,
  }

  
  await fetch(`http://localhost:${port}/links`, {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('./index.html')
}

form.addEventListener('submit', createPost);