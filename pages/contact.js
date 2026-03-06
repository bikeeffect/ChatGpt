import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - ChatGPT Finder</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <div className="container p-8 mx-auto xl:px-0 max-w-3xl py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Contact Us
        </h1>

        <div className="space-y-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Get in Touch
            </h2>
            <p>
              We&apos;d love to hear from you! Whether you have a question about ChatGPT Finder, need help with the extension, or just want to share feedback, feel free to reach out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Email
            </h2>
            <p>
              You can reach us at{' '}
              <a href="mailto:contact@chatgptfinder.app" className="text-emerald-500 hover:text-emerald-600">
                contact@chatgptfinder.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Response Time
            </h2>
            <p>
              We typically respond to all inquiries within 1-2 business days. Thank you for your patience!
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
