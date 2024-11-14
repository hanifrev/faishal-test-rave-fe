const MarketingMessage = () => {
  return (
    <div className="bg-[#125a55] w-full rounded-md p-6">
      <p className="pt-4 sm:pt-0 flex flex-wrap justify-center text-center text-white leading-[150%] text-sm md:text-base">
        <strong>To book in local currency. </strong>
        <a
          title="Contact us"
          target="_blank"
          href="/en-sg/contact-us"
          rel="noopener"
        >
          Contact us
        </a>{' '}
        or{' '}
        <a
          title="Request a Quote"
          target="_blank"
          href="/en-sg/request-a-quote"
          rel="noopener"
        >
          request a quote
        </a>{' '}
        and indicate your currency preference.
      </p>
    </div>
  )
}

export default MarketingMessage
