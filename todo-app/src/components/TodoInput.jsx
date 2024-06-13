import React, { useState } from "react";

const TodoInput = () => {
  const [txt, setTxt] = useState("");

  const handleSubmit = (e) => {

     e.preventDefalut();



     e.target.reset();



  };
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            name="todo"
            id="todo"
            placeholder="Write your next task"
          />
        </label>

        <button>
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
      </form>
    </section>
  );
};

export default TodoInput;
