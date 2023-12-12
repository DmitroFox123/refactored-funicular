import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  typesRepresents: [
    {
      name: "Электроника",
      type: "electronic",
      img: "electronicRepr.png",
    },
    {
      name: "Для дома",
      type: "for house",
      img: "forHouse.avif",
    },
    {
      name: "Игрушки",
      type: "toys",
      img: "toysRepr.jpg",
    },
    {
      name: "Еда",
      type: "food",
      img: "foodRepr.jpg",
    },
    {
      name: "Мебель",
      type: "furniture",
      img: "furnitureRepr.png",
    },
    {
      name: "Одежда",
      type: "clothes",
      img: "clothesRepr.webp",
    },
    {
      name: "Для животных",
      type: "animals",
      img: "forAnimals.avif",
    },
  ],
  products: [
    {
      id: 0,
      name: "Ноутбук",
      description:
        "Игровой ноутбук (для учёбы, да-да)",
      characteristics: ["Экран: 17.3 » 1920×1080 p, IPS 144 Гц, 300 кд/м2", "Процессор: Intel Core-i7 10750H 6 -ядерный, 2.6 ГГц — 5.0 ГГц, Comet Lake", "Видеокарта: Дискретная NVIDIA GeForce GTX 1660Ti 6 ГБ GDDR6", "Память: ОЗУ 16 ГБ DDR4 , SSD 512 ГБ"],
      type: "electronic",
      img: "ноут.png",
      price: 150,
    },
    {
      id: 1,
      name: "Мышка",
      description:
        "Мышка игровая ",
      characteristics: ["Тип соединения: проводная", "Тип датчика: оптический", "Форма: дял правшей", "Конструкция мыши: классическая"],
      type: "electronic",
      img: "мыша.jpg",
      price: 40,
    },
    {
      id: 2,
      name: "Доместос",
      description:
        "Чи­стя­щее сред­ство «Domestos» Све­жесть Ат­лан­ти­ки, 750 мл",
      characteristics: ["Форма выпуска: гель", "Действие: дезинфекция, удаление известкового налета, удаление плесени", "Отдушка: без отдушки", "Объем: 750 мл"],
      type: "for house",
      img: "доместос.png",
      price: 8,
    },
    {
      id: 3,
      name: "Посудомойка",
      description:
        "Встраиваемая посудомоечная машина Miele G 5150 SCVi Active",
      characteristics: ["загрузка на 14 комплектов посуды", "электронное управление, 5 программ", "59.8x55x80.5 см", "сушка: стандартная (конденсация), индикация на полу: нет"],
      type: "for house",
      img: "посудомойка.jpg",
      price: 400,
    },
    {
      id: 4,
      name: "Конструктор Лего",
      description:
        "LEGO: Toyota GR Supra Speed Champions 76901",
      characteristics: ["Артикул: 76901", "Бренд: LEGO", "Возраст: 7+", "Количество деталей: 229"],
      type: "toys",
      img: "лего.jpg",
      price: 25,
    },
    {
      id: 5,
      name: "Плюшевая игрушка",
      description:
        "Плюшевая игрушка волк",
      characteristics: ["Мягкая игрушки", "Возраст: 0+", "Производитель: Hasbro", "Цвет: серый"],
      type: "toys",
      img: "ауф.jpg",
      price: 25,
    },
    {
      id: 6,
      name: "Киндер сюрприз",
      description:
        "Шоколадное яйцо Киндер сюрприз",
      characteristics: ["Состав: шоколад молочный", "Внутри игрушка", "Категория: 3+", "Очень вкусное"],
      type: "food",
      img: "киндер.jpg",
      price: 5,
    },
    {
      id: 7,
      name: "Чай",
      description:
        "Чай Curtis",
      characteristics: ["ягодно-цветочный чай", "Масса: 100 г", "Тип: В пакетиках", "Очень вкусный"],
      type: "food",
      img: "ннчай.jpg",
      price: 30,
    },
    {
      id: 8,
      name: "Диван",
      description:
        "Большой мягкий диван",
      characteristics: ["Мягкий", "Цвет: серый", "Размеры: 2x0.75x1", "Раскладывается в двуспальную кровать"],
      type: "furniture",
      img: "канапа.jpg",
      price: 100,
    },
    {
      id: 9,
      name: "Столик",
      description:
        "Маленький стильный столик",
      characteristics: ["Размеры: 1х1х0.75", "Цвет: чёрный", "Материал: дерево", "выдерживает: 350Н"],
      type: "furniture",
      img: "стіл.jpg",
      price: 400,
    },
    {
      id: 10,
      name: "Худи",
      description:
        "Чёрное комфортное худи оверсайз",
      characteristics: ["Цвет: чёрный", "Материал: хлопок", "Размер: XL", "Есть капюшон"],
      type: "clothes",
      img: "худи.jpg",
      price: 100,
    },
    {
      id: 11,
      name: "Джинсы",
      description:
        "Джинсы светлые",
      characteristics: ["Цвет: ярко-синий", "Материал: лён", "Размер: L", "Пол: Жен"],
      type: "clothes",
      img: "джинсы.webp",
      price: 100,
    },
    {
      id: 12,
      name: "Китикет",
      description:
        "Кошачий корм китикет",
      characteristics: ["3 шт", "70г - один пакетик", "Вкус: курица", "Оптом - скидка 30%"],
      type: "animals",
      img: "китикет.jpg",
      price: 100,
    },
  ],
  product: {},
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getTypeFormStorage(state, action) {
      let type = localStorage.getItem("type");

      if (!type) return;

      state.type = type;
    },
    setType(state, action) {
      state.type = action.payload;
      localStorage.setItem("type", action.payload);
    },
    getProductFromLocalStorage(state, action) {
      let product = localStorage.getItem("product");

      if (!product) return;

      state.product = JSON.parse(product);
    },
    setProduct(state, action) {
      state.product = action.payload;
      localStorage.setItem("product", JSON.stringify(action.payload));
    },
  },
});

export const {
  setType,
  getTypeFormStorage,
  setProduct,
  getProductFromLocalStorage,
} = ProductSlice.actions;

export const ProdutsReducers = ProductSlice.reducer;
