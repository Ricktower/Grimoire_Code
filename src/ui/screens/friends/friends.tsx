import images from "../../../assets/images"
import { TTicket } from "../../../utils/types"
import { Ticket } from "../../components"

export const Friends = () => {
  const { red, blue, green } = images.tickets
  const tickets: TTicket[] = [
    { icon: <img src={red.favourites} alt="Favourites" />, name: "Favourites" },
    { icon: <img src={blue.friendGroup} alt="Friend Group" />, name: "Friend Group" },
    { icon: <img src={blue.allFriends} alt="All Friends" />, name: "All Friends" },
    { icon: <img src={green.addGroup} alt="Add group" />, name: "Add group" }
  ]

  return (
    <div className="h-full bg-paper bg-cover bg-center bg-no-repeat">
      <Ticket
        name="Friends"
        path="/friends"
        className="mt-[30px]"
        icon={<img src={images.tickets.red.friends} alt="Friends" />}
      />

      <div className="mt-20 flex w-fit flex-col gap-9">
        {tickets.map(ticket => (
          <Ticket name={ticket.name} key={ticket.name} icon={ticket.icon} />
        ))}
      </div>
    </div>
  )
}
