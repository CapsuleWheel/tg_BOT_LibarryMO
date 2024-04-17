require('dotenv').config()
const {
    Bot,
    GrammyError,
    HttpError,
    Keyboard,
    InlineKeyboard,
    InputFile
} = require('grammy');

const{hydrate} = require('@grammyjs/hydrate');

const bot = new Bot(process.env.BOT_API_KEY)
bot.use(hydrate());


// //Команды
// bot.api.setMyCommands([
//     {
//         command: 'start',
//         description: 'Запуcк бота',
//     },
//     // {
//     //     command: 'library',
//     //     description: 'Меню',
//     // },

// ])


//Keyboard
const startKeyboard = new InlineKeyboard()
    .text('Библиотека', 'library')
    .row()
    .text('Обратная связь', 'feedback')
    .row()
    .text('Как пользоваться ботом ?', 'help');

//library
const libraryKeyboard = new InlineKeyboard()
    .text('Теория международных отношений', 'chapter-1')
    .row()
    .text('Политология', 'chapter-2')
    .row()
    .text('Мировая экономика', 'chapter-3')
    .row()
    .text('Мировая политика', 'chapter-4')
    .row()
    .text('Международное право', 'chapter-5')
    .row()
    .text('История международных отношений', 'chapter-6')
    .row()
    .text('Дипломатия и международные отношения', 'chapter-7')
    .row()
    .text('Геополитика и международные отношения ', 'chapter-8')
    .row()
    .text('Литература по странам', 'chapter-9')
    .row()
    .text('Литература по регионам', 'chapter-10')
    .row()
    .text('<- Назад', 'main-back');


//chapter1
const chapterFirstKeyboard = new InlineKeyboard()
    .text('Барановский В.Г. Современные глобальные проблемы', 'book-1.1')
    .row()
    .text('Сунь-Цзы Искусство войны', 'book-1.2')
    .row()
    .text('Самюэль Хантингтон Столкновение цивилизаций', 'book-1.3')
    .row()
    .text('Цыганков П.А. Теория международных отношений', 'book-1.4')
    .row()
    .text('Збигнев Бжезинский Выбор Мировое господство или глобальное лидерство', 'book-1.5')
    .row()
    .text('Колобов О.А. Теория международных отношений Том 1', 'book-1.6')
    .row()
    .text('Богатуров А.Д. Международно-политический анализ', 'book-1.7')
    .row()
    .text('Бжезинский Стратегический взгляд', 'book-1.8')
    .row()
    .text('Энгельс Принципы коммунизма', 'book-1.9')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const book_1_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1WBBvXrRmWOCYrq7b29Vnxxshnoy8Jhyp/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Барановский В.Г. Современные глобальные проблемы"', {
        reply_markup: book_1_1,
    });
    await ctx.answerCallbackQuery()
});

const book_1_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1sVLZx-L6l_LBFRLW9TejV4TbRIoumENt/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Сунь-Цзы Искусство войны"', {
        reply_markup: book_1_2,
    });
    await ctx.answerCallbackQuery()
});

const book_1_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1nDDxG2UM4U1MyL4r9un66-CB5VdjUMrp/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Самюэль Хантингтон Столкновение цивилизаций"', {
        reply_markup: book_1_3,
    });
    await ctx.answerCallbackQuery()
});

const book_1_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/16EeAH5Mc04yDZICkVnAye-aw9ONlBv9J/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Цыганков П.А. Теория международных отношений"', {
        reply_markup: book_1_4,
    });
    await ctx.answerCallbackQuery()
});

const book_1_5 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1W9yeELIhRA5K7XGr6snhg3LypnayGu5O/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Збигнев Бжезинский Выбор Мировое господство или глобальное лидерство"', {
        reply_markup: book_1_5,
    });
    await ctx.answerCallbackQuery()
});

const book_1_6 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/11DQrOwByxV3t7IsfS2ozAYC1w6Nh4Jao/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.6', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Колобов О.А. Теория международных отношений Том 1"', {
        reply_markup: book_1_6,
    });
    await ctx.answerCallbackQuery()
});

const book_1_7 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1jYJH6B3ntR5S0Ed3JV1nZ8tbm-UALb39/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.7', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Богатуров А.Д. Международно-политический анализ""', {
        reply_markup: book_1_7,
    });
    await ctx.answerCallbackQuery()
});

const book_1_8 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1vGnc7tN-bnse5uB82_5YEbi0GoO1TmT-/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.8', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Бжезинский Стратегический взгляд"', {
        reply_markup: book_1_8,
    });
    await ctx.answerCallbackQuery()
});

const book_1_9 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1ENK3sgo0h6tSJBYcGgZisUl1u8ktr2xt/view?usp=sharing')
    .row().text('<- Назад', 'chapter-1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-1.9', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Энгельс Принципы коммунизма"', {
        reply_markup: book_1_9,
    });
    await ctx.answerCallbackQuery()
});


//chapter 2
const chapterSecondKeyboard = new InlineKeyboard()
    .text('Доклады Института Европы №395 \n Общество и политика в «ЭРУ COVID-19»', 'book-2.1')
    .row()
    .text('Баталов Э.Я. Человек, Мир, Политика', 'book-2.2')
    .row()
    .text('Баталов Э.Я. Философия международных отношений', 'book-2.3')
    .row()
    .text('Богатуров А.Д. Экономическая политология, Отношения безнеса с государством', 'book-2.4')
    .row()
    .text('Голосов Г.В. Сравнительня политология', 'book-2.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');


const book_2_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1Ck67BMkwxTahLe3DxMYIomeWnjCjb9_i/view?usp=sharing')
    .row().text('<- Назад', 'chapter-2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-2.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Доклады Института Европы №395 \n Общество и политика в «ЭРУ COVID-19»', {
        reply_markup: book_2_1,
    });
    await ctx.answerCallbackQuery()
});
const book_2_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1XCJoU-VP1_G9P_DZHgfGt0JrOw2vOmA8/view?usp=sharing')
    .row().text('<- Назад', 'chapter-2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-2.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Баталов Э.Я. Человек, Мир, Политика"', {
        reply_markup: book_2_2,
    });
    await ctx.answerCallbackQuery()
});
const book_2_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1CiDIeeHw5swh3_kkXyTMeyFuN8IEsAEU/view?usp=sharing')
    .row().text('<- Назад', 'chapter-2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-2.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Баталов Э.Я. Философия международных отношений"', {
        reply_markup: book_2_3,
    });
    await ctx.answerCallbackQuery()
});
const book_2_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1Q3eZeltrWqtSFXiZYzW7bOTeCT4puvlR/view?usp=sharing')
    .row().text('<- Назад', 'chapter-2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-2.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Богатуров А.Д. Экономическая политология, Отношения бизнеса с государством"', {
        reply_markup: book_2_4,
    });
    await ctx.answerCallbackQuery()
});
const book_2_5 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1mbVeIPUwmScQPomtM57_13-9gYFrAWIT/view?usp=sharing')
    .row().text('<- Назад', 'chapter-2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-2.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('"Голосов Г.В. Сравнительня политология"', {
        reply_markup: book_2_5,
    });
    await ctx.answerCallbackQuery()
});



