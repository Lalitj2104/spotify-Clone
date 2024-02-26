const spotifyPlaylist = document.querySelector('.spotify-playlist');
const showAll = document.querySelector('.show-all')
const hiddenItems = document.querySelectorAll('#hidden-item');

hiddenItems.forEach((e) => {
    e.style.display = 'none';
    e.style.position = 'absolute';
});

spotifyPlaylist.addEventListener('click', () => {
    hiddenItems.forEach((e) => {
        e.style.display = 'block';   
        e.style.position = 'static';
    });
});


showAll.addEventListener('click', () => {
    hiddenItems.forEach((e) => {
        e.style.display = 'block';   
        e.style.position = 'static';
    });
});


