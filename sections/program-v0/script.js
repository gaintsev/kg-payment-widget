const programV0 = new Vue({
    'el': '#s-program-v0',
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
    mounted() {
      AOS.init({
        disable: 'mobile'
      })
    },
  })