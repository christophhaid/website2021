<template>
  <div class="layoutWrapper">
    <div class="appNoise"></div>
    <div>
    <header-bar></header-bar>
    <kinesis-container event="move">
    <kinesis-element :strength="30" data-kinssis="active"> 
      <kinesis-container event="scroll">
      <section class="heroAbout">
          <kinesis-element :strength="100" axis="x" :maxX="50" :originX="0" data-kinssis="active"> 
        <h2 class="size-xl  text-center lg:text-right">Designer with</h2>
          </kinesis-element>
        <kinesis-element :strength="-180" axis="x" :maxX="50" :originX="0" data-kinssis="active"> 
        <h2 class="size-xl text-center lg:text-right">Developer´s mind</h2>
        </kinesis-element>
              <kinesis-element :strength="150" axis="x" :maxX="50" :originX="0" data-kinssis="active"> 
        <h2 class="size-xl text-center">& Developer with</h2>
        </kinesis-element>
              <kinesis-element :strength="-100" axis="x" :maxX="50" :originX="0" data-kinssis="active"> 
        <h2 class="size-xl text-center lg:text-right">Designers´s eye</h2>
        </kinesis-element>

      </section>
      </kinesis-container>
     </kinesis-element>
    </kinesis-container>
    <div class="container mx-auto px-4 lg:py-10">
      <div class="grid lg:grid-cols-2">
        <div class="img">
          <div class="sticky top-0">
            <img alt="" src="~assets/images/christoph.png" class="image__img">
          </div>
        </div>
        <div class="content text-2xl pb-8">
          <p>Senior Product Designer living in Innsbruck, Austria with a heavy focus on awesome interfaces, creative solutions and great user experience.<br></p>

          <p class="mt-4">Over the years I’ve been fortunate enough to work with agencies & individuals across a variety of sectors, often with the goal of making the world a better place. </p>

          <p class="mt-4">I’m currently working at easybooking, as a Senior Product Designer & Software Developer.</p>

          <p class="mt-4">Outside of work, I’m interested in all kinds of sports, cooking, gaming, football and i realy love cycling.</p>

          <h4 class="text-4xl font-bold mt-6 lg:mt-20">Social</h4>
          <p>
            <ul class="mt-4">
              <li><a href="https://www.linkedin.com/in/christoph-haid/" class="main-link" target="_blank">LinkedIn</a></li>
              <li><a href="https://dribbble.com/christophhaid" class="main-link" target="_blank">Dribble</a></li>
              <li><a href="https://figma.com/@christophhaid" class="main-link" target="_blank">Figma</a></li>
              <li><a href="https://github.com/christophhaid" class="main-link" target="_blank">Github</a></li>
              <!-- <li><a href="https://gitlab.com/christoph.haid" class="main-link" target="_blank">Gitlab</a></li> -->
              <li><a href="https://www.instagram.com/christophhaid/" class="main-link" target="_blank">Instagram</a></li>
              <li><a href="https://www.behance.net/chrishaid" class="main-link" target="_blank">Behance</a></li>
            </ul>
          </p>
          <h4 class="text-4xl font-bold mt-6 lg:mt-20">Contact</h4>
          <p><a href="mailto:info@christophhaid.com" class="main-link">hello@christophhaid.com</a></p>
          <p>Plangg 15b</p>
          <p>6460 Imst</p>
          <p>Austria</p>
        </div>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  head: {
    title: "About Me | Christoph Haid - Product Strategist & UX/UI Designer.",
  },
  components: {
    KinesisContainer,
    KinesisElement,
  },
};
</script>

<style lang="scss">
.heroAbout {
  font-size: 11vw;
  line-height: 90%;
  padding: 160px 30px;
  @screen lg {
    padding: 7% 4%;
  }
}
</style>