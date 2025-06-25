let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

document.getElementById('themeToggle').addEventListener('change', function () {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});
