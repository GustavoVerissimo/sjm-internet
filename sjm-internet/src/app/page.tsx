import Header from "@/components/header"
import SectionPrice from "@/components/sections/sectionPrice"
import SectionStreaming from "@/components/sections/sectionStreaming"
import SectionQuestions from "@/components/sections/sectionQuestions"
import Footer from "@/components/footer"
import SectionApp from "@/components/sections/sectionApp"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionPrice />
        <SectionStreaming />
        <SectionApp />
        <SectionQuestions />
      </main>
      <Footer />
    </>
  )
}
