import axios from "axios";
import { useRef, useEffect, useState } from "react";

function LoggedIn() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        getTodo();
    });

    const title = useRef(null);
    const firstElement = useRef(null);
    const secondElement = useRef(null);

    const token = localStorage.getItem("token");

    async function getTodo() {

        const response = await axios.get(`http://localhost:4000/todo`, {
            headers: {
                Authorization: token
            }
        });
        if (response?.status === 200) {
            setTodo(response.data.data);
        }
        else {
            console.log("Todo Not Found");
        }
      }

      async function postTodo() {

        const response = await axios.post(`http://localhost:4000/todo`,{
            title: title.current.value,
            list: [firstElement.current.value, secondElement.current.value]
        } ,{
            headers: {
                Authorization: token
            }
        });
        if (response?.status === 200) {
            console.log(response);
        }
        else {
            console.log("Todo Not Found");
        }

      }
    
    return (
        <div>
            <input type="text" placeholder="Todo Title" ref={title}/>
            <br/>
            <input type="text" placeholder="List Element 1" ref={firstElement}/>
            <br/>
            <input type="text" placeholder="List Element 2" ref={secondElement}/>
            <br/>
            <button onClick={() => postTodo()}>Submit</button>
            {
                todo.map((value, index) => {
                    return <div key={index}>
                        <h4>Title: {value.title}</h4>
                        <p>List: {value.list.toString()}</p>
                    </div>
                })
            }
        </div>
    )
}

export default LoggedIn;