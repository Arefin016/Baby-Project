import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";


const TodoContainer = () => {
    // Form Local State
    // const { todos } = useAppSelector(state => state.todos)
    //From server

    const { data: todos, isLoading, isError } = useGetTodosQuery(undefined)
    console.log(todos)

    if (isLoading) {
        return <p>Loading....</p>
    }


    return (
        <div>
            <div className="flex justify-between mb-5">

                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
                <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
                    {
                        todos?.map(item => <TodoCard {...item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;