class AccumulatedService {
  async getArticles() {
    const response = await fetch(process.env.REACT_APP_API_HOST, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heGltaWxpYW5vLnBhdm9saW5pQGV4dHJhZG9zLmFyIiwiaWQiOjUsImlhdCI6MTY3NTQ5MzczMiwiZXhwIjoxNjc1NDk3MzMyfQ.1GaU4iExkP6CPOUU4fzqb4Zo23a8SJP0k1UYJO4EYbw",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.json();
  }
}

const acculatedService = new AccumulatedService();

export default acculatedService;
