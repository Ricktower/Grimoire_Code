import { PropsWithChildren } from "react"
import { Dropdown, Footer } from ".."

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto aspect-[375/667] h-screen w-full max-w-phone pb-[81px]">
      <Dropdown />
      {children}
      <Footer />
    </div>
  )
}
