
import { db } from "/plugins/firebase.js";
export const state = () => ({
    allNews:[]
  })
  
  
  export const mutations = {
    allNewsInfo(state, payload){
      state.allNews.push(payload)
    }
  }
  
  
  export const actions = {
   async getANewsInfo({commit}){
    /* get  World news data */
    const snapshot = await db.collection("all").get();
    return snapshot.docs.map((doc) =>
      commit("allNewsInfo", { news: doc.data().News, newsId: doc.id })
    );
    }
  
  }
  
  export const getters = {
    allinfoResults(state){
      return state.allNews
    }
  
  }
  