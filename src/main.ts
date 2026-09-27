import './style.css'
const lessons = [
  { number: 1, letter: 'அ', sound: 'short a', word: 'அம்மா', meaning: 'mother', color: 'coral' },
  { number: 2, letter: 'க்', sound: 'k', word: 'கல்', meaning: 'stone', color: 'gold' },
  { number: 3, letter: 'இ', sound: 'short i', word: 'இலை', meaning: 'leaf', color: 'mint' },
  { number: 4, letter: 'பு', sound: 'rhyming words', word: 'புலி', meaning: 'tiger', color: 'blue' },
  { number: 5, letter: 'மா', sound: 'fruit words', word: 'மாம்பழம்', meaning: 'mango', color: 'coral' },
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

const vowelQuestions = [
  { letter: 'அ', sound: 'a', spokenSound: 'ah' },
  { letter: 'ஆ', sound: 'aa', spokenSound: 'aah' },
  { letter: 'இ', sound: 'i', spokenSound: 'ih' },
  { letter: 'ஈ', sound: 'ee', spokenSound: 'ee' },
  { letter: 'உ', sound: 'u', spokenSound: 'uh' },
  { letter: 'ஊ', sound: 'oo', spokenSound: 'oo' },
  { letter: 'எ', sound: 'e', spokenSound: 'eh' },
  { letter: 'ஏ', sound: 'ay', spokenSound: 'ay' },
  { letter: 'ஐ', sound: 'ai', spokenSound: 'eye' },
  { letter: 'ஒ', sound: 'o', spokenSound: 'aw' },
  { letter: 'ஓ', sound: 'oh', spokenSound: 'oh' },
  { letter: 'ஔ', sound: 'au', spokenSound: 'ow' },
] as const

const consonantQuestions = [
  { letter: 'க்', sound: 'k', spokenSound: 'ka' },
  { letter: 'ங்', sound: 'ṅ', spokenSound: 'nga, as in sing' },
  { letter: 'ச்', sound: 'c', spokenSound: 'cha' },
  { letter: 'ஞ்', sound: 'ñ', spokenSound: 'nya' },
  { letter: 'ட்', sound: 'ṭ', spokenSound: 'retroflex ta' },
  { letter: 'ண்', sound: 'ṇ', spokenSound: 'retroflex na' },
  { letter: 'த்', sound: 't', spokenSound: 'tha' },
  { letter: 'ந்', sound: 'n', spokenSound: 'na' },
  { letter: 'ப்', sound: 'p', spokenSound: 'pa' },
  { letter: 'ம்', sound: 'm', spokenSound: 'ma' },
  { letter: 'ய்', sound: 'y', spokenSound: 'ya' },
  { letter: 'ர்', sound: 'r', spokenSound: 'ra' },
  { letter: 'ல்', sound: 'l', spokenSound: 'la' },
  { letter: 'வ்', sound: 'v', spokenSound: 'va' },
  { letter: 'ழ்', sound: 'ḻ', spokenSound: 'zha' },
  { letter: 'ள்', sound: 'ḷ', spokenSound: 'retroflex la' },
  { letter: 'ற்', sound: 'ṟ', spokenSound: 'rolled ra' },
  { letter: 'ன்', sound: 'ṉ', spokenSound: 'alveolar na' },
] as const

type QuizSequence = {
  kind: 'VOWEL' | 'CONSONANT' | 'READING' | 'FRUIT'
  level: number
  questions: readonly { letter: string; sound: string; spokenSound: string; picture?: string; rhymeGroup?: string }[]
}

const quizSequences: Record<1 | 2 | 3 | 4 | 5, QuizSequence> = {
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
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#home" aria-label="Tamil Garden home">
      <span class="brand-mark" lang="ta">அ</span>
      <span class="brand-name">tamil<span>garden</span></span>
    </a>
    <div class="path-note"><span class="path-dot" aria-hidden="true"></span> YOUR LEARNING PATH</div>
  </header>

  <main id="home">
    <section class="welcome" aria-labelledby="welcome-title">
      <div class="welcome-copy">
        <p class="eyebrow"><span aria-hidden="true">✳</span> A LITTLE TAMIL, EVERY DAY</p>
        <h1 id="welcome-title"><span lang="ta">வணக்கம்,</span><br />little learner!</h1>
        <p class="welcome-text">Come explore the sounds, words and lovely letters of Tamil.</p>
        <div class="welcome-note"><span aria-hidden="true">✦</span> Five little lessons. A whole new world.</div>
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
        <span class="lesson-count">5 lessons <span aria-hidden="true">·</span> start anywhere</span>
      </div>
      <div class="lesson-grid">
        ${lessons.map((lesson) => `
          <button class="lesson-card card-${lesson.color}" type="button" data-lesson-index="${lesson.number}" aria-haspopup="dialog">
            <span class="card-topline"><span>LESSON ${String(lesson.number).padStart(2, '0')}</span><span class="card-arrow" aria-hidden="true">↗</span></span>
            <span class="card-main">
              <span class="card-letter" lang="ta" aria-hidden="true">${lesson.letter}</span>
              <span class="card-copy"><span class="card-title">Lesson ${lesson.number}</span><span class="card-subtitle">${lesson.number === 1 ? 'All 12 vowel letters' : lesson.number === 2 ? 'All 18 consonants' : lesson.number === 3 ? 'Choose the matching Tamil word' : lesson.number === 4 ? 'Short rhyming Tamil words' : 'Name each fruit in Tamil'}</span></span>
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
    <button class="speak-button" id="speak-question" type="button" hidden><span aria-hidden="true">♫</span> Hear it again</button>
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
      <div class="quiz-options" id="quiz-options" role="radiogroup" aria-label="Choose the Tamil letter"></div>
      <p class="quiz-feedback" id="quiz-feedback" role="status" aria-live="polite"></p>
      <div class="quiz-completion" id="quiz-completion" role="status" hidden>
        <span class="completion-mark" aria-hidden="true">✦</span>
        <p>You have completed Level 1!</p>
      </div>
    </section>
    <button class="dialog-done" type="button">Back to lessons <span aria-hidden="true">→</span></button>
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
const speakButton = document.querySelector<HTMLButtonElement>('#speak-question')!
let activeQuiz: QuizSequence | undefined
let currentQuestionIndex = 0
let advanceTimer: number | undefined

function speakQuestion() {
  if (!activeQuiz || !('speechSynthesis' in window)) return

  const quiz = activeQuiz
  const question = quiz.questions[currentQuestionIndex]
  if (!question) return

  const voices = window.speechSynthesis.getVoices()
  const tamilVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith('ta'))
  const englishVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith('en'))
  const promptText = quiz.kind === 'VOWEL'
    ? `Which letter makes the ${question.spokenSound} sound?`
    : quiz.kind === 'CONSONANT'
      ? `Which consonant makes the ${question.sound} sound?`
      : quiz.kind === 'FRUIT'
        ? `What is the Tamil word for ${question.sound}?`
        : `Which Tamil word means ${question.sound}?`
  const prompt = new SpeechSynthesisUtterance(promptText)
  prompt.lang = 'en-US'
  prompt.rate = 0.92
  if (englishVoice) prompt.voice = englishVoice

  const letterSound = new SpeechSynthesisUtterance(tamilVoice ? question.letter : question.spokenSound)
  letterSound.lang = tamilVoice?.lang ?? englishVoice?.lang ?? 'en-US'
  letterSound.rate = 0.82
  if (tamilVoice) letterSound.voice = tamilVoice
  else if (englishVoice) letterSound.voice = englishVoice

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(prompt)
  window.speechSynthesis.speak(letterSound)
}

function renderQuizQuestion() {
  if (!activeQuiz) return

  const quiz = activeQuiz
  const question = quiz.questions[currentQuestionIndex]!
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
    dialogTitle.textContent = currentQuestionIndex === 0 ? "Which letter is 'a'?" : `Which letter is '${question.sound}'?`
  } else if (quiz.kind === 'CONSONANT') {
    dialogTitle.textContent = `Which consonant makes the '${question.sound}' sound?`
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
  speakQuestion()
}

document.querySelector<HTMLDivElement>('.lesson-grid')!.addEventListener('click', (event) => {
  const target = event.target
  const button = target instanceof Element ? target.closest<HTMLButtonElement>('[data-lesson-index]') : null
  if (!button) return

  const lesson = lessons.find(({ number }) => number === Number(button.dataset.lessonIndex))
  if (!lesson) return

  const quiz = lesson.number === 1 ? quizSequences[1] : lesson.number === 2 ? quizSequences[2] : lesson.number === 3 ? quizSequences[3] : lesson.number === 4 ? quizSequences[4] : lesson.number === 5 ? quizSequences[5] : undefined
  const isQuizLesson = quiz !== undefined
  activeQuiz = quiz
  dialogEyebrow.textContent = `LESSON ${String(lesson.number).padStart(2, '0')} · ${quiz?.kind ?? lesson.sound.toUpperCase()}${quiz ? ' QUIZ' : ''}`
  dialogTitle.textContent = quiz?.kind === 'VOWEL' ? "Which letter is 'a'?" : quiz?.kind === 'READING' ? `Which word means ${quiz.questions[0].sound}?` : quiz?.kind === 'FRUIT' ? `What is the Tamil word for ${quiz.questions[0].sound}?` : quiz ? `Which consonant makes the '${quiz.questions[0].sound}' sound?` : `Say ${lesson.letter}!`
  dialogLetter.textContent = lesson.letter
  dialogWord.textContent = lesson.word
  dialogMeaning.textContent = lesson.meaning
  dialogPrompt.textContent = `Can you hear ${lesson.letter} at the start of ${lesson.word}?`

  quizPanel.hidden = !isQuizLesson
  speakButton.hidden = !isQuizLesson
  wordCard.hidden = isQuizLesson
  dialogPrompt.hidden = isQuizLesson
  if (quiz) {
    currentQuestionIndex = 0
    renderQuizQuestion()
  }
  lessonDialog.showModal()
})

speakButton.addEventListener('click', speakQuestion)

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
        dialogEyebrow.textContent = `LESSON 0${quiz.level} · COMPLETE`
        dialogTitle.textContent = 'Congrats!'
        quizCompletion.querySelector<HTMLParagraphElement>('p')!.textContent = `You have completed Level ${quiz.level}!`
        quizProgress.hidden = true
        quizOptions.hidden = true
        quizFeedback.hidden = true
        quizCompletion.hidden = false
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
document.querySelector<HTMLButtonElement>('.dialog-done')!.addEventListener('click', () => lessonDialog.close())

lessonDialog.addEventListener('close', () => {
  if (advanceTimer !== undefined) window.clearTimeout(advanceTimer)
  advanceTimer = undefined
  if ('speechSynthesis' in window) window.speechSynthesis.cancel()
})

lessonDialog.addEventListener('click', (event) => {
  if (event.target === lessonDialog) lessonDialog.close()
})
