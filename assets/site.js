const search = document.querySelector('#course-search');
if (search) {
  const cards = [...document.querySelectorAll('[data-search]')];
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase().replace(/^cst\s*/, '');
    let count = 0;
    cards.forEach(card => { const match = card.dataset.search.toLowerCase().includes(query); card.hidden = !match; if (match) count++; });
    document.querySelectorAll('.term').forEach(term => { term.hidden = ![...term.querySelectorAll('.course-card')].some(card => !card.hidden); });
    document.querySelector('#search-status').textContent = query ? `${count} course${count === 1 ? '' : 's'} found` : '';
  });
}
if (matchMedia('(max-width: 600px)').matches) document.querySelector('.course-sidebar details')?.removeAttribute('open');
