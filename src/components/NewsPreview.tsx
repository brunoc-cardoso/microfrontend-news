import React from 'react'

export function NewsPreview() {
  return (
    <div className="flex items-center gap-6 max-w-7xl">
      <div className="rounded-3xl bg-slate-600 min-w-96 w-1/2 h-64">
        <img src="" alt="" />
      </div>
      <div className="gap-6 items-center">
        <h1 className="font-bold text-primary-color text-2xl py-4">
          Chamados a contribuir com o pacote fiscal, militares aceitam mudanças
          pontuais no sistema de previdência da corporação
        </h1>

        <span className="w-1/2 h-64 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          scelerisque varius libero, vitae venenatis nunc mollis ut. Suspendisse
          vulputate sem facilisis pharetra tempus. In egestas sapien at odio
          varius lacinia. Maecenas in vulputate tellus, eu venenatis augue.
        </span>
      </div>
    </div>
  )
}
