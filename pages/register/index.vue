<template>
  <div class="wrap">
    <div class="form">
    <div class="image-wrapper">
      <div class="image__inner">
        <h1>რეგისტრაცია</h1>
      </div>
     </div>
      <form  @submit.prevent="registerUser">
        <div class="form-area">
          <div class="form-list">
            <label for="form-name" class="form-label">სახელი:</label>
            <input
              type="text"
              required="required"
              placeholder="შეიყვანეთ თქვენი სახელი"
              class="form-input"
              v-model="userName"
            />
            <div class="form-background"></div>
          </div>
          <div class="form-list">
            <label for="form-email" class="form-label">ფოსტა:</label>
            <input
              type="email"
              required="required"
              placeholder="შეიყვანეთ ელ.ფოსტა"
              class="form-input"
              v-model="Email"
            />
            <div class="form-background"></div>
          </div>
          <div class="form-list">
            <label for="form-email" class="form-label">პაროლი:</label>
            <input
              type="password"
              required="required"
              placeholder="შეიყვანეთ პაროლი"
              class="form-input"
              v-model="password"
            />
            <div class="form-background"></div>
          </div>
          <div class="feedback" v-if="errorCodes != ''">
             <p>{{errorCodes}}</p>
          </div>
        </div>
        <input type="submit" class="form-button" value="რეგისტრაცია" />
      </form>
      
    </div>
  </div>
</template>


<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      userName: "",
      Email: "",
      password: "",
      errorCodes:""
    };
  },

  methods: {
    async registerUser() {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.Email, this.password)
        .then((user) => {
          //@desc update name
          var firebaseCurrentUser = firebase.auth().currentUser;
          console.log(firebaseCurrentUser);
          firebaseCurrentUser.updateProfile({
            displayName: this.userName,
          });
          if (user) {
            this.$store.commit("SET_USER", true);
            this.$store.commit("SET_USER_NAME", user.displayName);
            this.$store.commit("SET_USER_GMAIL", this.Email);
            this.$bvModal.show("modal-1");
            this.$router.push("/");
            this.sendAuthLinkTogmail();
          }
        })
        .catch((error) => {
          var errorCode = error.code;
          if(errorCode === "auth/email-already-in-use"){
           this.errorCodes = "მეილი უკვე გამოყენებულია"

          }
          if(errorCode === "auth/weak-password"){
           this.errorCodes = "პაროლი ზედმეტად სუსტია"
          }

          if(errorCode === "auth/too-many-requests"){
            this.errorCodes = "წარმოიშვა შეცდომა"
          }
        });
    },

    sendAuthLinkTogmail() {
      firebase.auth().currentUser.sendEmailVerification();
    },
  },
};
</script>

<style lang="scss" scoped>
// Break Point
$tablet-width: 767px;
$mobile-width: 640px;


.feedback{
  display: flex;
    justify-content: center;
    margin-top: 42px;
    color: #ffffff;
    background-color: #dc3545;
    padding: 16px;
    border-radius: 30px;
    p{
      font-family: "mtavruli";
    }
}
// Tablet
@mixin tablet {
  @media screen and (max-width: #{$tablet-width}) {
    @content;
  }
}

// Mobile
@mixin mobile {
  @media screen and (max-width: #{$mobile-width}) {
    @content;
  }
}

* {
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", sans-serif;
}

body,
html {
  width: 100%;
  height: 100%;
  background-color: #e8e8ea;
}


.form-label{
  font-family: "rioni-bpg";
}

.wrap {
  width: 440px;
  padding: 2%;
  margin: 60px auto;
  background: #fff;
  box-shadow: 0 20px 30px -20px rgba(2, 2, 2, 0.8),
    0 20px 30px 0px rgba(30, 30, 30, 0.3);

  @include tablet {
    width: 380px;
  }

  @include mobile {
    width: 320px;
  }
}

.image__inner{
  margin-bottom: 32px;
  h1{
    font-family: 'rioni-bpg';
    font-size: 23px;
    text-align: center;
    color: #ffffff;
  }
}



.form {
  width: 100%;
  margin: 0 auto;
  padding: 60px 30px;
  box-sizing: border-box;
  background-color: #0e0e0e;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2b8f5', endColorstr='#fc78b1',GradientType=1 );

  .form-list {
    position: relative;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: 12px;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid transparent;

    &:first-child {
      margin-top: 0;
    }
    @include tablet {
      height: 50px;
    }
    @include mobile {
      height: 40px;
    }

    .form-label {
      display: block;
      z-index: 1;
      position: relative;
      height: 100%;
      margin-right: 0;
      padding-left: 26px;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 62px;
      @include tablet {
        padding-left: 22px;
        font-size: 13px;
        line-height: 50px;
      }

      @include mobile {
        padding-left: 18px;
        font-size: 11px;
        line-height: 39px;
      }
    }

    .form-input {
      z-index: 1;
      display: inline-block;
      position: relative;
      overflow: hidden;
      -ms-flex-positive: 1;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      height: 58px;
      padding: 0 20px;
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.85);
      border: 0;
      outline: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: transparent;

      @include tablet {
        padding: 0 14px;
        height: 47px;
        font-size: 14px;
      }

      @include mobile {
        padding: 0 10px;
        height: 36px;
        font-size: 11px;
      }

      &:-webkit-autofill {
        -webkit-box-shadow: inset 0 0 0px 9999px transparent;
      }

      &:focus,
      &:-webkit-autofill:focus {
        -webkit-box-shadow: inset 0 0 0px 9999px transparent,
          0 0 8px rgba(0, 0, 0, 0);
      }

      &:focus + .form-background {
        transition: background-color 0.2s;
        background-color: rgba(255, 255, 255, 0.35);
      }

      &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-size: 14px;

        @include tablet {
          font-size: 12px;
        }
        @include mobile {
          font-size: 10px;
        }
      }
      &:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-size: 14px;

        @include tablet {
          font-size: 12px;
        }
        @include mobile {
          font-size: 10px;
        }
      }
      &::-moz-placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-size: 14px;

        @include tablet {
          font-size: 12px;
        }
        @include mobile {
          font-size: 10px;
        }
      }
    }

    .form-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.18);
      transition: background-color 0.2s;
      border-radius: 30px;
    }
  }

  .form-button {
    display: block;
    cursor: pointer;
    width: 100%;
    margin: 50px auto 0;
    padding: 20px 0;
    font-size: 14px;
    color: #fff;
    line-height: 0.8; //20px*0.8=16px
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 30px;
    transition: background-color 0.2s;

    &:hover,
    &:active,
    &:focus {
      color: #fe78b5;
      background-color: rgba(255, 255, 255, 0.8);
      outline: 0;
      transition: background-color 0.2s, color 0.2s;
    }

    @include tablet {
      font-size: 16px;
      padding: 16px 0;
    }
    @include mobile {
      font-size: 13px;
      padding: 13px 0;
    }
  }
}

@media(max-width:768px){
  .feedback{
    padding: 8px;
    p{
      font-size: 10px;
    }
}
}
</style>