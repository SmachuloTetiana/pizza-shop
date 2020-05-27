import {
  ADD_TO_BASKET,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_ITEM,
} from "store/types";

const initialState = {
  data: [
    {
      id: 1,
      title: "Піца Баварська",
      description: "Ковбаски баварські, Соус Барбекю, Пармезан, Моцарела",
      price: 139.5,
      image:
        "https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%91%D0%B0%D0%B2%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F_300dpi.jpg",
    },
    {
      id: 2,
      title: "Піца П'ять Сирів",
      description:
        "Соус Альфредо, Бергадер Блю, Фета, Пармезан, Моцарела, Чеддер",
      price: 179.5,
      image:
        "https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D1%8F%D1%82%D1%8C_%D1%81%D1%8B%D1%80%D0%BE%D0%B2_300dpi.jpg",
    },
    {
      id: 3,
      title: "Піца Карбонара",
      description: "Соус Альфредо, Бекон, Шинка, Гриби, Цибуля, Моцарела",
      price: 139.5,
      image:
        "https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9A%D0%B0%D1%80%D0%B1%D0%BE%D0%BD%D0%B0%D1%80%D0%B0_300dpi.jpg",
    },
    {
      id: 4,
      title: "Піца Тоскана",
      description:
        "Соус Альфредо, Курка, Фета, Моцарела, Помідори чері, Шпинат",
      price: 164.5,
      image:
        "https://media.dominos.ua/menu/product_osg_image_mobile/2018/05/20/toskana_960.jpg",
    },
    {
      id: 5,
      title: "Піца Овочева Феєрія",
      description:
        "Соус Domino's, Гриби, Оливки, Цибуля, Помідори, Болгарський перець, Моцарела",
      price: 139.5,
      image:
        "https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%BE%D0%B2%D0%BE%D1%87%D1%8D%D0%B2%D0%B0_%D1%84%D1%8D%D0%B5%D1%80%D0%B8%D1%8F_300dpi.jpg",
    },
  ],
  chooseData: [],
  total: 0,
};

export const products = (state = initialState, action) => {
  let newArr;

  switch (action.type) {
    case ADD_TO_BASKET:
      const { quantity = 1 } = state.chooseData;

      newArr = [
        ...state.chooseData,
        { ...action.products, quantity: quantity },
      ];

      return {
        ...state,
        chooseData: newArr,
        total: newArr.reduce((obj, { price }) => obj + price, 0),
      };

    case INCREMENT_QUANTITY:
      newArr = state.chooseData.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        chooseData: newArr,
        total: newArr.reduce(
          (obj, { price, quantity }) => obj + price * quantity,
          0
        ),
      };

    case DECREMENT_QUANTITY:
      newArr = state.chooseData.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return {
        ...state,
        chooseData: newArr,
        total: newArr.reduce(
          (obj, { price, quantity }) => obj - price * quantity,
          0
        ),
      };

    case DELETE_ITEM:
      newArr = state.chooseData.filter((item) => item.id !== action.id);
      return {
        ...state,
        chooseData: newArr,
        total: newArr.reduce((obj, { price }) => obj + price, 0),
      };

    default:
      return state;
  }
};
