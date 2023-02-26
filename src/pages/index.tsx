import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

export default function Page () {
  return (
    <section>
      <HeroSection/>
    </section>
  )
}

const HeroSection = () => {
  const router = useRouter()

  const [prefix, setPrefix] = useState<string>('')
  const [domain] = useState<string>('huffymail.com')

  const onChangePrefix: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value
    if (!value) {
      setPrefix('')
      return
    }

    const prefixFormat = /[a-zA-Z0-9_.+-]+$/
    if (!prefixFormat.test(value)) {
      return
    }

    setPrefix(value)
  }

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    router.push(`/inbox/${prefix}@${domain}`).catch(console.error)
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
        <div className="px-4">
          <div className="mx-auto max-w-md">
            <h2 className="text-4xl font-bold text-gray-700">
              Free Disposable Email
            </h2>

            <p className="mt-2 text-gray-500">
              You can use any address <span className="text-emerald-400">@huffymail.com</span> and check those public
              inboxes for free!
            </p>

            <div className="mt-8">
              <Link href="/501">
                <button className="h-12 w-full rounded bg-gray-700 text-sm font-medium text-white lg:w-40 ">
                  Get Started
                </button>
              </Link>

              <Link href="/501">
                <button
                  className="mt-4 h-12 w-full rounded border border-transparent bg-white text-sm font-medium text-gray-700 lg:mt-0 lg:ml-4 lg:w-40">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="mx-auto mt-12 max-w-md lg:mt-0 lg:flex-1">
            <div className="rounded bg-white p-4 shadow-2xl shadow-gray-200 lg:p-6">
              <form onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-500" htmlFor="prefix">
                    Prefix
                  </label>

                  <div className="mt-2">
                    <input
                      className="block w-full rounded border-gray-200 focus:border-emerald-200 focus:ring-emerald-200"
                      id="prefix"
                      name="prefix"
                      onChange={onChangePrefix}
                      placeholder="john.doe"
                      type="text"
                      value={prefix}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-500" htmlFor="domain">
                    Domain
                  </label>

                  <div className="mt-2">
                    <select
                      className="block w-full rounded border-gray-200 focus:border-emerald-200 focus:ring-emerald-200"
                      id="domain"
                      name="domain"
                    >
                      <option value="huffymail.com">huffymail.com</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    className="h-12 w-full rounded border border-transparent bg-emerald-400 text-sm font-medium text-white transition-colors hover:border-emerald-400 hover:bg-white hover:text-emerald-400"
                    type="submit">
                    Go to Inbox
                  </button>
                </div>

                <div className="mt-4 text-xs text-gray-400">
                <span>
                  By accessing the inbox, you agree to the Huffymail&lsquo;s
                </span>

                  &nbsp;

                  <span>
                  <Link className="text-emerald-300" href="/501">Terms and Conditions</Link>.
                </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
