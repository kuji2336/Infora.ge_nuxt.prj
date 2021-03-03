
import { db } from "/plugins/firebase.js";
export const state = () => ({
    artNews:[]
  })
  
  
  export const mutations = {
    artNewsInfo(state, payload){
      state.artNews.push(payload)
    }
  }
  
  
  export const actions = {
   async getAllArtInfo({commit}){
    /* get main news data */
    const snapshot = await db.collection("art").get();
    return snapshot.docs.map((doc) =>
      commit("artNewsInfo", { news: doc.data().News, newsId: doc.id })
    );
    }
  
  }
  
  export const getters = {

    artinfoResults(state){
      return state.artNews
    }
  
  }
  