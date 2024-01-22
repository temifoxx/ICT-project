import "./App.css";
import { characters } from "./MarvelData";

function App() {
  return (
    <div className="mainBody" style={{backgroundImage: `url("https://i.pinimg.com/originals/93/01/06/9301063a615bfaea6e521645be21d0e5.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div className="topHeader">
        <h1 className="header">........悪役........</h1>
        <h1 className="header">Akuyaku</h1>
        <input placeholder="Search an AKUYAKU" className="topInput" />
      </div>
      <div className="cardBody">
        {characters
        .map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img className="avatarImage" src={data.img1} alt={data.alias} />
              <h2>{data.alias}</h2>
              <p className="description">
                {data?.abilities[0]}
                <br />
                {data?.abilities[1]}
                <br />
                {data?.abilities[2]}
              </p>
              <div className="avatarInfo">
                <div className="price">
                  <ins>◘</ins>
                  <p>{data.team}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  <p>Full Name: {data.homeworld}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;