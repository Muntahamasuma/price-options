import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions=[
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Access to locker rooms",
            "Access to sauna",
            "Discounts on gym merchandise"
          ],
          "price": "$29.99"
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "features": [
            "Access to all basic membership features",
            "Access to group fitness classes (limited)",
            "Access to swimming pool",
            "Access to personal lockers"
          ],
          "price": "$49.99"
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "features": [
            "Access to all standard membership features",
            "Unlimited access to group fitness classes",
            "Personalized workout plans from trainers",
            "Access to massage chairs",
            "Complimentary beverages at the gym lounge"
          ],
          "price": "$79.99"
        }
      ]
      
    return (
        <div className="m-4 md:m-10">
            <h2 className="text-6xl font-semibold text-center my-6">Best prices in the town</h2> <br />

            <div className="grid md:grid-cols-3 gap-6">
            {
              priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;