const testimonialsV0 = new Vue({
    'el': '#s-testimonials-v0',
    data: {
      testimonials: {
        currentIndex: 0,
        list: [
          {
            'name': 'Milana',
            'slug': '32',
            'text': 'Привет девочки). У меня всё также прёт вдохновение после курса, и то… я как двоечница его проходила, перебежками🤞🏻но заряда хватило даже с минимальным участием). Я поверила в себя заново и продолжаю создавать свой проект), скоро мне понадобятся помощницы и менеджеры онлайн😌. ❤️❤️❤️❤️❤️❤️❤️❤️❤️ 1. Совместные Закупки из Турции (вещи, бренды, обувь, детские товары, продукты). 2. Онлайн магазин с компанией Дотерра. 3. Учусь индивидуально у профессионального человека на онлайн аналитика в сфере инвестиций (ценные бумаги, биржа, недвижимость).',
            'color': 'green',
            'telegram': 'Milana888a',
            'video_url': false,
          },
          {
            'name': 'Маша Соломина',
            'slug': '31',
            'text': 'Кристина здравствуй.Твой курс действительно уникальный🔥🔥🔥Я буду с радостью наблюдать за его развитием🙏🙏🙏, потому что он действительно необходим многим!!! Прежней я уже точно не буду, в этом курсе заложена сила духа какая то🔥🔥🔥.Но☝️, лично о себе скажу, что в какой-то момент во время прохождения курса поймала себя на мысли, что всё🤦🏼‍♀️»дальше я не осилю».Но я почему-то продолжала откликаться на вакансии и действовать минимальными шагами в своем направлении не понимая куда иду!!! Осознаю, что именно этот курс дает силу действовать🔥🔥🔥🙏🙏🙏 и двигаюсь дальше!!! Это конечно, дорогого стоит!!! Благодарю куратора курса ❤️за её помощь и отзывчивость❤️💕😘🥰Верю, что ещё многого достигну, я уже точно не остановлюсь🔥🔥🔥💕💕💕❤️❤️❤️',
            'color': 'pink',
            'telegram': 'MariiaMartin',
            'video_url': false,
          },
          {
            'name': 'Лидия Юхина',
            'slug': false,
            'text': false,
            'color': 'green',
            'telegram': false,
            'video_id': '2ohBkIpL1SQ',
          },
          {
            'name': 'Алена Хрулева',
            'slug': '30',
            'text': 'Я прошла этот курс и точно провела время с пользой! Я узнала что такое любовь к себе. Передо мной открылось великое множество онлайна. Я узнала о многих онлайн профессиях. Так же как планировать свой бюджет и составлять правильно резюме Самое главное этот курс подойдет абсолютно каждой, потому что сделан с душой😍 Все что мне нужно было от курса я получила! Желаю, чтобы этот курс посмотрела каждая девушка, женщина😍',
            'color': 'default',
            'telegram': 'alenyshkarizbul',
            'video_url': false,
          },
          {
            'name': 'Инга',
            'slug': '29',
            'text': 'Я искренне, благодарна Кристиночке, за такой прекрасный курс, за эту лёгкость, с которой она доносит информацию. На курсе я узнала очень много всего интересного про онлайн работу. Благодаря курсу я начала больше проявляться, напоминать себе, что я у себе на первом месте и началось движение в моей жизни)) Люди стали подписываться, количество клиентов увеличилось. Есть к чему стремиться, куда расти, но всё через расслабление и любовь к себе 💜',
            'color': 'blue',
            'telegram': 'Agni951',
            'video_url': false,
          },
          {
            'name': 'Настя Юдаева',
            'slug': '28',
            'text': 'Это был чудесный месяц, которые перевернул мое восприятие, мою жизнь, подарил возможность увидеть себя с другой стороны. Кристина чудесный, открытый наставник, от который идёт тёплая энергия, вера в свои силы. В моменты, когда совсем опускаются руки, послушав урок буквально 15 минут, меняется настроение и идёт мощная мотивация. Я очень рада, что прошла обучение и получила эту волну волшебства ❤️❤️❤️Благодарю 🙏',
            'color': 'green',
            'telegram': 'nastyayudaeva',
            'video_url': false,
          },
          {
            'name': 'Оксана Задорова',
            'slug': '27',
            'text': 'Я хочу сказать огромное Кристиночка за Ваш курс, благодаря Вашему курсу я поменяла мышление по поводу работы в онлайне, ее очень много, Отдельное спасибо за канал с вакансиями 😘😍 Отличный курс, определенно не жалею, что прошла его, и как поменяло и перестроило мое видение об онлайне.',
            'color': 'pink',
            'telegram': '',
            'video_url': false,
          },
          {
            'name': 'Светлана Алексеева',
            'slug': '26',
            'text': 'Ну вот и я созрела на отзыв о курсе Онлайн-карьера в декрете! 😌 Я шла на курс с целью перепрошить свой мозг, начать ценить себя, свое время, выйти на новый уровень доходов, не начав при этом работать еще больше! И если опыт работы онлайн у меня уже был, то для меня всегда оставалось загадкой — почему я в финансах стою на месте? постоянно в запаре? почему у меня постоянно нет сил ни на что кроме работы? почему вот у всех получается — у меня нет? почему специалисты с более слабыми знаниями получают намного больше чем я? успевают при этом заниматься детьми, любимым хобби? И я получила на курсе ответы на эти важные вопросы! Из моих изменений: ✔️ в моем плане теперь всегда есть отдых для себя, даже записалась в библиотеку (давно хотела) — хочу проводить больше времени за книгами, узнавать новое! я нашла на это время😉 еще планирую пойти в спорт, пока выбираю направление) чтобы вы понимали, раньше сделать что-то для себя — было прямо редкостью, это реально прорыв! для ребенка, для работы — сколько угодно, про себя и свои желания я просто не вспоминала… ✔️ перестала надеяться на «надежный» офис, открыта к новым предложениям, мониторю вакансии, не откликаюсь на первые попавшие, и кажется скоро попаду в классный онлайн-проект, это максимально меня сейчас заряжает и придает сил! 🤞🏻 ✔️, а еще сегодня (10.04) я… забила на работу в офисе и ушла на больничный с ребенком! Мне казалось раньше что без меня там не справятся, просила бабушку сидеть с дочкой, приходила работать в любом состоянии, не могла сделать одну нужную мне операцию осенью! в отпуске постоянно подключалась удалённо, разбирала завал вопросов без конца, так как думала мир рухнет без меня ну…сегодня не рухнул 😂 как итог — отличное настроение, ребенок рад что мама рядом и идет на поправку, внутри меня — сила, что я делаю первые шаги в том, что важнее всего в этой жизни — я и моя семья! чтобы вы понимали, этот мой поступок удивил сегодня всех, да меня тоже — просто в голове уже все иначе, и это не может не радовать ☺️ и теперь будет именно так) Кристина, не перестаю восхищаться тобой! 😘 Благодарю за курс, благодарю за все знания которыми ты щедро делишься, как ты открыта с нами! Сейчас я своими собственными руками улучшаю свою жизнь и буду продолжать это делать и наблюдать к каким изменениям это меня приведет! Желаю каждой «загнавшейся» женщине пройти этот курс и осознать такие простые и банальные вещи, принять это в свою жизнь!',
            'color': 'default',
            'telegram': 'svetlana22_02 ',
            'video_url': false,
          },
          {
            'name': 'Анжела Захарова',
            'slug': '25',
            'text': 'Спасибо большое Кристиночке за прекрасный курс для женщин. Много всегда у блогеров вижу всяких курсов, всегда хочется, но что-то останавливало. Это первый курс на который я решилась и не пожалела. Он для меня стал большим толчком. Я 10 лет была в декрете, после которого мне уже страшно было выходить во внешний мир. Я не пошла работать онлайн, т.к итак сидела огромное время дома. За лет впервые вышла на работу, в коллектив. В какой-то момент хотелось уйти и все бросить, потому что было сложно первые дни на работе, но потом я вспомнила наставления Кристины и не сдалась. Так же огромное спасибо куратору Танюше, за помощь, поддержку. Всегда на связи. Я не дошла курс до конца, мне хватило всего трех уроков, на остальные пока нет времени, работа занимает большую часть времени. Но я обязательно их досмотрю. ❤️',
            'color': 'blue',
            'telegram': 'ZaharovaAngela',
            'video_url': false,
          },
          {
            'name': 'Мия Ра',
            'slug': '24',
            'text': 'Хочу выразить большую благодарность Кристине Гордовой за курс Онлайн-Карьера🤗🔥. Даже только лишь ради энергетики и добродушия Кристины, ее искренней вовлеченности и заинтересованности в результатах каждой участницы, стоит сюда пойти. Для меня это самое ценное в любом курсе. Сам курс очень заряжает, мотивирует желать большего, не соглашаться на меньшее, вдохновляет сдвинуться с мертвой точки, зажигает глаза🥰. Дает конкретные инструменты для дела и для поддержания состояния вдохновения. Отдельная благодарность куратору Тане за каждодневную поддержку и обратную связь в чате, это очень ценно🔥 Когда я шла на курс, я была именно в состоянии тупика, подавленности. Были желания, понимала чего хочу, но не знала как и не было сил, была подкошена вера в себя и свою ценность после определенных разочарований в прошлом. Уже после второго-третьего занятия я ожила, приняла определенные решения, в том числе и в личной жизни. Создаю сейчас свой проект, который забросила больше года назад. Поняла как хочу, а как нет. Перестала бояться, выбрала себя❤️ Я искренне желаю каждой девочке, которая хочет встать на ноги, поверить в себя, найти себе дело по душе в онлайн, чтобы она пошла на данный курс. Случайностей нет, если вам попался курс, значит вам сюда надо). Желаю всем больших успехов и любимого дела. А курсу Кристинки огромной известности, так как курс уникален и эффективен, ничего подобного не встречала в данной теме🙏❤️',
            'color': 'green',
            'telegram': 'MiaCoach',
            'video_url': false,
          },
          {
            'name': 'Светлана Гордова',
            'slug': '23',
            'text': 'Благодарю Вас за внимание ко мне, курс великолепен 👍, я благодарна Кристюше, Вам и всем девочкам с курса. Иду путём протоптанной системы, которую выработала за годы практики- взяла 4 компании на обслуживание, параллельно пишу обучающий курс для действующих бухгалтеров по системе снижения налоговой нагрузки с применением ВЭД, а также курс для начинающих бухгалтеров, это сразу с основами экономики и юриспруденции, знание этих аспектов неотделимо от знаний Стандартов Б/У и НУ. Ещё раз благодарю за внимание ко мне 🥰',
            'color': 'pink',
            'telegram': '',
            'video_url': false,
          },
          {
            'name': 'Светлана',
            'slug': '1',
            'text': 'Проект «Онлайн-карьера в декрете» он уникален, потому что Кристина вложила в него свой опыт и душу. Я ранее уже проходила курсы по онлайн профессиям у блогера, но после него я не имела четкой позиции в том — куда бежать и с чего начать? Здесь на курсе все понятно и понимаешь, что на самом деле заработать в онлайне можно и не мало. Когда хотелось просто не слушать этот курс и бросить, Кристина обязательно давала то, что начинало триггерить и давать интерес идти дальше. Кристина пользуется в проекте различными интересными техниками (медитации, фильмы, тесты), которые помогают твоему мозгу и психике двигаться и искать работу. На данный момент я не работаю в онлайн, но только по той причине, что пока не нашла подходящей для меня работы, чтобы совмещать работу с офлайном). Но после курса с уверенностью могу сказать, что я не боюсь остаться без работы и знаю как начать зарабатывать в онлайн. Возможно, в ближайшее время, я уйду полностью из офлайн. Спасибо за душевный и работающий курс с настоящими знаниями. 💚',
            'color': 'default',
            'telegram': 'imbirka_bal',
            'video_url': false,
          },
          {
            'name': 'Анастасия Подопригора',
            'slug': '2',
            'text': 'Кристина просто девушка огонь.❤️‍🔥 Мотивация, поддержка все на высшем уровне. В онлайне не работала и никогда не зарабатывала. Но уже после 4 урока освоила новую профессию Закупка рекламы у блогеров. Нашла работу и уже сейчас зарабатываю в онлайне. В планах масшатбироваться в этой сфере, как только наберусь опыта. Очень советую Всем девушкам пройти этот курс. Тут вы можете найти и подруг и любимую работу, и поддержку).',
            'color': 'blue',
            'telegram': 'AnastasiyaPodoprigora',
            'video_url': false,
          },
          {
            'name': 'Анна Квасницкая',
            'slug': '3',
            'text': 'Добрый день, меня зовут Анна, я искренне благодарна Кристине, что создала этот курс для женщин, для мамочек в декрете, которые не могут решиться зарабатывать в онлайне. От курса я поняла, что нужно действовать, и если ничего не делать, не попробовав, ты и не узнаешь! Поэтому этот курс помог мне решиться на то, о чем я мечтала с 12 лет, Кристина поймет о чем я. Но я уже отобрала на вакансии, на которые откликнусь после реабилитации, и так просто опустив руки теперь уж точно не отступлю! Пинок мне поддали и я поняла, что я могу, я хочу и я справлюсь, и никакие страхи теперь ни по чем!',
            'color': 'green',
            'telegram': '',
            'video_url': false,
          },
          {
            'name': 'Карина Мурзина',
            'slug': '4',
            'text': 'Я пришла на курс с желанием расширить своё мировоззрение, видение способа заработка онлайн. Честно сказать, к онлайн работе, я не относилась серьезно. Пока после первых уроков Крис не устроилась на работу, селс-менеджером. Девочки, я бы лучше голосовое записала… Так много хочется описать))) просто я считала, что продажи и Я, это не моя история. Но решила, что этот год будет, годом перемен!!! Я хочу быть другой, а как стать другой??? Надо браться за что-то новое …. то есть «съесть лягушку», точнее начать делать, то что тебе страшно делать и т. д. И, к слову сказать, я ещё ни чего, но я начинаю получать кайф от самого процесса… пишу и…. Какой же я порой могу быть сентиментальной))) девочки …. у меня годовалый ребёнок, но я рискнула и взяла работу на полный день) расписала график и урааа я все успеваю… ❤️ рискуйте, кайфуйте, меняйтесь…. Кристина на курсе даёт самую главную ценность — это веру в себя, и в свои силы и возможности!!!',
            'color': 'pink',
            'telegram': 'karina_murzina',
            'video_url': false,
          },
          {
            'name': 'Анна',
            'slug': '5',
            'text': 'Добрый день) постараюсь выразить свои эмоции и выводы лаконично: Вывод о курсе- желание, чтобы его прошли тысячи женщин 🔥 Курс оправдал мои ожидания в запросе развиваться в онлайн, находясь уже в нем пол года, как копирайтер. Благодаря опыту Кристины, ее легкой и грамотной подаче знаний бизнеса в онлайн, неиссякаемой женской энергии- мне было легко понять куда двигаться дальше👏🏻 В результате приобрела курс эксперта по онлайн маркетингу🥳 и уверенно двигаюсь к цели 🎯 Основная работа, к которой уже появилось привыкание, заиграла новыми красками😍 так как я в процессе расширения и уже получила заказы по новой специальности. Главная ценность этого курса для меня- понимание, что мне можно все, о чем я мечтаю. Мне можно заниматься тем, что люблю и не бояться проявляться. И да, за это платят хоррррошие деньги. Ценность свободы, независимости и жизни в целом теперь на первом месте🫶 и в найм я больше не вернусь😎 Благодарю создателя этого потрясающего курса для женщин.',
            'color': 'default',
            'telegram': 'Anny_Text',
            'video_url': false,
          },
          {
            'name': 'Анастасия',
            'slug': '6',
            'text': 'Я просто в восторге от этого курса! Я хочу поблагодарить Кристину, что создала и отдала свой глубочайший опыт, не только как в работе, так и в личном! Работа с головой колосальная! Это такая трансформация найти себя! Особенно для мам в декрете, которые погрузились в эту рутину быта и детей! Безмерно рада быть в первом потоке! Это космос🪐💫в которые запустились первые ракеты🌟🚀',
            'color': 'blue',
            'telegram': 'Nastin28',
            'video_url': false,
          },
          {
            'name': 'Диана Прусская',
            'slug': '7',
            'text': 'Прослушала твоё аудио🥺 ты ж моя душа золотая, спасибо тебе за всё🥰 Мне так приятно что есть близкие, кто так меня чувствует! Это бесценно просто! Люблю🙏💜 Ты чудо человечек, вот честно от души, такие как ты переворачивают этот мир и делают его лучше💪 Да ты права, я много скилов наработала до тех пор пока не нашла как мне кажется сейчас свое дело, дело сердца 🧡 и смм и продажи, в чем я безусловно хороша))всегда знаю если будут чёрные дни пойду продавать или ногти пилить 😂но мне всегда там было тесно. после каждой консультации я чувствую себя такой счастливой, не передать словами, особенно когда потом прилетает обратная связь😂Поэтому сейчас задача стоит прокапчивать свою экспертность и научиться искать клиентов в новом он Лайн мире 😄💪 Но знаешь я ни капельки не пожалела что прохожу твой курс, и многое что для себя подчерпнула, ты правда мутишь ракету! Я вижу что это реально будет полезно тысячам женщин! Мамочкам! Мы им нужны☺️Ты им нужна!!! Жизнь длинная и надо уметь адаптироваться к новым реалиям, иметь много навыков в нашем мире просто необходимо. Да это охранительный курс, если бы я хотела начать в онлайне работать это был бы подарок! Потому что поверь все что т даёшь это 💯 %трудоустройство! Кто будет делать у тех получится!',
            'color': 'green',
            'telegram': 'DiPrusskaya',
            'video_url': false,
          },
          {
            'name': 'Татьяна Бабурова',
            'slug': '8',
            'text': 'Я раньше никогда не работала в онлайне и для меня это, честно говоря, было таким тёмным лесом, что даже и приближаться к данной местности не хотелось. Всё было из-за страха, поскольку неизведанное всегда страшно. А про выход из зоны комфорта я вообще молчу. А вдруг не получится? А как же стабильность? А вдруг подведут и не заплатят? Как найти работу, если не знаешь где и что искать? После первого урока у Кристины я мало того, что поверила в свои силы, так и ещё вдохновилась так, что тут же загорелась идеей — надо попробовать обязательно, ведь я ничего не теряю. А узнав, что вакансий и профессий в онлайне большое количество я поняла точно — работу я найду. Девочки, работы в онлайне реально море и ещё океан возможностей. Я составила резюме, разослала и уже через пару дней думала и выбирала, а какое из направлений выбрать, кому сказать «да» и за какой проект хвататься)) Я выбирала, не меня) это очень крутое чувство, когда ты чувствуешь себя профвостребованным) хотя по некоторым направлениям у меня и опыта не было. Кристина рассказала на занятиях, кого ищут hr и какие качества нужно указать в резюме. Так что вы в надежных руках и не пропадёте) Одним словом, если нужен знак — то это он.))',
            'color': 'pink',
            'telegram': 'tatyana_ba92',
            'video_url': false,
          },
          {
            'name': 'Журавлева Анна',
            'slug': '9',
            'text': 'Кристина, спасибо большое! Я хочу сказать, что благодаря курсу 🔺я реализуюсь, как продюсер медицинского блога, 🔺веду свой медицинский блог, который смогла монетизировать. 🔥 Наконец-то я не пропадаю на работе, а работаю по плану с 9 до 12, а остальное время провожу с детками, у меня их трое😊 Бонус ✅ Я нашла работу своему сыну 16 лет (тестирует игру и для кого-то в игре время наигрывает за деньги себе на карманные расходы).',
            'color': 'default',
            'telegram': 'detidoctoranna',
            'video_url': false,
          },
          {
            'name': 'Борисова Анна',
            'slug': '10',
            'text': 'Я очень счастлива и Рада познакомиться с Кристиной и ее миром!!! Безумно благодарна что она открывает нам двери в мир онлайн профессий и доходов!!! Я в процессе изучения, трансформаций и чувствования того, «что есть мое?»🥰 Приходится переобуваться и перепрошивать свои нейронные связи из старого сознания!!! Иду медленно, но осознанно, вкушая каждый сантиметр своих изменений Ощущение что я нахожусь в машине времени.',
            'color': 'blue',
            'telegram': 'Annyboriska',
            'video_url': false,
          },
          {
            'name': 'Анна',
            'slug': '11',
            'text': 'Курс дал мне понять, что будущее за интернет профессиями, и что сидя дома с ребенком тоже можно развиваться, общаться, повышать свои навыки. Я раньше не работала в онлайне, мне правда сложно кому-то доверять, но я думаю не попробуешь, не узнаешь. Поэтому написала себе план и интересные мне профессии, буду двигаться в этом направлении. Курс полностью оправдал ожидания и даже превзошел😻 У меня появилась уверенность что я не останусь в случае чего одна с ребенком без средств существования. На данный момент хочу попробовать себя в качестве sales менеджера. Интересна профессия куратора, ассистента. Еще не заработала, верю что впереди она меня ждёт 😻 Главное это твое отношение к себе, и только тебе выбирать как реагировать на те или иные обстоятельства жизни 😇',
            'color': 'green',
            'telegram': 'AnnAS2208',
            'video_url': false,
          },
          {
            'name': 'Анастасия Загородняя',
            'slug': '12',
            'text': 'Кристина, от всей души благодарю за возможность пройти обучение на курсе! Для меня он стал отправной точкой к моей проявленности! Я не первый день работаю онлайн, но в основном я всегда работала на кого-то и с кем-то и мой основной запрос был — начать зарабатывать на собственных знаниях. Мне действительно не хватало уверенности и понимания как выстроить процессы, с чего начать, как организовать? Было очень много страхов. Благодарю обучению я просто начала это делать! Я поняла, что просто не могу не делиться своими знаниями и опытом. Кристина — тот человек, который умеет проявлять сильные стороны людей! Столько интересных историй было во время курса! Из изменений в жизни: я переехала в столицу; компания в которой я работаю вышла на международный уровень; я стала проводить личные консультации и развивать свой бренд. На курсе я познакомилась с интересными людьми!) Одним из главных осознаний стало то, что я чувствую внутреннюю самоценность и опору в себе. Я четко знаю, что возможно всё! Как только мы себе разрешаем что-то иметь — это входит в нашу жизнь и видеть результаты этих осознаний — невероятно вдохновляющее явление😍 Благодарю! Благодарю! Благодарю!',
            'color': 'pink',
            'telegram': 'Anastasia_Ostwald',
            'video_url': false,
          },
          {
            'name': 'Евдокимова Дарья',
            'slug': '13',
            'text': 'От всей души благодарю Кристину за этот курс! 🙏🙏🙏 Ни разу не пожалела, что пришла на него! Хочу, чтобы любая мама в декрете обязательно поучаствовала в нем, и не важно, ищет она работу в онлайне или нет🤗 Кристина даёт невероятную энергетику, «пинок», веру в себя — это лучшая ценность для любой мамы, которая сидит дома, хочет реализовываться, но не знает как. После этого курса можно «взлететь», почувствовать себя женщиной, научиться совмещать работу и удовольствие, раскрыть свой потенциал, про который раньше не догадывались или забыли🥰',
            'color': 'default',
            'telegram': 'Daria_trilogy',
            'video_url': false,
          },
          {
            'name': 'Людмила',
            'slug': '14',
            'text': 'Кристиночка я благодарю тебя за этот курс! Ты настолько искренне четко с любовью и большим упорством доносила информацию, что ее невозможно было не услышать. Я не знаю как, но ты действительно находишь ключики к каждой и спасибо тебе за это! Я уже давно на протяжении пяти лет занимаюсь кондитерским искусством, пеку торты на заказ, но все эти пять лет я в голове думала, что это не серьезно никак не проявлялась говорила это все хобби не развивала свое направление. И сейчас в моей голове как будто все поменялось, я пошла учиться на новый кондитерский курс, стала вести свою страничку, развивать ее. Стала открыта для этого и у меня сразу пошли заказы, как будто вселенная увидела мое намерение. Все у нас в голове и когда мы меняем свои установки меняется все. Как раньше уже точно не будет. По поводу онлайн работы, я прошла собеседование и меня готовы принять, но я решила пока повременить и пойти в другом направлении. Но я всегда знаю, что если мне будет нужна работа в онлайн я ее обязательно найду. Ещё раз огромное тебе спасибо!',
            'color': 'blue',
            'telegram': 'Ludmila_mila_cake',
            'video_url': false,
          },
          {
            'name': 'Семенова Алена ',
            'slug': '15',
            'text': 'Записавшись на курс к Кристине, я даже не понимала «куда, зачем и что» будет в этом проекте, просто увидела и решила, что «надо». Трансформация в голове произошла огромная, как в лучшую сторону, так и всплыли все тормозящие процессы по самореализации. Но. теперь я знаю, что с этим делать и как проработать. От Кристины мы все получили толчок к действиям, дружеские напутствия и поддержку. Проект сделан с душой и сердцем ❤️ сейчас я в поиске своего дела и верю, что оно меня найдёт, потому что я так решила 💯',
            'color': 'green',
            'telegram': 'alenanikolaevskaya',
            'video_url': false,
          },
          {
            'name': 'Бондаренко Елена',
            'slug': '16',
            'text': 'Начну с того, что это мой первый опыт прохождения онлайн курсов) И я здесь вначале была как слепой котенок😃 Я не знала даже сленговую терминологию онлайн бизнеса) Но Кристинка — профи своего дела! Акула инфобиза🐋 Внимательная, открытая, душевная, легкая, энергетически нереальная! ☄️💥💫 Восхищаюсь ей! И Благодарю за новые открытия в моей голове 🙏😘 Каждый новый урок захватывал внимание. мы вместе и улыбались, и плакали порой от невероятных историй…. Все уроки курса информативные, проходят доступно и на одном дыхании) Интересно, проникновенно, с юмором, на простом языке)) Это на бесполезных бесплатных вебинарах беспрерывно тараторят и льют только воду. Это совершенно другой курс!!! Он прям женский-женский))) О нас, мамочках в декрете и не только . О том, как можно совмещать семью и работу и быть счастливой и успешной! Здесь даются все инструменты, собранный собственный опыт и знания на пути к своему успеху! Это не только деловой курс, а на 80% психологический! Кристина прям всковырнула и напрочь перевернула мой мозг и мое мышление (мышление скептика) У меня совершенно другие установки были в голове и я начинаю понимать, а ведь правильные вещи говорит…! Итог: курс просто необходим для собственной перезагрузки! 🔄 Что касается Работы мечты, то я еще не нашла, но у меня все впереди! Я знаю, что в онлайн она есть 💯 Просто первый шаг в мир неизведанного сделать, оказывается не просто 😉',
            'color': 'pink',
            'telegram': 'Bondalenka',
            'video_url': false,
          },
          {
            'name': 'Юлия Мельникова',
            'slug': '17',
            'text': 'Я поняла куда хочу двигаться и как нравится работать. Что я действительно хочу работать сама, мне нравится проводить консультации и выбирать самой время. За время курса я начала себя продвигать, раскрывать, не стесняться, искать возможности, решила пойти дальше на курс мастера, ещё все-таки думаю про курс на методиста, заработать с консультаций на него. И всё это благодаря тебе 🥺 И это только малая часть того, что я могу сказать 😻',
            'color': 'default',
            'telegram': 'me1jul',
            'video_url': false,
          },
          {
            'name': 'Ирина Белоусова',
            'slug': '18',
            'text': 'Кристюша, дорогая, не смогла дослушать урок до конца. Курс был ценным, отправляла сестру свою к тебе. И он очень полезен не только для мам в декрете, еще и Для тех, кто в целом далек от мира онлайна- это прям разрыв шаблонов. Еще когда был последний урок сегодня, мне пришла мысль (видела у кого-то в инсте) О том что круто в будущем приглашать всех желающих на выпускной курса. Это и проявленность тех кто будет рассказывать о своих победах и для тех кто сомневается идти или нет, увидит горящие глаза девочек)) Такая фантазия пришла. Что это было бы ценно всем.',
            'color': 'blue',
            'telegram': 'BelousovaIra',
            'video_url': false,
          },
          {
            'name': 'Марина Степанова',
            'slug': '19',
            'text': 'Я очень благодарна, Кристине, за этот прекрасный проект. Она так выстроила программу, что просто невозможно не начать действовать. Она дала всё инструменты. Я пришла на проект с открытым сердцем, готовая выполнять всё рекомендации, чтобы наконец сдвинуться с места и уйти из найма. Я была просто поражена сколько профессий в онлайне. Конечно самой было бы сложно построить путь. Но теперь я точно знаю, как действовать и почему у меня точно получится. В поисках работы нашла свои слабые стороны и начала работать над устранением пробелов. А ещё вынесла главное: «Иди туда, где страшно, страха нет!!!» Очень здорово, что есть поддержка девочек в чате. Кристина, ты умница!!! Благодарю, благодарю, благодарю. ❤️',
            'color': 'green',
            'telegram': 'MarshkaStepanova',
            'video_url': false,
          },
          {
            'name': 'Татьяна Скорик',
            'slug': '20',
            'text': 'Кристюша, хочу от души поблагодарить тебя за эту магию😍 Ты всегда была и есть для меня примером женщины, которая всё успевает. И хотя я в онлайне давно, но точно хочу и могу больше🚀 Я уже давно ни на кого не работаю и единственное, что меня могло побудить вписаться в проект — это пойти за тем человеком, который меня вдохновляет! Спустя 3 недели со старта курса, 14 февраля был 1й рабочий день в твоей команде 😍 За неделю я уже окупила курс работая несколько часов в день! Но главное, что-то и как я сейчас работаю на 100% соответствует моему видению, которое я прописывала🔥 Я держала на этом фокус и не готова была соглашаться на меньшее✨ Паралельно я вынашиваю свои идеи и уже формирую проект, который благодаря нахождению в твоём поле и опыту, который я перенимаю станет просто бомбой! Тут без вариантов💥 Восхищаюсь что ты творишь с женщинами, какими они выходят из курса🌟 Каждая совершила квантовый скачек на своём уровне! И насколько же ты сократила путь тем, кто только делает первые шаги! Как тебе это удаётся?! 🥳',
            'color': 'pink',
            'telegram': 'tskoryk',
            'video_url': false,
          },
          {
            'name': 'Елена',
            'slug': '21',
            'text': 'Хочу сказать Кристине огромное спасибо за такую кладезь информации-ее столько, что просто в голове не умещается, я планирую прослушать отдельные уроки ещё по разу, очень вдохновляет на действия, говорит как есть без прикрас… Я очень хотела разобраться в сфере онлайна -получила ответы на свои вопросы и узнала ещё много нового… однозначно рекомендую девушкам, кто задумываемся об онлайн заработке 👍🏻👍🏻👍🏻❤️❤️❤️',
            'color': 'default',
            'telegram': 'petrova_elena86',
            'video_url': false,
          },
          {
            'name': 'Павлова Алёна ',
            'slug': '22',
            'text': 'Кристиночка, хочу сказать огромнейшее спасибо за то, что ты приоткрыла для меня занавес в мир онлайн! Так, как мне хотелось, как мне было понятно… никаких сложностей, все играючи! Уверена, что этот курс только лишь капля того, что ожидает твой проект! Крутых людей и результатов❤️🔥',
            'color': 'blue',
            'telegram': 'Pavlova_as',
            'video_url': false,
          },
        ],
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
    },
    mounted() {
      AOS.init({
        disable: 'mobile'
      })
    },
  })