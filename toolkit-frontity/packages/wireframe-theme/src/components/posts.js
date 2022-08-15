import { COLORS } from "./workshop-tool/colors";

export var Posts = (data) => {

  console.log(data);
  var postArray = [];

  let pause = {
    id: 0,
    title: "Pause",
    duration: "15",
    tip: "Denke daran, genug Pausen einzuplanen!",
    status: "not-in-plan",
    color: COLORS.green
  };
  postArray.push(pause);

  let greeting = {
    id: 1,
    title: "Begrüßung",
    duration: "15",
    tip: "Erkläre den Teilnehmern den Ablauf und das Ziel des Workshops.",
    status: "not-in-plan",
    color: COLORS.green
  };
  postArray.push(greeting);

  let icebreaker = {
    id: 2,
    title: "Ice-Breaker",
    duration: "15",
    tip: "Es ist ratsam, das Eis zu brechen, um die Stimmung optimal für den Workshop vorzubereiten.",
    status: "not-in-plan",
    color: COLORS.green
  };
  postArray.push(icebreaker);

  let goodbye = {
    id: 3,
    title: "Verabschiedung",
    duration: "15",
    tip: "Verabschiede die Teilnehmer und bedanke dich herzlich für deren Teilnahme!",
    status: "not-in-plan",
    color: COLORS.green
  };
  postArray.push(goodbye);

  let prasentation = {
    id: 4,
    title: "Präsentation",
    duration: "45",
    tip: "Lasse die Teilnehmer gesammelte Daten präsentieren",
    status: "not-in-plan",
    color: COLORS.green
  };
  postArray.push(prasentation);

  let gather = {
    id: 5,
    title: "Sammeln & Strukturieren",
    duration: "30",
    tip: "Lasse die Teilnehmer bisher gesammelte Ergebnisse reflektieren und aufarbeiten",
    status: "not-in-plan",
    color: COLORS.green
  };
  postArray.push(gather);

  Object.keys(data).map(function (key, index) {
    let post = {
      id: data[key].id,
      title: data[key].title.rendered,
      duration: data[key].duration,
      tip: data[key].tip == undefined ? "Keine Tips" : data[key].tip,
      status: "not-in-plan",
      color: getColor(data[key].categories[0])
    };

    postArray.push(post);
  });

  return postArray;
};

function getColor(cat) {
  switch (cat) {
    case 3:
      return COLORS.blue;
    case 5:
      return COLORS.pink;
    case 6:
      return COLORS.red;
    case 7:
      return COLORS.violet;
    case 8:
      return COLORS.yellow;
    default:
      return COLORS.green;
  }
}
