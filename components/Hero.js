import { ChromeIcon, EdgeIcon, FirefoxIcon } from './BrowserIcons'

export default function Hero() {
  return (
    <div className="container p-8 mx-auto xl:px-0 flex flex-wrap items-center justify-center py-12 md:py-24">
      <div className="flex items-center w-full justify-center">
        <div className="max-w-2xl mb-8 text-center">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            ChatGPT Finder
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            ChatGPT Finder is a most powerful tool for managing and sharing files created by ChatGPT. With beautiful and convenient interface.
          </p>
        </div>
      </div>

      <div className="flex items-center w-full justify-center mb-4">
        <a
          href="https://www.producthunt.com/posts/chatgpt-finder?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt-finder"
          target="_blank"
          className="block mx-auto"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431204&theme=light"
            alt="ChatGPT Finder - Supercharge management of your creations on ChatGPT. | Product Hunt"
            width="250"
            height="54"
            className="mx-auto"
          />
        </a>
      </div>

      <div className="flex flex-col justify-center">
        <div className="text-xl text-center text-gray-700 dark:text-white">
          Powerful ChatGPT file explorer
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-4 sm:space-y-0 mt-4">
          <div className="border py-2 px-4 rounded-xl">
            <a
              href="https://chromewebstore.google.com/detail/chatgpt-finder/dnldkbcoidnhfdkpdpalgklhjfaibgnh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ChromeIcon />
              <p className="flex-grow text-gray-700 dark:text-gray-400 px-2">Get it on Chrome</p>
            </a>
          </div>
          <div className="border py-2 px-4 rounded-xl">
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/akkjondkbjlphpckgegikecnahnghkop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <EdgeIcon />
              <p className="flex-grow text-gray-700 dark:text-gray-400 px-2">Get it on Edge</p>
            </a>
          </div>
          <div className="border py-2 px-4 rounded-xl">
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/chatgpt-finder/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FirefoxIcon />
              <p className="flex-grow text-gray-700 dark:text-gray-400 px-2">Get it on Firefox</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
