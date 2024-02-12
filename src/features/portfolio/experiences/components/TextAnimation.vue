<template>
  <h2 data-text="Sébastien Petit">Sébastien</h2>
</template>

<script setup lang="js">
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  min-height: 100vh;
  background: #100f10;
  align-items: center;
  justify-content: center;
}

h2 {
  color: #c19bf5;
  font-size: 3vw;
  position: relative;
  text-transform: uppercase;
  -webkit-text-stroke: 0.3vw #f7f7fe;
  @include m.sm {
    font-size: 8.5vw;
  }
}

h2::before {
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #8338ec;
  overflow: hidden;
  position: absolute;
  content: attr(data-text);
  border-right: 2px solid #c19bf5;
  -webkit-text-stroke: 0vw #f7f7fe;
  animation: animate 6s linear infinite;
}

@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }

  70%,
  90% {
    width: 100%;
  }
}
</style>