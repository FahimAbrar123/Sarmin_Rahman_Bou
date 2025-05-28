
    const targetDate = new Date("2025-05-01T00:00:00").getTime();
    const countdownEl = document.getElementById("countdown");
    const revealBox = document.getElementById("revealBox");
    const wishesMessage = document.getElementById("wishesMessage");
    const gallery = document.getElementById("gallery");
    const galleryWrapper = document.getElementById("galleryWrapper");
    const imageMessage = document.getElementById("imageMessage");

    const images = [
      "1.jpg",
      "2.jpg",
      "10.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "3.jpg"
    ];

    const imageMessages = [
      "তুমি থাকলেই হাসে আমার পৃথিবীর আকাশ,তুমি না থাকলে ভালোবাসাও যেন থাকে নিঃস্বাশ। 🌙❤️",
      "মিলেছে রঙ, মিলেছে মন, ভালোবাসার সেই সন্ধ্যা বেলায়,দ্বিতীয় দেখায় পরিণয়, একসাথে ছিলাম স্বপ্নের মেলায়।",
      "নীল শাড়িতে রাজকুমারী, চোখে স্বপ্নের আলো,এক হাতে চুল সরিয়ে যেন জোৎস্না ছুঁয়ে গেল ভালো।",
      "চোখ দু’টি যেন নেশার মতো, ডুবে যাই প্রতিটি চাহনিতে,হাসি তার স্বর্গের ছোঁয়া, চাঁদও হার মানে সেই হাসিমুখে।",
      "নীল বাতাসের স্পর্শ যেন, সে এক পরী নীরব স্নিগ্ধতায়,চোখে তার গভীর মায়া, এক দৃষ্টিতেই হৃদয় হারায়।",
      "আলোর মাঝে ছবি তোলা, দু’হৃদয়ের অমল স্মৃতি,প্রতিটি মুহূর্তে বাঁধা, প্রেমের অটুট প্রতিজ্ঞা চিরন্তন হৃত্তি।",
      "তোমার জন্মদিনে বেজে ওঠে ভালোবাসার সুর,তুমি আমার হৃদয়ের চিরসাথী, জীবনের পুরনুর।",
      "জীবনের সৌন্দর্য তুমি, অন্ধকার পথের আলো,তুমি থাকলে সব আঁধার হয় মধুর আলো।",
      "পাগলি, আমি তোমায় অনেক বেশি ভালোবাসি,তোমার মাঝে হারিয়ে থাকতে চাই চিরদিন, আমিতোমার মায়ায় পড়তে রাজি, তোমার কাছে হারাতে রাজি,এই ভালোবাসার জলে ভাসতে চাই শুধু তোমারই নাবি।",
      "সন্ধ্যার আলোয় হাতে হাত ধরে চুপচাপ আমরা,পাগলি, তোমার মায়ায় হারাতে চাই জীবনটাকে সারা। এই শেষ ছবিটা স্মৃতির ভাঁজে রেখে যাবো চিরকাল তোমার,তোমার হাসি ছুঁয়ে যায় হৃদয়, বাঁচায় আমার প্রত্যেক ধারা।"
    ];

    images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Image ${index + 1}`;
      img.dataset.index = index;
      img.addEventListener("click", () => selectImage(index));
      gallery.appendChild(img);
    });

    function selectImage(index) {
      gallery.querySelectorAll("img").forEach(img => img.classList.remove("selected"));
      gallery.querySelectorAll("img")[index].classList.add("selected");
      imageMessage.textContent = imageMessages[index];
    }

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        countdownEl.style.display = "none";
        revealBox.style.display = "block";
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    function showWishes() {
      wishesMessage.style.display = "block";
      galleryWrapper.style.display = "block";
      revealBox.style.display = "none";
    }
