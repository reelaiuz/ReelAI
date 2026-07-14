// Video qidirish funksiyasi
async function searchVideos() {
  const query = document.getElementById('searchInput').value;
  const container = document.getElementById('videoContainer');

  if (!query) {
    container.innerHTML = '<p>Iltimos, qidiruv so‘zini kiriting.</p>';
    return;
  }

  try {
    const response = await fetch(`/api/videos?query=${query}&per_page=10`);
    const data = await response.json();

    if (data.error) {
      container.innerHTML = `<p>Xatolik: ${data.error}</p>`;
      return;
    }

    let html = '';
    data.videos.forEach(video => {
      const bestVideo = video.video_files.find(file => 
        file.quality === 'hd' && file.width === 720 && file.height === 1280
      ) || video.video_files.find(file => file.width === 720) || video.video_files[0];

      if (bestVideo) {
        html += `
          <div class="video-card">
            <video src="${bestVideo.link}" controls width="100%"></video>
            <p>${video.user.name}</p>
            <button onclick="window.open('${bestVideo.link}', '_blank')">Yuklab olish</button>
          </div>
        `;
      }
    });

    container.innerHTML = html || '<p>Hech qanday video topilmadi.</p>';
  } catch (error) {
    container.innerHTML = '<p>Serverga ulanishda xato.</p>';
    console.error(error);
  }
}

// Sahifa yuklangach tugma ishlashini ta’minlash
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('searchButton');
  if (btn) btn.addEventListener('click', searchVideos);
});
