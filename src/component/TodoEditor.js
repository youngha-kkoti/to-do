import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    onCreate(content);
  };

  return (
    <div className="TodoEditor">
      <h4>Add new To-do</h4>
      <div className="editor_wrapper">
        <input value={content} onChange={onChangeContent} />
        <button onClick={onSubmit}>Add</button>
      </div>
    </div>
  );
};

export default TodoEditor;
