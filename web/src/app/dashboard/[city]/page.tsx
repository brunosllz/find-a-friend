import { parseRouteParams } from '@/utils/parse-route-params'

import { Sidebar } from '../(components)/Sidebar'

interface DashboardProps {
  params: {
    city: string
  }
}

export default async function Dashboard({ params }: DashboardProps) {
  const { city } = parseRouteParams(params)

  const response = await fetch(`http://localhost:3333/pets/${city}`)
  await response.json().then((data) => console.log(data))

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white flex flex-[1_1_auto] overflow-hidden pl-[392px]">
        <div className="flex flex-[1_1_auto] overflow-hidden">
          <div className="flex flex-[1_1_auto] h-full overflow-auto">
            <p>PETS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
