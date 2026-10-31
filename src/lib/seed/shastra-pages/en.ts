import type { BranchBook } from "./types";

// The six branches with no section of their own, written out in
// English. Dates are given as the usual placing, not as settled.

export const EN: BranchBook = {
  vedanta: {
    about: [
      "Vedānta means the end of the Veda, in two senses at once: the Upaniṣads that close each Vedic collection, and the conclusion the whole Veda is held to reach.",
      "It is not a single school. A teacher founds one by writing commentaries on three books — the Upaniṣads, the Gītā and the Brahma Sūtras — and because the books are fixed while the readings are not, the result was several schools that agree on the books and disagree about almost everything they say.",
      "The best known are Advaita, from Shankara; Viśiṣṭādvaita, from Rāmānuja; and Dvaita, from Madhva. Others — Nimbārka's, Vallabha's, the school that grew from Caitanya — took their own positions between them.",
    ],
    texts: {
      "brahma-sutras":
        "Five hundred and fifty-five aphorisms in four chapters: the first shows that the Upaniṣads speak with one voice, the second answers the schools that disagree, the third sets out the means, and the fourth the result. Attributed to Bādarāyaṇa. A sūtra is often three or four words, which is why no one reads it without a commentary.",
    },
  },

  vedangas: {
    about: [
      "Six disciplines that exist to keep the Veda correct: how it is pronounced, how its words are formed, how its lines are measured, what its rare words mean, when its rites fall, and how they are performed.",
      "The earliest list is in the Muṇḍaka Upaniṣad, which names all six — and then calls them the lower knowledge, beside the knowledge of the imperishable. A later verse makes them the Veda's body: metre its feet, ritual its hands, astronomy its eyes, etymology its ears, phonetics its nose and grammar its mouth.",
      "Out of them came some of the most exact work in Indian thought. Pāṇini's grammar is still studied by linguists; Piṅgala's treatment of metre counts patterns the way combinatorics does.",
    ],
    texts: {
      shiksha:
        "How each sound is made and where it is made in the mouth. The schools of each Veda kept their own phonetic manuals, and the recitation patterns they trained — the words repeated forwards, backwards and interwoven — made it possible to notice a single dropped syllable. That is how a text this old came down by voice with so little change.",
      vyakarana:
        "Pāṇini's Aṣṭādhyāyī, usually placed around the fourth century before the common era, describes the whole of Sanskrit in about four thousand rules. Kātyāyana added notes, and Patañjali's Great Commentary argued with both. It is one of the most compressed descriptions of any language ever written.",
      chandas:
        "Piṅgala's treatise on metre. A Vedic metre is a count of syllables — twenty-four for the Gāyatrī, thirty-two for the Anuṣṭubh, forty-four for the Triṣṭubh — and Piṅgala worked out how to list every pattern of long and short syllables systematically, in a way mathematicians now recognise.",
      nirukta:
        "Yāska's Nirukta explains the obscure words of the Veda, working from older word-lists. It records an argument still worth reading: whether every noun comes from a verb. Yāska held that it does, and named the grammarians who said it does not.",
      jyotisha:
        "The Vedāṅga Jyotiṣa, attributed to Lagadha, is a calendar: it exists to fix the moments of the rites by the sun and moon. Horoscopes are not part of it; casting them came later, with Greek astrology, and is a different discipline under the same name.",
      kalpa:
        "Four kinds of manual. The Śrauta Sūtras set out the great public rites; the Gṛhya Sūtras the household rites and the saṃskāras; the Dharma Sūtras conduct and law; and the Śulba Sūtras the geometry of the fire-altars, which states the relation of a right triangle's sides. The rites this site describes are laid down here.",
    },
  },

  dharma: {
    about: [
      "Writing on duty, conduct, law and penance, usually divided three ways: how to live, how disputes are settled, and how wrongs are made good.",
      "It is not a single law-book and never was. It is a literature of competing opinions, in which one authority is quoted against another and the commentators labour to reconcile them. Treating any one text as the law is a colonial habit: the courts of the nineteenth century took two or three of these books and administered them as codes.",
      "Some of what is in them is hard to read now, on caste and on women above all. This site says so where it describes them, and quotes nothing from them as a rule for anybody.",
    ],
    texts: {
      manusmriti:
        "About two thousand seven hundred verses in twelve chapters, usually placed between the second century before and the third century after the common era. The most quoted text of the literature and the most contested: B. R. Ambedkar publicly burnt a copy in 1927. It was one authority among many in its own tradition, not the constitution the colonial courts took it for.",
      yajnavalkya:
        "About a thousand verses in three books — conduct, procedure and penance — and more orderly than Manu. Vijñāneśvara's commentary on it, the Mitākṣarā, became the basis of family and inheritance law across most of India under the colonial courts; Bengal followed a different commentary instead.",
    },
  },

  agamas: {
    about: [
      "How a temple is built, how an image is made present in it, and how it is worshipped every day. Almost everything done in a temple today comes from here rather than from the Veda.",
      "The Āgamas claim an authority of their own. Some Śaiva and Vaiṣṇava traditions hold them equal to the Veda; others treat them as subordinate to it; and the argument between those positions is old. This site records it and does not settle it.",
      "A Śaiva Āgama is traditionally in four parts: knowledge, meditation, ritual action, and conduct. The ritual part is the one temples run on.",
    ],
    texts: {
      "shaiva-agama":
        "Twenty-eight Āgamas in the reckoning of the Śaiva Siddhānta, the Kāmika first among them. The great temples of Tamil Nadu are run by them, and their priests are trained in them.",
      pancharatra:
        "The Vaiṣṇava Āgama of the Pāñcarātra, traditionally a hundred and eight saṃhitās. Rāmānuja defended its authority against those who said it was outside the Veda. Śrīraṅgam follows it; Tirumala follows the other Vaiṣṇava Āgama, the Vaikhānasa.",
      shakta:
        "Texts of the Goddess as the supreme power. In the south the best-known lineage is Śrīvidyā, with the Śrī Cakra as its diagram. More misunderstood than any other part of the tradition, mostly by people who have not read it.",
    },
  },

  itihasa: {
    about: [
      "Iti ha āsa — so it was. The two epics, held to tell what happened rather than what happens in every age, which is how they are told apart from the Purāṇas.",
      "The Mahābhārata calls itself the fifth Veda, and the Rāmāyaṇa is called the first poem. Between them they carry most of the stories everyone knows.",
      "Neither has ever been only one text. Each was retold in every Indian language — Kamban in Tamil, Tulasīdās in Avadhi, Pampa and Kumāravyāsa in Kannada — and those retellings, not the Sanskrit, are what most people have heard.",
    ],
    texts: {
      ramayana:
        "Vālmīki's poem, in seven books and about twenty-four thousand verses. Scholars generally hold the first and last books to be later than the five between them. A critical edition was prepared at Baroda from manuscripts across India.",
      mahabharata:
        "Attributed to Vyāsa, in eighteen books — a hundred thousand verses by the traditional count, fewer in the critical edition prepared at Pune over nearly half a century. The Gītā is a small part of its sixth book.",
    },
  },

  prakarana: {
    about: [
      "Short books that teach one thing clearly. They are what a student is handed before the Upaniṣads and the commentaries, and most of them are Advaita.",
      "Many carry Shankara's name, and for several of them the attribution is doubted. This site's Shankara page sorts his works into those accepted, doubted and attributed, and the notes below follow it.",
    ],
    texts: {
      "tattva-bodha":
        "A primer of the terms of Advaita in question and answer: what the self is, what the bodies are, what the three states are. Traditionally attributed to Shankara; the attribution is doubtful.",
      "atma-bodha":
        "Sixty-eight verses on knowledge of the self, using images — the crystal and the red flower, the rope and the snake. Traditionally attributed to Shankara.",
      vivekachudamani:
        "Five hundred and eighty verses, the best known of all these books. Its attribution to Shankara is doubted by modern scholarship, and this site does not count it among his works.",
      panchadashi:
        "Fifteen chapters by Vidyāraṇya, who headed the Sringeri matha in the fourteenth century — the most thorough single statement of Advaita after Shankara's own commentaries.",
      "drg-drshya-viveka":
        "Forty-six verses separating the seer from the seen. Attributed variously to Bhāratītīrtha, to Vidyāraṇya, and to Shankara.",
      aparokshanubhuti:
        "A hundred and forty-four verses on direct knowledge rather than inference. Traditionally attributed to Shankara, and that too is questioned.",
    },
  },
};