const chapterThirdKeyboard = new InlineKeyboard()
    .text('Роньшина Н.И. Международные экономические отношения', 'book-3.1')
    .row()
    .text('Шевчук Д.А. Мировая экономика', 'book-3.2')
    .row()
    .text('Асфатуллин С.Г. Экономическая безопасность страны', 'book-3.3')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const book_3_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1A8r9o3ByZYVJAgF0YhNkrRCvDaeTKHQ5/view?usp=sharing')
    .row().text('<- Назад', 'chapter-3').text('Главное меню', 'main-menu');

bot.callbackQuery('book-3.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Роньшина Н.И. Международные экономические отношения', {
        reply_markup: book_3_1,
    });
    await ctx.answerCallbackQuery()
});

const book_3_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1DBEwWadM_HHzc0D5awXIBFMOsoyZ4l5f/view?usp=sharing')
    .row().text('<- Назад', 'chapter-3').text('Главное меню', 'main-menu');

bot.callbackQuery('book-3.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Шевчук Д.А. Мировая экономика', {
        reply_markup: book_3_2,
    });
    await ctx.answerCallbackQuery()
});

const book_3_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1emAyfRsBMEuxHGXOhfErULB-PNbCzGkV/view?usp=sharing')
    .row().text('<- Назад', 'chapter-3').text('Главное меню', 'main-menu');

bot.callbackQuery('book-3.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Асфатуллин. Экономическая безопасность страны', {
        reply_markup: book_3_3,
    });
    await ctx.answerCallbackQuery()
});


const chapterFourthKeyboard = new InlineKeyboard()
    .text('Богатуров А.Д. Косолапов Н.А Хрусталев М.А. \n Очерки теории и политического анализа международных отношений', 'book-4.1')
    .row()
    .text('Богатуров А.Д. Современная мировая политика', 'book-4.2')
    .row()
    .text('Сатановский Е.Я. Турецкие диалоги. Мировая политика как она есть - без толерантности', 'book-4.3')
    .row()
    .text('Генри Киссинджер Мировой порядок', 'book-4.4')
    .row()
    .text('Лебедева М.М. Мировая политика', 'book-4.5')
    .row()
    .text('Кортунов С.В. Мировая политика в условиях кризиса', 'book-4.6')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');


const book_4_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1_5_HFmD7QcCV-Dw3WNSc0WLe4XLrdpIQ/view?usp=sharing')
    .row().text('<- Назад', 'chapter-4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-4.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Богатуров А.Д. Косолапов Н.А Хрусталев М.А. \n Очерки теории и политического анализа международных отношений', {
        reply_markup: book_4_1,
    });
    await ctx.answerCallbackQuery()
});

const book_4_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/11yCmumqvalPKYi-d6VYJUZiGq0pIpKUh/view?usp=sharing')
    .row().text('<- Назад', 'chapter-4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-4.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Богатуров А.Д. Современная мировая политика', {
        reply_markup: book_4_2,
    });
    await ctx.answerCallbackQuery()
});

const book_4_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1y2UDpU3jLtLi03t4PW_mbpoF8nbwmm71/view?usp=sharing')
    .row().text('<- Назад', 'chapter-4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-4.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Сатановский Е.Я. Турецкие диалоги. Мировая политика как она есть - без толерантности', {
        reply_markup: book_4_3,
    });
    await ctx.answerCallbackQuery()
});

const book_4_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1UTeTYAHarj5TRFHQ9anwvZRWzR7yZKd1/view?usp=sharing')
    .row().text('<- Назад', 'chapter-4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-4.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Генри Киссинджер Мировой порядок', {
        reply_markup: book_4_4,
    });
    await ctx.answerCallbackQuery()
});

const book_4_5 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/12dfboO6ekhiAI39LnfCceSMixvx7Okgj/view?usp=sharing')
    .row().text('<- Назад', 'chapter-4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-4.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('Лебедева М.М. Мировая политика', {
        reply_markup: book_4_5,
    });
    await ctx.answerCallbackQuery()
});

const book_4_6 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1bUIbsxdxP4ihYfKTXE4VkhaEV1TygorK/view?usp=sharing')
    .row().text('<- Назад', 'chapter-4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-4.6', async (ctx) => {
    await ctx.callbackQuery.message.editText('Кортунов С.В. Мировая политика в условиях кризиса', {
        reply_markup: book_4_6,
    });
    await ctx.answerCallbackQuery()
});



const chapterFifthKeyboard = new InlineKeyboard()
    .text('Петров М.И. Международное право. Шпаргалка', 'book-5.1')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');


const book_5_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1WL6dmxbS2xV_oFWV_n0hghfBO59q46cf/view?usp=sharing')
    .row().text('<- Назад', 'chapter-5').text('Главное меню', 'main-menu');

bot.callbackQuery('book-5.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Петров М.И. Международное право. Шпаргалка', {
        reply_markup: book_5_1,
    });
    await ctx.answerCallbackQuery()
});



