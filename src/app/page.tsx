import { Suspense } from "react";
import { SquadCardList } from "@/components/SquadCardList";

export default function Home() {
  return (
    <div className={'max-w-5xl mx-auto'}>
      <div className={'text-center pb-20'}>
        <h1 className={'text-4xl'}>Squads da comunidade Bichinhos da TI</h1>
        <p className={'text-sm text-white/50'}>Este é um projeto não oficial feito apenas para colaborar e ajudar as pessoas que não sabem em qual squad se
          encontram</p>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <SquadCardList/>
      </Suspense>
    </div>
  )
}
