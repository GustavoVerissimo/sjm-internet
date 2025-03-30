import Header from "@/components/header/header"
import Price from "@/components/sections/price/sectionPrice"
import Streaming from "@/components/sections/streaming/sectionStreaming"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Price />
        <Streaming />
      </main>
    </>
  )
}
