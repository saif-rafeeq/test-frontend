// // ProgramCard.js

// import React from 'react';

// const ProgramCard = ({ program }) => {
//   return (
//     program && (<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{program.title}</div>
//           <p className="text-gray-700 text-base mb-2">{program.description}</p>
//           <button className="text-gray-700 text-base p-2 bg-zinc-200 rounded-xl">{program.price}</button>
//         </div>
//       </div>)

//   );
// };

// export default ProgramCard;


// ProgramCard.js

import React from 'react';
import axios from '../utiles/axios';

const ProgramCard = ({ program }) => {
  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post('/process/create/orderId', { amount: program.amount });
      const { id, amount, currency } = orderResponse.data;

      const options = {
        key: 'rzp_test_Y2YRN2hxbkwWvF', // Replace with your key ID
        amount: amount,
        currency: currency,
        name: program.title,
        description: program.description,
        image: 'https://logos-world.net/wp-content/uploads/2020/12/Hero-Logo.png',
        order_id: id,
        handler: async function (response) {
          try {
            const paymentVerificationResponse = await axios.post('/process/api/payment/verify', { response });
            if (paymentVerificationResponse.data.status === "success") {
              alert("Payment successful");
            } else {
              alert("Payment verification failed");
            }
          } catch (error) {
            console.error("Verification failed:", error);
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert(`Payment failed: ${response.error.description}`);
      });

      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment initiation failed");
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{program.title}</div>
        <p className="text-gray-700 text-base mb-2">{program.description}</p>
        <h1>&#x20B9; {program.amount}</h1>
        <button onClick={handlePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
