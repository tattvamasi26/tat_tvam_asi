import type { AcharyaContent } from "../../acharya-pages";

// Sri Raghavendra Tirtha — English.
// Written from docs/RAGHAVENDRA.md, which carries the sources.

export const en: AcharyaContent = {
  tagline:
    "The Dvaita scholar whose commentaries made Madhva's philosophy teachable, and whose brindavana at Mantralaya draws more pilgrims than almost any saint's in the south.",
  when: "Born 1595 or 1598; entered the brindavana in 1671",
  facts: [
    ["Tradition", "Dvaita (Tattvavada), Madhva's school"],
    ["Born", "Bhuvanagiri, Tamil Nadu, as Venkatanatha"],
    ["Teacher", "Sudhindra Tirtha"],
    ["Matha", "Kumbakonam — now the Raghavendra Swamy Matha"],
    ["Brindavana", "Mantralaya, on the Tungabhadra, 1671"],
  ],
  quote:
    "Pūjyāya rāghavendrāya satyadharmaratāya ca — to the revered Raghavendra, devoted to truth and dharma.",

  sections: [
    // ── 1 ────────────────────────────────────────────────────
    {
      id: "who",
      eyebrow: "Why he matters",
      title: "Rayaru",
      standfirst:
        "To most people who say his name he is a living presence at Mantralaya. To the school he belonged to he is first a commentator.",
      blocks: [
        {
          kind: "para",
          text: "Devotees call him Rayaru, the master, and Guru Raghavendra. Families across Karnataka, Andhra and Tamil Nadu keep his picture in the shrine room, keep Thursday as his day, and travel to Mantralaya on the Tungabhadra to stand before the brindavana he entered in 1671. His following crosses caste, sect and creed, which is unusual for the head of a Madhva matha and is the first thing most writers about him remark on.",
        },
        {
          kind: "para",
          text: "Inside his own tradition he is also, and first, a scholar. He wrote some forty-five works in Sanskrit, and the commentary called Parimala gave him the title he is known by among Madhva scholars, Parimalacarya. His gift, by the judgment of the school's historian B. N. K. Sharma, was to make the hardest arguments of Dvaita compact and plain. This page gives both — the scholar the record shows, and the saint the devotion knows — and says which is which.",
        },
        {
          kind: "verse",
          sanskrit: "पूज्याय राघवेन्द्राय सत्यधर्मरताय च ।\nभजतां कल्पवृक्षाय नमतां कामधेनवे ॥",
          iast: "pūjyāya rāghavendrāya satyadharmaratāya ca |\nbhajatāṃ kalpavṛkṣāya namatāṃ kāmadhenave ||",
          translation:
            "To the revered Raghavendra, devoted to truth and dharma — a wishing tree to those who worship him, a wish-giving cow to those who bow.",
          attribution: "The opening verse of the Raghavendra Stotra, by his disciple Appannacharya",
        },
        {
          kind: "terms",
          title: "Four words this page uses throughout",
          terms: [
            { term: "Rayaru", text: "\"The master\" — the Kannada name by which devotees speak of him." },
            { term: "Brindavana", sanskrit: "वृन्दावनम्", text: "The shrine built over the place where a Madhva ascetic is laid to rest, in the form of a tulasi stand. His is at Mantralaya." },
            { term: "Aradhana", sanskrit: "आराधना", text: "The yearly observance of the day he entered the brindavana, kept over three days." },
            { term: "Parimala", sanskrit: "परिमलः", text: "\"Fragrance\" — his commentary on Jayatirtha's Nyaya Sudha, and the source of his scholarly title." },
          ],
        },
      ],
    },

    // ── 2 ────────────────────────────────────────────────────
    {
      id: "when",
      eyebrow: "The dates",
      title: "When he lived",
      standfirst: "Unlike Shankara's, his dates are close to the record. Two of them still disagree.",
      blocks: [
        {
          kind: "para",
          text: "His birth is given as 1595 in some accounts and 1598 in others. The start of his pontificate is given as 1621, 1623 and 1624: he took sannyasa in 1621, and his teacher Sudhindra Tirtha died in 1623, after which he led the matha. The end is not in doubt. He entered the brindavana at Mantralaya in 1671.",
        },
        {
          kind: "timeline",
          title: "From Bhuvanagiri to Mantralaya",
          note: "Two birth years are in circulation, and both are drawn.",
          marks: [
            { year: 1595, when: "1595", label: "Born, by one account", text: "As Venkatanatha, at Bhuvanagiri" },
            { year: 1598, when: "1598", label: "Born, by another" },
            { year: 1621, when: "1621", label: "Sannyasa", text: "From Sudhindra Tirtha; the Raghavendra Vijaya's date" },
            { year: 1623, when: "1623", label: "Sudhindra Tirtha dies", text: "He leads the matha from here, or from 1624" },
            { year: 1663, when: "1663", label: "Grant from Mysore", text: "From Dodda Devaraya Odeyar" },
            { year: 1671, when: "1671", label: "Enters the brindavana", text: "At Mantralaya, on Shravana krishna dvitiya", emphasis: true },
          ],
          ticks: [
            { year: 1600, label: "1600" },
            { year: 1625, label: "1625" },
            { year: 1650, label: "1650" },
            { year: 1675, label: "1675" },
          ],
        },
        {
          kind: "para",
          text: "These were the years after Vijayanagara. His family had served its court — his great-grandfather is remembered as a tutor to Krishnadevaraya — and moved south to Kanchi when it fell. He lived his working life between the Nayaks of Thanjavur and Madurai, the Adil Shahis of Bijapur, and the Wodeyars of Mysore.",
        },
      ],
    },

    // ── 3 ────────────────────────────────────────────────────
    {
      id: "sources",
      eyebrow: "Before the story",
      title: "How anything about him is known",
      blocks: [
        {
          kind: "para",
          text: "Five kinds of witness exist, and they are not of equal weight. The page leans on the first three for the life, and gives the last two as what they are.",
        },
        {
          kind: "list",
          title: "The witnesses",
          items: [
            { label: "His own works", text: "About forty-five in Sanskrit, their authorship not in question. They show the scholar directly." },
            { label: "The Raghavendra Vijaya", text: "A biography by Narayanacharya, described as contemporaneous. It is the source for his family, his studies and his sannyasa — and it is a hagiography, written to praise." },
            { label: "Grants and records", text: "The grant from Mysore in 1663, and the matha's own succession list." },
            { label: "The Raghavendra Stotra", text: "A hymn by his disciple Appannacharya, recited by devotees to this day. It tells what he meant to those around him, not what he did." },
            { label: "A colonial gazetteer", text: "W. Francis's Madras District Gazetteer for Bellary (1916) recorded the story of Sir Thomas Munro's visit. It is a record that the story was told, not of the event." },
          ],
        },
        {
          kind: "para",
          text: "Around all of this has grown a very large literature of miracles — healings, the dead revived, appearances after 1671. It is the reason most people first hear his name, and it is devotion's to keep. This page records where it is told and does not retell it as history.",
        },
      ],
    },

    // ── 4 ────────────────────────────────────────────────────
    {
      id: "life",
      eyebrow: "As the record and the Raghavendra Vijaya give it",
      title: "The life",
      blocks: [
        {
          kind: "journey",
          title: "The route",
          stops: [
            { place: "Bhuvanagiri", text: "Born Venkatanatha, to Thimmanna Bhatta and Gopikamba, in a Kannada-speaking Madhva family of the Gautama gotra known for musicians and scholars." },
            { place: "Madurai", text: "After his father's early death, his brother-in-law Lakshmi Narasimhacharya sees to his education." },
            { place: "Kumbakonam", text: "He studies under Sudhindra Tirtha, head of the matha there, and marries." },
            { place: "Thanjavur", text: "His debating draws Sudhindra's notice; reluctantly, he takes sannyasa in 1621 and the name Raghavendra Tirtha." },
            { place: "The south", text: "Pilgrimage to Rameswaram, Ramnad, Srirangam and Madurai." },
            { place: "The west and north", text: "Udupi and Subrahmanya; then Pandharpur, Kolhapur and Bijapur, where he is said to have won debates against Advaitins." },
            { place: "Mysore", text: "By 1663, a grant from Dodda Devaraya Odeyar." },
            { place: "Mantralaya", text: "The village of Manchale on the Tungabhadra, where he enters the brindavana in 1671." },
          ],
        },
        {
          kind: "sub",
          title: "The household he left",
          paras: [
            "He was a married man with a son, Lakshminarayanacharya, when Sudhindra Tirtha asked him to take the robe, and he hesitated. The Raghavendra Vijaya makes much of the hesitation and of the poverty the family lived in. Tradition adds that his wife, Sarasvati, died grieving soon after. That is the tradition's account and is given as such.",
          ],
        },
        {
          kind: "sub",
          title: "A musician as well",
          paras: [
            "His family was known for music, and he played the veena. He composed songs in Kannada under the signature Venugopala; Indu enage Govinda, which this site's bhajans carry, is attributed to him. In a school whose great Kannada singers, the Haridasas, were mostly not its pontiffs, it is a reminder that the two traditions were never far apart.",
          ],
        },
        {
          kind: "figure",
          src: "/images/owner/raghavendra-sketch.jpg",
          caption:
            "The way he is drawn now: seated, a small image of Krishna held to his cheek, a staff in his hand.",
        },
      ],
    },

    // ── 5 ────────────────────────────────────────────────────
    {
      id: "works",
      eyebrow: "The firm ground",
      title: "What he wrote",
      standfirst: "About forty-five works in Sanskrit, and a few songs in Kannada. None of the Sanskrit is in doubt.",
      blocks: [
        {
          kind: "tiers",
          title: "His works",
          tiers: [
            {
              name: "Commentaries, his by every account",
              count: "about 45 in all",
              tone: "sure",
              items: [
                "Nyaya Sudha Parimala — on Jayatirtha's Nyaya Sudha",
                "Tattvaprakashika Bhavadipa — on Jayatirtha's Tattvaprakashika",
                "Tantradipika — on the Brahma Sutras",
                "Tattvamanjari — on Madhva's Anu Bhashya",
                "A commentary on Vyasatirtha's Tatparya Chandrika",
                "Pramana Paddhati Bhavadipa — on Jayatirtha's Pramana Paddhati",
                "Bhatta Sangraha — on the Purva Mimamsa Sutras",
                "Mantrartha Manjari — on the first three adhyayas of the Rigveda",
                "Khandarthas — on about ten Upanishads",
                "Commentaries on the Bhagavad Gita",
              ],
            },
            {
              name: "Songs in Kannada, attributed",
              tone: "attributed",
              items: ["Indu enage Govinda, and other songs signed Venugopala"],
            },
          ],
        },
        {
          kind: "sub",
          title: "The Parimala",
          paras: [
            "Madhva's school had its great systematiser in Jayatirtha, whose Nyaya Sudha is a vast commentary on Madhva's own commentary on the Brahma Sutras. Raghavendra's Parimala, nearly twenty thousand granthas long, is a commentary on that — the third layer of a single argument. It is his largest work and the one his school prizes most, which is why its scholars call him Parimalacarya.",
          ],
        },
        {
          kind: "sub",
          title: "A Dvaitin reading Mimamsa",
          paras: [
            "The Bhatta Sangraha reads the Purva Mimamsa Sutras, the ritualists' text, from Dvaita's side. Vedanta schools usually argued with Mimamsa; he set out to show that its method of reading the Veda could be held on Madhva's terms. In the Tattvaprakashika Bhavadipa he answered the Advaitin critics of his own day, Appayya Dikshita and Bhattoji Dikshita, by name.",
          ],
        },
      ],
    },

    // ── 6 ────────────────────────────────────────────────────
    {
      id: "teaching",
      eyebrow: "What he taught",
      title: "Tattvavada — the world is real, and so is difference",
      blocks: [
        {
          kind: "para",
          text: "He did not found a philosophy; he explained Madhva's, which calls itself Tattvavada, the doctrine of what is real. Where Advaita says that the self and Brahman are one and the world's many-ness is appearance, Tattvavada says the opposite on both counts, and stakes everything on it: the world is real, the souls are many, and God is other than them all.",
        },
        {
          kind: "list",
          title: "The five differences",
          items: [
            { label: "God and the soul", text: "No soul is, or becomes, Vishnu." },
            { label: "God and matter", text: "The world is not God's appearance; it is real, and it depends on him." },
            { label: "Soul and soul", text: "Souls are many and stay distinct, even in liberation." },
            { label: "Soul and matter", text: "The self is not the body or anything it owns." },
            { label: "Matter and matter", text: "Things differ from one another really, not only in name." },
          ],
        },
        {
          kind: "terms",
          title: "The words it turns on",
          terms: [
            { term: "Svatantra", sanskrit: "स्वतन्त्रः", text: "Independent. Only Vishnu is; everything else exists by depending on him." },
            { term: "Paratantra", sanskrit: "परतन्त्रः", text: "Dependent — the condition of every soul and every thing." },
            { term: "Taratamya", sanskrit: "तारतम्यम्", text: "Gradation. Souls differ in their nature and capacity, and remain graded in liberation." },
          ],
        },
        {
          kind: "para",
          text: "Liberation, on this account, is by the grace of Vishnu, and the way to it is bhakti grounded in right knowledge of him. That is why a Madhva scholar's commentaries and a devotee's songs are not two different religions: the knowledge is for the sake of the devotion.",
        },
      ],
    },

    // ── 7 ────────────────────────────────────────────────────
    {
      id: "mantralaya",
      eyebrow: "Where he rests",
      title: "Mantralaya",
      blocks: [
        {
          kind: "para",
          text: "Mantralaya is a village on the Tungabhadra in the Kurnool district of Andhra Pradesh, on the Karnataka border. In his time it was called Manchale. He entered the brindavana there in 1671, on the second day of the dark half of Shravana, and the matha he led, founded at Kumbakonam, has since made it its home.",
        },
        {
          kind: "sub",
          title: "The grant of the village",
          paras: [
            "The matha's tradition credits the grant of Manchale to Siddi Masud, the Adil Shahi general who held Adoni, and tells of a test he set and a miracle that answered it. No document of the grant was found in preparing this page. The tradition also says he chose the place because Prahlada had performed a sacrifice there in an earlier age.",
          ],
        },
        {
          kind: "sub",
          title: "Present in the brindavana",
          paras: [
            "Devotees hold that he entered the brindavana alive and is present in it still. That belief is the centre of the pilgrimage, and it is the reason the place is visited as it is. It is stated here as what devotees hold.",
          ],
        },
        {
          kind: "rows",
          title: "The Aradhana",
          rows: [
            { when: "Shravana krishna pratipada", name: "Purva Aradhana", text: "The day before." },
            { when: "Shravana krishna dvitiya", name: "Madhya Aradhana", text: "The day he entered the brindavana." },
            { when: "Shravana krishna tritiya", name: "Uttara Aradhana", text: "The day after, with the procession of the chariot." },
          ],
        },
        {
          kind: "sub",
          title: "The Munro story",
          paras: [
            "W. Francis's district gazetteer for Bellary, published in 1916, recorded that Sir Thomas Munro, sent to resume the matha's endowment, saw and spoke with Raghavendra at the brindavana and let the endowment stand. Nothing else documents the meeting. That a colonial gazetteer printed the story is itself a measure of how widely it was told.",
          ],
        },
        {
          kind: "figure",
          src: "/images/acharyas/raghavendra/mantralayam-matha.jpg",
          caption: "The matha at Mantralaya today.",
        },
      ],
    },

    // ── 8 ────────────────────────────────────────────────────
    {
      id: "lineage",
      eyebrow: "The lineage",
      title: "From Madhva, and after",
      blocks: [
        {
          kind: "lineage",
          title: "The line of the matha, as it gives itself",
          generations: [
            { label: "Founder of the school", people: [{ name: "Madhvacharya", text: "13th century" }] },
            { label: "Its systematiser", people: [{ name: "Jayatirtha", text: "Sixth in the line, after Padmanabha, Narahari, Madhava and Akshobhya" }] },
            { label: "Founder of the matha", people: [{ name: "Vibudhendra Tirtha", text: "At Kumbakonam, 15th century" }] },
            { label: "His teacher's teacher", people: [{ name: "Vijayindra Tirtha" }] },
            { label: "His teacher", people: [{ name: "Sudhindra Tirtha", text: "Died 1623" }] },
            { label: "Seventeenth from Madhva", people: [{ name: "Raghavendra Tirtha" }] },
            { label: "His successor", people: [{ name: "Yogindra Tirtha" }] },
            { label: "Today", people: [{ name: "Subudhendra Tirtha", text: "The present pontiff" }] },
          ],
        },
        {
          kind: "sub",
          title: "The three mathas",
          paras: [
            "The matha is one of three, the mathatraya, that carry Jayatirtha's line: with the Uttaradi matha and the Vyasaraja matha. It has been called the Kumbakonam matha, the Dakshinadi matha and the Vijayindra matha, and has been known by his name since his time.",
          ],
        },
        {
          kind: "sub",
          title: "The tradition of his earlier births",
          paras: [
            "Madhva tradition holds that he had been Prahlada, the child devotee of Narasimha, and before that Shankukarna, and after Prahlada Bahlika in the Mahabharata and Vyasatirtha, the great Madhva scholar of Vijayanagara. This is the tradition's belief about him, and the page gives it as that.",
          ],
        },
      ],
    },

    // ── 9 ────────────────────────────────────────────────────
    {
      id: "places",
      eyebrow: "Still standing",
      title: "Where he can be found",
      blocks: [
        {
          kind: "list",
          items: [
            { label: "Mantralaya", text: "The brindavana and the matha, on the Tungabhadra, Kurnool district, Andhra Pradesh." },
            { label: "Bhuvanagiri", text: "His birthplace, in Tamil Nadu." },
            { label: "Kumbakonam", text: "Where the matha was founded and where he studied and led it." },
            { label: "Navabrindavana", text: "On an island in the Tungabhadra near Hampi, where his teacher Sudhindra Tirtha rests among nine brindavanas." },
            { label: "Brindavanas of his", text: "Mrittika brindavanas — shrines made with earth from Mantralaya — stand in towns across the south, and many keep the Aradhana." },
          ],
        },
        {
          kind: "para",
          text: "The songs the Haridasas wrote to him — Vijaya Dasa, Gopala Dasa and Jagannatha Dasa among them — are sung at all of these places. This site's bhajans carry a group of them under his name.",
        },
        {
          kind: "figure",
          src: "/images/acharyas/raghavendra/mantralayam-court.jpg",
          caption: "The approach to the matha at Mantralaya.",
        },
      ],
    },
  ],
};
