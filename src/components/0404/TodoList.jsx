import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../../store/modules/todo';

export default function TodoList() {
  const list = useSelector((state) => state.todo.todoList).filter(
    (e) => !e.done,
  );
  const nextId = useSelector((state) => state.todo.nextId);
  const inputRef = useRef('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      create({
        id: nextId,
        text: inputRef.current.value,
      }),
    );
    inputRef.current.value = '';
  };

  return (
    <section>
      <h2>할일 목록</h2>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {list.map((e) => {
          return (
            <li key={e.id}>
              {e.text}
              <button onClick={() => dispatch(done(e.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
