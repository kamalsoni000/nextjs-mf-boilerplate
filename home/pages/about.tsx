import dynamic from 'next/dynamic'

const About = dynamic(
  () => import('about/pages/about'),
  { ssr: false }
)

const Contacts = () => (<> <About /></>)

export default Contacts