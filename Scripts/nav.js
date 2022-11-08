// mobile nav burger
const nav = document.querySelector('#burger');
const navDropdown = document.querySelector('.nav-buttons');

nav.addEventListener('click', () => {
    navDropdown.classList.toggle('mob-hidden');
})
// Nav selection 
navDropdown.addEventListener('click', () => {
    setInterval(() => {
        const activePage = window.location.href;
        const links = document.querySelectorAll('.link');
        links.forEach(link => {
            if (link.href == activePage) {
                link.classList.add('selected');
            } else {
                link.classList.remove('selected');
            }
        });
    }, 0)
})