import axios from "axios"


export default async (number) => {
    const {data}  = await axios("https://jsonplaceholder.typicode.com/users/"+ number)

    const {data:post} = await axios ("https://jsonplaceholder.typicode.com/posts?userId="+ number)
    
    data.posts = post
    return console.log(data)
    
}
