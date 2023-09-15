// Example Data
const surveyURL = "https://live-api.redem.io/survey/create"
const surveyBody =
  {
    "title": "Live Survey 1",
    "numberOfQuestions": 4,
    "dataPointMetadata": [
      {
        "dataPointIdentifier": "DP1",
        "dataPointType": "PROJECTIVE_QUESTION",
        "algorithms": {
          "PS": true,
          "CS": true,
          "TS": false,
          "IBS": false,
          "OES": false
        },
        "namesOfAnswers": [
          "1",
          "2",
          "3",
          "4"
        ],
        "numberOfAnswers": 4
      },
      {
        "dataPointIdentifier": "DP2",
        "dataPointType": "TIMESTAMP",
        "algorithms": {
          "PS": false,
          "CS": false,
          "TS": true,
          "IBS": false,
          "OES": false
        }
      },
      {
        "dataPointIdentifier": "DP3",
        "dataPointType": "ITEMBATTERY",
        "algorithms": {
          "PS": false,
          "CS": false,
          "TS": false,
          "IBS": true,
          "OES": false
        },
        "numberOfItems": 10
      },
      {
        "dataPointIdentifier": "DP4",
        "dataPointType": "ITEMBATTERY",
        "algorithms": {
          "PS": false,
          "CS": false,
          "TS": false,
          "IBS": true,
          "OES": false
        },
        "numberOfItems": 8
      },
      {
        "dataPointIdentifier": "DP5",
        "dataPointType": "OPEN_ENDED",
        "algorithms": {
          "PS": false,
          "CS": false,
          "TS": false,
          "IBS": false,
          "OES": true
        },
        "questionTitle": "OES Question Title",
        "enableContextCheck": true,
        "keywords": [
          "keyword1",
          "keyword2",
          "keyword3"
        ],
        "allowedLanguages": [
          "en",
          "de"
        ]
      }
    ],
    "cleaningSettings": [
      {
        "key": "R",
        "isEnable": true,
        "threshold": 60
      },
      {
        "key": "PS",
        "isEnable": false,
        "threshold": 0
      },
      {
        "key": "CS",
        "isEnable": false,
        "threshold": 0
      },
      {
        "key": "TS",
        "isEnable": true,
        "threshold": 20
      },
      {
        "key": "IBS",
        "isEnable": false,
        "threshold": 0
      },
      {
        "key": "OES",
        "isEnable": true,
        "threshold": 40
      }
    ]
  }
const magicKey = "XXX"


// Example POST method implementation:
async function testIntegration(url = "", data = {},magicKey) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "magic_key": magicKey
    },
    // redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

testIntegration(
  surveyURL,
surveyBody,
magicKey
).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});