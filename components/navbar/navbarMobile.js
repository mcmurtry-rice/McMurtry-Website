import React from 'react';
import Link from 'next/link';
import './navbarMobile.css';
import { Box, Image } from 'rebass';
import { navbar_headers } from './navbar.json'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            expandedCategories: []
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleCategory = this.toggleCategory.bind(this);
    }

    toggleNavbar() {
        this.setState({ hidden: !this.state.hidden })
    }

    toggleCategory(index) {
        const { expandedCategories } = this.state;
        if (expandedCategories.includes(index)) {
            this.setState({ expandedCategories: expandedCategories.filter(i => i !== index) });
        } else {
            this.setState({ expandedCategories: [...expandedCategories, index] });
        }
    }

    render() {
        let mainHeaders = []
        let menus = []
        let hidden = this.state.hidden ? { left: '100%' } : { left: 0 }
        const { expandedCategories } = this.state;

        for (let i = 0; i < navbar_headers.length; i++) {
            const isExpanded = expandedCategories.includes(i);
            mainHeaders.push(
                <div className='main-header' key={navbar_headers[i].name}>
                    <a onClick={() => this.toggleCategory(i)}>{navbar_headers[i].name}</a>
                    <div className={isExpanded ? 'subheader-display' : 'subheader-hidden'}>
                        {
                            navbar_headers[i].subheaders.map(({ name, to }) => (
                                <Link href={to} key={name}>
                                    <div className='subheader-item'>
                                        {name}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className='fixed-mobile-header'>
                    <img className="show-navbar" src='/static/icons/menu.svg' alt="Menu" onClick={this.toggleNavbar} />
                    <Link href='/'>
                        <div className='header-crest-mobile'>
                            <Box width={40}>
                                <Image src='/static/logo.svg' alt="" />
                            </Box>
                            <p>McMurtry College</p>
                        </div>
                    </Link>
                </div>
                <div className='mobile-navbar' style={hidden}>
                    <div className='main-menu'>
                        <img className='close-navbar' src="/static/icons/x.svg" alt="X" onClick={this.toggleNavbar} />
                        {mainHeaders}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;