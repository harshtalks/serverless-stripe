const fetch = require("node-fetch");

exports.faunaFetch = async ({ query, variables }) => {
  return await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(JSON.stringify(err, null, 2)));
};
