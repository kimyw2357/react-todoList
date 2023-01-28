import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelet }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelet = () => {
    onDelet(todo);
  }
  return (
    <li>
      <input
        type='checkbox'
        id={todo.id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={todo.id}>{text}</label>
      <button onClick={handleDelet}><FaTrashAlt /></button>
    </li>
  );
} 
