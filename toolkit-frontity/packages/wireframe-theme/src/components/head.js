import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

import HeroBild from "../images/hero-methodology-overview.jpg";
import HeroBildEmpathise from "../images/herobild-empathise.jpg";
import HeroBildDefine from "../images/hero-define-phase.jpg";
import HeroBildPrototype from "../images/hero-prototyping-phase.jpg";
import HeroBildTest from "../images/hero-testing-phase.jpg";
import HeroBildIdiate from "../images/hero-ideation-phase.jpg";

const Head = ({ state, props }) => {
  return (
    <>
      <HeadContent>
        <div className="demo-wrap">
          {state.router.link === "/methodology/" ? (
            <>
              <img className="demo-bg" src={HeroBild} />
              <div className="demo-content">
                <h1>Methoden</h1>
                <p>
                  Hier findet Ihr alle Methoden, die wir für euch
                  zusammengestellt haben. Diese Methoden wurden speziell für den
                  Bereich "e-health" ausgewählt. Ihr könnt euch alle verfügbaren
                  Methoden anschauen, oder direkt nach der gewünschten Phase
                  filtern.
                </p>
              </div>
            </>
          ) : null}
          {state.router.link === "/methodology/page/2/" ? (
            <>
              <img className="demo-bg" src={HeroBild} />
              <div className="demo-content">
                <h1>Methoden</h1>
                <p>
                  Hier findet Ihr alle Methoden, die wir für euch
                  zusammengestellt haben. Diese Methoden wurden speziell für den
                  Bereich "e-health" ausgewählt. Ihr könnt euch alle verfügbaren
                  Methoden anschauen, oder direkt nach der gewünschten Phase
                  filtern.
                </p>
              </div>
            </>
          ) : null}

          {state.router.link === "/methodology/category/empathise/" ? (
            <>
              <img className="demo-bg" src={HeroBildEmpathise} />
              <div className="demo-content">
                <h1>Empathise</h1>
                <p>
                  Um das gigantische Spektrum von unterschiedlichen Menschen für
                  eHealth zu sensibilisieren und ihre Bedürfnisse klar
                  identifizieren zu können, müssen geeignete Methoden für den
                  Designprozess gewählt werden. Damit könnt ihr möglichst
                  unvoreingenommen und empathisch herausfinden, welche Probleme
                  in welchem Kontext bei eurer Zielgruppe auftreten. In diesem
                  Schritt werden also mögliche Stakeholder*innen eures Konzeptes
                  befragt, in ihrer Umgebung und im Kontext beobachtet und
                  analysiert.
                </p>
              </div>
            </>
          ) : null}
          {state.router.link === "/methodology/category/define/" ? (
            <>
              <img className="demo-bg" src={HeroBildDefine} />
              <div className="demo-content">
                <h1>Define</h1>
                <p>
                  Sobald die ersten Daten aus dem vorherigen Schritt vorliegen,
                  könnt ihr euch zuallererst mit diesen Daten vertraut machen
                  und euch gegebenenfalls schon der Analyse widmen. Es geht nun
                  darum, mögliche Muster und offensichtliche, sowie
                  unterschwellige Bedürfnisse der Stakeholder*innen zu
                  identifizieren und sie in eine für euer Team übersichtliche
                  Form zu bringen. Wie schon der erste Schritt sehr wichtig für
                  diesen Schritt war, sind die Ergebnisse, die ihr beim
                  Definieren der Bedürfnisse eurer möglichen Zielgruppen
                  erarbeitet, essenziell für die darauffolgende Arbeit und das
                  mögliche Konzept.
                </p>
              </div>
            </>
          ) : null}
          {state.router.link === "/methodology/category/prototype/" ? (
            <>
              <img className="demo-bg" src={HeroBildPrototype} />
              <div className="demo-content">
                <h1>Prototype</h1>
                <p>
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
                  eine Struktur in die Ideen zu bringen.
                </p>
              </div>
            </>
          ) : null}
          {state.router.link === "/methodology/category/test/" ? (
            <>
              <img className="demo-bg" src={HeroBildTest} />
              <div className="demo-content">
                <h1>Test</h1>
                <p>
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
                  Feedback reagieren zu können.
                </p>
              </div>
            </>
          ) : null}
          {state.router.link === "/methodology/category/ideate/" ? (
            <>
              <img className="demo-bg" src={HeroBildIdiate} />
              <div className="demo-content">
                <h1>Ideate</h1>
                <p>
                  Nun sind eure Ideen gefragt, um Lösungen für die Probleme der
                  Stakeholder*innen und Wege zu finden, ihre Bedürfnisse in euer
                  Konzeptdesign mit einfließen zu lassen. Hier geht es darum,
                  offen für die verrücktesten Ideen zu sein und dafür sollen
                  euch Methoden dienen, die Raum für kreative Vielfalt und
                  alternative Perspektiven geben können. Auch wenn ihr hier
                  zuallererst alle möglichen Ideen zur Problemlösung zulassen
                  solltet, ist es wichtig, diese Ideen mit Rücksicht auf euer
                  vorher bereits gesammeltes Wissen in diesem speziellen
                  medizinischen Kontext zu reflektieren und gegebenenfalls
                  anzupassen oder auszuschließen.
                </p>
              </div>
            </>
          ) : null}
        </div>
      </HeadContent>
    </>
  );
};

export default connect(Head);

const HeadContent = styled.div`
  .demo-wrap {
    top: 40px;
    height: 500px;
    overflow: hidden;
    position: relative;
    content: left;
  }

  .demo-bg {
    filter: brightness(30%);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }

  .demo-content {
    margin-top: 70px;
    position: absolute;
  }

  @media only screen and (max-width: 650px) {
    p {
      font-size: 3vw !important;
      position: relative !important;
    }
    h1 {
      font-size: 7vw !important;
      position: relative !important;
    }
    .demo-content {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 800px) {
    .demo-wrap {
      height: 65vw !important;
    }
  }

  h1 {
    margin: 4vw 4vw;
    font-size: 54px;
    color: white;
  }

  p {
    margin: 4vw 4vw;
    font-size: 18px;
    color: white;
    opacity: 1;
  }
`;
