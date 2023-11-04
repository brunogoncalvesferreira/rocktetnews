import logo from '../assets/logo.svg'
import send from '../assets/send.svg'
import arrow from '../assets/arrow-right.svg'

import axios from 'axios'
import { useState } from 'react'

import { toast } from 'react-toastify'

export function Home() {
  const [email, setEmail] = useState('')
  const notify = () =>
    toast('E-mail enviado com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  function handleOnChangeEmail(event) {
    setEmail(event.target.value)
  }

  async function sendEmailDatabase(event) {
    event.preventDefault()
    await axios.post('https://api-rocketnews.onrender.com/email', { email })
  }

  function handleNotificationSuccess() {
    notify()
    setEmail('')
  }

  return (
    <main className="md:flex">
      <section className="md:flex-1 pt-12 pl-8">
        <img className="w-60" src={logo} alt="Imagem de logo da página" />

        <div className=" md:mt-24 pr-12">
          <h1 className="text-2xl font-bold font-work text-title">
            atualize ideias e informações em 5 minutos.
          </h1>
          <strong className="text-text font-spartan text-sm font-bold my-2">
            tudo que você precisa saber para começar seu dia bem e informado
          </strong>
          <p className="text-text font-spartan text-sm mt-2">
            noticias sobre o universo Rocketseat, e tudo o que precisa para
            começar o dia melhor. perfeito para se preparar para codar ☕
          </p>
        </div>

        <form action="" onSubmit={sendEmailDatabase} className="mt-12">
          <label className="text-text font-spartan text-sm font-bold leading-6 mb-4">
            Insira seu e-mail:
          </label>

          <div className="md:absolute md:w-[45rem] pr-10 flex items-center mt-4">
            <div className="w-full relative after:absolute after:bg-title after:w-1 after:h-full after:top-0 after:left-0">
              <input
                onChange={handleOnChangeEmail}
                value={email}
                className="bg-input w-full p-4 border-none outline-none text-xs text-background font-work"
                type="text"
                placeholder="Seu e-mail"
                name="email"
              />
            </div>
            <button
              type="submit"
              onClick={handleNotificationSuccess}
              className="bg-button w-12 h-12 flex items-center justify-center"
            >
              <img
                className="w-6 h-6"
                src={send}
                alt="Ícone de envio de email"
              />
            </button>
          </div>
        </form>

        <a
          href="/emails"
          className="text-button flex items-center gap-2 font-spartan text-sm font-bold mt-10 md:mt-28"
        >
          deixe-me ler primeiro
          <img src={arrow} alt="Ícone de seta para direita" />
        </a>
      </section>

      <section className="md:bg-read-news md:w-[45rem] md:h-screen bg-right -bg-top bg-cover bg-no-repeat"></section>
    </main>
  )
}
