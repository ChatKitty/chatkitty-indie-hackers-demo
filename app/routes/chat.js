import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';
import { loadChatUi } from '@chatkitty/ui';

export default class ChatRoute extends Route {
  model(params, transition) {
    let currentUser = transition.to.queryParams['current-user'] || 'csallen';
    let username = params.username;

    const userMap = {
      csallen: {
        displayName: 'Courtland Allen',
        displayPicture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_ibTLPyjwVebnZjMGKvz6ztarnuV2.webp?1694472104876',
      },
      channingallen: {
        displayName: 'Channing Allen',
        displayPicture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_PWairgiOpneHvkGJri7RVbtORKI2.webp?1689703300131',
      },
      HelpStay: {
        displayName: 'Shay',
        displayPicture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_tDOUNPCt56OY5voGhwJxT1iFnj82.webp?1691251548769',
      },
      goutham8: {
        displayName: 'Goutham',
        displayPicture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_jk4udTil1vUsZWWZgH9W6emiI0U2.webp?1683385735709',
      },
      gwesterman: {
        displayName: 'Gordon Westerman',
        displayPicture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_61tEWxEjhzVD42Gd5Lx6PQCUhiW2.webp?1693919932732',
      },
      aerovulpe: {
        displayName: 'Aaron Nwabuoku',
        displayPicture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_Fpnxr5j7s0YXVCFxpsZWs0oN3Ac2.webp?1695569564831',
      },
      August_BK: {
        displayName: 'Raymond Chen',
        displayPicture:
          'https://storage.googleapis.com/indie-hackers.appspot.com/avatars/96x96_B66BJ8EXJEZZZnKmGVwBnd31ChL2.webp',
      },
    };

    const model = {
      username: currentUser,
      route: {
        name: 'direct-messages',
        chatUsers: [username],
      },
      profile: userMap[currentUser],
    };

    scheduleOnce('afterRender', this, loadChat);

    function loadChat() {
      loadChatUi({
        widgetId: 'UoczKLBBvEyBFEF7',
        container: {
          height: '100%',
        },
        username: model.username,
        profile: model.profile,
        route: model.route,
      });
    }

    return model;
  }
}
