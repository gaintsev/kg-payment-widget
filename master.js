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
        },
        {
          'name': 'Анастасия Подопригора',
          'slug': '2',
          'text': 'Кристина просто девушка огонь.❤️‍🔥 Мотивация, поддержка все на высшем уровне. В онлайне не работала и никогда не зарабатывала. Но уже после 4 урока освоила новую профессию «» Закупка рекламы у блогеров»». Нашла работу и уже сейчас зарабатываю в онлайне. В планах масшатбироваться в этой сфере, как только наберусь опыта. Очень советую Всем девушкам пройти этот курс. Тут вы можете найти и подруг и любимую работу, и поддержку).',
          'color': 'blue',
        },
        {
          'name': 'Анна Квасницкая',
          'slug': '3',
          'text': 'Добрый день, меня зовут Анна, я искренне благодарна Кристине, что создала этот курс для женщин, для мамочек в декрете, которые не могут решиться зарабатывать в онлайне. От курса я поняла, что нужно действовать, и если ничего не делать, не попробовав, ты и не узнаешь! Поэтому этот курс помог мне решиться на то, о чем я мечтала с 12 лет, Кристина поймет о чем я. Но я уже отобрала на вакансии, на которые откликнусь после реабилитации, и так просто опустив руки теперь уж точно не отступлю! Пинок мне поддали и я поняла, что я могу, я хочу и я справлюсь, и никакие страхи теперь ни по чем!',
          'color': 'green',
        },
        {
          'name': 'Карина Мурзина',
          'slug': '4',
          'text': 'Я пришла на курс с желанием расширить своё мировоззрение, видение способа заработка онлайн. Честно сказать, к онлайн работе, я не относилась серьезно. Пока после первых уроков Крис не устроилась на работу, селс-менеджером. Девочки, я бы лучше голосовое записала… Так много хочется описать))) просто я считала, что продажи и Я, это не моя история. Но решила, что этот год будет, годом перемен!!! Я хочу быть другой, а как стать другой??? Надо браться за что-то новое …. то есть «съесть лягушку», точнее начать делать, то что тебе страшно делать и т. д. И, к слову сказать, я ещё ни чего, но я начинаю получать кайф от самого процесса… пишу и…. Какой же я порой могу быть сентиментальной))) девочки …. у меня годовалый ребёнок, но я рискнула и взяла работу на полный день) расписала график и урааа я все успеваю… ❤️ рискуйте, кайфуйте, меняйтесь…. Кристина на курсе даёт самую главную ценность — это веру в себя, и в свои силы и возможности!!!',
          'color': 'pink',
        },
        {
          'name': 'Анна',
          'slug': '5',
          'text': 'Добрый день) постараюсь выразить свои эмоции и выводы лаконично: Вывод о курсе- желание, чтобы его прошли тысячи женщин 🔥 Курс оправдал мои ожидания в запросе развиваться в онлайн, находясь уже в нем пол года, как копирайтер. Благодаря опыту Кристины, ее легкой и грамотной подаче знаний бизнеса в онлайн, неиссякаемой женской энергии- мне было легко понять куда двигаться дальше👏🏻 В результате приобрела курс эксперта по онлайн маркетингу🥳 и уверенно двигаюсь к цели 🎯 Основная работа, к которой уже появилось привыкание, заиграла новыми красками😍 так как я в процессе расширения и уже получила заказы по новой специальности. Главная ценность этого курса для меня- понимание, что мне можно все, о чем я мечтаю. Мне можно заниматься тем, что люблю и не бояться проявляться. И да, за это платят хоррррошие деньги. Ценность свободы, независимости и жизни в целом теперь на первом месте🫶 и в найм я больше не вернусь😎 Благодарю создателя этого потрясающего курса для женщин.',
          'color': 'default',
        },
        {
          'name': 'Анастасия',
          'slug': '6',
          'text': 'Я просто в восторге от этого курса! Я хочу поблагодарить Кристину, что создала и отдала свой глубочайший опыт, не только как в работе, так и в личном! Работа с головой колосальная! Это такая трансформация найти себя! Особенно для мам в декрете, которые погрузились в эту рутину быта и детей! Безмерно рада быть в первом потоке! Это космос🪐💫в которые запустились первые ракеты🌟🚀',
          'color': 'blue',
        },
        {
          'name': 'Диана Прусская',
          'slug': '7',
          'text': 'Прослушала твоё аудио🥺 ты ж моя душа золотая, спасибо тебе за всё🥰 Мне так приятно что есть близкие, кто так меня чувствует! Это бесценно просто! Люблю🙏💜 Ты чудо человечек, вот честно от души, такие как ты переворачивают этот мир и делают его лучше💪 Да ты права, я много скилов наработала до тех пор пока не нашла как мне кажется сейчас свое дело, дело сердца 🧡 и смм и продажи, в чем я безусловно хороша))всегда знаю если будут чёрные дни пойду продавать или ногти пилить 😂но мне всегда там было тесно. после каждой консультации я чувствую себя такой счастливой, не передать словами, особенно когда потом прилетает обратная связь😂Поэтому сейчас задача стоит прокапчивать свою экспертность и научиться искать клиентов в новом он Лайн мире 😄💪 Но знаешь я ни капельки не пожалела что прохожу твой курс, и многое что для себя подчерпнула, ты правда мутишь ракету! Я вижу что это реально будет полезно тысячам женщин! Мамочкам! Мы им нужны☺️Ты им нужна!!! Жизнь длинная и надо уметь адаптироваться к новым реалиям, иметь много навыков в нашем мире просто необходимо. Да это охранительный курс, если бы я хотела начать в онлайне работать это был бы подарок! Потому что поверь все что т даёшь это 💯 %трудоустройство! Кто будет делать у тех получится!',
          'color': 'green',
        },
        {
          'name': 'Татьяна Бабурова',
          'slug': '8',
          'text': 'Я раньше никогда не работала в онлайне и для меня это, честно говоря, было таким тёмным лесом, что даже и приближаться к данной местности не хотелось. Всё было из-за страха, поскольку неизведанное всегда страшно. А про выход из зоны комфорта я вообще молчу. А вдруг не получится? А как же стабильность? А вдруг подведут и не заплатят? Как найти работу, если не знаешь где и что искать? После первого урока у Кристины я мало того, что поверила в свои силы, так и ещё вдохновилась так, что тут же загорелась идеей — надо попробовать обязательно, ведь я ничего не теряю. А узнав, что вакансий и профессий в онлайне большое количество я поняла точно — работу я найду. Девочки, работы в онлайне реально море и ещё океан возможностей. Я составила резюме, разослала и уже через пару дней думала и выбирала, а какое из направлений выбрать, кому сказать «да» и за какой проект хвататься)) Я выбирала, не меня) это очень крутое чувство, когда ты чувствуешь себя профвостребованным) хотя по некоторым направлениям у меня и опыта не было. Кристина рассказала на занятиях, кого ищут hr и какие качества нужно указать в резюме. Так что вы в надежных руках и не пропадёте) Одним словом, если нужен знак — то это он.))',
          'color': 'pink',
        },
        {
          'name': 'Журавлева Анна',
          'slug': '9',
          'text': 'Кристина, спасибо большое! Я хочу сказать, что благодаря курсу 🔺я реализуюсь, как продюсер медицинского блога, 🔺веду свой медицинский блог, который смогла монетизировать. 🔥 Наконец-то я не пропадаю на работе, а работаю по плану с 9 до 12, а остальное время провожу с детками, у меня их трое😊 Бонус ✅ Я нашла работу своему сыну 16 лет (тестирует игру и для кого-то в игре время наигрывает за деньги себе на карманные расходы).',
          'color': 'default',
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