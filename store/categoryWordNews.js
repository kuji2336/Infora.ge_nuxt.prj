
import { db } from "/plugins/firebase.js";
export const state = () => ({
    WorldmainNews:[]
  })
  
  
  export const mutations = {
     WorldNewsInfo(state, payload){
      state.WorldmainNews.push(payload)
    }
  }
  
  
  export const actions = {
   async getWorldNewsInfo({commit}){
    /* get  World news data */
    const snapshot = await db.collection("world-news").get();
    return snapshot.docs.map((doc) =>
      commit("WorldNewsInfo", { news: doc.data().News, newsId: doc.id })
    );
    }
  
  }
  
  export const getters = {

     WorldinfoResults(state){
      return state.WorldmainNews
    }
  
  }
  