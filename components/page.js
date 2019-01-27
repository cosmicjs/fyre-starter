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
	const text_area_style = {
		textAlign: 'center',
		top: '50%',
		marginTop: -50,
		position: 'relative',
		height: 0
	}
	const text_style = {
		fontSize: 100,
		color: '#fff',
		textAlign: 'center',
		top: '50%',
		marginTop: -50,
		position: 'relative',
		textShadow: '3px 3px #000',
		textTransform: 'uppercase'
	}
	const description_style = {
		textShadow: '1px 1px #000'
	}
	return (
	<div>
		<div style={image_style}>
			<div style={text_area_style}>
				<h1 style={text_style}>{page.slug !== 'home' ? page.title : 'Fyre Starter'}</h1>
				{
					page.slug === 'home' ?
						<div>
							<div style={{ marginBottom: 80, fontSize: 30 }}>&larr;&rarr; keys to navigate slides</div>
							<div style={{ marginBottom: 20 }}><a style={{ color: '#fff', textDecoration: 'none' }} href="https://cosmicjs.com?ref=fyre-starter" target="_blank">Click here to create your own 🔥 fundraising presentation</a></div>
							<div style={description_style}>Made with 😂 by <a style={{ color: '#fff', textDecoration: 'none' }} href="https://cosmicjs.com?ref=fyre-starter" target="_blank">Cosmic JS</a>.</div>
						</div>
					: ''
				}
			</div>
		</div>
	</div>
	)
}