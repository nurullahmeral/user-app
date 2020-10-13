import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        userCreateList : [],
        userCopyList : [],
        copyValueStr : "",
        user : {
          email : "sdsad",
          firstName : "sdasdad",
          lastName : "sadasd",
          date : "asdsad"
        }
    },
    getters : {
      getUserCreateList(state){
        return state.userCreateList;
      },
      getUser(state){
        return state.user;
      },
      getUserCopyList(state){
        return state.userCopyList;
      },
      getCopyValueStr(state){
        return state.copyValueStr;
      }


    },mutations :{
      addUserCreateList(state,value)
      {
        state.userCreateList.push({
          email : value[0],
          firstName : value[1],
          lastName : value[2],
          date : value[3]
        });

      },
      addUserCopyList(state,value)
      {
        state.userCopyList.push([value])
      },
      resetList(state,value){
        state.userCopyList = value;
      },
      resetCreateList(state,value){
        state.userCreateList = value;
      },
      copyValueChanges(state,value){
        state.copyValueStr = value;
      }

    },
    actions : {
      addListFinish({commit}){
        commit("addUserList");
      },
      addUserFinish({commit}){
        commit("addUser");
      },
      asyncCreate({commit}){
        setTimeout(() => {
          commit("addUserList");

        }, 1000);
      }

    }
});
