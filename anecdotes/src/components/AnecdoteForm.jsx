import { useAnecdoteActions } from "../store"

const AnecdoteForm = () => {
  const { createAnecdote } = useAnecdoteActions()

  const createNew = (event) => {
    event.preventDefault()
    const content = new FormData(event.currentTarget)
      .get("anecdote")
      .trim()

    if (content.length === 0) return

    createAnecdote(content)
    event.currentTarget.reset()
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createNew}>
        <div>
          <input name="anecdote" data-testid="new" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
