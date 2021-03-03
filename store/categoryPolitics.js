
import { db } from "/plugins/firebase.js";
export const state = () => ({
    politicNews:[]
  })
  
  
  export const mutations = {
    politicNewsInfo(state, payload){
      state.politicNews.push(payload)
    }
  }
  
  
  export const actions = {
   async getAllpoliticInfo({commit}){
    /* get main news data */
    const snapshot = await db.collection("politics").get();
    return snapshot.docs.map((doc) =>
      commit("politicNewsInfo", { news: doc.data().News, newsId: doc.id })
    );
    }
  
  }
  
  export const getters = {

    politicinfoResults(state){
      return state.politicNews
    }
  
  }
  