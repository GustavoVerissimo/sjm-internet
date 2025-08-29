import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY2);

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Todos os campos são obrigatórios." }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "site sjminternet<onboarding@resend.dev>", // ou configure um domínio verificado no Resend
      to: "provedorsjminternet@gmail.com",
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Nova mensagem recebida!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erro no envio de e-mail:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro ao enviar o e-mail." }),
      { status: 500 }
    );
  }
}