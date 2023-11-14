const page = new Vue({
  el: '#page',
  data: {
    formError: false,
    userData: {
      name: '',
      email: '',
      phone: '',
    },
    current: 0,
    features: [
      1,2,3,4,5,6,7,8
    ],
    testimonials: {
      currentIndex: 0,
      list: [
        {
          'name': 'Светлана',
          'slug': '1',
          'text': 'Проект «Онлайн-карьера в декрете» он уникален, потому что Кристина вложила в него свой опыт и душу. Я ранее уже проходила курсы по онлайн профессиям у блогера, но после него я не имела четкой позиции в том — куда бежать и с чего начать? Здесь на курсе все понятно и понимаешь, что на самом деле заработать в онлайне можно и не мало. Когда хотелось просто не слушать этот курс и бросить, Кристина обязательно давала то, что начинало триггерить и давать интерес идти дальше. Кристина пользуется в проекте различными интересными техниками (медитации, фильмы, тесты), которые помогают твоему мозгу и психике двигаться и искать работу. На данный момент я не работаю в онлайн, но только по той причине, что пока не нашла подходящей для меня работы, чтобы совмещать работу с офлайном). Но после курса с уверенностью могу сказать, что я не боюсь остаться без работы и знаю как начать зарабатывать в онлайн. Возможно, в ближайшее время, я уйду полностью из офлайн. Спасибо за душевный и работающий курс с настоящими знаниями. 💚',
          'color': 'default',
          'telegram': 'imbirka_bal',
        },
        {
          'name': 'Анастасия Подопригора',
          'slug': '2',
          'text': 'Кристина просто девушка огонь.❤️‍🔥 Мотивация, поддержка все на высшем уровне. В онлайне не работала и никогда не зарабатывала. Но уже после 4 урока освоила новую профессию Закупка рекламы у блогеров. Нашла работу и уже сейчас зарабатываю в онлайне. В планах масшатбироваться в этой сфере, как только наберусь опыта. Очень советую Всем девушкам пройти этот курс. Тут вы можете найти и подруг и любимую работу, и поддержку).',
          'color': 'blue',
          'telegram': 'AnastasiyaPodoprigora',
        },
        {
          'name': 'Анна Квасницкая',
          'slug': '3',
          'text': 'Добрый день, меня зовут Анна, я искренне благодарна Кристине, что создала этот курс для женщин, для мамочек в декрете, которые не могут решиться зарабатывать в онлайне. От курса я поняла, что нужно действовать, и если ничего не делать, не попробовав, ты и не узнаешь! Поэтому этот курс помог мне решиться на то, о чем я мечтала с 12 лет, Кристина поймет о чем я. Но я уже отобрала на вакансии, на которые откликнусь после реабилитации, и так просто опустив руки теперь уж точно не отступлю! Пинок мне поддали и я поняла, что я могу, я хочу и я справлюсь, и никакие страхи теперь ни по чем!',
          'color': 'green',
          'telegram': '',
        },
        {
          'name': 'Карина Мурзина',
          'slug': '4',
          'text': 'Я пришла на курс с желанием расширить своё мировоззрение, видение способа заработка онлайн. Честно сказать, к онлайн работе, я не относилась серьезно. Пока после первых уроков Крис не устроилась на работу, селс-менеджером. Девочки, я бы лучше голосовое записала… Так много хочется описать))) просто я считала, что продажи и Я, это не моя история. Но решила, что этот год будет, годом перемен!!! Я хочу быть другой, а как стать другой??? Надо браться за что-то новое …. то есть «съесть лягушку», точнее начать делать, то что тебе страшно делать и т. д. И, к слову сказать, я ещё ни чего, но я начинаю получать кайф от самого процесса… пишу и…. Какой же я порой могу быть сентиментальной))) девочки …. у меня годовалый ребёнок, но я рискнула и взяла работу на полный день) расписала график и урааа я все успеваю… ❤️ рискуйте, кайфуйте, меняйтесь…. Кристина на курсе даёт самую главную ценность — это веру в себя, и в свои силы и возможности!!!',
          'color': 'pink',
          'telegram': 'karina_murzina',
        },
        {
          'name': 'Анна',
          'slug': '5',
          'text': 'Добрый день) постараюсь выразить свои эмоции и выводы лаконично: Вывод о курсе- желание, чтобы его прошли тысячи женщин 🔥 Курс оправдал мои ожидания в запросе развиваться в онлайн, находясь уже в нем пол года, как копирайтер. Благодаря опыту Кристины, ее легкой и грамотной подаче знаний бизнеса в онлайн, неиссякаемой женской энергии- мне было легко понять куда двигаться дальше👏🏻 В результате приобрела курс эксперта по онлайн маркетингу🥳 и уверенно двигаюсь к цели 🎯 Основная работа, к которой уже появилось привыкание, заиграла новыми красками😍 так как я в процессе расширения и уже получила заказы по новой специальности. Главная ценность этого курса для меня- понимание, что мне можно все, о чем я мечтаю. Мне можно заниматься тем, что люблю и не бояться проявляться. И да, за это платят хоррррошие деньги. Ценность свободы, независимости и жизни в целом теперь на первом месте🫶 и в найм я больше не вернусь😎 Благодарю создателя этого потрясающего курса для женщин.',
          'color': 'default',
          'telegram': 'Anny_Text',
        },
        {
          'name': 'Анастасия',
          'slug': '6',
          'text': 'Я просто в восторге от этого курса! Я хочу поблагодарить Кристину, что создала и отдала свой глубочайший опыт, не только как в работе, так и в личном! Работа с головой колосальная! Это такая трансформация найти себя! Особенно для мам в декрете, которые погрузились в эту рутину быта и детей! Безмерно рада быть в первом потоке! Это космос🪐💫в которые запустились первые ракеты🌟🚀',
          'color': 'blue',
          'telegram': 'Nastin28',
        },
        {
          'name': 'Диана Прусская',
          'slug': '7',
          'text': 'Прослушала твоё аудио🥺 ты ж моя душа золотая, спасибо тебе за всё🥰 Мне так приятно что есть близкие, кто так меня чувствует! Это бесценно просто! Люблю🙏💜 Ты чудо человечек, вот честно от души, такие как ты переворачивают этот мир и делают его лучше💪 Да ты права, я много скилов наработала до тех пор пока не нашла как мне кажется сейчас свое дело, дело сердца 🧡 и смм и продажи, в чем я безусловно хороша))всегда знаю если будут чёрные дни пойду продавать или ногти пилить 😂но мне всегда там было тесно. после каждой консультации я чувствую себя такой счастливой, не передать словами, особенно когда потом прилетает обратная связь😂Поэтому сейчас задача стоит прокапчивать свою экспертность и научиться искать клиентов в новом он Лайн мире 😄💪 Но знаешь я ни капельки не пожалела что прохожу твой курс, и многое что для себя подчерпнула, ты правда мутишь ракету! Я вижу что это реально будет полезно тысячам женщин! Мамочкам! Мы им нужны☺️Ты им нужна!!! Жизнь длинная и надо уметь адаптироваться к новым реалиям, иметь много навыков в нашем мире просто необходимо. Да это охранительный курс, если бы я хотела начать в онлайне работать это был бы подарок! Потому что поверь все что т даёшь это 💯 %трудоустройство! Кто будет делать у тех получится!',
          'color': 'green',
          'telegram': 'DiPrusskaya',
        },
        {
          'name': 'Татьяна Бабурова',
          'slug': '8',
          'text': 'Я раньше никогда не работала в онлайне и для меня это, честно говоря, было таким тёмным лесом, что даже и приближаться к данной местности не хотелось. Всё было из-за страха, поскольку неизведанное всегда страшно. А про выход из зоны комфорта я вообще молчу. А вдруг не получится? А как же стабильность? А вдруг подведут и не заплатят? Как найти работу, если не знаешь где и что искать? После первого урока у Кристины я мало того, что поверила в свои силы, так и ещё вдохновилась так, что тут же загорелась идеей — надо попробовать обязательно, ведь я ничего не теряю. А узнав, что вакансий и профессий в онлайне большое количество я поняла точно — работу я найду. Девочки, работы в онлайне реально море и ещё океан возможностей. Я составила резюме, разослала и уже через пару дней думала и выбирала, а какое из направлений выбрать, кому сказать «да» и за какой проект хвататься)) Я выбирала, не меня) это очень крутое чувство, когда ты чувствуешь себя профвостребованным) хотя по некоторым направлениям у меня и опыта не было. Кристина рассказала на занятиях, кого ищут hr и какие качества нужно указать в резюме. Так что вы в надежных руках и не пропадёте) Одним словом, если нужен знак — то это он.))',
          'color': 'pink',
          'telegram': 'tatyana_ba92',
        },
        {
          'name': 'Журавлева Анна',
          'slug': '9',
          'text': 'Кристина, спасибо большое! Я хочу сказать, что благодаря курсу 🔺я реализуюсь, как продюсер медицинского блога, 🔺веду свой медицинский блог, который смогла монетизировать. 🔥 Наконец-то я не пропадаю на работе, а работаю по плану с 9 до 12, а остальное время провожу с детками, у меня их трое😊 Бонус ✅ Я нашла работу своему сыну 16 лет (тестирует игру и для кого-то в игре время наигрывает за деньги себе на карманные расходы).',
          'color': 'default',
          'telegram': 'detidoctoranna',
        },
        {
          'name': 'Борисова Анна',
          'slug': '10',
          'text': 'Я очень счастлива и Рада познакомиться с Кристиной и ее миром!!! Безумно благодарна что она открывает нам двери в мир онлайн профессий и доходов!!! Я в процессе изучения, трансформаций и чувствования того, «что есть мое?»🥰 Приходится переобуваться и перепрошивать свои нейронные связи из старого сознания!!! Иду медленно, но осознанно, вкушая каждый сантиметр своих изменений Ощущение что я нахожусь в машине времени.',
          'color': 'blue',
          'telegram': 'Annyboriska',
        },
        {
          'name': 'Анна',
          'slug': '11',
          'text': 'Курс дал мне понять, что будущее за интернет профессиями, и что сидя дома с ребенком тоже можно развиваться, общаться, повышать свои навыки. Я раньше не работала в онлайне, мне правда сложно кому-то доверять, но я думаю не попробуешь, не узнаешь. Поэтому написала себе план и интересные мне профессии, буду двигаться в этом направлении. Курс полностью оправдал ожидания и даже превзошел😻 У меня появилась уверенность что я не останусь в случае чего одна с ребенком без средств существования. На данный момент хочу попробовать себя в качестве sales менеджера. Интересна профессия куратора, ассистента. Еще не заработала, верю что впереди она меня ждёт 😻 Главное это твое отношение к себе, и только тебе выбирать как реагировать на те или иные обстоятельства жизни 😇',
          'color': 'green',
          'telegram': 'AnnAS2208',
        },
        {
          'name': 'Анастасия Загородняя',
          'slug': '12',
          'text': 'Кристина, от всей души благодарю за возможность пройти обучение на курсе! Для меня он стал отправной точкой к моей проявленности! Я не первый день работаю онлайн, но в основном я всегда работала на кого-то и с кем-то и мой основной запрос был — начать зарабатывать на собственных знаниях. Мне действительно не хватало уверенности и понимания как выстроить процессы, с чего начать, как организовать? Было очень много страхов. Благодарю обучению я просто начала это делать! Я поняла, что просто не могу не делиться своими знаниями и опытом. Кристина — тот человек, который умеет проявлять сильные стороны людей! Столько интересных историй было во время курса! Из изменений в жизни: я переехала в столицу; компания в которой я работаю вышла на международный уровень; я стала проводить личные консультации и развивать свой бренд. На курсе я познакомилась с интересными людьми!) Одним из главных осознаний стало то, что я чувствую внутреннюю самоценность и опору в себе. Я четко знаю, что возможно всё! Как только мы себе разрешаем что-то иметь — это входит в нашу жизнь и видеть результаты этих осознаний — невероятно вдохновляющее явление😍 Благодарю! Благодарю! Благодарю!',
          'color': 'pink',
          'telegram': 'Anastasia_Ostwald',
        },
        {
          'name': 'Евдокимова Дарья',
          'slug': '13',
          'text': 'От всей души благодарю Кристину за этот курс! 🙏🙏🙏 Ни разу не пожалела, что пришла на него! Хочу, чтобы любая мама в декрете обязательно поучаствовала в нем, и не важно, ищет она работу в онлайне или нет🤗 Кристина даёт невероятную энергетику, «пинок», веру в себя — это лучшая ценность для любой мамы, которая сидит дома, хочет реализовываться, но не знает как. После этого курса можно «взлететь», почувствовать себя женщиной, научиться совмещать работу и удовольствие, раскрыть свой потенциал, про который раньше не догадывались или забыли🥰',
          'color': 'default',
          'telegram': 'Daria_trilogy',
        },
        {
          'name': 'Людмила',
          'slug': '14',
          'text': 'Кристиночка я благодарю тебя за этот курс! Ты настолько искренне четко с любовью и большим упорством доносила информацию, что ее невозможно было не услышать. Я не знаю как, но ты действительно находишь ключики к каждой и спасибо тебе за это! Я уже давно на протяжении пяти лет занимаюсь кондитерским искусством, пеку торты на заказ, но все эти пять лет я в голове думала, что это не серьезно никак не проявлялась говорила это все хобби не развивала свое направление. И сейчас в моей голове как будто все поменялось, я пошла учиться на новый кондитерский курс, стала вести свою страничку, развивать ее. Стала открыта для этого и у меня сразу пошли заказы, как будто вселенная увидела мое намерение. Все у нас в голове и когда мы меняем свои установки меняется все. Как раньше уже точно не будет. По поводу онлайн работы, я прошла собеседование и меня готовы принять, но я решила пока повременить и пойти в другом направлении. Но я всегда знаю, что если мне будет нужна работа в онлайн я ее обязательно найду. Ещё раз огромное тебе спасибо!',
          'color': 'blue',
          'telegram': 'Ludmila_mila_cake',
        },
        {
          'name': 'Семенова Алена ',
          'slug': '15',
          'text': 'Записавшись на курс к Кристине, я даже не понимала «куда, зачем и что» будет в этом проекте, просто увидела и решила, что «надо». Трансформация в голове произошла огромная, как в лучшую сторону, так и всплыли все тормозящие процессы по самореализации. Но. теперь я знаю, что с этим делать и как проработать. От Кристины мы все получили толчок к действиям, дружеские напутствия и поддержку. Проект сделан с душой и сердцем ❤️ сейчас я в поиске своего дела и верю, что оно меня найдёт, потому что я так решила 💯',
          'color': 'green',
          'telegram': 'alenanikolaevskaya',
        },
        {
          'name': 'Бондаренко Елена',
          'slug': '16',
          'text': 'Начну с того, что это мой первый опыт прохождения онлайн курсов) И я здесь вначале была как слепой котенок😃 Я не знала даже сленговую терминологию онлайн бизнеса) Но Кристинка — профи своего дела! Акула инфобиза🐋 Внимательная, открытая, душевная, легкая, энергетически нереальная! ☄️💥💫 Восхищаюсь ей! И Благодарю за новые открытия в моей голове 🙏😘 Каждый новый урок захватывал внимание. мы вместе и улыбались, и плакали порой от невероятных историй…. Все уроки курса информативные, проходят доступно и на одном дыхании) Интересно, проникновенно, с юмором, на простом языке)) Это на бесполезных бесплатных вебинарах беспрерывно тараторят и льют только воду. Это совершенно другой курс!!! Он прям женский-женский))) О нас, мамочках в декрете и не только . О том, как можно совмещать семью и работу и быть счастливой и успешной! Здесь даются все инструменты, собранный собственный опыт и знания на пути к своему успеху! Это не только деловой курс, а на 80% психологический! Кристина прям всковырнула и напрочь перевернула мой мозг и мое мышление (мышление скептика) У меня совершенно другие установки были в голове и я начинаю понимать, а ведь правильные вещи говорит…! Итог: курс просто необходим для собственной перезагрузки! 🔄 Что касается Работы мечты, то я еще не нашла, но у меня все впереди! Я знаю, что в онлайн она есть 💯 Просто первый шаг в мир неизведанного сделать, оказывается не просто 😉',
          'color': 'pink',
          'telegram': 'Bondalenka',
        },
        {
          'name': 'Юлия Мельникова',
          'slug': '17',
          'text': 'Я поняла куда хочу двигаться и как нравится работать. Что я действительно хочу работать сама, мне нравится проводить консультации и выбирать самой время. За время курса я начала себя продвигать, раскрывать, не стесняться, искать возможности, решила пойти дальше на курс мастера, ещё все-таки думаю про курс на методиста, заработать с консультаций на него. И всё это благодаря тебе 🥺 И это только малая часть того, что я могу сказать 😻',
          'color': 'default',
          'telegram': 'me1jul',
        },
        {
          'name': 'Ирина Белоусова',
          'slug': '18',
          'text': 'Кристюша, дорогая, не смогла дослушать урок до конца. Курс был ценным, отправляла сестру свою к тебе. И он очень полезен не только для мам в декрете, еще и Для тех, кто в целом далек от мира онлайна- это прям разрыв шаблонов. Еще когда был последний урок сегодня, мне пришла мысль (видела у кого-то в инсте) О том что круто в будущем приглашать всех желающих на выпускной курса. Это и проявленность тех кто будет рассказывать о своих победах и для тех кто сомневается идти или нет, увидит горящие глаза девочек)) Такая фантазия пришла. Что это было бы ценно всем.',
          'color': 'blue',
          'telegram': 'BelousovaIra',
        },
        {
          'name': 'Марина Степанова',
          'slug': '19',
          'text': 'Я очень благодарна, Кристине, за этот прекрасный проект. Она так выстроила программу, что просто невозможно не начать действовать. Она дала всё инструменты. Я пришла на проект с открытым сердцем, готовая выполнять всё рекомендации, чтобы наконец сдвинуться с места и уйти из найма. Я была просто поражена сколько профессий в онлайне. Конечно самой было бы сложно построить путь. Но теперь я точно знаю, как действовать и почему у меня точно получится. В поисках работы нашла свои слабые стороны и начала работать над устранением пробелов. А ещё вынесла главное: «Иди туда, где страшно, страха нет!!!» Очень здорово, что есть поддержка девочек в чате. Кристина, ты умница!!! Благодарю, благодарю, благодарю. ❤️',
          'color': 'green',
          'telegram': 'MarshkaStepanova',
        },
      ],
    },
    regalia: [
      'Многодетная <span>мама</span>.',
      '<span>Интернет-предприниматель</span> с 2013 года.',
      'Опыт продюсирования экспертов <span>более 10 лет</span>.',
      'Основательница продюсерского центра <span>GordovMedia</span>.',
      'Ежемесячный доход в онлайне более <span>2 000 000 рублей</span>.',
      '<span>1000+ часов консультаций</span> с женщинами по запуску и масштабированию их проектов.',
      'Запустила <span>более 50 экспертов</span> на рынке онлайн-образования.',
      '<span>Профи в прогревах и продажах</span> на большие чеки.',
      'Создала онлайн-проект для женщин «<span>Онлайн-карьера в декрете</span>», чтобы поддержать женщин на пути совмещения материнства и самореализации с заботой и любовью!',
    ],
    modalData: {
      show: false
    },
  },
  computed: {
    currentTestimonial() {
      return this.testimonials.list[this.testimonials.currentIndex]
    }
  },
  methods: {
    switchTestimonial(index) {
      if (index == (this.testimonials.list.length)) {
        this.testimonials.currentIndex = 0
      } else if (index < 0) {
        this.testimonials.currentIndex = this.testimonials.list.length - 1
      }  else {
        this.testimonials.currentIndex = index
      }
    },
    scrollTo(target) {
      this.$refs[target].scrollIntoView({
        behavior: 'smooth'
      })
    },
    getUtm(name) {
      const url = new URL(window.location.href)
      const param = url.searchParams.get(name)
      if (param) {
        return '&' + name + '=' + param
      }
      return ''
    },
    sendData() {
      if (this.userData.name.length && this.userData.email.length && this.userData.phone.length) {
        let link = 'https://salebot.site/mama_v_online_1?'
          + 'phone=' + this.userData.phone
          + '&email=' + this.userData.email
          + '&username=' + this.userData.name
          + this.getUtm('gcao')
          + this.getUtm('gcpc')
          + this.getUtm('utm_source')
          + this.getUtm('utm_medium')
          + this.getUtm('utm_campaign')
          + this.getUtm('utm_term')
          + this.getUtm('utm_content')
        window.location.href = link
      } else {
        this.formError = true
      }
    },
  },
  watch: {
    current(value) {
      if (value <= -this.features.length) {
        this.current = 0
      }
      if (value > 0) {
        this.current = -(this.features.length - 1)
      }
      const itemWidthFull = this.$refs.listFull.dataset.itemWidth
      const itemWidth960 = this.$refs.list960.dataset.itemWidth
      this.$refs.listFull.style.left = (this.current * itemWidthFull) + 'px'
      this.$refs.list960.style.left = (this.current * itemWidth960) + 'px'
    },
    'modalData.show'(show) {
      if (show) {
        document.body.classList.add('v-modal')
      } else {
        document.body.classList.remove('v-modal')
      }
    },
  },
  mounted() {
    AOS.init({
      disable: 'mobile'
    })
  },
})