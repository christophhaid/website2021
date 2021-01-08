<template>
  <div class="layoutWrapper">
    <div class="appNoise"></div>
    <div>
    <header-bar></header-bar>
    <kinesis-container event="move">
    <kinesis-element :strength="30"> 
      <kinesis-container event="scroll">
      <section class="heroAbout">
          <kinesis-element :strength="100" axis="x" :maxX="50" :originX="0"> 
        <h2 class="size-xl  text-center lg:text-right">Designer with</h2>
          </kinesis-element>
        <kinesis-element :strength="-180" axis="x" :maxX="50" :originX="0"> 
        <h2 class="size-xl text-center lg:text-right">Developer´s mind</h2>
        </kinesis-element>
              <kinesis-element :strength="150" axis="x" :maxX="50" :originX="0"> 
        <h2 class="size-xl text-center">& Developer with</h2>
        </kinesis-element>
              <kinesis-element :strength="-100" axis="x" :maxX="50" :originX="0"> 
        <h2 class="size-xl text-center lg:text-right">Designers´s eye</h2>
        </kinesis-element>

      </section>
      </kinesis-container>
     </kinesis-element>
    </kinesis-container>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2">
        <div class="img">
          <div class="sticky top-0">
            Image
          </div>
        </div>
        <div class="content text-lg">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   

          <h4>Social</h4>
          <p>
            <ul>
              <li>Linkein</li>
            </ul>
          </p>
        </div>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
export default {
  components: {
    KinesisContainer,
    KinesisElement 
  }
};
</script>

<style lang="scss">

.heroAbout{
  font-size: 11vw;
  line-height: 90%;
  padding: 160px 30px;
  @screen lg {
     padding: 7% 4%;
  }
}

</style>