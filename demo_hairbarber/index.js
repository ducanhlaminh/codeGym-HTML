var menuBtn = document.getElementById('menu');
var menu = document.getElementById('sideNav');

menuBtn.onclick = () => {
    if (menu.style.right == '-350px') {
        menu.style.right = '0';
        menuBtn.src = './close (1).png'

    } else {
        menu.style.right = '-350px';
        menuBtn.src = '—Pngtree— icon_4697369.png'
    }


}