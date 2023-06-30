import { nanoid } from "nanoid"
import { CoreStoreState } from "../../store"

export const useMockEvent = () => {
  const mockEvent: CoreStoreState["events"][number] = {
    id: nanoid(),
    name: "Aram 1x1",
    description: "Yasuo M7 Arkadata Deathmatch",
    date: {
      day: new Date(),
      time: "18:32h",
      location: "Howling Abyss Bar",
      parish: "Porto"
    },
    players: [
      { name: "Violet", avatar: <img src="" alt="" /> },
      { name: "Avó do João", avatar: <img src="" alt="" /> }
    ],
    isVisible: false
  }

  return mockEvent
}
