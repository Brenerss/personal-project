const toggleMenu = () => {
    const menu = document.getElementById('menu');
    const [xIcon] = document.getElementsByClassName('x-icon');
    const [menuIcon] = document.getElementsByClassName('menu-icon');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        xIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.style.display = 'block';
        xIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}
