import images from "../../../assets/images"
import { Ticket } from "../../components"

export const Home = () => {
  return (
    <div className="h-full bg-home bg-cover bg-center bg-no-repeat">
      <Ticket name="Home" className="mt-[30px]" icon={<img src={images.tickets.red.home} alt="Home" />} />
    </div>
  )
}
