import io from 'socket.io-client';
const socket = io('http://192.168.56.1:4000');

export const subscribeToTimer = cb => {
  try {
    socket.on('timer', timestamp => cb(null, timestamp));
    console.log('on timer');
    socket.emit('subscribeToTimer', 1500);
    console.log('subscribing');
  } catch (e) {
    console.log('e', e);
  }
};
