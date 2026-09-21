/**
 * ASTRA — Swarg Jaisi Shanti & 3-Point Clarity Roadmap
 * Bilingual Logic (English / Hindi), Heavenly Sound Synthesis, and Tranquil Interactions
 */

// ==========================================================================
// 1. BILINGUAL DICTIONARY & LOCALIZATION
// Note: translations object is modularized in data/i18n.js to minimize token usage on updates.
// ==========================================================================
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('astra_lang', lang);

  const enOpt = document.getElementById('lang-en');
  const hiOpt = document.getElementById('lang-hi');
  if (lang === 'hi') {
    hiOpt.classList.add('active');
    enOpt.classList.remove('active');
    document.documentElement.lang = 'hi';
  } else {
    enOpt.classList.add('active');
    hiOpt.classList.remove('active');
    document.documentElement.lang = 'en';
  }

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// ==========================================================================
// 2. HEAVENLY SOUND SYNTHESIZER (WEB AUDIO API TIBETAN CHIME / AMBIENT BELL)
// ==========================================================================
let audioCtx = null;
let isAudioPlaying = false;

function toggleHeavenlySound() {
  const btn = document.getElementById('sound-toggle');
  const status = document.getElementById('sound-status');

  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Play a soft, serene heavenly chime harmonic chord (432Hz root, 648Hz fifth, 864Hz octave)
  playHeavenlyChime(432, 2.5);
  setTimeout(() => playHeavenlyChime(540, 2.2), 300);
  setTimeout(() => playHeavenlyChime(648, 2.8), 600);

  btn.classList.add('playing');
  status.textContent = currentLang === 'hi' ? 'शांति ॐ' : 'Peaceful';

  setTimeout(() => {
    btn.classList.remove('playing');
    status.textContent = currentLang === 'hi' ? 'ध्वनि' : 'Sound';
  }, 3200);
}

function playHeavenlyChime(freq, duration) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

  // Soft attack and smooth heavenly exponential release
  gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// ==========================================================================
// 3. GOLDEN HEAVENLY PARTICLES CANVAS
// ==========================================================================
function initHeavenlyParticles() {
  const canvas = document.getElementById('heavenly-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const starCount = 65;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.6,
      alpha: Math.random() * 0.7 + 0.2,
      speedY: -(Math.random() * 0.2 + 0.05),
      speedX: (Math.random() - 0.5) * 0.15,
      pulse: Math.random() * Math.PI * 2
    });
  }

  // Shooting Stars (Meteors)
  const shootingStars = [];

  function spawnShootingStar() {
    shootingStars.push({
      x: Math.random() * width * 0.8 + width * 0.1,
      y: Math.random() * (height * 0.4),
      length: Math.random() * 80 + 50,
      speed: Math.random() * 10 + 8,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      opacity: 1,
      fade: Math.random() * 0.02 + 0.015
    });
  }

  setInterval(() => {
    if (Math.random() > 0.3) {
      spawnShootingStar();
    }
  }, 4500);

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Star Constellations (faint silver connections)
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = `rgba(203, 213, 225, ${(1 - dist / 110) * 0.22})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // 2. Draw Pure Silver Diamond Stars
    stars.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.pulse += 0.025;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      const alpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();

      // Soft Silver Specular Glow
      if (p.radius > 1.5) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 240, ${alpha * 0.4})`;
        ctx.fill();
      }
    });

    // 3. Draw Radiant Silver Shooting Stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      const tailX = s.x - Math.cos(s.angle) * s.length;
      const tailY = s.y - Math.sin(s.angle) * s.length;

      const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      ctx.stroke();

      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity -= s.fade;

      if (s.opacity <= 0 || s.x > width || s.y > height) {
        shootingStars.splice(i, 1);
      }
    }

    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

// Celestial Mouse Parallax (Antigravity Depth Effect)
function initCelestialParallax() {
  const bodies = document.querySelectorAll('.celestial-body');
  if (!bodies.length) return;

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX = (e.clientX - cx);
    mouseY = (e.clientY - cy);
  });

  function update() {
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    bodies.forEach(body => {
      const speed = parseFloat(body.getAttribute('data-speed')) || 0.05;
      const offsetX = targetX * speed;
      const offsetY = targetY * speed;
      body.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    });

    requestAnimationFrame(update);
  }

  update();
}