const chapterSixthKeyboard = new InlineKeyboard()
    .text('Богатуров А.Д., Аверков В.В., История международных отношений 1945-2017', 'book-6.1')
    .row()
    .text('Бжезинский. Антология Мировой закулисы', 'book-6.2')
    .row()
    .text('История Европы. Том 1', 'book-6.3')
    .row()
    .text('История Европы. Том 2', 'book-6.4')
    .row()
    .text('История Европы. Том 3', 'book-6.5')
    .row()
    .text('История Европы. Том 4', 'book-6.6')
    .row()
    .text('Кунгуров. Пакт Молотова-Риббентропа', 'book-6.7')
    .row()
    .text('Торкунов А.В. История международных отношений. Том 1', 'book-6.8')
    .row()
    .text('Торкунов А.В. История международных отношений. Том 2', 'book-6.9')
    .row()
    .text('Торкунов А.В. История международных отношений. Том 3', 'book-6.10')
    .row()
    .text('Хрестоматия по истории международных отношений. Книга 1 Древний мир', 'book-6.11')
    .row()
    .text('Хрестоматия по истории международных отношений. Книга 2. Средние века', 'book-6.12')
    .row()
    .text('Хрестоматия по истории международных отношений. Книга 3. Новое время', 'book-6.13')
    .row()
    .text('Хрестоматия по истории международных отношений. Книга 4. Новейшее время', 'book-6.14')
    .row()
    .text('Хрестоматия по истории международных отношений. Книга 5 Россия. Часть 1', 'book-6.15')
    .row()
    .text('Хрестоматия по истории международных отношений. Книга 5. Россия. Часть 2', 'book-6.16')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');


const book_6_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1EGkjH6M-UAveiWGtDHmNwWhdpWfICfzC/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Богатуров А.Д., Аверков В.В., История международных отношений 1945-2017', {
        reply_markup: book_6_1,
    });
    await ctx.answerCallbackQuery()
});
const book_6_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1l1gdyhEAJehok99vfOdVfZB2D5mNUWnx/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Бжезинский. Антология Мировой закулисы', {
        reply_markup: book_6_2,
    });
    await ctx.answerCallbackQuery()
});
const book_6_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1x-rR9EhN_Z4T3zn_zMC4PMUa-5emv_-0/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 1', {
        reply_markup: book_6_3,
    });
    await ctx.answerCallbackQuery()
});
const book_6_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1ecN5IKJ4IBfAXpng13b4LyAVuQIB_9U2/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 2', {
        reply_markup: book_6_4,
    });
    await ctx.answerCallbackQuery()
});
const book_6_5 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1QXdLQyDYb7zg5WKJXbt5oaVqhjGtwrYj/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 3', {
        reply_markup: book_6_5,
    });
    await ctx.answerCallbackQuery()
});
const book_6_6 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1IgJH9LHTYtPKcrpeefZEFHupudC7uDY1/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.6', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 4', {
        reply_markup: book_6_6,
    });
    await ctx.answerCallbackQuery()
});
const book_6_7 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1CvBBGIdE1qxYV0twC2C_PwhcZbaBIK1I/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.7', async (ctx) => {
    await ctx.callbackQuery.message.editText('Кунгуров. Пакт Молотова-Риббентропа', {
        reply_markup: book_6_7,
    });
    await ctx.answerCallbackQuery()
});
const book_6_8 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1DA2yYI70FKw97I1M5q3aXTGtPkfMBfia/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.8', async (ctx) => {
    await ctx.callbackQuery.message.editText('Торкунов А.В. История международных отношений. Том 1', {
        reply_markup: book_6_8,
    });
    await ctx.answerCallbackQuery()
});
const book_6_9 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1LJhexgx_lJLaSqogKIrGtQ2aRtdc_Qog/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.9', async (ctx) => {
    await ctx.callbackQuery.message.editText('Торкунов А.В. История международных отношений. Том 2', {
        reply_markup: book_6_9,
    });
    await ctx.answerCallbackQuery()
});
const book_6_10 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/15XsxZV_QALDdeI0CCzAntqmTJ-xi8t-h/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.10', async (ctx) => {
    await ctx.callbackQuery.message.editText('Торкунов А.В. История международных отношений. Том 3', {
        reply_markup: book_6_10,
    });
    await ctx.answerCallbackQuery()
});
const book_6_11 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1Gr6DdbiUb9KyMO0UKOS8Eooa7SLPPdub/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.11', async (ctx) => {
    await ctx.callbackQuery.message.editText('Хрестоматия по истории международных отношений. Книга 1 Древний мир', {
        reply_markup: book_6_11,
    });
    await ctx.answerCallbackQuery()
});
const book_6_12 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1_hPYTNNI5xwR6KrP89PQOM9ycz0MNtSV/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.12', async (ctx) => {
    await ctx.callbackQuery.message.editText('Хрестоматия по истории международных отношений. Книга 2. Средние века', {
        reply_markup: book_6_12,
    });
    await ctx.answerCallbackQuery()
});
const book_6_13 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1RYuLh7-xRgHU8Y0Q6tdH4q_Gu7vEVKkA/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.13', async (ctx) => {
    await ctx.callbackQuery.message.editText('Хрестоматия по истории международных отношений. Книга 3. Новое время', {
        reply_markup: book_6_13,
    });
    await ctx.answerCallbackQuery()
});
const book_6_14 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1eaHVcPLe8Lf0nGTlNEWj40em851aJQ6r/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.14', async (ctx) => {
    await ctx.callbackQuery.message.editText('Хрестоматия по истории международных отношений. Книга 4. Новейшее время', {
        reply_markup: book_6_14,
    });
    await ctx.answerCallbackQuery()
});
const book_6_15 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1_eRA5PP1ZcmDrvxmwZJ-q2R0kafm_vxX/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.15', async (ctx) => {
    await ctx.callbackQuery.message.editText('Хрестоматия по истории международных отношений. Книга 5 Россия. Часть 1', {
        reply_markup: book_6_15,
    });
    await ctx.answerCallbackQuery()
});
const book_6_16 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1542xXTBOS4bkeyFoD-Qm5-8qpvqTozbe/view?usp=sharing')
    .row().text('<- Назад', 'chapter-6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-6.16', async (ctx) => {
    await ctx.callbackQuery.message.editText('Хрестоматия по истории международных отношений. Книга 5. Россия. Часть 2', {
        reply_markup: book_6_16,
    });
    await ctx.answerCallbackQuery()
});






const chapterSeventhKeyboard = new InlineKeyboard()
    .text('Бёрнс. Невидимая сила. Как работает американская дипломатия', 'book-7.1')
    .row()
    .text('Егоров В.П. Дипломатический протокол и этикет', 'book-7.2')
    .row()
    .text('Генри Киссинджер. Дипломатия', 'book-7.3')
    .row()
    .text('Борунков. Дипломатический протокол России', 'book-7.4')
    .row()
    .text('Попов. В.И. Современная дипломатия, теория и практика', 'book-7.5')
    .row()
    .text('Потемкин В.П. История дипломатии. Том 1.', 'book-7.6')
    .row()
    .text('Потемкин В.П. История дипломатии. Том 2.', 'book-7.7')
    .row()
    .text('Потемкин В.П. История дипломатии. Том 3.', 'book-7.8')
    .row()
    .text('Млечин. Секреты Российской дипломатии от Громыко до Лаврова', 'book-7.9')
    .row()
    .text('Виртшафтер Э. От победы к миру. Русская дипломатия после Наполеона', 'book-7.10')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');




