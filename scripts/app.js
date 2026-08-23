document.addEventListener('DOMContentLoaded', function () {

    // ── Section content ───────────────────────────────────────────────────────
    // Each section's markup lives in its own file under sections/ so it can be
    // edited independently of this router/behavior script.

    const sections = {

        about: {
            file: 'sections/about.html',
        },

        projects: {
            file: 'sections/projects.html',
        },

        // ── Experience ────────────────────────────────────────────────────────
        experience: {
            file: 'sections/experience.html',

            init() {
                const svg = document.getElementById('movement');
                if (!svg) return;

                let running = true;
                this._stop = () => { running = false; };

                const NS = 'http://www.w3.org/2000/svg';
                const $ = (tag, attrs = {}) => {
                    const el = document.createElementNS(NS, tag);
                    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
                    return el;
                };

                /* --- defs: clip path for 8 o'clock complication window ---- */
                const defs = $('defs');
                defs.innerHTML = '<clipPath id="compClip"><circle cx="127" cy="305" r="68"/></clipPath>';
                svg.appendChild(defs);

                /* --- main plate + minute track ----------------------------- */
                svg.appendChild($('circle', { cx: 240, cy: 240, r: 214, fill: 'none', stroke: 'rgba(28,26,20,.18)', 'stroke-width': 1 }));
                const track = $('g', { stroke: 'rgba(28,26,20,.3)', 'stroke-width': .8 });
                for (let i = 0; i < 60; i++) {
                    const a = i / 60 * Math.PI * 2, len = i % 5 === 0 ? 10 : 5, r1 = 214 - 4, r0 = r1 - len;
                    track.appendChild($('line', {
                        x1: 240 + r0 * Math.cos(a), y1: 240 + r0 * Math.sin(a),
                        x2: 240 + r1 * Math.cos(a), y2: 240 + r1 * Math.sin(a)
                    }));
                }
                svg.appendChild(track);

                /* --- gear geometry ---------------------------------------- */
                function gearPath(teeth, p, depth = 7, innerR = null) {
                    const rOut = p + depth / 2, rRoot = p - depth / 2, step = Math.PI * 2 / teeth;
                    let d = '';
                    for (let i = 0; i < teeth; i++) {
                        const a = i * step;
                        const pts = [[rRoot, a - .32 * step], [rOut, a - .13 * step], [rOut, a + .13 * step], [rRoot, a + .32 * step]];
                        pts.forEach(([r, ang], j) => {
                            const x = (r * Math.cos(ang)).toFixed(2), y = (r * Math.sin(ang)).toFixed(2);
                            d += (i === 0 && j === 0 ? `M${x},${y}` : `L${x},${y}`);
                        });
                    }
                    d += 'Z';
                    if (innerR) d += ` M${innerR},0 A${innerR},${innerR} 0 1 0 ${-innerR},0 A${innerR},${innerR} 0 1 0 ${innerR},0 Z`;
                    return d;
                }

                function makeWheel({ teeth, p, fill = '#1c1a14', spokes = 5 }) {
                    const g = $('g');
                    const rot = $('g');
                    // Scale depth and hub proportionally so small pinions look right
                    const depth = Math.max(4, p * 0.18);
                    const rim   = p - depth / 2 - Math.max(3.5, p * 0.12);
                    rot.appendChild($('path', { d: gearPath(teeth, p, depth, rim > 1 ? rim : null), 'fill-rule': 'evenodd', fill, stroke: 'rgba(249,245,236,.45)', 'stroke-width': .5 }));
                    if (rim > 2) {
                        for (let i = 0; i < spokes; i++) {
                            const s = $('rect', { x: -p * 0.045, y: 0, width: p * 0.09, height: rim + 1, rx: p * 0.04, fill });
                            s.setAttribute('transform', `rotate(${i * 360 / spokes})`);
                            rot.appendChild(s);
                        }
                    }
                    rot.appendChild($('circle', { r: Math.max(3.5, p * 0.12), fill }));
                    g.appendChild(rot);
                    g.appendChild($('circle', { r: 2, fill: '#f9f5ec', stroke: '#1c1a14', 'stroke-width': .8 }));
                    return { g, rot, teeth };
                }

                /* --- complication group — clipped to 8 o'clock window ----- */
                const compGroup = $('g', { 'clip-path': 'url(#compClip)' });
                const wheels = [];
                function addWheel(spec, from = null, angleDeg = 0) {
                    const w = makeWheel(spec);
                    if (from) {
                        const a = angleDeg * Math.PI / 180, d = from.p + spec.p;
                        spec.cx = from.cx + d * Math.cos(a);
                        spec.cy = from.cy + d * Math.sin(a);
                    }
                    w.p = spec.p; w.cx = spec.cx; w.cy = spec.cy;
                    w.g.setAttribute('transform', `translate(${w.cx},${w.cy})`);
                    compGroup.appendChild(w.g);
                    wheels.push(w);
                    return w;
                }

                // Scaled ~0.38× to fit 70px complication circle at (127, 305)
                //instantiate watch movement from 3 wheels: barrel, center, third
                const barrel = addWheel({ teeth: 52, p: 36, cx: 110, cy: 318, spokes: 6 });
                const center = addWheel({ teeth: 26, p: 20, fill: '#6b6355', spokes: 4 }, barrel, -34);
                const third  = addWheel({ teeth: 14, p: 11, spokes: 3 }, center, 52);

                center.ratio = -barrel.teeth / center.teeth;
                third.ratio  = -center.teeth / third.teeth * center.ratio;
                barrel.ratio = 1;

                /* --- balance wheel (inside complication) ------------------- */
                const bal = $('g', { transform: 'translate(152,262)' });
                let spiral = 'M0,0 ';
                for (let t = 0; t <= 5 * Math.PI * 2; t += 0.15) {
                    const r = 0.4 + t * 0.33;
                    spiral += `L${(r * Math.cos(t)).toFixed(2)},${(r * Math.sin(t)).toFixed(2)} `;
                }
                const balRot = $('g');
                balRot.appendChild($('path', { d: spiral, fill: 'none', stroke: 'rgba(28,26,20,.45)', 'stroke-width': .8 }));
                balRot.appendChild($('circle', { r: 14, fill: 'none', stroke: '#1c1a14', 'stroke-width': 1.5 }));
                balRot.appendChild($('rect', { x: -14, y: -2, width: 28, height: 4, rx: 2, fill: '#1c1a14' }));
                bal.appendChild(balRot);
                bal.appendChild($('circle', { r: 2, fill: '#f9f5ec', stroke: '#1c1a14', 'stroke-width': .8 }));
                compGroup.appendChild(bal);

                // Flush complication content then draw the bezel ring on top
                svg.appendChild(compGroup);
                svg.appendChild($('circle', { cx: 127, cy: 305, r: 70, fill: 'none', stroke: '#1c1a14', 'stroke-width': 1.5 }));

                /* --- date window (6 o'clock) ------------------------------- */
                const dateG = $('g', { transform: 'translate(240,395)' });
                dateG.appendChild($('rect', { x: -34, y: -15, width: 68, height: 30, rx: 2, fill: '#f9f5ec', stroke: '#1c1a14', 'stroke-width': 1 }));
                const dateText = $('text', { 'text-anchor': 'middle', y: 6, fill: '#1c1a14', 'font-family': "'Garamond', 'Times New Roman', serif", 'font-size': 14, 'letter-spacing': 2 });
                dateText.textContent = '2019';
                dateG.appendChild(dateText);
                svg.appendChild(dateG);

                /* --- plate screws (1, 5, 7, 11 o'clock positions) --------- */
                [[332, 80], [332, 400], [148, 400], [148, 80]].forEach(([x, y]) => {
                    const s = $('g', { transform: `translate(${x},${y})` });
                    s.appendChild($('circle', { r: 4.5, fill: '#f9f5ec', stroke: '#1c1a14', 'stroke-width': .8 }));
                    s.appendChild($('line', { x1: -2.8, y1: 0, x2: 2.8, y2: 0, stroke: '#1c1a14', 'stroke-width': 1, transform: `rotate(${(x * y) % 180})` }));
                    svg.appendChild(s);
                });

                /* --- clock hands (scroll-driven, 5 s per 1% of page) ----- */
                // 1% scroll → 5 s → (5/60)×360° = 30° minute hand → 2.5° hour hand (12:1)
                const handsG     = $('g', { transform: 'translate(240,240)' });
                const hourHandRot = $('g');
                hourHandRot.appendChild($('path', { d: 'M0,-130 L5.5,10 L0,26 L-5.5,10 Z', fill: '#1c1a14' }));
                const minHandRot  = $('g');
                minHandRot.appendChild($('path',  { d: 'M0,-188 L3,10 L0,24 L-3,10 Z',    fill: '#1c1a14' }));
                handsG.appendChild(hourHandRot);
                handsG.appendChild(minHandRot);
                handsG.appendChild($('circle', { r: 7,   fill: '#1c1a14' }));
                handsG.appendChild($('circle', { r: 2.5, fill: '#f9f5ec' }));
                svg.appendChild(handsG);

                /* --- scroll-driven animation ------------------------------ */
                const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
                const TURNS = 2.5;
                let target = 0, current = 0;

                const scrollEl = document.getElementById('content');
                this._scrollEl = scrollEl;
                function onScroll() {
                    const max = scrollEl.scrollHeight - scrollEl.clientHeight;
                    target = max > 0 ? scrollEl.scrollTop / max : 0;
                }
                scrollEl.addEventListener('scroll', onScroll, { passive: true });
                this._scrollHandler = onScroll;
                onScroll();

                function frame() {
                    if (!running) return;
                    current += (target - current) * (reduced ? 1 : 0.085);
                    const deg = current * 360 * TURNS;
                    for (const w of wheels)
                        w.rot.setAttribute('transform', `rotate(${(deg * w.ratio).toFixed(3)})`);
                    balRot.setAttribute('transform', `rotate(${(Math.sin(current * 46) * 28).toFixed(2)})`);
                    // Hands follow scroll: current 0→1, minute sweeps 600°, hour 50° (12:1)
                    minHandRot.setAttribute('transform',  `rotate(${(current * 600).toFixed(2)})`);
                    hourHandRot.setAttribute('transform', `rotate(${(current * 50).toFixed(2)})`);
                    requestAnimationFrame(frame);
                }
                requestAnimationFrame(frame);

                /* --- intersection observer: highlight active entry -------- */
                const entries = document.querySelectorAll('.entry');
                if (entries.length > 0) {
                    entries[0].classList.add('active');
                    dateText.textContent = entries[0].dataset.year;
                }
                const io = new IntersectionObserver(hits => {
                    for (const h of hits) {
                        if (h.isIntersecting) {
                            entries.forEach(e => e.classList.toggle('active', e === h.target));
                            dateText.textContent = h.target.dataset.year;
                        }
                    }
                }, { rootMargin: '-45% 0px -45% 0px', root: scrollEl });
                this._io = io;
                entries.forEach(e => io.observe(e));
            },

            cleanup() {
                if (this._stop)          { this._stop(); this._stop = null; }
                if (this._scrollHandler) {
                    if (this._scrollEl) this._scrollEl.removeEventListener('scroll', this._scrollHandler);
                    this._scrollHandler = null;
                    this._scrollEl = null;
                }
                if (this._io)            { this._io.disconnect(); this._io = null; }
            },
        },

        publications: {
            file: 'sections/publications.html',
        },

    };

    // ── Router ────────────────────────────────────────────────────────────────

    const textElement = document.getElementById('card-text');
    const navLinks    = document.querySelectorAll('.nav-link');
    const htmlCache   = {};

    async function loadSectionHTML(section) {
        if (!(section in htmlCache)) {
            const response = await fetch(sections[section].file);
            htmlCache[section] = await response.text();
        }
        return htmlCache[section];
    }

    async function updateContent(section) {
        // Tear down the outgoing section
        for (const [key, sec] of Object.entries(sections)) {
            if (key !== section && sec.cleanup) sec.cleanup();
        }
        textElement.innerHTML = await loadSectionHTML(section);
        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.dataset.section === section);
        });
        if (sections[section].init) sections[section].init();
        if (window.setCurrentPage) {
            window.setCurrentPage(section);
        }
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            updateContent(this.dataset.section);
        });
    });

    updateContent('about');
});