import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Team from './sections/Team'
import WorkAreas from './sections/WorkAreas'
import Workshops from './sections/Workshops'
import Engagement from './sections/Engagement'
import URRR from './sections/URRR'
import Introduction from './sections/Introduction'
import Future from './sections/Future'
import TeamActivity from './sections/TeamActivity'

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      <Hero />
      <Introduction />
      <Stats />
      <WorkAreas />
      <Team />
      <Workshops />
      <Engagement />
      <URRR />
      <TeamActivity />
      <Future />
      
      <footer className="py-12 px-6 text-white text-center" style={{ backgroundColor: '#001E5F' }}>
        <p className="text-lg font-semibold mb-2">University of Rochester Libraries</p>
        <p className="text-base">Data Services | FY 2025-2026</p>
      </footer>
    </main>
  )
}