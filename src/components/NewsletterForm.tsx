import { useState } from "react"
// import { actions } from '@astrojs/actions/client'

export function NewsletterForm ({ subcribeActionUrl } : { subcribeActionUrl: string }) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubscribe (event: React.FormEvent) {
    event.preventDefault()
    const email = (event.target as any).email.value

    setIsLoading(true)

    try {
      const response = await fetch(subcribeActionUrl, {
        method: 'POST',
        body: JSON.stringify({ email })
      })

      if (!response.ok) alert('Failed to subscribe, please try again later.')

      const data = await response.json()
      console.log(data)

      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      return console.log('Error: ' + e)
    }
  }

  return (
    <form className="mt-4" onSubmit={handleSubscribe} method="POST">
      <input className="px-4 py-3 text-zinc-300 w-full rounded-lg bg-zinc-800" placeholder="johndoe@gmail.com" name="email" type="email" />

      <div className="*:w-full mt-4">
        <button className="background-theme text-lg w-full py-2 rounded-lg hover:opacity-90 transition cursor-pointer flex items-center justify-center">
          {
            isLoading ? (
              <div className="size-7 border-transparent !border-t-zinc-800 !border-r-zinc-800 border-3 rounded-full grid place-content-center animate-spin"></div>
            ) : (
              'Subscribe'
            )
          }
        </button>
      </div>
    </form>
  )
}

/*
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

// Default values shown
<Ring
  size="40"
  stroke="5"
  bgOpacity="0"
  speed="2"
  color="black" 
/>
*/