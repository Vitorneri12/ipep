import { Conversation } from "https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.11.1/+esm";

const AGENT_ID = "agent_9101kh9ct3aefpht31m5easjef62";
const FALLBACK = "No momento estou com dificuldade de conexão. Fale com um especialista pelo WhatsApp logo abaixo ou tente novamente em instantes.";

const messagesEl = document.getElementById("aiChatMessages");
const typingEl = document.getElementById("aiChatTyping");
const formEl = document.getElementById("aiChatForm");
const inputEl = document.getElementById("aiChatInput");
const sendEl = document.getElementById("aiChatSend");

let conversation = null;
let connecting = false;

function addMessage(text, who) {
  const el = document.createElement("div");
  el.className = "ai-msg " + who;
  el.textContent = text;
  messagesEl.appendChild(el);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return el;
}

function setTyping(on) {
  typingEl.hidden = !on;
  if (on) messagesEl.scrollTop = messagesEl.scrollHeight;
}

function setBusy(on) {
  sendEl.disabled = on;
}

async function ensureSession() {
  if (conversation) return conversation;
  if (connecting) return null;
  connecting = true;
  try {
    conversation = await Conversation.startSession({
      agentId: AGENT_ID,
      connectionType: "websocket",
      textOnly: true,
      onMessage: ({ source, message }) => {
        if (source === "ai") {
          setTyping(false);
          setBusy(false);
          addMessage(message, "agent");
        }
      },
      onError: () => {
        setTyping(false);
        setBusy(false);
        addMessage(FALLBACK, "agent");
      },
      onDisconnect: () => {
        conversation = null;
        setTyping(false);
        setBusy(false);
      }
    });
    return conversation;
  } catch (e) {
    setTyping(false);
    setBusy(false);
    addMessage(FALLBACK, "agent");
    return null;
  } finally {
    connecting = false;
  }
}

formEl.addEventListener("submit", async function (event) {
  event.preventDefault();
  const text = inputEl.value.trim();
  if (!text || sendEl.disabled) return;
  inputEl.value = "";
  addMessage(text, "user");
  setBusy(true);
  setTyping(true);
  const session = await ensureSession();
  if (!session) return;
  try {
    session.sendUserMessage(text);
  } catch (e) {
    setTyping(false);
    setBusy(false);
    addMessage(FALLBACK, "agent");
  }
});

inputEl.addEventListener("input", function () {
  if (conversation) {
    try { conversation.sendUserActivity(); } catch (e) {}
  }
});
