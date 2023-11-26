
const Completed = ({ todos }) => {
    if (!todos || todos.length === 0) {
        return <p>No completed tasks</p>;
      }
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div>
            {completedTodos.map(todo => (
                <div key={todo.id}>
                    <p>{todo.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Completed;