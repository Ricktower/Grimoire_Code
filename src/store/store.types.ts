export interface CoreStoreState {
  events: {
    id: string
    name: string
    description: string
    date: {
      day: Date
      time: string
      location: string
      parish: string
    }
    players: {
      name: string
      avatar: React.ReactNode
    }[]
    isVisible: boolean
  }[]
}

export interface CoreStoreActions {
  handleCreateNewEvent(): void
  handleDeleteEvent(id: string): void
  handleRescheduleEvent(id: string): void
  handleEventVisibility(id: string): void
}

export interface CoreStore extends CoreStoreState, CoreStoreActions {}
