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

    // Video kartochkalarni yasash
    let html = '';
    data.videos.forEach(video => {
      // 9:16 video faylni tanlash (eng yaxshisi birinchi video_files dan)
      const bestVideo = video.video_files.find(file => file.quality === 'hd' && file.width === 720 && file.height === 1280) 
                        || video.video_files.find(file => file.width === 720) 
                        || video.video_files[0];
      
      if (bestVideo) {
        html += `
          <div class="video-card">
            <video src="${bestVideo.link}" controls></video>
            <p>${video.user.name}</p>
            <button onclick="downloadVideo('${bestVideo.link}')">Yuklab olish</button>
          </div>
        `;
      }
    });

    container.innerHTML = html;
  } catch (error) {
    console.error(error);
    container.innerHTML = '<p>Serverga ulanishda xato.</p>';
  }
}

// Yuklab olish funksiyasi (keyinchalik yaxshilaymiz)
function downloadVideo(url) {
  window.open(url, '_blank');
}

// Sahifa yuklangach qidiruv tugmasini tinglash
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchButton');
  if (searchBtn) {
    searchBtn.addEventListener('click', searchVideos);
  }
});
