import { ReactNode } from "react"

interface props {
  children: ReactNode
}

function BodyContent({ children }: props) {
  return <div>
    { children }
  </div>
}

export default BodyContent