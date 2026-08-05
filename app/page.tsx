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
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />

      <main style={{ position: 'relative', zIndex: 10 }}>
        <section id="hero">
          <Hero />
        </section>

        <section id="introduction">
          <Introduction />
        </section>

        <section id="stats">
          <Stats />
        </section>

        <section id="workareas">
          <WorkAreas />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="workshops">
          <Workshops />
        </section>

        <section id="engagement">
          <Engagement />
        </section>

        <section id="urrr">
          <URRR />
        </section>

        <section id="teamactivity">
          <TeamActivity />
        </section>

        <section id="future">
          <Future />
        </section>

        <footer
          className="py-12 px-6 text-white text-center"
          style={{ backgroundColor: '#001E5F' }}
        >
          <div className="flex items-center justify-center gap-4">
            <img
              src="images/URlogo.png"
              alt="University of Rochester logo"
              width={95}
              height={95}
            />

            <div>
              <p className="text-lg font-semibold">
                University of Rochester Libraries
              </p>

              <p className="text-base">
                Data Services | FY 2025–2026
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}