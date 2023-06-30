import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import images from "../../../assets/images"

export const Footer = () => {
  const location = useLocation()

  const { home, events, friends, play, cards, collection } = images.nav
  const links: { icon: string; href: string }[] = [
    { icon: home, href: "/" },
    { icon: events, href: "/events" },
    { icon: friends, href: "/friends" },
    { icon: play, href: "/play" },
    { icon: cards, href: "/cards" },
    { icon: collection, href: "/collection" }
  ]

  return (
    <footer className="absolute inset-x-0 bottom-0 z-10 mx-auto grid max-w-phone grid-cols-6 items-center justify-center bg-[url(/footer.png)]">
      {links.map(link => (
        <Link className="grid place-items-center" key={link.href} to={link.href}>
          <motion.img
            initial={false}
            variants={{
              active: { y: -8 },
              inactive: { y: 0 }
            }}
            transition={{
              duration: 0.1,
              type: "tween"
            }}
            animate={location.pathname === link.href ? "active" : "inactive"}
            src={link.icon}
            alt=""
          />
        </Link>
      ))}
    </footer>
  )
}
