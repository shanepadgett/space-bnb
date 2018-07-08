import Head from 'next/head'

const PageHead = ({title, description}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta charSet='utf-8' />
    <meta httpEquiv='content-language' content='en' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
    {/* <link href='static/css/style.css' rel='stylesheet' /> */}
    {/* <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' /> */}
  </Head>
)

export default PageHead
