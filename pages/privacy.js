import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - ChatGPT Finder</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <div className="container p-8 mx-auto xl:px-0 max-w-3xl py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Privacy Policy for ChatGPT Finder
        </h1>

        <div className="space-y-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Introduction
            </h2>
            <p>
              This privacy policy is for ChatGPT Finder, an extension for Chrome, Firefox, Edge browser. Our commitment is to protect your privacy and handle any personal information with care and respect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Information Collection and Use
            </h2>
            <p>
              ChatGPT Finder does not collect, store, or share any personal or sensitive user data. The extension operates solely within the user&apos;s browser and interacts with &apos;chat.openai.com&apos; to manage ChatGPT files. No user-specific content is accessed or processed by our extension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Data Storage and Security
            </h2>
            <p>
              Since no personal data is collected, there is no storage or security concerns regarding user data. Our extension functions without transmitting data externally, ensuring maximum privacy and security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Changes to Our Privacy Policy
            </h2>
            <p>
              We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Contact Information
            </h2>
            <p>
              For any questions or concerns regarding this privacy policy, please contact us through our support email provided on the Chrome extension store page.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
