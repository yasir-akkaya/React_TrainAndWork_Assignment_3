import React from 'react'

function Wishlist() {
  return (
    <div className="page-section section mb-50">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <form action="#">
          {/*=======  cart table  =======*/}
          <div className="cart-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="pro-thumbnail">Image</th>
                  <th className="pro-title">Product</th>
                  <th className="pro-price">Price</th>
                  <th className="pro-quantity">Quantity</th>
                  <th className="pro-subtotal">Total</th>
                  <th className="pro-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src="assets/images/products/product01.webp" className="img-fluid" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Cillum dolore tortor nisl fermentum</a></td>
                  <td className="pro-price"><span>$29.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$29.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src="assets/images/products/product02.webp" className="img-fluid" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Auctor gravida pellentesque</a></td>
                  <td className="pro-price"><span>$30.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={2} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$60.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src="assets/images/products/product03.webp" className="img-fluid" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Condimentum posuere consectetur</a></td>
                  <td className="pro-price"><span>$25.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$25.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src="assets/images/products/product04.webp" className="img-fluid" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Habitasse dictumst elementum</a></td>
                  <td className="pro-price"><span>$11.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$11.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*=======  End of cart table  =======*/}
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Wishlist