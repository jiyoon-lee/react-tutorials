import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos'
import Todos from '../components/Todos'

const TodosContainer = (({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
    />
  )
})

export default TodosContainer