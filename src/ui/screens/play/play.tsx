import images from "../../../assets/images"
import { TTicket } from "../../../utils/types"
import { Ticket } from "../../components"

export const Play = () => {
  const { red, blue, green } = images.tickets
  const tickets: TTicket[] = [
    { icon: <img src={red.playMatch} alt="Play match" />, name: "Play match" },
    { icon: <img src={blue.joinEvent} alt="Join event" />, name: "Join event" },
    { icon: <img src={blue.diceRoll} alt="Dice roll" />, name: "Dice roll" },
    { icon: <img src={green.continue} alt="Continue" />, name: "Continue" }
  ]

  return (
    <div className="h-full bg-paper bg-cover bg-center bg-no-repeat">
      <Ticket
        name="Playground"
        path="/play"
        className="mt-[30px]"
        icon={<img src={images.tickets.red.playground} alt="Playground" />}
      />

      <div className="mt-20 flex w-fit flex-col gap-9">
        {tickets.map(ticket => (
          <Ticket name={ticket.name} key={ticket.name} icon={ticket.icon} />
        ))}
      </div>
    </div>
  )
}
