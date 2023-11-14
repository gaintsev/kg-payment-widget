const promoV1 = new Vue({
    'el': '#s-promo-v1',
    data: {
      //
    },
    methods: {
      scrollTo(target) {
        this.$refs[target].scrollIntoView({
          behavior: 'smooth'
        })
      },
    },
  })