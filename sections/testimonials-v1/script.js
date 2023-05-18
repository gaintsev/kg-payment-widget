const testimonialsV1 = new Vue({
    'el': '#s-testimonials-v1',
    data: {
      testimonials: {
        currenSlideIndex: 0,
        list: TESTIMONIALS,
      },
    },
    computed: {
      chunkedList() {
        return _.chunk(this.testimonials.list, 3)
      },
      currentSlide() {
        return this.chunkedList[this.testimonials.currenSlideIndex]
      },
    },
    methods: {
      switchTestimonial(index) {
        if (index == (this.chunkedList.length)) {
          this.testimonials.currenSlideIndex = 0
        } else if (index < 0) {
          this.testimonials.currenSlideIndex = this.chunkedList.length - 1
        }  else {
          this.testimonials.currenSlideIndex = index
        }
      },
    },
    mounted() {
      AOS.init({
        disable: 'mobile'
      })
    },
  })