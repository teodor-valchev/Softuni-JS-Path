function encodeAndDecodeMessages() {
  let allTextInputs = document.querySelectorAll("textarea");
  let input = allTextInputs[0];
  let recievedMessage = allTextInputs[1];

  let buttons = document.querySelectorAll("button");
  let encodeBtn = buttons[0];
  let decodeBtn = buttons[1];

  encodeBtn.addEventListener("click", encodeMsg);
  decodeBtn.addEventListener("click", decodeMsg);

  function decodeMsg() {
    let text = recievedMessage.value;
    let decodeMsg = [];
    for (let i = 0; i < text.length; i++) {
      let ascii = text.charCodeAt(i);
      decodeMsg.push(--ascii);
    }
    let newResult = decodeMsg.map((a) => String.fromCharCode(a));
    recievedMessage.value = newResult.join("");
  }

  function encodeMsg() {
    let text = input.value;
    let encodetMsg = [];
    for (let i = 0; i < text.length; i++) {
      let ascii = text.charCodeAt(i);
      encodetMsg.push(++ascii);
    }
    let newResult = encodetMsg.map((a) => String.fromCharCode(a));
    recievedMessage.value = newResult.join("");
    input.value = "";
  }
}
