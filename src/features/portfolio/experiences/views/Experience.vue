<template>
  <BaseTemplate>
    <div class="home">
      <div class="d-flex align-items-center justify-content-center">
        <!-- Image bannière -->
        <img src="@/assets/images/laptop-5673901_1280.jpg" class="w-100 object-fit-cover position-relative img-banniere">

        <div class="position-absolute dev-web">
          <div class="d-flex flex-column align-items-center">
            <div class="txt" id="txt">
              <b>S</b><b>E</b><b>B</b><b>A</b><b>S</b><b>T</b><b>I</b><b>E</b><b>N</b>
            </div>
            <div class="txt" id="txt">
              <b>P</b><b>E</b><b>T</b><b>I</b><b>T</b>
            </div>
          </div>
          <div class="my-4">
            <h3 class="text-center text-uppercase">Développeur web</h3>
            <h4 class="text-center mt-2">Portfolio</h4>
          </div>
          <a href="mailto:sebastienpetit27330@gmail.com" class="button">Contactez-moi !</a>
        </div>
      </div>

      <div class="home__experience">
        <!-- Title de la page -->
        <div class="d-flex justify-content-center pb-4 pb-lg-5 w-100">
          <h5 class="text-white">Mon expérience</h5>
        </div>
        <!-- Card expériences -->
        <div class="d-flex flex-wrap align-items-center justify-content-center">
          <div class="card-portfolio">
            <div class="card-inner">
              <div class="card-front">
                <h6 class="mb-3">2024</h6>
                <h3>Stage en entreprise</h3>
                <div class="d-flex flex-wrap justify-content-center mt-5 mb-2">
                  <img src="@/assets/images/success-4578800_640.jpg" class="img-card-front">
                </div>
                <div class="d-flex align-items-center flex-row justify-content-center mt-5 mb-4">
                  <img src="@/assets/images/js.png" class="icon">
                  <img src="@/assets/images/vueJS_logo-22e665fe.png" class="icon">
                  <img src="@/assets/images/pinia.svg" class="icon">
                  <img src="@/assets/images/php_logo.png" class="icon">
                  <img src="@/assets/images/symfony_logo.png" class="icon">
                </div>
                <p class="card-text fs-5">Plus d'info...</p>
              </div>
              <div class="card-back">
                <h3 class="text-start mb-3 w-100"> Objet : Demande de stage (Madame, Monsieur),</h3>
                <p class="mb-2">Actuellement à la fin de mon parcours étudiant, Je suis disponible afin de suivre un stage. Ce stage pourrait me permettre de parfaire ma formation théorique par une expérience de terrain. Passionné depuis de nombreuses années, j'ai pris la décision de me reconvertir dans le domaine du web.</p>
                <p class="mb-2">Rigoureux, dynamique, doté du sens des responsabilités et ouvert aux autres, je n'ai aucune crainte sur ma capacité à m'adapter rapidement à votre entreprise et au travail en équipe. Je serais par ailleurs ravi de pouvoir contribuer au développement de votre activité en y apportant un regard neuf et constructif.</p>
                <p class="mb-2">Je me tiens à votre disposition pour toute demande d'informations supplémentaires.</p>
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
@use '@/assets/css/mixins' as m;

.home {
  .img-banniere {
    height: 1700px;
  }
  &__experience {
    background: var(--bg-page);
    height: 100%;
    width: 100%;
    padding-top: 50px;
    @include m.lg {
      height: 100%;
      padding-top: 40px;
    }
    @include m.sm {
      height: 100%;
      padding-top: 30px;
    }
  }

  h5 {
    font-size: 35px;
    font-family: "Kalam", cursive;
    white-space: nowrap;
    @include m.sm {
      width: 25px;
    }
  }

  .dev-web {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.40);
    height: 350px;
    width: 600px;
    padding: 20px;
    overflow: hidden;
    @include m.sm {
      width: 100%;
      height: auto;
    }
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

// animation card

.card-portfolio {
  width: 500px;
  height: 650px;
  margin: 0 10px 60px 10px;
  @include m.sm {
    width: 100%;
    height: 550px;
    margin: 0 10px 30px 10px;
  }
}

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
}

.card-front {
  transform: rotateY(0deg);
  overflow: hidden;
  h6 {
    font-size: 18px;
  }
  h3 {
    font-size: 26px;
    @include m.sm {
      font-size: 23px;
    }
  }
  .img-card-front {
    height: 120px;
    width: 120px;
    @include m.sm {
      height: 110px;
      width: 110px;
    }
  }
  .icon {
    width: 60px;
    height: 60px;
    margin: 0 6px;
    @include m.sm {
      width: 50px;
      height: 50px;
    }
  }
}

.card-back {
  transform: rotateY(-180deg);
  overflow: hidden;
  h3 {
    font-size: 20px;
    @include m.sm {
      font-size: 17px;
    }
  }
  p {
    font-size: 15px;
    line-height: 24px;
    @include m.sm {
      font-size: 14px;
    }
  }
}

.card-portfolio:hover .card-inner {
  transform: rotateY(-180deg);
}

// title animation

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
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
  animation-delay:1.50s;
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