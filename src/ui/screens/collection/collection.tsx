import images from "../../../assets/images"
import { Ticket } from "../../components"

export const Collection = () => {
  return (
    <div className="h-full bg-paper bg-cover bg-center bg-no-repeat">
      <Ticket
        path="/collection"
        name="Collection"
        className="mt-[30px]"
        icon={<img src={images.tickets.red.collection} alt="Collection" />}
      />
      <div className="mt-[100px] flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <img className="cursor-pointer" src={images.collection.origins} alt="Origins Collection" />
          <span className="inline-flex w-full max-w-[234px] cursor-pointer items-center justify-center rounded-full bg-[#6bbe95] py-2 text-2xl text-white">
            100% Completion
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <img className="cursor-pointer" src={images.collection.firstBorn} alt="First born Collection" />
          <span className="inline-flex w-full max-w-[234px] cursor-pointer items-center justify-center rounded-full bg-[#27221f] py-2 text-2xl text-white">
            0% Completion
          </span>
        </div>
      </div>
    </div>
  )
}
