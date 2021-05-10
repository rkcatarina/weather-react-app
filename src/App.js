import "./App.css";
import Form from "./Form";
import Numbers from "./Numbers";
import CurrentDay from "./CurrentDay";
import CurrentCity from "./CurrentCity";
import Sources from "./Sources";

export default function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SheCodes</title>
        <script
          src="https://kit.fontawesome.com/57cd5b8ee8.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="src/style.css" />
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      </head>
      <body>
        <div className="container">
          <header>
            <h1>Weather App</h1>
          </header>
          <hr />
          <div className="row">
            <div className="col-8">
              <div className="card search">
                <div className="card-body">
                  <Form />
                </div>
              </div>
            </div>
            <div className="col-4">
              <CurrentCity />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-8">
              <div className="card">
                <div className="card-body">
                  <Numbers />
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <CurrentDay />
            </div>
            <div className="col-sm-2 emoji">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Clear"
                id="icon"
                width="120"
                class="float-left"
              />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="weather-forecast" id="weather-forecast"></div>

          <br />
          <hr />
          <Sources/>
        </div>
        <script src="src/script.js"></script>
      </body>
    </div>
  );
}
