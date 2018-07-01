<template>
    <div class="container-fluid navbar-laravel pr-5">
        <a class="brand" href="#">{{ brandName }}</a>
        <ul class="nav float-right">
            <li class="nav-item">
                <a class="nav-link active" href="#">HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">WORKS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">RESUME</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                brandName : 'PHILIP LIMPAHAN'
            }
        },
        mounted() {
            this.animateNav();
        },
        methods : {
            animateNav() {
                let home = document.getElementsByClassName('nav-item')[0];
                let works = document.getElementsByClassName('nav-item')[1];
                let resume = document.getElementsByClassName('nav-item')[2];
                let tl = new TimelineLite();

                tl
                    .from(home,0.3,{y:15, autoAlpha: 0, ease:Power1.easeOut})
                    .from(works,0.3,{y:15, autoAlpha: 0, ease:Power1.easeOut})
                    .from(resume,0.3,{y:15, autoAlpha: 0, ease:Power1.easeOut})
            }
        }
    }
</script>
