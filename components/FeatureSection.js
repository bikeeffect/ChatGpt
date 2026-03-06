export default function FeatureSection({ title, description, image, imageAlt, features, reversed }) {
  return (
    <div className="container px-4 py-8 md:p-8 mx-auto xl:px-0 flex flex-wrap mb-10 md:mb-20 lg:gap-10 lg:flex-nowrap">
      <div className={`flex items-center justify-center w-full lg:w-1/2 ${reversed ? 'lg:order-1' : ''}`}>
        <div className="w-full">
          <img
            alt={imageAlt}
            loading="lazy"
            width="521"
            height="330"
            className="object-cover rounded-md w-full h-auto"
            src={image}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full lg:w-1/2">
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-2xl md:text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {title}
            </h3>
            <p className="max-w-2xl py-4 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {description}
            </p>
          </div>
          <div className="w-full mt-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start mt-6 md:mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-emerald-500 rounded-md w-11 h-11">
                  {feature.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-sm md:text-base text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
