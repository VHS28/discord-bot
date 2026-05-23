const statusElement = document.getElementById('status');
const eventsElement = document.getElementById('events');

async function loadEvents() {
  try {
    statusElement.textContent = 'Lade Daten...';

    const response = await fetch('/api/public/member-events');

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const events = await response.json();

    if (!Array.isArray(events) || events.length === 0) {
      statusElement.textContent = 'Keine Events vorhanden.';
      return;
    }

    statusElement.textContent = '';

    for (const event of events) {
      const item = document.createElement('li');

      item.className = 'event';

      item.textContent =
        `${event.type} - ${event.createdAt}`;

      eventsElement.appendChild(item);
    }
  } catch (error) {
    console.error(error);

    statusElement.textContent =
      'Fehler beim Laden der Events.';
  }
}

loadEvents();