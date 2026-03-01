const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();

    alert(
      `${name || 'Спасибо'}! Ваша заявка отправлена. Менеджер свяжется с вами в ближайшее время.`
    );
    form.reset();
  });
}
