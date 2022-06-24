const $typing = document.getElementById('helloWorldTyper');

function typing(text, i = 1) {
  if (i > text.length) {
    $typing.textContent = text;
    blinking(text);
    return;
  }
  $typing.textContent = text.slice(0, i++) + '_';
  setTimeout(function () {
    typing(text, i);
  }, 200);
}

function blinking(text, time = 8) {
  if (!time) {
    $typing.textContent.length ? erasing(text) : typing(text);
    return;
  }
  if ($typing.textContent[$typing.textContent.length - 1] == '_') {
    $typing.textContent = $typing.textContent.slice(0, -1);
  } else {
    $typing.textContent += '_';
  }
  setTimeout(function () {
    blinking(text, --time);
  }, 500);
}

function erasing(text, i = $typing.textContent.length) {
  if (i < 0) {
    $typing.textContent = '';
    blinking(text);
    return;
  }
  $typing.textContent = text.slice(0, i) + '_';
  setTimeout(function () {
    erasing(text, --i);
  }, 50);
}

typing('hello world!');
