import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

const App = ({ fetchTodos, deleteTodo, todos }: AppProps): JSX.Element => {
  const [state, setState] = useState<AppState>({ fetching: false });

  useEffect(() => {
    if (todos.length) {
      setState({ fetching: false });
    }
  }, [todos]);

  const onButtonClick = (): void => {
    fetchTodos();
    setState({ fetching: true });
  };

  const onTodoClick = (id: number): void => {
    deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };
  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      <div>
        <p>{state.fetching ? 'LOADING' : null}</p>
        {renderList()}
      </div>
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