// ==========================================================================
// 4. FOCUS PILLS
// ==========================================================================
let selectedFocus = 'career';

function setupFocusPills() {
  const pills = document.querySelectorAll('.focus-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedFocus = pill.getAttribute('data-focus') || 'career';
    });
  });
}

function selectHeroFocus(focusKey) {
  const pills = document.querySelectorAll('.focus-pill');
  pills.forEach(pill => {
    if (pill.getAttribute('data-focus') === focusKey) {
      pill.click();
    }
  });
  openKundliFormModal();
}

// ==========================================================================
// 5. ROADMAP GENERATION ENGINE
// Note: sampleRoadmaps data is modularized in data/roadmaps.js to minimize token usage on updates.
// ==========================================================================
function setupFormSubmission() {
  const form = document.getElementById('astro-form');
  const modal = document.getElementById('roadmap-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalLoading = document.getElementById('modal-loading');
  const modalResults = document.getElementById('modal-results');
  const progressFill = document.getElementById('progress-fill');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = document.getElementById('userName').value.trim() || (currentLang === 'hi' ? 'आर्यन शर्मा' : 'Aryan Sharma');
    const pobVal = document.getElementById('userPob').value.trim() || 'India';

    closeKundliFormModal();
    modal.classList.add('open', 'active');
    modal.setAttribute('aria-hidden', 'false');
    modalLoading.style.display = 'flex';
    modalResults.style.display = 'none';
    progressFill.style.width = '0%';

    // Play a gentle sound when calculation starts
    if (audioCtx) {
      playHeavenlyChime(528, 2.0);
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      progressFill.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          renderRoadmapResults(nameVal, pobVal, selectedFocus);
          modalLoading.style.display = 'none';
          modalResults.style.display = 'block';
          if (audioCtx) {
            playHeavenlyChime(648, 2.5);
          }
        }, 300);
      }
    }, 110);
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}

function renderRoadmapResults(name, pob, focus) {
  const titleEl = document.getElementById('modal-user-title');
  const subEl = document.getElementById('modal-user-sub');
  const resultsGrid = document.getElementById('results-grid');

  const roadmapData = sampleRoadmaps[focus] || sampleRoadmaps.career;
  const content = roadmapData[currentLang] || roadmapData.en;

  titleEl.textContent = currentLang === 'hi' 
    ? `${name} का 3-पॉइंट कुंडली उत्तर` 
    : `${name}'s 3-Point Kundli Summary`;

  subEl.textContent = `${content.sign} • ${pob}`;

  resultsGrid.innerHTML = `
    <!-- Point 1 -->
    <div class="result-card-item">
      <div class="result-card-header">
        <span class="result-card-title">${content.point1.title}</span>
        <span class="${content.point1.tagClass}">${content.point1.tag}</span>
      </div>
      <div class="point-label">${content.point1.label}</div>
      <p class="result-card-body">${content.point1.desc}</p>
    </div>

    <!-- Point 2 -->
    <div class="result-card-item">
      <div class="result-card-header">
        <span class="result-card-title">${content.point2.title}</span>
        <span class="${content.point2.tagClass}">${content.point2.tag}</span>
      </div>
      <div class="point-label">${content.point2.label}</div>
      <p class="result-card-body">${content.point2.desc}</p>
    </div>

    <!-- Point 3 -->
    <div class="result-card-item">
      <div class="result-card-header">
        <span class="result-card-title">${content.point3.title}</span>
        <span class="${content.point3.tagClass}">${content.point3.tag}</span>
      </div>
      <div class="point-label">${content.point3.label}</div>
      <p class="result-card-body">${content.point3.desc}</p>
    </div>
  `;
}

