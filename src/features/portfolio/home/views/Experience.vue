<template>
  <BaseTemplate>
    <div class="home">
      <div class="d-flex align-items-center justify-content-center ">
        <!-- Image bannière -->
        <img src="@/assets/images/laptop-5673901_1280.jpg" class="w-100 h-100 position-relative">

        <div class="position-absolute dev-web">
          <div class="d-flex flex-column align-items-center">
            <div class="txt" id="txt">
              <b>S</b><b>E</b><b>B</b><b>A</b><b>S</b><b>T</b><b>I</b><b>E</b><b>N</b>
            </div>
            <div class="txt" id="txt">
              <b>P</b><b>E</b><b>T</b><b>I</b><b>T</b>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-center text-uppercase">Développeur web</h3>
            <h4 class="text-center">Portfolio</h4>
          </div>
          <a href="mailto:sebastienpetit27330@gmail.com" class="button">Contactez-moi !</a>
        </div>
      </div>

      <div class="home__experience">
        <!-- Title de la page -->
        <h5 class="text-center text-white pb-5">Mon expérience</h5>
        <!-- Card expériences -->
        <div class="d-flex flex-wrap align-items-center justify-content-center">
          <div class="card-portfolio">
            <div class="card-inner">
              <div class="card-front">
                <h6 class="mb-3">2024</h6>
                <h3>Stage en entreprise</h3>
                <div class="d-flex flex-wrap justify-content-center mt-4">
                  <img src="@/assets/images/success-4578800_640.jpg" height="150" width="150">
                </div>
                <div class="d-flex align-items-center flex-row justify-content-center mt-5 mb-4">
                  <img src="@/assets/images/js.png" class="icon">
                  <img src="@/assets/images/vueJS_logo-22e665fe.png" class="icon">
                  <img src="@/assets/images/logo.svg" class="icon">
                  <img src="@/assets/images/php_logo.png" class="icon">
                  <img src="@/assets/images/symfony_logo.png" class="icon">
                </div>
                <p class="card-text fs-5">Plus d'info...</p>
              </div>
              <div class="card-back">
                <h5 class="text-start mb-3 w-100"> Objet : Demande de stage (Madame, Monsieur),</h5>
                <p>Actuellement à la fin de mon parcours étudiant, Je suis disponible afin de suivre un stage. Ce stage pourrait me permettre de parfaire ma formation théorique par une expérience de terrain. Passionné depuis de nombreuses années, j'ai pris la décision de me reconvertir dans le domaine du web.</p>
                <p>Rigoureux, dynamique, doté du sens des responsabilités et ouvert aux autres, je n'ai aucune crainte sur ma capacité à m'adapter rapidement à votre entreprise et au travail en équipe. Je serais par ailleurs ravi de pouvoir contribuer au développement de votre activité en y apportant un regard neuf et constructif.</p>
                <p> Je me tiens à votre disposition pour toute demande d'informations supplémentaires.</p>
                <p>Dans l'attente de vous lire, Je vous prie d'agréer, (Madame, Monsieur), l'expression de mes sentiments les meilleurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";

</script>

<style scoped lang="scss">
.home {
  &__experience {
    background: linear-gradient(0deg, rgba(12, 121, 158, 0.9864146342130602) 0%, rgba(2, 0, 36, 1) 100%);
    height: auto;
    width: 100%;
    padding: 45px 0 80px 0;
  }
  .dev-web {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.40);
    height: 300px;
    width: 500px;
    padding: 20px;
    overflow: hidden;
    h3 {
      color: white;
      font-size: 20px;
      font-weight: 900;
    }
    h4 {
      color: white;
      font-size: 16px;
      font-weight: 800;
    }
    .button {
      border: 1px solid darken(#129ce7, 15);
      background-color: transparent;
      padding: 10px;
      transition: background-color 180ms ease;
      text-decoration: none;
      &:hover {
        border: 1px solid #129ce7;
        background-color: #129ce7;
        color: white;
      }
    }
  }
}

.card-portfolio {
  width: 500px;
  height: 650px;
  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--background-card-dark);
      font-size: 24px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      backface-visibility: hidden;
      padding: 20px;
    }
    .card-front {
      transform: rotateY(0deg);
      h6 {
        font-size: 18px;
      }
      h3 {
        font-size: 26px;
      }
      .icon {
        width: 60px;
        height: 60px;
        margin: 0 6px;
      }
    }
    .card-back {
      transform: rotateY(-180deg);
      p {
        font-size: 16px;
      }
    }
  }
}

.card-portfolio:hover .card-inner {
  transform: rotateY(-180deg);
}

#txt{
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  font-family:sans-serif;
  letter-spacing:3.5px;
  font-size:3.5rem;
  font-weight:700;
  position:relative;
  transform-style:preserve-3d;
  perspective:100px;
  -webkit-transform-style:preserve-3d;
  -webkit-perspective:100px;
}
#txt>b{
  height:3.5rem;
  box-shadow:0 .4rem .3rem -.3rem #aaa;
  color:#979c9f;
  background:linear-gradient(#aaf,#acf,#afc);
  background-clip:text;
  text-fill-color:transparent;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  transform-origin:bottom;
  transform:rotateX(-85deg);
  -webkit-transform-origin:bottom;
  -webkit-transform:rotateX(-85deg);
  animation:getUp 7s infinite;
}
#txt>b:nth-child(2){
  animation-delay:.25s;
}
#txt>b:nth-child(3){
  animation-delay:.5s;
}
#txt>b:nth-child(4){
  animation-delay:.75s;
}
#txt>b:nth-child(5){
  animation-delay:1s;
}
#txt>b:nth-child(6){
  animation-delay:1.25s;
}
#txt>b:nth-child(7){
  animation-delay:1.5s;
}
#txt>b:nth-child(8){
  animation-delay:1.75s;
}
@keyframes getUp{
  10%,50%{
    transform:rotateX(0);
  }
  0%,60%,100%{
    transform:rotateX(-85deg);
  }
}
</style>