/* MarketGrowth.io - studio shell.
   Mounts the shared header and footer, runs the theme switch, the entrance
   and scroll reveals, and the Web3Forms contact modal. */
(function () {
  var LOGO = "https://marketgrowth.io/images/logo-white.svg";

  function navLinks(current) {
    var items = [
      { href: "index.html", label: "Home", key: "home" },
      { href: "ventures.html", label: "Ventures", key: "ventures" },
      { href: "how-we-build.html", label: "How we build", key: "how" }
    ];
    return items.map(function (i) {
      return '<a href="' + i.href + '"' + (i.key === current ? ' aria-current="page"' : "") + ">" + i.label + "</a>";
    }).join("");
  }

  var HEADER_HOST = document.querySelector("[data-component='site-header']");
  var current = HEADER_HOST ? HEADER_HOST.getAttribute("data-current") || "" : "";

  var HEADER =
    '<header class="site-header reveal" data-delay="150">' +
    '  <div class="header-row">' +
    '    <a class="brand" href="index.html" aria-label="MarketGrowth home"><img src="' + LOGO + '" alt="MarketGrowth"></a>' +
    '    <div class="header-actions">' +
    '      <button class="theme-toggle" type="button" aria-label="Switch color theme"><span class="icon-sun">&#9728;</span><span class="icon-moon">&#9790;</span></button>' +
    '      <a class="pill" href="contact.html" data-contact>Contact us</a>' +
    '    </div>' +
    '  </div>' +
    '  <nav class="nav-links" aria-label="Main navigation">' + navLinks(current) + "</nav>" +
    "</header>";

  var FOOTER =
    '<footer class="site-footer">' +
    '  <div class="wrap">' +
    '    <div class="fbrand">' +
    '      <a class="brand" href="index.html" aria-label="MarketGrowth home"><img src="' + LOGO + '" alt="MarketGrowth"></a>' +
    "      <p>A digital innovation studio. We build and operate our own software, service and media companies.</p>" +
    "    </div>" +
    '    <div><h4>Studio</h4><ul>' +
    '      <li><a href="index.html">Home</a></li>' +
    '      <li><a href="ventures.html">Ventures</a></li>' +
    '      <li><a href="how-we-build.html">How we build</a></li>' +
    "    </ul></div>" +
    '    <div><h4>Resources</h4><ul>' +
    '      <li><a href="https://agentledgtm.com/go-to-market/agent-led-growth-gtm?utm_source=mgio-footer" target="_blank" rel="noopener">What is agent-led growth</a></li>' +
    '      <li><a href="https://socient.net/insights/nonprofit-ai-visibility-seo-geo?utm_source=mgio-footer" target="_blank" rel="noopener">Nonprofits in AI answers</a></li>' +
    '      <li><a href="https://directcarehq.com/insights/icf-dd-n-individual-program-plans?utm_source=mgio-footer" target="_blank" rel="noopener">How surveyors test an IPP</a></li>' +
    '      <li><a href="https://orbytt.ai/seven-delegation-mistakes-stealing-your-time-with-vas/?utm_source=mgio-footer" target="_blank" rel="noopener">Seven delegation mistakes</a></li>' +
    '      <li><a href="https://aemfix.com/what-is-aeo.html?utm_source=mgio-footer" target="_blank" rel="noopener">What is answer engine optimization</a></li>' +
    "    </ul></div>" +
    '    <div><h4>Legal</h4><ul>' +
    '      <li><a href="terms-of-service.html">Terms of service</a></li>' +
    '      <li><a href="privacy-policy.html">Privacy policy</a></li>' +
    '      <li><a href="license.html">License terms</a></li>' +
    '      <li><a href="contact.html" data-contact>Contact</a></li>' +
    "    </ul></div>" +
    "  </div>" +
    '  <div class="wrap legal">' +
    '    <span>&copy; <span class="js-year">2026</span> MarketGrowth CX LLC. All rights reserved.</span>' +
    '    <a href="https://www.trustpilot.com/review/marketgrowth.io" target="_blank" rel="noopener">Review us on Trustpilot &rarr;</a>' +
    "  </div>" +
    "</footer>";

  var MODAL =
    '<div class="modal-backdrop" id="mgContact" role="dialog" aria-modal="true" aria-labelledby="mgContactTitle" hidden>' +
    '  <div class="modal">' +
    '    <button class="modal-x" type="button" aria-label="Close">&#215;</button>' +
    '    <div class="modal-body">' +
    '      <h3 id="mgContactTitle">Start a conversation</h3>' +
    '      <p class="modal-sub">Tell us what you are working on. We answer within one business day.</p>' +
    '      <form id="mgContactForm" action="https://api.web3forms.com/submit" method="POST">' +
    '        <input type="hidden" name="access_key" value="d55d2f53-8e38-430f-b536-c77831ddda7f">' +
    '        <input type="hidden" name="subject" value="New inquiry from marketgrowth.io">' +
    '        <input type="checkbox" name="botcheck" class="hidden" style="display:none">' +
    '        <label>Name<input type="text" name="name" required placeholder="Your name"></label>' +
    '        <label>Email<input type="email" name="email" required placeholder="you@company.com"></label>' +
    '        <label>What are you working on?<textarea name="message" rows="3" required placeholder="A short note is enough."></textarea></label>' +
    '        <p class="modal-err" hidden>Something went wrong. Please try again.</p>' +
    '        <button class="pill" type="submit">Send message</button>' +
    "      </form>" +
    "    </div>" +
    '    <div class="modal-done" hidden>' +
    "      <h3>Message sent</h3>" +
    '      <p class="modal-sub">Thank you. We will reply within one business day.</p>' +
    '      <button class="ghost-pill modal-close2" type="button">Close</button>' +
    "    </div>" +
    "  </div>" +
    "</div>";

  function mount(name, html) {
    var el = document.querySelector("[data-component='" + name + "']");
    if (el) el.outerHTML = html;
  }
  mount("site-header", HEADER);
  mount("site-footer", FOOTER);
  document.body.insertAdjacentHTML("beforeend", MODAL);

  /* ---------- Theme: dark by default, a saved choice wins ---------- */
  var root = document.documentElement;
  function applyTheme(t) { root.setAttribute("data-theme", t); }
  var saved = null;
  try { saved = localStorage.getItem("mg-theme"); } catch (e) {}
  applyTheme(saved === "light" ? "light" : "dark");

  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("mg-theme", next); } catch (e) {}
    });
  });

  document.querySelectorAll(".js-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Contact modal ---------- */
  var backdrop = document.getElementById("mgContact");
  var form = document.getElementById("mgContactForm");
  var body = backdrop.querySelector(".modal-body");
  var done = backdrop.querySelector(".modal-done");
  var err = backdrop.querySelector(".modal-err");
  var lastFocus = null;

  function openModal() {
    lastFocus = document.activeElement;
    body.hidden = false; done.hidden = true; err.hidden = true;
    backdrop.hidden = false;
    document.body.classList.add("modal-locked");
    requestAnimationFrame(function () {
      backdrop.classList.add("open");
      form.querySelector("input[name='name']").focus();
    });
  }
  function closeModal() {
    backdrop.classList.remove("open");
    document.body.classList.remove("modal-locked");
    setTimeout(function () { backdrop.hidden = true; }, 300);
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll("a[data-contact]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); openModal(); });
  });
  backdrop.querySelector(".modal-x").addEventListener("click", closeModal);
  backdrop.querySelector(".modal-close2").addEventListener("click", closeModal);
  backdrop.addEventListener("click", function (e) { if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    err.hidden = true;
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.textContent = "Sending...";
    fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form)
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d.success) { body.hidden = true; done.hidden = false; form.reset(); }
        else { err.hidden = false; }
      })
      .catch(function () { err.hidden = false; })
      .then(function () { btn.disabled = false; btn.textContent = "Send message"; });
  });

  /* ---------- Reveals ---------- */
  var EASE = "cubic-bezier(0.33, 1, 0.68, 1)";
  function splitWords(el, baseDelay, stagger, duration, fromY) {
    if (!el) return;
    var text = el.textContent.trim();
    el.textContent = "";
    var words = text.split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      var s = document.createElement("span");
      s.className = "w";
      s.textContent = words[i];
      s.style.transform = "translateY(" + fromY + "px)";
      var d = baseDelay + i * stagger + "ms";
      s.style.transition = "opacity " + duration + "ms " + EASE + " " + d + ", transform " + duration + "ms " + EASE + " " + d;
      el.appendChild(s);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    }
  }
  splitWords(document.getElementById("headline"), 400, 80, 700, 24);
  splitWords(document.getElementById("subline"), 950, 20, 600, 14);

  document.querySelectorAll(".reveal").forEach(function (el) {
    el.style.transitionDelay = (el.getAttribute("data-delay") || 0) + "ms";
  });
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { document.body.classList.add("in"); });
  });

  var srs = document.querySelectorAll(".sr");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });
    srs.forEach(function (el) {
      var d = el.getAttribute("data-srd");
      if (d) el.style.transitionDelay = d + "ms";
      io.observe(el);
    });
    /* Safety net: never leave content invisible if the observer is outrun. */
    window.addEventListener("scroll", function sweep() {
      var left = document.querySelectorAll(".sr:not(.in)");
      for (var i = 0; i < left.length; i++) {
        if (left[i].getBoundingClientRect().top < window.innerHeight) left[i].classList.add("in");
      }
      if (!left.length) window.removeEventListener("scroll", sweep);
    }, { passive: true });
  } else {
    srs.forEach(function (el) { el.classList.add("in"); });
  }
})();
