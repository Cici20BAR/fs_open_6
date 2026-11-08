import { useFeedbackStore } from '../store'

const Buttons = () => {
  const addFeedback = useFeedbackStore((state) => state.addFeedback)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => addFeedback('good')}>good</button>
      <button onClick={() => addFeedback('neutral')}>neutral</button>
      <button onClick={() => addFeedback('bad')}>bad</button>
    </div>
  )
}

export default Buttons
