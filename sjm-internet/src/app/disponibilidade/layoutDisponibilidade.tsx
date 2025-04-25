import './globals.css'
import { Toaster } from "@/components/ui/sonner"


export const metadata = {
  title: 'SJM Internet - Site Oficial',
  description: 'Sjm Internet a melhor fibra ótica da região',
}

export default function DisponibilidadeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>  
        <div>{children}</div>
        <Toaster />
    </>
  )
}