import { Header } from './Header'
import { SearchPetForm } from './SearchPetForm'

export function Sidebar() {
  return (
    <aside className="flex flex-col h-screen fixed w-[392px] gap-8 bg-[#F15156]">
      <Header />
      <div className="flex flex-col gap-6 pr-10 pl-14">
        <strong className="font-extrabold text-xl">Filtros</strong>
        <SearchPetForm />
      </div>
    </aside>
  )
}
