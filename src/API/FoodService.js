import axios from "axios";

export default class FoodService {
  static async getCoctails() {
    const options = {
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/randomselection.php",
      headers: {
        "X-RapidAPI-Key": "f1bf49e2f6mshb57b46df5338947p194571jsn4414f3e6dd2b",
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  static async getFood(start = "0", limit = "10") {
    const response = await axios.get(
      "https://tasty.p.rapidapi.com/recipes/list",
      {
        headers: {
          "X-RapidAPI-Key":
            "f1bf49e2f6mshb57b46df5338947p194571jsn4414f3e6dd2b",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
        params: {
          size: limit,
          from: start,
        },
      }
    );

    return response;
  }
}
