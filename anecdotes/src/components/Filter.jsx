import {useAnecdoteActions} from "../store"

const Filter = () => {
  const { setFilter } = useAnecdoteActions()

  return (
    <label>
      Search anecdotes:{" "}
      <input
        type="search"
        placeholder="Type to search"
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  )
}
export default Filter