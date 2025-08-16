"use client";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Botão do Dropdown */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center w-full rounded-sm border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 shadow-md focus:outline-none"
      >
        <TiThMenu className="text-white" />
      </button>

      {/* Lista de opções */}
      {open && (
        <div className="absolute right-0 mt-4 w-85 bg-(--color-background-darkblue) shadow-lg">
          <div className="py-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}