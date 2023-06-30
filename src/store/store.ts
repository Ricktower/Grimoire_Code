import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { useMockEvent } from "../utils/hooks"
import { CoreStore, CoreStoreActions, CoreStoreState } from "./store.types"

const initialState: CoreStoreState = {
  events: []
}

const actions = (set: any): CoreStoreActions => {
  const handleCreateNewEvent = () => {
    set(
      (state: CoreStoreState) => {
        state.events = [...state.events, useMockEvent()]
      },
      false,
      "create_new_event"
    )
  }

  const handleDeleteEvent = (id: string) => {
    set(
      (state: CoreStoreState) => ({
        event: state.events.filter(event => id !== event.id)
      }),
      false,
      "delete_event"
    )
  }

  const handleRescheduleEvent = (id: string) => {
    set(
      (state: CoreStoreState) => ({
        events: state.events.map(event =>
          event.id === id ? { ...event, date: { day: event.date.day.setDate(event.date.day.getDate() + 1) } } : event
        )
      }),
      false,
      "reschedule_event"
    )
  }

  const handleEventVisibility = (id: string) => {
    set(
      (state: CoreStoreState) => ({
        events: state.events.map(event => (event.id === id ? { ...event, isVisible: !event.isVisible } : event))
      }),
      false,
      "handle_event_visiblity"
    )
  }

  return {
    handleCreateNewEvent,
    handleDeleteEvent,
    handleRescheduleEvent,
    handleEventVisibility
  }
}

export const useCoreStore = create<CoreStore>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        ...actions(set)
      }),
      {
        name: "EVENT.STORE",
        storage: createJSONStorage(() => sessionStorage)
      }
    ),
    {
      name: "EVENT.STORE"
    }
  )
)
