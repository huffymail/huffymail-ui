import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

export default function Page () {
  return (
    <section>
      <HeroSection/>
      <FeaturesSection/>
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

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-700">
            Features
          </h2>
        </div>

        <div className="mt-24 lg:flex lg:items-center lg:justify-between">
          <div className="lg:flex-1">
            <img alt="Illustration for the feature." className="mx-auto max-h-96 w-auto"
                 src="/illustration/widget-1-core.webp"/>
          </div>

          <div className="mt-12 lg:mt-0 lg:ml-12 lg:max-w-lg">
            <div className="text-xs font-light uppercase text-gray-400">
              A Minimal Theme
            </div>

            <div className="mt-1 text-3xl font-medium text-gray-700">
              Cleanly designed
            </div>

            <div className="mt-4 h-1 w-24 rounded bg-emerald-200"/>

            <div className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum inermis iudicabit. Ex vidit fierent
              hendrerit eum, sed stet periculis ut. Vis in probo decore labitur. Unum simul an vis, tale patrioque eos
              ad, dicunt percipit ea nam. Vis dolor quidam assentior te, atomorum posidonium qui an.
            </div>
          </div>
        </div>

        <div className="mt-24 lg:flex lg:items-center lg:justify-between">
          <div className="lg:flex-1">
            <img alt="Illustration for the feature." className="mx-auto max-h-96 w-auto"
                 src="/illustration/widget-2-core.webp"/>
          </div>

          <div className="mt-12 lg:order-first lg:mt-0 lg:mr-12 lg:max-w-lg">
            <div className="text-xs font-light uppercase text-gray-400">
              A Powerful
            </div>

            <div className="mt-1 text-3xl font-medium text-gray-700">
              Flex layout
            </div>

            <div className="mt-4 h-1 w-24 rounded bg-emerald-200"/>

            <div className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum inermis iudicabit. Ex vidit fierent
              hendrerit eum, sed stet periculis ut. Vis in probo decore labitur. Unum simul an vis, tale patrioque eos
              ad, dicunt percipit ea nam. Vis dolor quidam assentior te, atomorum posidonium qui an.
            </div>
          </div>
        </div>

        <div className="mt-24 lg:flex lg:items-center lg:justify-between">
          <div className="lg:flex-1">
            <img alt="Illustration for the feature." className="mx-auto max-h-96 w-auto"
                 src="/illustration/widget-3-core.webp"/>
          </div>

          <div className="mt-12 lg:mt-0 lg:ml-12 lg:max-w-lg">
            <div className="text-xs font-light uppercase text-gray-400">
              Many Extras
            </div>

            <div className="mt-1 text-3xl font-medium text-gray-700">
              Included graphics assets
            </div>

            <div className="mt-4 h-1 w-24 rounded bg-emerald-200"/>

            <div className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum inermis iudicabit. Ex vidit fierent
              hendrerit eum, sed stet periculis ut. Vis in probo decore labitur. Unum simul an vis, tale patrioque eos
              ad, dicunt percipit ea nam. Vis dolor quidam assentior te, atomorum posidonium qui an.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
