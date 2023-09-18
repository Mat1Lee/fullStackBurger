import axios from 'axios'


export class baseService {
  put = (url,model)=>{
    return axios ({
      url :`${url}`,
      method:'PUT',
      data:model,
      headers:{'Authorization':localStorage.getItem("accessToken")}
    })
  }
  post = (url,model)=>{
    return axios ({
      url :`${url}`,
      method:'POST',
      data:model,
      headers:{'Authorization':localStorage.getItem("accessToken")}
    })
  }
  get = (url)=>{
    return axios ({
      url :`${url}`,
      method:'GET',
      headers:{'Authorization':localStorage.getItem("accessToken")}
    })
  }
  delete  = (url)=>{
    return axios({
      url :`${url}`,
      method:'DELETE',
      headers:{'Authorization':localStorage.getItem("accessToken")}
    })
  }

}