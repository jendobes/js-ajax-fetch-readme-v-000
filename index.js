const app = "I don't do much.";
const token = '8370aa523329cc0665ce0372f9bb01066d875a54'
fetch ('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
