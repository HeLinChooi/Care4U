const today = new Date();
const yesterday = new Date(today);
const about30daysBeforeYesterday = new Date(today);
const about60daysBeforeYesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);
about30daysBeforeYesterday.setDate(yesterday.getDate() - 30);
about60daysBeforeYesterday.setDate(yesterday.getDate() - 60);

const nftList = [
  {
    title: "Regular Health Check NFT",
    date: new Date(),
    reason: "For usual check-up",
    accessorName: "Alicer Ng",
    redirect: true,
  },
  // {
  //   title: "Regular Visit NFT",
  //   date: yesterday,
  //   reason: "Review before visit",
  //   accessorName: "Lim Teck Tian",
  //   redirect: true
  // },
  {
    title: "Regular Health Check NFT",
    date: about30daysBeforeYesterday,
    reason: "For usual medical check-up",
    accessorName: "Summer Lim",
    redirect: true,
  },
  {
    title: "Leukaemia Report",
    date: about60daysBeforeYesterday,
    reason: "Treatment",
    accessorName: "Vincent Lim",
    redirect: true,
  },
];
export default nftList;
