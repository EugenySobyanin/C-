const audio = document.getElementById('audio');
const audioSource = document.getElementById('audioSource');
const playPauseBtn = document.getElementById('playPauseBtn');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const trackTitle = document.getElementById('trackTitle');

// Массив с путями к трекам
const tracks = [
    'track1.mp3',
    'track2.mp3',
    'track3.mp3'
];

let currentTrackIndex = 0;

// Функция для обновления трека
function updateTrack() {
    audioSource.src = tracks[currentTrackIndex];
    audio.load();  // Перезагружаем аудио с новым источником
    trackTitle.textContent = `Трек: ${tracks[currentTrackIndex]}`; // Обновляем заголовок
}

// Воспроизведение/пауза
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';  // Меняем иконку на паузу
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';  // Меняем иконку на плей
    }
});

// Перемотка назад на 10 секунд
rewindBtn.addEventListener('click', () => {
    audio.currentTime -= 10; 
});

// Перемотка вперед на 10 секунд
forwardBtn.addEventListener('click', () => {
    audio.currentTime += 10; 
});

// Переход к следующему треку
nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrack();
    audio.play();
    playPauseBtn.textContent = '⏸️';
});

// Переход к предыдущему треку
prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updateTrack();
    audio.play();
    playPauseBtn.textContent = '⏸️';
});

// Начальная установка трека
updateTrack();

