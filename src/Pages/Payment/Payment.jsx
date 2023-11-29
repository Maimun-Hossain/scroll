import { useState } from "react";
import Swal from "sweetalert2";


const Payment = () => {
    const [amu, setAmu] = useState(0)

    const handleform = e => {
        e.preventDefault();
        const form = e.target;
        const amount = form.amount.value;
    console.log(amount);
    
    setAmu(amount)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Payment complete",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>{amu}</p>
    <div className="card-actions justify-end">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Pay</button>
<dialog id="my_modal_1" className="modal">
  <form onSubmit={handleform}>
  <div className="modal-box">
    <h3 className="font-bold text-lg">Q PAY</h3>
    <p className="py-4">Pay your amount</p>
    <input type="number" name="amount" placeholder="Amount" className="input input-bordered input-secondary w-full max-w-xs" />
    <div className="modal-action">
      <div method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <input onClick={()=>document.getElementById('my_modal_1').close()} className="btn" type="submit" value="Pay Now" />
      </div>
    </div>
  </div>
  </form>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default Payment;