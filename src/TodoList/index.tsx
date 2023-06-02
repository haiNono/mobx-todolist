import React, { useContext, useState } from "react";
import { Card, List, Button, Input } from "antd";
import { useObserver,useLocalObservable } from "mobx-react-lite";
import { Todo } from "../store";
import "./index.css";

function TodoList() {

	// 局部状态
  const todoStore = useLocalObservable(() => ({
		todos: [
			{ title: "吃饭", done: false, id: Math.random() },
			{ title: "睡觉", done: false, id: Math.random() },
			{ title: "打豆豆", done: true, id: Math.random() },
		],
		addTodo (todo: Todo) {
			this.todos.push(todo);
		},
		delTodo (id: number) {
			this.todos.forEach((item: Todo, index, arr) => {
				if (item.id === id) {
					arr.splice(index,1);
				}
			});
		}
	}));
	const {todos} = todoStore
  const [title, setTitle] = useState<string>("");

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
