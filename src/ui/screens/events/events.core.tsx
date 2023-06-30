import { useState } from "react"
import images from "../../../assets/images"
import { useCoreStore } from "../../../store"
import { TTicket } from "../../../utils/types"
import { Ticket } from "../../components"
import { EventsShard } from "./shards"

export const Events = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
  const { handleCreateNewEvent } = useCoreStore()

  const { red, green } = images.tickets
  const tickets: TTicket[] = [
    { icon: <img src={red.joinEvent} alt="Join Event" />, name: "Join Event" },
    { icon: <img onClick={handleCreateNewEvent} src={red.hostEvent} alt="Host Event" />, name: "Host Event" },
    {
      icon: (
        <div>
          <EventsShard isScheduleOpen={isScheduleOpen} setIsScheduleOpen={setIsScheduleOpen} />
        </div>
      ),
      name: "Schedule"
    },
    { icon: <img src={green.matchHistory} alt="Match History" />, name: "Match History" }
  ]

  return (
    <div className="h-full overflow-y-auto bg-paper bg-cover bg-center bg-no-repeat">
      <Ticket
        name="Events"
        path="/events"
        className="mt-[30px]"
        icon={<img src={images.tickets.red.events} alt="Events" />}
      />

      <div className="mt-20 flex w-fit flex-col gap-9">
        {tickets.map(ticket => (
          <Ticket name={ticket.name} key={ticket.name} icon={ticket.icon} />
        ))}
      </div>
    </div>
  )
}
