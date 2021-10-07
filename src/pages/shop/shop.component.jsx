import React from 'react';

import SHOP_DATA from './shop.data';

import CollecitionPreview from '../../components/collecition-preview/collecition-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollecitionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