const book_7_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1N-1u9hP_ROLw1iFEGW9qvkw22S36imll/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Бёрнс. Невидимая сила. Как работает американская дипломатия', {
        reply_markup: book_7_1,
    });
    await ctx.answerCallbackQuery()
});

const book_7_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1UrpipJF8wO151_DKtP2c9Gp7ti1uRPQF/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Егоров В.П. Дипломатический протокол и этикет', {
        reply_markup: book_7_2,
    });
    await ctx.answerCallbackQuery()
});

const book_7_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1fCu2wopE_5LVtV_hy26LHmDWgUqKhbFm/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Генри Киссинджер. Дипломатия', {
        reply_markup: book_7_3,
    });
    await ctx.answerCallbackQuery()
});

const book_7_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1aazW69wO7T5VvjCQaWB3yMj-keKp-6Hj/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Борунков. Дипломатический протокол России', {
        reply_markup: book_7_4,
    });
    await ctx.answerCallbackQuery()
});

const book_7_5 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1qJ4CoOpOXWn5CeU3mWWLVPFfV6JJjs0U/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('Попов. В.И. Современная дипломатия, теория и практика', {
        reply_markup: book_7_5,
    });
    await ctx.answerCallbackQuery()
});

const book_7_6 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1r3FHAzmcCHUfglYqIf1jjKdqoKt9ftP5/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.6', async (ctx) => {
    await ctx.callbackQuery.message.editText('Потемкин В.П. История дипломатии. Том 1.', {
        reply_markup: book_7_6,
    });
    await ctx.answerCallbackQuery()
});

const book_7_7 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1RTcj1SxdHjIGXifcfw4AIDFYLOmAp8Lu/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.7', async (ctx) => {
    await ctx.callbackQuery.message.editText('Потемкин В.П. История дипломатии. Том 2.', {
        reply_markup: book_7_7,
    });
    await ctx.answerCallbackQuery()
});

const book_7_8 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1VqVgsOrtvRuDhD1k9etC5sdt9v7EbDfr/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.8', async (ctx) => {
    await ctx.callbackQuery.message.editText('Потемкин В.П. История дипломатии. Том 3.', {
        reply_markup: book_7_8,
    });
    await ctx.answerCallbackQuery()
});

const book_7_9 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/13F4_L_UgMSb3XtNXOvo7p2vUDXXXCgWO/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.9', async (ctx) => {
    await ctx.callbackQuery.message.editText('Млечин. Секреты Российской дипломатии от Громыко до Лаврова', {
        reply_markup: book_7_9,
    });
    await ctx.answerCallbackQuery()
});

const book_7_10 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1mrfi5fKfCXUcWXAWXCKh-LR-NzyRSkv5/view?usp=sharing')
    .row().text('<- Назад', 'chapter-7').text('Главное меню', 'main-menu');

bot.callbackQuery('book-7.10', async (ctx) => {
    await ctx.callbackQuery.message.editText('Виртшафтер Э. От победы к миру. Русская дипломатия после Наполеона', {
        reply_markup: book_7_10,
    });
    await ctx.answerCallbackQuery()
});



    
const chapterEighthKeyboard = new InlineKeyboard()
    .text('Тешке Б. Миф о 1648 годе. Класс, геополитика и создание современных международных отношений', 'book-8.1')
    .row()
    .text('Коровин В. Удар по России. Геополитика и предчувствие войны', 'book-8.2')
    .row()
    .text('Геополитика и международные отношения', 'book-8.3')
    .row()
    .text('Вандам. Геополитика и геостратегия', 'book-8.4')
    .row()
    .text('Колосов В.А., Мироненко Н.С. Геополитика и политическая география', 'book-8.5')
    .row()
    .text('Стариков. Геополитика. Как это делается', 'book-8.6')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');




const book_8_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1Ul7dgxkCnV3cCutP92cD9GK0Bcoxjn9E/view?usp=sharing')
    .row().text('<- Назад', 'chapter-8').text('Главное меню', 'main-menu');

bot.callbackQuery('book-8.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Тешке Б. Миф о 1648 годе. Класс, геополитика и создание современных международных отношений', {
        reply_markup: book_8_1,
    });
    await ctx.answerCallbackQuery()
});
const book_8_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/18eELWTSHm9xiYDdbkYKkcVqcthgeMiXX/view?usp=sharing')
    .row().text('<- Назад', 'chapter-8').text('Главное меню', 'main-menu');

bot.callbackQuery('book-8.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Коровин В. Удар по России. Геополитика и предчувствие войны', {
        reply_markup: book_8_2,
    });
    await ctx.answerCallbackQuery()
});
const book_8_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1t10TyvIIqJ3t3hmCJxQgnkPohJSfjZBg/view?usp=sharing')
    .row().text('<- Назад', 'chapter-8').text('Главное меню', 'main-menu');

bot.callbackQuery('book-8.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Геополитика и международные отношения', {
        reply_markup: book_8_3,
    });
    await ctx.answerCallbackQuery()
});
const book_8_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1AUsOqfYjNcfMB5EpYm80A7JZPkQnK6Sv/view?usp=sharing')
    .row().text('<- Назад', 'chapter-8').text('Главное меню', 'main-menu');

bot.callbackQuery('book-8.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вандам. Геополитика и геостратегия', {
        reply_markup: book_8_4,
    });
    await ctx.answerCallbackQuery()
});
const book_8_5 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1gVbpY5yrhXUEjM_3y0JKHQMs1YhOpbZV/view?usp=sharing')
    .row().text('<- Назад', 'chapter-8').text('Главное меню', 'main-menu');

bot.callbackQuery('book-8.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('Колосов В.А., Мироненко Н.С. Геополитика и политическая география', {
        reply_markup: book_8_5,
    });
    await ctx.answerCallbackQuery()
});
const book_8_6 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1sWljWWoohNbbklfgSXK0PE8S-BLpcU1i/view?usp=sharing')
    .row().text('<- Назад', 'chapter-8').text('Главное меню', 'main-menu');

