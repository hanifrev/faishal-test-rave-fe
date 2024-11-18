import { useGetAboutQuery } from 'lib/services/api'

const AboutHeader = () => {
  const { data, isLoading, isError } = useGetAboutQuery()
  return (
    <div className="text-center md:text-left py-5 md:py-6 lg:py-8 font-bold text-[28px] lg:text-[32px] font-serifs">
      {isLoading
        ? 'Loading...'
        : data?.mainTitle || 'No title availabe, check CMS'}
      {isError && <>Error fetching data</>}
    </div>
  )
}

export default AboutHeader
