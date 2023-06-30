import { Ticket } from "../.."
import images from "../../../../assets/images"
import { TTicket } from "../../../../utils/types"

export const ContentsShard = () => {
  const { blue } = images.tickets
  const links: TTicket[] = [
    { icon: <img src={blue.profile} alt="Profile" />, name: "Profile" },
    { icon: <img src={blue.events} alt="Events" />, path: "/events", name: "Events" },
    { icon: <img src={blue.friends} alt="Friends" />, path: "/friends", name: "Friends" },
    { icon: <img src={blue.play} alt="Play" />, path: "/play", name: "Play" },
    { icon: <img src={blue.cards} alt="Cards" />, path: "/cards", name: "Cards" },
    { icon: <img src={blue.collection} alt="Collection" />, path: "/collection", name: "Collection" }
  ]

  return (
    <div className="flex h-full w-full flex-col justify-center bg-paper pt-14">
      <div className="flex w-full flex-col items-end">
        {links.map(link => (
          <Ticket name={link.name} icon={link.icon} path={link.path} key={link.path} />
        ))}
      </div>
    </div>
  )
}
