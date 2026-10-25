import type { ReactNode } from "react";

/**
 * Illustrations for the rites, drawn for this site.
 *
 * Two searches for photographs of these rites failed — documentary
 * snapshots of strangers' ceremonies, and museum collections that hold
 * deities rather than domestic ritual — and the owner removed every
 * photograph that came out of them. A rite is better shown by the thing
 * that defines it than by somebody's family: the three-stranded thread
 * and the staff, seven footprints round a fire, the three altars of the
 * agnihotra, round, square and half-moon.
 *
 * So each rite and each group has a drawing here: flat shapes on the
 * site's own tokens, no text, no gradients, nothing that pretends to
 * be a photograph. Every page that shows one credits it as an
 * illustration made for this site.
 */

const INK = "var(--ink-2)";
const GOLD = "var(--gold-bright)";
const MARIGOLD = "var(--marigold)";
const SAFFRON = "var(--saffron-2)";
const SACRED = "var(--sacred)";
const PAPER = "var(--card)";
const SOFT = "var(--marigold-soft)";
const LINE = { stroke: INK, strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

// ── small shared shapes ───────────────────────────────────────

function Flame({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0,-46 C16,-24 22,-6 0,12 C-22,-6 -16,-24 0,-46 Z" fill={SAFFRON} />
      <path d="M0,-28 C8,-14 11,-4 0,7 C-11,-4 -8,-14 0,-28 Z" fill={MARIGOLD} />
    </g>
  );
}

function Lamp({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <Flame x={18} y={-14} s={0.55} />
      <path d="M-40,0 C-34,22 30,24 40,-2 L26,-6 C16,4 -20,6 -28,-6 Z" fill={GOLD} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M-30,-4 C-18,4 14,4 26,-6" {...LINE} strokeWidth={2} />
    </g>
  );
}

function Foot({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} fill={SACRED}>
      <ellipse cx={0} cy={6} rx={7} ry={12} />
      <circle cx={-5} cy={-10} r={2.4} />
      <circle cx={-1} cy={-12} r={2.6} />
      <circle cx={3.5} cy={-11} r={2.4} />
      <circle cx={7} cy={-8} r={2} />
    </g>
  );
}

function Leaf({ x, y, r = 0, s = 1, fill = "var(--ink-3)" }: { x: number; y: number; r?: number; s?: number; fill?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
      d="M0,0 C10,-14 30,-14 40,0 C30,14 10,14 0,0 Z"
      fill={fill}
      opacity={0.85}
    />
  );
}

function Ground({ y = 238 }: { y?: number }) {
  return <line x1={40} x2={360} y1={y} y2={y} stroke="var(--line-2)" strokeWidth={3} strokeLinecap="round" />;
}

