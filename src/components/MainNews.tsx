import React, { Suspense } from 'react'
const Sponsors = React.lazy(() => import('sponsors/Sponsors'))

export function MainNews() {
  return (
    <div className="flex items-end">
      <div className="max-w-7xl">
        <h1 className="font-bold text-primary-color text-3xl pb-8">
          Chamados a contribuir com o pacote fiscal, militares aceitam mudanças
          pontuais no sistema de previdência da corporação
        </h1>
        <div className="gap-10 flex items-center">
          <div className="rounded-3xl bg-slate-600 w-2/3 h-96 flex">
            <img src="" alt="" />
          </div>
          <span className="flex w-1/3 h-64 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            scelerisque varius libero, vitae venenatis nunc mollis ut.
            Suspendisse vulputate sem facilisis pharetra tempus. In egestas
            sapien at odio varius lacinia. Maecenas in vulputate tellus, eu
            venenatis augue.
          </span>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Sponsors />
      </Suspense>
    </div>
  )
}
