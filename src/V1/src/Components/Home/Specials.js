import { FaMotorcycle } from "react-icons/fa";
import recipes from "../../recipes";
import Swal from "sweetalert2";

function Specials() {
  const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Do you want to confirm order?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Yes, order it!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Orderd!',
            'Your order has been confirmed.',
            'success'
          )
        } 
      })

}

  return (
    <section className="specials section__padding">
      <div className="specials-header">
        <h1>This weeks specials</h1>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-container">
      {recipes.map((recipe) => (
          <div key={recipe.id} className="special-card">
            <img src={recipe.image} alt="food-images" />
            <div className="special-info">
              <div className="special-title">
                <h3>{recipe.title}</h3>
                <span className="price">${recipe.price}</span>
              </div>
              <p>{recipe.description}</p>
              <div className="delivery" onClick={() => handleOrder(recipe.id)}><span>Order a delivery</span>
              <FaMotorcycle /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Specials

