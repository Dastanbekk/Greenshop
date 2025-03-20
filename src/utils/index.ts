import type { TitleCategoryType } from "../@types";
export const title_category: TitleCategoryType[] = [
  {
    id: 1,
    title: "All Plants",
    label: "all-plants",
  },
  {
    id: 2,
    title: "New Arrivals",
    label: "new-arrivals",
  },
  {
    id: 3,
    title: "Sale",
    label: "sale",
  },
];
// export const reklama_products: ReklamaProducts[] = [
//   {
//     id: 1,
//     image:
//       "https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dh6l6TwcPoreP58bFj3h4Tzp7IzOdEeCaG5V8CPWUvm9pwQbKYEXV0AMH0jVyiDwQetqFeBBjacwpoH9wsopiOwuX~WTYwWa0164RAmommmsj3f~nkewD51tNwXhtlu1E8ZkcjA1Uv-Vrn7M3WlHt~jzu6Kg~1bG5C8g4dTiVsstWcrw9zzsR5aDf4HmSrAR~hPCFoC1s6x0S0DJXYN87eolT9OO8ne6iYHV3y7AzutxNy3cr~0z2m3ye4hp0IEEAz1ZetupuRmPv2ANerlcJy5g6aBm-lG9Mw5ZRlU7~1zSK8HOvwQ7FnrP4SW-mbuNtDtzE-1~k9LIqK~IMfb2kQ__",
//     title: "SUMMER CACTUS & SUCCULENTS",
//     desc: "We are an online plants shop offering a wide range of cheap and trendy plants",
//   },
//   {
//     id: 2,
//     image:
//       "https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hiUiIoCV~sCs1UWBllkBmY9aSBavgGMfHOEV-PemihowWdbFYQp~WjnMA2mDVoxZaBJpfgk-~~ZOy31fzEPT8SaKjZLEYJnoSQGxqv09Pbl30JzplW3bPbmrX7-hxxJ56gyZ3pwa3GVMqAGB9oPdaWN8dFsegV0xhRuQI9Qz4c4YLu4APVrntB6lkGu~WZaqa5NbiUtqIztaifrPym6Ae9zHF2iyBLazi6K7QrP1bu67IZSNuB4c6ld~DzvAf2MAGWPFeNQ0L9EXpQPuOTzb5vnyQRJbwSNJ0ffpkU4UhcylIDhRWwvA7C49BpheElry7TOobDEb~YPRYsH0wDl95g__",
//     title: "Styling Trends & much more",
//     desc: "We are an online plant shop offering a wide range of cheap and trendy plants",
//   },
// ];
import type {
  AdviceMockItemType,
  FooterLinksType,
  HeroCarouselType,
  InfoMockItemType,
  PostMockItemType,
} from "../@types";
import post from "../assets/img/post.png";
import post1 from "../assets/img/post1.png";
import post2 from "../assets/img/post2.png";
import post3 from "../assets/img/post3.png";
import info from "../assets/img/info.png";
import info1 from "../assets/img/info1.png";
// import vektor from "../assets/img/vektor.png";
import advice from "../assets/img/advice.png";
import advice1 from "../assets/img/advice1.png";
import advice2 from "../assets/img/advice2.png";
export const hero_carousel: HeroCarouselType[] = [
  {
    id: 1,
    title: "Le’s Make a Better",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "SHOP NOW",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 2,
    title: "LET'S LIVE IN A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "LE'TS START",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 3,
    title: "LET'S OBSERVE A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "GET CREDITS",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
];
export const post_item: PostMockItemType[] = [
  {
    id: 1,
    title: "Cactus & Succulent Care Tips",
    subTitle: "September 12  I Read in 6 minutes",
    description:
      "Cacti are succulents are easy care plants for any home or patio. ",
    img: post,
  },
  {
    id: 2,
    title: "Top 10 Succulents for Your Home",
    subTitle: "September 12  I Read in 6 minutes",
    description: "Best in hanging baskets. Prefers medium to high light.",
    img: post1,
  },
  {
    id: 3,
    title: "Cacti & Succulent Care Tips",
    subTitle: "September 15  I Read in 3 minutes",
    description:
      "Cacti and succulents thrive in containers and because most are.. ",
    img: post2,
  },
  {
    id: 4,
    title: "Best Houseplants Room by Room",
    subTitle: "September 15  I Read in 2 minutes",
    description: "The benefits of houseplants are endless. In addition to..",
    img: post3,
  },
];
export const info_item: InfoMockItemType[] = [
  {
    id: 0,
    title: "Summer cactus & succulents",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: info,
  },
  {
    id: 1,
    title: "STYLING TRENDS & MUCH MORE",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: info1,
  },
];
export const footer_links: FooterLinksType[] = [
  {
    id: 1,
    title: "My Account",
    link1: "My Account",
    link2: "Address",
    link3: "Wishlist",
  },
  {
    id: 2,
    title: "Help Center",
    link1: "How to Buy",
    link2: "Shipping & Delivery",
    link3: "Product Policy",
    link4: "How to Return",
  },

  {
    id: 3,
    title: "Categories",
    link1: "House Plants",
    link2: "Potter Plants",
    link3: "Seeds",
    link4: "Small Plants",
    link5: "Accessories",
  },
];
export const advice_item: AdviceMockItemType[] = [
  {
    id: 0,
    title: "Garden Care",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice,
    border: true,
  },
  {
    id: 1,
    title: "Plant Renovation",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice1,
    border: true,
  },
  {
    id: 2,
    title: "Watering Graden",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice2,
    border: false,
  },
];
