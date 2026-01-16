import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  const userImage = '/abdullah.jpeg'

  return (
    <main className="w-full">
      <Hero image={userImage} />
      <About id="about"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
    </main>
  )
}
