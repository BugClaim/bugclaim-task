<template>
  <div class="all">


    <section id="hero">
      <div class="container">
        <!-- <h1 class="center med">Get Started</h1> -->
        <div class="flex-center">
          <div class="four columns center">
            <img src="@/assets/img/bugclaim.svg" alt="BugClaim" />
          </div>
          <div class="flex">
            <router-link to="/login">
              <button class="button-primary">Get started</button>
            </router-link>
            <!-- <a href="#">Create an organisation</a> -->
          </div>
        </div>
      </div>
    </section>

    <section id="video">
      <div class="container">
        <div class="flex-center">
          <div class="ten columns">
            <div class="vid-con noselect">
              <iframe
                src="https://www.youtube.com/embed/Cp8wWLzGYls"
                frameborder="0"
                allowfullscreen
                class="video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="six columns">
            <p class="zero">Made by CybSec NITW</p>
          </div>
          <div class="six columns">
            <p class="zero right">© Protonull Corporation Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import UserService from '../services/user.service'

export default {
  name: "Home",
  // data() {
  //   return {
  //     content: '',
  //   };
  // },
  // mounted() {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       this.content = response.data;
  //     },
  //     (error) => {
  //       this.content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //     }
  //   );
  // },
};
</script>

<style lang="scss" scoped>
.vh {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(20, 20, 20);
  color: #fff;
}
footer.footer {
  background-color: rgb(20, 20, 20);
  color: rgb(100, 100, 100);
  padding: 0.75em 0;
  p {
    font-size: 0.9em;
  }
}
#video {
  background-color: rgb(25, 25, 25);
  color: #fff;
  .container {
    padding: 7em 0;
  }
}

.logo {
  margin-top: 1.75em;
  width: 90%;
}
.start {
  font-size: 1.2em;
  margin: 0;
  margin-top: 0.5em;
}

#features {
  color: #fff;
  background-color: rgb(20, 20, 20);
  padding: 5em 0;
  .grid {
    display: grid;
    grid-gap: 3em;
    grid-template-columns: repeat(3, 1fr);
    .one {
      margin-bottom: 1.2em;
    }
    .feticon {
      width: 2em;
      margin-bottom: 0.5em;
    }
    h3 {
      margin-bottom: 0.5em;
    }
  }
}

#hero {
  color: #fff;
  background-color: rgb(25, 25, 25);
  padding: 5em 0;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    button {
      color: #fff;
      background-color: #007fef;
      border: none;
    }
    button:hover {
      background-color: #41a0f3;
    }
  }
}

@media (max-width: 750px) {
  .vh {
    height: auto;
    padding: 12em 0;
  }
  #video {
    .flex-center {
      padding: 0 1em;
    }
  }
  .subtitle {
    margin: 0 0 1.5em 0;
  }
  #features {
    .grid {
      display: grid;
      grid-gap: 3em;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  #hero {
    img {
      width: 80%;
    }
  }
  footer.footer {
    p {
      text-align: center;
    }
  }
}

.vid-con {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
}

.subtitle {
  font-size: 1.7em;
}
</style>
