const { initializeApp } = require("firebase/app");
const {
  setDoc,
  getDoc,
  getFirestore,
  doc,
  updateDoc,
} = require("firebase/firestore");
const { Telegraf } = require("telegraf");

const bot = new Telegraf("7928533871:AAH4GIvqPkPxIShd2XBj6c8owILW7KMsv_M");
const request1 = new Telegraf("7625007518:AAHw8K6ODtPQJnL0PD_Y0yyyNCxuMlq2VKE");
const bot2 = new Telegraf("7699922864:AAF04nhoQ-blCKd5gW3fXRqt2ua8F-KIEI0");

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

  const statRef = doc(db, "statistic", "users1");
  const statSnap = await getDoc(statRef);

  if (!userSnap.exists()) {
    try {
      await setDoc(userRef, {
        username,
        referrals: 0,
        userId: ctx.from.id,
      });
      await updateDoc(statRef , {
        users: statSnap.data()++
      });
    } catch (error) {
      console.log(error);
    }
  }
  //Database

  //Bot start func

  try {
    ctx.reply(`1️⃣ Bot ishlamoqda kino kodini kiriting , misol uchun 11 🔢 `, {
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.log(error);
  }
});

bot.on("text", (ctx) => {
  setTimeout(() => {
    try {
      ctx.reply(
        "🔞🔞18+ Kino - topildi , ushbu kinoni jo'natishimni xohlaysanmi ? ",
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
  }, 1000 * 3);

  try {
    ctx.reply(`Kino qidirilmoqda...`);
  } catch (error) {
    console.log(error);
  }
});

bot.on("callback_query", (ctx) => {
  try {
    ctx.reply(
      "🔞🔞Video ushbu kanallarga obuna bo'lganingizdan keyin yuboriladi 👇",
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
let boolean = true;

request1.on("chat_join_request", (ctx) => {
  if (ctx.chat.id == "-1002412163460") {
    try {
      request1.telegram.sendMessage(
        ctx.from.id,
        "[🔥🔞Yangi video yuklandi](https://t.me/+YgU6fgL5YYpmNzA6)",
        {
          parse_mode: "Markdown",
        }
      );
    } catch (error) {
      console.log(error);
    }
    setInterval(() => {
      if (boolean) {
        try {
          request1.telegram.sendMessage(
            ctx.from.id,
            "[🔥🔞Yangi video yuklandi](https://t.me/+YgU6fgL5YYpmNzA6)",
            {
              parse_mode: "Markdown",
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
    }, 1000 * 60 * 5);
  } else {
    boolean = false;
  }
});

bot2.start(async (ctx) => {
  // Database ishi
  const userId = ctx.from.id;
  const username = ctx.from.username ? ctx.from.username : "NoUsername";
  const userRef = doc(db, "users2", userId.toString());
  const userSnap = await getDoc(userRef);
  const statRef = doc(db, "statistic", "users2");
  const statSnap = await getDoc(statRef);
  if (!userSnap.exists()) {
    try {
      await setDoc(userRef, {
        username,
        referrals: 0,
        userId: ctx.from.id,
      });
      await updateDoc(statRef , {
        users: statSnap.data()++
      });
    } catch (error) {
      console.log(error);
    }
  }
  //Database

  try {
    ctx.reply(
      "🔞 Barcha porno videolar mavjud. Ularni yuklab olishdan avval ushbu kanallarga obuna bo'ling",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "1-kanal", url: "https://t.me/+BDW0yGy3D9A0MTJi" }],
            [
              {
                text: "2-bot",
                url: "https://t.me/Yashirin_Kinolar_kodli_1_bot",
              },
            ],
            [{ text: "3-kanal", url: "https://t.me/+KP5adUHXaPJjZGIy" }],
            [{ text: "4-kanal", url: "https://t.me/+Wjnkg-tt8llkZDgy" }],
          ],
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
});

bot.launch();
request1.launch();
bot2.launch();
