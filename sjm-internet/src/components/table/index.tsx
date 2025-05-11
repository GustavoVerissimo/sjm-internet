import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LogoTelecine from "../../../public/image/telecine-logo.png"
import LogoMax from "../../../public/image/max-logo.png"
import LogoParamount from "../../../public/image/paramount-logo.png"
import Image from "next/image"

export default function TabsStreaming(){
    return(
        <div>
             <Tabs defaultValue="watchStreaming" className="w-[800px]">
                <TabsList className="grid w-full grid-cols-3 h-auto">
                    <TabsTrigger value="paramount" className="ml-1 mr-2"><Image src={LogoParamount} alt=" logo da paramount" className="w-[90px] h-[20px]"/></TabsTrigger>
                    <TabsTrigger value="max" className="mr-2" ><Image src={LogoMax} alt="logo da max" className="w-[50px] h-[50px]"/></TabsTrigger>
                    <TabsTrigger value="telecine" className="mr-1"><Image src={LogoTelecine} alt="logo da telecine" className="w-[40px] h-[30px]"/></TabsTrigger>
                </TabsList>
                 <TabsContent value="paramount">

                 </TabsContent>
                 <TabsContent value="max">
                    
                 </TabsContent>
                 <TabsContent value="telecine">
                    
                 </TabsContent>
             </Tabs>
        </div>
    )
}