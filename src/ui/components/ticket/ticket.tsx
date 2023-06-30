import clsx from "clsx"
import { Link } from "react-router-dom"
import { TTicket } from "../../../utils/types"

type TicketProps = TTicket & {
  className?: string
}

export const Ticket = ({ path, icon, className }: TicketProps) => {
  return path ? (
    <Link className={clsx("inline-block", className)} to={path}>
      {icon}
    </Link>
  ) : (
    <button className={clsx("inline-block", className)}>{icon}</button>
  )
}
