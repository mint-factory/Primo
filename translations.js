const translations = {
  de: {
    headerTitle: "Kartesischer Roboter",
    headerSubtitle: "Ein Projekt zur Förderung von 3D-Druck und Programmierung!",
    robotDescription: "In diesem Projekt wird ein kompakter kartesischer Roboter entwickelt, der mithilfe von Fusion konstruiert und im 3D-Druckverfahren gefertigt wird. Als Antrieb dienen Servomotoren, die über einen Raspberry Pi Pico W gesteuert werden. Der Roboter ist darauf ausgelegt, kleine Objekte wie Boxen oder Kisten zu sortieren und zu lagern. Dank der WLAN-Anbindung kann der Roboter extern angesteuert werden – sei es über ein Python-Programm, eine App oder eine SPS. Dies ermöglicht eine flexible und vielseitige Nutzung in unterschiedlichen Szenarien. Das Projekt wird in Zusammenarbeit zwischen einer deutschen und einer schwedischen Schule realisiert. Ziel ist es, dass die Schüler praxisnah Erfahrungen in den Bereichen Konstruktion, Elektronik und Programmierung sammeln.",
    cookieConsentText: "Diese Webseite verwendet Cookies, um ggf. externe Inhalte (z.B. Videos) anzuzeigen. Bitte akzeptieren oder ablehnen.",
    cookieAccept: "Akzeptieren",
    cookieDecline: "Ablehnen"
  },
  en: {
    headerTitle: "Cartesian Robot",
    headerSubtitle: "A project to advance 3D printing and programming!",
    robotDescription: "In this project, a compact Cartesian robot is being developed, designed using Fusion, and manufactured through 3D printing. The robot is powered by servo motors, which are controlled by a Raspberry Pi Pico W. It is designed to sort and store small objects such as boxes or crates. Thanks to its Wi-Fi connectivity, the robot can be controlled externally—whether via a Python program, an app, or a PLC. This allows for flexible and versatile use in different scenarios. The project is being carried out in collaboration between a German and a Swedish school. The goal is for students to gain hands-on experience in construction, electronics, and programming.",
    cookieConsentText: "This website uses cookies to display external content (e.g. videos). Please accept or decline.",
    cookieAccept: "Accept",
    cookieDecline: "Decline"
  },
  sv: {
    headerTitle: "Kartesisk robot",
    headerSubtitle: "Ett projekt för att främja 3D-utskrift och programmering!",
    robotDescription: "I detta projekt utvecklas en kompakt kartesisk robot, som konstrueras med Fusion och tillverkas genom 3D-utskrift. Roboten drivs av servomotorer, som styrs via en Raspberry Pi Pico W. Den är utformad för att sortera och lagra små objekt som lådor eller kistor. Tack vare Wi-Fi-anslutningen kan roboten styras externt – antingen via ett Python-program, en app eller en PLC. Detta möjliggör en flexibel och mångsidig användning i olika scenarier. Projektet genomförs i samarbete mellan en tysk och en svensk skola. Målet är att eleverna ska få praktisk erfarenhet inom konstruktion, elektronik och programmering.",
    cookieConsentText: "Denna webbplats använder cookies för att kunna visa externt innehåll (t.ex. videor). Acceptera eller avvisa.",
    cookieAccept: "Acceptera",
    cookieDecline: "Avvisa"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) lang = 'de'; // Fallback Deutsch

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
