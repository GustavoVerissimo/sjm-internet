"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  nome: string;
  email: string;
  cpf: string;
  nascimento: string;
  telefone: string;
  rua: string;
  numero: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function RegisterForm() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    cpf: "",
    nascimento: "",
    telefone: "",
    rua: "",
    numero: "",
    cep: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // 🔹 Máscaras
  const maskCPF = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);

  const maskPhone = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);

  const maskCEP = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 9);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === "cpf") value = maskCPF(value);
    if (name === "telefone") value = maskPhone(value);
    if (name === "cep") value = maskCEP(value);

    setForm({ ...form, [name]: value });

    if (name === "cep" && value.replace(/\D/g, "").length === 8) {
      fetchAddressByCEP(value);
    }
  };

  // 🔹 Validações
  const validateCPF = (cpf: string): boolean => {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
  };

  const validateCEP = (cep: string): boolean => /^\d{5}-?\d{3}$/.test(cep);

  const fetchAddressByCEP = async (cep: string) => {
    const cleanCEP = cep.replace(/\D/g, "");
    if (!validateCEP(cleanCEP)) return;

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`);
      const data = await res.json();

      if (!data.erro) {
        setForm((prev) => ({
          ...prev,
          rua: data.logradouro || prev.rua,
          bairro: data.bairro || prev.bairro,
          cidade: data.localidade || prev.cidade,
          estado: data.uf || prev.estado,
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!form.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!form.cpf.trim()) {
      newErrors.cpf = "CPF é obrigatório.";
    } else if (!validateCPF(form.cpf)) {
      newErrors.cpf = "CPF inválido.";
    }
    if (!form.nascimento.trim()) newErrors.nascimento = "Data de nascimento é obrigatória.";
    if (!form.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório.";
    } else if (form.telefone.replace(/\D/g, "").length < 10) {
      newErrors.telefone = "Informe um telefone válido.";
    }
    if (!form.rua.trim()) newErrors.rua = "Rua é obrigatória.";
    if (!form.numero.trim()) newErrors.numero = "Número é obrigatório.";
    if (!form.cep.trim()) {
      newErrors.cep = "CEP é obrigatório.";
    } else if (!validateCEP(form.cep)) {
      newErrors.cep = "CEP inválido.";
    }
    if (!form.bairro.trim()) newErrors.bairro = "Bairro é obrigatório.";
    if (!form.cidade.trim()) newErrors.cidade = "Cidade é obrigatória.";
    if (!form.estado.trim()) newErrors.estado = "Estado é obrigatório.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Formulário enviado com sucesso!");
        setForm({
          nome: "",
          email: "",
          cpf: "",
          nascimento: "",
          telefone: "",
          rua: "",
          numero: "",
          cep: "",
          bairro: "",
          cidade: "",
          estado: "",
        });
      } else {
        setStatus("❌ Erro ao enviar. Tente novamente.");
      }
    } catch (err) {
      setStatus("❌ Erro de conexão. Tente novamente.");
    }

    setLoading(false);
  };

  // 🔹 Labels em português
  const labels: Record<keyof FormData, string> = {
    nome: "Nome",
    email: "E-mail",
    cpf: "CPF",
    nascimento: "Data de Nascimento",
    telefone: "Telefone",
    rua: "Rua",
    numero: "Número",
    cep: "CEP",
    bairro: "Bairro",
    cidade: "Cidade",
    estado: "Estado",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Cadastro</h2>

        {(Object.keys(form) as (keyof FormData)[]).map((key) => (
          <div key={key}>
            <label className="block font-medium mb-1">{labels[key]}</label>
            <input
              type={
                key === "email"
                  ? "email"
                  : key === "nascimento"
                  ? "date"
                  : "text"
              }
              name={key}
              value={form[key]}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring ${
                errors[key] ? "border-red-500" : "focus:ring-blue-400"
              }`}
            />
            {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
          </div>
        ))}

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
  );
}