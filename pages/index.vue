<template>
  <div class="layoutWrapper">
    <div class="appNoise"></div>
    <div>
      <header-bar></header-bar>
      <kinesis-container>
        <section class="heroMain">
          <div class="heroMain__wrapper">
            <div></div>
            <div class="heroMain__inner">
              <kinesis-element :strength="20" data-kinssis="active">
                <transition
                  appear
                  name="custom-classes-transition"
                  enter-active-class="animate__animated animate__fadeIn animate__delay-1s"
                >
                  <figure class="image">
                    <img
                      alt=""
                      src="~assets/images/christoph.png"
                      class="image__img"
                    />
                  </figure>
                </transition>
              </kinesis-element>
            </div>

            <div class="heroMain__text">
              <kinesis-element :strength="-20" data-kinssis="active">
                <div class="overflow-hidden">
                  <transition
                    appear
                    name="custom-classes-transition"
                    enter-active-class="animate__animated animate__slideInUp animate__delay-2s"
                  >
                    <h2 class="title">
                      Design
                    </h2>
                  </transition>
                </div>
                <div class="overflow-hidden">
                  <transition
                    appear
                    name="custom-classes-transition"
                    enter-active-class="animate__animated animate__slideInUp animate__delay-3s"
                  >
                    <h2 class="subtitle">
                      & Code
                    </h2>
                  </transition>
                </div>
              </kinesis-element>
            </div>

            <div class="heroMain__footer w-full flex justify-between">
              <a @click="$colorMode.preference = 'light'" href="#">light</a>
              <div class="animate__animated animate__bounce">
                Scroll to discover
                <div class="icon"></div>
              </div>
              <a @click="$colorMode.preference = 'dark'" href="#">dark</a>
            </div>
          </div>
        </section>
      </kinesis-container>
    </div>
  </div>
</template>

<script>
// import ColorMode from '../components/ColorMode.vue';
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  transition: "intro",
  components: {
    KinesisContainer,
    KinesisElement
  },
  methods: {
    handleWheel() {
      if (event.deltaY > 0) {
        this.$router.push({ path: "/about" });
      }
    }
  },
  created() {
    if (process.client) {
      window.addEventListener("wheel", this.handleWheel);
    }
  },
  destroyed() {
    if (process.client) {
      window.addEventListener("wheel", this.handleWheel);
    }
  }
};
</script>

<style lang="scss">
.heroMain {
  height: calc(100vh - 70px);
  min-height: 600px;
  width: 100vw;
  overflow: hidden;
  position: relative;
  @screen lg {
    min-height: calc(100vh);
  }
  &__wrapper {
    align-items: center;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    @screen lg {
      min-height: calc(100vh);
      padding: 40px;
    }

    .image img {
      max-width: 260px;
      transition: all ease-in-out 0.5s;
      // &:hover{
      //   transform: scale(0.7);
      // }
      @screen lg {
        max-width: 390px;
      }
    }
  }
  &__text {
    font-size: 80px;
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all ease 0.5s;
    z-index: 2;
    // mix-blend-mode: difference;
    @screen lg {
      font-size: 15vw;
    }
    .title {
      font-family: var(--font-titleone);
      display: block;
      color: rgba(var(--sepia), 1);
      letter-spacing: 1px;
      line-height: 120%;
    }
    .subtitle {
      font-family: var(--font-titletwo);
      word-spacing: 5px;
      padding-bottom: 15px;
      color: transparent;
      -webkit-text-stroke: 1px rgba(var(--sepia), 0.8);
      line-height: 120%;
    }
  }
}

.icon:before {
  content: "";
  background: var(--color);
  height: 10px;
  width: 2px;
  position: absolute;
  top: 14px;
  border-radius: 1px;
  left: calc(50% - 1px);
  animation: scroll 1.55s infinite;
}

@keyframes scroll {
  15% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(24px);
  }
}

// Page Transiton Effect
$t-duration: 800ms;
$t-delay: 300ms;

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #2e2e2e;
  }

  &::after {
    top: 50%;
    background-color: #2e2e2e;
  }
}

.intro-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.intro-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
