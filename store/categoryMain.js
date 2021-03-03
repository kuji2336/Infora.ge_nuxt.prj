
import { db } from "/plugins/firebase.js";
export const state = () => ({
    mainNews:[]
  })
  
  
  export const mutations = {
    mainNewsInfo(state, payload){
      state.mainNews.push(payload)
    }
  }
  
  
  export const actions = {
   async getAllmainNewsInfo({commit}){
    /* get main news data */
    const snapshot = await db.collection("main-news").get();
    return snapshot.docs.map((doc) =>
      commit("mainNewsInfo", { news: doc.data().News, newsId: doc.id })
    );
    }
  
  }
  
  export const getters = {

    maininfoResults(state){
      return state.mainNews
    }
  
  }
  