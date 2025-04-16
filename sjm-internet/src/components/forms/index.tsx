"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Card, CardContent } from "@/components/ui/card"


import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

const formSchema = z.object({
    seunome: z.string().min(2, {
      message: "Seu nome precisa ter no mínimo 2 caracteres.",
    }),
    seuemail: z.string().min(2, {
        message: "Seu email precisa ter no mínimo 2 caracteres.",
      }),
    seunumero: z.number().min(11, {
        message: "Seu número precisa ter no mínimo 11 números",
    }),
  })

  function OnSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

export default function FormSectionQuestion(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          seunome: "",
          seuemail: "",
          seunumero: 0,
        },
      })

    return (
        <Card>
            <CardContent>
                <Form {...form}>
                    <form className="space-y-8">
                        <FormField 
                            control={form.control} 
                            name="seunome"
                            render={(field) => (
                                <FormItem>
                                    <FormLabel>Seu Nome</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: Gustavo" {...field}/>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="seuemail"
                            render={(field) => (
                                <FormItem>
                                    <FormLabel>Seu Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: Gustavo@gmail.com" {...field}/>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="seunumero"
                            render={(field) => (
                                <FormItem>
                                    <FormLabel>Seu Número</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: (21) 123456789" {...field}/>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button onSubmit={form.handleSubmit(OnSubmit)} className="mt-2 w-64 max-sm:w-40 bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Enviar Mensagem</button>
                    </form>    
                </Form>
            </CardContent>
        </Card>    
    )
}