/* MarketGrowth.io - shared layout components.
   The global header and footer live here as single-source components;
   each page carries only <div data-component="site-header|site-footer"></div>
   placeholders. Loaded before main.js so bindings find the elements. */
(function () {
  var HEADER = `<header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a class="nav-logo" href="index.html" aria-label="MarketGrowth home">
        <img src="https://marketgrowth.io/images/logo-white.svg" alt="MarketGrowth">
      </a>
      <ul class="nav-links">
        <li class="dropdown">
          <a href="#" aria-haspopup="true">Solutions</a>
          <ul class="dropdown-menu">
            <li><a href="digital-garden.html">Microsites &amp; Community Platform</a></li>
            <li><a href="ai-automation.html">AI Marketing Automation</a></li>
            <li><a href="aeo-geo-seo.html">AEO / GEO / SEO Services</a></li>
            <li><a href="analytics-reporting.html">Analytics &amp; Reporting</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" aria-haspopup="true">We Work With</a>
          <ul class="dropdown-menu">
            <li><a href="for-founders.html">For Founders</a></li>
            <li><a href="for-growing-teams.html">For GTM Teams</a></li>
            <li><a href="for-nonprofits.html">For Nonprofits &amp; Social Enterprise</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" aria-haspopup="true">Company</a>
          <ul class="dropdown-menu">
            <li><a href="our-team.html">Our Team</a></li>
            <li><a href="labs.html">Labs</a></li>
            <li><a href="jobs.html">Jobs</a></li>
          </ul>
        </li>
        <li class="nav-mobile-only"><a href="https://agentledgtm.com?utm_source=mgio-nav" target="_blank" rel="noopener">Agent-Led Growth &#8599;</a></li>
      </ul>
      <div class="nav-cta">
        <a class="nav-external" href="https://agentledgtm.com?utm_source=mgio-nav" target="_blank" rel="noopener">Agent-Led Growth &#8599;</a>
        <button class="theme-toggle" aria-label="Toggle color theme"><span class="icon-sun">&#9728;</span><span class="icon-moon">&#9790;</span></button>
        <a class="btn btn-primary" href="contact.html">Contact us</a>
        <button class="nav-burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </nav>
  </header>`;

  var FOOTER = `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img class="footer-logo" src="https://marketgrowth.io/images/logo-white.svg" alt="MarketGrowth">
          <p>AI Automation and digital experience agency for founders and GTM teams.</p>
          <p style="margin-top:14px;"><a href="contact.html">Contact us &rarr;</a></p>
        </div>
        <div>
          <h4>Solutions &amp; Pricing</h4>
          <ul>
            <li><a href="digital-garden.html">Microsites and Community Platform</a></li>
            <li><a href="ai-automation.html">AI Marketing Automation</a></li>
            <li><a href="aeo-geo-seo.html">AEO / GEO / SEO Services</a></li>
            <li><a href="analytics-reporting.html">Analytics and Reporting</a></li>
            <li><a href="for-founders.html">For Founders</a></li>
            <li><a href="for-growing-teams.html">For GTM Teams</a></li>
            <li><a href="for-nonprofits.html">For Nonprofits &amp; Social Enterprise</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="our-team.html">Our Team</a></li>
            <li><a href="labs.html">MarketGrowth Labs</a></li>
            <li><a href="jobs.html">Jobs</a></li>
          </ul>
          <h4 style="margin-top:22px;">Resources</h4>
          <ul>
            <li><a href="https://agentledgtm.com/go-to-market/gtm-motion-approach/community-led-growth/why-building-your-personal-brand-matters-now-more-than-ever" target="_blank" rel="noopener">Article: Why building your personal brand matters more than ever</a></li>
            <li><a href="https://agentledgtm.com/go-to-market/gtm-motion-approach/content-marketing/simplifying-your-go-to-market-strategy-a-guide-to-smarter-marketing" target="_blank" rel="noopener">eBook: GTM for Founders Simplified</a></li>
            <li><a href="https://agentledgtm.com/resources" target="_blank" rel="noopener">Hub: Agentic GTM Resources</a></li>
            <li><a href="https://agentledgtm.com/go-to-market/gtm-motion-approach/how-to-use-7-11-4-framework-to-build-trust-and-drive-growth-for-your-business" target="_blank" rel="noopener">Article: Use 7-11-4 framework to build trust and authority</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="terms-of-service.html">Terms of service</a></li>
            <li><a href="privacy-policy.html">Privacy policy</a></li>
            <li><a href="https://marketgrowth.io/brand/MarketGrowthStyleGuide.pdf" target="_blank" rel="noopener">Brand Guidelines</a></li>
            <li><a href="license.html">License terms</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span class="js-year">2026</span> MarketGrowth CX LLC. All rights reserved.</span>
        <a href="https://www.trustpilot.com/review/marketgrowth.io" target="_blank" rel="noopener">Review us on Trustpilot &rarr;</a>
      </div>
    </div>
  </footer>`;

  function mount(name, html) {
    var el = document.querySelector('[data-component="' + name + '"]');
    if (el) el.outerHTML = html;
  }
  mount('site-header', HEADER);
  mount('site-footer', FOOTER);
})();
