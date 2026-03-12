// Announcement Bar Height Calculator
document.addEventListener('DOMContentLoaded', function() {
  const announcementBar = document.querySelector('.announcement-bar--sticky');
  
  if (!announcementBar) {
    // Sticky değilse CSS variable'ı 0 yap
    document.documentElement.style.setProperty('--announcement-bar-height', '0px');
    return;
  }

  function updateAnnouncementBarHeight() {
    const height = announcementBar.offsetHeight;
    document.documentElement.style.setProperty('--announcement-bar-height', `${height}px`);
  }

  // İlk yükleme
  updateAnnouncementBarHeight();

  // Resize olduğunda güncelle
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      updateAnnouncementBarHeight();
    }, 250);
  });

  // Theme editor'da değişiklik olduğunda güncelle
  if (Shopify && Shopify.designMode) {
    document.addEventListener('shopify:section:load', updateAnnouncementBarHeight);
    document.addEventListener('shopify:section:reorder', updateAnnouncementBarHeight);
  }
});
