import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Bulb from "../images/bulb.png";
import Header from "../images/header.png";
import Heart from "../images/heart.png";
import Empathise from "../images/empathise.png";
import Define from "../images/define.png";
import Prototype from "../images/prototype.png";
import Ideate from "../images/ideate.png";
import { useState } from "react";
import { useEffect } from "react";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);

  const [selectedPhase, setPhase] = useState(1);

  return (
    <>
      <HeadContent>
        <div class="head">
          <div class="headImageBox">
            <img class="headImage" src={Header} />
          </div>
          <div class="headContent">
            <h1>Willkommen zu dem</h1>
            <h1>UX4Health Toolkit.</h1>
            <p>
              Eine Sammlung von Design-Thinking Methoden, die sich für
              ausgewählte Anwendungsbereiche im Kontext Digitale Gesundheit
              eignen und dir mit Tipps und Fallstudien helfen, für das
              körperliche und psychische Wohlbefinden von Menschen zu designen.
            </p>
            <div className="viewMethods">
              <Link link="/methodology">Methoden anschauen</Link>
            </div>
          </div>
        </div>
      </HeadContent>
      <MainContent>
        <div class="grid-designThinking">
          <div class="introduction">
            <h2>Der Design Thinking Prozess</h2>
            <p>
              Der Prozess, ein Problem zu identifizieren, mögliche Stakeholder
              zu verstehen, Ideen zu generieren und dann die Idee vom Prototyp
              bis zum fertigen Produkt zu entwickeln, wird Design-Thinking
              Prozess genannt. Er besteht aus fünf iterativen Phasen (Empathize,
              Define, Ideate, Prototyping, Testing), die in den folgenden
              Abschnitten genauer beschrieben sind. Iterativ bedeutet, dass
              manchmal Sprünge in vorherige Phasen nötig sind, um das Konzept
              den Bedürfnissen von möglichen Nutzer*innen noch mehr anzupassen
              und zu optimieren. Jedoch gibt es noch einige zusätzliche
              Faktoren, auf die beim Design für eHealth geachtet werden muss und
              somit sollte genug Zeit, Planung und Budget im Projekt vorhanden
              sein, um sorgfältig für das Wohlergehen von Menschen designen zu
              können.
            </p>
          </div>
          <div class="bulb">
            <img src={Bulb}></img>
          </div>
        </div>
        <div class="phase-buttons">
          <button
            onClick={() => setPhase(1)}
            opened={selectedPhase == 1 ? "true" : "false"}
          >
            Empathise
          </button>
          <button
            onClick={() => setPhase(2)}
            opened={selectedPhase == 2 ? "true" : "false"}
          >
            Define
          </button>
          <button
            onClick={() => setPhase(3)}
            opened={selectedPhase == 3 ? "true" : "false"}
          >
            Ideate
          </button>
          <button
            onClick={() => setPhase(4)}
            opened={selectedPhase == 4 ? "true" : "false"}
          >
            Prototype
          </button>
          <button
            onClick={() => setPhase(5)}
            opened={selectedPhase == 5 ? "true" : "false"}
          >
            Test
          </button>
        </div>

        <div opened={selectedPhase == 1 ? "true" : "false"} className="text1">
          {" "}
          <div class="grid-empathise">
            <div class="grid-content">
              <div class="introduction">
                <div className="numberHeadline">
                  <h1 id="number">1</h1>
                  <h2 id="headline">Empathise</h2>
                </div>
                <p id="content">
                  Um das gigantische Spektrum von unterschiedlichen Menschen für
                  eHealth zu sensibilisieren und ihre Bedürfnisse klar
                  identifizieren zu können, müssen geeignete Methoden für den
                  Designprozess gewählt werden. Damit könnt ihr möglichst
                  unvoreingenommen und empathisch herausfinden, welche Probleme
                  in welchem Kontext bei eurer Zielgruppe auftreten. In diesem
                  Schritt werden also mögliche Stakeholder*innen eures Konzeptes
                  befragt, in ihrer Umgebung und im Kontext beobachtet und
                  analysiert. Jedoch stellt es gerade in eHealth eine große
                  Herausforderung dar, manche Menschengruppen, wie z.B.
                  Senior*innen für Technologie, die sich auf Gesundheit
                  fokussiert, zu sensibilisieren. Schafft also zum Beispiel
                  durch wissenschaftliche Belege oder Kontakt mit Ärzt*innen
                  oder Therapeut*innen Vertrauen und findet weiterhin heraus,
                  was zu einer Akzeptanz bei euren Zielgruppen führen und wie
                  ihr welche Lösungen einbauen könnt.
                  <br></br>
                  <br></br>Allgemein sollte im Gesundheitskontext dabei, egal ob
                  bei Thematiken wie gesundes Leben im Alter, Physiotherapie
                  oder Psychotherapie, die Priorität darin liegen, etwas zu
                  designen, das den Menschen wirklich hilft und auf
                  wissenschaftlichen Evidenzen beruht. Ebenso sollten Du und
                  Dein Design-Team euch nach jedem Schritt fragen, ob eure
                  Konzeptideen nicht anderweitig Nachteile mit sich bringen
                  könnten und gegen ethnische Prinzipien, wie z.B. Datenschutz
                  und Privatsphäre, verstoßen könnten.
                </p>
              </div>
              <div class="heart">
                <img src={Empathise}></img>
              </div>
            </div>
            <p></p>
            <div className="beforeFooter">
              <h4 id="typical">
                Diese Methoden werden typischerweise auch verwendet:
              </h4>
              <Link link="/methodology/tagebuchstudie" id="typicalMethods">
                &bull; &nbsp; Tagebuchstudie
              </Link>
              <Link
                link="/methodology/interview-mit-experten/"
                id="typicalMethods"
              >
                &bull; &nbsp; Interviews mit Expert*innen
              </Link>
              <Link link="/methodology/extreme-users" id="typicalMethods">
                &bull; &nbsp; Extreme Users
              </Link>
              <div className="moreMethods">
                <Link link="/methodology/category/empathise">
                  Mehr Methoden
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div opened={selectedPhase == 2 ? "true" : "false"} className="text2">
          <div class="grid-define">
            <div class="grid-content">
              <div class="introduction">
                <div className="numberHeadline">
                  <h1 id="number">2</h1>
                  <h2 id="headline">Define</h2>
                </div>
                <p id="content">
                  Sobald die ersten Daten aus dem vorherigen Schritt vorliegen,
                  könnt ihr euch zuallererst mit diesen Daten vertraut machen
                  und euch gegebenenfalls schon der Analyse widmen.
                  <br></br>
                  <br></br>Es geht nun darum, mögliche Muster und
                  offensichtliche, sowie unterschwellige Bedürfnisse der
                  Stakeholder*innen zu identifizieren und sie in eine für euer
                  Team übersichtliche Form zu bringen. Wie schon der erste
                  Schritt sehr wichtig für diesen Schritt war, sind die
                  Ergebnisse, die ihr beim Definieren der Bedürfnisse eurer
                  möglichen Zielgruppen erarbeitet, essenziell für die
                  darauffolgende Arbeit und das mögliche Konzept. Seid also
                  gründlich, schaut am besten mehrmals hin und vergleicht die
                  Daten verschiedener Proband*innen miteinander. Dabei gibt es
                  vielleicht Gemeinsamkeiten oder bestimmte Unterschiede, die
                  ausschlaggebend sind. Im Gesundheitskontext ist es hier
                  besonders wichtig, dass ihr genau darauf achtet, alle
                  möglichen Gründe für bestimmtes Verhalten zu untersuchen und
                  auf alle Bedürfnisse mit euren abschließenden Erkenntnissen,
                  die ihr in den Ideate-Schritt mitnehmen wollt, einzugehen.
                  Manchmal scheinen Probleme oder Meinungen irrational und sind
                  beruhen eher auf emotionalen Fundamenten.
                </p>
              </div>
              <div class="heart">
                <img src={Define}></img>
              </div>
            </div>
            <p></p>
            <h4 id="typical">
              Diese Methoden werden typischerweise auch verwendet:
            </h4>
            <Link link="/methodology/affinity-diagram" id="typicalMethods">
              &bull; &nbsp; Affinity Diagram
            </Link>
            <Link
              link="/methodology/point-of-view-user-need-statements/"
              id="typicalMethods"
            >
              &bull; &nbsp; Point of View / User Need Statements
            </Link>
            <Link link="/methodology/personas" id="typicalMethods">
              &bull; &nbsp; Personas
            </Link>
            <div className="moreMethods">
              <Link link="/methodology/category/define">Mehr Methoden</Link>
            </div>
          </div>
        </div>
        <div opened={selectedPhase == 3 ? "true" : "false"} className="text3">
          <div class="grid-ideate">
            <div class="grid-content">
              <div class="introduction">
                <div className="numberHeadline">
                  <h1 id="number">3</h1>
                  <h2 id="headline">Ideate</h2>
                </div>
                <p id="content">
                  In diesem Schritt wird es kreativ! Nun sind eure Ideen
                  gefragt, um Lösungen für die Probleme der Stakeholder*innen
                  und Wege zu finden, ihre Bedürfnisse in euer Konzeptdesign mit
                  einfließen zu lassen. Hier geht es darum, offen für die
                  verrücktesten Ideen zu sein und dafür sollen euch Methoden
                  dienen, die Raum für kreative Vielfalt und alternative
                  Perspektiven geben können. Auch wenn ihr hier zuallererst alle
                  möglichen Ideen zur Problemlösung zulassen solltet, ist es
                  wichtig, diese Ideen mit Rücksicht auf euer vorher bereits
                  gesammeltes Wissen in diesem speziellen medizinischen Kontext
                  zu reflektieren und gegebenenfalls anzupassen oder
                  auszuschließen. Aber auch dafür gibt es geeignete Methoden,
                  die euch helfen, die Ideen aus kritischeren Perspektiven zu
                  betrachten. Falls mehrere Konzeptideen entstehen, lohnt es
                  sich, sie festzuhalten und eventuell mit geeigneten Prototype-
                  und Test-Methoden im Nachhinein zu vergleichen.
                </p>
              </div>
              <div class="heart">
                <img src={Ideate}></img>
              </div>
            </div>
            <p></p>
            <h4 id="typical">
              Diese Methoden werden typischerweise auch verwendet:
            </h4>
            <Link link="/methodology/storyboards" id="typicalMethods">
              &bull; &nbsp; Storyboards
            </Link>
            <Link link="/methodology/rollenspiel" id="typicalMethods">
              &bull; &nbsp; Rollenspiel
            </Link>
            <Link link="/methodology/worst-possible-idea" id="typicalMethods">
              &bull; &nbsp; Worst Possible Idea
            </Link>
            <div className="moreMethods">
              <Link link="/methodology/category/ideate">Mehr Methoden</Link>
            </div>
          </div>
        </div>
        <div opened={selectedPhase == 4 ? "true" : "false"} className="text4">
          <div class="grid-prototype">
            <div class="grid-content">
              <div class="introduction">
                <div className="numberHeadline">
                  <h1 id="number">4</h1>
                  <h2 id="headline">Prototype</h2>
                </div>
                <p id="content">
                  Nachdem ihr Ideen für mögliche Problemlösungen gesammelt habt
                  und schon ein bis mehrere grobe Konzepte habt, geht es in die
                  Phase, in der ihr einen ersten Prototypen baut oder eure Ideen
                  anderweitig passend darstellt, um es dann in der Test-Phase
                  unter mögliche Nutzer*innen zu bringen. Dabei können zum
                  Beispiel bloß Imitationen der geplanten User Experience
                  gebastelt, Skizzen angefertigt oder sogar schon eine App
                  mithilfe von Prototyping-Software erstellt werden. Prototypen
                  können auch eurem Team selbst helfen, das Konzept für euch
                  greifbarer zu machen und eventuelle Lücken zu erkennen, sowie
                  eine Struktur in die Ideen zu bringen. Jedoch ist es auch hier
                  wieder sehr wichtig, darauf zu achten, dass ihr euch in einem
                  gesundheitlichen Kontext befindet und ihr schlimmstenfalls
                  Menschen schaden könntet. Überprüft also gründlich, ob euer
                  Prototyp für Proband*innen sicher ist.
                </p>
              </div>
              <div class="heart">
                <img src={Prototype}></img>
              </div>
            </div>
            <p></p>
            <h4 id="typical">
              Diese Methoden werden typischerweise auch verwendet:
            </h4>
            <Link link="/methodology/speed-dating" id="typicalMethods">
              &bull; &nbsp; Speed Dating
            </Link>
            <div className="moreMethods">
              <Link link="/methodology/category/prototype">Mehr Methoden</Link>
            </div>
          </div>
        </div>
        <div opened={selectedPhase == 5 ? "true" : "false"} className="text5">
          <div class="grid-test">
            <div class="grid-content">
              <div class="introduction">
                <div className="numberHeadline">
                  <h1 id="number">5</h1>
                  <h2 id="headline">Testing</h2>
                </div>
                <p id="content">
                  Solltet ihr mit euren Ergebnissen der Prototyping-Phase
                  zufrieden sein, wird es nun Zeit für die Testing-Phase. In
                  dieser ist vor allem das Feedback der zukünftigen Nutzer
                  gefragt – diese sollen direkt mit dem Prototypen interagieren.
                  Dabei ist es wichtig, die Befragung in einer Umgebung
                  durchzuführen, die dem zukünftigen Anwendungsbereich möglichst
                  nahekommt, damit die Nutzer sich gut in den tatsächlichen
                  Gebrauch eures Produkts reinversetzen können. Überlegt euch
                  vor der Durchführung gut, wie ihr den Test dokumentieren wollt
                  und wie ihr das Feedback der Nutzer einholen wollt. Dabei
                  solltet ihr die Interaktion nicht unterbrechen, aber dennoch
                  flexibel genug sein, um auf Fragen, Schwierigkeiten oder
                  Feedback reagieren zu können. Die Testphase ist die Letzte des
                  Design-Thinking-Prozesses, jedoch bedeutet sie nicht unbedingt
                  das Ende dessen. Design Thinking ist ein iterativer und
                  flexibler Prozess, der auch Rückschritte erlaubt, falls es
                  durch neue Erkenntnisse notwendig wird. Sollte der Prototyp,
                  den ihr testet, den Nutzern Schwierigkeiten beim Ausführen der
                  Anforderungen machen, muss dieser verbessert oder sogar eine
                  Alternative für ihn gefunden werden. Auch können in der
                  Testing-Phase neue Probleme ans Licht kommen, die dann
                  definiert und gelöst werden müssen.
                </p>
              </div>
              <div class="heart heartTest">
                <img src={Heart}></img>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </MainContent>
    </>
  );
};

