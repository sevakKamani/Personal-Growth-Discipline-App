const CACHE_NAME = 'mbs-v1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
  scheduleNotifications();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

// Notification scheduling
function scheduleNotifications() {
  setInterval(() => {
    const now = new Date();
    const h = now.getHours(), m = now.getMinutes();

    if (h === 6 && m === 20) {
      showNotif('🌅 Good morning!', 'A new day on your journey. Morning Kram awaits.');
    }
    if (h === 9 && m === 55) {
      showNotif('📿 Satsang in 5 minutes', 'Time to head for Satsang.');
    }
    if (h === 21 && m === 50) {
      showNotif('📵 Screen cutoff in 10 minutes', 'Start wrapping up entertainment. You\'ve got this.');
    }
    if (h === 22 && m === 25) {
      showNotif('📝 End-of-day report', 'Take 5 minutes to review your day.');
    }
    if (h === 23 && m === 15) {
      showNotif('😴 Bedtime in 15 minutes', 'Start winding down. Sleep is your foundation.');
    }

    // Day 4-5 encouragement at 9 AM
    const dayNum = getDayNum();
    if ((dayNum === 4 || dayNum === 5) && h === 9 && m === 0) {
      showNotif('💪 This is the hard part', 'Day ' + dayNum + '. Stay with it. Tomorrow gets easier.');
    }
    // Milestone reminders
    if (dayNum === 7 && h === 20 && m === 0) showNotif('🎁 Gift yourself!', 'One week done. You earned a reward.');
    if (dayNum === 14 && h === 20 && m === 0) showNotif('🎁 Gift yourself!', 'Two weeks. This is becoming who you are.');
    if (dayNum === 21 && h === 20 && m === 0) showNotif('🏆 Cycle 1 complete!', 'Twenty-one days. Time to celebrate.');

  }, 60000); // check every minute
}

function getDayNum() {
  const start = new Date('2026-11-26T00:00:00');
  const now = new Date();
  now.setHours(0,0,0,0);
  return Math.floor((now - start) / 86400000) + 1;
}

function showNotif(title, body) {
  self.registration.showNotification(title, {
    body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: title.substring(0, 20),
    renotify: false
  });
}

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window' }).then(cs => {
    if (cs.length) return cs[0].focus();
    return clients.openWindow('/');
  }));
});
