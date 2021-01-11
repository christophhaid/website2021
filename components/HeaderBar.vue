<template>
    <header class="appHeader p-6">
        <div class="appHeader__inner">
            <div class="appHeader__texts text-left">
                <div class="overflow-hidden">
                    <transition appear name="custom-classes-transition" enter-active-class="animate__animated animate__slideInUp animate__delay-1s">
                    <h2 class="text-lg lg:text-2xl">
                    Senior Product Designer
                    </h2>
                    </transition>
                </div>
                <div class="overflow-hidden">
                    <transition appear name="custom-classes-transition" enter-active-class="animate__animated animate__slideInUp animate__delay-2s">
                    <h2 class="text-lg lg:text-2xl">
                    Front-end Developer
                    </h2>
                    </transition>
                </div>
            </div>
            <NuxtLink  v-if=" $route.name =='index'" to="about">About</NuxtLink>
            <NuxtLink  v-if=" $route.name =='about'" to="/">Home</NuxtLink>
        </div>
        <div id="demo">
</div>
    </header>
    
</template>

<script>
    export default {
        data() {
          return {
            show: false
          }
        },
    }
</script>

<style lang="scss" scoped>
.appHeader{
    position: absolute;
    width: 100%;
    z-index: 10;
        &__inner {
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            position: relative;
            width: 100%;
            align-items: center;
        }
}
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter,
// .fade-leave-active {
//   opacity: 0;
// }
</style>