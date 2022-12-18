const today = new Date();
const yesterday = new Date(today);
const dayBeforeYesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);
dayBeforeYesterday.setDate(yesterday.getDate() - 5);

const nftAccessLog = [
  {
    title: "Regular Health Check NFT",
    date: new Date(),
    reason: "For emergency",
    accessorName: "Summer Lim",
    redirect: false,
  },
  {
    title: "Regular Health Check NFT",
    date: yesterday,
    reason: "Review before visit",
    accessorName: "Aaron Khor",
    redirect: false,
  },
  {
    title: "Recovery NFT",
    date: dayBeforeYesterday,
    reason: "For regular bookkeeping",
    accessorName: "Summer Lim",
    redirect: false,
  },
];
export default nftAccessLog;
