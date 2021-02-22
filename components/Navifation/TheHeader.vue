<template>
  <div class="wr">
    <div class="upper-nav">
        <div class="additional-links d-flex justify-content-end align-items-center">
            <p><a href="#">ჩვენს შესახებ</a></p>
            <p><a href="#">კონტაქტი</a></p>
        </div>
    </div>
    <div class="container-fluid container-navbar">
      <nav>
        <div class="navbar-costum">
          <div class="navbar__inner">
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-12 col-12">
                <div class="logo-side">
                  <nuxt-link to="/"><img src="~assets/img/logo.png" alt="mainLogo"/></nuxt-link>
                </div>
              </div>
              <div class="col-xl-7 col-lg-7 col-md-12 col-12">
                <div class="navigation-links">
                  <li>
                    <a href="#">მთავარი</a>
                  </li>
                  <li>
                    <a href="#">პოლიტიკა</a>
                  </li>
                  <li>
                    <a href="#">მსოფლიო</a>
                  </li>
                  <li>
                    <a href="#">ხელოვნება</a>
                  </li>
                  <li>
                    <a href="#">ზოდიაქო</a>
                  </li>
                  <li>
                    <a href="#">სხვადასხვა</a>
                  </li>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-12 col-12">
                <div class="user-int-side" v-if="!checkUserLogin">
                  <div class="log-in">
                    <nuxt-link to="/login">
                      <p>შესვლა</p>
                      <img src="~assets/img/sign-in.svg" />
                    </nuxt-link>
                  </div>
                  <div class="register">
                    <nuxt-link to="/register">
                      <p>რეგისტრაცია</p>
                      <img src="~assets/img/register.svg" />
                    </nuxt-link>
                  </div>
                </div>
                <div class="user-int-side user--logined" v-else>
                  <div class="log-in">
                    <a href="#">
                      <p>{{ GetUserName }}</p>
                      <img src="~assets/img/user.svg" />
                    </a>
                  </div>
                  <div class="register" @click="LogOutFromSystem">
                    <a href="#">
                      <p>გასვლა</p>
                      <img src="~assets/img/sign-in.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase/app";
export default {
  computed: {
    ...mapGetters(["checkUserLogin", "GetUserName"]),
  },

  methods: {
    LogOutFromSystem() {
      firebase.auth().signOut();
      this.$store.commit("SET_USER", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-navbar {
  background: #f5f5f5 0 0 no-repeat padding-box;
  box-shadow: 0 3px 6px rgb(32 121 118 / 20%);
}
nav {
  padding: 35px;
}
.logo-side {
  display: flex;
  align-items: center;
}

.logo-side {
  height: 20px;
}

.user-int-side {
  display: flex;
  justify-content: flex-end;
}

.register {
  a {
    color: #000000;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin-right: 10px;
      font-family: "firagomedium";
    }
    img {
      height: 25px;
    }
  }
}

.log-in {
  a {
    display: flex;
    align-items: center;
    color: #000000;
    text-decoration: none;
    margin-right: 30px;
    cursor: pointer;
    p {
      margin-right: 10px;
      font-family: "firagomedium";
    }
    img {
      height: 25px;
    }
  }
}

.navigation-links {
  width: 100%;
  display: flex;
  justify-content: center;
  li {
    list-style: none;
    margin-right: 10px;
    margin-left: 10px;
    a {
      text-decoration: unset;
      font-family: firagoregular;
      font-size: 17px;
      transition: 0.2s;
      border-bottom: 2px solid rgba(128, 128, 128, 0);
      color: #000000;
    }
  }
}

.navigation-links li a:hover {
  border-bottom: 2px solid #ffc107;
  transition: 0.2s;
}

.upper-nav {
  padding: 10px;
  background-color: #ffc107;
}

.additional-links{
    p{
        a{
            text-decoration: none;
            color: #ffffff;
            font-family: "firagolight";
            padding: 10px;
        }
    }
}



@media(max-width:768px){
    .logo-side{
        display: none;
    }
    .navigation-links{
        flex-wrap: wrap;
    }

    nav{
        padding: 8px;
    }

    .container-navbar{
        padding-left: 0;
        padding-right: 0;
    }

    .user-int-side{
    justify-content: center;
    padding-top: 10px;
}
}
</style>