bot.callbackQuery('book-8.6', async (ctx) => {
    await ctx.callbackQuery.message.editText('Стариков. Геополитика. Как это делается', {
        reply_markup: book_8_6,
    });
    await ctx.answerCallbackQuery()
});





const chapterNinthKeyboard = new InlineKeyboard()
    .text('США', 'subsection-1.1')
    .row()
    .text('Россия', 'subsection-1.2')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterNinthFirstKeyboard = new InlineKeyboard()
    .text('Баталов Э.Я. Проблема Демократии в американской политической мысли XX века', 'book-9.1')
    .row()
    .text('Баталов Э.Я. Рычащий медведь на диком востоке. Образы современной России в работе американских авторов 1992-2007 гг.', 'book-9.2')
    .row()
    .text('Клаус. БРИКС против диктатуры доллара', 'book-9.3')
    .row()
    .text('Джордж Фридман. Американская империя. Прогноз 2020-2030 гг.', 'book-9.4')
    .row()
    .text('Збигнев, Бжезинский. Стратегический взгляд. Америка и глобальный кризис', 'book-9.5')
    .row()
    .text('Сушенцов А.А. Очерки политики США в региональных конфликтах 2000', 'book-9.6')
    .row()
    .text('США - лоббизм и политика', 'book-9.7')
    .row()
    .text('Иванян Э.А. История США', 'book-9.8')
    .row()
    .text('<- Назад', 'section-1').text('Главное меню', 'main-menu');


const book_9_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1wcTgtdWmyOq1EEiJNOfn4OVUVPv6c3g0/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Баталов Э.Я. Проблема Демократии в американской политической мысли XX века', {
        reply_markup: book_9_1,
    });
    await ctx.answerCallbackQuery()
});

const book_9_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1F_IF9rQsp3bwMJmypuf_tKr9GL1rRMOn/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Баталов Э.Я. Рычащий медведь на диком востоке. Образы современной России в рабое американских авторов 1992-2007 гг.', {
        reply_markup: book_9_2,
    });
    await ctx.answerCallbackQuery()
});

const book_9_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1zr3H4_hn7KfvG1IVI1hYT_Wp_ZyqMkKo/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Клаус. БРИКС против диктатуры доллара', {
        reply_markup: book_9_3,
    });
    await ctx.answerCallbackQuery()
});

const book_9_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1D86VhQXoZAwjjmIONGk0oB9YanJtmG_k/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Джордж Фридман. Американская империя. Прогноз 2020-2030 гг.', {
        reply_markup: book_9_4,
    });
    await ctx.answerCallbackQuery()
});

const book_9_5 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1UOTjJjo4hv-OdCj2yxlrtdhPfiUUoAJf/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('Збигнев, Бжезинский. Стратегический взгляд. Америка и глобальный кризис', {
        reply_markup: book_9_5,
    });
    await ctx.answerCallbackQuery()
});

const book_9_6 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1JQ4LQA7RpiduvY4vNIcIEPH_xRBck3N_/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.6', async (ctx) => {
    await ctx.callbackQuery.message.editText('Сушенцов А.А. Очерки политики США в региональных конфликтах 2000', {
        reply_markup: book_9_6,
    });
    await ctx.answerCallbackQuery()
});

const book_9_7 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/13tqGhe2gVJEggoxLB41HdEobKuf2BDBG/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.7', async (ctx) => {
    await ctx.callbackQuery.message.editText('США - лоббизм и политика', {
        reply_markup: book_9_7,
    });
    await ctx.answerCallbackQuery()
});

const book_9_8 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1SZeFrScY5PEBYTOhx425PUDy_vm3b__k/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.8', async (ctx) => {
    await ctx.callbackQuery.message.editText('Иванян Э.А. История США', {
        reply_markup: book_9_8,
    });
    await ctx.answerCallbackQuery()
});



const chapterNinthSecondKeyboard = new InlineKeyboard()
    .text('Баталов Э.Я. Рычащий медведь на диком востоке. Образы современной России в работе американских авторов 1992-2007 гг.', 'book-9.9')
    .row()
    .text('Богатуров А.Д. Международные отношения и внешняя политика России', 'book-9.10')
    .row()
    .text('Белоногов. МИД. Кремль. Кувейтский кризис', 'book-9.11')
    .row()
    .text('Шевцова Л. Одинокая держава. Почему Россия не стала Западом и почему России трудно с Западом', 'book-9.12')
    .row()
    .text('<- Назад', 'section-1').text('Главное меню', 'main-menu');



const book_9_9 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1F_IF9rQsp3bwMJmypuf_tKr9GL1rRMOn/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.9', async (ctx) => {
    await ctx.callbackQuery.message.editText('Баталов Э.Я. Рычащий медведь на диком востоке. Образы современной России в рабое американских авторов 1992-2007 гг.', {
        reply_markup: book_9_9,
    });
    await ctx.answerCallbackQuery()
});
const book_9_10 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1YHg8NcSs0JJ3w4hO9sy1_UWsPEU2tSJM/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.10', async (ctx) => {
    await ctx.callbackQuery.message.editText('Богатуров А.Д. Международные отношения и внешняя политика России', {
        reply_markup: book_9_10,
    });
    await ctx.answerCallbackQuery()
});
const book_9_11 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1MeimvcjazwBOu-Ax7cSkzBJqA_ZZH99k/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.11', async (ctx) => {
    await ctx.callbackQuery.message.editText('Белоногов. МИД. Кремль. Кувейтский кризис', {
        reply_markup: book_9_11,
    });
    await ctx.answerCallbackQuery()
});
const book_9_12 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1vcyqSMWdDsey10dvxGyiD6k4fv-Q5Z-l/view?usp=sharing')
    .row().text('<- Назад', 'subsection-1.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-9.12', async (ctx) => {
    await ctx.callbackQuery.message.editText('Шевцова Л. Одинокая держава. Почему Россия не стала Западом и почему России трудно с Западом', {
        reply_markup: book_9_12,
    });
    await ctx.answerCallbackQuery()
});



bot.callbackQuery('subsection-1.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из раздела "США"', {
        reply_markup: chapterNinthFirstKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('subsection-1.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из раздела "Россия"', {
        reply_markup: chapterNinthSecondKeyboard,
    });
    await ctx.answerCallbackQuery()
});



const chapterTenthKeyboard = new InlineKeyboard()
    .text('Азия', 'subsection-2.1')
    .row()
    .text('Африка', 'subsection-2.2')
    .row()
    .text('Восток', 'subsection-2.3')
    .row()
    .text('Европа', 'subsection-2.4')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');


