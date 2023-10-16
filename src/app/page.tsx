async function getData() {
  let host = process.env.NODE_ENV === 'production' ? 'https://proud-desert-0a06b8303.3.azurestaticapps.net/' : 'http://localhost:4280/';

  let res = await fetch(`${host}data-api/rest/Person`);
  let responseText = await res.text();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data: (${res.status}:${res.statusText}) ${responseText}`);
  }

  return responseText;
}

export default async function Home() {
  const persons = await getData();
  let parsedJson = JSON.parse(persons);

  return (
    <main className="background--secondary min-h-screen flex justify-center items-center">
      <div className="background--tertiary p-16">
        <h1 className="color--on-tertiary">PolarDash</h1>
        <p className="color--on-tertiary">Ready player one...</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {parsedJson?.value?.map((person: any) => (
              <tr key={person.Id}>
                <td>{person.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}