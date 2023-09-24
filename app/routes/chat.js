import Route from '@ember/routing/route';

export default class ChatRoute extends Route {
  model(params, transition) {
    let currentUser = transition.to.queryParams['current-user'] || 'csallen';
    let username = params.username;

    const userMap = {
      csallen: {
        display_name: 'Courtland Allen',
        display_picture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_ibTLPyjwVebnZjMGKvz6ztarnuV2.webp?1694472104876',
      },
      channingallen: {
        display_name: 'Channing Allen',
        display_picture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_PWairgiOpneHvkGJri7RVbtORKI2.webp?1689703300131',
      },
      HelpStay: {
        display_name: 'Shay',
        display_picture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_tDOUNPCt56OY5voGhwJxT1iFnj82.webp?1691251548769',
      },
      goutham8: {
        display_name: 'Goutham',
        display_picture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_jk4udTil1vUsZWWZgH9W6emiI0U2.webp?1683385735709',
      },
      gwesterman: {
        display_name: 'Gordon Westerman',
        display_picture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_61tEWxEjhzVD42Gd5Lx6PQCUhiW2.webp?1693919932732',
      },
      aerovulpe: {
        display_name: 'Aaron Nwabuoku',
        display_picture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_Fpnxr5j7s0YXVCFxpsZWs0oN3Ac2.webp?1695569564831',
      },
      August_BK: {
        display_name: 'Raymond Chen',
        display_picture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/96x96_B66BJ8EXJEZZZnKmGVwBnd31ChL2.webp',
      },
    };

    return {
      username: currentUser,
      route: {
        name: 'direct-messages',
        chat_users: [username],
      },
      profile: userMap[currentUser],
    };
  }
}
