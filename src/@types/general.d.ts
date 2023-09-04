type Todo = {
    id: number;
    userId: number;
    completed: boolean;
    todo: string
}

type EditMode = {
    id: number
    title: string | any}

type InitialState = {
    todos: Todo[]
    editableTodo: EditMode
}