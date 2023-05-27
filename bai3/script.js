const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('#result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = input.value;
    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
        showResult(data.result.full_short_link);
    } catch (error) {
        console.log(error);
    }
});

function showResult(url) {
    result.innerHTML = `
    <p>Link Generated!</p>
    <a href="${url}" target="_blank">${url}</a>
    <div class="social-icons">
      <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/intent/tweet?url=${url}" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://www.linkedin.com/shareArticle?url=${url}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    </div>
  `;
}