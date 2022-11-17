import React, {useReducer} from "react"
import PersonReducer from "./reducers/person-reducer"

export default function AppMentor() {
  const [person, dispatch] = useReducer(PersonReducer, initialState)

  function changeMentor() {
    const prev = prompt(`wanna change mentor? whom?`)
    const current = prompt(`to?`)
    dispatch({type: "update", prev, current})
  }

  function addMentor() {
    const name = prompt("추가할 이름")
    const title = prompt("추가할 타이틀")
    dispatch({type: "add", name, title})
  }

  function deleteMentor() {
    const prev = prompt("삭제할 멘토")
    dispatch({type: "delete", prev})
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={changeMentor}>멘토의 이름을 바꾸기</button>
      <button onClick={deleteMentor}> 멘토삭제 </button>
      <button onClick={addMentor}>멘토 추가하기 </button>
    </div>
  )
}
const initialState = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자"
    },
    {
      name: "제임스",
      title: "시니어개발자"
    }
  ]
}
