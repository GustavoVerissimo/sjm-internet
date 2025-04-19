import Header from "@/components/header/header"
import Price from "@/components/sections/price/sectionPrice"
import Streaming from "@/components/sections/streaming/sectionStreaming"
import Questions from "@/components/sections/questions/sectionQuestions"
import Footer from "@/components/footer/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Price />
        <Streaming />
        <Questions />
      </main>
      <Footer />
    </>
  )
}
