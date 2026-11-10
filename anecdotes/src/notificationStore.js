import { create } from 'zustand'

let notificationTimeout

const useNotificationStore = create((set) => ({
  notification: '',
  actions: {
    setNotification: (message) => {
      clearTimeout(notificationTimeout)
      set({ notification: message })

      notificationTimeout = setTimeout(() => {
        set({ notification: '' })
      }, 5000)
    },
  },
}))

export const useNotification = () =>
  useNotificationStore((state) => state.notification)

export const useNotificationActions = () =>
  useNotificationStore((state) => state.actions)
