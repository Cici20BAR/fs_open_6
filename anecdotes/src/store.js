import { create } from 'zustand'
import anecdoteService from './services/anecdotes'
import anecdotes from './services/anecdotes'

const useAnecdoteStore = create((set, get) => ({
  anecdotes: [],
  filter: '',
  actions: {
    initialize: async () => {
      const anecdotes = await anecdoteService.getAll()
      set({ anecdotes })
    },
    vote: async (id) => {
      const anecdote = get().anecdotes.find((item) => item.id === id)
      if (!anecdote) return

      const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1,
      }

      const returnedAnecdote = await anecdoteService.update(updatedAnecdote, id)

      set((state) => ({
        anecdotes: state.anecdotes.map((item) =>
          item.id === id ? returnedAnecdote : item,
        ),
          
      }))
    },
    createAnecdote: async (content) => {
      const savedAnecdote = await anecdoteService.save(content)
      set((state) => ({
        anecdotes: state.anecdotes.concat(savedAnecdote),
      }))
    },
    setFilter: (content) => set({ filter: content }),
    removeAnecdote:async(id)=>{
      const  anecdtode_to_br_del=get().anecdotes.find((item) => item.id === id)
      await anecdoteService.remove(id)
      set((state)=>({
        anecdotes:state.anecdotes.filter((lst)=>lst.id!==id)
      
      }))
    }
  },
}))

export const useAnecdotes = () => useAnecdoteStore((state) => state.anecdotes)
export const useFilter = () => useAnecdoteStore((state) => state.filter)
export const useAnecdoteActions = () =>
  useAnecdoteStore((state) => state.actions)
