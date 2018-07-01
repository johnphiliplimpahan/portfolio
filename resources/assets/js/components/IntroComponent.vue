<template>
    <section class="intro">
        <div class="intro-wrapper">
            <div class="container">
                <h1 class="intro-text-heading">A <b>Web Developer</b> who writes code with <b>PASSION</b></h1>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
        mounted() {
            this.animateWrapper()
            console.log('Component mounted.')
        },

        methods : {
            animateWrapper() {
                let wrapper = document.getElementsByClassName('intro-wrapper')[0],
                    heading = document.getElementsByClassName('intro-text-heading')[0],
                    tl = new TimelineLite();

                tl.from(wrapper,0.1,{autoAlpha:0, ease:Power1.easeIn, delay : 0.5})
                  .from(heading,0.2,{y:-15, autoAlpha: 0, ease:Power1.easeIn, delay : 0.2});
            }
        }
    }
</script>