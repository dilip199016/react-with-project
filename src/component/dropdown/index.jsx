// design pattern
// work of this component is only diplaying the data
// display and container design pattern

// container component and display component

const DropDown = (props) => {
  const { options, handleChange, idKey, labelKey } = props;
  return (
    <select onChange={handleChange}>
      {Array.isArray(options) &&
        options?.map((option, index) => {
          return (
            <option key={option[idKey]} value={option[idKey]}>
              {option[labelKey]}
            </option>
          );
        })}
    </select>
  );
};

export default DropDown;

// Array.isArray(options) => true that means option is array
// typeof options.map === 'function' => true means option is array
// In jsx whatever component we are rendering react gives unique key to that attached element
// so whatever algorihtm react apply for changing ui in that algo react needs unique key to indetify the that particular
// in the case of rendering list of elements in jsx conditionally react gives unique key as a index in that list

// why react said that pushing index a key is not good for website health(performance)
//