export default connect(Home);

const HeadContent = styled.div`
  .head {
    top: 40px;
    height: 500px;
    overflow: hidden;
    position: relative;
    content: left;
    background-color: black;
  }

  .headImage {
    opacity: 0.3;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .headContent {
    margin-top: 60px;
    position: absolute;
    width: 80%;
  }

  h1 {
    margin-left: 64px;
    font-size: 54px;
    color: white;
  }

  p {
    margin: 40px 0 20px 64px;
    font-size: 18px;
    color: white;
    opacity: 1;
  }

  .viewMethods {
    margin-top: 70px;
    margin-left: 64px;
  }

  .viewMethods a {
    border: 4px solid #84ffdd;
    background-color: transparent;
    color: white;
    padding: 16px 24px 16px 24px;
    font-size: 1.1em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
  }

  .viewMethods a:hover {
    background-color: #84ffdd;
    color: white;
  }

  @media only screen and (max-width: 1110px) {
    .head {
      text-align: center;
      color: white;
    }

    .headContent {
      margin-top: 60px;
      position: relative;
      width: 90%;
    }
  }

  @media only screen and (max-width: 800px) {
    .head {
      background-color: white;
      top: 40px;
      height: 800px;
      overflow: hidden;
      content: center;
    }

    h1 {
      margin-left: 64px;
      font-size: 30px;
      color: black;
    }

    p {
      margin: 40px 0 20px 64px;
      font-size: 14px;
      color: black;
      opacity: 1;
    }

    .headImageBox {
      position: relative;
      width: 450px;
      height: 300px;
      background-color: black;
      display: block;
      margin: 0 auto;
    }

    .headImage {
      position: relative;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    .headContent {
      margin-top: 60px;
      position: relative;
      width: 90%;
    }

    .viewMethods a {
      border: 4px solid #84ffdd;
      background-color: transparent;
      color: darkgrey;
      padding: 16px 24px 16px 24px;
      font-size: 1.1em;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

const MainContent = styled.div`
  @media only screen and (max-width: 1110px) {
    .introduction {
      overflow: auto;
      word-wrap: break-word;
      overflow-wrap: normal;
    }

    *content {
      overflow: auto;
      word-wrap: break-word;
      overflow-wrap: normal;
    }

    p {
      overflow: auto;
      word-wrap: break-word;
      overflow-wrap: normal;
    }

    button {
      width: 17% !important;
    }
    .phase-buttons {
      display: flex;
      justify-content: space-between;
      padding-top: 10%;
    }
  }

  @media only screen and (max-width: 800px) {
    .grid-designThinking {
      flex-direction: column-reverse !important;
      align-items: center;
      margin-top: 0 !important;
      padding: 0 0 2vw 2vw;
    }
    .bulb {
      max-width: 200px;
    }
    .introduction {
      text-align: center;
    }
    .phase-buttons {
      flex-direction: column;
      width: 100%;
      gap: 2px !important;
      align-items: center;
    }
    button {
      padding: 30px !important;
      margin-bottom: 20px !important;
      width: 50% !important;
    }

    h1 {
      font-size: 40px !important;
    }

    h2 {
      font-size: 40px !important;
    }

    .numberHeadline {
      display: flex;
      justify-content: center !important;
      gap: 20px;
      align-items: baseline;
    }

    .grid-content {
      display: flex;
      flex-direction: column-reverse !important;
      gap: 0px !important;
    }

    .heart {
      max-width: 350px;
      margin-top: 4em !important;
      padding: 0;
    }

    #content {
      padding: 0 0 20px 20px;
    }

    .beforeFooter {
      text-align: center !important;
      items-align: center !important;
    }
  }

  .numberHeadline h1 {
    padding-right: 5 px !important;
    position: relative !important;
  }

  .phase-buttons {
    display: flex;
    justify-content: space-between;
    padding-top: 10%;
    gap: 10px;
  }

  .number {
    position: relative;
  }

  .headline {
    position: relative;
  }

  .numberHeadline {
    display: flex;
    justify-content: start;
    gap: 20px;
    align-items: baseline;
    font-size: 30px;
    width: 100%;
  }

  button {
    background: white;

    color: black;

    border: thick solid #2c2378;

    width: 155px;

    height: 69;

    padding: 1em;

    margin-bottom: 75px;

    font-size: 18px;

    line-height: 100%;

    font-weight: bold;

    text-align: center;
  }

  button[opened="true"] {
    background-image: linear-gradient(to top, white 0%, #2c2399);
    color: black;
  }

  div[opened="false"] {
    display: none;
  }

  button:hover {
    background-image: linear-gradient(to top, white 0%, #2c2399);
  }

  .grid-designThinking {
    display: flex;
    flex-direction: row;
    margin-top: 10vh;
    margin-bottom: 1vh;
    width: 100%;
  }

  .grid-content {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
  }

  .grid-button [opened="false"] {
    opacity: 0.4;
  }

  .grid-empathise {
    margin-bottom: 60px;
  }

  .grid-define {
    margin-bottom: 60px;
  }

  .grid-ideate {
    margin-bottom: 60px;
  }

  .grid-prototype {
    margin-bottom: 60px;
  }

  .grid-test {
    margin-bottom: 60px;
  }

  .heartTest {
    width: 60%;
    margin-left: 30px;
  }

  .bulb {
    transform: rotate(-25deg);
    padding: 2%;
  }

  .heart {
    margin-top: 7em;
    min-width: 300px;
  }

  .moreMethods {
    margin-top: 40px;
  }

  .moreMethods a {
    border: 4px solid #84ffdd;
    background-color: transparent;
    color: black;
    padding: 16px 24px 16px 24px;
    font-size: 1.1em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
  }

  .moreMethods a:hover {
    background-color: #84ffdd;
    color: black;
  }

  #number {
    color: darkblue;
    font-size: 70px;
  }

  #content,
  #typical {
    margin-top: 1em;
  }

  #typicalMethods {
    margin-left: 10px;
    margin-top: 0.5em;
    text-decoration: none;
  }
`;
