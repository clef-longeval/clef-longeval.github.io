// ...existing code...
// lightweight include loader + current-link highlighter
(async function () {
    async function loadInclude(el, url) {
        try {
            const res = await fetch(url, { cache: 'no-cache' });
            if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
            el.innerHTML = await res.text();
        } catch (err) {
            console.error('Include load failed:', url, err);
        }
    }

    const els = document.querySelectorAll('[data-include]');
    for (const el of els) {
        await loadInclude(el, el.dataset.include);
    }

    // highlight current nav link (matches pathname)
    const path = location.pathname.replace(/\/$/, '');
    document.querySelectorAll('a').forEach(a => {
        try {
            const href = new URL(a.href);
            const p = href.pathname.replace(/\/$/, '');
            if (p === path) a.classList.add('current');
        } catch (e) { /* ignore non-absolute hrefs */ }
    });
})();