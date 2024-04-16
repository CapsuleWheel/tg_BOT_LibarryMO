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


//Команды
bot.api.setMyCommands([
    {
        command: 'start',
        description: 'Запуcк бота',
    },
    // {
    //     command: 'library',
    //     description: 'Меню',
    // },

])


//Keyboard
const startKeyboard = new InlineKeyboard()
    .text('Библиотека', 'library')
    .row()
    .text('Обратная связь', 'feedback')
    .row()
    .text('Как пользоваться ботом ?', 'help');


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

const chapterFirstKeyboard = new InlineKeyboard()
    .text('Книга 1', 'book-1.1')
    .row()
    .text('Книга 2', 'book-1.2')
    .row()
    .text('Книга 3', 'book-1.3')
    .row()
    .text('Книга 4', 'book-1.4')
    .row()
    .text('Книга 5', 'book-1.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterSecondKeyboard = new InlineKeyboard()
    .text('Книга 1', 'book-2.1')
    .row()
    .text('Книга 2', 'book-2.2')
    .row()
    .text('Книга 3', 'book-2.3')
    .row()
    .text('Книга 4', 'book-2.4')
    .row()
    .text('Книга 5', 'book-2.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterThirdKeyboard = new InlineKeyboard()
    .text('Книга 1', 'book-3.1')
    .row()
    .text('Книга 2', 'book-3.2')
    .row()
    .text('Книга 3', 'book-3.3')
    .row()
    .text('Книга 4', 'book-3.4')
    .row()
    .text('Книга 5', 'book-3.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterFourthKeyboard = new InlineKeyboard()
    .text('Книга 1', 'book-4.1')
    .row()
    .text('Книга 2', 'book-4.2')
    .row()
    .text('Книга 3', 'book-4.3')
    .row()
    .text('Книга 4', 'book-4.4')
    .row()
    .text('Книга 5', 'book-4.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterFifthKeyboard = new InlineKeyboard()
    .text('Книга 1', 'book-5.1')
    .row()
    .text('Книга 2', 'book-5.2')
    .row()
    .text('Книга 3', 'book-5.3')
    .row()
    .text('Книга 4', 'book-5.4')
    .row()
    .text('Книга 5', 'book-5.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterSixthKeyboard = new InlineKeyboard()
    .text('Книга 1', 'book-6.1')
    .row()
    .text('Книга 2', 'book-6.2')
    .row()
    .text('Книга 3', 'book-6.3')
    .row()
    .text('Книга 4', 'book-6.4')
    .row()
    .text('Книга 5', 'book-6.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterSeventhKeyboard = new InlineKeyboard()
    .text('Книга 1', 'book-7.1')
    .row()
    .text('Книга 2', 'book-7.2')
    .row()
    .text('Книга 3', 'book-7.3')
    .row()
    .text('Книга 4', 'book-7.4')
    .row()
    .text('Книга 5', 'book-7.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');
    
const chapterEighthKeyboard = new InlineKeyboard()
    .text('Книга 1', 'book-8.1')
    .row()
    .text('Книга 2', 'book-8.2')
    .row()
    .text('Книга 3', 'book-8.3')
    .row()
    .text('Книга 4', 'book-8.4')
    .row()
    .text('Книга 5', 'book-8.5')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterNinthKeyboard = new InlineKeyboard()
    .text('США', 'subsection-1.1')
    .row()
    .text('Россия', 'subsection-1.2')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const chapterTenthKeyboard = new InlineKeyboard()
    .text('Азия', 'subsection-2.1')
    .row()
    .text('Китай', 'subsection-2.2')
    .row()
    .text('Центральная Азия', 'subsection-2.3')
    .row()
    .text('Африка', 'subsection-2.4')
    .row()
    .text('Восток', 'subsection-2.5')
    .row()
    .text('Европа', 'subsection-2.6')
    .row()
    .text('Средизменоморье', 'subsection-2.7')
    .row()
    .text('Франция ', 'subsection-2.8')
    .row()
    .text('Испания ', 'subsection-2.9')
    .row()
    .text('Великобритания  ', 'subsection-2.10')
    .row()
    .text('Общая история ', 'subsection-2.11')
    .row()
    .text('<- Назад', 'chapter-back').text('Главное меню', 'main-menu');

const helpKeyboard = new InlineKeyboard()
    .text('<- Назад', 'main-back');

bot.command('start', async (ctx) => {
    await ctx.reply('С чего начнем ?', {
        reply_markup: startKeyboard
    });
}); //Запуск



bot.callbackQuery('help', async (ctx) => {
    await ctx.callbackQuery.message.editText('📚 Как пользоваться ботом? \n \n - В разделе "Библиотека" вы можете по категориям подобрать необходимую литературу. \n \n - После выбора литературы Вам будет доступен файл для скачивания. \n \n -Если не найдете нужную литературу, напишите нам с помощью раздела "Обратная связь" \n \n - Предлагайте свою литературу.', {
        reply_markup: helpKeyboard
    });
    await ctx.answerCallbackQuery()
});



bot.callbackQuery('library', async (ctx) => {
    await ctx.callbackQuery.message.editText('Выберите подходящий раздел', {
        reply_markup: libraryKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-1', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Теория международных отношений" :', {
        reply_markup: chapterFirstKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-2', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Политология " :', {
        reply_markup: chapterSecondKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-3', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Мировая экономика" :', {
        reply_markup: chapterThirdKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-4', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Мировая политика" :', {
        reply_markup: chapterFourthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-5', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Международное право" :', {
        reply_markup: chapterFifthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-6', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "История международных отношений" :', {
        reply_markup: chapterSixthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-7', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Дипломатия и международные отношения" :', {
        reply_markup: chapterSeventhKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-8', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Геополитика и международные отношения" :', {
        reply_markup: chapterEighthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-9', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Литература по странам" :', {
        reply_markup: chapterNinthKeyboard,
    });
    await ctx.answerCallbackQuery()
});

bot.callbackQuery('chapter-10', async (ctx) => {
    await ctx.callbackQuery.message.editText('Вся литературы из раздла "Литература по регионам" :', {
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