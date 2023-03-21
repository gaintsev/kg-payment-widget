const promoV0 = new Vue({
  'el': '#s-promo-v0',
  data: {
    current: 0,
    features: [
      1,2,3,4,5,6,7,8
    ],
  },
  methods: {
    scrollTo(target) {
      this.$refs[target].scrollIntoView({
        behavior: 'smooth'
      })
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
  },
  mounted() {
    AOS.init({
      disable: 'mobile'
    })
  },
})