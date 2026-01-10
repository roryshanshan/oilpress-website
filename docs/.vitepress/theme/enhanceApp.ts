export default {
  enhanceApp() {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', function (e) {
        const target = e.target as HTMLElement;
        const link = target.closest('.whatsapp-conversion') as HTMLAnchorElement | null;

        if (link && (window as any).gtag) {
          const pos = link.dataset.position || 'unknown';

          ;(window as any).gtag('event', 'conversion', {
            send_to: 'AW-17559313965/MRsKCJqdy9sbEK2897RB',
            value: 10.0,
            currency: 'CNY',
            event_label: pos,
            transport_type: 'beacon'
          });
        }
      });
    }
  }
};
