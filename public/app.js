const statusElement = document.getElementById("status");
const eventsElement = document.getElementById("events");

function formatEventType(type) {
  if (type === "join") {
    return "Beigetreten";
  }

  if (type === "leave") {
    return "Verlassen";
  }

  return type;
}

function formatTimestamp(timestamp) {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(timestamp));
}

async function loadEvents() {
  try {
    statusElement.textContent = "Lade Daten...";
    eventsElement.replaceChildren();

    const response = await fetch("/api/public/member-events");

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const payload = await response.json();
    const events = Array.isArray(payload.events) ? payload.events : [];

    if (events.length === 0) {
      statusElement.textContent = "Keine Events vorhanden.";
      return;
    }

    statusElement.textContent = "";

    for (const event of events) {
      const item = document.createElement("li");

      item.className = "event";
      item.textContent = `${formatEventType(event.type)}: ${event.displayName} - ${formatTimestamp(event.occurredAt)}`;

      eventsElement.appendChild(item);
    }
  } catch (error) {
    console.error(error);

    statusElement.textContent = "Fehler beim Laden der Events.";
  }
}

loadEvents();
