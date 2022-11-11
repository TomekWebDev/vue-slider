var app = new Vue (
    {
        el: '#root',
        data: {
            sliderBackground: ['bg-primary', 'bg-danger', 'bg-success'],
            sliderIndex: 0,        
        },
        methods: {
            slideRight: function(){
                if(this.sliderIndex < this.sliderBackground.length-1){
                   return this.sliderIndex++
                }
                return this.sliderIndex = 0
            },
            slideLeft: function(){
                if(this.sliderIndex > 0){
                   return this.sliderIndex--
                }
                return this.sliderIndex = this.sliderBackground.length-1
            },
            slideTimer: function(){
                setInterval( this.slideRight, 3000 )
            },
            
        },
        mounted () {
            this.slideTimer()
          },
    }
)