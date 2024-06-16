import { v4 as uuidv4 } from 'uuid'; // Для генерации уникального id

/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
interface Category {
     id: string
     name: string
     photo?: string
 }

interface Product {
     id: string
     name: string
     photo: string
     desc?: string
     createdAt: string
     oldPrice?: number
     price: number
     category: Category
 }

interface Operation {
     id:string
     name: string
     desc?: string
     createdAt: string
     category: Category
     amount: number
 }

interface Cost extends Operation {
    type: "Cost"
}

interface Profit extends Operation {
    type: 'Profit'
}

type OperationCostList = Record<string, string[]>;


/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    const id = uuidv4();
    const name = "Тапки";
    const photo='';
    const desc = "Просто ахринительные тапки";
    const price = Math.floor(Math.random() * 1000) + 1;
    const oldPrice = Math.floor(Math.random() * 900) + 1;
    const category: Category = {
        id: uuidv4(),
        name: 'Обувь'
    };
    return {
        id,
        name,
        desc,
        photo,
        createdAt,
        oldPrice,
        price,
        category
    };

};

// @ts-ignore
/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string):(Cost|Profit) => {


    const operationCostList:OperationCostList  = {
        'Повседневка': ['ЖКХ', 'Проездной', 'Штраф'],
        'Харчи': ['Магазин', 'Рестик', 'Столовая'],
        'Развлечения': ['Клубы', 'Путешествия', 'Видеоигры'],
    };
    const operationProfitList:OperationCostList = {
        'ЗП': ['ЗП', 'Аванс', 'Премия'],
        'Подарок': ['Откат', 'Подарок', 'Наследство'],
        'Рендом': ['Биток', 'Акции', 'Казино'],
    };

    const randomType: 'Cost'|'Profit' = Math.random() < 0.5 ? 'Cost' : 'Profit';

    const amount=Math.floor(Math.random() * 10000) + 1;
    const id=uuidv4()

    if (randomType === 'Cost') {
        const categories = Object.keys(operationCostList);
        const randomCategory:string = categories[Math.floor(Math.random() * categories.length)];
        const items = operationCostList[randomCategory];
        const randomItem = items[Math.floor(Math.random() * items.length)];

        const costCategory: Category = {
            id: uuidv4(),
            name: randomCategory
        }

        return {
            id: id,
            name: randomItem,
            amount: amount,
            createdAt,
            desc: "",
            category: costCategory,
            type: 'Cost'
        };
    } else {
        const categories = Object.keys(operationProfitList);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const items = operationProfitList[randomCategory];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        const profitCategory: Category = {
            id: uuidv4(),
            name: randomCategory
        }

        return {
            id: id,
            name: randomItem,
            amount: amount,
            createdAt,
            desc: "",
            category: profitCategory,
            type: 'Profit'
        };
    }

};
