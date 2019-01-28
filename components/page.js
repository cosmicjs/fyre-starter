export default ({ page, styles, is_mobile, handleClick }) => {
	const image_style = {
		position: 'absolute',
		width: '100%',
		backgroundImage: `url(${page.metadata.image.imgix_url}?auto=format,compress&w=2000)`,
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
		fontSize: styles.headline_size,
		color: '#fff',
		textAlign: 'center',
		top: '50%',
		marginTop: -100,
		position: 'relative',
		textShadow: '3px 3px #000',
		textTransform: 'uppercase'
	}
	const description_style = {
		textShadow: '1px 1px #000'
	}
	const arrows_style = {
		textShadow: '1px 1px #000',
		fontSize: 100,
		position: 'absolute',
		width: '100%'
	}
	return (
	<div>
		<div style={image_style}>
			<div style={text_area_style}>
				<h1 style={text_style}>{page.slug !== 'home' ? page.metadata.headline : 'Fyre Starter'}</h1>
				{
					is_mobile &&
					<div style={arrows_style}>
						<div style={{ float: 'left', marginLeft: 10 }} onClick={handleClick.bind(this, 'prev')}>&larr;</div>
						<div style={{ float: 'right', marginRight: 10 }} onClick={handleClick.bind(this, 'next')}>&rarr;</div>
						<div style={{ clear: 'both' }}/>
					</div>
				}
				{
					page.slug === 'home' ?
						<div style={description_style}>
							{
								!is_mobile &&
								<div style={{ marginBottom: 80, fontSize: 30 }}>Use &larr;&rarr; keys to navigate slides</div>
							}
							<div style={{ marginBottom: 20 }}><a style={{ color: '#fff', textDecoration: 'none' }} href="https://cosmicjs.com?ref=fyre-starter" target="_blank">Click here to create your own 🔥 fundraising presentation</a>.</div>
							<div>Made with 😂 using <a style={{ color: '#fff', textDecoration: 'none' }} href="https://cosmicjs.com?ref=fyre-starter" target="_blank">Cosmic JS</a>.</div>
						</div>
					: ''
				}
			</div>
		</div>
	</div>
	)
}