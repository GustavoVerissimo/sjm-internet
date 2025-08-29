import Header from "@/components/header"
import Footer from "@/components/footer"
import RegisterForm from "@/components/forms/formCadastro"

export default function Cadastro(){
    return(
        <>
            <Header />
            <div className="h-full bg-(--color-background-grey) justify-items-center">
                <div className="py-[40px] w-[500px] max-sm:w-[400px]">
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </>
    )
}