var express = require('express');
var router = express.Router();

const LIST_MUSICS = [
  {
    id: 1,
    title: 'Heat Waves',
    duration: '3\'56\'\'',
    views: '614 Millions',
    link: 'https://www.youtube.com/watch?v=mRD0-GxqHVo'
  },
  {
    id: 2,
    title: 'Bitch',
    
    duration:'4\'49\'\'',
    views:'39 Millions',
    link:'https://www.youtube.com/watch?v=M3iGcTxw5d4'
  },
  {
    id: 3,
    title: 'Powerfull',
    duration:'3\'28\'\'',
    views:'142 Millions',
    link:'https://www.youtube.com/watch?v=o6b9JpBFjd4'
  },
  {
    id: 4,
    title: 'Secrets',
    duration:'3\'39\'\'',
    budget:'284 Millions',
    link:'https://www.youtube.com/watch?v=Dr1nN__-2Po'
  },
  {
    id: 5,
    title: 'Glorious',
    duration:'4\'14\'\'',
    budget:'271 Millions',
    link:'https://www.youtube.com/watch?v=7OrLroFa0AI'
  },
];

router.get('/', (req, res, next) => {
  console.log('GET /musics');
  res.json(LIST_MUSICS);
});

module.exports = router;
