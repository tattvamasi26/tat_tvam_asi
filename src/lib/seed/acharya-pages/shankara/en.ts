import type { AcharyaContent } from "../../acharya-pages";

// Adi Shankaracharya — English.
// Written from docs/SHANKARA.md, which carries the sources.

export const en: AcharyaContent = {
  tagline:
    "The commentator who turned Advaita Vedanta into a school — and whose life, in a lifetime the tradition gives as thirty-two years, is known almost entirely from what he wrote.",
  when: "Eighth century CE, by the estimate now usual",
  facts: [
    ["Tradition", "Advaita Vedanta"],
    ["Born", "Kalady, Kerala (by tradition)"],
    ["Lifespan", "Thirty-two years"],
    ["Teacher", "Govinda Bhagavatpada"],
    ["Founded", "Four mathas, at the four directions"],
  ],
  quote:
    "Brahma satyaṃ jagan mithyā, jīvo brahmaiva nāparaḥ — Brahman is real; the world is appearance; the individual self is nothing other than Brahman.",

  sections: [
    // ── 1 ────────────────────────────────────────────────────
    {
      id: "who",
      eyebrow: "Why he comes first",
      title: "The man the rest of this site leans on",
      standfirst:
        "Almost everything here passes through him — and the one verse everybody quotes as his may not be his at all.",
      blocks: [
        {
          kind: "para",
          text: "The Upanishads are read in the order his commentaries settled. The Gita is read with his bhashya beside it. And Tat tvam asi — the sentence this site is named for — reaches us as a mahavakya, one of the four great sayings, because his tradition put it at the centre. Read the Upanishads in English today and you are almost certainly reading someone who read him.",
        },
        {
          kind: "para",
          text: "He did not present himself as an innovator, and would have rejected the description. He wrote commentaries, and argued at every turn that he was saying only what the sruti had already said. The system that came out of that work is now the most widely known Hindu philosophy in the world — which is itself a historical accident he had no part in.",
        },
        {
          kind: "verse",
          sanskrit: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः ।",
          iast: "brahma satyaṃ jagan mithyā jīvo brahmaiva nāparaḥ",
          translation:
            "Brahman is real; the world is appearance; the individual self is nothing other than Brahman.",
          attribution:
            "The tradition's own summary of him — quoted everywhere, attributed to him, and found in none of the commentaries. It is given here as what it is.",
        },
        {
          kind: "terms",
          title: "Four words this page uses throughout",
          terms: [
            {
              term: "Advaita",
              sanskrit: "अद्वैत",
              text: "Not-two. Not 'one' — the claim is narrower and stranger than monism: there are not two things here to be counted.",
            },
            {
              term: "Vedanta",
              sanskrit: "वेदान्त",
              text: "The end of the Veda — the Upanishads, and the schools built on reading them.",
            },
            {
              term: "Prasthanatrayi",
              sanskrit: "प्रस्थानत्रयी",
              text: "The three starting points a Vedanta teacher must comment on to be taken seriously: the Upanishads, the Brahma Sutras, the Gita.",
            },
            {
              term: "Bhashya",
              sanskrit: "भाष्य",
              text: "A commentary that argues, rather than one that merely glosses. His are bhashyas.",
            },
          ],
        },
      ],
    },

    // ── 2 ────────────────────────────────────────────────────
    {
      id: "when",
      eyebrow: "The first difficulty",
      title: "When he lived",
      standfirst:
        "Four answers are in circulation and they are thirteen centuries apart. The spread is not a detail; it is the measure of how little is known.",
      blocks: [
        {
          kind: "para",
          text: "There is no contemporary record of his life. The Stanford Encyclopedia of Philosophy states it flatly: there are no dependable historical records of Shankara beyond his own writing. Every date below is an inference, and they are drawn on the same band so the disagreement can be seen rather than described.",
        },
        {
          kind: "timeline",
          ticks: [
            { year: -500, label: "500 BCE" },
            { year: 1, label: "CE" },
            { year: 500, label: "500" },
            { year: 800, label: "800" },
          ],
          marks: [
            {
              year: -509,
              when: "509 BCE",
              label: "The Kanchi matha's tradition",
              text: "The earliest of the institutional datings. Govardhana holds 507 BCE, Dvaraka 491, Jyotirmath 485, Puri 484.",
            },
            {
              year: -483,
              when: "483 BCE",
              label: "The Sringeri matha's tradition",
              text: "The mathas' own reckonings cluster in the fifth century BCE — roughly a thousand years before any date scholarship entertains.",
            },
            {
              year: 675,
              when: "late 7th c.",
              label: "Potter, 1981",
              text: "Argued from the dating of Mandana Mishra, taken to be his contemporary.",
            },
            {
              year: 725,
              when: "c. 700–750 CE",
              label: "Nakamura, 1983 — and most scholarship since",
              text: "Argued from which earlier philosophers his writing depends on, and on whom it does not yet depend.",
              emphasis: true,
            },
            {
              year: 804,
              when: "788–820 CE",
              label: "Early Indology, and every textbook after it",
              text: "Proposed by Tiele, taken up by Max Müller, Macdonell, Deussen and Radhakrishnan. The two years come from a hagiography, not from a record.",
            },
          ],
          note: "The pinned reading is the one this site follows. Note what the band shows: the two dates printed in nearly every book about him — 788 and 820 — sit at the far right of a range whose other end is a thousand years earlier, and they were never evidence in the first place.",
        },
        {
          kind: "para",
          text: "One strand of positive evidence supports the earlier range. A Sringeri record places his birth in the reign of a Vikramaditya, identified with Vikramaditya II of the Badami Chalukyas, who ruled 733–746. That is the kind of anchor a historian can work with, and it is the reason recent scholarship has drifted towards the first half of the eighth century.",
        },
        {
          kind: "para",
          text: "The one figure on which every account agrees is thirty-two years. Whatever century he belonged to, he did all of it young.",
        },
      ],
    },

    // ── 3 ────────────────────────────────────────────────────
    {
      id: "sources",
      eyebrow: "Before the story",
      title: "How anything about him is known",
      standfirst:
        "His life comes from a genre — the Śaṅkaravijaya, 'the conquest of Shankara' — and every surviving example was written five centuries or more after he died.",
      blocks: [
        {
          kind: "para",
          text: "This matters more than it sounds. These are not biographies that drifted; they are compositions with purposes, written inside institutions that had claims to press. Knowing which is which is the difference between reading a life and repeating an advertisement.",
        },
        {
          kind: "list",
          title: "The hagiographies, and what is known of them",
          items: [
            {
              label: "Mādhavīya Śaṅkaravijaya",
              text: "The one that informs nearly every popular and scholarly account. Traditionally attributed to Vidyāraṇya, fourteenth century — who was himself the twelfth Jagadguru of Sringeri and a figure at the Vijayanagara court.",
            },
            {
              label: "Anantānandagiri's Śaṅkaravijaya",
              text: "Often mis-attributed to Ānandagiri, the thirteenth-century subcommentator. Sundaresan shows it is later still. Its Shankara is born at Chidambaram, not Kalady.",
            },
            {
              label: "Cidvilāsa's Śaṅkaravijaya Vilāsa",
              text: "Fifteenth to seventeenth century. Names all four mathas and the Kanchi Sarvajñapīṭha tradition together.",
            },
            {
              label: "Govindanātha's Śaṅkarācāryacarita",
              text: "Seventeenth century, Kerala. Its Shankara dies at Trichur — not at Kedarnath — and it mentions no mathas at all.",
            },
            {
              label: "Bṛhat-Śaṅkaravijaya, ascribed to Citsukha",
              text: "Cited as the oldest. It survives only in fragments quoted by others, and Sundaresan questions whether the text ever existed.",
            },
          ],
        },
        {
          kind: "para",
          text: "The strongest finding in that scholarship is easy to state and hard to absorb: by the time these texts were written, 'Śaṅkarācārya' had long since become a title — borne by significant Advaita teachers and by the heads of Advaita monasteries. It was no longer the name of one man. Each hagiographer very likely wove into his account the legends of whichever titular Shankaracharyas he revered.",
        },
        {
          kind: "para",
          text: "That explains what otherwise looks like sloppiness. One text has him born at Chidambaram; another has him die at Trichur; a third places a 'seat of omniscience' in Kashmir where a fourth places it at Kanchi. These are probably not corruptions of a single biography. They are probably several men's lives, gathered under one name — which is why a page like this can tell the story and must not certify it.",
        },
      ],
    },

    // ── 4 ────────────────────────────────────────────────────
    {
      id: "life",
      eyebrow: "As tradition tells it",
      title: "The life",
      standfirst:
        "Told as tradition, because that is what it is. Read it as the tradition's memory of him rather than as a record of events.",
      blocks: [
        {
          kind: "journey",
          title: "The route, as the hagiographies give it",
          stops: [
            {
              place: "Kalady, on the Periyar",
              text: "Born to an aged and childless couple who had lived devoutly; his father died while he was a child. He is said to have mastered the Vedas by eight — the age at which the next thing happens.",
            },
            {
              place: "The river, and the crocodile",
              text: "Caught by a crocodile while bathing, he called to his mother that he would die a householder unless she let him go as an ascetic. She consented. The crocodile released him. The story is doing work: it makes the mother's consent, which sannyasa required, into something the boy did not simply take.",
            },
            {
              place: "Omkareshwar, on the Narmada",
              text: "He walked north and found Govinda Bhagavatpada, and through him the line of Gaudapada, whose Māṇḍūkya Kārikā is the Advaita that existed before Shankara. This is the one link in the whole story with textual support: Shankara wrote a commentary on that very work.",
            },
            {
              place: "Kashi",
              text: "He taught, and by tradition began the commentaries in his teens. The Brahmasūtrabhāṣya is the work of a man who has read everything his opponents wrote.",
            },
            {
              place: "Badari",
              text: "Where tradition places the writing of the commentaries proper, in the Himalaya, near the shrine that later carried one of his mathas.",
            },
            {
              place: "Mandana Mishra's house",
              text: "The set-piece debate, with Mandana's wife Ubhaya Bhāratī as judge. The stake was not a trophy: the loser took the winner's way of life. Mandana was a Mimamsaka — a ritualist — and on losing became the renunciate Sureśvara.",
            },
            {
              place: "The four quarters",
              text: "The digvijaya, the 'conquest of the directions': walking the country, debating its scholars, and founding the four mathas at the four corners of it.",
            },
            {
              place: "Kedarnath",
              text: "Where the usual tradition places his end, at thirty-two. Kanchi, Kashmir and Kerala are claimed as well, and Govindanātha's text says Trichur.",
            },
          ],
        },
        {
          kind: "sub",
          title: "What the debate was actually about",
          paras: [
            "The Mandana episode is the most-told story in the corpus, and the philosophy in it is real. The Mimamsakas held that the Veda's purpose is injunction — it tells you what to do — and that liberation, if it comes, comes through action, ritual correctly performed. Shankara held that action cannot liberate at all, because every action presupposes an agent, and the agent is precisely the false idea that has to go.",
            "The traditional outcome — the ritualist becomes the renunciate — is therefore a claim about which of the two readings of the Veda wins. It is a philosophical position told as a story.",
          ],
        },
        {
          kind: "sub",
          title: "And whether Mandana became Sureshvara",
          paras: [
            "Scholars are not convinced. Kuppuswami Sastri held that the author of the Brahmasiddhi was probably not Sureśvara, though probably a contemporary. R. Balasubramanian found no conclusive evidence either way. Most tellingly, the two men's surviving works disagree — on where ignorance resides, and on whether meditation helps towards liberation — which is an odd thing for one man to do.",
            "Sringeri's own records identify them. This site reports both, and settles neither.",
          ],
        },
        {
          kind: "figure",
          src: "/images/acharyas/shankara/kalady-janmabhumi.jpg",
          caption:
            "Kalady, on the Periyar in Kerala — the birthplace by tradition, and the place a fifth of the hagiographies do not name.",
        },
      ],
    },

    // ── 5 ────────────────────────────────────────────────────
    {
      id: "works",
      eyebrow: "The firm ground",
      title: "What he wrote",
      standfirst:
        "More than three hundred texts carry his name. A handful are his. The difference was established by scholars who built criteria for testing an attribution instead of accepting it.",
      blocks: [
        {
          kind: "tiers",
          tiers: [
            {
              name: "Accepted as his",
              count: "13 works",
              tone: "sure",
              items: [
                "Brahmasūtrabhāṣya — the central work",
                "Bhāṣyas on ten Upanishads: Īśā, Kena, Kaṭha, Praśna, Muṇḍaka, Māṇḍūkya, Aitareya, Taittirīya, Chāndogya, Bṛhadāraṇyaka",
                "Bhagavadgītābhāṣya",
                "Commentary on Gauḍapāda's Kārikās",
                "Upadeśasāhasrī — the one non-commentary",
              ],
            },
            {
              name: "Doubted",
              tone: "doubted",
              items: [
                "Vivekacūḍāmaṇi — authorship largely rejected, and it is the text most often quoted as his",
                "The Māṇḍūkya commentary is questioned by some",
                "Most prakaraṇa granthas — Ātmabodha, Aparokṣānubhūti, Pañcīkaraṇa — are thought to be later, many from the fourteenth century onward",
              ],
            },
            {
              name: "Attributed, not his",
              count: "300+",
              tone: "attributed",
              items: [
                "Most of the beloved stotras: Bhaja Govindam, Saundaryalaharī, Dakṣiṇāmūrti Stotra, Nirvāṇa Ṣaṭkam, Kanakadhārā, Śivānandalaharī",
                "Written by admirers, by later heads of his mathas — who also bore the title Śaṅkarācārya — and by authors of the same name",
                "This site gives such a text as 'traditionally attributed to Shankara', which is a different claim from 'by Shankara'",
              ],
            },
          ],
        },
        {
          kind: "sub",
          title: "The Brahmasūtrabhāṣya",
          paras: [
            "Bādarāyaṇa's Brahma Sūtras are 555 aphorisms in four chapters of four parts each, grouped into 189 adhikaraṇas or case-studies, and they are deliberately so compressed as to be unreadable alone. They are memory-hooks. Whoever supplies the commentary supplies the philosophy — which is why every Vedanta school begins by commenting on them, and why they disagree so completely while quoting the same text.",
            "The four chapters run: samanvaya, showing that the Upanishads agree in teaching Brahman; avirodha, answering the objections of Samkhya, Yoga, Vaiśeṣika, the Buddhists and the Jains; sādhana, the means; and phala, the result. Shankara's commentary on the first four sutras alone runs to dozens of pages, and the tradition has treated it as a text in its own right ever since.",
          ],
        },
        {
          kind: "sub",
          title: "The Upadeśasāhasrī — 'A Thousand Teachings'",
          paras: [
            "His one accepted work that is not a commentary, and so the only place to meet him without another text standing in between. Nineteen chapters in verse — the first on pure consciousness, the second on negation (neti neti), the eighteenth and longest on Tat tvam asi — and three in prose.",
            "The prose part is the surprise. It is a manual on how to teach: how to find what a pupil has failed to grasp, how to argue both sides of a question, how to know when someone is ready. Its first chapter is titled, plainly, 'How to Enlighten the Pupil'. The manuscripts suggest the verse and prose parts circulated as independent books.",
            "Sengaku Mayeda's critical edition established its text and its structure, and it is on the strength of work like that — Mayeda's and Paul Hacker's — that the lists above can be drawn at all.",
          ],
        },
        {
          kind: "figure",
          src: "/images/acharyas/shankara/shankara-before-the-goddess.jpg",
          caption:
            "Śaṅkara before the Goddess. The hymns to her — Saundaryalaharī, Kanakadhārā, Śivānandalaharī — are the best loved of everything that carries his name, and among the least likely to be his. A devotional print by C. Kondiah Raju of Kovilpatti.",
        },
      ],
    },

    // ── 6 ────────────────────────────────────────────────────
    {
      id: "adhyasa",
      eyebrow: "Where he begins",
      title: "Not with God — with a mistake",
      standfirst:
        "The Brahmasūtrabhāṣya opens with a long preamble that is not about Brahman at all. It is about an error so ordinary that nobody had thought to name it.",
      blocks: [
        {
          kind: "verse",
          sanskrit:
            "युष्मदस्मत्प्रत्ययगोचरयोर्विषयविषयिणोस्तमःप्रकाशवद्विरुद्धस्वभावयोरितरेतरभावानुपपत्तौ सिद्धायाम् ।",
          iast:
            "yuṣmad-asmat-pratyaya-gocarayoḥ viṣaya-viṣayiṇoḥ tamaḥ-prakāśavad viruddha-svabhāvayoḥ itaretara-bhāvānupapattau siddhāyām",
          translation:
            "The object and the subject — whose spheres are the notion of 'you' and the notion of 'I' — are opposed in nature as darkness and light. It is established that neither can become the other.",
          attribution: "The opening sentence of the adhyāsa-bhāṣya, Brahmasūtrabhāṣya. Translation ours.",
        },
        {
          kind: "para",
          text: "Having said that they cannot be mixed, he spends the rest of the preamble showing that we mix them constantly. That is adhyāsa, superimposition — which he defines as the appearance, in the form of a memory, of something seen before, in a place where it does not belong.",
        },
        {
          kind: "para",
          text: "The examples are homely and were already standard: mother-of-pearl taken for silver; the single moon seen as two; a rope taken for a snake in poor light; water seen shimmering on a desert road. In each, something real is present, and something else is laid over it — not invented out of nothing, and not simply there.",
        },
        {
          kind: "para",
          text: "Then the move that makes it philosophy rather than psychology. We do this with the self. Consciousness is laid over the body and the mind, and the body and the mind over consciousness, until 'I am tired', 'I am thin', 'I am the one who must act' seem like reports on a single thing. An objector protests that the self cannot be superimposed, since it is never an object. Shankara's reply is that what gets superimposed is not the pure self but the attributes of what is not the self — and that this happens is not a theory but a fact anyone can check by noticing how they speak.",
        },
        {
          kind: "para",
          text: "The consequence is the load-bearing claim of the whole system: all ordinary dealing — all vyavahāra, and the Vedic injunctions along with it — rests on this confusion. If the error were removed, the entire apparatus of doer, deed and reward would have nothing to stand on. Which is exactly what he goes on to argue.",
        },
        {
          kind: "terms",
          title: "The vocabulary this turns on",
          terms: [
            {
              term: "Adhyāsa",
              sanskrit: "अध्यास",
              text: "Superimposition. Taking one thing for another, in the manner of a memory.",
            },
            {
              term: "Avidyā",
              sanskrit: "अविद्या",
              text: "Ignorance — not missing information, but the standing assumption of being a limited thing that can be hurt and must die.",
            },
            {
              term: "Anirvacanīya",
              sanskrit: "अनिर्वचनीय",
              text: "Not sayable either way. The world cannot be shown to be identical with Brahman, nor to be separate from it.",
            },
            {
              term: "Vyavahāra",
              sanskrit: "व्यवहार",
              text: "Ordinary transacting life — buying, teaching, worshipping. Real at its own level, and resting on the error.",
            },
          ],
        },
      ],
    },

    // ── 7 ────────────────────────────────────────────────────
    {
      id: "teaching",
      eyebrow: "What follows",
      title: "The teaching",
      standfirst:
        "Everything below is a consequence of the preamble. If the problem is a mistake, then the remedy is knowledge — and never action, however well performed.",
      blocks: [
        {
          kind: "layers",
          title: "Three orders of reality — and the world is not the bottom one",
          layers: [
            {
              name: "Pāramārthika — the absolute",
              text: "Brahman alone, unchanging, without a second. What is real in the strict sense: it is not cancelled by any later knowledge.",
            },
            {
              name: "Vyāvahārika — the workable",
              text: "The world we live and trade and die in, and the gods and heavens with it. Public, law-abiding, shared — and cancelled at the moment of liberating knowledge, not before.",
            },
            {
              name: "Prātibhāsika — the merely apparent",
              text: "The rope-snake, the mirage, the dream. Private, and cancelled by the next minute's better look.",
            },
          ],
        },
        {
          kind: "para",
          text: "The distinction between the middle and the bottom layer is the most misread thing in Advaita. The world is emphatically not put with the mirage. It is real enough that you may not steal in it, and not real enough to be the last word about what is.",
        },
        {
          kind: "sub",
          title: "Brahman, with and without attributes",
          paras: [
            "Nirguṇa Brahman — without qualities — is Brahman as it is: not a thing among things, not an object any means of knowledge can reach, the ground on which everything else stands.",
            "Saguṇa Brahman is that same reality as a worshipper meets it: Īśvara, the Lord, who can be praised, petitioned and loved. Shankara does not call this false. He calls it not final. He wrote hymns himself, and his tradition kept temple worship at its centre — which is only a contradiction if you have mistaken the two levels for two rival claims.",
          ],
        },
        {
          kind: "sub",
          title: "Māyā — appearance, not transformation",
          paras: [
            "Milk becoming curd is a transformation: the milk is gone. A rope taken for a snake is an appearance: the rope never changed at all. Shankara's world is the second kind. Brahman appears as everything without undergoing anything — vivarta, not pariṇāma — which is precisely how his position differs from Samkhya's, where a real primal nature really transforms itself.",
            "Māyā is the name for that appearing. It is not a stuff, and not a demon. It is the fact that something shows up as what it is not, and cannot be pinned down as either the same as Brahman or different from it.",
          ],
        },
        {
          kind: "sub",
          title: "What you are",
          paras: [
            "Ātman is not a part of Brahman, nor a spark of it, nor a drop returning to an ocean. It is numerically identical with it. The four mahāvākyas say so from four directions: consciousness is Brahman; I am Brahman; that thou art; this self is Brahman.",
            "This is why the teaching cannot be a project of improvement. You are not being asked to become something. You are being asked to stop being wrong about what you already are — and the whole difficulty is that the error is not in your beliefs but in the way you take yourself to be.",
          ],
        },
        {
          kind: "sub",
          title: "How it can be known at all",
          paras: [
            "He accepts the six means of knowledge — perception, inference, verbal testimony, comparison, postulation, non-apprehension — and holds that not one of them reaches Brahman, since each of them works on objects and Brahman is never an object. Only śruti discloses it, with reasoning (yukti) and experience (anubhava) required alongside.",
            "That is why the central philosopher of this school is a commentator and not a system-builder. For him the text is not decoration on an argument; it is the evidence. It also sets a limit he observes: where reasoning and scripture conflict on what can only be known from scripture, he does not let reasoning win — and where scripture conflicts with what perception plainly shows, he does not let scripture win either.",
          ],
        },
        {
          kind: "sub",
          title: "Who is ready, and what they do",
          paras: [
            "The tradition sets four qualifications before a student begins: viveka, telling the lasting from the passing; vairāgya, the loss of appetite for rewards here or hereafter; the six disciplines of mind and conduct; and mumukṣutva, actually wanting to be free rather than wanting to have wanted it.",
            "The practice itself is three moves, and the Upadeśasāhasrī's prose part is organised on them: śravaṇa, hearing the teaching from someone who knows it; manana, thinking it through until it is no longer someone else's claim; nididhyāsana, dwelling on it until it stops being a thought and becomes the way things are seen.",
            "And the end of it is available now. Jīvanmukti — liberation while alive — means the knowledge is not a deposit paid out after death. The body runs on like a potter's wheel after the potter's hand has left it; what has gone is the conviction of being the one it is happening to.",
          ],
        },
      ],
    },

    // ── 8 ────────────────────────────────────────────────────
    {
      id: "debates",
      eyebrow: "Against",
      title: "What he argued with",
      standfirst:
        "He is a polemicist, and the Brahmasūtrabhāṣya's second chapter is largely demolition. Knowing whom he is answering is most of understanding what he says.",
      blocks: [
        {
          kind: "sub",
          title: "Pūrva Mīmāṃsā — the ritualists",
          paras: [
            "His nearest opponents, and the ones who mattered most: they shared his scripture and read it oppositely. For them the Veda is a book of injunctions and its point is action. Shankara's reply is structural — action cannot produce liberation, because action requires an agent, and agency is the very superimposition that bondage consists of. A cause of bondage cannot be the way out of it.",
            "He is equally firm against the compromise position, jñāna-karma-samuccaya, that knowledge and ritual might be combined. Knowledge removes the agent; ritual needs one. They cannot be added.",
          ],
        },
        {
          kind: "sub",
          title: "Sāṃkhya — the nearest rival",
          paras: [
            "Sāṃkhya's prakṛti is an unconscious primal nature that really evolves into the world. Shankara's objection is that an unconscious principle cannot account for order and purpose, and that a real transformation would make Brahman a thing that changes. The Brahma Sūtras themselves open by rejecting Sāṃkhya's pradhāna, so the argument was old before he took it up.",
          ],
        },
        {
          kind: "sub",
          title: "The Buddhists — and the charge of being one",
          paras: [
            "He rejects the Yogācāra position that objects are only mind: the ordinary world must be granted its own standing at its own level. He rejects the Madhyamaka position that everything is empty of essence: for him there is something that cannot be negated, namely the consciousness doing the negating.",
            "Later Vedantins nonetheless called him a pracchanna bauddha — a crypto-Buddhist — because his world-as-appearance looked to them like emptiness in Vedic dress. The charge came from Rāmānuja's and Madhva's side of the argument, not from the Buddhists, and it tells you more about later Vedanta's polemics than about him.",
          ],
        },
      ],
    },

    // ── 9 ────────────────────────────────────────────────────
    {
      id: "mathas",
      eyebrow: "What was built",
      title: "The four seats",
      standfirst:
        "Four mathas at the four directions, each holding one Veda and one mahāvākya, each headed by one of his four disciples. All four exist today — and their early history is a genuine blank.",
      blocks: [
        {
          kind: "compass",
          centre: "आम्नाय",
          points: [
            {
              dir: "north",
              dirLabel: "North",
              name: "Jyotirmaṭha, Badari",
              veda: "Atharvaveda",
              vakya: "अयमात्मा ब्रह्म",
              gloss: "This self is Brahman · Toṭaka",
            },
            {
              dir: "south",
              dirLabel: "South",
              name: "Śāradā Pīṭha, Sringeri",
              veda: "Yajurveda",
              vakya: "अहं ब्रह्मास्मि",
              gloss: "I am Brahman · Sureśvara",
            },
            {
              dir: "east",
              dirLabel: "East",
              name: "Govardhana, Puri",
              veda: "Ṛgveda",
              vakya: "प्रज्ञानं ब्रह्म",
              gloss: "Consciousness is Brahman · Padmapāda",
            },
            {
              dir: "west",
              dirLabel: "West",
              name: "Śāradā Pīṭha, Dvaraka",
              veda: "Sāmaveda",
              vakya: "तत्त्वमसि",
              gloss: "That thou art · Hastāmalaka",
            },
          ],
        },
        {
          kind: "para",
          text: "Under the four he is said to have ordered ten renunciate lineages — Giri, Purī, Bhāratī, Vana, Araṇya, Sāgara, Āśrama, Sarasvatī, Tīrtha, Parvata — the Daśanāmīs, whose names a sannyasi still takes after his own. In practice the tie between the Daśanāmī orders and the four mathas stayed loose; many stand outside them altogether.",
        },
        {
          kind: "sub",
          title: "The blank in the record",
          paras: [
            "The early history of the Sringeri matha — from the eighth century to about the fourteenth — is unknown. That is not a gap this page is inventing; it is the state of the evidence. Some historians go further and argue the mathas as institutions most likely date from that fourteenth-century period rather than from his lifetime.",
            "What is documented begins with Vijayanagara. The Vidyāśaṅkara temple at Sringeri was completed in 1338, two years after the empire's founding. Tax-free lands were granted in 1346 under Bhāratī Tīrtha, the tenth pontiff. Vidyāraṇya — to whom the most influential hagiography is attributed — became the twelfth head in 1375. Royal patronage continued, through the Keladi Nayakas and the Marathas, until India's independence; when Pindari troops looted the place in 1791, it was Tipu Sultan who paid for the restoration.",
            "The matha has had an unbroken succession since. Sri Bhāratī Tīrtha has been the thirty-sixth Jagadguru since 1989.",
          ],
        },
        {
          kind: "sub",
          title: "And Kanchi",
          paras: [
            "The Kanchi matha holds its own foundation by Shankara and its own line of succession. It is not part of the four-matha scheme that the other four recognise among themselves, and its claims — including to the southern āmnāya title — necessarily come at Sringeri's expense.",
            "This site names Kanchi as a major Advaita institution, and does not adjudicate. The dispute is live, it is institutional as much as historical, and a reference site has no standing to settle it.",
          ],
        },
        {
          kind: "figure",
          src: "/images/acharyas/shankara/sringeri-vidyashankara.jpg",
          caption:
            "The Vidyāśaṅkara temple at Sringeri, completed in 1338 — the oldest hard date in the whole institutional story.",
        },
      ],
    },

    // ── 10 ───────────────────────────────────────────────────
    {
      id: "after",
      eyebrow: "The lineage",
      title: "The disciples, and the schools",
      standfirst:
        "Four disciples are named, and each is a real author with surviving work — which is more than can be said for most of the story around them.",
      blocks: [
        {
          kind: "lineage",
          generations: [
            { label: "Before him", people: [{ name: "Gauḍapāda", text: "Māṇḍūkya Kārikā — the Advaita that already existed" }] },
            { label: "His teacher", people: [{ name: "Govinda Bhagavatpāda", text: "Met on the Narmada, at Omkareshwar" }] },
            { label: "", people: [{ name: "Śaṅkara", text: "The bhāṣyas, and the Upadeśasāhasrī" }] },
            {
              label: "His disciples",
              people: [
                { name: "Padmapāda", text: "Pañcapādikā" },
                { name: "Sureśvara", text: "Naiṣkarmyasiddhi" },
                { name: "Hastāmalaka", text: "The western seat" },
                { name: "Toṭaka", text: "Toṭakāṣṭaka" },
              ],
            },
            {
              label: "The two schools",
              people: [
                { name: "Bhāmatī", text: "From Vācaspati Miśra — ignorance resides in the individual" },
                { name: "Vivaraṇa", text: "From Padmapāda, via Prakāśātman — ignorance resides in Brahman" },
              ],
            },
            {
              label: "After",
              people: [
                { name: "Sarvajñātman, Śrī Harṣa, Citsukha", text: "The dialecticians" },
                { name: "Vidyāraṇya", text: "Sringeri, 14th c. — and the hagiography" },
                { name: "Madhusūdana Sarasvatī, Appayya Dīkṣita", text: "16th c. — Advaita meets bhakti" },
              ],
            },
          ],
        },
        {
          kind: "sub",
          title: "Where the two schools part",
          paras: [
            "The question they split on sounds scholastic and is not: if ignorance is what produces the world, whose ignorance is it? Vācaspati Miśra's Bhāmatī answers that avidyā belongs to the individual — which keeps Brahman clean, and leaves each of us with a private ignorance. Padmapāda's line answers that it belongs to Brahman as its power — which keeps the world one, and puts the difficulty inside the absolute.",
            "Neither answer is comfortable, and the tradition has argued about it ever since.",
          ],
        },
        {
          kind: "sub",
          title: "His critics, who are also his measure",
          paras: [
            "Rāmānuja in the eleventh century and Madhva in the thirteenth built their Vedantas in direct argument against him — a qualified non-dualism in which the world and souls are Brahman's real body, and a dualism in which the difference between God and soul is permanent. Both commentaries on the Brahma Sūtras are, in large part, replies to his.",
            "That is its own kind of tribute. Four centuries after he wrote, the way to be a serious Vedantin was still to explain where Shankara had gone wrong.",
          ],
        },
        {
          kind: "sub",
          title: "And the modern reception",
          paras: [
            "In the nineteenth and twentieth centuries his Advaita became, for much of the world, what the phrase 'Hindu philosophy' meant — through Vivekananda, through the Theosophists, through Sanskrit chairs in European universities, and through a colonial appetite for an India that could be summarised.",
            "He might have found it strange. He wrote for people who had already read the texts, in a language that assumed a decade of prior study, and his most-quoted book is one he probably did not write.",
          ],
        },
        {
          kind: "figure",
          src: "/images/acharyas/shankara/shankara-painting.jpg",
          caption:
            "The icon he became. No likeness of him survives from his own century, or from the four after it, so every image of Shankara — this one included — is the tradition drawing what it believes.",
        },
      ],
    },

    // ── 11 ───────────────────────────────────────────────────
    {
      id: "places",
      eyebrow: "Still standing",
      title: "Where you can go",
      standfirst: "Six places, all reachable, where the tradition is kept in stone rather than in text.",
      blocks: [
        {
          kind: "list",
          items: [
            {
              label: "Kalady, Kerala",
              text: "His birthplace by tradition, on the Periyar. The Janmabhūmi Kṣetram and the Kīrti Stambha stand there.",
            },
            {
              label: "Omkareshwar, Madhya Pradesh",
              text: "The cave on the Narmada where tradition places his meeting with Govinda Bhagavatpāda. A 108-foot statue was raised above it in 2023.",
            },
            {
              label: "Sringeri, Karnataka",
              text: "The southern matha, the Śāradā shrine on the Tunga, and the Vidyāśaṅkara temple of 1338.",
            },
            {
              label: "Kedarnath, Uttarakhand",
              text: "Where tradition places his end at thirty-two. A statue was unveiled behind the temple in 2021, after the 2013 floods destroyed the earlier memorial.",
            },
            {
              label: "Joshimath, Uttarakhand",
              text: "Jyotirmaṭha, the northern seat, below Badari.",
            },
            {
              label: "Dvaraka and Puri",
              text: "The western and eastern seats, at the two coasts.",
            },
          ],
        },
        {
          kind: "figure",
          src: "/images/acharyas/shankara/kedarnath-statue.jpg",
          caption: "Kedarnath — the statue unveiled behind the temple in 2021, where tradition places his end.",
        },
      ],
    },
  ],
};
