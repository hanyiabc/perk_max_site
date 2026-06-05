// PerkMax landing page — minimal, no dependencies, no tracking.
(function () {
  'use strict';

  var URLS = {
    android: 'https://github.com/hanyiabc/perk_max_releases/releases/download/v0.1.0/app-release.apk',
    windows: 'https://github.com/hanyiabc/perk_max_releases/releases/download/v0.1.0/perk_max_windows.zip',
    pwa:     'https://hanyiabc.github.io/perk_max_releases/',
  };

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
})();
