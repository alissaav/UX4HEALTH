import React, { useState } from "react";
import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "./featured-media";
import Head from "./head";
import MethodList from "./methodList";
import MethodTile from "./methodTile";

import ListButton from "../images/listviewButton.png";
import TileButton from "../images/tileviewButton.png";

import UmgebungCategory from "../images/umgebung.png";
import SchwierigkeitCategory from "../images/schwierigkeit.png";
import DauerCategory from "../images/dauer.png";
import ZielgruppeCategory from "../images/zielgruppe.png";
import AnzahlCategory from "../images/users.png";
import TeilnehmerCategory from "../images/teilnehmer.png";
import BedingungenCategory from "../images/bedingungen.png";

//Übersichstsseite
const List = ({ state, actions }) => {
  // //Wordpress Daten
  const data = state.source.get(state.router.link);

  //Property und Setter zum Ändern der Ansicht (Tileview = Kachelansicht)
  const [tileviewActive, setTileview] = useState({
    //Standardmäßig Kachelansicht
    value: true,
  });

  const [show, setShow] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [umgebung, setUmgebung] = useState(null);
  const [zielgruppe, setZielgruppe] = useState(null);
  const [anzahl, setAnzahl] = useState(null);
  const [bedingung, setBedingung] = useState(null);
  const [teilnehmer, setTeilnehmer] = useState(null);
  const [time, setTime] = useState(null);
  const [vorbereitung, setVorbereitung] = useState(null);
  const [analyse, setAnalyse] = useState(null);

  let handleDiff = (event) => {
    const newDifficulty = event.target.value;
    console.log(newDifficulty);

    if (newDifficulty === difficulty) {
      setDifficulty(null);
    } else {
      setDifficulty(newDifficulty);
    }
  };

  let handleUmgebung = (event) => {
    const newUmgebung = event.target.value;
    console.log(newUmgebung);

    if (newUmgebung === umgebung) {
      setUmgebung(null);
    } else {
      setUmgebung(newUmgebung);
    }
  };

  let handleZielgruppe = (event) => {
    const newZielgruppe = event.target.value;
    console.log(newZielgruppe);

    if (newZielgruppe === zielgruppe) {
      setZielgruppe(null);
    } else {
      setZielgruppe(newZielgruppe);
    }
  };

  let handleAnzahl = (event) => {
    const newAnzahl = event.target.value;
    console.log(newAnzahl);

    if (newAnzahl === anzahl) {
      setAnzahl(null);
    } else {
      setAnzahl(newAnzahl);
    }
  };

  let handleBedingung = (event) => {
    const newBedingung = event.target.value;
    console.log(newBedingung);

    if (newBedingung === bedingung) {
      setBedingung(null);
    } else {
      setBedingung(newBedingung);
    }
  };

  let handleTeilnehmer = (event) => {
    const newTeilnehmer = event.target.value;
    console.log(newTeilnehmer);

    if (newTeilnehmer === teilnehmer) {
      setTeilnehmer(null);
    } else {
      setTeilnehmer(newTeilnehmer);
    }
  };

  let handleTime = (event) => {
    const newTime = event.target.value;
    console.log(newTime);

    if (newTime === time) {
      setTime(null);
    } else {
      setTime(newTime);
    }
  };

  let handleVorbereitung = (event) => {
    const newVorbereitung = event.target.value;
    console.log(newVorbereitung);

    if (newVorbereitung === vorbereitung) {
      setVorbereitung(null);
    } else {
      setVorbereitung(newVorbereitung);
    }
  };

  let handleAnalyse = (event) => {
    const newAnalyse = event.target.value;
    console.log(newAnalyse);

    if (newAnalyse === analyse) {
      setAnalyse(null);
    } else {
      setAnalyse(newAnalyse);
    }
  };

  //POPULAR METHODS
  //Sind im Moment noch hard gecodet, hier die Methoden festlegen:
  let firstPost =
    state.source["post"][
      state.source.get("/methodology/methode-interview/").id
    ];
  let secondPost =
    state.source["post"][
      state.source.get("/methodology/methode-interview/").id
    ];

  //Filterbedingungen
  const filterTags = (item, filterTagName) => {
    //wenn der state gespeichert, also nicht leer
    if (filterTagName) {
      //flag
      let foundTag = false;

      const post = state.source[item.type][item.id];

      //durch alle Tags laufen
      for (let tag of post.tags) {
        //wenn der Tag gleich dem im state
        if (state.source.tag[tag].name === filterTagName) {
          //flag true setzen
          foundTag = true;
          break;
        }
      }
      return foundTag;
    } else {
      return true;
    }
  };

  return (
    <>
      <Head></Head>

      <PopularMethods>
        <h3>Beliebte Methoden</h3>
        <div>
          <MethodTile key={1} post={firstPost}></MethodTile>
          <MethodTile key={2} post={secondPost}></MethodTile>
        </div>
      </PopularMethods>

      <StyledDiv>
        <div className="container">
          {state.router.link === "/methodology/" ? (
            <h3 className="headerFlex">Alle Methoden</h3>
          ) : null}
          {state.router.link === "/methodology/page/2/" ? (
            <h3 className="headerFlex">Alle Methoden</h3>
          ) : null}

          {state.router.link === "/methodology/category/empathise/" ? (
            <h3 className="headerFlex">Empathise Methoden</h3>
          ) : null}
          {state.router.link === "/methodology/category/define/" ? (
            <h3 className="headerFlex">Define Methoden</h3>
          ) : null}
          {state.router.link === "/methodology/category/prototype/" ? (
            <h3 className="headerFlex">Prototype Methoden</h3>
          ) : null}
          {state.router.link === "/methodology/category/test/" ? (
            <h3 className="headerFlex">Test Methoden</h3>
          ) : null}
          {state.router.link === "/methodology/category/ideate/" ? (
            <h3 className="headerFlex">Idiate Methoden</h3>
          ) : null}
          <button
            className={show ? "modal_active" : "" + "filterBtn" + "headerFlex"}
            onClick={() => setShow(!show)}
          >
            Filter
          </button>

          {/* Obere Leiste zum Ändern der Ansicht */}
          <Buttons>
            <img
              src={TileButton}
              onClick={() => setTileview(true)}
              aria-current={tileviewActive ? "true" : "false"}
            ></img>
            <img
              src={ListButton}
              onClick={() => setTileview(false)}
              aria-current={tileviewActive ? "false" : "true"}
            ></img>
          </Buttons>
        </div>
        {show ? (
          <>
            <div className="modal">
              <div className="modalBtn">
                <div className="containerCategory">
                  <img src={SchwierigkeitCategory} />
                  <p className="filterCategory">Schwierigkeit</p>
                </div>
                <button
                  id="leicht"
                  className={
                    difficulty === "leicht" ? "filter-selected" : "" + "btn"
                  }
                  name="difficulty"
                  value="leicht"
                  onClick={handleDiff}
                >
                  {" "}
                  Leicht{" "}
                </button>
                <button
                  id="fortgeschritten"
                  className={
                    difficulty === "fortgeschritten"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="fortgeschritten"
                  value="medium"
                  onClick={handleDiff}
                >
                  {" "}
                  Fortgeschritten{" "}
                </button>
                <button
                  id="schwer"
                  className={
                    difficulty === "schwer" ? "filter-selected" : "" + "btn"
                  }
                  name="difficulty"
                  value="schwer"
                  onClick={handleDiff}
                >
                  {" "}
                  Schwer{" "}
                </button>
              </div>

              <div className="modalBtn">
                <div className="containerCategory">
                  <img src={UmgebungCategory} />
                  <p className="filterCategory">Umgebung</p>
                </div>
                <button
                  className={
                    umgebung === "stationär" ? "filter-selected" : "" + "btn"
                  }
                  name="umgebung"
                  value="stationär"
                  onClick={handleUmgebung}
                >
                  {" "}
                  Stationär{" "}
                </button>
                <button
                  className={
                    umgebung === "teilstationär"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="umgebung"
                  value="teilstationär"
                  onClick={handleUmgebung}
                >
                  {" "}
                  Teilstationär{" "}
                </button>
                <button
                  className={
                    umgebung === "häuslich" ? "filter-selected" : "" + "btn"
                  }
                  name="umgebung"
                  value="häuslich"
                  onClick={handleUmgebung}
                >
                  {" "}
                  Häuslich{" "}
                </button>
                <button
                  className={
                    umgebung === "mobil" ? "filter-selected" : "" + "btn"
                  }
                  name="umgebung"
                  value="mobil"
                  onClick={handleUmgebung}
                >
                  {" "}
                  Mobil{" "}
                </button>
                <button
                  className={
                    umgebung === "Umgebung alle"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="umgebung"
                  value="Umgebung alle"
                  onClick={handleUmgebung}
                >
                  {" "}
                  Alle{" "}
                </button>
              </div>

              <div className="modalBtn">
                <div className="containerCategory">
                  <img src={ZielgruppeCategory} />
                  <p className="filterCategory">Zielgruppe</p>
                </div>
                <button
                  className={
                    zielgruppe === "Wissenschaftler*innen"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="zielgruppe"
                  value="Wissenschaftler*innen"
                  onClick={handleZielgruppe}
                >
                  {" "}
                  Wissenschaftler*innen{" "}
                </button>
                <button
                  className={
                    zielgruppe === "Patien*innen"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="zielgruppe"
                  value="Patien*innen"
                  onClick={handleZielgruppe}
                >
                  {" "}
                  Patien*innen{" "}
                </button>
                <button
                  className={
                    zielgruppe === "Ärzt*innen" ? "filter-selected" : "" + "btn"
                  }
                  name="zielgruppe"
                  value="Ärzt*innen"
                  onClick={handleZielgruppe}
                >
                  {" "}
                  Ärzt*innen{" "}
                </button>
                <button
                  className={
                    zielgruppe === "Senior*innen"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="zielgruppe"
                  value="Senior*innen"
                  onClick={handleZielgruppe}
                >
                  {" "}
                  Senior*innen{" "}
                </button>
                <button
                  className={
                    zielgruppe === "Bürger*innen"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="zielgruppe"
                  value="Bürger*innen"
                  onClick={handleZielgruppe}
                >
                  {" "}
                  Bürger*innen{" "}
                </button>
                <button
                  className={
                    zielgruppe === "Therapeut*innen"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="zielgruppe"
                  value="Therapeut*innen"
                  onClick={handleZielgruppe}
                >
                  {" "}
                  Therapeut*innen{" "}
                </button>
                <button
                  className={
                    zielgruppe === "Kinder" ? "filter-selected" : "" + "btn"
                  }
                  name="zielgruppe"
                  value="Kinder"
                  onClick={handleZielgruppe}
                >
                  {" "}
                  Kinder{" "}
                </button>
                <button
                  className={
                    zielgruppe === "Zielgruppe alle"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="zielgruppe"
                  value="Zielgruppe alle"
                  onClick={handleZielgruppe}
                >
                  {" "}
                  Alle{" "}
                </button>
              </div>

              <div className="modalBtn">
                <div className="containerCategory">
                  <img src={AnzahlCategory} />
                  <p className="filterCategory">Probandenanzahl</p>
                </div>
                <button
                  className={
                    anzahl === "0 Probanden" ? "filter-selected" : "" + "btn"
                  }
                  name="anzahl"
                  value="0 Probanden"
                  onClick={handleAnzahl}
                >
                  {" "}
                  0{" "}
                </button>
                <button
                  className={
                    anzahl === "1-4 Probanden" ? "filter-selected" : "" + "btn"
                  }
                  name="anzahl"
                  value="1-4 Probanden"
                  onClick={handleAnzahl}
                >
                  {" "}
                  1-4{" "}
                </button>
                <button
                  className={
                    anzahl === "4-12 Probanden" ? "filter-selected" : "" + "btn"
                  }
                  name="anzahl"
                  value="4-12 Probanden"
                  onClick={handleAnzahl}
                >
                  {" "}
                  4-12{" "}
                </button>
                <button
                  className={
                    anzahl === ">12 Probanden" ? "filter-selected" : "" + "btn"
                  }
                  name="anzahl"
                  value=">12 Probanden"
                  onClick={handleAnzahl}
                >
                  {" "}
                  mehr als 12{" "}
                </button>
              </div>

              <div className="modalBtn">
                <div className="containerCategory">
                  <img src={BedingungenCategory} />
                  <p className="filterCategory">Bedingungen</p>
                </div>
                <button
                  className={
                    bedingung === "remote" ? "filter-selected" : "" + "btn"
                  }
                  name="bedingung"
                  value="remote"
                  onClick={handleBedingung}
                >
                  {" "}
                  remote{" "}
                </button>
                <button
                  className={
                    bedingung === "vor Ort" ? "filter-selected" : "" + "btn"
                  }
                  name="bedingung"
                  value="vor Ort"
                  onClick={handleBedingung}
                >
                  {" "}
                  vor Ort{" "}
                </button>
                <button
                  className={
                    bedingung === "Bedingungen alle"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="bedingung"
                  value="Bedingungen alle"
                  onClick={handleBedingung}
                >
                  {" "}
                  alle{" "}
                </button>
              </div>

              <div className="modalBtn">
                <div className="containerCategory">
                  <img src={TeilnehmerCategory} />
                  <p className="filterCategory">Teilnehmende</p>
                </div>
                <button
                  className={
                    teilnehmer === "Design-Team"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="teilnehmer"
                  value="Design-Team"
                  onClick={handleTeilnehmer}
                >
                  {" "}
                  Design-Team{" "}
                </button>
                <button
                  className={
                    teilnehmer === "Probanden" ? "filter-selected" : "" + "btn"
                  }
                  name="teilnehmer"
                  value="Probanden"
                  onClick={handleTeilnehmer}
                >
                  {" "}
                  Probanden{" "}
                </button>
                <button
                  className={
                    teilnehmer === "Teilnehmende alle"
                      ? "filter-selected"
                      : "" + "btn"
                  }
                  name="teilnehmer"
                  value="Teilnehmende alle"
                  onClick={handleTeilnehmer}
                >
                  {" "}
                  Alle{" "}
                </button>
              </div>

              {/* Filter DAUER */}
              <div className="modalBtn">
                <div className="containerCategory">
                  <img src={DauerCategory} />
                  <p className="filterCategory">Dauer</p>
                </div>
                <div className="modalBtn modal-dauer">
                  <div className="modalBtn">
                    <p className="filterCategory">Vorbereitung</p>
                    <button
                      className={
                        vorbereitung === "Vorb. 0-60Min"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="vorbereitung"
                      value="Vorb. 0-60Min"
                      onClick={handleVorbereitung}
                    >
                      {" "}
                      bis 60 Min{" "}
                    </button>
                    <button
                      className={
                        vorbereitung === "Vorb. 1-12Stunden"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="vorbereitung"
                      value="Vorb. 1-12Stunden"
                      onClick={handleVorbereitung}
                    >
                      {" "}
                      1-12 Stunden{" "}
                    </button>
                    <button
                      className={
                        vorbereitung === "Vorb. 1Tag"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="vorbereitung"
                      value="Vorb. 1Tag"
                      onClick={handleVorbereitung}
                    >
                      {" "}
                      1 Tag{" "}
                    </button>
                    <button
                      className={
                        vorbereitung === "Vorb. 2-7Tage"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="vorbereitung"
                      value="Vorb. 2-7Tage"
                      onClick={handleVorbereitung}
                    >
                      {" "}
                      2-7 Tage{" "}
                    </button>
                    <button
                      className={
                        vorbereitung === "Vorb. 1-2Wochen"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="vorbereitung"
                      value="Vorb. 1-2Wochen"
                      onClick={handleVorbereitung}
                    >
                      {" "}
                      1-2 Wochen{" "}
                    </button>
                  </div>
                  <div className="modalBtn">
                    <p className="filterCategory">Durchführung</p>
                    <button
                      className={
                        time === "Durchf. 0-60Min"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="time"
                      value="Durchf. 0-60Min"
                      onClick={handleTime}
                    >
                      {" "}
                      bis 60 Min{" "}
                    </button>
                    <button
                      className={
                        time === "Durchf. 1-6Stunden"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="time"
                      value="Durchf. 1-6Stunden"
                      onClick={handleTime}
                    >
                      {" "}
                      1-6 Stunden
                    </button>
                    <button
                      className={
                        time === "Durchf. 6-24Stunden"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="time"
                      value="Durchf. 6-24Stunden"
                      onClick={handleTime}
                    >
                      {" "}
                      6-24 Stunden
                    </button>
                    <button
                      className={
                        time === "Durchf. 1-7Tage"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="time"
                      value="Durchf. 1-7Tage"
                      onClick={handleTime}
                    >
                      {" "}
                      1-7 Tage{" "}
                    </button>
                    <button
                      className={
                        time === "Durchf. 1-6Wochen"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="time"
                      value="Durchf. 1-6Wochen"
                      onClick={handleTime}
                    >
                      {" "}
                      1-6 Wochen{" "}
                    </button>
                  </div>
                  <div className="modalBtn">
                    <p className="filterCategory">Analyse</p>
                    <button
                      className={
                        analyse === "Analyse 15"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="analyse"
                      value="15"
                      onClick={handleAnalyse}
                    >
                      {" "}
                      5 Stunden{" "}
                    </button>
                    <button
                      className={
                        analyse === "Analyse 30"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="analyse"
                      value="30"
                      onClick={handleAnalyse}
                    >
                      {" "}
                      10 Stunden{" "}
                    </button>
                    <button
                      className={
                        analyse === "Analyse 1-6Stunden"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="analyse"
                      value="Analyse 1-6Stunden"
                      onClick={handleAnalyse}
                    >
                      {" "}
                      1-6 Stunden{" "}
                    </button>
                    <button
                      className={
                        analyse === "Analyse 6-24Stunden"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="analyse"
                      value="Analyse 6-24Stunden"
                      onClick={handleAnalyse}
                    >
                      {" "}
                      6-24 Stunden{" "}
                    </button>
                    <button
                      className={
                        analyse === "Analyse 2-7Tage"
                          ? "filter-selected"
                          : "" + "btn"
                      }
                      name="analyse"
                      value="Analyse 2-7Tage"
                      onClick={handleAnalyse}
                    >
                      {" "}
                      2-7 Tage{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </StyledDiv>

      <Item>
        {data.items
          .filter((item) => {
            //Aufruf Filterbedingungen
            let selected = filterTags(item, difficulty);

            //weitere Filter
            selected =
              selected &&
              filterTags(item, time) &&
              filterTags(item, vorbereitung) &&
              filterTags(item, analyse) &&
              filterTags(item, umgebung) &&
              filterTags(item, zielgruppe) &&
              filterTags(item, anzahl) &&
              filterTags(item, bedingung) &&
              filterTags(item, teilnehmer);

            return selected;
          })

          .map((item) => {
            const post = state.source[item.type][item.id];
            const tags = post.tags;

            let tag = "";
            tags.forEach((element) => {
              tag += "#" + state.source.tag[element].name + "   ";
            });

            return (
              <>
                {/* 
                Einzelne Methodeneinträge ausgelagert in eigene Komponenten
                Aufrufen mit dem post objekt, das gerendet werden soll
                */}

                {/* Kachelansicht */}
                {tileviewActive && (
                  <MethodTile key={item.id} post={post}></MethodTile>
                )}
                {/* Breite "normale" Listenansicht */}
                {!tileviewActive && (
                  <MethodList key={item.id} post={post}></MethodList>
                )}
              </>
            );
          })}
      </Item>
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous);
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next);
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </>
  );
  // }
  // else{

  //   return(
  //     <p>Seite nicht gefunden</p>
  //   )

  // }
};

//Styles für die Leiste zum Ändern der Ansicht
const Buttons = styled.div`
  padding-top: 10px;
  text-align: right;

  h3 {
    display: inline;
    text-align: left;
    float: left;
    line-height: 1.5em;
    font-size: 1.5em;
    padding-left: 10px;
  }

  img {
    display: inline-block;
    cursor: pointer;
    height: 25px;
  }

  img[aria-current="false"] {
    opacity: 0.4;
  }

  img:nth-of-type(2) {
    padding-left: 5px;
    vertical-align: bottom;
  }

  img:nth-of-type(1) {
    padding-left: 5px;
    margin-top: 5px;
    vertical-align: bottom;
  }
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const PopularMethods = styled.div`
  h3 {
    margin-top: 50px;
    line-height: 1.5em;
    font-size: 1.5em;
    padding-left: 10px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledDiv = styled.div`
  h3 {
    float: left;
    margin-top: 10px;
    margin-left: 5px;
  }

  .filterBtn {
    margin-left: 70%;
  }

  .modal {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    padding-left: 15px;
    background-color: #eeeeee;
    border-radius: 10px;
  }

  button {
    background-color: #b5b5b5;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    transition-duration: 0.4s;
    margin: 10px 10px 0px 0px;
    border-radius: 5px;
  }

  .modalBtn {
    margin: 0px 25px 10px 0px;
  }

  .modal-dauer {
    display: flex;
    padding: 10px;
  }

  .btn {
    background-color: #b5b5b5;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    transition-duration: 0.4s;
    border-radius: 5px;
  }

  button:hover {
    background-color: #5a48f3;
    color: white;
  }

  .containerCategory {
    display: flex;
    margin-bottom: 5px;
  }

  .containerCategory img {
    margin-right: 5px;
    width: 25px;
  }

  .filterCategory {
    margin: 0;
  }

  .modal_active {
    background-color: #5a48f3;
  }

  .filter-selected {
    background-color: #5a48f3;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .headerFlex {
    flex: 50%;
    margin-bottom: 10px;
  }
`;

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`;

export default connect(List);
