import './style.css'
const lessons = [
  { number: 1, letter: 'அ', sound: 'short a', word: 'அம்மா', meaning: 'mother', color: 'coral' },
  { number: 2, letter: 'க்', sound: 'k', word: 'கல்', meaning: 'stone', color: 'gold' },
  { number: 3, letter: 'இ', sound: 'short i', word: 'இலை', meaning: 'leaf', color: 'mint' },
  { number: 4, letter: 'பு', sound: 'rhyming words', word: 'புலி', meaning: 'tiger', color: 'blue' },
  { number: 5, letter: 'மா', sound: 'fruit words', word: 'மாம்பழம்', meaning: 'mango', color: 'coral' },
  { number: 6, letter: 'க', sound: 'order the க series', word: 'க கா கி கீ கு கூ கெ கே கை கொ கோ கௌ', meaning: 'arrange the 12 க vowel forms in order', color: 'mint' },
  { number: 7, letter: 'பூ', sound: 'read Tamil words aloud', word: 'பூ', meaning: '20 words each day', color: 'blue' },
  { number: 8, letter: 'அ', sound: 'read two-word sentences', word: 'அம்மா தருவார்', meaning: 'read short Tamil sentences aloud', color: 'blue' },
  { number: 9, letter: 'வா', sound: 'read small sentences', word: 'அம்மா சாதம் சமைத்து தருவார்.', meaning: 'read Tamil sentences aloud', color: 'gold' },
] as const

const readingWords = [
  { word: 'அம்மா', meaning: 'mom', picture: '👩‍👧' },
  { word: 'அணில்', meaning: 'squirrel', picture: '🐿️' },
  { word: 'ஆடு', meaning: 'goat', picture: '🐐' },
  { word: 'ஆமை', meaning: 'turtle', picture: '🐢' },
  { word: 'இலை', meaning: 'leaf', picture: '🍃' },
  { word: 'இடி', meaning: 'thunder', picture: '🌩️' },
  { word: 'ஈ', meaning: 'fly', picture: '🪰' },
  { word: 'ஈட்டி', meaning: 'spear', picture: '🗡️' },
  { word: 'உரல்', meaning: 'mortar', picture: '🪨' },
  { word: 'உப்பு', meaning: 'salt', picture: '🧂' },
  { word: 'ஊர்', meaning: 'village', picture: '🏘️' },
  { word: 'ஊசி', meaning: 'needle', picture: '🪡' },
  { word: 'எலி', meaning: 'mouse', picture: '🐁' },
  { word: 'எருமை', meaning: 'buffalo', picture: '🐃' },
  { word: 'ஏடு', meaning: 'book / page', picture: '📖' },
  { word: 'ஏணி', meaning: 'ladder', picture: '🪜' },
  { word: 'ஐந்து', meaning: 'five', picture: '5️⃣' },
  { word: 'ஒட்டகம்', meaning: 'camel', picture: '🐪' },
  { word: 'ஒலி', meaning: 'sound', picture: '🔊' },
  { word: 'ஓடம்', meaning: 'boat', picture: '⛵' },
  { word: 'ஓடை', meaning: 'stream', picture: '💧' },
  { word: 'ஔவையார்', meaning: 'Tamil poet', picture: '👵' },
] as const

const rhymingWords = [
  { word: 'புலி', meaning: 'tiger', picture: '🐅', rhymeGroup: 'li' },
  { word: 'புளி', meaning: 'tamarind', picture: '🌿', rhymeGroup: 'li' },
  { word: 'கிளி', meaning: 'parrot', picture: '🦜', rhymeGroup: 'li' },
  { word: 'எலி', meaning: 'mouse', picture: '🐁', rhymeGroup: 'li' },
  { word: 'ஆடு', meaning: 'goat', picture: '🐐', rhymeGroup: 'du' },
  { word: 'வீடு', meaning: 'house', picture: '🏠', rhymeGroup: 'du' },
  { word: 'ஏடு', meaning: 'palm leaf page', picture: '📜', rhymeGroup: 'du' },
  { word: 'ஓடு', meaning: 'run', picture: '🏃', rhymeGroup: 'du' },
  { word: 'மரம்', meaning: 'tree', picture: '🌳', rhymeGroup: 'am' },
  { word: 'படம்', meaning: 'picture', picture: '🖼️', rhymeGroup: 'am' },
  { word: 'குடம்', meaning: 'pot', picture: '🏺', rhymeGroup: 'am' },
  { word: 'நிறம்', meaning: 'color', picture: '🎨', rhymeGroup: 'am' },
] as const

const fruitWords = [
  { word: 'மாம்பழம்', meaning: 'mango', picture: '🥭' },
  { word: 'அன்னாசிப்பழம்', meaning: 'pineapple', picture: '🍍' },
  { word: 'கொய்யாப்பழம்', meaning: 'guava', picture: '🍐' },
  { word: 'திராட்சை', meaning: 'grape', picture: '🍇' },
  { word: 'சீதாப்பழம்', meaning: 'custard apple', picture: '🍈' },
  { word: 'பலாப்பழம்', meaning: 'jackfruit', picture: '🌳' },
  { word: 'தர்பூசணி', meaning: 'watermelon', picture: '🍉' },
  { word: 'வாழைப்பழம்', meaning: 'banana', picture: '🍌' },
  { word: 'பப்பாளி', meaning: 'papaya', picture: '🧡' },
  { word: 'மாதுளை', meaning: 'pomegranate', picture: '🔴' },
] as const

const readingSentences = [
  'அம்மா சாதம் சமைத்து தருவார்.',
  'அப்பா வேலைக்கு சென்று வந்தார்.',
  'நான் பள்ளிக்கு தினமும் செல்வேன்.',
  'ரவி பால் குடித்து வந்தான்.',
  'பூனை பால் குடிக்க வந்தது.',
  'நாய் வேகமாக ஓடி சென்றது.',
  'மீன் நீரில் நன்றாக நீந்தும்.',
  'காகம் மரத்தில் வந்து அமர்ந்தது.',
  'பசு புல்லை நன்றாக தின்றது.',
  'நான் இன்று புத்தகம் படித்தேன்.',
  'அவன் பந்து வைத்து விளையாடினான்.',
  'அவள் அழகாக படம் வரைந்தாள்.',
  'மழை இன்று நன்றாக பெய்தது.',
  'சூரியன் காலையில் மேலே வந்தது.',
  'நிலா இரவில் அழகாக தெரியும்.',
  'மலர் தோட்டத்தில் நன்றாக பூத்தது.',
  'குழந்தை பால் குடித்து தூங்கியது.',
  'தம்பி பள்ளிக்கு சீக்கிரம் சென்றான்.',
  'அக்கா எனக்கு பழம் தந்தாள்.',
  'நான் மாம்பழம் விரும்பி சாப்பிடுவேன்.',
] as const