const chapterTenth1Keyboard = new InlineKeyboard()
    .text('Азия', 'subsection-2.1.1')
    .row()
    .text('Азия - Китай', 'subsection-2.1.2')
    .row()
    .text('Центральная Азия', 'subsection-2.1.3')
    .row()
    .text('<- Назад', 'chapter-10').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из раздела "Азия"', {
        reply_markup: chapterTenth1Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const chapterTenth1_1Keyboard = new InlineKeyboard()
    .text('АСЕАН в начале XXI века. Актуальные проблемы и перспективы', 'book-10.1')
    .row()
    .text('<- Назад', 'subsection-2.1').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.1.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела "Азия"', {
        reply_markup: chapterTenth1_1Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const book_10_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/18EUXFDDWmJy_7gKairDlAInlP4X18XUK/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.1.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('АСЕАН в начале XXI века. Актуальные проблемы и перспективы', {
        reply_markup: book_10_1,
    });
    await ctx.answerCallbackQuery()
});


const chapterTenth1_2Keyboard = new InlineKeyboard()
    .text('Виноградов А.В. Китайская модель модернизации. Поиски новой индентичности.', 'book-10.2.1')
    .row()
    .text('Генри Киссинджер. О Китае', 'book-10.2.2')
    .row()
    .text('Фицжеральд. История Китая.', 'book-10.2.3')
    .row()
    .text('Фактор Китая в Средиземноморье', 'book-10.2.4')
    .row()
    .text('<- Назад', 'subsection-2.1').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.1.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела "Азия - Китай"', {
        reply_markup: chapterTenth1_2Keyboard,
    });
    await ctx.answerCallbackQuery()
});



const book_10_2_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/18ocL4uNK7y97aXy7oNRwSz0gwcBcOFgF/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.1.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.2.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Виноградов А.В. Китайская модель модернизации. Поиски новой индентичности.', {
        reply_markup: book_10_2_1,
    });
    await ctx.answerCallbackQuery()
});

const book_10_2_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1jhmGnd6ylq8pRAB0mLjv-p06JE25kPax/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.1.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.2.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Генри Киссинджер. О Китае', {
        reply_markup: book_10_2_2,
    });
    await ctx.answerCallbackQuery()
});

const book_10_2_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/11eB8dW7Dw9ZoZEtw_30ZN5NVqMoM-NIE/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.1.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.2.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Фицжеральд. История Китая.', {
        reply_markup: book_10_2_3,
    });
    await ctx.answerCallbackQuery()
});

const book_10_2_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/10kQXY6wPqEsp4_kkzfRRxmTap6fIhT0P/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.1.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.2.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Фактор Китая в Средиземноморье', {
        reply_markup: book_10_2_4,
    });
    await ctx.answerCallbackQuery()
});





const chapterTenth1_3Keyboard = new InlineKeyboard()
    .text('Богатуров А.Д. Международные отношения в Центральной Азии.', 'book-10.3.1')
    .row()
    .text('Бисенбаев. Не вместе. Россия и страны Центральной Азии', 'book-10.3.2')
    .row()
    .text('<- Назад', 'subsection-2.1').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.1.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела " Центральная Азия"', {
        reply_markup: chapterTenth1_3Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const book_10_3_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1h-pW6-LFYhXFSQLAYhcMdYEvrm_qo4W8/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.1.3').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.3.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Богатуров А.Д. Международные отношения в Центральной Азии', {
        reply_markup: book_10_3_1,
    });
    await ctx.answerCallbackQuery()
});

const book_10_3_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1npIO_DBe7vcKzr6Dvc63EH5vdNLMH2Nk/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.1.3').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.3.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Бисенбаев. Не вместе. Россия и страны Центральной Азии', {
        reply_markup: book_10_3_2,
    });
    await ctx.answerCallbackQuery()
});



const chapterTenth2_1Keyboard = new InlineKeyboard()
    .text('Тут пусто😧', 'subsection-2.2.1')
    .row()
    .text('<- Назад', 'chapter-10').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из раздела "Африка"', {
        reply_markup: chapterTenth2_1Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const chapterTenth2_2Keyboard = new InlineKeyboard()
    .text('И тут пусто🤯', 'subsection-2.2.2')
    .row()
    .text('<- Назад', 'chapter-10').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.2.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из раздела "Африка"', {
        reply_markup: chapterTenth2_2Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const chapterTenth2_3Keyboard = new InlineKeyboard()
    .text('Не повезло🫡', 'chapter-10')
    .row()
    .text('<- Назад', 'chapter-10').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.2.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из раздела "Африка"', {
        reply_markup: chapterTenth2_3Keyboard,
    });
    await ctx.answerCallbackQuery()
});





const chapterTenth3Keyboard = new InlineKeyboard()
    .text('Арабский Восток. Аграрное развитие и социально-экономические тренды', 'book-10.4.1')
    .row()
    .text('<- Назад', 'chapter-10').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из раздела "Восток"', {
        reply_markup: chapterTenth3Keyboard,
    });
    await ctx.answerCallbackQuery()
});


const book_10_4_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1_rDJcsivTKWBEEs0nLvYp8VEYyf6lVAx/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.3').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.4.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Арабский Восток. Аграрное развитие и социально-экономические тренды', {
        reply_markup: book_10_4_1,
    });
    await ctx.answerCallbackQuery()
});







const chapterTenth4Keyboard = new InlineKeyboard()
    .text('Европа', 'subsection-2.4.1')
    .row()
    .text('Европа - Великобритания', 'subsection-2.4.2')
    .row()
    .text('Европа - Испания', 'subsection-2.4.3')
    .row()
    .text('Европа - Общая история', 'subsection-2.4.4')
    .row()
    .text('Европа - Средиземноморье', 'subsection-2.4.5')
    .row()
    .text('Европа - Франция', 'subsection-2.4.6')
    .row()
    .text('<- Назад', 'chapter-10').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из раздела "Европа"', {
        reply_markup: chapterTenth4Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const chapterTenth4_1Keyboard = new InlineKeyboard()
    .text('Агрессия НАТО 1999 года против Югославии и процесс мирного урегулирования', 'book-10.5.1')
    .row()
    .text('Фактор Китая в Средиземноморье', 'book-10.5.2')
    .row()
    .text('Швейцар В.Я Партийно-политическая система Европейского союза в начале XXI века', 'book-10.5.3')
    .row()
    .text('Этап специальной военной операции на Украине. Анатомия антироссийской политики в Европе', 'book-10.5.4')
    .row()
    .text('<- Назад', 'subsection-2.4').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.4.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела "Европа"', {
        reply_markup: chapterTenth4_1Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const book_10_5_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1ysnM2zbBs_PqgVNbrfoZbNf9Urk1KvvB/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.5.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Агрессия НАТО 1999 года против Югославии и процесс мирного урегулирования', {
        reply_markup: book_10_5_1,
    });
    await ctx.answerCallbackQuery()
});

