import produce from "immer"

export default function App() {
  const todos = [
    {text: "go shopping", done: false},
    {text: "sleep", done: false}
  ]

  const nextTodos = produce(todos, draft => {
    draft.push({text: "wow", done: false})
  })

  console.log(todos[0].done)
  console.log(nextTodos[0].done)
  console.log(nextTodos === todos)

  return (
    <h1>
      {nextTodos.map(row => (
        <li key={row.text}>{row.text}</li>
      ))}
    </h1>
  )
}
