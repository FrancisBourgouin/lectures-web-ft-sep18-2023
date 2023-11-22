import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const { onSubmit } = props;
  const initialValues = { city: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter the city name"
        value={formData.city}
        onChange={handleChange}
      />
      <button>Fetch weather</button>
    </form>
  );
}