function Halo({ x = 200, y = 130, r = 92 }: { x?: number; y?: number; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={SOFT} />;
}

// ── the drawings ─────────────────────────────────────────────

const ART: Record<string, ReactNode> = {
  // The groups
  samskara: (
    <>
      <Halo y={150} r={100} />
      <path d="M48,214 Q200,40 352,214" {...LINE} stroke="var(--line-2)" strokeWidth={4} />
      {Array.from({ length: 16 }, (_, i) => {
        const t = i / 15;
        const x = 48 + 304 * t;
        const y = (1 - t) * (1 - t) * 214 + 2 * (1 - t) * t * 40 + t * t * 214;
        const kept = [2, 3, 4, 6, 7, 8, 9, 13, 15].includes(i);
        return <circle key={i} cx={x} cy={y} r={kept ? 8 : 6} fill={kept ? MARIGOLD : PAPER} stroke={INK} strokeWidth={2.5} />;
      })}
    </>
  ),
  nitya: (
    <>
      <path d="M60,220 Q200,20 340,220" fill="none" stroke="var(--line-2)" strokeWidth={3} strokeDasharray="2 10" strokeLinecap="round" />
      <Ground y={220} />
      {[
        [78, 196],
        [200, 72],
        [322, 196],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 1 ? 26 : 20} fill={i === 1 ? MARIGOLD : SAFFRON} />
          {Array.from({ length: 8 }, (_, k) => {
            const a = (k * Math.PI) / 4;
            const r1 = (i === 1 ? 26 : 20) + 8;
            const r2 = r1 + 10;
            return <line key={k} x1={x + r1 * Math.cos(a)} y1={y + r1 * Math.sin(a)} x2={x + r2 * Math.cos(a)} y2={y + r2 * Math.sin(a)} stroke={GOLD} strokeWidth={3} strokeLinecap="round" />;
          })}
        </g>
      ))}
    </>
  ),
  vrata: (
    <>
      <Halo r={96} />
      {[0.25, 0.5, 1, 0.5, 0.25].map((f, i) => {
        const cx = 80 + i * 60;
        return (
          <g key={i}>
            <circle cx={cx} cy={140} r={22} fill={SACRED} opacity={0.18} />
            <circle cx={cx} cy={140} r={22} fill={MARIGOLD} style={{ clipPath: `inset(0 0 0 ${(1 - f) * 100}%)` }} />
            <circle cx={cx} cy={140} r={22} fill="none" stroke={INK} strokeWidth={2.5} />
          </g>
        );
      })}
    </>
  ),
  yajna: (
    <>
      <Halo y={120} />
      <Flame x={200} y={150} s={1.9} />
      <path d="M120,168 H280 L262,196 H138 Z" fill={SACRED} />
      <path d="M138,196 H262 L250,222 H150 Z" fill={GOLD} />
      <path d="M150,222 H250 L242,240 H158 Z" fill={SACRED} />
    </>
  ),
  pitru: (
    <>
      <Halo y={130} r={88} />
      <path d="M70,220 C140,196 260,196 330,220 L330,232 L70,232 Z" fill="var(--ink-3)" opacity={0.55} />
      {[150, 200, 250].map((x) => (
        <circle key={x} cx={x} cy={196} r={20} fill={PAPER} stroke={INK} strokeWidth={2.5} />
      ))}
      {[155, 196, 244, 206, 250].map((x, i) => (
        <circle key={i} cx={x} cy={[192, 190, 198, 202, 188][i]} r={2} fill={INK} />
      ))}
      {/* the crow */}
      <g transform="translate(200 108)">
        <path d="M-34,8 C-30,-22 6,-30 22,-12 L40,-14 L26,-2 C24,20 -10,30 -34,8 Z" fill={INK} />
        <circle cx={14} cy={-14} r={2.6} fill={PAPER} />
        <path d="M-20,22 L-24,40 M-6,24 L-4,40" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      </g>
    </>
  ),
  kshetra: (
    <>
      <Halo y={110} r={84} />
      <path d="M160,180 L170,96 L186,96 L190,70 L210,70 L214,96 L230,96 L240,180 Z" fill={SACRED} />
      <path d="M150,180 H250 V196 H150 Z" fill={GOLD} />
      <circle cx={200} cy={62} r={7} fill={MARIGOLD} />
      <path d="M190,196 V178 Q200,166 210,178 V196" fill={PAPER} />
      {[0, 1, 2, 3].map((i) => (
        <Foot key={i} x={170 - i * 34} y={224 - (i % 2) * 6} r={70} s={0.8} />
      ))}
    </>
  ),

  // Rites of passage
  simantonnayana: (
    <>
      <Halo r={96} />
      {[0, 1].map((side) => (
        <g key={side} transform={`translate(${side ? 250 : 150} 150)`}>
          {[SACRED, MARIGOLD, SAFFRON, GOLD, MARIGOLD].map((c, i) => (
            <ellipse key={i} cx={0} cy={-34 + i * 16} rx={34} ry={10} fill="none" stroke={c} strokeWidth={6} />
          ))}
        </g>
      ))}
      <Leaf x={168} y={226} r={-10} s={0.8} />
      <Leaf x={196} y={222} r={10} s={0.8} />
      <circle cx={200} cy={222} r={7} fill={SAFFRON} />
    </>
  ),
  jatakarma: (
    <>
      <Halo y={140} r={92} />
      <path d="M138,160 C138,120 172,108 200,108 C228,108 262,120 262,160 C262,206 230,226 200,226 C170,226 138,206 138,160 Z" fill={GOLD} stroke={INK} strokeWidth={3} />
      <path d="M168,108 C170,92 230,92 232,108" {...LINE} />
      <path d="M150,150 H250" stroke={PAPER} strokeWidth={3} opacity={0.6} />
      <circle cx={292} cy={96} r={16} fill="none" stroke={MARIGOLD} strokeWidth={7} />
      <path d="M284,122 C278,136 286,146 292,146 C298,146 306,136 300,122 L292,112 Z" fill={SAFFRON} />
    </>
  ),
  namakarana: (
    <>
      <Halo y={120} r={90} />
      <path d="M128,40 L176,132 M272,40 L224,132" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <path d="M120,132 H280 C278,192 244,212 200,212 C156,212 122,192 120,132 Z" fill={MARIGOLD} stroke={INK} strokeWidth={3} />
      <path d="M140,150 C170,166 230,166 260,150" {...LINE} strokeWidth={2.5} />
      {[150, 176, 200, 224, 250].map((x) => (
        <circle key={x} cx={x} cy={186} r={4} fill={SACRED} />
      ))}
      <path d="M200,40 V24" stroke={INK} strokeWidth={3} strokeLinecap="round" />
    </>
  ),
  annaprashana: (
    <>
      <Halo y={140} />
      <ellipse cx={200} cy={170} rx={92} ry={20} fill="var(--line-2)" />
      <path d="M116,150 C120,206 280,206 284,150 Z" fill="var(--paper-3)" stroke={INK} strokeWidth={3} />
      <path d="M130,150 C150,118 250,118 270,150 Z" fill={PAPER} stroke={INK} strokeWidth={2.5} />
      {[164, 188, 212, 236, 176, 224, 200].map((x, i) => (
        <circle key={i} cx={x} cy={[140, 132, 132, 140, 126, 126, 120][i]} r={4} fill="var(--ink-4)" />
      ))}
      <path d="M268,96 L320,52" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <ellipse cx={262} cy={104} rx={16} ry={10} transform="rotate(-40 262 104)" fill="var(--paper-3)" stroke={INK} strokeWidth={2.5} />
    </>
  ),
  chudakarma: (
    <>
      <Halo y={136} r={92} />
      {/* a banana leaf, and the first lock of hair laid on it as an offering */}
      <path d="M70,196 C140,150 270,150 330,190 C270,214 140,218 70,196 Z" fill="var(--ink-3)" opacity={0.6} />
      <path d="M86,194 C160,182 250,180 318,190" {...LINE} stroke="var(--paper-2)" strokeWidth={2} />
      {[0, 6, 12, 18].map((d) => (
        <path key={d} d={`M${150 + d},${186 - d * 0.3} C${165 + d},${130 - d} ${215 + d},${150 - d} ${200 + d * 0.5},${176 - d * 0.4} C${190},${196} ${236 + d},${206} ${252 + d * 0.6},${168 - d * 0.5}`} {...LINE} stroke={INK} strokeWidth={3} />
      ))}
      <circle cx={282} cy={170} r={13} fill={SAFFRON} />
      <circle cx={282} cy={170} r={5.5} fill={MARIGOLD} />
    </>
  ),
  upanayana: (
    <>
      <Halo y={130} r={98} />
      <path d="M120,236 L282,52" stroke={SACRED} strokeWidth={10} strokeLinecap="round" />
      {[0, 7, 14].map((d) => (
        <ellipse key={d} cx={200 + d * 0.3} cy={136} rx={70 - d} ry={92 - d} transform="rotate(-24 200 136)" fill="none" stroke={[GOLD, MARIGOLD, PAPER][d / 7]} strokeWidth={4} />
      ))}
      <ellipse cx={200} cy={136} rx={70} ry={92} transform="rotate(-24 200 136)" fill="none" stroke={INK} strokeWidth={1.5} opacity={0.4} />
    </>
  ),
  vivaha: (
    <>
      <Halo y={124} r={96} />
      <Flame x={200} y={132} s={1.3} />
      <path d="M170,150 H230 L222,166 H178 Z" fill={SACRED} />
      {Array.from({ length: 7 }, (_, i) => (
        <Foot key={i} x={74 + i * 42} y={212 + (i % 2 ? 10 : -4)} r={90} s={0.95} />
      ))}
    </>
  ),
  antyeshti: (
    <>
      <circle cx={200} cy={150} r={48} fill={SAFFRON} opacity={0.55} />
      <rect x={0} y={150} width={400} height={120} fill="var(--paper-2)" />
      {[170, 192, 214].map((y, i) => (
        <path key={y} d={`M${60 + i * 10},${y} Q130,${y - 8} 200,${y} T${340 - i * 10},${y}`} {...LINE} stroke="var(--ink-4)" strokeWidth={2.5} />
      ))}
      <Lamp x={200} y={160} s={0.7} />
    </>
  ),

  // Every day
  sandhyavandana: (
    <>
      <circle cx={276} cy={150} r={44} fill={MARIGOLD} />
      <rect x={0} y={150} width={400} height={120} fill="var(--paper-2)" />
      <Ground y={150} />
      {[176, 200].map((y) => (
        <path key={y} d={`M180,${y} Q240,${y - 6} 340,${y}`} {...LINE} stroke="var(--ink-4)" strokeWidth={2.5} />
      ))}
      <path d="M96,140 C96,118 140,118 140,140 L134,170 H102 Z" fill={GOLD} stroke={INK} strokeWidth={3} />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={150 + i * 22} cy={128 - Math.sin((i / 4) * Math.PI) * 36} r={4.5 - i * 0.4} fill={SACRED} opacity={0.75} />
      ))}
    </>
  ),
  puja: (
    <>
      <Halo y={130} />
      <Lamp x={140} y={200} s={0.9} />
      <g transform="translate(262 120)">
        <path d="M0,-50 V-36" stroke={INK} strokeWidth={4} strokeLinecap="round" />
        <path d="M-30,30 C-30,-10 -20,-36 0,-36 C20,-36 30,-10 30,30 Z" fill={GOLD} stroke={INK} strokeWidth={3} />
        <rect x={-36} y={28} width={72} height={8} rx={4} fill={SACRED} />
        <circle cx={0} cy={46} r={6} fill={INK} />
      </g>
      {[180, 205, 230].map((x, i) => (
        <circle key={x} cx={x} cy={222 - (i % 2) * 6} r={9} fill={i === 1 ? SAFFRON : MARIGOLD} />
      ))}
      <Ground y={238} />
    </>
  ),
  deepa: (
    <>
      <Halo y={124} r={100} />
      <Lamp x={200} y={176} s={1.7} />
      {Array.from({ length: 9 }, (_, i) => (
        <circle key={i} cx={104 + i * 24} cy={232} r={3.4} fill={SACRED} opacity={0.7} />
      ))}
    </>
  ),

  // Days kept
  ekadashi: (
    <>
      <Halo y={120} r={86} />
      <circle cx={200} cy={120} r={62} fill={MARIGOLD} />
      <path d="M200,58 A62,62 0 0,0 200,182 A30,62 0 0,1 200,58 Z" fill={SACRED} opacity={0.32} />
      <circle cx={200} cy={120} r={62} fill="none" stroke={INK} strokeWidth={2.5} />
      {[-1, 0, 1].map((k) => (
        <Leaf key={k} x={186 + k * 30} y={222} r={-90 + k * 30} s={0.9} fill="var(--ink-3)" />
      ))}
    </>
  ),
  pradosha: (
    <>
      <path d="M268,56 A30,30 0 1,0 296,96 A24,24 0 1,1 268,56 Z" fill={MARIGOLD} />
      <path d="M110,206 C110,190 290,190 290,206 C290,222 110,222 110,206 Z" fill={SACRED} />
      <path d="M290,204 L338,200 L336,212 L290,212 Z" fill={SACRED} />
      <path d="M168,198 V140 C168,104 232,104 232,140 V198 Z" fill="var(--ink-3)" stroke={INK} strokeWidth={3} />
      {[150, 160, 170].map((y) => (
        <line key={y} x1={180} x2={220} y1={y} y2={y} stroke={PAPER} strokeWidth={3} strokeLinecap="round" opacity={0.8} />
      ))}
      <circle cx={200} cy={186} r={4} fill={SAFFRON} />
    </>
  ),
  "sankashtahara-chaturthi": (
    <>
      <circle cx={200} cy={116} r={50} fill={MARIGOLD} />
      <path d="M40,170 C110,130 170,150 200,168 C240,140 300,132 360,168 V250 H40 Z" fill="var(--paper-3)" />
      <g transform="translate(200 200)">
        <path d="M-40,22 C-44,-6 -14,-34 0,-44 C14,-34 44,-6 40,22 Z" fill={PAPER} stroke={INK} strokeWidth={3} />
        {[-24, -12, 0, 12, 24].map((x) => (
          <path key={x} d={`M${x},20 Q${x * 0.4},-14 0,-42`} {...LINE} strokeWidth={1.6} />
        ))}
      </g>
    </>
  ),
  chaturmasya: (
    <>
      <g fill="var(--paper-3)" stroke={INK} strokeWidth={2.5}>
        <path d="M90,108 C90,82 124,72 140,90 C150,64 196,62 206,92 C226,82 254,92 252,114 Z" />
        <path d="M190,138 C190,116 220,108 236,124 C246,102 286,104 292,130 C310,124 324,136 320,150 Z" />
      </g>
      {Array.from({ length: 14 }, (_, i) => (
        <line key={i} x1={100 + i * 16} y1={160 + (i % 3) * 8} x2={92 + i * 16} y2={182 + (i % 3) * 8} stroke="var(--ink-4)" strokeWidth={2.5} strokeLinecap="round" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={152 + i * 32} cy={226} r={9} fill={i === 0 ? MARIGOLD : PAPER} stroke={INK} strokeWidth={2.5} />
      ))}
    </>
  ),

  // The fire
  homa: (
    <>
      <Halo y={124} />
      <Flame x={200} y={148} s={1.6} />
      <path d="M116,166 H284 V184 H116 Z" fill={SACRED} />
      <path d="M132,184 H268 V202 H132 Z" fill={GOLD} />
      <path d="M148,202 H252 V220 H148 Z" fill={SACRED} />
      <path d="M300,92 L238,138" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <ellipse cx={234} cy={142} rx={12} ry={7} transform="rotate(-36 234 142)" fill={GOLD} stroke={INK} strokeWidth={2} />
    </>
  ),
  agnihotra: (
    <>
      <Ground y={214} />
      {/* gārhapatya, round */}
      <circle cx={96} cy={196} r={30} fill={SACRED} />
      <Flame x={96} y={182} s={0.7} />
      {/* āhavanīya, square */}
      <rect x={170} y={166} width={60} height={46} fill={SACRED} />
      <Flame x={200} y={170} s={0.85} />
      {/* dakṣiṇāgni, half-moon */}
      <path d="M274,212 A34,34 0 0,1 342,212 Z" fill={SACRED} />
      <Flame x={308} y={192} s={0.7} />
      <circle cx={200} cy={70} r={24} fill={MARIGOLD} />
    </>
  ),

  // For those who have gone
  shraddha: (
    <>
      <Halo y={140} r={92} />
      {Array.from({ length: 7 }, (_, i) => (
        <path key={i} d={`M${120 + i * 26},228 Q${130 + i * 26},176 ${150 + i * 22},150`} {...LINE} stroke="var(--ink-3)" strokeWidth={3} />
      ))}
      {[160, 200, 240].map((x) => (
        <circle key={x} cx={x} cy={204} r={22} fill={PAPER} stroke={INK} strokeWidth={3} />
      ))}
      {[150, 168, 196, 208, 236, 248, 180, 222].map((x, i) => (
        <circle key={i} cx={x} cy={[196, 210, 194, 212, 200, 192, 226, 228][i]} r={2.2} fill={INK} />
      ))}
    </>
  ),
  "mahalaya-paksha": (
    <>
      <circle cx={200} cy={100} r={46} fill={SACRED} opacity={0.85} />
      <circle cx={200} cy={100} r={52} fill="none" stroke={GOLD} strokeWidth={2} />
      {Array.from({ length: 15 }, (_, i) => (
        <circle key={i} cx={60 + i * 20} cy={190} r={6} fill={MARIGOLD} opacity={1 - i * 0.055} />
      ))}
      {[150, 200, 250].map((x) => (
        <path key={x} d={`M${x},218 C${x - 7},230 ${x - 5},238 ${x},238 C${x + 5},238 ${x + 7},230 ${x},218 Z`} fill="var(--ink-4)" />
      ))}
    </>
  ),

  // Going to the place
  tirthayatra: (
    <>
      <circle cx={300} cy={74} r={30} fill={MARIGOLD} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={60 + i * 26} y={120 + i * 22} width={300 - i * 26} height={22} fill={i % 2 ? GOLD : "var(--paper-3)"} stroke={INK} strokeWidth={2} />
      ))}
      <rect x={0} y={208} width={400} height={62} fill="var(--paper-2)" />
      {[220, 234].map((y) => (
        <path key={y} d={`M60,${y} Q160,${y - 6} 340,${y}`} {...LINE} stroke="var(--ink-4)" strokeWidth={2.5} />
      ))}
      <Foot x={110} y={106} r={150} s={0.8} />
      <Foot x={140} y={96} r={150} s={0.8} />
    </>
  ),
  pradakshina: (
    <>
      <ellipse cx={200} cy={176} rx={140} ry={52} fill="none" stroke={GOLD} strokeWidth={3} strokeDasharray="10 12" />
      {[30, 150, 270].map((deg) => {
        const a = (deg * Math.PI) / 180;
        const x = 200 + 140 * Math.cos(a);
        const y = 176 + 52 * Math.sin(a);
        return <path key={deg} d="M-9,-7 L9,0 L-9,7 Z" transform={`translate(${x} ${y}) rotate(${deg + 90})`} fill={SACRED} />;
      })}
      <path d="M170,180 L176,104 L190,104 L194,82 L206,82 L210,104 L224,104 L230,180 Z" fill={SACRED} />
      <circle cx={200} cy={74} r={6} fill={MARIGOLD} />
    </>
  ),
  // ── beyond the rites: drawings for places no picture exists ──

  // Pṛthu: the earth as a cow, and the king's bow.
  "story-prithu": (
    <>
      <Halo y={130} r={92} />
      <path d="M118,62 Q60,140 118,218" fill="none" stroke={SACRED} strokeWidth={7} strokeLinecap="round" />
      <line x1={118} y1={62} x2={118} y2={218} stroke={INK} strokeWidth={1.5} />
      <g transform="translate(220 160)">
        <ellipse cx={0} cy={0} rx={70} ry={34} fill={PAPER} stroke={INK} strokeWidth={3} />
        <path d="M60,-14 C80,-30 104,-22 104,-4 C104,10 86,16 70,10 Z" fill={PAPER} stroke={INK} strokeWidth={3} />
        <path d="M86,-24 C84,-40 94,-46 100,-44 M74,-22 C68,-38 58,-42 52,-38" {...LINE} strokeWidth={3} />
        {[-50, -24, 24, 50].map((x) => (
          <line key={x} x1={x} y1={28} x2={x} y2={64} stroke={INK} strokeWidth={4} strokeLinecap="round" />
        ))}
        <circle cx={-14} cy={-6} r={11} fill={MARIGOLD} />
        <circle cx={22} cy={8} r={8} fill={SAFFRON} />
        <path d="M-68,-6 C-90,0 -92,24 -84,40" {...LINE} strokeWidth={3} />
      </g>
    </>
  ),

  // The niti songs, addressed to the mind: the tambura and the cymbals.
  "bhajan-niti": (
    <>
      <Halo y={130} r={96} />
      <path d="M230,40 L196,168" stroke={SACRED} strokeWidth={12} strokeLinecap="round" />
      <circle cx={186} cy={196} r={48} fill={GOLD} stroke={INK} strokeWidth={3} />
      <circle cx={186} cy={196} r={14} fill={SACRED} opacity={0.4} />
      {[-4, 0, 4, 8].map((d) => (
        <line key={d} x1={226 + d} y1={44} x2={190 + d} y2={182} stroke={PAPER} strokeWidth={1} opacity={0.8} />
      ))}
      <g transform="translate(292 186)">
        <ellipse cx={-14} cy={0} rx={22} ry={8} fill={MARIGOLD} stroke={INK} strokeWidth={2.5} />
        <ellipse cx={14} cy={14} rx={22} ry={8} fill={MARIGOLD} stroke={INK} strokeWidth={2.5} />
        <path d="M-14,-8 C-6,-26 14,-20 14,6" {...LINE} strokeWidth={2} />
      </g>
    </>
  ),

  // Nyāya's own example: smoke on the hill, therefore fire.
  "darshana-nyaya": (
    <>
      <path d="M40,236 L170,92 L300,236 Z" fill="var(--paper-3)" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <Flame x={170} y={112} s={0.7} />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${170 + i * 10},${80 - i * 14} c-16,-10 4,-22 -8,-34 c-10,-10 10,-18 2,-28`} fill="none" stroke="var(--ink-4)" strokeWidth={5 - i} strokeLinecap="round" opacity={0.8 - i * 0.2} />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={322} cy={74 + i * 34} r={11} fill={i === 4 ? MARIGOLD : PAPER} stroke={INK} strokeWidth={2.5} />
      ))}
      <line x1={322} y1={85} x2={322} y2={199} stroke={INK} strokeWidth={2} opacity={0.5} />
    </>
  ),

  // Mīmāṃsā: the Veda as injunction, above the altar it governs.
  "darshana-mimamsa": (
    <>
      <Halo y={140} />
      <rect x={96} y={52} width={208} height={40} rx={8} fill="var(--paper-3)" stroke={INK} strokeWidth={3} />
      {[64, 72, 80].map((y) => (
        <line key={y} x1={112} x2={288} y1={y} y2={y} stroke="var(--ink-4)" strokeWidth={2.5} strokeLinecap="round" />
      ))}
      <circle cx={200} cy={72} r={4} fill={INK} />
      <Flame x={200} y={176} s={1.1} />
      <path d="M140,190 H260 V206 H140 Z" fill={SACRED} />
      <path d="M154,206 H246 V222 H154 Z" fill={GOLD} />
    </>
  ),

  // Vedānta: the three starting points, and the lamp.
  "branch-vedanta": (
    <>
      <Halo y={130} r={96} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(200 196) rotate(${(i - 1) * 16}) translate(-110 ${-i * 4})`}>
          <rect width={220} height={30} rx={7} fill={[GOLD, "var(--paper-3)", SAFFRON][i]} stroke={INK} strokeWidth={2.5} />
          <line x1={20} x2={200} y1={15} y2={15} stroke={INK} strokeWidth={1.5} opacity={0.4} />
        </g>
      ))}
      <Lamp x={200} y={112} s={1} />
    </>
  ),

  // Āgama: the temple and the lamp in its sanctum.
  "branch-agamas": (
    <>
      <Halo y={120} r={94} />
      <path d="M140,212 L150,104 L170,104 L176,76 L188,76 L192,52 L208,52 L212,76 L224,76 L230,104 L250,104 L260,212 Z" fill={SACRED} />
      <circle cx={200} cy={44} r={8} fill={MARIGOLD} />
      <path d="M176,212 V164 C176,140 224,140 224,164 V212 Z" fill="var(--paper-2)" />
      <Flame x={200} y={196} s={0.55} />
      <path d="M120,212 H280 V226 H120 Z" fill={GOLD} />
    </>
  ),
  // Vaiśeṣika: atoms, then two to a dyad, then three dyads to the
  // first thing that can be seen.
  "darshana-vaisheshika": (
    <>
      <Halo y={140} r={96} />
      <circle cx={92} cy={140} r={10} fill={SACRED} />
      <g fill={SACRED}>
        <circle cx={172} cy={140} r={10} />
        <circle cx={196} cy={140} r={10} />
      </g>
      <line x1={172} y1={140} x2={196} y2={140} stroke={INK} strokeWidth={2} />
      {[[282, 108], [258, 156], [306, 156]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x - 12} cy={y} r={10} fill={MARIGOLD} stroke={INK} strokeWidth={2} />
          <circle cx={x + 12} cy={y} r={10} fill={MARIGOLD} stroke={INK} strokeWidth={2} />
        </g>
      ))}
      <path d="M282,108 L258,156 L306,156 Z" fill="none" stroke={INK} strokeWidth={1.5} strokeDasharray="3 4" />
      <path d="M118,140 H150 M222,140 H240" stroke="var(--ink-4)" strokeWidth={3} strokeLinecap="round" />
    </>
  ),

  // The teaching texts: a short book on palm leaves, tied, and a lamp.
  "branch-prakarana": (
    <>
      <Halo y={130} r={96} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={96} y={156 - i * 12} width={208} height={14} rx={6} fill={i % 2 ? GOLD : "var(--paper-3)"} stroke={INK} strokeWidth={2} />
      ))}
      <circle cx={150} cy={135} r={4} fill={INK} />
      <circle cx={250} cy={135} r={4} fill={INK} />
      <path d="M150,135 C150,190 250,190 250,135" {...LINE} stroke={SACRED} strokeWidth={2.5} />
      <Lamp x={200} y={210} s={0.8} />
    </>
  ),

  // The Vedas: four collections, four bundles of palm leaf tied at one
  // point — one tradition, four books.
  "branch-veda": (
    <>
      <Halo y={128} r={98} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(200 222) rotate(${(i - 1.5) * 15}) translate(-15 -156)`}>
          <rect width={30} height={156} rx={10} fill={[GOLD, "var(--paper-3)", SAFFRON, SACRED][i]} stroke={INK} strokeWidth={2.5} />
          <line x1={15} x2={15} y1={18} y2={136} stroke={INK} strokeWidth={1.5} opacity={0.35} />
          <circle cx={15} cy={42} r={3.2} fill={INK} />
        </g>
      ))}
      <circle cx={200} cy={222} r={9} fill={MARIGOLD} stroke={INK} strokeWidth={2.5} />
    </>
  ),

  // The Upaniṣads: "sitting near" — two lamps under one tree, the
  // teacher's and the pupil's, both lit.
  "branch-upanishads": (
    <>
      <Halo y={118} r={96} />
      <rect x={192} y={122} width={16} height={104} rx={5} fill={SACRED} />
      {[
        [158, 100, 34],
        [200, 78, 42],
        [242, 100, 34],
        [178, 122, 28],
        [222, 122, 28],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="var(--ink-3)" opacity={0.82} />
      ))}
      <Lamp x={128} y={222} s={0.78} />
      <Lamp x={274} y={222} s={0.78} />
      <Ground y={236} />
    </>
  ),

  // The six systems: darśana is "seeing" — six ways of looking, all
  // turned on the one question at the centre.
  "branch-darshanas": (
    <>
      <Halo y={135} r={104} />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = ((i * 60 - 90) * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={200}
            y1={135}
            x2={200 + Math.cos(a) * 70}
            y2={135 + Math.sin(a) * 70}
            stroke="var(--ink-4)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeDasharray="3 6"
          />
        );
      })}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = ((i * 60 - 90) * Math.PI) / 180;
        const x = 200 + Math.cos(a) * 88;
        const y = 135 + Math.sin(a) * 88;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${i * 60})`}>
            <path d="M-25,0 C-12,-16 12,-16 25,0 C12,16 -12,16 -25,0 Z" fill="var(--paper-3)" stroke={INK} strokeWidth={2.5} />
            <circle r={7.5} fill={[GOLD, SACRED, SAFFRON][i % 3]} />
          </g>
        );
      })}
      <circle cx={200} cy={135} r={15} fill={MARIGOLD} stroke={INK} strokeWidth={2.5} />
    </>
  ),
};

/** Whether this slug or group has a drawing. */
export function hasRiteArt(key: string): boolean {
  return key in ART;
}

export function RiteArt({ art, label }: { art: string; label: string }) {
  const body = ART[art];
  if (!body) return null;
  return (
    <svg className="rite-art" viewBox="0 0 400 270" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="270" fill="var(--card-2)" />
      <g transform="translate(200 140) scale(1.14) translate(-200 -140)">{body}</g>
    </svg>
  );
}
