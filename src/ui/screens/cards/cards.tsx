import images from "../../../assets/images"
import { TTicket } from "../../../utils/types"
import { Ticket } from "../../components"

export const Cards = () => {
  const { red, blue } = images.tickets
  const tickets: TTicket[] = [
    { icon: <img src={red.cards} alt="Cards" />, name: "Cards" },
    { icon: <img src={red.decks} alt="Decks" />, name: "Decks" },
    { icon: <img src={blue.powers} alt="Powers" />, name: "Powers" },
    { icon: <img src={blue.formats} alt="Formats" />, name: "Formats" }
  ]

  return (
    <div className="h-full bg-paper bg-cover bg-center bg-no-repeat">
      <Ticket
        name="Cards and Rules"
        path="/cards"
        className="mt-[30px]"
        icon={<img src={images.tickets.red.cardsRules} alt="Cards and Rules" />}
      />

      <div className="mt-20 flex w-fit flex-col gap-9">
        {tickets.map(ticket => (
          <Ticket name={ticket.name} key={ticket.name} icon={ticket.icon} />
        ))}
      </div>
    </div>
  )
}
