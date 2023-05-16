import dynamic from 'next/dynamic'

const Contact = dynamic(
  () => import('contacts/pages/contacts'),
  { ssr: false }
);
import Layout from '../components/layout/Layout'


const Contacts = () => (<Layout> <Contact /></Layout>)

export default Contacts