const book_10_5_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/10kQXY6wPqEsp4_kkzfRRxmTap6fIhT0P/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.5.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Фактор Китая в Средиземноморье', {
        reply_markup: book_10_5_2,
    });
    await ctx.answerCallbackQuery()
});

const book_10_5_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1zNwa9BUmHvcGJJW5Lr0N90uipf788D0Q/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.5.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Швейцар В.Я Партийно-политическая система Европейского союза в начале XXI века', {
        reply_markup: book_10_5_3,
    });
    await ctx.answerCallbackQuery()
});

const book_10_5_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1gugjYR1jtvT6mLkm2LV-GPo9ldhbqJJt/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.1').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.5.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Этап специальной военной операции на Украине. Анатомия антироссийской политики в Европе', {
        reply_markup: book_10_5_4,
    });
    await ctx.answerCallbackQuery()
});



const chapterTenth4_2Keyboard = new InlineKeyboard()
    .text('Институт Европы РАИ Итоги первого года правительства Б.Джонсона', 'book-10.6.1')
    .row()
    .text('Кристофер Дэниел. Англия. История страны', 'book-10.6.2')
    .row()
    .text('<- Назад', 'subsection-2.4').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.4.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела "Европа - Великобритания"', {
        reply_markup: chapterTenth4_2Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const book_10_6_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1GZXnJYcVE4GQHfXWVCaItybsJSlT4ULQ/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.6.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Институт Европы РАИ Итоги первого года правительства Б.Джонсона', {
        reply_markup: book_10_6_1,
    });
    await ctx.answerCallbackQuery()
});

const book_10_6_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1vPlLi6Xu6zZ6N0JO1ah4AmxK5VpyWa-4/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.2').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.6.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Кристофер Дэниел. Англия. История страны', {
        reply_markup: book_10_6_2,
    });
    await ctx.answerCallbackQuery()
});

const chapterTenth4_3Keyboard = new InlineKeyboard()
    .text('Рафаэль, Альтамира и Кревеа. История Испании. Том 1', 'book-10.7.1')
    .row()
    .text('Рафаэль, Альтамира и Кревеа. История Испании. Том 2', 'book-10.7.2')
    .row()
    .text('<- Назад', 'subsection-2.4').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.4.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела "Европа - Испания"', {
        reply_markup: chapterTenth4_3Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const book_10_7_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1ARhKNEzQ0ahN5vNKBSUSsUKMhJgyePdp/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.3').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.7.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Рафаэль, Альтамира и Кревеа. История Испании. Том 1', {
        reply_markup: book_10_7_1,
    });
    await ctx.answerCallbackQuery()
});

const book_10_7_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1oOKSD0mT7aB0IWsstCYzEMJvznQfrckL/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.3').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.7.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Рафаэль, Альтамира и Кревеа. История Испании. Том 2', {
        reply_markup: book_10_7_2,
    });
    await ctx.answerCallbackQuery()
});


const chapterTenth4_4Keyboard = new InlineKeyboard()
    .text('История Европы. Том 1', 'book-10.8.1')
    .row()
    .text('История Европы. Том 2', 'book-10.8.2')
    .row()
    .text('История Европы. Том 3', 'book-10.8.3')
    .row()
    .text('История Европы. Том 4', 'book-10.8.4')
    .row()
    .text('История Европы. Том 5', 'book-10.8.5')
    .row()
    .text('<- Назад', 'subsection-2.4').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.4.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела "Европа - Общая история"', {
        reply_markup: chapterTenth4_4Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const book_10_8_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1x-rR9EhN_Z4T3zn_zMC4PMUa-5emv_-0/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.8.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 1', {
        reply_markup: book_10_8_1,
    });
    await ctx.answerCallbackQuery()
});

const book_10_8_2 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1ecN5IKJ4IBfAXpng13b4LyAVuQIB_9U2/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.8.2', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 2', {
        reply_markup: book_10_8_2,
    });
    await ctx.answerCallbackQuery()
});

const book_10_8_3 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1QXdLQyDYb7zg5WKJXbt5oaVqhjGtwrYj/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.8.3', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 3', {
        reply_markup: book_10_8_3,
    });
    await ctx.answerCallbackQuery()
});

const book_10_8_4 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1IgJH9LHTYtPKcrpeefZEFHupudC7uDY1/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.8.4', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 4', {
        reply_markup: book_10_8_4,
    });
    await ctx.answerCallbackQuery()
});

const book_10_8_5 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1PiRe75BPflRejLFdPpDS-K31MdCCaXZO/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.4').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.8.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('История Европы. Том 5', {
        reply_markup: book_10_8_5,
    });
    await ctx.answerCallbackQuery()
});


const chapterTenth4_5Keyboard = new InlineKeyboard()
    .text('Мягкая сила в черноморско-средиземноморском регионе', 'book-10.9.1')
    .row()
    .text('<- Назад', 'subsection-2.4').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.4.5', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела "Европа - Средиземноморье"', {
        reply_markup: chapterTenth4_5Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const book_10_9_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1_Lw2BGG4kPxid4HD1yNHVoJ4kYCe8VqL/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.5').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.9.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Мягкая сила в черноморско-средиземноморском регионе', {
        reply_markup: book_10_9_1,
    });
    await ctx.answerCallbackQuery()
});

const chapterTenth4_6Keyboard = new InlineKeyboard()
    .text('Фернан Бродель. Что такое Франция. Люди и вещи. Часть 2', 'book-10.10.1')
    .row()
    .text('<- Назад', 'subsection-2.4').text('Главное меню', 'main-menu');

bot.callbackQuery('subsection-2.4.6', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литература из подраздела "Европа - Франция"', {
        reply_markup: chapterTenth4_6Keyboard,
    });
    await ctx.answerCallbackQuery()
});

