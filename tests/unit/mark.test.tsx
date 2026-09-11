import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { Mark, Rosette, Wordmark, markHeight, bloomGeometry, MARK_COMPACT_BELOW } from "../../src/components/brand/Mark";
import { Arrow } from "../../src/components/ui/Arrow";

const attr = (html: string, name: string) => html.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const count = (html: string, s: string) => html.split(s).length - 1;

test("seven petals from 24px up — five ink, two brass", () => {
  const g = bloomGeometry(MARK_COMPACT_BELOW);
  assert.equal(g.ink.length, 5);
  assert.equal(g.accent.length, 2);
  const html = renderToStaticMarkup(<Mark size={40} />);
  assert.equal(count(html, "<path"), 7);
  assert.match(html, /class="mark-accent"/);
});

test("below 24px, five petals in one colour on a tighter box", () => {
  const g = bloomGeometry(MARK_COMPACT_BELOW - 1);
  assert.equal(g.ink.length, 5);
  assert.equal(g.accent.length, 0);
  const html = renderToStaticMarkup(<Mark size={16} />);
  assert.equal(count(html, "<path"), 5);
  assert.doesNotMatch(html, /mark-accent/);
  assert.equal(attr(html, "viewBox"), "26 54 148 100");
});

test("width, height and viewBox always agree — the mark cannot be stretched", () => {
  for (let w = 12; w <= 240; w++) {
    const [, , vw, vh] = bloomGeometry(w).box;
    const h = markHeight(w);
    assert.ok(Math.abs(h - (w * vh) / vw) <= 0.5, `width ${w}: height ${h}`);
    const html = renderToStaticMarkup(<Mark size={w} />);
    assert.equal(attr(html, "width"), String(w));
    assert.equal(attr(html, "height"), String(h));
  }
});

test("decorative by default; named when it stands alone", () => {
  const plain = renderToStaticMarkup(<Mark />);
  assert.equal(attr(plain, "aria-hidden"), "true");
  assert.equal(attr(plain, "role"), undefined);

  const named = renderToStaticMarkup(<Mark label="Tat tvam asi" />);
  assert.equal(attr(named, "role"), "img");
  assert.equal(attr(named, "aria-label"), "Tat tvam asi");
  assert.equal(attr(named, "aria-hidden"), undefined);
});

test("the opening animation is opt-in", () => {
  assert.doesNotMatch(renderToStaticMarkup(<Mark />), /mark-bloom/);
  assert.match(renderToStaticMarkup(<Mark animated />), /class="mark mark-bloom"/);
});

test("each rosette's mask id is its own, so two on a page do not share one", () => {
  const html = renderToStaticMarkup(
    <>
      <Rosette id="a" />
      <Rosette id="b" />
    </>
  );
  assert.match(html, /id="rosette-hole-a"/);
  assert.match(html, /id="rosette-hole-b"/);
  assert.match(html, /mask="url\(#rosette-hole-a\)"/);
  assert.equal(count(html, 'aria-hidden="true"'), 2);
});

test("the lockup pairs the mark with the name and its script class", () => {
  const html = renderToStaticMarkup(<Wordmark name="ತತ್ ತ್ವಮ್ ಅಸಿ" scriptClass="kannada" />);
  assert.match(html, /class="lockup"/);
  assert.match(html, /class="lockup-text kannada">ತತ್ ತ್ವಮ್ ಅಸಿ</);
});

test("arrows are drawn at 1em, hidden from assistive tech, and point where asked", () => {
  for (const dir of ["right", "left", "up-right"] as const) {
    const html = renderToStaticMarkup(<Arrow dir={dir} />);
    assert.equal(attr(html, "width"), "1em");
    assert.equal(attr(html, "aria-hidden"), "true");
    assert.match(html, new RegExp(`arrow-${dir}`));
  }
});
