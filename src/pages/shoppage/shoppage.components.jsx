// import { render } from '@testing-library/react'
import React  from 'react'
import { Route } from 'react-router-dom'
import './shoppage.style.scss'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CategoryPage from '../category/category.page'


const Shop = ({ match }) => {
    console.log(match)
    return(
    <div>
      <Route exact path={`${match.path}`}  component={CollectionOverview}/>
      <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
    </div>
)}



export default Shop