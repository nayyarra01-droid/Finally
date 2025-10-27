const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const audio = document.getElementById("bgMusic");
const textEl = document.getElementById("typeText");

let slide = 1;
let typingIndex = 0;
let typingText = '';
let typingInterval;

const texts = [
  "", // Slide 1 - kosong
  ` kamu 😊✨, aku nggak tau kenapa, tapi tiap kali ngobrol sama kamu rasanya selalu nyenengin banget 💬💖. Bahkan hal-hal kecil pun bisa bikin aku senyum sendiri 😌🌸.

 Di hari bahagiamu ini, ada satu hal yang ingin aku sampaikan dengan tulus dari hati. Aku minta maaf atas semua kesalahan yang pernah aku perbuat, atas kata-kata yang mungkin menyakitimu, atau saat aku tidak bisa ada di sisimu sepenuhnya ketika kamu butuh. 🙏🏻😔 Maaf jika kadang aku membuatmu kecewa. Aku berjanji, aku akan terus belajar menjadi pribadi dan pasangan yang lebih baik lagi untukmu. 💪`,
  `Selamat ulang tahun, Cinta. Mari kita hadapi petualangan di usia 18 ini bersama-sama, dengan cinta yang semakin kuat. Aku mencintaimu, hari ini dan selamanya. 🥰❤️"`
];

// Play music
playBtn.addEventListener("click", () => {
  audio.play();
});

// Next slide
nextBtn.addEventListener("click", () => {
  if (slide < 3) {
    slide++;
    showSlide(slide);
  }
});

function typeText(text) {
  clearInterval(typingInterval);
  typingIndex = 0;
  textEl.textContent = '';
  typingText = text;

  typingInterval = setInterval(() => {
    if (typingIndex < typingText.length) {
      textEl.textContent += typingText.charAt(typingIndex);
      typingIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
}

function showSlide(slideNum) {
  if (slideNum === 2 || slideNum === 3) {
    typeText(texts[slideNum - 1]);
  }

  if (slideNum === 3) {
    nextBtn.style.display = "none";
  }
}