// ==========================================================================
// 6. CHECKOUT / RESERVATION MODAL
// ==========================================================================
function openCheckoutModal(tierName, price) {
  const modal = document.getElementById('checkout-modal');
  const titleEl = document.getElementById('checkout-item-title');
  const priceEl = document.getElementById('checkout-item-price');

  if (!modal) return;

  titleEl.textContent = tierName;
  priceEl.textContent = `₹${price} Flat`;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  const closeBtn = document.getElementById('checkout-close-btn');
  closeBtn.onclick = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  };
}

function simulatePayment() {
  const phone = document.getElementById('checkout-phone').value.trim();
  if (!phone) {
    alert(currentLang === 'hi' ? 'कृपया अपना संपर्क नंबर दर्ज करें।' : 'Please enter your phone/WhatsApp number for the call link.');
    return;
  }

  const btn = document.getElementById('btn-confirm-pay');
  const originalText = btn.querySelector('.btn-text').textContent;
  btn.querySelector('.btn-text').textContent = currentLang === 'hi' ? 'स्लॉट बुक हो रहा है...' : 'Confirming your slot...';
  btn.disabled = true;

  setTimeout(() => {
    alert(currentLang === 'hi' 
      ? '✓ आपका 15-मिनट का ASTRA स्लॉट बुक हो गया है। मीटिंग लिंक WhatsApp पर भेज दिया गया है।'
      : '✓ Your 15-minute ASTRA session is confirmed. Meeting link sent to your WhatsApp.');
    btn.disabled = false;
    btn.querySelector('.btn-text').textContent = originalText;
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('open');
  }, 1200);
}

function selectPricing(tierIndex) {
  if (tierIndex === 1) {
    document.getElementById('hero-console').scrollIntoView({ behavior: 'smooth' });
  } else if (tierIndex === 2) {
    openCheckoutModal(currentLang === 'hi' ? 'एक सवाल का हल' : 'Single Question Fix', 99);
  } else {
    openCheckoutModal(currentLang === 'hi' ? '15-मिनट की लाइव कॉल' : 'Full 15-Min Live Call', 249);
  }
}

window.openCheckoutModal = openCheckoutModal;
window.simulatePayment = simulatePayment;
window.selectPricing = selectPricing;

