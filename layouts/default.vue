<template>
  <main translate="no" >
    <div class="content">
      <Nuxt/>
    </div>
    
     <custom-cursor
      :targets="['img', 'a', 'button', 'your-hover-class']"
      :circleColor="'#fff'"
      :circleColorHover="'#fff'"
      :dotColor="'#fff'"
      :dotColorHover="'lightgray'"
      :hoverSize="1.5"
    ></custom-cursor>
  </main>
</template>
<script>
// Component
// import { CursorFx } from "@luxdamore/vue-cursor-fx";
// import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";

// Layout
export default {
  name: "default",
  // components: { CursorFx }
};
</script>

<style>
html {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* { cursor: none; }

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
