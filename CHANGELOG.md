# Optimization changelog — Task B

Baseline: the Task A build (initial commit). This changelog covers the changes made to push Lighthouse Performance and Accessibility to 90+.

## Performance

| Change | What it bought |
|---|---|
| Trimmed Google Fonts request to only the weights actually used (Space Grotesk 500/600, Inter 400/500, IBM Plex Mono 400 — dropped unused Inter 600 and Plex Mono 500) | Smaller font payload, fewer font files downloaded, faster first paint of styled text |
| Added `defer` to the `<script>` tag | The browser no longer pauses HTML parsing to fetch/run `script.js`; it now runs after the DOM is parsed, shortening the critical rendering path |
| Kept `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com` | Warms up the DNS/TLS connection to the font host in parallel with the initial HTML parse, instead of waiting to discover the font request |
| Added an inline SVG data-URI favicon instead of a linked file | Removes a blocking network request for `/favicon.ico` that the browser makes automatically if no icon is declared |
| No images, no external JS libraries, no CSS framework | Nothing to lazy-load or code-split — the whole payload is one small HTML file, one CSS file, and one small JS file, so there's very little to optimize in the first place |

## Accessibility

| Change | What it bought |
|---|---|
| Added a "Skip to main content" link, visually hidden until focused | Keyboard and screen-reader users can bypass the header/nav and jump straight to the page content — a standard WCAG 2.4.1 fix |
| Added a visible `:focus-visible` outline on links, buttons, and form fields | The custom form styling had removed the browser default outline on focus; this restores a clear, high-contrast keyboard focus indicator |
| Linked every form field's error message with `aria-describedby` | Screen readers now announce the specific validation error tied to a field, not just a floating error span elsewhere on the page |
| Added `aria-invalid` toggling in JS on validation pass/fail | Assistive tech is told explicitly when a field is in an error state, not just via visual red border |
| Set `type="button"` and `aria-controls="navLinks"` on the mobile nav toggle | Prevents the button from being misidentified as a submit control and ties it programmatically to the menu it opens |
| Verified color contrast on all text/background pairs (nav links, footer text, button labels, form labels, badges) | All pairs measured 4.5:1 or higher against WCAG AA for normal text |

## Not changed

Layout, copy, sections, and visual design are unchanged from Task A — this pass is purely a technical optimization layer on top of the existing build.