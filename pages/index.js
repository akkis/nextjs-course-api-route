import { useRef } from "react";

function HomePage() {
  const enteredEmail = useRef();
  const enteredFeedback = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={enteredEmail} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" rows="5" ref={enteredFeedback} />
        </div>
        <button>Submit feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
