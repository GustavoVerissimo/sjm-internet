"use client"

import { useForm } from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card"
import { IoMdSend } from "react-icons/io";


import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Input } from "../../ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"




type TformSchema = {
    nome: string
    email: string
    numero: string
    cep: string
    endereco: string
    bairro:string
    cidade: string
    numeroEndereco: string
    pontoReferencia: string
  }

export default function FormMaps(){
    const form = useForm<TformSchema>({
        defaultValues: {
          nome: "",
          email: "",
          numero: "",
          cep: "",
          endereco: "",
          bairro: "",
          cidade:"",
          numeroEndereco: "",
          pontoReferencia: "",
        }
      })

      function handleMensageForm(data: TformSchema){
        console.log(data)
      }

    return (
        <Card>
            <CardContent>
                <Form {...form}>
                    <form className="space-y-8" onSubmit={form.handleSubmit(handleMensageForm)}>
                        <FormField 
                            control={form.control} 
                            name="nome"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Seu Nome</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Seu nome" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Seu Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Seu email" {...field} type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="numero"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Seu Número</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Seu número" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="cep"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cep</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Cep" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="endereco"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Endereço</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Endereço" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="numeroEndereco"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Número do endereço</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Número, Lote e/ou quadra" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="bairro"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bairro</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Bairro" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="cidade"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cidade</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Cidade" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="pontoReferencia"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ponto de referência</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Ponto de referência" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button  
                            className="mt-2 w-64 flex flex-row justify-center items-center max-sm:w-50 bg-(--color-button-darkblue) text-white px-3 py-2 rounded-3xl"
                            onClick={() =>
                                {const date = new Date()
                                
                                toast("Mensagem Enviada com Sucesso!", {
                                  description: `${date.toLocaleDateString()}`,
                                  action: {
                                    label: "X",
                                    onClick: () => console.log("enviado!"),
                                  }, 
                                })
                            }
                              }
                            > <IoMdSend className="mr-2" />Enviar
                        </button>
                    </form>    
                </Form>
            </CardContent>
        </Card>    
    )
}