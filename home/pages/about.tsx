import dynamic from 'next/dynamic'
import Layout from '../components/layout/Layout'

const About = dynamic(
  () => import('about/pages/about'),
  { ssr: false }
)

const Contacts = () => (<Layout> <About /></Layout>)

export default Contacts