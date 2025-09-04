export default async function getReply(message) {
  const res = await fetch("http://localhost:3001/api/reply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  return data.text;
}

