//Level data is stored in javascript so that they can be loaded when double clicking on the index.html file
//ideally I would wanna do this in a database, or if not, a json file, however they require you to be hosting the website on a server.
//this workaround was suggested by generative AI.
const LEVELS_DATA = [
  {
    "id": "society",
    "rank": 1,
    "name": "Society",
    "publisher": "Neomarbilan",
    "verifier": "wPopoff",
    "videoId": "3CoEaH1CM7o",
    "description": "// Why are you always awake at night? //",
    "points": 10,
    "completions": [
      {
        "name": "wPopoff",
        "country": "United States",
        "date": "2026-06-21",
        "role": "Verifier"
      },
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2026-07-13",
        "role": "100%"
      }
    ]
  },
  {
    "id": "artemis-13",
    "rank": 2,
    "name": "Artemis 13",
    "publisher": "Mvngo",
    "verifier": "Zoink",
    "videoId": "FgjOM0ef1N8",
    "description": "To all of you down there on Earth... we love you from the moon. // Verified by Zoink",
    "points": 9,
    "completions": [
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2026-09-10",
        "role": "Verifier"
      }
    ]
  },
  {
    "id": "thinking-space-ii",
    "rank": 3,
    "name": "Thinking Space II",
    "publisher": "CairoX",
    "verifier": "Zoink",
    "videoId": "CELNmHwln_c",
    "description": "A mindscape of pure insanity, most fall to it's brutal nature. Gameplay by CoCy team, Deco hosted by DrCuber, Verified by Zoink. Dedicated to Hideki <3",
    "points": 8,
    "completions": [
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2025-05-25",
        "role": "Verifier"
      },
      {
        "name": "wPopoff",
        "country": "United States",
        "date": "2025-11-6",
        "role": "100%"
      },
      {
        "name": "Trick",
        "country": "United States",
        "date": "2025-07-14",
        "role": "100%"
      }
    ]
  },
  {
    "id": "amethyst",
    "rank": 4,
    "name": "Amethyst",
    "publisher": "iMist",
    "verifier": "wPopoff",
    "videoId": "4lfkzz1VCbA",
    "description": "An idea that started 5 years ago has now been brought to light. Venture into the depths of the cave to fulfill an ancient legend. Will you be the one to find the Amethyst crystal?",
    "points": 7,
    "completions": [
      {
        "name": "wPopoff",
        "country": "United States",
        "date": "2025-05-25",
        "role": "Verifier"
      },
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2025-08-01",
        "role": "100%"
      }
    ]
  },
  {
    "id": "flamewall",
    "rank": 5,
    "name": "Flamewall",
    "publisher": "Narwall",
    "verifier": "Cuatrocientos",
    "videoId": "x4Io4zkWVRw",
    "description": "The ultimate endurance test, in the works since 2022. | Verified by Cuatrocientos in 221.703k attempts.",
    "points": 6,
    "completions": [
      {
        "name": "Cuatrocientos",
        "country": "Spain",
        "date": "2025-09-21",
        "role": "Verifier"
      },
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2025-12-05",
        "role": "100%"
      },
      {
        "name": "zLevii",
        "country": "Australia",
        "date": "2026-02-15",
        "role": "100%"
      }
    ]
  },
  {
    "id": "tidal-wave",
    "rank": 6,
    "name": "Tidal Wave",
    "publisher": "OniLink",
    "verifier": "Zoink",
    "videoId": "9fsZ014qB3s",
    "description": "Drown them",
    "points": 5,
    "completions": [
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2023-09-10",
        "role": "Verifier"
      },
      {
        "name": "wPopoff",
        "country": "United States",
        "date": "2024-03-12",
        "role": "100%"
      },
      {
        "name": "Trick",
        "country": "United States",
        "date": "2024-03-08",
        "role": "100%"
      },
      {
        "name": "Taiago",
        "country": "Portugal",
        "date": "2025-06-27",
        "role": "100%"
      },
      {
        "name": "Netermind",
        "country": "United States",
        "date": "2025-11-6",
        "role": "100%"
      },
      {
        "name": "레전드아잉몰라요",
        "country": "South Korea",
        "date": "2026-04-20",
        "role": "100%"
      }

    ]
  },
  {
    "id": "green-bullet",
    "rank": 7,
    "name": "Green Bullet",
    "publisher": "cherryteam",
    "verifier": "Nickname09",
    "videoId": "JG-qcvVkZFw",
    "description": "Hosted by MinaY // Verified by Nickname09 in 105113 attempts",
    "points": 4,
    "completions": [
      {
        "name": "Nickname09",
        "country": "Russia",
        "date": "2026-06-17",
        "role": "Verifier"
      }
    
    ]
  },
  {
    "id": "orbit",
    "rank": 8,
    "name": "Orbit",
    "publisher": "MindCap",
    "verifier": "Zoink",
    "videoId": "QKcv8DkNPd0",
    "description": "",
    "points": 3,
    "completions": [
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2026-02-10",
        "role": "Verifier"
      },
      {
        "name": "dovv1n",
        "country": "Poland",
        "date": "2026-05-27",
        "role": "100%"
      },
      {
        "name": "Thelifinof",
        "country": "United States",
        "date": "2026-07-20",
        "role": "100%"
      }

    ]
  },
  {
    "id": "antarctic-lights",
    "rank": 9,
    "name": "Antarctic Lights",
    "publisher": "declanlc",
    "verifier": "Axinity",
    "videoId": "Uue4ZRhVf-I",
    "description": "The lights shine bright on a cold Antarctic night. By Declan, SkyJax, Tolstyh and Arcturus. Verified by Axinity. Good Luck...",
    "points": 2,
    "completions": [
      {
        "name": "Axinity",
        "country": "Denmark",
        "date": "2026-07-16",
        "role": "Verifier"
      },
      {
        "name": "weyolll3",
        "country": "United States",
        "date": "2026-08-21",
        "role": "100%"
      },
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2026-09-14",
        "role": "100%"
      }
    ]
  },
  {
    "id": "nullscapes",
    "rank": 10,
    "name": "Nullscapes",
    "publisher": "Kiba",
    "verifier": "Zoink",
    "videoId": "EztneTPp5CU",
    "description": "GET OUT OF MY HEAD",
    "points": 1,
    "completions": [
      {
        "name": "Zoink",
        "country": "United States",
        "date": "2024-09-03",
        "role": "Verifier"
      },
      {
        "name": "spookkd",
        "country": "United States",
        "date": "2025-10-23",
        "role": "100%"
      },
      {
        "name": "whfyre",
        "country": "Ukraine",
        "date": "2025-11-30",
        "role": "100%"
      },
      {
        "name": "Hover",
        "country": "Austria",
        "date": "2026-01-25",
        "role": "100%"
      },
      {
        "name": "Theitha",
        "country": "Panama",
        "date": "2026-05-21",
        "role": "100%"
      },
      {
        "name": "Cryostazz",
        "country": "France",
        "date": "2026-05-25",
        "role": "100%"
      },
      {
        "name": "benbotwyd",
        "country": "United States",
        "date": "2026-06-03",
        "role": "100%"
      },
      {
        "name": "SpaceRS",
        "country": "Serbia",
        "date": "2026-07-03",
        "role": "100%"
      }
    ]
  }
]
;
