// PerkMax landing page — minimal, no dependencies, no tracking.
(function () {
  'use strict';

  var URLS = {
    android: 'https://github.com/hanyiabc/perk_max_releases/releases/download/v0.1.0/PerkMax-0.1.0-universal.apk',
    windows: 'https://github.com/hanyiabc/perk_max_releases/releases/download/v0.1.0/PerkMax-0.1.0-windows-x64.zip',
    pwa:     'https://hanyiabc.github.io/perk_max_releases/',
  };

  function fetchLatestRelease() {
    fetch('https://api.github.com/repos/hanyiabc/perk_max_releases/releases/latest')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var assets  = Array.isArray(data.assets) ? data.assets : [];
        var version = typeof data.tag_name === 'string'
          ? data.tag_name.replace(/^v/, '') : null;

        var apk = assets.find(function (a) {
          return /\.apk$/.test(a.name);
        });
        var zip = assets.find(function (a) {
          return /\.zip$/.test(a.name);
        });

        if (apk) {
          URLS.android = apk.browser_download_url;
          var el = document.getElementById('platform-android');
          if (el) el.href = apk.browser_download_url;
          var note = document.getElementById('platform-android-note');
          if (note && version) note.textContent = 'Download APK v' + version;
        }
        if (zip) {
          URLS.windows = zip.browser_download_url;
          var el = document.getElementById('platform-windows');
          if (el) el.href = zip.browser_download_url;
          var note = document.getElementById('platform-windows-note');
          if (note && version) note.textContent = 'Download ZIP v' + version;
        }

        // Re-run so the hero / nav / download-section smart buttons pick up the new URLs.
        initSmartButtons();
      })
      .catch(function () { /* silently keep hardcoded fallback URLs */ });
  }

  function detectPlatform() {
    var ua = navigator.userAgent;
    if (/android/i.test(ua)) return 'android';
    if (/Win/i.test(navigator.platform) || /Windows/i.test(ua)) return 'windows';
    return 'pwa';
  }

  var LABELS = {
    android: 'Download for Android',
    windows: 'Download for Windows',
    pwa:     'Open web app',
  };

  function initSmartButtons() {
    var platform = detectPlatform();
    var url   = URLS[platform];
    var label = LABELS[platform];
    ['nav-get-btn', 'hero-get-btn', 'dl-get-btn'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.href        = url;
      el.textContent = label;
      // Direct APK/ZIP downloads don't need a new tab
      if (platform === 'pwa') {
        el.setAttribute('target', '_blank');
      } else {
        el.removeAttribute('target');
        el.removeAttribute('rel');
      }
    });
  }

  // Mobile nav toggle
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    nav.querySelectorAll('.nav__links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Current year in the footer
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  initSmartButtons();
  fetchLatestRelease();
})();
