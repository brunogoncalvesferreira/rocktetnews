import axios from 'axios'
import { useEffect, useState } from 'react'

export function Emails() {
  const [listEmails, setListEmails] = useState([])

  useEffect(() => {
    getEmailsUsers()
  }, [])

  async function getEmailsUsers() {
    const response = await axios.get(
      'https://api-rocketnews.onrender.com/email',
    )
    setListEmails(response.data)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <h2 className="text-2xl font-bold font-work text-title">E-mails</h2>
      <a className="text-text absolute top-5" href="/">
        Voltar para Home
      </a>
      <div>
        {listEmails.map((mail) => {
          return (
            <div key={mail.id}>
              <strong className="text-text">{mail.email}</strong>
            </div>
          )
        })}
      </div>
    </div>
  )
}
