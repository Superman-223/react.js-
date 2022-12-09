export default function handler(req, res) {
    res.status(200).json( [
        {
          "id": 1,
          "address": "12 Valley of Kings, Geneva",
          "country": "Switzerland",
          "price": 900000
        },
        {
            "id": 2,
            "address": "89 Road of Forks, Bern",
            "country": "Switzerland",
            "price": 500000
        },
        {
            "id": 2,
            "address": "89 Road of Forks, Bern",
            "country": "Switzerland",
            "price": 500000
        }
        
      ])
  }