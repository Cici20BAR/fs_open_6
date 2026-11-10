import { useAnecdoteActions, useAnecdotes, useFilter } from "../store"
import { useNotificationActions } from "../notificationStore"

const AnecdoteList = () => {
  const anecdotes = useAnecdotes()
  const filter = useFilter().toLowerCase()
  const { vote, removeAnecdote} = useAnecdoteActions()
  const { setNotification } = useNotificationActions()

  const handleVote = async (anecdote) => {
    await vote(anecdote.id)
  //  setNotification(`You voted for: ${anecdote.content}`)
  }

  const sortedAnecdotes = anecdotes
    .filter((anecdote) => anecdote.content.toLowerCase().includes(filter))
    .toSorted((a, b) => b.votes - a.votes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
            {anecdote.votes === 0 && (
              <button onClick={() => removeAnecdote(anecdote.id)}>delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
