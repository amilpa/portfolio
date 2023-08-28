import ChatAppImage from "../assets/chatapp.png";
import NotesAppImage from "../assets/notesapp.jpeg";
import EcommerceImage from "../assets/sellfast.png";

export const Project_data = [
  {
    name: "React chat app",
    info: "Simple chat app with a single room.Users can join the room and chat with each other.",
    stack: "React , Node, Express, Socket.io",
    link: "https://react-chat-app-amilpa.vercel.app/",
    image: ChatAppImage,
  },
  {
    name: "React notes app",
    info: "Simple notes app where you can save notes to local storage with search feature.",
    stack: "Reactjs",
    link: "https://react-notes-app-tau.vercel.app",
    image: NotesAppImage,
  },
  {
    name: "Full stack ecommerce app",
    info: "Ecommerce app with full functionality.Users can add products to cart, place orders, pay with paypal, admin can add products, update products, delete products, update order status.",
    stack: "Nextjs(app router)",
    link: "https://sellfast.vercel.app",
    image: EcommerceImage,
  },
];
