async function getData() {
  let host = process.env.NODE_ENV === 'production' ? 'https://proud-desert-0a06b8303.3.azurestaticapps.net/' : 'http://localhost:4280/';

  let res = await fetch(`${host}data-api/rest/TriviaQuestion`);
  return await res.text();
}

export default async function Home() {
  const triviaQuestions = await getData();
  let parsedJson = JSON.parse(triviaQuestions);

  return (
    <main className="background--secondary min-h-screen flex justify-center items-center">
      <div className="background--tertiary p-16">
        <h1 className="color--on-tertiary">PolarDash</h1>
        <p className="color--on-tertiary">Ready player one...</p>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {parsedJson.value.map((question: any) => (
              <tr key={question.Id}>
                <td>{question.Question}</td>
                <td>{question.Answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
