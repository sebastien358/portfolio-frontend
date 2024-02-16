<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="d-flex align-content-center justify-content-center w-100">
        <div class="cv-container">
          <div class="left-column">
            <img class="portait" src="@/assets/images/sebastien.jpg" />
            <div class="d-flex flex-column section">
              <a href="https://www.linkedin.com/in/s%C3%A9bastien-petit-1874141b9/" target="_blank" class="text-white">
                <font-awesome-icon icon="fa-brands fa-linkedin" class="text-white" />
                Sébastien Petit
              </a>
              <a href="https://github.com/sebastien358" target="_blank" class="text-white">
                <font-awesome-icon icon="fa-brands fa-github" class="text-white" />
                Github
              </a>
              <a href="https://www.linkedin.com/in/s%C3%A9bastien-petit-1874141b9/" target="_blank" class="text-white">
                <font-awesome-icon icon="fa-brands fa-google" class="text-white" />
                Sébastien Petit
              </a>
            </div>
            <div class="section">
              <h2>À PROPOS</h2>
              <p>
                Le <strong>Front-end</strong> est une de mes passions : j’aime intégrer ou imaginer des interfaces modernes, les rendre responsive et les dynamiser avec des animations élégantes. Mes deux technos de coeur sont <strong>Vue.js</strong>, <strong>Bootstrap</strong>, <strong>CSS3</strong> et <strong>SASS</strong> que j’utilise depuis plus de 6 ans. Je suis aussi Fullstack : Symfony, PHP, MySQL, Doctrine…
              </p>
              <p>
                De nature débrouillard et indépendant dans mon travail, j’aime apprendre de nouvelles technologies, passer du temps à résoudre des problèmes et réaliser du code de qualité. Mes valeurs de travail : clean code, flexibilité, performance et sérieux.
              </p>
            </div>
            <div class="section">
              <h2>COMPÉTENCES</h2>
              <ul class="skills">
                <li><i class="icon fas fa-check-circle text-darkblue"></i> HTML5 &#124; CSS3 &#124; SASS</li>
                <li><i class="icon fas fa-check-circle text-darkblue"></i> Bootstrap</li>
                <li><i class="icon fas fa-check-circle text-darkblue"></i> JavaScript &#124;</li>
                <li><i class="icon fas fa-check-circle text-darkblue"></i> Vue.js &#124; VueX</li>
                <li><i class="icon fas fa-check-circle text-darkblue"></i> Pinia</li>
                <li><i class="icon fas fa-check-circle text-darkblue"></i> PHP</li>
                <li><i class="icon fas fa-check-circle text-darkblue"></i> Symfony</li>
                <li><i class="icon fas fa-check-circle text-darkblue"></i> MySQL</li>
                <li><i class="icon fas fa-check-circle text-darkblue"></i> Git &#124; Github</li>
              </ul>
            </div>
            <div class="section">
              <h2>Centres d'intérêt</h2>
              <p>
                Jeux vidéo
                <br>
                Musique
                <br>
                Art en général
                <br>
                Sport
                <br>
                Informatique
              </p>
            </div>
          </div>
          <div class="right-column bg-white">
            <div class="header">
              <h1>Sébastien <span class="text-blue text-uppercase">Petit</span></h1>
              <p>Développeur Full-Stack junior</p>
              <ul class="infos">
                <li><i class="icon fas fa-at text-blue"></i> <a href="mailto:contact@pgomba.com">sebastienpetit27330@gmail.com</a></li>
                <li><i class="icon fas fa-phone text-blue"></i> 06 04 42 34 56</li>
                <li><i class="icon fas fa-map-marker-alt text-blue"></i> 11 Rue du Val Ferrant, 27330 Bois-Anzeray</li>
              </ul>
            </div>
            <div class="content">
              <div class="section">
                <h2>Études <br><span class="text-blue">& formations</span></h2>
                <p>
                  <strong>2023 <font-awesome-icon icon="fa-solid fa-right-long" /> 2024</strong>
                  <br>
                  <em>Développeur web : </em> Studi
                </p>
                <p class="description-formation">
                  Autodidacte en développement web de niveau bac+2, je suis à la recherche d'un premier
                  emploi dans ce milieu qui me passionne. Impliqué et motivé, je souhaite acquérir de
                  l'expérience et des responsabilités afin de m'épanouir dans ma carrière. Les cours particuliers
                  que j'ai suivis sur la plateforme <a href="https://www.superprof.fr" class="superProf">Superprof.fr</a> m'ont permis de monter en compétences et de
                  me spécialiser avec Symfony, Vue.js
                </p>
              </div>
              <div class="section">
                <h2>Expériences <br><span class="text-blue">professionelles</span></h2>
                <p>
                  <strong>2013 <font-awesome-icon icon="fa-solid fa-right-long" /> 2022</strong>
                  <br>
                  Chauffeur routier en national : <em>Transports Roselier</em>
                </p>
                <ul class="experience-list">
                </ul>
              </div>
              <div class="section">
                <h2>Autres</h2>
                <p>
                  Permis B, possession d’une voiture
                  <br>
                </p>
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

