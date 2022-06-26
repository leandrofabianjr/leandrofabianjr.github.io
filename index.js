document
  .getElementById('changeThemeButton')
  .addEventListener('click', () =>
    document.querySelector('html').classList.toggle('theme-dark')
  );

new TextTyperAnimation(
  document.getElementById('helloWorldTyper'),
  'hello world!'
).start();
