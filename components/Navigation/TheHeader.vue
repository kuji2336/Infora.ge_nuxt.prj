<template>
  <div class="wr">
    <div class="upper-nav">
      <div
        class="additional-links d-flex justify-content-end align-items-center"
      >
        <p><a href="#">ჩვენს შესახებ</a></p>
        <p><a href="#">კონტაქტი</a></p>
      </div>
    </div>
    <div class="container-fluid container-navbar">
      <nav>
        <div class="navbar-costum">
          <div class="navbar__inner">
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-12 col-12 mobile-logo">
                <div class="logo-side">
                  <nuxt-link to="/"
                    ><img
                      src="~assets/img/newLogo.png"
                      alt="mainLogo"
                  /></nuxt-link>
                </div>
              </div>
              <div class="col-xl-7 col-lg-7 col-md-12 col-12 nav-mob-off" :class="{visiable:sideNavIsVisiable}">
                <div class="navigation-links">
                  <div class="close-mob">
                      <span class="close" @click="closeNav"></span>
                  </div>
                  <ul>
                    <li>
                      <nuxt-link class="see-all" to="/"> მთავარი </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        class="see-all"
                        :to="{
                          path: `/posts/category-page/${221}`,
                          query: { category: 'politics' },
                        }"
                      >
                        პოლიტიკა
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        class="see-all"
                        :to="{
                          path: `/posts/category-page/${223}`,
                          query: { category: 'world-news' },
                        }"
                        >მსოფლიო</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link
                        class="see-all"
                        :to="{
                          path: `/posts/category-page/${980}`,
                          query: { category: 'art' },
                        }"
                      >
                        ხელოვნება
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        class="see-all"
                        :to="{
                          path: `/posts/category-page/${873}`,
                          query: { category: 'zodiac' },
                        }"
                      >
                        ზოდიაქო
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        class="see-all"
                        :to="{
                          path: `/posts/category-page/${123}`,
                          query: { category: 'all' },
                        }"
                        >სხვადასხვა</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-12 col-12">
                <div class="hamburger" @click="showSideNav">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
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
  data(){
    return{
      sideNavIsVisiable:false,
    }
  },
  computed: {
    ...mapGetters(["checkUserLogin", "GetUserName"]),
  },

  methods: {
    LogOutFromSystem() {
      firebase.auth().signOut();
      this.$store.commit("SET_USER", false);
    },

    showSideNav(){
      this.sideNavIsVisiable = true;
    },

    closeNav(){
       this.sideNavIsVisiable = false
    }
  },
};
</script>

<style lang="scss" scoped>
.container-navbar {
  box-shadow: 0 3px 6px rgb(32 121 118 / 20%);
}
nav {
  padding: 35px;
}
.logo-side {
  display: flex;
  align-items: center;
  a{
    img{
      height: 100px;
    }
  }
}

.logo-side {
  height: 20px;
}

.user-int-side {
  display: flex;
  justify-content: flex-end;
}

.hamburger{
  display: none;
}

.register {
  a {
    color: #000000;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: "rioni-bpg";

    p {
      margin-right: 10px;
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
    font-family: "rioni-bpg";
    cursor: pointer;
    p {
      margin-right: 10px;
    }
    img {
      height: 25px;
    }
  }
}


.close-mob{
  display: none;
}


.navigation-links ul {
  width: 100%;
  display: flex;
  justify-content: center;
  li {
    list-style: none;
    margin-right: 10px;
    margin-left: 10px;
    a {
      text-decoration: unset;
      font-size: 19px;
      transition: 0.2s;
      font-family: "rioni-bpg";
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

.additional-links {
  p {
    a {
      text-decoration: none;
      color: #ffffff;
      padding: 10px;
      font-family: "rioni-bpg";
    }
  }
}

@media (max-width: 768px) {
  .nav-mob-off {
    position: absolute;
    height: 100%;
    background-color: #ffffff;
    z-index: 99;
    max-width: 270px;
    left: -100%;
    top: 0;
    transition: 0.3s;
  }


  .mobile-logo{
    position: absolute;
    top: 0;
  }


  .hamburger{
    display: block;
  }


  .close {
  position: absolute;
  right: 7px;
  top: 4px;
  width: 32px;
  height: 32px;
  opacity: 1;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: rgb(0, 0, 0);
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}


  .close-mob{
    display: block;
  }

  .visiable{
  left: 0;
  transition: 0.3s;
}

  .logo-side {
    a {
      img {
        width: 90px;
        height: 94px;
      }
    }
  }

  .navigation-links {
    height: 100%;
    background-color: #ffffff;
  }

  .navigation-links ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 50px;
  }

  .navigation-links ul li {
    margin-bottom: 25px;
  }

  nav {
    padding: 8px;
  }

  .container-navbar {
    padding-left: 0;
    padding-right: 0;
  }

  .user-int-side {
    justify-content: flex-end;
    padding: 10px;
  }

  .d-mob {
    display: none;
  }
}


.hamburger{
  position: absolute;
  div {
  width: 35px;
  height: 4px;
  top: 15px;
  background-color: black;
  margin: 6px 0;
}
}
</style>