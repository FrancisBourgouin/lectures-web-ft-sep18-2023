import useForm from "../hooks/useForm";

export default function QuizForm(props) {
  const { onSubmit, prompt } = props;

  const initialValues = { answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);
  return (
    <section className="QuizForm">
      <form onSubmit={handleSubmit}>
        <p>{prompt}</p>
        <input
          type="text"
          name="answer"
          onChange={handleChange}
          value={formData.answer}
        />
        <button>Answer!</button>
      </form>
    </section>
  );
}
