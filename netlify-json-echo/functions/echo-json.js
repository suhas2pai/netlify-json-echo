exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Only POST method allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "JSON received",
        receivedJson: data
      }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    }
  }
};