const twoWordSentences = [
  'அம்மா தருவார்',
  'அப்பா தருவார்',
  'அப்பா வந்தார்',
  'அக்கா வந்தார்',
  'நான் செல்வேன்',
  'ரவி செல்வான்',
  'ரவி வந்தான்',
  'பூனை வந்தது',
  'நாய் வந்தது',
  'நாய் சென்றது',
  'காகம் சென்றது',
  'மீன் நீந்தும்',
  'புலி நீந்தும்',
  'காகம் பறந்தது',
  'புறா பறந்தது',
  'பசு தின்றது',
  'ஆடு தின்றது',
  'நான் படித்தேன்',
  'நான் ஓடினேன்',
  'அவன் விளையாடினான்',
  'அவள் விளையாடினாள்',
  'அது விளையாடியது',
  'மழை பெய்தது',
  'சூரியன் வந்தது',
  'நிலா தெரியும்',
  'மலர் பூத்தது',
  'குழந்தை வந்தது',
  'தம்பி விளையாடினான்',
  'அக்கா தந்தாள்',
  'நான் சாப்பிடுவேன்',
] as const

const lessonSevenWordBank = [
  'பூ', 'கை', 'கால்', 'பால்', 'வா', 'போ', 'மா', 'தீ', 'ஈ', 'நாய்',
  'அம்மா', 'அப்பா', 'அக்கா', 'அண்ணா', 'எலி', 'கிளி', 'புலி', 'மணி', 'கனி', 'பனி',
  'மரம்', 'பழம்', 'படம்', 'குடம்', 'மலை', 'இலை', 'மழை', 'கடல்', 'நதி', 'வீடு',
  'பூனை', 'மாடு', 'ஆடு', 'காகம்', 'பந்து', 'பெட்டி', 'சட்டை', 'தோசை', 'இட்லி', 'வாழை',
  'அரி', 'ஆணி', 'ஆமை', 'ஆறு', 'இடி', 'இனி', 'இரவு', 'ஈரம்', 'உடல்', 'உப்பு',
  'உரல்', 'ஊர்', 'எடை', 'எண்', 'ஏணி', 'ஐந்து', 'ஒலி', 'ஓடை', 'ஓடு', 'கடை',
  'கதை', 'கயிறு', 'கரை', 'கலம்', 'கல்', 'காய்', 'காடு', 'காது', 'கிணறு', 'கிழங்கு',
  'குடை', 'குதிரை', 'குளம்', 'கூடு', 'கேக்', 'கோல்', 'கோழி', 'சக்கரம்', 'சங்கு', 'சதை',
  'சனி', 'சுவர்', 'செடி', 'செருப்பு', 'சேலை', 'சொல்', 'சோறு', 'தட்டு', 'தமிழ்', 'தலை',
  'தவளை', 'தடி', 'தரை', 'தாய்', 'தாத்தா', 'தாமரை', 'திரை', 'துணி', 'தூண்', 'தேன்',
  'தோல்', 'நகம்', 'நண்டு', 'நரி', 'நாக்கு', 'நாடு', 'நூல்', 'நெல்', 'பசி', 'பட்டம்',
  'பட்டி', 'பயறு', 'பருப்பு', 'பல்', 'பறவை', 'பாம்பு', 'பானை', 'பாசி', 'பிடி', 'பீலி',
  'பூட்டு', 'பேரி', 'பொம்மை', 'மண்', 'மதி', 'மயில்', 'மிளகு', 'முடி', 'மூக்கு', 'மேகம்',
  'யானை', 'ரவை', 'வடை', 'வண்டி', 'வண்ணம்', 'வாசல்', 'விதை', 'வெடி', 'வெயில்', 'வேலி',
] as const

const tamilVowelSigns = ['', 'ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ'] as const

const vowelQuestions = [
  { letter: 'அ', sound: 'short a', spokenSound: 'ah', example: 'cup' },
  { letter: 'ஆ', sound: 'long aa', spokenSound: 'aah', example: 'father' },
  { letter: 'இ', sound: 'short i', spokenSound: 'ih', example: 'sit' },
  { letter: 'ஈ', sound: 'long ee', spokenSound: 'ee', example: 'see' },
  { letter: 'உ', sound: 'short u', spokenSound: 'uh', example: 'put' },
  { letter: 'ஊ', sound: 'long oo', spokenSound: 'oo', example: 'moon' },
  { letter: 'எ', sound: 'short e', spokenSound: 'eh', example: 'bed' },
  { letter: 'ஏ', sound: 'long e', spokenSound: 'ay', example: 'they' },
  { letter: 'ஐ', sound: 'eye (ai)', spokenSound: 'eye', example: 'like' },
  { letter: 'ஒ', sound: 'short o', spokenSound: 'aw', example: 'off' },
  { letter: 'ஓ', sound: 'long o', spokenSound: 'oh', example: 'go' },
  { letter: 'ஔ', sound: 'ow (au)', spokenSound: 'ow', example: 'cow' },
] as const

const consonantQuestions = [
  { letter: 'க்', sound: 'k', spokenSound: 'ka', pronunciationHint: 'as in "kite"' },
  { letter: 'ங்', sound: 'ng', spokenSound: 'nga', pronunciationHint: 'at the end of "sing"' },
  { letter: 'ச்', sound: 'ch', spokenSound: 'cha', pronunciationHint: 'as in "chair"' },
  { letter: 'ஞ்', sound: 'ny', spokenSound: 'nya', pronunciationHint: 'like the middle sound in "canyon"' },
  { letter: 'ட்', sound: 'retroflex t', spokenSound: 'retroflex ta', pronunciationHint: 'with your tongue curled back' },
  { letter: 'ண்', sound: 'retroflex n', spokenSound: 'retroflex na', pronunciationHint: 'with your tongue curled back' },
  { letter: 'த்', sound: 'dental t', spokenSound: 'tha', pronunciationHint: 'with your tongue touching your upper teeth' },
  { letter: 'ந்', sound: 'n', spokenSound: 'na', pronunciationHint: 'as in "net"' },
  { letter: 'ப்', sound: 'p', spokenSound: 'pa', pronunciationHint: 'as in "pen"' },
  { letter: 'ம்', sound: 'm', spokenSound: 'ma', pronunciationHint: 'as in "man"' },
  { letter: 'ய்', sound: 'y', spokenSound: 'ya', pronunciationHint: 'as in "yes"' },
  { letter: 'ர்', sound: 'tapped r', spokenSound: 'ra', pronunciationHint: 'with one quick tongue tap' },
  { letter: 'ல்', sound: 'l', spokenSound: 'la', pronunciationHint: 'as in "leaf"' },
  { letter: 'வ்', sound: 'v/w', spokenSound: 'va', pronunciationHint: 'between the sounds in "van" and "wet"' },
  { letter: 'ழ்', sound: 'Tamil zh', spokenSound: 'zha', pronunciationHint: 'the special sound in "தமிழ்"' },
  { letter: 'ள்', sound: 'retroflex l', spokenSound: 'retroflex la', pronunciationHint: 'with your tongue curled back' },
  { letter: 'ற்', sound: 'trilled r', spokenSound: 'rolled ra', pronunciationHint: 'with a quick tongue trill' },
  { letter: 'ன்', sound: 'alveolar n', spokenSound: 'alveolar na', pronunciationHint: 'with your tongue at the ridge behind your teeth' },
] as const