const book_10_10_1 = new InlineKeyboard().url('Скачать книгу', 'https://drive.google.com/file/d/1DpkfSG59R9j14bvCUg4xLhIhGbLar_ns/view?usp=sharing')
    .row().text('<- Назад', 'subsection-2.4.6').text('Главное меню', 'main-menu');

bot.callbackQuery('book-10.10.1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Фернан Бродель. Что такое Франция. Люди и вещи. Часть 2', {
        reply_markup: book_10_10_1,
    });
    await ctx.answerCallbackQuery()
});











const helpKeyboard = new InlineKeyboard()
    .text('<- Назад', 'main-back');

const feedbackKeyboard = new InlineKeyboard()
    .text('Предложить литературу', 'offer')
    .row()
    .text('Задать вопрос', 'send')
    .row()
    .text('<- Назад', 'main-back');

const feedback2Keyboard = new InlineKeyboard()
    .text('<- Назад', 'back-feedback');

const feedback3Keyboard = new InlineKeyboard()
    .text('<- Назад', 'back-feedback');

bot.command('start', async (ctx) => {
    await ctx.reply('С чего начнем ?', {
        reply_markup: startKeyboard
    });
}); //Запуск


bot.hears(/Добавить/, async (ctx) => {
    await ctx.reply('Спасибо за предложение, мы обязательно рассмотрим его в ближайшее время. 🌟👍🔍')
})



bot.callbackQuery('feedback', async (ctx) => {
    await ctx.callbackQuery.message.editText('Мы постараемся оперативно ответить на ваш запрос! 🚀👍', {
        reply_markup: feedbackKeyboard
    });
    await ctx.answerCallbackQuery()
});
bot.callbackQuery('offer', async (ctx) => {
    await ctx.callbackQuery.message.editText('На самом деле, чтобы предложить свою литературу, вам не обязательно заходить сюда.☺️  Просто отправьте нам сообщение следующего формата:\n"Добавить - Автор: ... Название: ..." 📚📝👌', {
        reply_markup: feedback2Keyboard
    });
    await ctx.answerCallbackQuery()
});
bot.callbackQuery('send', async (ctx) => {
    await ctx.callbackQuery.message.editText('Если у вас остались вопросы, не стесняйтесь писать нам на почту: libraryofinternationalrelation@gmail.com 📧🤗', {
        reply_markup: feedback3Keyboard
    });
    await ctx.answerCallbackQuery()
});




bot.callbackQuery('help', async (ctx) => {
    await ctx.callbackQuery.message.editText('📚 Как пользоваться ботом? \n \n - В разделе "Библиотека" вы можете по категориям подобрать необходимую литературу. \n \n - После выбора литературы Вам будет доступен файл для скачивания. \n \n -Если не найдете нужную литературу, сообщите Нам об этом в разделе "Обратная свзязь"\n (скорее всего добавим👌) \n \n - Остались вопросы? Пиши😘', {
        reply_markup: helpKeyboard
    });
    await ctx.answerCallbackQuery()
});



bot.callbackQuery('library', async (ctx) => {
    await ctx.callbackQuery.message.editText('Выберите подходящий раздела', {
        reply_markup: libraryKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Теория международных отношений" :', {
        reply_markup: chapterFirstKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Политология " :', {
        reply_markup: chapterSecondKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Мировая экономика" :', {
        reply_markup: chapterThirdKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Мировая политика" :', {
        reply_markup: chapterFourthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-5', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Международное право" :', {
        reply_markup: chapterFifthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-6', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "История международных отношений" :', {
        reply_markup: chapterSixthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-7', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Дипломатия и международные отношения" :', {
        reply_markup: chapterSeventhKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-8', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Геополитика и международные отношения" :', {
        reply_markup: chapterEighthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-9', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Литература по странам" :', {
        reply_markup: chapterNinthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-10', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Литература по регионам" :', {
        reply_markup: chapterTenthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('section-1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Литература по регионам" :', {
        reply_markup: chapterNinthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('section-2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздела "Литература по регионам" :', {
        reply_markup: chapterTenthKeyboard,
    });
    await ctx.answerCallbackQuery()
});













bot.callbackQuery('main-back', async (ctx) => {
    await ctx.callbackQuery.message.editText('Чем я могу помочь?', {
        reply_markup: startKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('back-feedback', async (ctx) => {
    await ctx.callbackQuery.message.editText('Мы постараемся оперативно ответить на ваш запрос! 🚀👍', {
        reply_markup: feedbackKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('main-menu', async (ctx) => {
    await ctx.callbackQuery.message.editText('Чем я могу помочь?', {
        reply_markup: startKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-back', async (ctx) => {
    await ctx.callbackQuery.message.editText('Чем я могу помочь?', {
        reply_markup: libraryKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Чем я могу помочь?', {
        reply_markup: chapterFirstKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-2', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterSecondKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-3', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterThirdKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-4', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterFourthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-5', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterFifthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-6', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterSixthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-7', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterSeventhKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-8', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterEighthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-9', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterNinthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-10', async (ctx) => {
    await ctx.callbackQuery.message.editText('-', {
        reply_markup: chapterTenthKeyboard,
    });
    await ctx.answerCallbackQuery()
});





bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;

    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    }else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    }else {
        console.error("Unknown error:", e);
    }
})//Обработка ошибок

bot.start();





// bot.hears(['Как пользоваться ботом ?', 'help'], async(ctx) => {
//     await ctx.reply('📚🌐 Я рад помочь тебе найти литературу по международным отношениям! 🌐📚Чтобы воспользоваться моими услугами, просто напиши мне ключевые слова или темы, которые тебя интересуют. Я помогу найти подходящие материалы для изучения и погружения в мир международной политики. 🌍💼   Не забудь использовать синонимы или аналоги терминов для более точного поиска! Если у тебя есть вопросы или нужна помощь — обращайся, я всегда готов помочь! 💬✨')
// })//Как пользоваться
// bot.hears(['Библиотека', 'library'], async(ctx) => {
//     const library = new InlineKeyboard()
//         .text('Теории международных отношений', 'theory')
//         .row()
//         .text('История международных отношений', 'history')
//         .row()
//         .text('Международные организации и институты', 'organizations')
//         .row()
//         .text('Глобализация и мировая экономика', 'globalization')
//         .row()
//         .text('Международная безопасность и конфликты', 'conflicts')
        
//     await ctx.reply('Выберите подходящий раздел', {
//         reply_markup: library
//     })
// })//Библиотека


// await ctx.replyWithDocument(new InputFile("./book/book 1.pdf"));