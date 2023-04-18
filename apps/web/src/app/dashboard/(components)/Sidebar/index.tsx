import { Header } from './Header'
import { SearchPetForm } from './SearchPetForm'

interface SidebarProps {
  citySelected: string
}

export async function Sidebar({ citySelected }: SidebarProps) {
  const statesResponse = await fetch('http://localhost:3333/location/states', {
    method: 'GET',
    next: { revalidate: 60 * 60 * 24 },
  })

  const statesData = await statesResponse
    .json()
    .then((data: Array<{ id: string; name: string; acronym: string }>) =>
      data.map((item) => {
        return {
          id: item.id,
          value: item.acronym,
          placeholder: item.acronym,
        }
      }),
    )

  return (
    <aside className="flex flex-col h-screen fixed w-[392px] gap-8 bg-[#F15156]">
      <Header states={statesData} citySelected={citySelected} />
      <div className="flex flex-col gap-6 pr-10 pl-14">
        <strong className="font-extrabold text-xl">Filtros</strong>
        <SearchPetForm />
      </div>
    </aside>
  )
}
