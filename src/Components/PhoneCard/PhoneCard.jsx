import PropTypes from "prop-types";
const PhoneCard = ({ phone }) => {
  const { image, phone_name, brand_name, price, rating } = phone || {};
  return (
    <div>
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-96 w-full object-cover" />
        </div>
        <div className="p-6">
          <p>{rating}</p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">{brand_name}</p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">${price}</p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">{phone_name}</p>
        </div>
        <div className="p-6 pt-0">
          <button className="w-full bg-violet-600 text-white rounded-lg px-3 py-2" type="button">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};
PhoneCard.propTypes = {
  phone: PropTypes.object,
};
export default PhoneCard;
