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
        <li><a href="index.html">Home</a></li>
        <li><a href="ventures.html">Ventures</a></li>
        <li><a href="about-us.html">About us</a></li>
      </ul>
      <div class="nav-cta">
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
          <p>A digital innovation studio. We build and operate our own software, service and media companies.</p>
          <p style="margin-top:14px;"><a href="contact.html">Contact us &rarr;</a></p>
        </div>
        <div>
          <h4>Studio</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="ventures.html">Ventures</a></li>
            <li><a href="about-us.html">About us</a></li>
            <li><a href="how-we-build.html">How we build</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="https://agentledgtm.com/go-to-market/agent-led-growth-gtm?utm_source=mgio-footer" target="_blank" rel="noopener">AgentLedGTM: What is agent-led growth</a></li>
            <li><a href="https://agentledgtm.com/go-to-market/gtm-motion-approach/agent-led-growth/ai-search-visibility-audit-50-checks-in-four-phases?utm_source=mgio-footer" target="_blank" rel="noopener">AgentLedGTM: Get us cited by ChatGPT. What to do next</a></li>
            <li><a href="https://socient.net/insights/nonprofit-ai-visibility-seo-geo?utm_source=mgio-footer" target="_blank" rel="noopener">Socient: When someone asks AI where to get help, does your name come up?</a></li>
            <li><a href="https://socient.net/insights/salesforce-nonprofit-trends-report-2025?utm_source=mgio-footer" target="_blank" rel="noopener">Socient: Nonprofit Trends 2025, an interactive breakdown</a></li>
            <li><a href="https://directcarehq.com/insights/how-to-open-an-icf-dd-n-in-california?utm_source=mgio-footer" target="_blank" rel="noopener">DirectCare: Opening an ICF/DD-N starts with a phone call</a></li>
            <li><a href="https://directcarehq.com/insights/icf-dd-n-individual-program-plans?utm_source=mgio-footer" target="_blank" rel="noopener">DirectCare: A surveyor does not read your IPP. They test it</a></li>
            <li><a href="https://orbytt.ai/seven-delegation-mistakes-stealing-your-time-with-vas/?utm_source=mgio-footer" target="_blank" rel="noopener">Orbytt: Seven delegation mistakes stealing your time with VAs</a></li>
            <li><a href="https://orbytt.ai/academy/ai-prompt-engineering/?utm_source=mgio-footer" target="_blank" rel="noopener">Orbytt Academy: Learn how to prompt AI</a></li>
            <li><a href="https://aemfix.com/what-is-aeo.html?utm_source=mgio-footer" target="_blank" rel="noopener">AEMfix: What is answer engine optimization</a></li>
            <li><a href="https://aemfix.com/aeo-vs-seo.html?utm_source=mgio-footer" target="_blank" rel="noopener">AEMfix: AEO compared to SEO</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="terms-of-service.html">Terms of service</a></li>
            <li><a href="privacy-policy.html">Privacy policy</a></li>
            <li><a href="https://marketgrowth.io/brand/MarketGrowthStyleGuide.pdf" target="_blank" rel="noopener">Brand guidelines</a></li>
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