.bg-page {
  background: var(--bg-page);
  padding: 40px 20px;
  @include m.lg {
    padding: 30px 20px;
  }
}

a {
  text-decoration: none;
  color: #4472C4;
}

a:hover {
  text-decoration: underline;
}

p {
  margin: 0 0 1rem;
}

h1 {
  margin: 0 0 1rem;
  font-size: 2.5rem;
  margin-bottom: .5rem;
  @include m.xxl {
    font-size: 2.1rem;
  }
  @include m.lg {
    font-size: 2.1rem;
  }
  @include m.sm {
    font-size: 1.7rem;
  }
}

h2 {
  margin: 0 0 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 24px;
  @include m.xxl {
    font-size: 20px;
  }
  @include m.lg {
    font-size: 20px
  }
}

.text-blue {
  color: #4472C4;
}

.text-darkblue {
  color: #002060;
}

.text-uppercase {
  text-transform: uppercase;
}

.icon {
  margin-right: .5rem;
}

.cv-container {
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-areas: "left-column right-column";
  width: 1200px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  @include m.xxl {
    width: 100%;
  }
  @include m.lg {
    display: initial;
    width: 100%;
  }
}

.section {
  margin-bottom: 1.5rem;
}

/* LEFT COLUMN */
.left-column {
  grid-area: left-column;
  padding: 50px;
  background-color: #4472C4;
  color: white;
  @include m.lg {
    padding: 20px;
  }
  p {
    font-size: 16px;
    @include m.xxl {
      font-size: 15px;
    }
    @include m.lg {
      font-size: 15px;
    }
  }
  .section {
    a {
      margin-bottom: 5px;
    }
  }
}

.portait {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: auto;
  display: block;
  margin-bottom: 50px;
  @include m.xxl {
    width: 130px;
    height: 130px;
  }
  @include m.lg {
    width: 130px;
    height: 130px;
  }
}

.skills {
  list-style-type: none;
  padding: 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin: 0 0 1rem;
  @include m.xxl {
    font-size: 1rem;
  }
  @include m.lg {
    font-size: 1rem;
  }
}

/* RIGHT COLUMN */

.right-column {
  grid-area: right-column;
  display: grid;
  grid-template-rows: 250px 1fr;
  grid-template-areas: "header" "content";
  @include m.lg {
    display: grid;
    grid-template-columns: 1fr;
  }
}

/* HEADER */
.header {
  grid-area: header;
  padding: 50px;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include m.lg {
    padding: 20px;
  }
  p {
    font-size: 16px;
  }
}

.infos {
  columns: 2;
  list-style-type: none;
  padding: 0;
  @include m.lg {
    display: flex;
    flex-direction: column;
  }
  li {
    font-size: 16px;
  }
}

/* CONTENT */

.content {
  grid-area: content;
  padding: 50px;
  @include m.lg {
    padding: 20px;
  }
  .section {
    p {
      @include m.xxl {
        font-size: 16px;
      }
      @include m.lg {
        font-size: 16px;
      }
      @include m.sm {
        font-size: 15px;
      }
    }
    .description-formation {
      position: relative;
      bottom: 8px;
      .superProf {
        color: #079992;
      }
    }
  }
}

.experience-list {
  list-style-type: circle;
  position: relative;
  bottom: 8px;
  li {
    @include m.xxl {
      font-size: 16px;
    }
    @include m.lg {
      font-size: 16px;
    }
    @include m.sm {
      font-size: 15px;
    }
  }
}
</style>