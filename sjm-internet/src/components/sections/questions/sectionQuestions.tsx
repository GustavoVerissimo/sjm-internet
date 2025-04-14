import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export default function Questions() {
    return(
        <section className="flex flex-col items-center justify-around my-[15px]">
            <h2 className="font-bold text-(--color-text-darkblue) text-center text-[40px] max-sm:text-[30px]">Tire suas Dúvidas</h2>
            <div className="flex flex-col">
                <p className="text-(--color-text-grey)">Veja aqui algumas das perguntas mais frequentes.</p>
                <div className="w-[500px] max-sm:w-[350px] items-center justify-center">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-(--color-text-darkblue)">O que é Fibra Óptica?</AccordionTrigger>
                            <AccordionContent className="w-[500px] max-sm:w-[350px] text-(--color-text-grey)">
                            A fibra Óptica é um cabo que possui um filamento de fibra de vidro muito fino, aproximadamente da espessura de um fio de cabelo.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-(--color-text-darkblue)">Como Funciona a Fibra Óptica?</AccordionTrigger>
                            <AccordionContent className="w-[500px] max-sm:w-[350px] text-(--color-text-grey)">
                                O sinal da Internet trafega através do filamento da fibra óptica, utilizando a luz e o que é melhor, não sofre interferências eletromagnéticas entregando altas velocidades e estabilidade.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-(--color-text-darkblue)">Qual O Prazo De Instalação?</AccordionTrigger>
                            <AccordionContent className="w-[500px] max-sm:w-[350px] text-(--color-text-grey)">
                                O prazo pode variar conforme a demanda de pedidos, mas nós trabalhamos com agendamento e respeitamos o seu tempo. Consulte-nos sobre as datas disponíveis. Normalmente é entre 2 e 5 dias após assinatura do contrato.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>    
                </div>
            </div>
        </section>
    )
}