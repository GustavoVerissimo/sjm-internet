import Header from "@/components/header"
import SectionPrice from "@/components/sections/sectionPrice"
import SectionStreaming from "@/components/sections/sectionStreaming"
import SectionQuestions from "@/components/sections/sectionQuestions"
import Footer from "@/components/footer"
import SectionMaps from "@/components/sections/sectionMaps"
import HeaderBanner from "@/components/header/headerBanner"

export default function Home() {
  return (
    <>
      <Header />
      <HeaderBanner />
      <main>
        <SectionPrice />
        <SectionStreaming />
        <SectionMaps />
        <SectionQuestions />
      </main>
      <Footer />
    </>
  )
}
