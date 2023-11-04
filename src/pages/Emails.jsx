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
    <div className="max-w-2xl mx-auto w-[90%]">
      <div className="flex items-center justify-between mt-10">
        <h2 className="text-xl text-title font-bold">E-mails</h2>
        <a className="text-text font-bold" href="/">
          {'<--'} Voltar para Home
        </a>
      </div>
      <div className="mt-10">
        {listEmails.map((mail) => {
          return (
            <div key={mail.id} className="mb-2 pb-2 border-b border-form">
              <strong className="text-text">{mail.email}</strong>
            </div>
          )
        })}
      </div>
    </div>
  )
}
