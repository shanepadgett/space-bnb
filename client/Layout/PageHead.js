import Head from 'next/head'

const PageHead = ({title, description}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta charSet='utf-8' />
    <meta httpEquiv='content-language' content='en' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.1.0/css/all.css' integrity='sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt' crossorigin='anonymous' />
    {/* <script type='text/javascript' src='https://static.sketchfab.com/api/sketchfab-viewer-1.0.0.js' /> */}
    {/* <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css' /> */}
    {/* <link href='static/css/style.css' rel='stylesheet' /> */}
    {/* <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' /> */}
  </Head>
)

export default PageHead
