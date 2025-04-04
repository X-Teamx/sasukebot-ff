const dir = [
  'https://telegra.ph/file/b9adf97d31978a00a7787.jpg', 
  'https://telegra.ph/file/2fa846ce8c9359b0092d7.jpg',     
  'https://telegra.ph/file/6a8ab1fe34f93aae3f705.jpg', 
  'https://telegra.ph/file/42087b9ea204939880d4a.jpg',     
  'https://telegra.ph/file/b06bdd3798266b1f86d6e.jpg', 
  'https://telegra.ph/file/fb9fcd57b577411eee006.jpg', 
  'https://telegra.ph/file/658cd04d10548d9670533.jpg', 
  'https://telegra.ph/file/ee1481dee967c8e3cde1e.jpg', 
  'https://telegra.ph/file/47a4f8f887ae1561b7c47.jpg', 
  'https://telegra.ph/file/f18942d19c0a9a0b18539.jpg', 
  'https://telegra.ph/file/60deab2bd702abb4f8d34.jpg', 
  'https://telegra.ph/file/e8b25fb07a257ef3eb0c8.jpg', 
  'https://telegra.ph/file/02d4138486949f8273f09.jpg', 
  'https://telegra.ph/file/1d245646515393e2b0359.jpg', 
  'https://telegra.ph/file/6e42c4c7eee15f02da0c7.jpg', 
  'https://telegra.ph/file/8fa39214045a978310d75.jpg', 
  'https://telegra.ph/file/674e07610a78ccbc5974d.jpg', 
  'https://telegra.ph/file/8f1fcd15376c853e5aba1.jpg', 
  'https://telegra.ph/file/5e01f5ebc803178ce6ee4.jpg', 
  'https://telegra.ph/file/88db5bdd9411418c36bdd.jpg', 
  'https://telegra.ph/file/f94ebe0ef5ed1cb8af68b.jpg', 
  'https://telegra.ph/file/6a0237e9814ceddeace45.jpg', 
  'https://telegra.ph/file/06088b7f54f59af2551f3.jpg', 
  'https://telegra.ph/file/8628e745ce475a18a04eb.jpg', 
  'https://telegra.ph/file/c03ad31a365b322fd6163.jpg', 
  'https://telegra.ph/file/5f205a2b780a200014830.jpg', 
  'https://telegra.ph/file/51062f89cc4fa267d2889.jpg', 
  'https://telegra.ph/file/96573398b03a86006e371.jpg', 
  'https://telegra.ph/file/dbe45d2c40db3b25496b7.jpg', 
  'https://telegra.ph/file/906aa4acdcf67653f1e3f.jpg', 
  'https://telegra.ph/file/419ce35592ca2f7ec8555.jpg', 
  'https://telegra.ph/file/676d15636248458426f25.jpg', 
  'https://telegra.ph/file/258c6f1acd6b738c9698d.jpg', 
  'https://telegra.ph/file/1ae8e4044f6e2b1606989.jpg',
  'https://telegra.ph/file/88da1c06766c9cdd2802b.jpg',
  'https://telegra.ph/file/95ec37677db65e23e45c6.jpg',
  'https://telegra.ph/file/a17c6a9f7e21d3ea4febe.jpg',
  'https://telegra.ph/file/5193a91f25b4ddceb34c0.jpg',
  'https://telegra.ph/file/cb58cb0a9dbdf01eaff4e.jpg',
  'https://telegra.ph/file/1303f5bfbe828ab434fab.jpg',
  'https://telegra.ph/file/1d245646515393e2b0359.jpg', 
  'https://telegra.ph/file/02d4138486949f8273f09.jpg', 
];

let handler = async (m, { conn }) => {
  const randomImage = dir[Math.floor(Math.random() * dir.length)];
  const buttons = [
    { buttonId: 'جوجوتسو', buttonText: { displayText: '⎔ المزيد ⎔' }, type: 1 },
  ];

  const buttonMessage = {
    image: { url: randomImage },
    caption: '*⎔↞┃خـلفـيات انـمي جـوجـوتـسـو🌑┃*',
    footer: 'انقر على الزر للحصول على المزيد.',
    buttons: buttons,
    headerType: 4,
  };

  await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.help = ['dado'];
handler.tags = ['game'];
handler.command = ['جوجوتسو', 'dados'];

export default handler;