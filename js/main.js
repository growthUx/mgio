/* MarketGrowth.io, global scripts: theme switcher + mobile nav */
(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function systemTheme() {
    return media.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  // Initial: saved preference wins, otherwise follow the system
  var saved = null;
  try { saved = localStorage.getItem("mg-theme"); } catch (e) {}
  applyTheme(saved || systemTheme());

  // Follow system changes while the user hasn't chosen manually
  media.addEventListener("change", function () {
    var stored = null;
    try { stored = localStorage.getItem("mg-theme"); } catch (e) {}
    if (!stored) applyTheme(systemTheme());
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle
    var toggles = document.querySelectorAll(".theme-toggle");
    toggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem("mg-theme", next); } catch (e) {}
      });
    });

    // Mobile nav
    var burger = document.querySelector(".nav-burger");
    var header = document.querySelector(".site-header");
    if (burger && header) {
      burger.addEventListener("click", function () {
        header.classList.toggle("nav-open");
        burger.setAttribute(
          "aria-expanded",
          header.classList.contains("nav-open") ? "true" : "false"
        );
      });
      // Close menu when a link is tapped
      header.querySelectorAll(".nav-links a").forEach(function (a) {
        a.addEventListener("click", function () {
          header.classList.remove("nav-open");
        });
      });
    }

    // Current year in footer
    document.querySelectorAll(".js-year").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // ------- Contact modal (header "Contact us" opens it; other CTAs
    // and the footer still navigate to the full contact page) -------
    var overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true" aria-label="Contact MarketGrowth">' +
      '  <button class="modal-close" aria-label="Close contact form">&#10005;</button>' +
      '  <h3>Let’s talk</h3>' +
      '  <p class="modal-sub">Tell us about your project and we’ll get back to you within one business day.</p>' +
      '  <form class="modal-form" action="https://api.web3forms.com/submit" method="POST">' +
      '    <input type="hidden" name="access_key" value="d55d2f53-8e38-430f-b536-c77831ddda7f">' +
      '    <input type="hidden" name="subject" value="New inquiry from marketgrowth.io (modal)">' +
      '    <input type="checkbox" name="botcheck" style="display:none;" tabindex="-1" autocomplete="off">' +
      '    <div class="form-group"><label for="mg-modal-name">Your name</label>' +
      '      <input type="text" id="mg-modal-name" name="name" required placeholder="Jane Founder"></div>' +
      '    <div class="form-group"><label for="mg-modal-email">Email address</label>' +
      '      <input type="email" id="mg-modal-email" name="email" required placeholder="jane@company.com"></div>' +
      '    <div class="form-group"><label for="mg-modal-message">What are you working on?</label>' +
      '      <textarea id="mg-modal-message" name="message" rows="5" required placeholder="Tell us about your project, goals, and timeline..."></textarea></div>' +
      '    <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Submit form</button>' +
      '    <p class="form-note">Prefer a full page? <a href="contact.html">Open the contact page &rarr;</a></p>' +
      "  </form>" +
      '  <div class="modal-success" hidden><span class="check">&#10003;</span>' +
      '    <h3>Message sent</h3><p>Thanks for reaching out. We’ll get back to you within one business day.</p></div>' +
      "</div>";
    document.body.appendChild(overlay);

    var lastFocus = null;
    function openModal() {
      lastFocus = document.activeElement;
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-locked");
      var first = overlay.querySelector("input[name=name]");
      if (first) setTimeout(function () { first.focus(); }, 100);
    }
    function closeModal() {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-locked");
      if (lastFocus) lastFocus.focus();
    }

    // Header "Contact us" button triggers the modal (href stays as fallback)
    document.querySelectorAll(".nav-cta a[href='contact.html']").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
      });
    });

    overlay.querySelector(".modal-close").addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
    });

    // ------- Hero compute network: each animation round renders a
    // different ORGANIZATION SHAPE (hierarchical, circular, flat, hub),
    // and the packets show how decisions trickle down or collaborate -------
    var net = document.querySelector(".network");
    if (net) {
      var NS = "http://www.w3.org/2000/svg";
      var CYCLE = 10000; // matches the 10s CSS animation cycle
      var GX = function (k) { return 66.5 * k; };
      var GY = function (j) { return 60 * j; };
      var TEAL = "#40C1AC", BLUE = "#99D6EA", ORANGE = "#FFAA4D", PURPLE = "#753BBD";

      function el(name, attrs) {
        var e = document.createElementNS(NS, name);
        for (var key in attrs) e.setAttribute(key, attrs[key]);
        return e;
      }
      function jit(s) { return Math.random() * s; }

      /* --- Hierarchical: decisions trickle down from the top --- */
      function hierarchy() {
        var N = [
          { x: GX(4), y: GY(1), lv: 0, fill: ORANGE, r: 7 },              // 0 leader
          { x: GX(2), y: GY(3), lv: 1, fill: PURPLE }, { x: GX(4), y: GY(3), lv: 1, fill: PURPLE }, { x: GX(6), y: GY(3), lv: 1, fill: PURPLE },
          { x: GX(1), y: GY(5), lv: 2, fill: TEAL }, { x: GX(3), y: GY(5), lv: 2, fill: TEAL }, { x: GX(4), y: GY(5), lv: 2, fill: TEAL },
          { x: GX(5), y: GY(5), lv: 2, fill: TEAL }, { x: GX(7), y: GY(5), lv: 2, fill: TEAL },
          { x: GX(1), y: GY(7), lv: 3, fill: BLUE }, { x: GX(3), y: GY(7), lv: 3, fill: BLUE },
          { x: GX(5), y: GY(7), lv: 3, fill: BLUE }, { x: GX(7), y: GY(7), lv: 3, fill: BLUE }
        ];
        var E = [[0,1],[0,2],[0,3],[1,4],[1,5],[2,6],[3,7],[3,8],[4,9],[5,10],[7,11],[8,12]];
        var routes = [ [0,1,4,9], [0,2,6], [0,3,8,12], [0,1,5,10], [0,3,7,11] ];
        // draw + appear top-down, level by level
        N.forEach(function (n) { n.delay = n.lv * 0.55 + jit(0.25); });
        var edges = E.map(function (p) {
          return { a: p[0], b: p[1], delay: Math.max(N[p[0]].lv, N[p[1]].lv) * 0.55 + jit(0.3) };
        });
        return { nodes: N, edges: edges, routes: routes };
      }

      /* --- Circular: decisions pass around the ring, both directions --- */
      function circular() {
        var N = [], count = 10, cx = 266, cy = 240, r = 150;
        for (var i = 0; i < count; i++) {
          var ang = -Math.PI / 2 + (i * 2 * Math.PI) / count;
          N.push({ x: Math.round(cx + r * Math.cos(ang)), y: Math.round(cy + r * Math.sin(ang)),
                   fill: [TEAL, BLUE, TEAL, PURPLE, TEAL, ORANGE, TEAL, BLUE, TEAL, PURPLE][i],
                   delay: i * 0.22 });
        }
        var edges = [];
        for (var e = 0; e < count; e++) {
          edges.push({ a: e, b: (e + 1) % count, delay: e * 0.22 + 0.1 });
        }
        function arc(start, hops, dir) {
          var pth = [start];
          for (var h = 1; h <= hops; h++) pth.push(((start + dir * h) % count + count) % count);
          return pth;
        }
        var routes = [arc(0, 4, 1), arc(5, 4, 1), arc(3, 3, -1), arc(8, 4, -1)];
        return { nodes: N, edges: edges, routes: routes };
      }

      /* --- Flat: peers collaborate laterally, no boss node --- */
      function flat() {
        var N = [], rows = [GY(3), GY(5)];
        rows.forEach(function (y, ri) {
          for (var k = 1; k <= 6; k++) {
            N.push({ x: GX(k) + 33.25, y: y, fill: [TEAL, BLUE, PURPLE, TEAL, ORANGE, TEAL][(k + ri) % 6],
                     delay: (k - 1) * 0.18 + ri * 0.12 });
          }
        });
        var edges = [], d = 0;
        for (var r0 = 0; r0 < 2; r0++) {               // horizontal peer links
          for (var c = 0; c < 5; c++) {
            edges.push({ a: r0 * 6 + c, b: r0 * 6 + c + 1, delay: (d++) * 0.14 });
          }
        }
        for (var v = 0; v < 6; v++) {                   // cross-row collaboration
          edges.push({ a: v, b: v + 6, delay: (d++) * 0.14 });
        }
        var adj = N.map(function () { return []; });
        edges.forEach(function (p) { adj[p.a].push(p.b); adj[p.b].push(p.a); });
        var routes = [];
        for (var pk = 0; pk < 5; pk++) {               // random peer-to-peer walks
          var cur = Math.floor(Math.random() * N.length), prev = -1, pth = [cur];
          for (var h = 0; h < 3; h++) {
            var opts = adj[cur].filter(function (n) { return n !== prev; });
            if (!opts.length) opts = adj[cur];
            prev = cur; cur = opts[Math.floor(Math.random() * opts.length)];
            pth.push(cur);
          }
          routes.push(pth);
        }
        return { nodes: N, edges: edges, routes: routes };
      }

      /* --- Hub & spoke: the hub broadcasts out, spokes report back --- */
      function hubSpoke() {
        var N = [{ x: 266, y: 240, fill: ORANGE, r: 7, delay: 0 }];
        var spots = [[GX(2), GY(2)], [266, GY(1)], [GX(6), GY(2)], [GX(7), GY(4)],
                     [GX(6), GY(6)], [266, GY(7)], [GX(2), GY(6)], [GX(1), GY(4)]];
        spots.forEach(function (s, i) {
          N.push({ x: s[0], y: s[1], fill: [TEAL, BLUE, TEAL, PURPLE, TEAL, BLUE, TEAL, PURPLE][i],
                   delay: 0.4 + i * 0.18 });
        });
        var edges = spots.map(function (_, i) { return { a: 0, b: i + 1, delay: 0.3 + i * 0.18 }; });
        var routes = [ [0,2], [0,5], [0,7], [3,0], [8,0], [1,0,4] ]; // out, back, through
        return { nodes: N, edges: edges, routes: routes };
      }

      var LAYOUTS = [hierarchy, circular, flat, hubSpoke];
      var round = Math.floor(Math.random() * LAYOUTS.length); // random starting shape

      function buildNetwork() {
        var layout = LAYOUTS[round % LAYOUTS.length]();
        round++;
        var linksG = net.querySelector(".net-links");
        var nodesG = net.querySelector(".net-nodes");
        linksG.textContent = "";
        nodesG.textContent = "";
        net.querySelectorAll(".net-packet").forEach(function (p) { p.remove(); });

        layout.edges.forEach(function (p) {
          var l = el("line", {
            "class": "net-line", pathLength: "1",
            x1: layout.nodes[p.a].x, y1: layout.nodes[p.a].y,
            x2: layout.nodes[p.b].x, y2: layout.nodes[p.b].y
          });
          l.style.setProperty("--i", (p.delay / 0.14).toFixed(2)); // CSS delay = --i * 0.14s
          linksG.appendChild(l);
        });
        layout.nodes.forEach(function (n) {
          var c = el("circle", {
            "class": "net-node", cx: n.x, cy: n.y,
            r: n.r || (4 + jit(1.2)).toFixed(1), fill: n.fill
          });
          c.style.setProperty("--i", (n.delay / 0.1).toFixed(2)); // CSS delay = --i * 0.1s
          nodesG.appendChild(c);
        });
        layout.routes.forEach(function (route, idx) {
          var d = "M" + route.map(function (i) {
            return layout.nodes[i].x + " " + layout.nodes[i].y;
          }).join(" L");
          var packet = el("circle", { "class": "net-packet", r: (3.6 + jit(1.2)).toFixed(1) });
          packet.style.offsetPath = "path('" + d + "')";
          packet.style.animationDelay = (idx * 0.35 + jit(0.2)).toFixed(2) + "s";
          net.appendChild(packet);
        });
      }

      buildNetwork();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setInterval(buildNetwork, CYCLE);
      }
    }

    // ------- Testimonial carousel -------
    document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
      var track = carousel.querySelector(".carousel-track");
      var slides = carousel.querySelectorAll(".carousel-slide");
      var dotsWrap = carousel.querySelector(".carousel-dots");
      var prev = carousel.querySelector("[data-carousel-prev]");
      var next = carousel.querySelector("[data-carousel-next]");
      if (!track || slides.length === 0) return;

      var index = 0;
      var timer = null;

      // Build dots
      var dots = [];
      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
        dot.addEventListener("click", function () { go(i); restart(); });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });

      function go(i) {
        index = (i + slides.length) % slides.length;
        track.style.transform = "translateX(-" + index * 100 + "%)";
        dots.forEach(function (d, j) {
          d.classList.toggle("active", j === index);
        });
      }
      function restart() {
        if (timer) clearInterval(timer);
        timer = setInterval(function () { go(index + 1); }, 6000);
      }

      if (prev) prev.addEventListener("click", function () { go(index - 1); restart(); });
      if (next) next.addEventListener("click", function () { go(index + 1); restart(); });

      // Pause auto-advance while the pointer or focus is on the carousel
      carousel.addEventListener("mouseenter", function () { if (timer) clearInterval(timer); });
      carousel.addEventListener("mouseleave", restart);
      carousel.addEventListener("focusin", function () { if (timer) clearInterval(timer); });
      carousel.addEventListener("focusout", restart);

      go(0);
      restart();
    });

    // ------- Image lightbox: click any content image to enlarge -------
    var lightbox = document.createElement("div");
    lightbox.className = "lightbox-overlay";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML =
      '<figure class="lightbox-figure" role="dialog" aria-modal="true" aria-label="Enlarged image">' +
      '  <button class="lightbox-close" aria-label="Close enlarged image">&#10005;</button>' +
      '  <img src="" alt="">' +
      '  <figcaption class="lightbox-caption"></figcaption>' +
      "</figure>";
    document.body.appendChild(lightbox);

    var lbImg = lightbox.querySelector("img");
    var lbCap = lightbox.querySelector(".lightbox-caption");

    function openLightbox(img) {
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || "";
      lbImg.classList.toggle("screenshot-clip", !!img.closest(".screenshot"));
      lbCap.textContent = img.alt || "";
      lbCap.style.display = img.alt ? "" : "none";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-locked");
    }
    function closeLightbox() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-locked");
    }

    // Content images only (pages' sections), never nav/footer logos
    document.querySelectorAll("section img").forEach(function (img) {
      if (img.closest(".site-header") || img.closest(".site-footer")) return;
      img.classList.add("js-zoom");
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", "Enlarge image");
      img.addEventListener("click", function () { openLightbox(img); });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(img); }
      });
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
    });

    // AJAX submit so the visitor stays on the page; falls back to a
    // regular POST if fetch fails.
    var modalForm = overlay.querySelector(".modal-form");
    var nativeFallback = false;
    modalForm.addEventListener("submit", function (e) {
      if (nativeFallback) return; // let the browser POST normally
      e.preventDefault();
      var btn = modalForm.querySelector("button[type=submit]");
      btn.disabled = true;
      btn.textContent = "Sending…";
      var data = new FormData(modalForm);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            modalForm.hidden = true;
            overlay.querySelector(".modal-success").hidden = false;
          } else {
            throw new Error(res.message || "Submission failed");
          }
        })
        .catch(function () {
          // graceful fallback: submit the old-fashioned way
          nativeFallback = true;
          modalForm.submit();
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = "Submit form";
        });
    });
  });
})();
