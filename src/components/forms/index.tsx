"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Validação dos campos
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "O nome é obrigatório.";
    if (!form.email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "O celular é obrigatório.";
    } else if (!/^\d{8,15}$/.test(form.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Informe apenas números válidos (8 a 15 dígitos).";
    }
    if (!form.message.trim()) {
      newErrors.message = "A mensagem é obrigatória.";
    } else if (form.message.length > 500) {
      newErrors.message = "A mensagem não pode ultrapassar 500 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Mensagem enviada com sucesso!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Erro ao enviar. Tente novamente.");
      }
    } catch (err) {
      setStatus("❌ Erro de conexão. Tente novamente.");
    }

    setLoading(false);
  };


    return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-4"
                    >
                        {/* Nome */}
                        <div>
                            <label className="block font-medium mb-1">Nome</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:ring ${
                                errors.name ? "border-red-500" : "focus:ring-blue-400"
                                }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        {/* E-mail */}
                        <div>
                            <label className="block font-medium mb-1">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:ring ${
                                errors.email ? "border-red-500" : "focus:ring-blue-400"
                                }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        {/* Celular */}
                        <div>
                            <label className="block font-medium mb-1">Número de Celular</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:ring ${
                                errors.phone ? "border-red-500" : "focus:ring-blue-400"
                                }`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        {/* Mensagem */}
                        <div>
                            <label className="block font-medium mb-1">Mensagem</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                maxLength={500}
                                rows={5}
                                className={`w-full p-3 border rounded-lg focus:ring ${
                                errors.message ? "border-red-500" : "focus:ring-blue-400"
                                }`}
                            />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>{form.message.length}/500</span>
                                {errors.message && <p className="text-red-500">{errors.message}</p>}
                            </div>
                        </div>
                        {/* Botão */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
                        >
                            
                           {loading ? "Enviando..." : "Enviar"}
                        </button>
                            {status && <p className="text-center mt-2">{status}</p>}
                    </form>
                </div>    
    )
}