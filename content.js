// Meet Record Reminder
// Waits until you are actually in a call (the "Leave call" button exists),
// then shows a full-screen reminder once per meeting.

(() => {
  const MEETING_PATH = /^\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/i;
  const shown = new Set();

  function inCall() {
    if (document.querySelector('[aria-label*="Leave call" i], [data-tooltip*="Leave call" i]')) {
      return true;
    }
    // Fallback for non-English UIs: the hang-up button uses the "call_end" icon.
    return [...document.querySelectorAll('button i, button span')].some(
      (el) => el.textContent.trim() === 'call_end'
    );
  }

  function showReminder(code) {
    shown.add(code);

    const overlay = document.createElement('div');
    overlay.id = 'mrr-overlay';
    // Built with DOM methods, not innerHTML: Meet enforces Trusted Types.
    const el = (tag, props = {}, ...children) => {
      const node = Object.assign(document.createElement(tag), props);
      node.append(...children);
      return node;
    };

    overlay.append(
      el('div', { className: 'mrr-card', role: 'alertdialog' },
        el('div', { className: 'mrr-icon', textContent: '●' }),
        el('h1', { textContent: 'Are you recording this call?' }),
        el('p', {},
          'Start ', el('b', { textContent: 'Take notes with Gemini' }),
          ' or ', el('b', { textContent: 'Recording' }), ' now, before you forget.'),
        el('div', { className: 'mrr-actions' },
          el('button', { className: 'mrr-primary', textContent: 'Notes are on' }),
          el('button', { className: 'mrr-secondary', textContent: 'Not needed' })
        )
      )
    );
    overlay.querySelectorAll('button').forEach((b) => (b.dataset.action = 'close'));

    overlay.addEventListener('click', (e) => {
      if (e.target.closest('[data-action]')) overlay.remove();
    });

    document.body.appendChild(overlay);
  }

  function check() {
    const path = location.pathname;
    if (!MEETING_PATH.test(path) || shown.has(path)) return;
    if (inCall()) showReminder(path);
  }

  setInterval(check, 1000);
})();
