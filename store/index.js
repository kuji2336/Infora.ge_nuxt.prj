
export const state = () => ({
  userIsLogined:false,
  userName:"",
  userGmail:null,
})


export const mutations = {
  SET_USER_GMAIL(state, payload){
    state.userGmail = payload
  },

  SET_USER(state, payload){
    state.userIsLogined = payload
  },

 

  SET_USER_NAME(state, payload){
    state.userName = payload
  }
}


export const actions = {

}

export const getters = {

  checkUserLogin(state){
     return state.userIsLogined
  },

  GetUserName(state){
    return state.userName
  },

  GetUserEmail(state){
    return state.userGmail
  },



}
