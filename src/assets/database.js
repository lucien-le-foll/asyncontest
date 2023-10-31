const database = {
  "vehicle_types" : [
    {
      "name": "Citadine",
      "average_weight": "800-1300kg",
      "eco_score": 8
    },
    {
      "name": "Cabriolet",
      "average_weight": "1300-2000kg",
      "eco_score": 6
    },
    {
      "name": "Berline",
      "average_weight": "1300-1800kg",
      "eco_score": 6.5
    },
    {
      "name": "SUV / 4x4",
      "average_weight": "1500-2500kg",
      "eco_score": 4
    }
  ],
  "credit_rates" : [
    {
      "bottom_score" : 0,
      "top_score" : 10,
      "rate" : 3.0
    },
    {
      "bottom_score" : 11,
      "top_score" : 15,
      "rate" : 2.74
    },
    {
      "bottom_score" : 16,
      "top_score" : 25,
      "rate" : 2.52
    },
    {
      "bottom_score" : 26,
      "top_score" : 33,
      "rate" : 2.1
    },
    {
      "bottom_score" : 34,
      "top_score" : 40,
      "rate" : 1.85
    }
  ],
  "energies" : [
    {
      "name" : "Essence",
      "eco_score" : 5
    },
    {
      "name" : "Electrique",
      "eco_score" : 9
    },
    {
      "name" : "Gaz",
      "eco_score" : 6
    },
    {
      "name" : "Diesel",
      "eco_score" : 4
    },
    {
      "name" : "Hybride",
      "eco_score" : 7
    }
  ],
  "passenger_bonuses" : [
    {
      "name" :"1 passager",
      "passenger_number" : 1,
      "rate_bonus" : 0.11
    },
    {
      "name" :"2 passagers",
      "passenger_number" : 2,
      "rate_bonus" : -0.17
    },
    {
      "name" :"3 passagers",
      "passenger_number" : 3,
      "rate_bonus" : -0.29
    },
    {
      "name" :"4 passagers",
      "passenger_number" : 4,
      "rate_bonus" : -0.53
    }
  ],
  "years": [
    {
      "name": "1960-1970",
      "start": 1960,
      "end": 1970,
      "eco_score": 1
    },
    {
      "name": "1970-1980",
      "start": 1970,
      "end": 1980,
      "eco_score": 2
    },
    {
      "name": "1980-1990",
      "start": 1980,
      "end": 1990,
      "eco_score": 3
    },
    {
      "name": "1990-2000",
      "start": 1990,
      "end": 2000,
      "eco_score": 4
    },
    {
      "name": "2000-2010",
      "start": 2000,
      "end": 2010,
      "eco_score": 5
    },
    {
      "name": "Après 2010",
      "start": 2010,
      "end": 3000,
      "eco_score": 7
    }
  ],
  "yearly_mileage": [
    {
      "name": "5-10K km",
      "bottom_mileage": 5,
      "top_mileage": 10,
      "eco_score": 9
    },
    {
      "name": "10-15K km",
      "bottom_mileage": 10,
      "top_mileage": 15,
      "eco_score": 7
    },
    {
      "name": "15-20K km",
      "bottom_mileage": 15,
      "top_mileage": 20,
      "eco_score": 5
    },
    {
      "name": "20-25K km",
      "bottom_mileage": 20,
      "top_mileage": 25,
      "eco_score": 3
    },
    {
      "name": "25-30K km",
      "bottom_mileage": 25,
      "top_mileage": 30,
      "eco_score": 1
    }
  ]
}

export default database