import React from 'react';
import { useSelector } from 'react-redux';

export default function DoneList() {
  const list = useSelector((state) => state.todo.todoList).filter((e) => {
    return e.done === true;
  });

  return (
    <section>
      <h2>완료된 목록</h2>
      <ul>
        {list.map((e) => (
          <li key={e.id}>{e.text}</li>
        ))}
      </ul>
    </section>
  );
}
