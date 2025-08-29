import './globals.css'


export const metadata = {
  title: 'SJM Internet - Site Oficial',
  description: 'Sjm Internet a melhor fibra ótica da região',
}

export default function CadastroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>  
        <div>{children}</div>
    </>
  )
}