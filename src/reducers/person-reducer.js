export default function PersonReducer(person, action) {
  switch (action.type) {
    case "add": {
      const {name, title} = action
      return {
        ...person,
        mentors: [...person.mentors, {name, title}]
      }
    }
    case "update": {
      const {prev, current} = action
      return {
        ...person,
        mentors: person.mentors.map(mentor => {
          if (mentor.name === prev) {
            return {...mentor, name: current}
          } else {
            return mentor
          }
        })
      }
    }

    case "delete": {
      const {prev} = action
      return {
        ...person,
        mentors: person.mentors.filter(mentor => mentor.name !== prev)
      }
    }
    default: {
      throw Error(`no activity like: ${action.type}`)
    }
  }
}
