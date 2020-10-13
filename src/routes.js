import UsersCreate from "./components/UsersCreate.vue";
import UsersList from "./components/UsersList.vue";


export const routes = [
  {path : "/", component : UsersCreate,name : "userCreate"},
  {path : "/users", component : UsersList,name : "userList"},

];
