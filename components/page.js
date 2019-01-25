export default ({ page }) => {
	const image_style = {
		position: 'absolute',
		width: '100%',
		backgroundImage: `url(${page.metadata.image.imgix_url}?auto=format&w=2000)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		margin: '0 auto',
		height: '100%'
	}
	const text_style = {
		fontSize: 100,
		color: '#fff',
		textAlign: 'center',
		top: '30%',
		position: 'relative',
		height: 0,
		textShadow: '3px 3px #000',
		textTransform: 'uppercase'
	}
	const footer_style = {
		position: 'absolute',
		left: 10,
		bottom: 20,
		textShadow: '1px 1px #000'
	}
	return (
	<div>
		<div style={image_style}>
			<h1 style={text_style}>{page.slug !== 'home' ? page.title : 'Fyre Starter'}</h1>
		</div>
		<div style={footer_style}>Powered by <a style={{ color: '#00AFD7', textDecoration: 'none' }} href="https://cosmicjs.com?ref=fyre-starter">Cosmic JS</a> Use arrow keys to navigate.</div>
	</div>
	)
}