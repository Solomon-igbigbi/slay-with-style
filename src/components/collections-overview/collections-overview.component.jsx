import React from 'react'
import CollectionPreview from "../collections-preview/collections-preview.components";

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
          { 
            collections.map(({ id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)