const lessonSixConsonantOrder = ['க்', 'ச்', 'ங்', 'ஞ்', 'ட்', 'ண்', 'த்', 'ந்', 'ப்', 'ம்', 'ய்', 'ர்', 'ல்', 'வ்', 'ழ்', 'ள்', 'ற்', 'ன்'] as const

const consonantVowelSeries = lessonSixConsonantOrder.map((letter) => {
  const consonant = letter.replace('்', '')
  return {
    consonant,
    forms: tamilVowelSigns.map((sign) => `${consonant}${sign}`),
  }
})

type QuizSequence = {
  kind: 'VOWEL' | 'CONSONANT' | 'READING' | 'FRUIT' | 'ORDERING' | 'SENTENCE' | 'WORD_READING'
  level: number
  questions: readonly { letter: string; sound: string; spokenSound: string; example?: string; pronunciationHint?: string; picture?: string; rhymeGroup?: string }[]
}

function shuffleItems<T>(items: readonly T[]): T[] {
  const shuffledItems = [...items]
  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffledItems[index], shuffledItems[swapIndex]] = [shuffledItems[swapIndex]!, shuffledItems[index]!]
  }
  return shuffledItems
}

function normalizeSpeech(text: string) {
  return text.normalize('NFC').replace(/[\p{P}\p{S}]/gu, '').replace(/\s+/g, ' ').trim()
}

const lessonSevenWordStorageKey = 'tamil-garden-daily-reading-words'
let cachedLessonSevenWords: { date: string; words: string[] } | undefined

function getDailyLessonSevenWords() {
  const today = localDateKey(new Date())
  if (cachedLessonSevenWords?.date === today) return cachedLessonSevenWords.words

  try {
    const saved = JSON.parse(localStorage.getItem(lessonSevenWordStorageKey) ?? 'null') as { date?: string; words?: string[] } | null
    if (saved?.date === today && Array.isArray(saved.words) && saved.words.length === 20
      && new Set(saved.words).size === 20
      && saved.words.every((word) => lessonSevenWordBank.includes(word as typeof lessonSevenWordBank[number]))) {
      cachedLessonSevenWords = { date: today, words: saved.words }
      return saved.words
    }
  } catch {
    cachedLessonSevenWords = undefined
  }

  const words = shuffleItems(lessonSevenWordBank).slice(0, 20)
  cachedLessonSevenWords = { date: today, words }
  try {
    localStorage.setItem(lessonSevenWordStorageKey, JSON.stringify(cachedLessonSevenWords))
  } catch {
    return words
  }
  return words
}

function createDailyWordQuiz(): QuizSequence {
  return {
    kind: 'WORD_READING',
    level: 7,
    questions: getDailyLessonSevenWords().map((word) => ({ letter: word, sound: word, spokenSound: word })),
  }
}

