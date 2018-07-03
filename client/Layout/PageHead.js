import Head from 'next/head'

const PageHead = ({title, description}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta charSet='utf-8' />
    <meta httpEquiv='content-language' content='en' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel='stylesheet' href='https://bootswatch.com/4/lux/bootstrap.min.css' />
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
    {/* <link rel='stylesheet' href='/static/app.css' /> */}
  </Head>
)

export default PageHead
