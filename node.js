const { initializeApp } = require("firebase/app");
const { setDoc, getDoc, getFirestore, doc } = require("firebase/firestore");
const { Telegraf } = require("telegraf");

const bot = new Telegraf("7928533871:AAH4GIvqPkPxIShd2XBj6c8owILW7KMsv_M");

const firebaseConfig = {
  apiKey: "AIzaSyDmDHnQJK40zeUIqsDRCuyHr8HViIT1XP4",
  authDomain: "giveawy-bot.firebaseapp.com",
  projectId: "giveawy-bot",
  storageBucket: "giveawy-bot.firebasestorage.app",
  messagingSenderId: "451955492501",
  appId: "1:451955492501:web:6fb8be54f8338adbefbd9c",
  measurementId: "G-H7NE2MD06L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

bot.start(async (ctx) => {
  // Database ishi
  const userId = ctx.from.id;
  const username = ctx.from.username ? ctx.from.username : "NoUsername";
  const userRef = doc(db, "users", userId.toString());
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    try {
      await setDoc(userRef, {
        username,
        referrals: 0,
        userId: ctx.from.id,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //Database

  //Bot start func

  try {
    ctx.reply(
      `Bot ishlamoqda kino kodini kiriting , kino kodlarini ushbu [Kanaldan](https://t.me/+0SnmA-_dLzZkM2Iy) olishingiz mumkin , yoki ixtiyoriy raqamnni kiriting `,
      { parse_mode: "Markdown" }
    );
  } catch (error) {
    console.log(error);
  }
});

bot.on("text", (ctx) => {
  setTimeout(() => {
    try {
      ctx.reply(
        "18+ Kino - topildi , ushbu kinoni jo'natishimni xohlaysanmi ? ",
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Ha Yubor Videoni ✅", callback_data: "send" }],
            ],
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, 1000 * 5);

  try {
    ctx.reply(`Kino qidirilmoqda...`);
  } catch (error) {
    console.log(error);
  }
});

bot.on("callback_query", (ctx) => {
  try {
    ctx.reply(
      "Video ushbu kanallarga obuna bo'lganingizdan keyin yuboriladi 👇",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "1-Kanal", url: "https://t.me/+mt4YYIpl3oA3Yjdi" }],
            [{ text: "2-Kanal", url: "https://t.me/+IQisLXfJGhBkODNi" }],
            [{ text: "3-Kanal", url: "https://t.me/+AUKOUs__b2tmNThi" }],
            [{ text: "4-Kanal", url: "https://t.me/+f00e4X09tnthYWE6" }],
            [{ text: "5-Kanal", url: "https://t.me/+NQn-adJS8oYzZjEy" }],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
});

bot.launch();
