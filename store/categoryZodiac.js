
import { db } from "/plugins/firebase.js";
export const state = () => ({
    zodiacNews:[]
  })
  
  
  export const mutations = {
     zodiacNewsInfo(state, payload){
      state.zodiacNews.push(payload)
    }
  }
  
  
  export const actions = {
   async getZodiacNewsInfo({commit}){
    /* get  World news data */
    const snapshot = await db.collection("zodiac").get();
    return snapshot.docs.map((doc) =>
      commit("zodiacNewsInfo", { news: doc.data().News, newsId: doc.id })
    );
    }
  
  }
  
  export const getters = {
     zodiacinfoResults(state){
      return state.zodiacNews
    }
  
  }
  