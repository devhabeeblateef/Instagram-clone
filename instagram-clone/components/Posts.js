import { lorem } from "faker";
import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'sssss',
        userImg: "https://links.papareact.com/3ke",
        img: "",
        caption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: '123',
        username: 'sssss',
        userImg: "https://links.papareact.com/3ke",
        img: "",
        caption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: '123',
        username: 'sssss',
        userImg: "https://links.papareact.com/3ke",
        img: "",
        caption: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    
];
function Posts() {
    return (
        <div>
            {posts.map( (post) =>(
                <Post key={post.id} id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}/>
            ))}
           <Post />
           <Post />
           <Post />
           <Post />
        </div>
    )
}

export default Posts
