import Header from "@/components/header"
import SectionPrice from "@/components/sections/sectionPrice"
import SectionStreaming from "@/components/sections/sectionStreaming"
import SectionQuestions from "@/components/sections/sectionQuestions"
import Footer from "@/components/footer"
import SectionMaps from "@/components/sections/sectionMaps"
import HeaderBanner from "@/components/header/headerBanner"
import SectionEnterprise from "@/components/sections/sectionEnterprise"

export default function Home() {
  return (
    <>
      <Header />
      <HeaderBanner />
      <main>
        <SectionPrice />
        <SectionEnterprise />
        <SectionStreaming />
        <SectionMaps />
        <SectionQuestions />
      </main>
      <Footer />
    </>
  )
}
