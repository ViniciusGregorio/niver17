document.getElementById('surpriseButton').addEventListener('click', function() {
    // Mostra a mensagem de surpresa
    document.getElementById('surpriseText').classList.remove('hidden');

    // Mostra o vídeo do YouTube
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'block'; // Garante que o vídeo seja exibido
});
