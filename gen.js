const fs = require('fs');
const { SERVERS } = require('/tmp/bot-app/servers.js');
const body = ['#profile-title: Blogvpn', ...SERVERS.map(s => s.link.split('#')[0] + '#' + encodeURIComponent(s.name))].join('\n');
const b64 = Buffer.from(body, 'utf8').toString('base64');
for (let i = 1; i <= 500; i++) {
  fs.writeFileSync(`subs/${String(i).padStart(4,'0')}.txt`, b64 + '\n');
}
fs.writeFileSync('index.html', '<!doctype html><meta charset="utf-8"><title>Blogvpn</title><h1>Blogvpn subscription host</h1>');
console.log('files:', 500, 'bytes each:', b64.length);
