$("#send-form").on("submit", (event) => {
  event.preventDefault();
  let msg = $("<p>").html($("#msg").val());
  let msgBody = createMsgBody(msg);
  let bubble = createMsgBubble("sent", msgBody);
  $(".intro").text("");
  appendMessage(bubble);
  chooseResponse($("#msg").val());
  $("#msg").val("");
});

let appendMessage = (bubble) => {
  bubble.appendTo($(".chat-area"));
};

let chooseResponse = (msg) => {
  let defaultResponse =
    "hi, I'm a chatBot, so far I'm still stupid and I only know few responses";
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hola")) {
    return response("Hello, nice to have you here!");
  }
  response(defaultResponse);
};

let response = (responseMSG) => {
  $(".status").text("typing...");
  setTimeout(function () {
    let response = $("<p>").html(responseMSG);
    let msgBody = createMsgBody(response);
    let bubble = createMsgBubble("received", msgBody);
    appendMessage(bubble);
    $(".status").text("online");
  }, 2000);
};

let createMsgBubble = (classStr, msgBody) => {
  return (bubble = $("<div />", {
    class: "talk-bubble " + classStr,
    html: msgBody,
  }).append(createTimeStamp()));
};

let createMsgBody = (msg) => {
  return (msgBody = $("<div />", {
    class: "message-body",
    html: msg,
  }));
};

let createTimeStamp = () => {
  let d = new Date();
  let ampm = d.getHours() > 12 ? "pm" : "am";
  let hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  let mins = d.getMinutes() > 10 ? d.getMinutes() : `0${d.getMinutes()}`;
  return (span = $("<span />")
    .addClass("time-stamp")
    .html(hours + ":" + mins + " " + ampm));
};
