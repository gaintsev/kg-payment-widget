const authorV0 = new Vue({
    'el': '#s-author-v0',
    data: {
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
    },
    methods: {
      //
    },
    mounted() {
      AOS.init({
        disable: 'mobile'
      })
    },
  })