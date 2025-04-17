import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Card, CardContent } from "@/components/ui/card"
  import FormSectionQuestion from "@/components/forms"


export default function Questions() {
    return(
        <section className="flex flex-col my-[15px]">
            <div className="flex flex-row max-sm:flex-col items-center justify-around my-[40px]">
                <div className="max-sm:mb-[25px] flex flex-col w-[500px] max-sm:w-[320px]">
                    <h2 className="text-(--color-text-darkblue) max-sm:text-center text-left text-[40px] max-sm:text-[30px] font-black">Tire suas duvidas</h2>
                    <p className=" text-(--color-text-grey) max-sm:text-left text-[23px] max-sm:text-[18px]">Confira nossas perguntas mais frequentes e tire suas dúvidas.</p>
                    <button className=" max-sm:hidden mt-2 w-64 max-sm:w-40 bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Assine Já</button>
                </div>
                <div className=" w-[650px] max-sm:w-[320px] items-center justify-center">
                    <Card>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-(--color-text-darkblue) text-[20px] max-sm:text-[18px] font-black">O que é fibra ótica?</AccordionTrigger>
                                    <AccordionContent className="w-[650px] max-sm:w-[320px] text-(--color-text-grey) text-[18px] max-sm:text-[16px]">
                                    A fibra Óptica é um cabo que possui um filamento de fibra de vidro muito fino, aproximadamente da espessura de um fio de cabelo.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="font-black text-(--color-text-darkblue) text-[20px] max-sm:text-[18px]">Como funciona a fibra ótica?</AccordionTrigger>
                                    <AccordionContent className="w-[650px] max-sm:w-[320px] text-(--color-text-grey) text-[18px] max-sm:text-[16px]">
                                        O sinal da Internet trafega através do filamento da fibra óptica, utilizando a luz e o que é melhor, não sofre interferências eletromagnéticas entregando altas velocidades e estabilidade.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="font-black text-(--color-text-darkblue) text-[20px] max-sm:text-[18px]">Qual o prazo de instalação?</AccordionTrigger>
                                    <AccordionContent className="w-[650px] max-sm:w-[320px] text-(--color-text-grey) text-[18px] max-sm:text-[16px]">
                                        O prazo pode variar conforme a demanda de pedidos, mas nós trabalhamos com agendamento e respeitamos o seu tempo. Consulte-nos sobre as datas disponíveis. Normalmente é entre 2 e 5 dias após assinatura do contrato.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>    
                </div>
            </div>
            <div className="flex flex-row max-sm:flex-col-reverse items-center justify-around my-[40px]">
                <div className="w-[650px] max-sm:w-[320px] items-center justify-center">
                    <FormSectionQuestion />
                </div>
                <div className="flex flex-col max-sm:mb-[25px] w-[500px] max-sm:w-[320px]">
                    <h2 className="font-black text-(--color-text-darkblue) max-sm:text-center text-right text-[40px] max-sm:text-[30px]">Fale com a gente</h2>
                    <p className="text-(--color-text-grey) max-sm:text-left text-right text-[23px] max-sm:text-[18px]">Dúvidas, elogios, sugestões ou críticas? Preencha o formulário e a gente responde.</p>
                </div>
            </div>
        </section>
    )
}