import type { DepthBook } from "./types";

// The sequence of each rite and festival, in English. Described as it
// is commonly done in the south, with the larger differences noted in
// the step where they fall. Families and traditions vary in detail;
// the rite's own page says where they disagree.

export const EN: DepthBook = {
  // ══ Rites of passage ════════════════════════════════════

  simantonnayana: {
    steps: [
      ["The fire", "A small homa is kindled and the rite is declared — whose it is, and for whom."],
      ["The parting", "The husband parts his wife's hair from the forehead back, with a porcupine quill or a sprig of fig leaves, while verses are sung."],
      ["The bangles", "The women of both families slip glass bangles onto her wrists, one by one; the sound is held to reach the child."],
      ["The lap filled", "Her lap is filled with fruit, rice, betel and flowers, and she is given the foods she has been craving."],
      ["Songs", "Older women sing the songs kept for the day, and she is usually sent to her mother's house for the birth."],
    ],
    needs: ["Glass bangles", "Flowers for the hair", "Fruit and rice for the lap", "A new sari", "Turmeric and kumkum", "A porcupine quill or fig sprig"],
  },

  jatakarma: {
    steps: [
      ["Before the cord is cut", "In the texts the rite comes first of all, while the child is still joined to the mother."],
      ["Honey and ghee", "The father touches the child's tongue with honey and ghee, often from a gold ring or wire."],
      ["The word", "He says vāk — speech — close to the child's ear, so that the first word it hears is the word for words."],
      ["For a long life", "Verses asking for a long life are said over the child, and it is given to the mother to feed."],
      ["In practice", "Today the cord is cut in a hospital first, and the rite, where it is kept, is folded into the naming a few days later."],
    ],
    needs: ["Honey", "Ghee", "A gold ring or gold wire", "Water", "A lamp"],
  },

  namakarana: {
    steps: [
      ["The house made clean", "The days of birth-impurity end, and a puṇyāhavācana is done to make the house ready for guests again."],
      ["The name chosen", "The name is often drawn from the syllable of the birth-star, a family deity, or a grandparent, and many families give two — one used, one kept."],
      ["Written in rice", "The name is written with a gold ring in a plate of raw rice."],
      ["Said into the ear", "The father says the name into the child's right ear, usually three times; then the elders say it aloud."],
      ["The cradle", "In Karnataka the child is laid in a decorated cradle for the first time while the women sing lullabies kept for the day."],
    ],
    needs: ["A plate of raw rice", "A gold ring", "A decorated cradle", "New clothes for the child", "Flowers and sweets", "A lamp"],
  },

  annaprashana: {
    steps: [
      ["The month", "Commonly the sixth month, when the child can sit and take something other than milk."],
      ["A small worship", "The family deity is worshipped first, and the food is offered before it is given."],
      ["The first mouthful", "Rice cooked soft with ghee — often pāyasa, rice in milk — is given from a silver spoon by the father or the maternal uncle."],
      ["The choosing", "In many houses a book, a pen, gold and food are set before the child, and what it reaches for is watched as a game, not as a prophecy."],
      ["At a temple", "In Kerala the first rice is often given at Guruvayur, where the rite is done for many children every morning."],
    ],
    needs: ["Rice and ghee, or pāyasa", "A silver spoon and bowl", "New clothes", "Objects for the choosing", "A lamp"],
  },

  chudakarma: {
    steps: [
      ["The year", "Commonly in the first or third year; odd years are preferred in most families."],
      ["The vow", "Many families vow the child's first hair to a particular temple and wait to make the journey."],
      ["The shaving", "The head is shaved, and in the older practice a tuft is left at the crown — the śikhā."],
      ["Given away", "The hair is offered at the temple, or put into water, never simply thrown out."],
      ["The bath", "The child is bathed, smeared with sandal paste, dressed new and taken for darśana."],
    ],
    needs: ["A barber, or the temple's", "Sandal paste", "New clothes", "An offering for the temple"],
  },

  upanayana: {
    steps: [
      ["The day before", "The family's deities and ancestors are invited, and a homa is kindled that will be fed throughout."],
      ["Shaved and bathed", "The boy's head is shaved, he bathes, and he eats one last meal with his mother — the last as a child."],
      ["The thread", "The yajñopavīta of three strands is put over his left shoulder, with a girdle of muñja grass, a staff and a strip of deerskin."],
      ["The Gāyatrī", "Under a cloth that covers both, the ācārya — usually the father — says the Gāyatrī into his ear, and he repeats it after him."],
      ["The first alms", "He asks for alms, and his mother gives first. Then he feeds the sacred fire with sticks for the first time."],
      ["From that day", "He is expected to keep the sandhyāvandana three times daily, which is what the thread stands for."],
    ],
    needs: ["The sacred thread", "A muñja-grass girdle", "A palāśa staff", "A small piece of deerskin", "Firewood and ghee for the homa", "New white cloth"],
  },

  vivaha: {
    steps: [
      ["The pilgrimage that is turned back", "In Karnataka and Tamil Nadu the groom sets out for Kāśī as if renouncing, and the bride's father stops him and offers his daughter instead."],
      ["The giving", "In the kanyādāna the bride's father pours water over her hand into the groom's, and gives her."],
      ["The thread", "In the south the groom ties the māṅgalya — the tāli — around her neck with three knots. This is the act most families count as the wedding."],
      ["The hand taken", "He takes her right hand in the pāṇigrahaṇa, and her brother pours puffed rice into her hands to be offered into the fire."],
      ["Seven steps", "In the saptapadī they take seven steps together beside the fire, a vow at each. On the seventh the marriage is complete; Indian law says so too."],
      ["The star", "That night she is shown Arundhatī, the faint star beside Vasiṣṭha in the Great Bear, as the wife who never left."],
    ],
    needs: ["The māṅgalya", "Toe-rings", "Puffed rice", "A grindstone to step on", "Firewood and ghee", "Akṣate — rice with turmeric", "New clothes"],
  },

  antyeshti: {
    steps: [
      ["At the house", "The body is washed, laid with the head to the south, dressed and garlanded, and a lamp is lit beside it."],
      ["Carried", "It is carried to the cremation ground on a bier. The son who will perform the rite walks in front with fire carried in a pot."],
      ["The pyre", "He walks round the pyre with water and fire, and lights it. In many families the skull is broken while the body burns — the kapāla-kriyā."],
      ["The bones", "On the second or third day the bones are gathered and later given to a river, the Gaṅgā if the family can reach it."],
      ["Ten days", "For ten days rice-balls are offered, one each day, to the one who has died, now held to be travelling."],
      ["The joining", "On the eleventh or twelfth day the sapiṇḍīkaraṇa joins the dead to the ancestors, and on the thirteenth the house is out of mourning."],
    ],
    needs: ["Firewood", "Ghee", "A clay pot for fire", "Sesame seeds", "Darbha grass", "New cloth for the body", "Rice for the piṇḍas"],
  },

  // ══ Every day ═══════════════════════════════════════════

  sandhyavandana: {
    steps: [
      ["Sipping water", "Ācamana: water is sipped three times from the palm, with names of Viṣṇu."],
      ["Breath", "Prāṇāyāma: the breath is held through a set formula, and the intention for the rite is stated."],
      ["Sprinkling", "Mārjana: water is sprinkled on the head with the Āpo hi ṣṭhā verses."],
      ["Water to the sun", "Arghya: water is poured from the cupped palms towards the sun — three times at dawn and dusk, twice at noon in some schools."],
      ["The Gāyatrī", "The Gāyatrī is repeated a set number of times — a hundred and eight, twenty-eight or ten — facing the sun."],
      ["Standing before it", "Upasthāna: verses to Mitra at dawn and Varuṇa at dusk, then the person names his lineage and bows."],
    ],
    needs: ["Water in a small vessel", "A spoon or the palm", "A seat", "Facing east at dawn, west at dusk"],
  },

  puja: {
    steps: [
      ["Calling", "The deity is called in mind and invited into the image, then offered a seat."],
      ["Washing", "Water for the feet, for the hands and to sip, then a bath — often of milk, curd and water."],
      ["Dressing", "Cloth, a thread, sandal paste, kumkum and flowers are offered, one after another."],
      ["Light and incense", "Incense is waved, then a lamp, then food is set before the deity and covered."],
      ["Āratī", "Camphor or a lamp is waved in circles before the image, and the light is passed round for the family to take."],
      ["Leaving", "The deity is bowed to and walked round, and the food becomes prasāda."],
    ],
    needs: ["Water", "Flowers", "Sandal paste and kumkum", "Incense", "A ghee lamp", "Camphor", "Food to offer", "A bell"],
  },

  deepa: {
    steps: [
      ["Before dark", "The lamp is lit at the moment the light goes, not after it has gone."],
      ["Where", "At the doorway, before the household shrine, or at the tulasī in the courtyard."],
      ["The lamp", "A brass or clay lamp with ghee or sesame oil and a cotton wick, often two wicks twisted together."],
      ["A verse", "Many houses say a short verse to the lamp, Śubhaṃ karoti being the commonest."],
      ["Left burning", "It is left to burn out on its own and not blown out; when it must be put out, the flame is pressed with a flower."],
    ],
    needs: ["A brass or clay lamp", "Ghee or sesame oil", "Cotton wicks", "A matchbox kept for the purpose"],
  },

  // ══ Days kept ═══════════════════════════════════════════

  ekadashi: {
    steps: [
      ["The day before", "On daśamī one meal is taken, and nothing at night."],
      ["The fast", "On ekādaśī grains are not eaten, rice above all. Some take only water, some fruit and milk; the strictest take nothing."],
      ["Waking", "The day is kept with Viṣṇu's names, the Gītā or the Bhāgavata, and many stay awake into the night."],
      ["Breaking it", "On dvādaśī the fast is broken after sunrise within a fixed window, the pāraṇa, usually with a simple meal."],
      ["Which day", "Smārta and Vaiṣṇava calendars sometimes keep it a day apart, because the Vaiṣṇavas will not take an ekādaśī that daśamī has touched at dawn."],
    ],
    needs: ["A pañcāṅga for the day and the pāraṇa time", "Fruit and milk, for those who take them", "Tulasī for the worship"],
  },

  pradosha: {
    steps: [
      ["The hour", "The twilight of trayodaśī — roughly an hour and a half on either side of sunset."],
      ["The fast", "Many keep a fast through the day and eat only after the worship."],
      ["At the temple", "Śiva is bathed with milk, curd, honey and water, and Nandi is bathed first."],
      ["Between the horns", "Devotees look at the liṅga between Nandi's horns, which is the darśana the hour is kept for."],
      ["Which days most", "A pradoṣa on a Monday or a Saturday is held to count for more."],
    ],
    needs: ["Milk for the abhiṣeka", "Bilva leaves", "A ghee lamp", "Vibhūti"],
  },

  "sankashtahara-chaturthi": {
    steps: [
      ["The day", "The fourth day of the waning moon, every month."],
      ["The fast", "Food is not taken until the moon has risen."],
      ["The worship", "Gaṇeśa is worshipped in the evening, with dūrvā grass and modaka."],
      ["The moon", "Water is offered to the moon when it rises, and only then is the fast broken."],
      ["Tuesday", "When it falls on a Tuesday it is Aṅgāraka chaturthī and held to be the strongest of the year."],
    ],
    needs: ["Dūrvā grass", "Modaka", "Red flowers", "Water for the moon"],
  },

  chaturmasya: {
    steps: [
      ["It begins", "On the ekādaśī of Āṣāḍha, when Viṣṇu is held to lie down to sleep."],
      ["Monks stay put", "Sannyāsins stop wandering and spend the four months in one place, teaching. The mathas' heads keep it publicly."],
      ["Things given up", "Householders give up one food a month in a common scheme: green vegetables, then curd, then milk, then pulses."],
      ["No weddings", "Marriages and house-entries are not held through the period."],
      ["It ends", "On the dvādaśī of Kārtika, when Viṣṇu wakes and the Tulasī marriage reopens the season."],
    ],
    needs: ["A vow, made at the start", "A pañcāṅga", "Discipline about food"],
  },

  // ══ The fire ════════════════════════════════════════════

  homa: {
    steps: [
      ["The intention", "The saṅkalpa states the occasion, the day by the lunar calendar, and the purpose."],
      ["The fire set up", "A pit or a square of sand is prepared and fire is installed in it with verses."],
      ["Offerings", "Ghee is poured with each svāhā, then sticks and the materials proper to the homa — grains, herbs, sesame."],
      ["Which homa", "Gaṇapati homa before a beginning, Navagraha for the planets, Mṛtyuñjaya for health; each has its own verses and its own materials."],
      ["The full offering", "The pūrṇāhuti — often a coconut wrapped in cloth — is given last, and the fire is not put out but left to die."],
      ["The ash", "The ash is taken as prasāda and touched to the forehead."],
    ],
    needs: ["A homa-kuṇḍa or bricks and sand", "Dry wood and samidh sticks", "Ghee", "A long ladle", "Grains and herbs proper to the homa", "A coconut", "Darbha grass"],
  },

  agnihotra: {
    steps: [
      ["The fire first", "Only a man who has set up the household fires in the agnyādhāna, with his wife, may keep it."],
      ["Twice a day", "Milk is offered into the fire at sunrise and sunset, at the exact moment."],
      ["Two offerings", "Each time two: one to Agni or Sūrya, one to Prajāpati."],
      ["For life", "The fires may not be allowed to go out for as long as the keeper lives, and he is cremated with them."],
    ],
    needs: ["The three fires", "Milk from the household's own cow, ideally", "A wooden spoon", "A precise knowledge of sunrise"],
  },

  // ══ For those who have gone ═════════════════════════════

  shraddha: {
    steps: [
      ["The day", "Fixed by the lunar tithi of the death, not its date, and kept every year."],
      ["The thread reversed", "The performer wears the sacred thread over the right shoulder, as he does for every rite to the ancestors."],
      ["The invited", "Brāhmaṇas are invited to stand for the ancestors and the viśvedevas, and are fed first; in many houses darbha figures stand in for them."],
      ["Rice-balls", "Piṇḍas of rice mixed with sesame are offered on darbha grass to three generations: father, grandfather, great-grandfather."],
      ["Water and sesame", "Tarpaṇa: water with black sesame is poured from the hand for each of them by name."],
      ["The crows", "A portion is put out for crows, and the household eats only after the crows have eaten."],
    ],
    needs: ["Black sesame", "Darbha grass", "Rice for the piṇḍas", "Food cooked without onion and garlic", "Banana leaves"],
  },

  "mahalaya-paksha": {
    steps: [
      ["The fortnight", "The waning half of Bhādrapada — fifteen days in which the ancestors are held to be closest."],
      ["Tarpaṇa", "Water with sesame is offered, daily in some houses, or once on the tithi on which the parent died."],
      ["The last day", "Mahālaya amāvāsyā is for all the ancestors at once, including those whose tithi nobody remembers."],
      ["Nothing begun", "No new thing is started in the fortnight — no purchase, no wedding — because it belongs to the dead."],
    ],
    needs: ["Black sesame", "Darbha grass", "Water", "Names of the ancestors, as far back as known"],
  },

  // ══ Going to the place ══════════════════════════════════

  tirthayatra: {
    steps: [
      ["A vow", "Many pilgrimages are begun with a saṅkalpa or kept in fulfilment of one."],
      ["The bath", "The first thing done at a tīrtha is to bathe in its water — the river, the tank or the sea."],
      ["The darśana", "Then the deity is seen, and offerings made."],
      ["The hair", "At some tīrthas, Tirupati and Prayāga above all, the head is shaved as an offering."],
      ["Brought back", "Water, prasāda or sand is carried home. The old Kāśī circuit took sand from Rāmeśvaram to the Gaṅgā and brought Gaṅgā water back to Rāmeśvaram."],
      ["On return", "Many families feed relatives and the poor on coming home, so that the pilgrimage is shared."],
    ],
    needs: ["A vow or a reason", "Clothes for the bath", "Offerings for the deity", "A vessel for water to bring back"],
  },

  pradakshina: {
    steps: [
      ["Clockwise", "The shrine is walked round with the right side towards it, the way the sun appears to move."],
      ["How many", "Commonly three at a temple; nine for the planets; a vow may ask for a hundred and eight."],
      ["At a Śiva temple", "The water channel from the liṅga is not crossed, so the round is half and then turned back."],
      ["With the whole body", "Aṅga-pradakṣiṇa — rolling round the temple — is done in fulfilment of a vow at some temples."],
      ["A hill", "At Tiruvaṇṇāmalai the whole hill of Aruṇācala is walked round, fourteen kilometres, on the full moon."],
    ],
    needs: ["Nothing at all"],
  },

  // ══ Festivals ═══════════════════════════════════════════

  ugadi: {
    steps: [
      ["An oil bath", "The day starts before dawn with an oil bath, then new clothes."],
      ["The doorway", "Mango-leaf toraṇas are hung over the doors and rangoli is drawn at the threshold."],
      ["Bevu-bella", "Neem flowers and jaggery are eaten together, the first food of the year."],
      ["Holige", "Obbaṭṭu or holige, the sweet flatbread, is the festival's dish."],
      ["The almanac read", "In the evening the new year's pañcāṅga is read aloud at a temple or at home — the rains, the harvest, the year's fortunes."],
    ],
    needs: ["Mango leaves", "Neem flowers", "Jaggery", "Oil for the bath", "The new pañcāṅga"],
  },

  "rama-navami": {
    steps: [
      ["At noon", "Rāma is held to have been born at midday, so the worship is at noon, not at midnight."],
      ["Pānaka", "In Karnataka, pānaka — jaggery water with pepper and cardamom — and kosambari, a salad of soaked lentils, are made and given out."],
      ["The story", "The Rāmāyaṇa is read, often the birth canto, and in many places the whole text has been read through over the nine days before."],
      ["The wedding", "At Bhadrachalam and many temples Rāma and Sītā are married again on the day."],
      ["Music", "In Bengaluru the day opens a season of concerts kept in Rāma's name for more than eighty years."],
    ],
    needs: ["Jaggery, pepper and cardamom for pānaka", "Soaked moong dal for kosambari", "Buttermilk", "Tulasī"],
  },

  "akshaya-tritiya": {
    steps: [
      ["No hour needed", "The whole day is held to be auspicious, so anything may be begun without consulting for a muhūrta."],
      ["Giving", "Water pots, fans, umbrellas and sandals are given — summer things, given in summer."],
      ["Beginnings", "Many begin a business, a house or a study on the day."],
      ["Gold", "Buying gold on the day is a widespread custom, but a recent one, and the texts say nothing about it."],
      ["The mountains open", "The shrines of Gaṅgotrī and Yamunotrī open for the year on this day."],
    ],
    needs: ["Things to give", "Water pots", "A clear idea of what is to be begun"],
  },

  "guru-purnima": {
    steps: [
      ["Vyāsa first", "The day is Vyāsa Pūrṇimā: Vyāsa is worshipped as the first teacher, who arranged the Vedas."],
      ["The teacher", "Students go to their teachers with fruit, flowers and cloth, and bow."],
      ["The monks settle", "Sannyāsins make their cāturmāsya vow on this day and stay in one place for the rains."],
      ["Music and dance", "Students of music and dance honour their gurus, often with a performance."],
    ],
    needs: ["Fruit", "Flowers", "A new cloth", "Dakṣiṇā"],
  },

  "nagara-panchami": {
    steps: [
      ["The stones", "Milk is poured over nāga stones — carved serpent slabs under trees — or at an anthill."],
      ["For the brothers", "In Karnataka sisters pour the milk for their brothers' well-being and are given gifts."],
      ["Swings", "Swings are hung from trees, and girls are given new bangles."],
      ["Sweets", "Tambiṭṭu and other sweets of sesame and roasted flour are made."],
      ["Nothing dug", "The earth is not ploughed or dug on the day, for fear of harming a snake."],
      ["In Tulunāḍu", "On the coast the nāgabana — the serpent grove — is the place of worship, and nāgārādhane can be the largest rite of the year."],
    ],
    needs: ["Milk", "Turmeric and kumkum", "Flowers", "Sesame and jaggery sweets"],
  },

  varamahalakshmi: {
    steps: [
      ["The Friday", "The Friday before the full moon of Śrāvaṇa."],
      ["The kalaśa", "A brass pot filled with rice or water is dressed as the goddess — a face of silver or a coconut, a sari, jewellery."],
      ["The worship", "She is worshipped as a guest, with the full sixteen offerings."],
      ["The thread", "A yellow thread with knots, the dora, is tied on the right wrist of each woman of the house."],
      ["Visitors", "Married women visit each other's houses and are given turmeric, kumkum and tāmbūla."],
    ],
    needs: ["A brass kalaśa", "A coconut", "A sari for the goddess", "Yellow thread", "Turmeric and kumkum", "Betel leaves and nuts"],
  },

  "krishna-janmashtami": {
    steps: [
      ["The fast", "Food is not taken through the day."],
      ["Small feet", "Little footprints are drawn in rice flour from the door to the shrine, the child Kṛṣṇa walking in."],
      ["Midnight", "He is held to have been born at midnight, so the worship is then: a cradle is rocked and the fast broken."],
      ["Sweets", "Cakkuli, unde and butter, which he is said to have stolen, are offered."],
      ["The next day", "Pots of curd are hung high and broken by human pyramids."],
    ],
    needs: ["A cradle", "Rice flour for the footprints", "Butter", "Sweets", "Tulasī"],
    days: [
      ["The night of the aṣṭamī", "The fast, the midnight worship, the cradle."],
      ["The day after", "The curd pots broken — mosaru kuḍike in Karnataka, dahi handī in Maharashtra. At Uḍupi this is the great day, and Uḍupi keeps the festival by the solar calendar, sometimes a month from everyone else."],
    ],
  },

  "ganesha-chaturthi": {
    steps: [
      ["Brought home", "A clay image is brought home, covered, and set on a decorated seat."],
      ["Made present", "Prāṇa-pratiṣṭhā is done, and the image is held to be inhabited from then until it is let go."],
      ["Twenty-one", "Twenty-one blades of dūrvā grass, twenty-one kinds of leaves and twenty-one modakas are offered."],
      ["Not the moon", "The moon is not looked at that night; the story of the Syamantaka jewel explains why."],
      ["Let go", "On the first, third, fifth, seventh or eleventh day the image is carried to water and immersed."],
    ],
    needs: ["A clay image", "Dūrvā grass", "Twenty-one kinds of leaves", "Modaka", "Red flowers", "A decorated seat"],
    days: [
      ["The day before", "Gaurī habba in Karnataka: the mother is worshipped the day before the son arrives."],
      ["The chaturthī", "Gaṇeśa installed and worshipped."],
      ["The last day", "The immersion — after one day in many houses, after ten in public pandals."],
    ],
  },

  navaratri: {
    steps: [
      ["The first day", "A kalaśa is set up, and in many houses barley or other grains are sown in a dish of earth to sprout over the nine days."],
      ["The dolls", "In Karnataka and Tamil Nadu dolls are arranged on stepped shelves — bombe habba, golu — and women visit to see them."],
      ["Each night", "The goddess is worshipped every night, and a different form or name each night in many houses."],
      ["Books", "On the day of the Mūla star, books and instruments are placed before Sarasvatī and not used until Vijayadaśamī."],
      ["Tools", "On the ninth day, āyudha pūjā: tools, weapons, machines and vehicles are washed and worshipped."],
    ],
    needs: ["A kalaśa", "Dolls and stepped shelves", "Grains to sprout", "Flowers", "Books for Sarasvatī"],
    days: [
      ["Days one to three", "Durgā, in the commonest scheme — strength."],
      ["Days four to six", "Lakṣmī — prosperity."],
      ["Days seven to nine", "Sarasvatī — knowledge; the books are laid down."],
      ["In other places", "Bengal makes the last four days Durgā Pūjā; Gujarat dances garbā every night; Mysuru keeps the whole season as Dasara."],
    ],
  },

  vijayadashami: {
    steps: [
      ["Books taken up", "The books laid before Sarasvatī are taken up again and read from."],
      ["The first letters", "Children are taught their first letters, often written in rice: akṣarābhyāsa."],
      ["The śamī tree", "The śamī tree is worshipped, and in Karnataka its leaves are exchanged as gold — banni koṭṭu bangāra tagoḷḷi."],
      ["Mysuru", "The procession of the goddess on an elephant through Mysuru closes the Dasara."],
      ["Rāvaṇa", "In the north, effigies of Rāvaṇa are burnt after the Rāmlīlā."],
    ],
    needs: ["A plate of rice for the letters", "Śamī leaves", "New clothes"],
  },

  deepavali: {
    steps: [
      ["Before dawn", "On Naraka chaturdaśī the household bathes before dawn with oil — the one bath of the year held to equal a bath in the Gaṅgā."],
      ["Lamps", "Rows of clay lamps are lit on every ledge on the night of the new moon."],
      ["Lakṣmī", "Lakṣmī is worshipped on the amāvāsyā; traders close the old year's accounts and open new books."],
      ["Bali", "On Bali pāḍya in Karnataka, Bali — the king pushed below the earth — is welcomed back for a day, and cattle are worshipped."],
      ["Brothers and sisters", "On the last day sisters feed their brothers."],
    ],
    needs: ["Clay lamps", "Oil and wicks", "Oil for the bath", "Sweets", "New clothes", "Rangoli powder"],
    days: [
      ["Dhanatrayodaśī", "Vessels and gold are bought; Dhanvantari is worshipped."],
      ["Naraka chaturdaśī", "The oil bath before dawn; Kṛṣṇa's killing of Naraka."],
      ["Amāvāsyā", "Lakṣmī pūjā; the lamps."],
      ["Bali pāḍya", "Bali's return; gō pūjā; the new year in Gujarat."],
      ["Yama dvitīyā", "Bhāī dūj: sisters and brothers."],
    ],
  },

  "utthana-dwadashi": {
    steps: [
      ["Viṣṇu wakes", "The four months of Cāturmāsya end."],
      ["The marriage", "In the evening the tulasī plant is married to Viṣṇu, represented by an āmla branch or a śālagrāma stone."],
      ["Lamps", "Lamps are lit all round the tulasī-kaṭṭe, the raised tulasī stand in the courtyard."],
      ["The season opens", "From the next day weddings may be fixed again."],
    ],
    needs: ["An āmla branch", "Lamps", "Sugarcane", "Flowers", "A small cloth for the tulasī"],
  },

  "gita-jayanti": {
    steps: [
      ["Read through", "The whole Gītā, all eighteen chapters, is read or recited, often by groups in turn."],
      ["Kurukṣetra", "At Kurukṣetra the day has become a festival of several days."],
      ["Also an ekādaśī", "It is Mokṣadā Ekādaśī, and many fast as for any ekādaśī."],
      ["Recent", "As a public festival it is largely modern; the fast is older than the celebration."],
    ],
    needs: ["A copy of the Gītā", "Time"],
  },

  "makara-sankranti": {
    steps: [
      ["Ellu-bella", "In Karnataka a mixture of sesame, jaggery, coconut, groundnut and gram is exchanged: eat sesame and jaggery, and speak sweetly."],
      ["Sugar figures", "Sakkare accu — figures cast in sugar — are given with it."],
      ["The cattle", "Cattle are washed, their horns painted, and in villages they are driven over a fire."],
      ["Kites", "In Gujarat and Rajasthan the sky is full of kites."],
      ["The drift", "The day was once the winter solstice. The stars have moved since, and the solstice now falls more than three weeks earlier; the festival kept to the sign, not the sun's turn."],
    ],
    needs: ["Sesame", "Jaggery", "Dry coconut", "Groundnuts and fried gram", "Sugar figures", "Sugarcane"],
    days: [
      ["Bhogi", "In Tamil Nadu, old things burnt at dawn."],
      ["Pongal", "Rice boiled with milk and jaggery until it boils over, for the sun."],
      ["Māṭṭu Pongal", "For the cattle."],
      ["Kāṇum Pongal", "Visits to family."],
    ],
  },

  "maha-shivaratri": {
    steps: [
      ["The fast", "Food is not taken through the day, and by the strictest not even water."],
      ["The night", "The night is kept awake, with japa of Om namaḥ śivāya."],
      ["Four watches", "The liṅga is bathed four times, once in each watch of the night — milk, curd, ghee, honey."],
      ["Bilva", "Bilva leaves, three to a stem, are offered."],
      ["The hunter", "The story told is of a hunter who, without knowing it, dropped bilva leaves on a liṅga all night from a tree."],
    ],
    needs: ["Milk, curd, ghee, honey", "Bilva leaves", "Vibhūti", "A ghee lamp"],
  },

  holi: {
    steps: [
      ["The fire", "On the full-moon night a bonfire is lit."],
      ["Whose fire", "In the north it burns Holikā, who tried to burn Prahlāda; in Karnataka it is Kāmadahana, Kāma burnt by Śiva's third eye."],
      ["Colour", "The next morning coloured powder and water are thrown, and the ordinary order of who may touch whom is set aside for a day."],
      ["Braj", "In Barsana the women beat the men of Nandgaon with sticks, in memory of Kṛṣṇa's teasing."],
    ],
    needs: ["Firewood for the bonfire", "Coloured powder", "Water"],
    days: [
      ["The full-moon night", "The bonfire — Holikā dahana, or Kāmadahana in the south."],
      ["The morning after", "Colour."],
    ],
  },
};
