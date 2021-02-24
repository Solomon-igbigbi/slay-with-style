import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItems from '../menu-items/menu-items.component';

import './directory-styles.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
      {sections.map(({ id,  ...otherSectionProprs }) => (
          <MenuItems key={id} {...otherSectionProprs} />
      ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);