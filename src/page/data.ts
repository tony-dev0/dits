import ASSETS from "../assets/images";

export const routes = [
  {
    path: "Home",
    link: "/",
  },
  {
    path: "Nav",
    link: "/about",
  },
  {
    path: "Service",
    link: "/services",
  },
  {
    path: "Pricing",
    link: "/pricing",
  },
  {
    path: "Contact",
    link: "/contact",
  },
];

export const blogs = [
  {
    name: "John Doe",
    role: "Frontend Design",
    blogimage: ASSETS.BLOG1,
    image: ASSETS.JOHN,
    title: "Kasd tempor diam sea justo dolor",
    text: "Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna",
    day: "03",
    month: "Jan",
  },
  {
    name: "Mary Doe",
    role: "Backend Design",
    blogimage: ASSETS.BLOG2,
    image: ASSETS.MARY,
    title: "Kasd tempor diam sea justo dolor",
    text: "Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna",
    day: "07",
    month: "Feb",
  },
  {
    name: "Kent Doe",
    role: "Backend Design",
    blogimage: ASSETS.BLOG1,
    image: ASSETS.JOHN,
    title: "Kasd tempor diam sea justo dolor",
    text: "Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna",
    day: "06",
    month: "Mar",
  },
];

export const plans = [
  {
    name: "Free",
    price: 0,
    features: [
      "10 users included",
      "2 GB of storage",
      "Email support",
      "Help center access",
    ],
  },
  {
    name: "Pro",
    price: 25,
    features: [
      "20 users included",
      "10 GB of storage",
      "Priority email support",
      "Help center access",
    ],
  },
  {
    name: "Business",
    price: 49,
    features: [
      "50 users included",
      "30 GB of storage",
      "Phone and email support",
      "Help center access",
    ],
  },
];

export const services = [
  {
    name: "Graphics Design",
    text: "Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam jorem ipsum dolor sit amet consec tetur adipisicing elit. Obcaecati, repellat.",
    image: ASSETS.GDN,
  },
  {
    name: "Web Development",
    text: "Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam jorem ipsum dolor sit amet consec tetur adipisicing elit. Obcaecati, repellat.",
    image: ASSETS.WEBDEV,
  },
  {
    name: "App Development",
    text: "Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam jorem ipsum dolor sit amet consec tetur adipisicing elit. Obcaecati, repellat.",
    image: ASSETS.APPDEV,
  },
  {
    name: "Hardware Repairs",
    text: "Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam jorem ipsum dolor sit amet consec tetur adipisicing elit. Obcaecati, repellat.",
    image: ASSETS.REPAIR,
  },
];

export const members = [
  {
    name: "Mac Anthony",
    role: "Chief Executive",
    photo: ASSETS.MAC,
  },
  {
    name: "Isaac Peter",
    role: "Senior Frontend Dev",
    photo: ASSETS.ISAAC,
  },
  {
    name: "Rose Mary",
    role: "Senior Backend Dev",
    photo: ASSETS.ROSE,
  },
  {
    name: "James Phil",
    role: "Hardware Technician",
    photo: ASSETS.JAMES,
  },
];

export const testimonials = [
  {
    name: "Charles Darlington",
    role: "IT Consultant",
    image: ASSETS.PERSON1,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
  },
  {
    name: "koma Darlington",
    role: "IT Consultant",
    image: ASSETS.PERSON2,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
  },
  {
    name: "serrc Darlington",
    role: "IT Consultant",
    image: ASSETS.PERSON3,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
  },
  {
    name: "babbz Darlington",
    role: "IT Consultant",
    image: ASSETS.PERSON4,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
  },

  {
    name: "king Darlington",
    role: "IT Consultant",
    image: ASSETS.PERSON1,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
  },
  {
    name: "Lady Darlington",
    role: "IT Consultant",
    image: ASSETS.PERSON2,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
  },
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  TouchMove: true,
  focusOnSelect: true,
  easing: "ease-in-out",
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2048,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
