// Sample job data matching the design
export const initialJobs = [
  {
    id: 1,
    title: '美髮設計師',
    level: 'LEVEL III',
    years: 3,
    stats: {
      totalClients: 1400,
      totalRevenue: 520200,
      totalHours: 1950600
    },
    services: [
      { name: '洗頭', price: 200 },
      { name: '洗剪', price: 600 },
      { name: '剪染', price: 2000 },
      { name: '剪燙', price: 3000 }
    ],
    color: 'orange'
  },
  {
    id: 2,
    title: '美甲師',
    level: 'LEVEL III',
    years: 2,
    stats: {
      totalClients: 30000,
      totalRevenue: 6600,
      totalHours: 88
    },
    services: [
      { name: '去色', price: 200 },
      { name: '單色', price: 800 },
      { name: '雙色', price: 2000 }
    ],
    color: 'orange'
  },
  {
    id: 3,
    title: '霧眉師',
    level: 'LEVEL III',
    years: 1,
    stats: {
      totalClients: 111,
      totalRevenue: 14000,
      totalHours: 500
    },
    services: [
      { name: '單眉', price: 700 },
      { name: '雙眉', price: 900 },
      { name: '補眉', price: 2000 },
      { name: '染眉', price: 2300 }
    ],
    color: 'orange'
  }
];
