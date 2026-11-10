import { useAnecdoteActions } from "../store"
import { useNotificationActions } from "../notificationStore"

const AnecdoteForm = () => {
  const { createAnecdote } = useAnecdoteActions()
  const { setNotification } = useNotificationActions()

  const createNew = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const content = new FormData(form)
      .get("anecdote")
      .trim()

    if (content.length === 0) return

    await createAnecdote(content)
    setNotification("Anecdote created!")
    form.reset()
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
