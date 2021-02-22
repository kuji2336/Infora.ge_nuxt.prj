
//@desc check if user is logined in or not
import firebase from "firebase/app"
export default function ({ store}) {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          store.commit("SET_USER", true)
          store.commit("SET_USER_NAME", user.displayName)
        }
      });
  }