// whenever an api call would be made from the frontend, this file will catch/intercept
//it in between, make chnages to call and then allow it to go..

import axios from "axios";

axios.interceptors.request.use(config => {

  if(localStorage.getItem("token")!=null){

    config.headers["Authorization"] = localStorage.getItem("token");
  }

  return config;
})