// ==========================================================================
// 7. FAQ ACCORDION
// ==========================================================================
function setupFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ==========================================================================
// 8. 3D CARD TILT EFFECT
// ==========================================================================
function setupCardTilt() {
  const tiltCards = document.querySelectorAll('.contrast-card, .guide-card, .pricing-tile, .tranquility-banner');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ==========================================================================
// 10. INTERACTIVE COSMIC EXPLORER & ASTROLOGER VOICE QUOTES
// Note: rashiData and guideVoiceQuotes are modularized in data/rashis.js to minimize token usage on updates.
// ==========================================================================
let activeVoiceBtn = null;
let activeVoiceTimeout = null;

function playGuideVoice(guideId, btn) {
  // If already playing this one, stop
  if (btn.classList.contains('playing')) {
    stopGuideVoice(guideId, btn);
    return;
  }

  // Stop previous if any
  if (activeVoiceBtn && activeVoiceBtn !== btn) {
    activeVoiceBtn.classList.remove('playing');
    const wave = activeVoiceBtn.querySelector('.voice-wave');
    const icon = activeVoiceBtn.querySelector('.voice-icon');
    if (wave) wave.style.display = 'none';
    if (icon) icon.textContent = '▶';
  }

  // Hide all speech bubbles
  document.querySelectorAll('.guide-voice-bubble').forEach(b => b.style.display = 'none');

  // Activate this button
  btn.classList.add('playing');
  const wave = btn.querySelector('.voice-wave');
  const icon = btn.querySelector('.voice-icon');
  if (wave) wave.style.display = 'inline-flex';
  if (icon) icon.textContent = '❚❚';

  // Show voice bubble
  const bubble = document.getElementById(`voice-bubble-${guideId}`);
  if (bubble) {
    bubble.textContent = `🎙️ ${currentLang === 'hi' ? guideVoiceQuotes[guideId].hi : guideVoiceQuotes[guideId].en}`;
    bubble.style.display = 'block';
  }

  activeVoiceBtn = btn;

  // Play rich resonant harp chord via heavenlySynth
  if (heavenlySynth) {
    heavenlySynth.playGentleChime();
    setTimeout(() => {
      if (heavenlySynth) heavenlySynth.playGentleChime();
    }, 400);
  }

  // Auto stop after 10s
  clearTimeout(activeVoiceTimeout);
  activeVoiceTimeout = setTimeout(() => {
    stopGuideVoice(guideId, btn);
  }, 10000);
}

function stopGuideVoice(guideId, btn) {
  btn.classList.remove('playing');
  const wave = btn.querySelector('.voice-wave');
  const icon = btn.querySelector('.voice-icon');
  if (wave) wave.style.display = 'none';
  if (icon) icon.textContent = '▶';

  const bubble = document.getElementById(`voice-bubble-${guideId}`);
  if (bubble) {
    bubble.style.display = 'none';
  }
  activeVoiceBtn = null;
}

// ==========================================================================
// 12. SATVIK REMEDY MODAL CONTROLS
// ==========================================================================
function openSatvikModal() {
  const modal = document.getElementById('satvik-modal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (heavenlySynth) heavenlySynth.playGentleChime();
  }
}

function closeSatvikModal() {
  const modal = document.getElementById('satvik-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }
}

// Close on backdrop click
document.addEventListener('click', (e) => {
  const satvikModal = document.getElementById('satvik-modal');
  if (e.target === satvikModal) {
    closeSatvikModal();
  }
});

// ==========================================================================
// 12. MOBILE NAVIGATION & DRAWER
// ==========================================================================
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const header = document.getElementById('site-header');

  if (!menuBtn || !drawer) return;

  const toggleMenu = (forceClose = false) => {
    const isOpen = forceClose ? false : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    menuBtn.classList.toggle('active', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (header) {
      const headerHeight = header.offsetHeight;
      drawer.style.top = `${headerHeight + 6}px`;
    }
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking any link inside drawer
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(true);
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(true);
    }
  });
}

// ==========================================================================
// 13. AAJ KA GOCHAR INTERACTION
// ==========================================================================
function initGocharTicker() {
  const pill = document.getElementById('gochar-pill');
  if (!pill) return;

  pill.addEventListener('click', () => {
    const explorer = document.getElementById('cosmic-explorer');
    if (explorer) {
      explorer.scrollIntoView({ behavior: 'smooth' });
    }
    if (heavenlySynth) {
      heavenlySynth.playGentleChime();
    }
  });
}

// ==========================================================================
// 14. 3D SCROLL CANVAS STORYTELLING & KUNDLI MODAL CONTROLLER
// ==========================================================================
function openKundliFormModal() {
  const modal = document.getElementById('kundli-form-modal');
  if (modal) {
    modal.classList.add('open', 'active');
    modal.setAttribute('aria-hidden', 'false');
    // Note: Do NOT alter document.body.style.overflow - altering body overflow breaks
    // position:sticky on the 3D hero canvas and causes the window to unpin & jump!
    const nameInput = document.getElementById('userName');
    if (nameInput) {
      setTimeout(() => {
        nameInput.focus({ preventScroll: true });
      }, 80);
    }
  }
}

