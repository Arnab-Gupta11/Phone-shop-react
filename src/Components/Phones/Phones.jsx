import PropTypes from "prop-types";
import PhoneCard from "../PhoneCard/PhoneCard";
const Phones = ({ phones }) => {
  console.log(phones);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 mt-10 px-5">
        {phones?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};
Phones.propTypes = {
  phones: PropTypes.array,
};
export default Phones;
