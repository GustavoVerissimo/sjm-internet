"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Card, CardContent } from "@/components/ui/card"


import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

type TformSchema = {
    nome: string
    email: string
    numero: string
  }

export default function FormSectionQuestion(){
    const form = useForm<TformSchema>({
        defaultValues: {
          nome: "",
          email: "",
          numero: ""
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
                                        <Input placeholder="Ex: Gustavo" {...field} />
                                    </FormControl>
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
                                        <Input placeholder="Ex: Gustavo@gmail.com" {...field} type="email" />
                                    </FormControl>
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
                                        <Input placeholder="Ex: (21) 123456789" {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <button type="submit" className="mt-2 w-64 max-sm:w-40 bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Enviar Mensagem</button>
                    </form>    
                </Form>
            </CardContent>
        </Card>    
    )
}