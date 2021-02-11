import React from 'react';
import './collections.style.scss'

const CollectionPreview  = ({ title, items }) => (
    <div>
        <div>{title}</div>
        <div>
            {items.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;