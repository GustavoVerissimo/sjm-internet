import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY_CADASTRO);

export async function POST(req: Request): Promise<Response> {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "CADASTRO<onboarding@resend.dev>",
      to: "provedorsjminternet@gmail.com",
      subject: "Novo Cadastro Recebido!",
      html: `
        <h2>Novo Cadastro</h2>
        <ul>
          ${Object.entries(data)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join("")}
        </ul>
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