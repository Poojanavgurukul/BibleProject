import TextColor from "../../hoc/textColor";
const TodosList = ({todos,deleteTodo}) => {
    const todoList = todos.length?(
        todos.map((todo)=>(
            <div className="collection-item" key={todo.id}>
                <span>{todo.content}</span>
                <button 
                    onClick={()=>deleteTodo(todo.id)}
                    className="btn space"
                >
                    Delete
                </button>
            </div>
        ))
    ): (
        <p className="App">You have no Todo's Left </p>
    );
    return ( 
        <div className="todos collection">
            {todoList}
        </div>
     );
}
 
export default TextColor(TodosList);