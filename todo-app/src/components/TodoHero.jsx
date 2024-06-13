import React from "react";

const TodoHero = ({ all_todos, completed_todos }) => {
  return (
    <section className="bg">
      <div>
        <h1>Taks Done</h1>
        <span>Keep it up</span>
      </div>

      <div>
        {all_todos}/{completed_todos}
      </div>
    </section>
  );
};

export default TodoHero;
