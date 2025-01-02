/**
Implement a function to filter rows of data matching a specified requirement.
 */

function setHasOverlap(setA, setB) {
  for (const value of Array.from(setA)) {
    if (setB.has(value)) {
      return true;
    }
  }
  return false;
}

export default function selectData(sessions, options) {
  const reversedSessions = sessions.slice().reverse();
  const sessionsForUser = new Map();
  const sessionProcessed = [];

  reversedSessions.forEach((session) => {
    if (options?.merge && sessionsForUser.has(session.user)) {
      const userSession = sessionsForUser.get(session.user);

      userSession.duration += session.duration;

      session.equipment.forEach((equipment) => {
        userSession.equipment.add(equipment);
      });
    } else {
      const clonedSession = {
        ...session,
        equipment: new Set(session.equipment),
      };

      if (options?.merge) {
        sessionsForUser.set(session.user, clonedSession);
      }

      sessionProcessed.push(clonedSession);
    }
  });

  sessionProcessed.reverse();

  const results = [];
  const optionEquipments = new Set(options?.equipment);

  sessionProcessed.forEach((session) => {
    if (
      (options?.user != null && options?.user != session.user) ||
      (optionEquipments.size > 0 &&
        !setHasOverlap(optionEquipments, session.equipment)) ||
      (options?.minDuration != null && options?.minDuration > session.duration)
    ) {
      return;
    }

    results.push({
      ...session,
      equipment: Array.from(session.equipment).sort(),
    });
  });

  return results;
}
