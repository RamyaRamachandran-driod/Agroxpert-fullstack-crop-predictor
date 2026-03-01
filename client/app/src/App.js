import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";

function App() {
  const [district, setDistrict] = useState("TIRUPPUR"); //removed district
  const [season, setSeason] = useState("Kharif");

  const [crops, setCrops] = useState([]);

  const sendData = async () => {
    await fetch("/getcrop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        district,
        season,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCrops(res);
      });
  };

  const districts0 = [
    "TIRUPPUR",
    "TIRUVANNAMALAI",
    "TIRUCHIRAPPALLI",
    "PUDUKKOTTAI",
    "SALEM",
    "ARIYALUR",
    "KANCHIPURAM",
    "NAGAPATTINAM",
    "TIRUNELVELI",
    "PERAMBALUR",
    "KRISHNAGIRI",
    "THE NILGIRIS",
    "COIMBATORE",
    "THIRUVARUR",
    "VELLORE",
    "DINDIGUL",
    "MADURAI",
    "KARUR",
    "SIVAGANGA",
    "CUDDALORE",
    "THENI",
    "KANNIYAKUMARI",
    "RAMANATHAPURAM",
    "DHARMAPURI",
    "NAMAKKAL",
    "THIRUVALLUR",
    "ERODE",
    "TUTICORIN",
    "THANJAVUR",
    "VIRUDHUNAGAR",
    "VILLUPURAM",
  ];

  const districts = districts0.sort();

  const seasons = ["Kharif", "Rabi", "Whole Year"];

  return (
    <div className="App">
      <h1>AgroXpert</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        <select
          name="district"
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
        >
          {districts.map((district, key) => (
            <option value={district} key={key}>
              {district.charAt(0) + district.slice(1).toLowerCase()}
            </option>
          ))}
        </select>

        <select
          name="season"
          onChange={(e) => {
            setSeason(e.target.value);
          }}
        >
          {seasons.map((season, key) => (
            <option value={season} key={key}>
              {season}
            </option>
          ))}
        </select>
        <button>Search Crops</button>
      </form>

      <Chart list={crops} />
    </div>
  );
}

export default App;
