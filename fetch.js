const fetch=()=>{
    return new Promise((resolve,error)=>{
      const request=new XMLHttpRequest()
      request.addEventListener('readystatechange',()=>{
        if(request.readyState===4&&request.status===200){
          resolve(JSON.parse(request.responseText))
        }
        else if(request.readyState===4)
          error('error')
      })
      request.open('GET','https://my-json-server.typicode.com/typicode/demo/posts')
      request.send()
    })
}
fetch().then((data)=>{
  console.log(data)
}).then((error)=>{
  console.log('hi')
})
