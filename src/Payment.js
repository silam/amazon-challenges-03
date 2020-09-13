import React from 'react'
import './Payment.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';




function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    // 2 react HOOKs
    const stripe = useStripe();
    const elements = useElements();


    const [error, setError] = useState(null);
    const [disable, setDisabled] = useState(true);


    const handleSubmit = e =>
    {
            // do stripe here
    }

    const handleChange = e => {
        // listen for changes in the card elements
        // and display any errors as customer types their cards details
        setDisabled(e.empty);
        setError(e.error? e.error.message: "");
    }



    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                {/* Ship address */}
                <div className="payment__section" >
                    <div className="payment__title" >
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Fake Address</p>
                        <p>LA, USA</p>
                    </div>
                </div>
                {/* Review Items */}
                <div className="payment__section" >
                    <div className="payment__title" >
                            <h3>Review Items</h3>
                    </div>
                    <div className="payment__items" >
                            {basket.map(item => (
                                <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                              />
                            ))}
                    </div>
                </div>
                {/* payment method */}
                <div className="payment__section" >
                    <div className="payment__title" >
                            <h3>Payment methods</h3>
                    </div>        
                    <div className="payment__details" >
                                {/* strip magic*/}
                            <form onSubmit={onHandleSubmit}> 
                                <CardElement onChange={handleChange}/>
                            </form>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Payment