const quizSequences: Partial<Record<1 | 2 | 3 | 4 | 5 | 6 | 8 | 9, QuizSequence>> = {
  1: { kind: 'VOWEL', level: 1, questions: vowelQuestions },
  2: { kind: 'CONSONANT', level: 2, questions: consonantQuestions },
  3: {
    kind: 'READING',
    level: 3,
    questions: readingWords.map(({ word, meaning, picture }) => ({ letter: word, sound: meaning, spokenSound: word, picture })),
  },
  4: {
    kind: 'READING',
    level: 4,
    questions: rhymingWords.map(({ word, meaning, picture, rhymeGroup }) => ({ letter: word, sound: meaning, spokenSound: word, picture, rhymeGroup })),
  },
  5: {
    kind: 'FRUIT',
    level: 5,
    questions: fruitWords.map(({ word, meaning, picture }) => ({ letter: word, sound: meaning, spokenSound: word, picture })),
  },
  6: {
    kind: 'ORDERING',
    level: 6,
    questions: consonantVowelSeries.map(({ consonant }) => ({ letter: consonant, sound: consonant, spokenSound: consonant })),
  },
  8: {
    kind: 'SENTENCE',
    level: 8,
    questions: twoWordSentences.map((sentence) => ({ letter: sentence, sound: sentence, spokenSound: sentence })),
  },
  9: {
    kind: 'SENTENCE',
    level: 9,
    questions: readingSentences.map((sentence) => ({ letter: sentence, sound: sentence, spokenSound: sentence })),
  },
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#home" aria-label="Tamil Garden home">
      <span class="brand-mark" lang="ta">அ</span>
      <span class="brand-name">tamil<span>garden</span></span>
    </a>
    <div class="topbar-tools">
      <div class="path-note"><span class="path-dot" aria-hidden="true"></span> YOUR LEARNING PATH</div>
      <div class="streak-display" id="streak-display" aria-label="0 day current learning streak">
        <span aria-hidden="true">✦</span><span id="streak-count">0-day streak</span>
      </div>
    </div>
  </header>

  <main id="home">
    <section class="welcome" aria-labelledby="welcome-title">
      <div class="welcome-copy">
        <p class="eyebrow"><span aria-hidden="true">✳</span> A LITTLE TAMIL, EVERY DAY</p>
        <h1 id="welcome-title"><span lang="ta">வணக்கம்,</span><br />little learner!</h1>
        <p class="welcome-text">Come explore the sounds, words and lovely letters of Tamil.</p>
        <div class="welcome-note"><span aria-hidden="true">✦</span> Nine little lessons. A whole new world.</div>
      </div>
      <div class="letter-garden" aria-label="Tamil letters: அ, ஆ, இ, ஈ" role="img">
        <span class="garden-caption">SAY HELLO TO TAMIL</span>
        <div class="letter-board" aria-hidden="true">
          <span class="letter-tile tile-coral" lang="ta">அ</span>
          <span class="letter-tile tile-gold" lang="ta">ஆ</span>
          <span class="letter-tile tile-mint" lang="ta">இ</span>
          <span class="letter-tile tile-blue" lang="ta">ஈ</span>
        </div>
        <span class="garden-sun" aria-hidden="true">✳</span>
        <span class="garden-label">உயிர் எழுத்துகள் <span>vowel friends</span></span>
      </div>
    </section>

    <section class="lessons" aria-labelledby="lesson-heading">
      <div class="section-heading">
        <div>
          <p class="eyebrow">PICK A PATH</p>
          <h2 id="lesson-heading">Choose a lesson</h2>
        </div>
        <span class="lesson-count">9 lessons <span aria-hidden="true">·</span> start anywhere</span>
      </div>
      <div class="lesson-grid">
        ${lessons.map((lesson) => `
          <button class="lesson-card card-${lesson.color}" type="button" data-lesson-index="${lesson.number}" aria-haspopup="dialog">
            <span class="card-topline"><span>LESSON ${String(lesson.number).padStart(2, '0')}</span><span class="card-arrow" aria-hidden="true">↗</span></span>
            <span class="card-main">
              <span class="card-letter" lang="ta" aria-hidden="true">${lesson.letter}</span>
              <span class="card-copy"><span class="card-title">Lesson ${lesson.number}</span><span class="card-subtitle">${lesson.number === 1 ? 'All 12 vowel letters' : lesson.number === 2 ? 'All 18 consonants' : lesson.number === 3 ? 'Choose the matching Tamil word' : lesson.number === 4 ? 'Short rhyming Tamil words' : lesson.number === 5 ? 'Name each fruit in Tamil' : lesson.number === 7 ? 'Read 20 Tamil words daily' : lesson.number === 8 ? 'Read two-word Tamil sentences' : lesson.number === 9 ? 'Read small sentences aloud' : 'Put the க series in order'}</span></span>
            </span>
          </button>
        `).join('')}
      </div>
    </section>
  </main>

  <footer class="page-footer"><span>Made for curious little minds</span><span lang="ta">தமிழ் கற்போம்!</span></footer>

  <dialog class="lesson-dialog" id="lesson-dialog" aria-labelledby="dialog-title">
    <button class="dialog-close" type="button" aria-label="Close lesson preview">×</button>
    <p class="eyebrow dialog-eyebrow" id="dialog-eyebrow"></p>
    <h2 id="dialog-title"></h2>
    <div class="word-card" id="word-card">
      <span class="word-letter" id="dialog-letter" lang="ta"></span>
      <span class="word-details"><span class="tamil-word" id="dialog-word" lang="ta"></span><span class="word-meaning" id="dialog-meaning"></span></span>
    </div>
    <p class="dialog-prompt" id="dialog-prompt"></p>
    <section class="quiz-panel" id="quiz-panel" hidden>
      <div class="quiz-progress">
        <span class="quiz-progress-label" id="quiz-progress-label"></span>
        <span class="quiz-progress-track" id="quiz-progress" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="12" aria-valuenow="1"><span class="quiz-progress-fill" id="quiz-progress-fill"></span></span>
      </div>
      <section class="ordering-activity" id="ordering-activity" aria-label="Tamil letter ordering activity" hidden>
        <p class="ordering-instruction">Arrange each consonant's 12 vowel forms in Tamil vowel order.</p>
        <div class="ordering-slots" id="ordering-slots" aria-label="Answer order"></div>
        <button class="ordering-check" id="ordering-check" type="button">Check order</button>
        <div class="ordering-options" id="ordering-options" aria-label="Available Tamil letters"></div>
      </section>
      <div class="sentence-activity" id="sentence-activity" hidden>
        <p class="sentence-to-read" id="sentence-to-read" lang="ta"></p>
        <button class="sentence-listen" id="sentence-listen" type="button">Start speaking</button>
        <p class="sentence-heard" id="sentence-heard" lang="ta" aria-live="polite"></p>
      </div>
      <div class="quiz-options" id="quiz-options" role="radiogroup" aria-label="Choose the Tamil letter"></div>
      <p class="quiz-feedback" id="quiz-feedback" role="status" aria-live="polite"></p>
      <div class="quiz-completion" id="quiz-completion" role="status" hidden>
        <span class="completion-mark" aria-hidden="true">✦</span>
        <p>You have completed Level 1!</p>
      </div>
    </section>
    <button class="dialog-done" id="dialog-done" type="button"><span id="dialog-done-label">Back to lessons</span><span aria-hidden="true">→</span></button>
  </dialog>
`

const lessonDialog = document.querySelector<HTMLDialogElement>('#lesson-dialog')!
const dialogTitle = document.querySelector<HTMLHeadingElement>('#dialog-title')!
const dialogEyebrow = document.querySelector<HTMLParagraphElement>('#dialog-eyebrow')!
const dialogLetter = document.querySelector<HTMLSpanElement>('#dialog-letter')!
const dialogWord = document.querySelector<HTMLSpanElement>('#dialog-word')!
const dialogMeaning = document.querySelector<HTMLSpanElement>('#dialog-meaning')!
const dialogPrompt = document.querySelector<HTMLParagraphElement>('#dialog-prompt')!
const wordCard = document.querySelector<HTMLDivElement>('#word-card')!
const quizPanel = document.querySelector<HTMLElement>('#quiz-panel')!
const quizOptions = document.querySelector<HTMLDivElement>('#quiz-options')!
const quizFeedback = document.querySelector<HTMLParagraphElement>('#quiz-feedback')!
const quizProgressLabel = document.querySelector<HTMLSpanElement>('#quiz-progress-label')!
const quizProgress = document.querySelector<HTMLSpanElement>('#quiz-progress')!
const quizProgressFill = document.querySelector<HTMLSpanElement>('#quiz-progress-fill')!
const quizCompletion = document.querySelector<HTMLDivElement>('#quiz-completion')!
const sentenceActivity = document.querySelector<HTMLDivElement>('#sentence-activity')!
const sentenceToRead = document.querySelector<HTMLParagraphElement>('#sentence-to-read')!
const sentenceListen = document.querySelector<HTMLButtonElement>('#sentence-listen')!
const sentenceHeard = document.querySelector<HTMLParagraphElement>('#sentence-heard')!
const orderingActivity = document.querySelector<HTMLElement>('#ordering-activity')!
const orderingSlotsElement = document.querySelector<HTMLDivElement>('#ordering-slots')!
const orderingOptionsElement = document.querySelector<HTMLDivElement>('#ordering-options')!
const orderingCheckButton = document.querySelector<HTMLButtonElement>('#ordering-check')!
const streakDisplay = document.querySelector<HTMLDivElement>('#streak-display')!
const streakCount = document.querySelector<HTMLSpanElement>('#streak-count')!
const dialogDoneButton = document.querySelector<HTMLButtonElement>('#dialog-done')!
const dialogDoneLabel = document.querySelector<HTMLSpanElement>('#dialog-done-label')!
let activeQuiz: QuizSequence | undefined
let currentQuestionIndex = 0
let advanceTimer: number | undefined
let orderingSlots: (number | null)[] = []
let selectedOrderingLetter: number | null = null
let activeOrderingForms: readonly string[] = []
let shuffledOrderingAnswers: number[] = []

type RecognitionResult = { transcript: string }
type RecognitionEvent = { results: ArrayLike<ArrayLike<RecognitionResult> & { isFinal: boolean }> }
type RecognitionErrorEvent = { error: string }
type RecognitionInstance = {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  onresult: ((event: RecognitionEvent) => void) | null
  onerror: ((event: RecognitionErrorEvent) => void) | null
  onend: (() => void) | null
  onspeechstart: (() => void) | null
  start: () => void
  abort: () => void
}
type RecognitionConstructor = new () => RecognitionInstance
let activeRecognition: RecognitionInstance | undefined

type SavedStreak = { count: number; lastCompletedDate: string }
const streakStorageKey = 'tamil-garden-daily-streak'

function localDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function loadStreak(): SavedStreak {
  try {
    const saved = JSON.parse(localStorage.getItem(streakStorageKey) ?? 'null') as Partial<SavedStreak> | null
    if (saved && Number.isInteger(saved.count) && (saved.count ?? 0) >= 0 && typeof saved.lastCompletedDate === 'string') {
      return { count: saved.count!, lastCompletedDate: saved.lastCompletedDate }
    }
  } catch {
    return { count: 0, lastCompletedDate: '' }
  }
  return { count: 0, lastCompletedDate: '' }
}

let dailyStreak = loadStreak()

function renderStreak() {
  streakCount.textContent = `${dailyStreak.count}-day streak`
  streakDisplay.setAttribute('aria-label', `${dailyStreak.count} ${dailyStreak.count === 1 ? 'day' : 'days'} current learning streak`)
}

function recordDailyCompletion() {
  const today = new Date()
  const todayKey = localDateKey(today)
  if (dailyStreak.lastCompletedDate === todayKey) return false

  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  dailyStreak = {
    count: dailyStreak.lastCompletedDate === localDateKey(yesterday) ? dailyStreak.count + 1 : 1,
    lastCompletedDate: todayKey,
  }
  try {
    localStorage.setItem(streakStorageKey, JSON.stringify(dailyStreak))
  } catch {
    // Keep the current streak visible for this visit if storage is unavailable.
  }
  renderStreak()
  return true
}

function completeQuiz(quiz: QuizSequence) {
  const streakEarned = quiz.level === 5 ? recordDailyCompletion() : false
  const nextLesson = quiz.level < 5 ? quiz.level + 1 : undefined
  dialogEyebrow.textContent = `LESSON 0${quiz.level} · COMPLETE`
  dialogTitle.textContent = 'Congrats!'
  quizCompletion.querySelector<HTMLParagraphElement>('p')!.textContent = quiz.level === 5
    ? streakEarned
      ? `You earned a ${dailyStreak.count}-day streak!`
      : `Your ${dailyStreak.count}-day streak is already counted today.`
    : nextLesson
      ? `Lesson ${quiz.level} complete! Ready for Lesson ${nextLesson}?`
      : `You have completed Lesson ${quiz.level}!`
  dialogDoneLabel.textContent = nextLesson ? `Next: Lesson ${nextLesson}` : 'Back to lessons'
  orderingActivity.hidden = true
  sentenceActivity.hidden = true
  quizProgress.hidden = true
  quizOptions.hidden = true
  quizFeedback.hidden = true
  quizCompletion.hidden = false
}

renderStreak()

function shuffleOrderingAnswers() {
  shuffledOrderingAnswers = Array.from({ length: activeOrderingForms.length }, (_, index) => index)
  for (let index = shuffledOrderingAnswers.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffledOrderingAnswers[index], shuffledOrderingAnswers[swapIndex]] = [shuffledOrderingAnswers[swapIndex]!, shuffledOrderingAnswers[index]!]
  }
}

function renderOrderingActivity(focusTarget?: string) {
  const placedLetters = new Set(orderingSlots.filter((letterIndex): letterIndex is number => letterIndex !== null))
  orderingSlotsElement.innerHTML = orderingSlots.map((letterIndex, slotIndex) => `
    <button class="ordering-slot${letterIndex === null ? ' is-empty' : letterIndex === slotIndex ? ' is-correct' : ' is-wrong'}" type="button" data-slot-index="${slotIndex}" aria-label="Position ${slotIndex + 1}${letterIndex === null ? ', empty' : `, ${activeOrderingForms[letterIndex]}, ${letterIndex === slotIndex ? 'correct' : 'not correct'}`}" aria-dropeffect="move">
      <span class="ordering-slot-number" aria-hidden="true">${slotIndex + 1}</span>
      <span class="ordering-slot-letter" lang="ta">${letterIndex === null ? '' : activeOrderingForms[letterIndex]}</span>
    </button>
  `).join('')
  orderingOptionsElement.innerHTML = shuffledOrderingAnswers.filter((letterIndex) => !placedLetters.has(letterIndex)).map((letterIndex) => `
    <button class="ordering-option${selectedOrderingLetter === letterIndex ? ' is-selected' : ''}" type="button" draggable="true" data-option-index="${letterIndex}" aria-pressed="${selectedOrderingLetter === letterIndex}" lang="ta">${activeOrderingForms[letterIndex]}</button>
  `).join('')
  const quiz = activeQuiz!
  const totalForms = quiz.questions.length * activeOrderingForms.length
  const totalPlacedForms = currentQuestionIndex * activeOrderingForms.length + placedLetters.size
  quizProgressLabel.textContent = `SERIES ${currentQuestionIndex + 1} OF ${quiz.questions.length} · FORMS ${placedLetters.size}/${activeOrderingForms.length}`
  quizProgress.setAttribute('aria-label', 'Lesson 6 consonant series progress')
  quizProgress.setAttribute('aria-valuemax', String(totalForms))
  quizProgress.setAttribute('aria-valuenow', String(totalPlacedForms))
  quizProgressFill.style.width = `${(totalPlacedForms / totalForms) * 100}%`
  if (focusTarget) orderingActivity.querySelector<HTMLButtonElement>(focusTarget)?.focus()
}

function placeOrderingLetter(letterIndex: number, slotIndex: number, focusTarget?: string) {
  orderingSlots = orderingSlots.map((placedLetter) => placedLetter === letterIndex ? null : placedLetter)
  orderingSlots[slotIndex] = letterIndex
  selectedOrderingLetter = null
  renderOrderingActivity(focusTarget)
}

function renderQuizQuestion() {
  if (!activeQuiz) return

  activeRecognition?.abort()
  activeRecognition = undefined

  const quiz = activeQuiz
  const question = quiz.questions[currentQuestionIndex]!
  if (quiz.kind === 'ORDERING') {
    const series = consonantVowelSeries[currentQuestionIndex]!
    activeOrderingForms = series.forms
    shuffleOrderingAnswers()
    dialogTitle.textContent = `Arrange the ${series.consonant} series`
    orderingSlots = Array.from({ length: activeOrderingForms.length }, () => null)
    selectedOrderingLetter = null
    orderingCheckButton.disabled = false
    orderingActivity.hidden = false
    sentenceActivity.hidden = true
    quizOptions.hidden = true
    quizFeedback.hidden = false
    quizFeedback.textContent = `Arrange the vowel forms for ${series.consonant}. Drag each form or tap a form and a box.`
    quizFeedback.className = 'quiz-feedback'
    quizProgress.hidden = false
    quizCompletion.hidden = true
    renderOrderingActivity()
    return
  }
  orderingActivity.hidden = true
  if (quiz.kind === 'SENTENCE' || quiz.kind === 'WORD_READING') {
    const isWordReading = quiz.kind === 'WORD_READING'
    dialogTitle.textContent = isWordReading ? 'Read this Tamil word aloud' : 'Read this sentence aloud'
    quizProgressLabel.textContent = `${isWordReading ? 'WORD' : 'SENTENCE'} ${currentQuestionIndex + 1} OF ${quiz.questions.length}`
    quizProgress.setAttribute('aria-label', `Lesson ${quiz.level} progress`)
    quizProgress.setAttribute('aria-valuemax', String(quiz.questions.length))
    quizProgress.setAttribute('aria-valuenow', String(currentQuestionIndex + 1))
    quizProgressFill.style.width = `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`
    sentenceToRead.textContent = question.letter
    sentenceHeard.textContent = ''
    sentenceActivity.hidden = false
    sentenceListen.disabled = false
    sentenceListen.textContent = 'Start speaking'
    quizOptions.hidden = true
    quizFeedback.textContent = isWordReading ? 'Tap the button, then read the word aloud.' : 'Tap the button, then say the sentence.'
    quizFeedback.className = 'quiz-feedback'
    quizFeedback.hidden = false
    quizProgress.hidden = false
    quizCompletion.hidden = true
    return
  }
  sentenceActivity.hidden = true
  const distractors = question.rhymeGroup
    ? quiz.questions.filter(({ letter, rhymeGroup }) => letter !== question.letter && rhymeGroup === question.rhymeGroup)
    : Array.from({ length: 3 }, (_, index) => quiz.questions[(currentQuestionIndex + index + 1) % quiz.questions.length]!)
  const answerPosition = (currentQuestionIndex * 3) % 4
  const choices = [
    ...distractors.slice(0, answerPosition),
    question,
    ...distractors.slice(answerPosition),
  ]

  if (quiz.kind === 'VOWEL') {
    dialogTitle.textContent = `Which vowel makes the ${question.sound} sound, as in "${question.example}"?`
  } else if (quiz.kind === 'CONSONANT') {
    dialogTitle.textContent = `Which consonant makes the '${question.sound}' sound, ${question.pronunciationHint}?`
  } else if (quiz.kind === 'FRUIT') {
    dialogTitle.textContent = `What is the Tamil word for ${question.sound}? `
    if (question.picture) {
      const pictureClue = document.createElement('span')
      pictureClue.className = 'question-picture'
      pictureClue.setAttribute('role', 'img')
      pictureClue.setAttribute('aria-label', `Picture clue for ${question.sound}`)
      pictureClue.textContent = question.picture
      dialogTitle.append(pictureClue)
    }
  } else {
    dialogTitle.textContent = `Which ${quiz.level === 4 ? 'Tamil ' : ''}word means ${question.sound}? `
    if (question.picture) {
      const pictureClue = document.createElement('span')
      pictureClue.className = 'question-picture'
      pictureClue.setAttribute('role', 'img')
      pictureClue.setAttribute('aria-label', `Picture clue for ${question.sound}`)
      pictureClue.textContent = question.picture
      dialogTitle.append(pictureClue)
    }
  }
  quizProgressLabel.textContent = `QUESTION ${currentQuestionIndex + 1} OF ${quiz.questions.length}`
  quizProgress.setAttribute('aria-label', `Level ${quiz.level} progress`)
  quizProgress.setAttribute('aria-valuemax', String(quiz.questions.length))
  quizProgress.setAttribute('aria-valuenow', String(currentQuestionIndex + 1))
  quizProgressFill.style.width = `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`
  quizOptions.setAttribute('aria-label', quiz.kind === 'READING' || quiz.kind === 'FRUIT' ? 'Choose the Tamil word' : `Choose the Tamil ${quiz.kind.toLowerCase()}`)
  quizOptions.innerHTML = choices.map(({ letter }) => {
    const answerLength = Array.from(letter).length
    const usesWordSizing = quiz.kind === 'READING' || quiz.kind === 'FRUIT'
    const answerSizeClass = !usesWordSizing ? '' : answerLength >= 10 ? ' quiz-word-extra-long' : answerLength >= 7 ? ' quiz-word-long' : answerLength >= 6 ? ' quiz-word-medium' : ''
    return `
      <label class="quiz-option${usesWordSizing ? ' quiz-option-reading' : ''}"><input type="radio" name="lesson-${quiz.level}-answer" value="${letter}" /><span class="quiz-answer${answerSizeClass}" lang="ta">${letter}</span></label>
    `
  }).join('')
  quizFeedback.textContent = ''
  quizFeedback.className = 'quiz-feedback'
  quizFeedback.hidden = false
  quizOptions.hidden = false
  quizProgress.hidden = false
  quizCompletion.hidden = true
}

function openLesson(lesson: (typeof lessons)[number]) {
  const quiz = lesson.number === 7
    ? createDailyWordQuiz()
    : quizSequences[lesson.number as keyof typeof quizSequences]
  const isQuizLesson = quiz !== undefined
  activeQuiz = quiz
  dialogDoneLabel.textContent = 'Back to lessons'
  dialogEyebrow.textContent = `LESSON ${String(lesson.number).padStart(2, '0')} · ${quiz?.kind ?? lesson.sound.toUpperCase()}${quiz ? ' QUIZ' : ''}`
  dialogTitle.textContent = quiz?.kind === 'VOWEL' ? "Which letter is 'a'?" : quiz?.kind === 'READING' ? `Which word means ${quiz.questions[0].sound}?` : quiz?.kind === 'FRUIT' ? `What is the Tamil word for ${quiz.questions[0].sound}?` : quiz?.kind === 'SENTENCE' ? 'Read this sentence aloud' : quiz?.kind === 'WORD_READING' ? 'Read this Tamil word aloud' : quiz?.kind === 'ORDERING' ? 'Arrange the Tamil letters' : quiz ? `Which consonant makes the '${quiz.questions[0].sound}' sound?` : `Say ${lesson.letter}!`
  dialogLetter.textContent = lesson.letter
  dialogWord.textContent = lesson.word
  dialogMeaning.textContent = lesson.meaning
  dialogPrompt.textContent = `Can you hear ${lesson.letter} at the start of ${lesson.word}?`

  quizPanel.hidden = !isQuizLesson
  wordCard.hidden = isQuizLesson
  dialogPrompt.hidden = isQuizLesson
  if (quiz) {
    currentQuestionIndex = 0
    renderQuizQuestion()
  }
  if (!lessonDialog.open) lessonDialog.showModal()
}

document.querySelector<HTMLDivElement>('.lesson-grid')!.addEventListener('click', (event) => {
  const target = event.target
  const button = target instanceof Element ? target.closest<HTMLButtonElement>('[data-lesson-index]') : null
  if (!button) return

  const lesson = lessons.find(({ number }) => number === Number(button.dataset.lessonIndex))
  if (lesson) openLesson(lesson)
})

orderingActivity.addEventListener('click', (event) => {
  if (advanceTimer !== undefined) return
  const target = event.target
  if (!(target instanceof Element)) return
  const optionButton = target.closest<HTMLButtonElement>('[data-option-index]')
  const slotButton = target.closest<HTMLButtonElement>('[data-slot-index]')

  if (optionButton) {
    selectedOrderingLetter = Number(optionButton.dataset.optionIndex)
    quizFeedback.textContent = `Selected ${activeOrderingForms[selectedOrderingLetter]}. Choose a position.`
    quizFeedback.className = 'quiz-feedback'
    renderOrderingActivity(`[data-option-index="${selectedOrderingLetter}"]`)
  } else if (slotButton) {
    const slotIndex = Number(slotButton.dataset.slotIndex)
    if (selectedOrderingLetter !== null) {
      placeOrderingLetter(selectedOrderingLetter, slotIndex, `[data-slot-index="${slotIndex}"]`)
      quizFeedback.textContent = 'Letter placed. Keep going!'
      quizFeedback.className = 'quiz-feedback'
    } else if (orderingSlots[slotIndex] !== null) {
      orderingSlots[slotIndex] = null
      renderOrderingActivity(`[data-slot-index="${slotIndex}"]`)
      quizFeedback.textContent = 'Letter returned to the choices.'
      quizFeedback.className = 'quiz-feedback'
    }
  }
})

orderingActivity.addEventListener('dragstart', (event) => {
  const target = event.target
  if (!(target instanceof Element) || !event.dataTransfer) return
  const optionButton = target.closest<HTMLButtonElement>('[data-option-index]')
  const slotButton = target.closest<HTMLButtonElement>('[data-slot-index]')
  if (optionButton) {
    event.dataTransfer.setData('text/plain', `option:${optionButton.dataset.optionIndex}`)
  } else if (slotButton && orderingSlots[Number(slotButton.dataset.slotIndex)] !== null) {
    event.dataTransfer.setData('text/plain', `slot:${slotButton.dataset.slotIndex}`)
  } else {
    event.preventDefault()
  }
})

orderingActivity.addEventListener('dragover', (event) => {
  if (event.target instanceof Element && event.target.closest('.ordering-slot, .ordering-options')) event.preventDefault()
})

orderingActivity.addEventListener('drop', (event) => {
  const target = event.target
  if (!(target instanceof Element) || !event.dataTransfer) return
  const [sourceType, sourceIndexText] = event.dataTransfer.getData('text/plain').split(':')
  const sourceIndex = Number(sourceIndexText)
  const slotButton = target.closest<HTMLButtonElement>('[data-slot-index]')
  if (slotButton && sourceType === 'option') {
    event.preventDefault()
    placeOrderingLetter(sourceIndex, Number(slotButton.dataset.slotIndex))
  } else if (slotButton && sourceType === 'slot') {
    event.preventDefault()
    const fromIndex = Number(sourceIndexText)
    const toIndex = Number(slotButton.dataset.slotIndex)
    const displacedLetter = orderingSlots[toIndex]
    orderingSlots[toIndex] = orderingSlots[fromIndex]
    orderingSlots[fromIndex] = displacedLetter
    renderOrderingActivity()
  } else if (target.closest('.ordering-options') && sourceType === 'slot') {
    event.preventDefault()
    orderingSlots[sourceIndex] = null
    renderOrderingActivity()
  }
})

orderingCheckButton.addEventListener('click', () => {
  const quiz = activeQuiz
  if (quiz?.kind !== 'ORDERING' || advanceTimer !== undefined) return
  if (orderingSlots.some((letterIndex) => letterIndex === null)) {
    quizFeedback.textContent = 'Fill every box before checking.'
    quizFeedback.className = 'quiz-feedback is-wrong'
  } else if (orderingSlots.every((letterIndex, index) => letterIndex === index)) {
    const nextSeries = consonantVowelSeries[currentQuestionIndex + 1]
    quizFeedback.textContent = nextSeries
      ? `Correct! Next is the ${nextSeries.consonant} series.`
      : 'Perfect! You completed every consonant series.'
    quizFeedback.className = 'quiz-feedback is-correct'
    orderingCheckButton.disabled = true
    advanceTimer = window.setTimeout(() => {
      advanceTimer = undefined
      if (currentQuestionIndex === quiz.questions.length - 1) {
        completeQuiz(quiz)
      } else {
        currentQuestionIndex += 1
        renderQuizQuestion()
      }
    }, 900)
  } else {
    quizFeedback.textContent = 'Not quite. Try moving the letters into the correct order.'
    quizFeedback.className = 'quiz-feedback is-wrong'
  }
})

sentenceListen.addEventListener('click', () => {
  const recognitionWindow = window as Window & { SpeechRecognition?: RecognitionConstructor; webkitSpeechRecognition?: RecognitionConstructor }
  const Recognition = recognitionWindow.SpeechRecognition ?? recognitionWindow.webkitSpeechRecognition
  const quiz = activeQuiz
  const question = quiz?.questions[currentQuestionIndex]
  if (!Recognition || (quiz?.kind !== 'SENTENCE' && quiz?.kind !== 'WORD_READING') || !question) {
    quizFeedback.textContent = 'Tamil voice recognition is not available here. Try the latest version of Chrome.'
    quizFeedback.className = 'quiz-feedback is-wrong'
    return
  }

  const recognition = new Recognition()
  activeRecognition = recognition
  recognition.lang = 'ta-IN'
  recognition.interimResults = true
  recognition.maxAlternatives = 5
  sentenceListen.disabled = true
  sentenceListen.textContent = 'Listening…'
  sentenceHeard.textContent = ''
  const isWordReading = quiz.kind === 'WORD_READING'
  quizFeedback.textContent = isWordReading ? 'Listening. Read the word aloud.' : 'Listening. Say the whole sentence.'
  quizFeedback.className = 'quiz-feedback'

  recognition.onspeechstart = () => {
    quizFeedback.textContent = isWordReading ? 'I hear you. Keep reading the word.' : 'I hear you. Keep reading the sentence.'
  }
  recognition.onresult = (event) => {
    const latestResult = event.results[event.results.length - 1]
    const alternatives = latestResult ? Array.from(latestResult, ({ transcript }) => transcript.trim()) : []
    const expected = normalizeSpeech(question.letter)
    const matchingAlternative = alternatives.find((alternative) => normalizeSpeech(alternative) === expected)
    const transcript = matchingAlternative ?? alternatives[0] ?? ''
    sentenceHeard.textContent = transcript
      ? `${latestResult?.isFinal ? 'I heard' : 'Hearing'}: ${transcript}`
      : ''
    if (!latestResult?.isFinal) return

    if (matchingAlternative) {
      quizFeedback.textContent = isWordReading ? 'That word matches! Well done.' : 'That matches! Well done.'
      quizFeedback.className = 'quiz-feedback is-correct'
      advanceTimer = window.setTimeout(() => {
        advanceTimer = undefined
        currentQuestionIndex += 1
        if (currentQuestionIndex === quiz.questions.length) {
          completeQuiz(quiz)
        } else {
          renderQuizQuestion()
        }
      }, 1300)
    } else {
      quizFeedback.textContent = `Not quite. Listen and try reading the ${isWordReading ? 'word' : 'sentence'} again.`
      quizFeedback.className = 'quiz-feedback is-wrong'
    }
  }
  recognition.onerror = (event) => {
    sentenceListen.disabled = false
    sentenceListen.textContent = 'Try again'
    quizFeedback.textContent = event.error === 'not-allowed' || event.error === 'service-not-allowed'
      ? 'Microphone or Tamil speech access is blocked. Allow microphone access in Chrome site settings, then try again.'
      : event.error === 'audio-capture'
        ? 'Chrome could not access a microphone. Check that one is connected and enabled.'
        : event.error === 'network'
          ? 'Tamil speech recognition needs an internet connection. Check your connection and try again.'
          : event.error === 'no-speech'
            ? 'I did not hear speech. Move closer to the microphone and try again.'
            : 'Speech recognition stopped unexpectedly. Please try again.'
    quizFeedback.className = 'quiz-feedback is-wrong'
  }
  recognition.onend = () => {
    if (activeRecognition === recognition) activeRecognition = undefined
    if (!advanceTimer) {
      sentenceListen.disabled = false
      if (sentenceListen.textContent === 'Listening…') sentenceListen.textContent = 'Try again'
    }
  }
  try {
    recognition.start()
  } catch {
    sentenceListen.disabled = false
    sentenceListen.textContent = 'Try again'
    quizFeedback.textContent = 'Could not start the microphone. Please try again.'
    quizFeedback.className = 'quiz-feedback is-wrong'
  }
})

quizOptions.addEventListener('change', (event) => {
  const target = event.target
  if (!(target instanceof HTMLInputElement) || !target.checked) return

  quizOptions.querySelectorAll<HTMLInputElement>('input').forEach((option) => {
    option.closest('.quiz-option')?.classList.remove('is-correct', 'is-wrong')
  })

  const quiz = activeQuiz
  if (!quiz) return

  const question = quiz.questions[currentQuestionIndex]!
  if (target.value === question.letter) {
    target.closest('.quiz-option')?.classList.add('is-correct')
    quizFeedback.textContent = 'Correct!'
    quizFeedback.classList.add('is-correct')
    quizOptions.querySelectorAll<HTMLInputElement>('input').forEach((option) => { option.disabled = true })
    advanceTimer = window.setTimeout(() => {
      advanceTimer = undefined
      currentQuestionIndex += 1
      if (currentQuestionIndex === quiz.questions.length) {
        completeQuiz(quiz)
      } else {
        renderQuizQuestion()
      }
    }, 900)
  } else {
    target.closest('.quiz-option')?.classList.add('is-wrong')
    quizFeedback.textContent = 'Not quite. Try another letter!'
    quizFeedback.classList.add('is-wrong')
  }
})

document.querySelector<HTMLButtonElement>('.dialog-close')!.addEventListener('click', () => lessonDialog.close())
dialogDoneButton.addEventListener('click', () => {
  const nextLessonNumber = activeQuiz && !quizCompletion.hidden && activeQuiz.level < 5 ? activeQuiz.level + 1 : undefined
  const nextLesson = lessons.find(({ number }) => number === nextLessonNumber)
  if (nextLesson) {
    openLesson(nextLesson)
  } else {
    lessonDialog.close()
  }
})

lessonDialog.addEventListener('close', () => {
  if (advanceTimer !== undefined) window.clearTimeout(advanceTimer)
  advanceTimer = undefined
  activeRecognition?.abort()
  activeRecognition = undefined
})

lessonDialog.addEventListener('click', (event) => {
  if (event.target === lessonDialog) lessonDialog.close()
})
