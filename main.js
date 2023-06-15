// Data
const bio = {
  en: 'Eugene Delta is the dynamic music project led by Vienna-based artist Emanuel Donner. Known for his unique blend of indie pop/rock, Eugene Delta explores the complexities of human existence and society. His insightful lyrics touch on personal experiences, mental health issues, and societal implications of our technology-driven lives. With his debut album, <strong>Calm Down, It\'s Over</strong> (werk music 2021), he delivered innovative narratives that resonated with audiences. Now, with his new single, "Siren Call", Eugene Delta continues to push boundaries and foster crucial discussions.',
  de: 'Eugene Delta ist das dynamische Musikprojekt des in Wien ansässigen Künstlers Emanuel Donner. Bekannt für seine einzigartige Mischung aus Indie-Pop/Rock, erkundet Eugene Delta die Komplexitäten des menschlichen Daseins und der Gesellschaft. Seine einfühlsamen Texte berühren persönliche Erfahrungen, psychische Gesundheitsprobleme und gesellschaftliche Implikationen unseres technologiegetriebenen Lebens. Mit seinem Debütalbum <strong>Calm Down, It\'s Over</strong> (Werk Music 2021) lieferte er innovative Erzählungen, die beim Publikum Anklang fanden. Jetzt, mit seiner neuen Single "Siren Call", verschiebt Eugene Delta weiterhin die Grenzen und fördert wichtige Diskussionen.',
}

const pressRelease = {
  en: "Vienna, Austria - Eugene Delta releases his latest single, <strong>Siren Call</strong>, an intriguing exploration of the contradictions inherent in our digital age. This compelling track illuminates the seductive allure and physical as well as psychological burdens that stem from our modern way of living. The song is an exploration of the \"Siren Call\" of our 'always-on' society, smart devices, and AI, both as a temptation and a curse.<br />In harmony with the song's theme, the accompanying music video, predominantly created using AI tools, offers a surreal perspective on the celebration and downfall of a digitally enthusiastic, hypermodernist society that believes in technology as a panacea. This paradoxical approach uses the medium itself as a commentary - serving both as a life source for the message and its critique.",
  de: 'Wien, Österreich - Eugene Delta veröffentlicht seine neueste Single <strong>Siren Call</strong>, eine faszinierende Auseinandersetzung mit den Widersprüchen unseres digitalen Zeitalters. Dieser eindringliche Track beleuchtet die verführerische Anziehungskraft und die physischen sowie psychischen Belastungen, die aus unserer modernen Lebensweise resultieren. Der Song erforscht den "Sirenen-Ruf" unserer "Always-On"-Gesellschaft, Smart Devices und KI als Verlockung und Verhängnis.<br />Passend zum Thema des Songs bietet das begleitende Musikvideo, das hauptsächlich mit Hilfe von KI-Tools erstellt wurde, einen surrealen Blick auf das Feiern und Scheitern einer digital begeisterten, hypermodernistischen Gesellschaft, die Technologie als Allheilmittel ansieht. Dieser paradoxe Ansatz nutzt das Medium selbst als Kommentar - sowohl als Lebensgrundlage für die Botschaft als auch als ihre Kritik.',
}

// Element references
const bioElement = document.getElementById("bio")
const pressReleaseElement = document.getElementById("press_release")

// Handlers
function switchToEnglish() {
  bioElement.innerHTML = bio.en
  pressReleaseElement.innerHTML = pressRelease.en
}

function switchToGerman() {
  bioElement.innerHTML = bio.de
  pressReleaseElement.innerHTML = pressRelease.de
}

// Event listeners
document.getElementById("en").addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    document.getElementsByClassName("active")[0].classList.remove("active")
    this.classList.add("active")
    switchToEnglish()
  }
})

document.getElementById("de").addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    document.getElementsByClassName("active")[0].classList.remove("active")
    this.classList.add("active")
    switchToGerman()
  }
})

// Default to English
switchToEnglish()

// Night/Day Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark")
    document.getElementById("toggleTheme").innerHTML =
      '<img src="./img/dark_mode.svg" alt="Enter dark mode">'
  } else {
    document.body.classList.add("dark")
    document.getElementById("toggleTheme").innerHTML =
      '<img src="./img/light_mode.svg" alt="Enter light mode">'
  }
})
