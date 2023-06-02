import React, { useContext, useState } from "react";
import { Store } from "../App";
import { Card, List, Button, Input } from "antd";
import { useObserver } from "mobx-react-lite";
import { toJS } from "mobx";
import "./index.css";

function TodoList() {
  const todoStore = useContext(Store);
  const [title, setTitle] = useState<string>("");
  const { todos } = todoStore;

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
    todoStore.addTodo({
      title,
      id: Math.random(),
      done: false,
    });
    setTitle("");
  };

  const delTodo = (id: number) => {
    return () => {
      todoStore.delTodo(id);
    };
  };

	// useObserver钩子
  return useObserver(() => (
    <div className="wrapper">
      <Card title="Todo list">
        <div style={{ display: "flex" }}>
          <Input
            placeholder="请输入待办事项"
            value={title}
            onChange={handleChange}
          />{" "}
          <Button onClick={addTodo}>添加</Button>
        </div>
        <List>
          {todos.map((todo) => (
            <div
              key={todo.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <List.Item>{todo.title}</List.Item>
              <Button
                danger
                size="small"
                style={{ marginTop: "10px" }}
                onClick={delTodo(todo.id)}
              >
                删除
              </Button>
            </div>
          ))}
        </List>
      </Card>
    </div>
  ));
}

export default TodoList;
