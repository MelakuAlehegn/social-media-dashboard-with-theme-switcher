const darkModeToggleButton = document.querySelector('#dark-mode-toggle-button');
const btn = document.querySelector('#btn')

darkModeToggleButton.addEventListener('click', () => {
    setTimeout(() => {
        document.documentElement.classList.toggle('dark');
    }, 300);
});