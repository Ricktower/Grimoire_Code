import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Ticket } from ".."
import images from "../../../assets/images"
import { TTicket } from "../../../utils/types"

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { blue } = images.tickets

  const tickets: TTicket[] = [
    { icon: <img src={blue.profile} alt="Profile" />, name: "Profile" },
    { icon: <img src={blue.events} alt="Events" />, name: "Events", path: "/events" },
    { icon: <img src={blue.friends} alt="Friends" />, name: "Friends", path: "/friends" },
    { icon: <img src={blue.play} alt="Play" />, name: "Play", path: "/play" },
    { icon: <img src={blue.cards} alt="Cards" />, name: "Cards", path: "/cards" },
    { icon: <img src={blue.collection} alt="Collection" />, name: "Collection", path: "/collection" }
  ]

  return (
    <AnimatePresence initial={false}>
      <motion.section
        variants={{
          open: { top: 0 },
          closed: { top: "-100%" }
        }}
        transition={{
          duration: 0.15,
          type: "tween"
        }}
        animate={isOpen ? "open" : "closed"}
        className={clsx(
          "fixed z-20 mx-auto flex h-screen w-full max-w-phone flex-col bg-paper bg-cover bg-center bg-no-repeat"
        )}>
        {isOpen ? (
          <motion.div
            variants={{
              open: { y: -90, opacity: 1 },
              closed: { y: 0, opacity: 0 }
            }}
            transition={{
              duration: 0.05,
              type: "tween",
              delay: 0.2
            }}
            animate={isOpen ? "open" : "closed"}
            className="relative inset-x-0 top-full mx-auto flex w-full max-w-phone justify-end bg-[url(/footer.png)] pr-6">
            <img
              draggable={false}
              onClick={() => setIsOpen(val => !val)}
              className="w-min cursor-pointer"
              src={images.nav.dropdown.close}
              alt="dropdown"
            />
          </motion.div>
        ) : (
          <img
            draggable={false}
            onClick={() => setIsOpen(val => !val)}
            className="relative left-[calc(100%-86px)] top-full w-min cursor-pointer"
            src={images.nav.dropdown.open}
            alt="dropdown"
          />
        )}
        <div className="flex w-full flex-col items-end gap-9">
          {tickets.map(ticket => (
            <Ticket name={ticket.name} path={ticket.path} key={ticket.name} icon={ticket.icon} />
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  )
}
