// import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node';

// const aj = arcjet({
//   key: process.env.ARCJET_KEY,
//   rules: [
//     shield({ mode: 'LIVE' }),
//     detectBot({
//       mode: 'LIVE',
//       allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
//     }),
//     slidingWindow({
//       mode: 'LIVE',
//       interval: '2s',
//       max: 5,
//     }),
//   ],
// });

// export default aj;

import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node';

let aj;

if (process.env.NODE_ENV === 'test') {
  aj = {
    protect: async () => ({
      isDenied: () => false,
      reason: {},
    }),
  };
} else {
  aj = arcjet({
    key: process.env.ARCJET_KEY,
    rules: [
      shield({ mode: 'LIVE' }),
      detectBot({
        mode: 'LIVE',
        allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
      }),
      slidingWindow({
        mode: 'LIVE',
        interval: '2s',
        max: 5,
      }),
    ],
  });
}

export default aj;