function closeKundliFormModal() {
  const modal = document.getElementById('kundli-form-modal');
  if (modal) {
    modal.classList.remove('open', 'active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function triggerHeroScroll() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;
  const targetY = heroSection.offsetTop + (heroSection.offsetHeight - window.innerHeight) * 0.75;
  window.scrollTo({
    top: targetY,
    behavior: 'smooth'
  });
}

function initCanvasScrollSequence() {
  const canvas = document.getElementById('hero-scroll-canvas');
  const heroSection = document.getElementById('hero');
  const headerBlock = document.getElementById('stage-header');
  if (!canvas || !heroSection) return;

  const ctx = canvas.getContext('2d');
  const frameCount = 60;
  const frames = [];
  let loadedFrames = 0;
  let currentFrameIndex = 1;
  let ticking = false;

  // Preload all 60 WebP frames extracted from main.mp4 (Gemini watermark removed via tight delogo)
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const padIndex = String(i).padStart(3, '0');
    img.src = `assets/frames/frame_${padIndex}.webp`;
    img.onload = () => {
      loadedFrames++;
      if (i === 1 || loadedFrames === 1) {
        renderFrame(1);
      }
    };
    frames[i] = img;
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    renderFrame(currentFrameIndex);
  }

  function renderFrame(index) {
    const img = frames[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgRatio = imgW / imgH;
    const canvasRatio = cw / ch;

    let drawW, drawH, drawX, drawY;
    if (canvasRatio > imgRatio) {
      drawW = cw;
      drawH = cw / imgRatio;
      drawX = 0;
      drawY = (ch - drawH) / 2;
    } else {
      drawH = ch;
      drawW = ch * imgRatio;
      drawX = (cw - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  function onScroll() {
    const rect = heroSection.getBoundingClientRect();
    const sectionTop = window.pageYOffset + rect.top;
    const totalScroll = heroSection.offsetHeight - window.innerHeight;

    if (totalScroll <= 0) {
      ticking = false;
      return;
    }

    const current = window.pageYOffset - sectionTop;
    const p = Math.max(0, Math.min(1, current / totalScroll));

    // Map scroll progress to 60 video frames
    const targetFrame = Math.min(frameCount, Math.max(1, Math.floor(p * (frameCount - 1)) + 1));
    if (targetFrame !== currentFrameIndex) {
      currentFrameIndex = targetFrame;
      renderFrame(currentFrameIndex);
    }

    // Subtle header opacity adjustment on deep scroll
    if (headerBlock) {
      const headerOpacity = p < 0.2 ? 1 : Math.max(0, 1 - (p - 0.2) / 0.4);
      headerBlock.style.opacity = headerOpacity;
    }

    // Pop up the CTA button dock ONLY at the very end of the scroll sequence (p >= 0.70)
    const ctaDock = document.getElementById('hero-cta-dock');
    if (ctaDock) {
      if (p >= 0.70) {
        ctaDock.classList.add('visible');
      } else {
        ctaDock.classList.remove('visible');
      }
    }

    // Fade out swipe prompt indicator as soon as user begins scrolling
    const swipeIndicator = document.getElementById('hero-swipe-indicator');
    if (swipeIndicator) {
      if (p > 0.04) {
        swipeIndicator.classList.add('hidden');
      } else {
        swipeIndicator.classList.remove('hidden');
      }
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', () => {
    resizeCanvas();
    requestTick();
  });

  // Modal event listeners (Escape key & backdrop click)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeKundliFormModal();
  });

  const kundliModal = document.getElementById('kundli-form-modal');
  if (kundliModal) {
    kundliModal.addEventListener('click', (e) => {
      if (e.target === kundliModal) closeKundliFormModal();
    });

    // Prevent background scrolling while modal is open without altering body overflow
    kundliModal.addEventListener('wheel', (e) => {
      if (e.target === kundliModal) e.preventDefault();
    }, { passive: false });

    kundliModal.addEventListener('touchmove', (e) => {
      if (e.target === kundliModal) e.preventDefault();
    }, { passive: false });
  }

  // Intercept all links referencing #hero-console to open the modal
  document.querySelectorAll('a[href="#hero-console"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openKundliFormModal();
    });
  });

  resizeCanvas();
  onScroll();
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeavenlyParticles();

  // Language switcher
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'hi' : 'en');
      initCosmicExplorer(); // Refresh rashi labels in current language
    });
  }

  // Sound toggle
  const soundToggle = document.getElementById('sound-toggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', toggleHeavenlySound);
  }

  const savedLang = localStorage.getItem('astra_lang') || 'en';
  setLanguage(savedLang);

  setupFocusPills();
  setupFormSubmission();
  setupFAQ();
  setupCardTilt();
  setupMobileMenu();
  initCelestialParallax();

  // New High-Value Features
  initCosmicExplorer();
  initGocharTicker();
  initCanvasScrollSequence();
});

