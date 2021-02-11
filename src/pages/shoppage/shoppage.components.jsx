// import { render } from '@testing-library/react'
import React  from 'react'
import './shoppage.style.scss'
import CollectionPreview from "../../components/collections-preview/collections-preview.components";

import SHOP_DATA from './shopdata.js'

class Shop extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
       return (<div>
            { this.state.collections.map((id, ...otherSectionItems) => {
               return <CollectionPreview key={id} {...otherSectionItems} />
            })}
        </div>)
    }
}



export default Shop