import { type DarshanaProse, para, sub, list } from "./types";

// The six darśanas in English. Three sections each: what the school is
// actually doing, the one move worth carrying away, and where it is
// argued with. The last of the three is not decoration — a school
// presented without its opponents looks stronger than it is.

export const EN: DarshanaProse = {
  // ── Nyāya ─────────────────────────────────────────────────
  nyaya: [
    {
      id: "project",
      eyebrow: "What it is doing",
      title: "A manual for public argument",
      blocks: [
        para(
          "The Nyāya Sūtra is not first of all a metaphysics. It is a manual for arguing in public, written for a culture in which philosophical positions were settled in formal debate before an audience or a patron, with consequences for whoever lost. Of its sixteen categories, nine concern how a conclusion is reached and seven concern how a debate is conducted and the ways it goes wrong. That ratio is the school telling you what it thought the work of philosophy mostly consisted of.",
        ),
        para(
          "Its most borrowed piece of machinery is the five-membered argument. The comparison usually offered is the syllogism, and it misleads in one specific way: the third member requires an example both parties already accept, so a Nyāya argument cannot be run on premises an opponent has never granted. It is a procedure for convincing somebody, not a calculus for deriving truths in private.",
        ),
        sub(
          "What it means by a means of knowledge",
          "A pramāṇa is not a faculty and not a kind of certainty. It is a route by which a true cognition is produced, and the school's whole technical labour goes into saying what makes a route reliable and what makes one only look reliable. The list of fallacies exists because the second case is common.",
        ),
      ],
    },
    {
      id: "move",
      eyebrow: "The move that matters",
      title: "Knowledge is of something, and the something is not the knowing",
      blocks: [
        para(
          "Nyāya is a realism, and a stubborn one. When you see a jar there is a jar, your perception is of it, and the jar is not constituted by your perceiving it. This looks like plain common sense until you notice what it is defending against. The Buddhist logicians argued that what we take for stable objects are momentary bundles our minds stitch together. The Advaitins argued that the division between knower and known does not finally hold. Nyāya's reply in both cases is to make the object's independence an explicit thesis and then argue for it, rather than assume it.",
        ),
        para(
          "The cost of that is a long inventory. If a universal is needed to explain why many cows are one kind, universals exist. If a relation is needed to hold a quality inside its substance, that relation exists too and gets a name. This is how Nyāya became the school with a list, and why it eventually merged with Vaiśeṣika, which had been compiling one from the start.",
        ),
      ],
    },
    {
      id: "argued",
      eyebrow: "Where it is argued with",
      title: "Seven centuries of being the opposition",
      blocks: [
        para(
          "Nearly every major text of the other schools contains a refutation of Nyāya, and the reason is structural rather than personal. If you want to establish anything you have to argue, and if you argue you are using machinery Nyāya built. So a school wanting to establish something Nyāya's machinery forbids has to go after the machinery first.",
        ),
        para(
          "Śrīharṣa did exactly that, attacking not the conclusions but the definitions, on the ground that a definition which cannot be stated without circularity establishes nothing. Gaṅgeśa's reply began what is called Navya-Nyāya, the new Nyāya, which rebuilt the technical vocabulary to be proof against that kind of attack and in the process became so precise that it reads as a separate language. It is one of the most rigorous idioms any philosophical tradition has produced, and almost nobody outside it can read it.",
        ),
        list(
          "Who was arguing, and roughly when",
          ["Vātsyāyana", "The commentary through which the sūtra is read at all."],
          ["Udayana, around the tenth century", "Works the proof of God out at length, and answers the Buddhists."],
          ["Śrīharṣa, around the twelfth", "An Advaitin, attacking the definitions themselves."],
          ["Gaṅgeśa, around the fourteenth", "Rebuilds the vocabulary; Navya-Nyāya begins."],
        ),
      ],
    },
  ],

  // ── Vaiśeṣika ─────────────────────────────────────────────
  vaisheshika: [
    {
      id: "project",
      eyebrow: "What it is doing",
      title: "An inventory, with a reason for every entry",
      blocks: [
        para(
          "Vaiśeṣika asks what there is and answers in kinds rather than in quantities. Six categories, and the test for admitting a seventh is not intuition but explanatory need: a kind gets in because something otherwise unaccountable requires it. That is why the list is short, and why absence — the not-being of a thing, treated as something known rather than merely missed — took the school centuries to let in.",
        ),
        para(
          "Substance comes in nine kinds. Four of them are atomic: earth, water, fire and air. Five are not: space, time, direction, the self and the mind. Time and direction being substances rather than frames is the entry a modern reader finds strangest, and the school argues for it on exactly the same ground as the rest — that without them certain ordinary judgments could not be accounted for at all.",
        ),
      ],
    },
    {
      id: "move",
      eyebrow: "The move that matters",
      title: "An atomism that is not the Greek one",
      blocks: [
        para(
          "The argument is a regress. Suppose a thing can be divided, and its parts divided again, without end. Then a mustard seed and a mountain both contain infinitely many parts, and there is nothing left to account for the difference in their size. Since the difference is real, division must stop somewhere. What it stops at is the paramāṇu: eternal, without parts, and therefore not itself perceptible.",
        ),
        para(
          "Three things keep this from being Democritus. The atoms are of four qualitatively different kinds rather than one neutral stuff, so the elements are irreducible to each other. They combine in a fixed way — two atoms into a dyad, three dyads into the first magnitude that can be seen — rather than by chance collision. And five of the nine substances are not atomic at all, so this is not a universal atomism but an atomism of the four elements set inside a wider ontology that includes selves and minds.",
        ),
        sub(
          "Why it was worth arguing for",
          "An atomism reached by argument can be attacked by argument, and it was. The point is not that the Vaiśeṣikas anticipated anything; it is that they treated the structure of matter as a question to be settled by reasoning about divisibility, and published the reasoning.",
        ),
      ],
    },
    {
      id: "argued",
      eyebrow: "Where it is argued with",
      title: "The objection is to the method, not to any one entry",
      blocks: [
        para(
          "Vedānta's quarrel is not with atoms in particular. It is that a list of mutually independent reals cannot be squared with texts which say that what is, is one. Shankara's commentary on the Brahma Sūtra devotes a sustained passage to the atomism, and his sharpest objection is about how it could ever start: atoms without parts and without any motive of their own have no reason to begin combining, so the account needs an intelligence to set it going, which is precisely what the sūtra did not supply.",
        ),
        para(
          "The school lost the argument and won the vocabulary. Substance and quality, the nine kinds, the analysis of motion as a category in its own right — these became the common language in which the other schools stated their own positions, including the ones refuting Vaiśeṣika. Reading any later philosophical Sanskrit means reading its terms.",
        ),
      ],
    },
  ],

  // ── Sāṅkhya ───────────────────────────────────────────────
  sankhya: [
    {
      id: "project",
      eyebrow: "What it is doing",
      title: "Two, and the whole difficulty of two",
      blocks: [
        para(
          "Sāṅkhya has exactly two irreducible things, and every difficulty in the system follows from that. Puruṣa is consciousness, and it does nothing: it does not act, is not modified, and produces nothing. Prakṛti is nature, and it does everything — including every mental operation, because intellect, the I-sense and the mind all fall on the nature side of the line. So in this system nothing conscious acts, and nothing that acts is conscious.",
        ),
        para(
          "The problem is immediate. If puruṣa does nothing, why does it appear to be bound? The Kārikā's answer is a simile rather than a mechanism: a lame man and a blind man get where they are going by combining, one of them seeing and the other walking. Bondage is a misattribution, not an event. Nature's activity gets referred to the witness, and liberation is the correction of that reference rather than anything that happens.",
        ),
      ],
    },
    {
      id: "move",
      eyebrow: "The move that matters",
      title: "The derivation runs from the subtle to the gross",
      blocks: [
        para(
          "Read the cascade in the order the Kārikā gives it: intellect first, then the I-sense, then mind and the eleven instruments, then the five subtle qualities, and only last the five gross elements. Mind is earlier than matter in this sequence. A modern reader expects the reverse — matter first, mind as a late and local product of it — and the reversal is not an oversight. It is the claim.",
        ),
        para(
          "The three guṇas are not qualities that things have. They are the strands nature is made of, and everything on the cascade is a particular ratio of them. That is why the Gītā can take the scheme over almost whole, using the guṇas to classify food, action, knowledge and death, without taking on Sāṅkhya's metaphysics at all.",
        ),
      ],
    },
    {
      id: "argued",
      eyebrow: "Where it is argued with",
      title: "Absorbed everywhere, and refuted on the one point",
      blocks: [
        para(
          "Almost every later school takes something from Sāṅkhya: the guṇas, the list of constituents, the vocabulary of prakṛti and its evolutes. Yoga takes very nearly the whole of it. Vedānta takes the vocabulary and rejects the two things that make it Sāṅkhya — that there are many puruṣas, and that nature is independent of anything else.",
        ),
        para(
          "The second chapter of the Brahma Sūtra opens by refuting Sāṅkhya, and that is the longest refutation in the book, which is the measure of how serious an opponent it was. The objection is that an unconscious nature cannot arrange itself purposefully. The Kārikā had already answered it — nature acts for the sake of puruṣa as unconsciously as milk flows for a calf — and that answer is exactly what Vedānta refuses to accept.",
        ),
        sub(
          "A school that stopped being a school",
          "Sāṅkhya has no living lineage comparable to Vedānta's. What survives of it survives inside other systems, which is a different fate from being refuted: its vocabulary is in daily use by people who hold none of its positions.",
        ),
      ],
    },
  ],

  // ── Yoga ──────────────────────────────────────────────────
  yoga: [
    {
      id: "project",
      eyebrow: "What it is doing",
      title: "What the word means in this book",
      blocks: [
        para(
          "The second sūtra defines yoga as the stilling of the mind's turnings, and that is the whole subject of the text. What the word now denotes across most of the world is one limb of eight, and it receives three sūtras: the posture should be steady and comfortable, the effort in it should slacken, and then the pairs of opposites stop troubling you. There is no sequence of postures anywhere in the book, and no posture is named.",
        ),
        para(
          "This is worth stating without rancour. The modern postural practice is a real tradition with a real history, and its documented history is recent; the Yoga Sūtra is not its source. Saying so takes nothing away from either. It only stops a reader opening this text expecting to find something that was never in it.",
        ),
        list(
          "What the four parts actually cover",
          ["Samādhi", "What the mind is, what stilling it means, and the methods."],
          ["Sādhana", "The afflictions, and the eight limbs as practice."],
          ["Vibhūti", "The attainments — and a sūtra calling them obstacles."],
          ["Kaivalya", "Liberation, and what is left when nothing is being attained."],
        ),
      ],
    },
    {
      id: "move",
      eyebrow: "The move that matters",
      title: "The powers are listed, and then called obstacles",
      blocks: [
        para(
          "The third part catalogues attainments in detail: knowledge of other minds, of former births, of what is distant or to come, and the rest. A reader braced for a text that either promises these or denies them gets neither. They are set down as real, described with the same flatness as everything else, and then in a single sūtra called obstacles to the thing the book is about.",
        ),
        para(
          "That sūtra is the clearest statement of the text's priorities anywhere in it, and it is the reason the Yoga Sūtra is not a book of powers however often it is read as one. The attainments are what happens on the way; stopping to collect them is how the way is lost.",
        ),
      ],
    },
    {
      id: "argued",
      eyebrow: "Where it is argued with",
      title: "Everyone borrowed the method and disputed the frame",
      blocks: [
        para(
          "Vedānta disputes Yoga's metaphysics and keeps its practice. Shankara's writing on meditation is procedurally Yoga and metaphysically not. The Gītā's sixth chapter sets out a sitting practice any yogin would recognise — the seat, the posture, the gaze, the gathered mind — and places it inside a frame Sāṅkhya would not accept.",
        ),
        para(
          "What the schools actually argue over is whether the stilling of the mind is liberation itself or only the condition for the knowledge that liberates. Sāṅkhya-Yoga takes the first view, Advaita the second, and the difference is not academic: it decides whether the practice is the thing or the preparation for it. A reader who has sat for twenty minutes has a stake in that question.",
        ),
      ],
    },
  ],

  // ── Pūrva Mīmāṃsā ─────────────────────────────────────────
  mimamsa: [
    {
      id: "project",
      eyebrow: "What it is doing",
      title: "A theory of how a sentence binds",
      blocks: [
        para(
          "Mīmāṃsā begins from a fact about the Veda rather than a thesis about reality: most of it is instruction, and an instruction is not true or false but binding or not. So the school's central question is not what exists but what obliges — how words create a duty, which parts of a text are doing that and which are only describing, and what to do when two instructions conflict.",
        ),
        para(
          "Out of that comes the interpretive apparatus, and it is the most durable thing the school made. A text is read as a whole with a purpose. A passage that merely praises is not an independent claim but support for the instruction beside it. And where readings conflict, six tests are applied in a fixed order of strength. Indian jurisprudence took these rules over, and courts in this country have cited them in reading statutes.",
        ),
      ],
    },
    {
      id: "move",
      eyebrow: "The move that matters",
      title: "An authorless text, and therefore nobody to petition",
      blocks: [
        para(
          "If the Veda had an author it would be his opinion, and the opinion of even a perfect being could in principle have been otherwise. The only way a text can be a means of knowledge in its own right is to have had no author at all. Mīmāṃsā holds that position — apauruṣeya, not of any person — against everybody, including the theists inside its own āstika camp, and it will not allow that God composed the Veda either.",
        ),
        para(
          "Two consequences follow and both are startling. The rite produces its result by its own operation, so nobody is being asked for anything and no favour is being sought. And a cognition is valid on its own unless something defeats it, which puts the burden of proof on doubt rather than on knowledge — the reverse of where most philosophy, here and elsewhere, chooses to start.",
        ),
      ],
    },
    {
      id: "argued",
      eyebrow: "Where it is argued with",
      title: "Vedānta's hardest opponent, because it is a cousin",
      blocks: [
        para(
          "Mīmāṃsā and Vedānta read the same book and divide it between them, which makes the dispute sharper rather than milder. If the Veda's purpose is instruction throughout, then the Upaniṣads' statements about what is must somehow be in service of the rites — and Mīmāṃsā argues exactly that. Vedānta has to establish that a sentence can be a means of knowledge without commanding anything at all, and a good deal of the Brahma Sūtra's first chapter is doing that work.",
        ),
        para(
          "It is also the school that has most nearly vanished as a living discipline while leaving the most behind. The great sacrifices it governs are now rarely performed. Its rules for reading a text are everywhere, including in places that have forgotten where they came from.",
        ),
      ],
    },
  ],

  // ── Vedānta ───────────────────────────────────────────────
  vedanta: [
    {
      id: "project",
      eyebrow: "What it is doing",
      title: "Three books, fixed, and no agreement",
      blocks: [
        para(
          "A sūtra of the Brahma Sūtra is often three words long. The text cannot be read without a commentary, and so a commentary does not elucidate a meaning so much as supply one. That structural fact is behind everything else here: Shankara, Rāmānuja and Madhva wrote on the same three books, in the same language, quoting the same verses, and arrived at positions that cannot all be true.",
        ),
        para(
          "What the three share is worth stating, because it is easy to lose in the disagreement. All hold that the Veda is a means of knowledge about what perception and inference cannot reach. All hold that the self's situation is a problem and not merely a fact about it. And all hold that the three texts must be read as consistent with each other, which is what obliges each of them to account for every awkward verse rather than choose a favourite.",
        ),
      ],
    },
    {
      id: "move",
      eyebrow: "The move that matters",
      title: "The disagreement is about the relation, not the existence",
      blocks: [
        para(
          "None of the three doubts that Brahman is, and none of them says the world is nothing. The question is the relation between Brahman, the selves and the world: whether it is identity with an appearance of difference, or real difference inside an inseparable dependence, or an eternal distinctness of three kinds of thing. Put that way the dispute stops looking like a quarrel about whether the world exists, which it never was.",
        ),
        para(
          "This site sets the three readings side by side wherever a term divides them, under the term itself, rather than teaching one of them and noting that others exist. That is an editorial decision and it has a cost: a reader looking for an answer is handed three. The alternative is to pick one and not say so, which is worse.",
        ),
      ],
    },
    {
      id: "argued",
      eyebrow: "Where it stands now",
      title: "The only one of the six still argued from the inside",
      blocks: [
        para(
          "The other five darśanas are studied. Vedānta is also still held, by institutions that take positions and teach them as commitments rather than as a syllabus. The disagreement between the three schools is not a closed chapter in the history of ideas; it is a live difference between living lineages, and the acharyas section of this site is arranged around that fact.",
        ),
        list(
          "Where to go from here",
          ["The acharyas", "Who argued what, and what each of them wrote."],
          ["The terms", "Six words on which the three schools divide, with all three readings given."],
          ["The Upaniṣads", "The heard portion the whole argument rests on, verse by verse."],
        ),
      ],
    },
  ],
};
