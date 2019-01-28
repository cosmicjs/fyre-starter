import React from 'react'
import Router from 'next/router'
import bucket from '../config'
import Page from '../components/page'
import PageNotFound from '../components/404'
import Header from '../components/header'
class DefaultPage extends React.Component {
  constructor(props) {
    super(props)
    let pages
    let page
    let slug = this.props.url.query.slug
    this.state = {}
    if (!slug)
      slug = 'home'
    bucket.getObjects().then(res => {
      pages = res.objects
      pages.forEach(page_loop => {
        if (page_loop.slug === slug)
          page = page_loop
      })
      this.setState({ 
        pages, 
        page, 
        page_index: 0,
        is_mobile: window.innerWidth < 1000,
        styles: {
          headline_size: window.innerWidth > 1000 ? 100 : 50,
          image_width: window.innerWidth > 1000 ? 2000 : 1000
        }
      })
    }).catch(e => {
      console.log('fuck')
    })
   
  }
  gotToNext() {
    const pages = this.state.pages
    const page_index = this.state.page_index
    let new_index = page_index + 1
    if (new_index > (pages.length - 1))
      new_index = 0
    this.setState({
      ...this.state,
      page: pages[new_index],
      page_index: new_index
    })
  }
  gotToPrev() {
    const pages = this.state.pages
    const page_index = this.state.page_index
    let new_index = page_index - 1
    if (new_index < 0)
      new_index = pages.length - 1
    this.setState({
      ...this.state,
      page: pages[new_index],
      page_index: new_index
    })
  }
  componentDidMount() {
    document.body.addEventListener('keyup', event => {
      var key = event.keyCode || event.charCode || 0;
      if(key == 39 || key === 32) {
        this.gotToNext()
      }
      if(key == 37) {
        this.gotToPrev()
      }
    })
  }
  handleClick(direction) {
    if (direction === 'next')
      this.gotToNext()
    else
      this.gotToPrev()
  }
	render() {
    if (!this.state.page)
      return <div />
    return (
      <div>
        <Header page={ this.state.page }/>
        <div className="main">
          {this.state.page.component && this.state.page.component==='404' ? (
            <PageNotFound />
          ) : (
            <Page page={this.state.page} styles={this.state.styles} is_mobile={this.state.is_mobile} handleClick={this.handleClick.bind(this)} />
          )}
        </div>
      </div>
		);
	}
}

export default DefaultPage