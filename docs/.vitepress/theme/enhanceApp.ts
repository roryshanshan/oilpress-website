export default {
  enhanceApp() {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', function (e) {
        const target = e.target as HTMLElement;
        const link = target.closest('.whatsapp-conversion') as HTMLAnchorElement | null;

        if (!link) return;

        const pos = link.dataset.position || 'unknown';
        const href = link.href;
        const isExternal = typeof href === 'string' && /^(https?:)?\/\//i.test(href);

        const sendGtag = () => {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
              send_to: 'AW-17559313965/MRsKCJqdy9sbEK2897RB',
              value: 10.0,
              currency: 'CNY',
              event_label: pos,
              transport_type: 'beacon'
            });
            return true;
          }
          return false;
        };

        const sendDataLayer = () => {
          if ((window as any).dataLayer && Array.isArray((window as any).dataLayer)) {
            (window as any).dataLayer.push({
              event: 'whatsapp_conversion',
              send_to: 'AW-17559313965/MRsKCJqdy9sbEK2897RB',
              value: 10.0,
              currency: 'CNY',
              event_label: pos
            });
            return true;
          }
          return false;
        };

        // If the link will navigate away (external), delay navigation slightly to allow analytics to send
        if (href && isExternal) {
          e.preventDefault();

          const handled = sendGtag() || sendDataLayer();

          // If nothing handled it, try a best-effort sendBeacon to Google Ads endpoint
          if (!handled && typeof navigator !== 'undefined' && (navigator as any).sendBeacon) {
            try {
              const beaconUrl = 'https://www.googleadservices.com/pagead/conversion/17559313965/?label=MRsKCJqdy9sbEK2897RB&value=10.0&currency_code=CNY';
              (navigator as any).sendBeacon(beaconUrl);
            } catch (err) {
              // ignore
            }
          }

          // Respect target attribute (e.g., _blank)
          const targetAttr = link.getAttribute('target');
          const navigate = () => {
            if (targetAttr === '_blank') {
              window.open(href, '_blank');
            } else {
              window.location.href = href;
            }
          };

          // Short delay for mobile to allow beacon/gtag to queue; small enough to avoid UX issues
          setTimeout(navigate, 220);
        } else {
          // Same-origin or no href: try to send without blocking navigation
          sendGtag() || sendDataLayer();
        }
      });
    }
  }
};
