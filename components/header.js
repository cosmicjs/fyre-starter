import Head from 'next/head'

export default ({ page }) =>
  <div>
    <Head>
      <title>{ page.title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>
				{`body {
					margin: 0;
          padding: 0;
          background: #000;
          width: 100%;
          font-family: Helvetica, sans-serif;
          color: #fff;
				}`}
				</style>
    </Head>
  </div>