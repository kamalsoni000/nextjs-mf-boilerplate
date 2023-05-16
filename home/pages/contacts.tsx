import dynamic from 'next/dynamic'

const Contact = dynamic(
  () => import('contacts/pages/contacts'),
  { ssr: false }
)

const Contacts = () => (<> <Contact /></>)

export default Contacts